// features/courses/components/course-detail/course-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="course-detail-page">
      <div class="course-header">
        <h1>{{ course?.title }}</h1>
        <p>{{ course?.subtitle }}</p>
      </div>
      
      @if (course) {
        <div class="course-content">
          <div class="course-info">
            <p>{{ course.description }}</p>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .course-detail-page {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .course-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .course-header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .course-header p {
      font-size: 1.1rem;
      color: #718096;
    }

    .course-content {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .course-info p {
      color: #4a5568;
      line-height: 1.6;
      font-size: 1.1rem;
    }
  `]
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.coursesService.getCourseById(courseId).subscribe(course => {
        this.course = course;
      });
    }
  }
}

