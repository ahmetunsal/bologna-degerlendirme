export type ClassYear = 1 | 2 | 3 | 4;
export type SemesterTerm = 'Güz' | 'Bahar';

export type ScaleRating = 'tam_uyumlu' | 'kismen_uyumlu' | 'farkli' | 'islenmedi';

export interface ScaleOption {
  id: ScaleRating;
  label: string;
  sublabel: string;
  badge: string;
}

export interface WeekAnswer {
  week: number;
  topic: string;
  resources?: string;
  rating: ScaleRating;
  ratingLabel: string;
  note: string;
}

export interface EvaluationRecord {
  id?: number;
  created_at?: string;
  class_year: number;
  semester: number;
  term: string;
  course_id: string;
  course_code: string;
  course_name: string;
  instructor: string;
  student_name: string;
  reviewed_weeks: string;
  general_status: 'Büyük ölçüde örtüşüyor' | 'Açıklığa kavuşturulması gereken noktalar var' | 'Bilgi paketine ulaşılamadı';
  example_note: string;
  week_answers: WeekAnswer[];
  summary_report: string;
}

export type WizardStep = 'term' | 'course' | 'range' | 'questions' | 'summary' | 'history';
