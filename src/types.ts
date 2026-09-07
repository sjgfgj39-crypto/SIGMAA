export type UserRole = 'student' | 'teacher';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  school: string;
  classGrade: string;
  avatarConfig: AvatarConfig;
  photoUrl?: string; // Optional custom photo data URL from gallery/file upload
}

export interface AvatarConfig {
  glyph: string; // e.g., 'Σ', 'π', 'f(x)', '∫', 'Δ'
  frameShape: 'circle' | 'hexagon' | 'rhombus' | 'square';
  accentColor: string; // hex code
  focusTag: string; // e.g. 'Aljabar TKA', 'Geometri Analitik', 'Logika Formal'
  photoUrl?: string; // Optional custom photo data URL from gallery/file upload
}

export interface ModuleSlide {
  id: string;
  moduleId: string;
  orderIndex: number;
  title: string;
  subtitle?: string;
  category: 'Konsep Dasar' | 'Penurunan Rumus' | 'Trik TKA & Intuisi' | 'Contoh Soal TKA';
  contentMarkdown: string;
  mathFormulas: string[];
  keyTakeaway: string;
}

export interface QuizQuestion {
  id: string;
  moduleId: string;
  orderIndex: number; // 1 to 15
  questionText: string;
  mathExpression?: string;
  options: {
    id: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
    mathExpression?: string;
  }[];
  correctOption: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  tkaConcept: string;
  difficulty: 'Mudah' | 'Sedang' | 'HOTS / TKA';
}

export interface LearningModule {
  id: string;
  orderIndex: number;
  title: string;
  shortDescription: string;
  domain: 'Aljabar & Fungsi' | 'Geometri & Trigonometri' | 'Matriks & Vektor' | 'Kalkulus & Notasi Sigma' | 'Penalaran Matematis TKA';
  estimatedDuration: string; // e.g. "45 Menit"
  trackCount: number; // number of slides
  questionCount: number; // 15
  accentColor: string;
  geometricArtType: 'function-wave' | 'circle-tangent' | 'matrix-grid' | 'sigma-series' | 'logic-topology';
  slides: ModuleSlide[];
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  id: string;
  userId: string;
  moduleId: string;
  startedAt: string;
  completedAt?: string;
  score: number; // 0 - 100
  correctCount: number; // out of 15
  passed: boolean; // score >= 75
  timeSpentSeconds: number;
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>; // questionId -> chosenOption
  reviewedQuestionIds: string[];
}

export interface DiscussionThread {
  id: string;
  moduleId: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  authorAvatar: AvatarConfig;
  title: string;
  content: string;
  createdAt: string;
  upvotes: string[]; // array of userIds
  isPinnedByTeacher: boolean;
  replies: DiscussionReply[];
}

export interface DiscussionReply {
  id: string;
  threadId: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  authorAvatar: AvatarConfig;
  content: string;
  createdAt: string;
  upvotes: string[];
}

export interface ModuleProgress {
  moduleId: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  bestScore?: number;
  lastSlideIndex: number;
  attemptsCount: number;
}
