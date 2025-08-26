// features/courses/models/course.interface.ts
export interface Course {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    detailedDescription: string;
    level: CourseLevel;
    format: CourseFormat;
    duration: CourseDuration;
    prerequisites: string[];
    benefits: string[];
    syllabus: SyllabusModule[];
    instructor: Instructor;
    schedule: CourseSchedule[];
    pricing: CoursePricing;
    testimonials: CourseTestimonial[];
    faqs: FAQ[];
    images: string[];
    category: CourseCategory;
    tags: string[];
    status: CourseStatus;
    enrollmentCount: number;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
  }

export interface CourseFilters {
  level?: CourseLevel[];
  format?: CourseFormat[];
  category?: CourseCategory[];
  instructor?: string[];
  priceRange?: { min: number; max: number };
  dateRange?: { start: Date; end: Date };
  searchTerm?: string;
}
  
  export interface SyllabusModule {
    id: string;
    title: string;
    description: string;
    duration: string;
    topics: string[];
  }
  
  export interface Instructor {
    id: string;
    name: string;
    title: string;
    bio: string;
    certifications: string[];
    experience: string;
    image: string;
  }
  
  export interface CourseSchedule {
    id: string;
    startDate: Date;
    endDate: Date;
    timeSlot: string;
    format: CourseFormat;
    availableSpots: number;
    totalSpots: number;
    location?: string;
  }
  
  export interface CoursePricing {
    regular: number;
    early: number;
    earlyDeadline?: Date;
    installments?: InstallmentOption[];
    currency: string;
  }
  
  export interface InstallmentOption {
    payments: number;
    amount: number;
    description: string;
  }
  
  export interface CourseTestimonial {
    id: string;
    studentName: string;
    studentTitle?: string;
    text: string;
    rating: number;
    date: Date;
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface CourseDuration {
    hours: number;
    days: number;
    weeks?: number;
  }
  
  export type CourseLevel = 'Básico' | 'Intermedio' | 'Avanzado' | 'Especialización';
  export type CourseFormat = 'Presencial' | 'Online' | 'Híbrido';
  export type CourseCategory = 'Sanación Pránica' | 'Yoga Arhatic' | 'Psicoterapia Pránica' | 'Feng Shui Pránico' | 'Cristaloterapia';
  export type CourseStatus = 'Activo' | 'Próximamente' | 'Agotado' | 'Cancelado';