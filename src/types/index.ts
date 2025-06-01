export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'parent' | 'admin';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  schedule: string[];
  materials: StudyMaterial[];
}

export interface StudyMaterial {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'quiz';
  url: string;
  duration?: number;
  subject: string;
  chapter: string;
}

export interface Test {
  id: string;
  title: string;
  subject: string;
  duration: number;
  totalMarks: number;
  questions: Question[];
  startTime: Date;
  endTime: Date;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  marks: number;
}

export interface StudentProgress {
  userId: string;
  courseId: string;
  attendance: number;
  testsCompleted: number;
  averageScore: number;
  completedTopics: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: Date;
  read: boolean;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  timestamp: Date;
  description: string;
}

export interface Attendance {
  userId: string;
  date: Date;
  status: 'present' | 'absent' | 'late';
  course: string;
} 