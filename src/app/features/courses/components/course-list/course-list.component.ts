// features/courses/components/course-list/course-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseFiltersComponent } from '../course-filters/course-filters.component';
import { Course, CourseFilters } from '../../models/course.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, CourseFiltersComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  onFiltersChange(filters: CourseFilters) {
    // Implementar lógica de filtrado
    this.filteredCourses = this.courses;
  }
}

