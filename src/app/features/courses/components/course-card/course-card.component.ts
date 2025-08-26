// features/courses/components/course-card/course-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Course } from '../../models/course.interface';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course!: Course;

  getImageClass(): string {
    if (this.course.category.includes('Sanación Pránica')) return 'pranic-healing';
    if (this.course.category.includes('Yoga Arhatic')) return 'arhatic-yoga';
    if (this.course.category.includes('Psicoterapia')) return 'psychotherapy';
    return '';
  }

  getCourseIcon(): string {
    if (this.course.category.includes('Sanación Pránica')) {
      return `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>`;
    }
    if (this.course.category.includes('Yoga Arhatic')) {
      return `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
      </svg>`;
    }
    return `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>`;
  }

  getLevelClass(): string {
    const level = this.course.level.toLowerCase();
    if (level.includes('básico')) return 'basic';
    if (level.includes('intermedio')) return 'intermediate';
    if (level.includes('avanzado')) return 'advanced';
    if (level.includes('especialización')) return 'specialization';
    return 'basic';
  }

  getFormatClass(): string {
    return this.course.format.toLowerCase().replace('í', 'i');
  }

  getStarArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  getNextSchedule() {
    const now = new Date();
    return this.course.schedule
      .filter(s => s.startDate > now)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())[0];
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-CO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }

  getCurrentPrice(): number {
    const now = new Date();
    const earlyDeadline = this.course.pricing.earlyDeadline;
    
    if (earlyDeadline && now <= earlyDeadline) {
      return this.course.pricing.early;
    }
    
    return this.course.pricing.regular;
  }

  hasEarlyDiscount(): boolean {
    const now = new Date();
    const earlyDeadline = this.course.pricing.earlyDeadline;
    return earlyDeadline ? now <= earlyDeadline : false;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO').format(price);
  }

  enrollNow() {
    // Implementar lógica de inscripción
    console.log('Inscribiendo en curso:', this.course.title);
  }

  getAvailabilityInfo() {
    const totalSeats = this.course.schedule[0]?.totalSpots || 0;
    const enrolledStudents = this.course.enrollmentCount || 0;
    const availableSeats = totalSeats - enrolledStudents;
    const percentage = totalSeats > 0 ? (enrolledStudents / totalSeats) * 100 : 0;

    if (percentage >= 90) {
      return {
        show: true,
        class: 'full',
        text: '¡Últimos cupos!'
      };
    } else if (percentage >= 70) {
      return {
        show: true,
        class: 'limited',
        text: 'Cupos limitados'
      };
    } else if (this.course.status === 'Próximamente') {
      return {
        show: true,
        class: 'new',
        text: '¡Próximamente!'
      };
    }

    return { show: false };
  }
}