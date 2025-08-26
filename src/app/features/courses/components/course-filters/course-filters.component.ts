// features/courses/components/course-filters/course-filters.component.ts
import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesService, CourseFilters } from '../../services/courses.service';
import { CourseLevel, CourseFormat, CourseCategory } from '../../models/course.interface';

@Component({
  selector: 'app-course-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-filters.component.html',
  styleUrls: ['./course-filters.component.css']
})
export class CourseFiltersComponent implements OnInit {
  @Output() filtersChange = new EventEmitter<CourseFilters>();

  // Signals para estado del componente
  selectedLevels = signal<CourseLevel[]>([]);
  selectedFormats = signal<CourseFormat[]>([]);
  selectedCategories = signal<CourseCategory[]>([]);
  selectedInstructors = signal<string[]>([]);

  // Propiedades para formulario
  searchTerm = '';
  priceMin: number | null = null;
  priceMax: number | null = null;

  // Datos disponibles
  availableLevels: CourseLevel[] = [];
  availableFormats: CourseFormat[] = [];
  availableCategories: CourseCategory[] = [];
  availableInstructors: string[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.availableLevels = this.coursesService.getCourseLevels();
    this.availableFormats = this.coursesService.getCourseFormats();
    this.availableCategories = this.coursesService.getCourseCategories();
    this.availableInstructors = this.coursesService.getUniqueInstructors();
  }

  onSearchChange() {
    this.emitFilters();
  }

  toggleLevel(level: CourseLevel) {
    const current = this.selectedLevels();
    const index = current.indexOf(level);
    
    if (index > -1) {
      this.selectedLevels.set(current.filter((_, i) => i !== index));
    } else {
      this.selectedLevels.set([...current, level]);
    }
    
    this.emitFilters();
  }

  toggleFormat(format: CourseFormat) {
    const current = this.selectedFormats();
    const index = current.indexOf(format);
    
    if (index > -1) {
      this.selectedFormats.set(current.filter((_, i) => i !== index));
    } else {
      this.selectedFormats.set([...current, format]);
    }
    
    this.emitFilters();
  }

  toggleCategory(category: CourseCategory) {
    const current = this.selectedCategories();
    const index = current.indexOf(category);
    
    if (index > -1) {
      this.selectedCategories.set(current.filter((_, i) => i !== index));
    } else {
      this.selectedCategories.set([...current, category]);
    }
    
    this.emitFilters();
  }

  toggleInstructor(instructor: string) {
    const current = this.selectedInstructors();
    const index = current.indexOf(instructor);
    
    if (index > -1) {
      this.selectedInstructors.set(current.filter((_, i) => i !== index));
    } else {
      this.selectedInstructors.set([...current, instructor]);
    }
    
    this.emitFilters();
  }

  onPriceChange() {
    this.emitFilters();
  }

  clearSearch() {
    this.searchTerm = '';
    this.emitFilters();
  }

  clearPriceRange() {
    this.priceMin = null;
    this.priceMax = null;
    this.emitFilters();
  }

  clearAllFilters() {
    this.searchTerm = '';
    this.priceMin = null;
    this.priceMax = null;
    this.selectedLevels.set([]);
    this.selectedFormats.set([]);
    this.selectedCategories.set([]);
    this.selectedInstructors.set([]);
    this.emitFilters();
  }

  hasActiveFilters(): boolean {
    return !!(
      this.searchTerm ||
      this.selectedLevels().length > 0 ||
      this.selectedFormats().length > 0 ||
      this.selectedCategories().length > 0 ||
      this.selectedInstructors().length > 0 ||
      this.priceMin ||
      this.priceMax
    );
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO').format(price);
  }

  private emitFilters() {
    const filters: CourseFilters = {
      searchTerm: this.searchTerm || undefined,
      level: this.selectedLevels().length > 0 ? this.selectedLevels() : undefined,
      format: this.selectedFormats().length > 0 ? this.selectedFormats() : undefined,
      category: this.selectedCategories().length > 0 ? this.selectedCategories() : undefined,
      instructor: this.selectedInstructors().length > 0 ? this.selectedInstructors() : undefined,
      priceRange: (this.priceMin || this.priceMax) ? {
        min: this.priceMin || 0,
        max: this.priceMax || 999999
      } : undefined
    };

    this.filtersChange.emit(filters);
  }
}