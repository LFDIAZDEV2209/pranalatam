// features/courses/services/courses.service.ts
import { Injectable, signal } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Course, CourseLevel, CourseFormat, CourseCategory } from '../models/course.interface';

export interface CourseFilters {
  level?: CourseLevel[];
  format?: CourseFormat[];
  category?: CourseCategory[];
  instructor?: string[];
  priceRange?: { min: number; max: number };
  dateRange?: { start: Date; end: Date };
  searchTerm?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = signal<Course[]>([
    {
      id: '1',
      title: 'Sanación Pránica Nivel I',
      subtitle: 'Conceptos Fundamentales',
      description: 'Aprende los fundamentos de la Sanación Pránica y comienza tu viaje hacia la transformación personal.',
      detailedDescription: 'Este curso introductorio te proporcionará las bases sólidas de la Sanación Pránica. Aprenderás a sentir, ver y manipular la energía pránica para la sanación física y emocional. No se requiere experiencia previa.',
      level: 'Básico',
      format: 'Híbrido',
      duration: { hours: 16, days: 2 },
      prerequisites: ['Ninguno - Abierto a principiantes'],
      benefits: [
        'Técnicas básicas de limpieza y energización',
        'Sanación de dolencias físicas comunes',
        'Desarrollo de la sensibilidad energética',
        'Protección psíquica básica',
        'Fundamentos del sistema de chakras'
      ],
      syllabus: [
        {
          id: '1-1',
          title: 'Introducción a la Sanación Pránica',
          description: 'Historia, principios básicos y conceptos fundamentales',
          duration: '4 horas',
          topics: ['Qué es el prana', 'Los tres pilares de la sanación', 'Ética del sanador']
        },
        {
          id: '1-2',
          title: 'Técnicas Básicas de Sanación',
          description: 'Escaneo, limpieza y energización básica',
          duration: '6 horas',
          topics: ['Sensibilización de las manos', 'Técnicas de limpieza', 'Energización básica']
        },
        {
          id: '1-3',
          title: 'Sanación de Dolencias Comunes',
          description: 'Aplicación práctica en casos reales',
          duration: '4 horas',
          topics: ['Dolores de cabeza', 'Problemas digestivos', 'Estrés y ansiedad']
        },
        {
          id: '1-4',
          title: 'Práctica y Certificación',
          description: 'Evaluación práctica y cierre del curso',
          duration: '2 horas',
          topics: ['Examen práctico', 'Retroalimentación', 'Certificación']
        }
      ],
      instructor: {
        id: 'inst-1',
        name: 'Maestra Carmen Rodríguez',
        title: 'Instructora Senior Certificada',
        bio: 'Con más de 15 años de experiencia en Sanación Pránica, Carmen ha entrenado a cientos de estudiantes en Latinoamérica.',
        certifications: ['Instructor Senior - MCKS', 'Psicoterapia Pránica Avanzada'],
        experience: '15 años de experiencia docente',
        image: 'instructor-carmen.jpg'
      },
      schedule: [
        {
          id: 'sch-1-1',
          startDate: new Date('2025-09-15'),
          endDate: new Date('2025-09-16'),
          timeSlot: '9:00 AM - 6:00 PM',
          format: 'Presencial',
          availableSpots: 8,
          totalSpots: 20,
          location: 'Centro Pranalatam, Bogotá'
        },
        {
          id: 'sch-1-2',
          startDate: new Date('2025-10-12'),
          endDate: new Date('2025-10-13'),
          timeSlot: '9:00 AM - 6:00 PM',
          format: 'Online',
          availableSpots: 15,
          totalSpots: 25
        }
      ],
      pricing: {
        regular: 450000,
        early: 380000,
        earlyDeadline: new Date('2025-08-15'),
        installments: [
          { payments: 2, amount: 225000, description: '2 pagos de $225,000' },
          { payments: 3, amount: 155000, description: '3 pagos de $155,000' }
        ],
        currency: 'COP'
      },
      testimonials: [
        {
          id: 'test-1-1',
          studentName: 'Andrea Martínez',
          studentTitle: 'Psicóloga',
          text: 'El curso superó todas mis expectativas. La instructora es excepcional y los resultados son tangibles desde el primer día.',
          rating: 5,
          date: new Date('2025-07-20')
        }
      ],
      faqs: [
        {
          question: '¿Necesito experiencia previa en sanación energética?',
          answer: 'No, este curso está diseñado para principiantes completos. Comenzamos desde los conceptos más básicos.'
        },
        {
          question: '¿Qué materiales necesito para el curso?',
          answer: 'Solo necesitas ropa cómoda y una actitud abierta para aprender. Todos los materiales didácticos se proporcionan.'
        },
        {
          question: '¿El certificado tiene validez internacional?',
          answer: 'Sí, nuestros certificados están reconocidos por la Institute for Inner Studies de Filipinas, fundada por Master Choa Kok Sui.'
        }
      ],
      images: ['curso1.png'],
      category: 'Sanación Pránica',
      tags: ['Principiantes', 'Sanación Física', 'Desarrollo Energético'],
      status: 'Activo',
      enrollmentCount: 347,
      rating: 4.8,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2025-08-01')
    },
    {
      id: '2',
      title: 'Sanación Pránica Nivel II',
      subtitle: 'Sanación con Colores',
      description: 'Profundiza tu práctica con técnicas avanzadas de sanación usando colores específicos para mayor efectividad.',
      detailedDescription: 'Aprende el poder de los colores en la sanación energética. Este curso te enseñará a utilizar prana de diferentes colores para tratar condiciones específicas con mayor precisión y rapidez.',
      level: 'Intermedio',
      format: 'Híbrido',
      duration: { hours: 20, days: 3 },
      prerequisites: ['Sanación Pránica Nivel I certificado', 'Mínimo 3 meses de práctica'],
      benefits: [
        'Sanación con colores específicos',
        'Técnicas para casos complejos',
        'Mayor velocidad de sanación',
        'Tratamiento de adicciones',
        'Sanación de órganos internos'
      ],
      syllabus: [
        {
          id: '2-1',
          title: 'Fundamentos del Prana de Color',
          description: 'Naturaleza y propiedades de los diferentes colores',
          duration: '6 horas',
          topics: ['Espectro de colores', 'Efectos de cada color', 'Contraindicaciones']
        },
        {
          id: '2-2',
          title: 'Técnicas Avanzadas de Sanación',
          description: 'Aplicación práctica de colores en sanación',
          duration: '8 horas',
          topics: ['Sanación de órganos', 'Casos psicológicos', 'Adicciones']
        },
        {
          id: '2-3',
          title: 'Casos Especiales y Práctica',
          description: 'Situaciones complejas y evaluación',
          duration: '6 horas',
          topics: ['Casos crónicos', 'Emergencias', 'Certificación']
        }
      ],
      instructor: {
        id: 'inst-1',
        name: 'Maestra Carmen Rodríguez',
        title: 'Instructora Senior Certificada',
        bio: 'Con más de 15 años de experiencia en Sanación Pránica, Carmen ha entrenado a cientos de estudiantes en Latinoamérica.',
        certifications: ['Instructor Senior - MCKS', 'Psicoterapia Pránica Avanzada'],
        experience: '15 años de experiencia docente',
        image: 'instructor-carmen.jpg'
      },
      schedule: [
        {
          id: 'sch-2-1',
          startDate: new Date('2025-09-22'),
          endDate: new Date('2025-09-24'),
          timeSlot: '9:00 AM - 6:00 PM',
          format: 'Presencial',
          availableSpots: 5,
          totalSpots: 18,
          location: 'Centro Pranalatam, Bogotá'
        }
      ],
      pricing: {
        regular: 650000,
        early: 550000,
        earlyDeadline: new Date('2025-08-22'),
        currency: 'COP'
      },
      testimonials: [],
      faqs: [
        {
          question: '¿Cuánto tiempo debo practicar Nivel I antes de tomar este curso?',
          answer: 'Recomendamos al menos 3 meses de práctica regular del Nivel I para aprovechar al máximo este curso.'
        }
      ],
      images: ['curso2.png'],
      category: 'Sanación Pránica',
      tags: ['Intermedio', 'Sanación Avanzada', 'Colores'],
      status: 'Activo',
      enrollmentCount: 156,
      rating: 4.9,
      createdAt: new Date('2024-02-15'),
      updatedAt: new Date('2025-08-01')
    },
    {
      id: '3',
      title: 'Yoga Arhatic Preparatorio',
      subtitle: 'El Yoga de la Síntesis',
      description: 'Inicia tu camino en el Yoga Arhatic, la síntesis de diferentes sistemas de yoga para la rápida evolución espiritual.',
      detailedDescription: 'El Yoga Arhatic es un sistema completo que combina Hatha Yoga, Raja Yoga, Karma Yoga, Bhakti Yoga y Jnana Yoga. Este curso preparatorio te introduce a las técnicas fundamentales para la purificación y desarrollo espiritual.',
      level: 'Básico',
      format: 'Presencial',
      duration: { hours: 24, days: 3 },
      prerequisites: ['Sanación Pránica Nivel I certificado', 'Práctica regular de meditación'],
      benefits: [
        'Técnicas de purificación avanzada',
        'Desarrollo de la voluntad espiritual',
        'Aceleración del crecimiento espiritual',
        'Mayor claridad mental',
        'Equilibrio emocional profundo'
      ],
      syllabus: [
        {
          id: '3-1',
          title: 'Introducción al Yoga Arhatic',
          description: 'Fundamentos y preparación física-energética',
          duration: '8 horas',
          topics: ['Historia del Yoga Arhatic', 'Purificaciones preliminares', 'Ejercicios físicos']
        },
        {
          id: '3-2',
          title: 'Técnicas de Purificación',
          description: 'Métodos avanzados de limpieza energética',
          duration: '8 horas',
          topics: ['Purificación de chakras', 'Respiración rítmica', 'Mantras de poder']
        },
        {
          id: '3-3',
          title: 'Meditación y Práctica',
          description: 'Técnicas meditativas y evaluación final',
          duration: '8 horas',
          topics: ['Meditación en quietud', 'Técnicas de concentración', 'Práctica diaria']
        }
      ],
      instructor: {
        id: 'inst-2',
        name: 'Maestro Diego Hernández',
        title: 'Instructor Senior de Yoga Arhatic',
        bio: 'Practicante de Yoga Arhatic por más de 20 años, Diego es uno de los instructores más experimentados en Latinoamérica.',
        certifications: ['Instructor Senior Yoga Arhatic - MCKS', 'Clairvoyance Avanzado'],
        experience: '20 años de práctica y enseñanza',
        image: 'instructor-diego.jpg'
      },
      schedule: [
        {
          id: 'sch-3-1',
          startDate: new Date('2025-10-05'),
          endDate: new Date('2025-10-07'),
          timeSlot: '9:00 AM - 6:00 PM',
          format: 'Presencial',
          availableSpots: 12,
          totalSpots: 15,
          location: 'Centro de Retiros, Zipaquirá'
        }
      ],
      pricing: {
        regular: 750000,
        early: 650000,
        earlyDeadline: new Date('2025-09-05'),
        currency: 'COP'
      },
      testimonials: [
        {
          id: 'test-3-1',
          studentName: 'Luis Carlos Mejía',
          studentTitle: 'Ingeniero y Practicante',
          text: 'El Yoga Arhatic ha transformado completamente mi vida espiritual. Es un sistema potente y efectivo.',
          rating: 5,
          date: new Date('2025-06-15')
        }
      ],
      faqs: [
        {
          question: '¿Es necesario tener experiencia en yoga?',
          answer: 'No es necesaria experiencia previa en yoga, pero sí debes tener Sanación Pránica Nivel I y práctica meditativa básica.'
        },
        {
          question: '¿El curso incluye alojamiento?',
          answer: 'El curso en Zipaquirá incluye almuerzo y refrigerios, pero el alojamiento debe ser gestionado independientemente.'
        }
      ],
      images: ['curso3.png'],
      category: 'Yoga Arhatic',
      tags: ['Desarrollo Espiritual', 'Meditación', 'Purificación'],
      status: 'Activo',
      enrollmentCount: 89,
      rating: 4.9,
      createdAt: new Date('2024-03-01'),
      updatedAt: new Date('2025-08-01')
    }
  ]);

  private filteredCourses = signal<Course[]>([]);
  private currentFilters = signal<CourseFilters>({});

  constructor() {
    this.filteredCourses.set(this.courses());
  }

  getCourses(): Observable<Course[]> {
    return of(this.courses()).pipe(delay(500));
  }

  getFilteredCourses(): Observable<Course[]> {
    return of(this.filteredCourses()).pipe(delay(300));
  }

  getCourseById(id: string): Observable<Course | null> {
    const course = this.courses().find(c => c.id === id) || null;
    return of(course).pipe(delay(400));
  }

  applyFilters(filters: CourseFilters): void {
    this.currentFilters.set(filters);
    let filtered = [...this.courses()];

    // Filter by search term
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term) ||
        course.instructor.name.toLowerCase().includes(term) ||
        course.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Filter by level
    if (filters.level && filters.level.length > 0) {
      filtered = filtered.filter(course => filters.level!.includes(course.level));
    }

    // Filter by format
    if (filters.format && filters.format.length > 0) {
      filtered = filtered.filter(course => filters.format!.includes(course.format));
    }

    // Filter by category
    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter(course => filters.category!.includes(course.category));
    }

    // Filter by instructor
    if (filters.instructor && filters.instructor.length > 0) {
      filtered = filtered.filter(course => 
        filters.instructor!.some(instructorName => 
          course.instructor.name.toLowerCase().includes(instructorName.toLowerCase())
        )
      );
    }

    // Filter by price range
    if (filters.priceRange) {
      filtered = filtered.filter(course => 
        course.pricing.regular >= filters.priceRange!.min &&
        course.pricing.regular <= filters.priceRange!.max
      );
    }

    this.filteredCourses.set(filtered);
  }

  clearFilters(): void {
    this.currentFilters.set({});
    this.filteredCourses.set(this.courses());
  }

  getCurrentFilters(): CourseFilters {
    return this.currentFilters();
  }

  getUniqueInstructors(): string[] {
    return [...new Set(this.courses().map(course => course.instructor.name))];
  }

  getCourseLevels(): CourseLevel[] {
    return ['Básico', 'Intermedio', 'Avanzado', 'Especialización'];
  }

  getCourseFormats(): CourseFormat[] {
    return ['Presencial', 'Online', 'Híbrido'];
  }

  getCourseCategories(): CourseCategory[] {
    return ['Sanación Pránica', 'Yoga Arhatic', 'Psicoterapia Pránica', 'Feng Shui Pránico', 'Cristaloterapia'];
  }
}
