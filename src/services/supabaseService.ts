import { 
  LearningModule, 
  ModuleProgress, 
  QuizAttempt, 
  DiscussionThread, 
  DiscussionReply,
  UserProfile, 
  AvatarConfig 
} from '../types';
import { MODULES_DATA } from '../data/modulesData';

const STORAGE_KEYS = {
  USER_PROFILE: 'sigma_user_profile',
  MODULE_PROGRESS: 'sigma_module_progress',
  QUIZ_ATTEMPTS: 'sigma_quiz_attempts',
  DISCUSSIONS: 'sigma_discussions',
  BOOKMARKED_QUESTIONS: 'sigma_bookmarked_questions',
  CUSTOM_SLIDES: 'sigma_custom_slides',
  CUSTOM_QUESTIONS: 'sigma_custom_questions',
  AUTH_SESSION: 'sigma_auth_session',
};

// Initial default user profile
export const DEFAULT_STUDENT: UserProfile = {
  id: 'student-xi-009',
  name: 'Fathir Rabbani',
  role: 'student',
  school: 'MAS DARUNNAJAH 9',
  classGrade: 'Kelas XI - MIA 1',
  avatarConfig: {
    glyph: 'Σ',
    frameShape: 'hexagon',
    accentColor: '#10B981',
    focusTag: 'Aljabar & TKA Prep'
  }
};

export const DEFAULT_TEACHER: UserProfile = {
  id: 'pkm-teacher-01',
  name: 'Tim PKM Mahasiswa Matematika UNPAM',
  role: 'teacher',
  school: 'MAS DARUNNAJAH 9 & Univ. Pamulang',
  classGrade: 'Pendamping Akademik TKA',
  avatarConfig: {
    glyph: '∫',
    frameShape: 'circle',
    accentColor: '#10B981',
    focusTag: 'Instruktur TKA'
  }
};

// Initial module progress: Module 1 unlocked, others locked until previous is passed >= 75%
const INITIAL_PROGRESS: Record<string, ModuleProgress> = {
  'mod-1': {
    moduleId: 'mod-1',
    isUnlocked: true,
    isCompleted: false,
    lastSlideIndex: 0,
    attemptsCount: 0
  },
  'mod-2': {
    moduleId: 'mod-2',
    isUnlocked: false,
    isCompleted: false,
    lastSlideIndex: 0,
    attemptsCount: 0
  },
  'mod-3': {
    moduleId: 'mod-3',
    isUnlocked: false,
    isCompleted: false,
    lastSlideIndex: 0,
    attemptsCount: 0
  },
  'mod-4': {
    moduleId: 'mod-4',
    isUnlocked: false,
    isCompleted: false,
    lastSlideIndex: 0,
    attemptsCount: 0
  },
  'mod-5': {
    moduleId: 'mod-5',
    isUnlocked: false,
    isCompleted: false,
    lastSlideIndex: 0,
    attemptsCount: 0
  }
};

// Initial seeded discussion threads
const INITIAL_DISCUSSIONS: DiscussionThread[] = [
  {
    id: 'th-1',
    moduleId: 'mod-1',
    authorId: 'student-xi-044',
    authorName: 'Aisyah Putri',
    authorRole: 'student',
    authorAvatar: {
      glyph: 'f(x)',
      frameShape: 'circle',
      accentColor: '#10B981',
      focusTag: 'Aljabar'
    },
    title: 'Bagaimana membuktikan fungsi pecahan kuadrat memiliki invers atau tidak?',
    content: 'Teman-teman dan Kakak PKM UNPAM, jika fungsinya f(x) = (x² - 1)/(x + 1), apakah langsung disederhanakan jadi x - 1 atau domain lubang x ≠ -1 membuat fungsinya tidak bijektif untuk invers?',
    createdAt: '2026-09-06T10:15:00Z',
    upvotes: ['student-xi-009', 'student-xi-012', 'student-xi-028'],
    isPinnedByTeacher: true,
    replies: [
      {
        id: 'rep-1',
        threadId: 'th-1',
        authorId: 'pkm-teacher-01',
        authorName: 'Tim PKM UNPAM (Kak Fauzi)',
        authorRole: 'teacher',
        authorAvatar: {
          glyph: '∫',
          frameShape: 'hexagon',
          accentColor: '#10B981',
          focusTag: 'Fasilitator'
        },
        content: 'Pertanyaan bagus sekali, Aisyah! Pada domain alaminya x ≠ -1, fungsi tersebut memang identik dengan garis lurus berlubang y = x - 1. Karena berlubang pada y = -2, maka inversnya juga akan memiliki domain yang mengecualikan y = -2. Pada soal TKA, perhatikan syarat domain asal (Df) dengan teliti!',
        createdAt: '2026-09-06T11:00:00Z',
        upvotes: ['student-xi-009', 'student-xi-044']
      }
    ]
  },
  {
    id: 'th-2',
    moduleId: 'mod-2',
    authorId: 'student-xi-012',
    authorName: 'Rayhan Maulana',
    authorRole: 'student',
    authorAvatar: {
      glyph: 'π',
      frameShape: 'rhombus',
      accentColor: '#10B981',
      focusTag: 'Geometri'
    },
    title: 'Trik cepat mengingat tanda GSPL vs GSPD',
    content: 'Apakah ada jembatan keledai untuk membedakan persekutuan Luar (R - r) dan Dalam (R + r)? Kadang saya tertukar di bawah akar.',
    createdAt: '2026-09-05T14:30:00Z',
    upvotes: ['student-xi-009'],
    isPinnedByTeacher: false,
    replies: [
      {
        id: 'rep-2',
        threadId: 'th-2',
        authorId: 'student-xi-009',
        authorName: 'Fathir Rabbani',
        authorRole: 'student',
        authorAvatar: {
          glyph: 'Σ',
          frameShape: 'hexagon',
          accentColor: '#10B981',
          focusTag: 'Aljabar & TKA'
        },
        content: 'Ingat huruf L pada Luar = Lurus/Lepas (mengurangi jari-jari kecil, R - r). Huruf D pada Dalam = Menyilang ke Dalam, sehingga jarak tempuhnya menembus gabungan kedua jari-jari (R + r)!',
        createdAt: '2026-09-05T15:10:00Z',
        upvotes: ['student-xi-012', 'student-xi-044']
      }
    ]
  }
];

export const SupabaseService = {
  getModules(): LearningModule[] {
    return MODULES_DATA;
  },

  getUserProfile(): UserProfile {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    return DEFAULT_STUDENT;
  },

  setUserProfile(profile: UserProfile): void {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  },

  switchRole(role: 'student' | 'teacher'): UserProfile {
    const current = this.getUserProfile();
    const newProfile: UserProfile = role === 'teacher' 
      ? { ...DEFAULT_TEACHER } 
      : { ...DEFAULT_STUDENT, avatarConfig: current.avatarConfig };
    this.setUserProfile(newProfile);
    return newProfile;
  },

  toggleUserRole(): UserProfile {
    const current = this.getUserProfile();
    const targetRole = current.role === 'teacher' ? 'student' : 'teacher';
    return this.switchRole(targetRole);
  },

  isAuthenticated(): boolean {
    try {
      return localStorage.getItem(STORAGE_KEYS.AUTH_SESSION) === 'true';
    } catch {
      return false;
    }
  },

  setAuthenticated(status: boolean): void {
    try {
      if (status) {
        localStorage.setItem(STORAGE_KEYS.AUTH_SESSION, 'true');
      } else {
        localStorage.removeItem(STORAGE_KEYS.AUTH_SESSION);
      }
    } catch {
      // ignore
    }
  },

  loginAs(profile: UserProfile): void {
    this.setUserProfile(profile);
    this.setAuthenticated(true);
  },

  logout(): void {
    this.setAuthenticated(false);
  },

  getModuleProgress(): Record<string, ModuleProgress> {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.MODULE_PROGRESS);
      if (stored) {
        return { ...INITIAL_PROGRESS, ...JSON.parse(stored) };
      }
    } catch {
      // fallback
    }
    return INITIAL_PROGRESS;
  },

  saveModuleProgress(progress: Record<string, ModuleProgress>): void {
    localStorage.setItem(STORAGE_KEYS.MODULE_PROGRESS, JSON.stringify(progress));
  },

  unlockNextModule(completedModuleId: string, score: number): Record<string, ModuleProgress> {
    const current = this.getModuleProgress();
    const moduleList = MODULES_DATA;
    const currentIndex = moduleList.findIndex(m => m.id === completedModuleId);

    const updated = { ...current };
    if (updated[completedModuleId]) {
      updated[completedModuleId] = {
        ...updated[completedModuleId],
        isCompleted: score >= 75,
        bestScore: Math.max(updated[completedModuleId].bestScore || 0, score),
        attemptsCount: (updated[completedModuleId].attemptsCount || 0) + 1
      };
    }

    // If passed (score >= 75%), unlock next module in sequence
    if (score >= 75 && currentIndex >= 0 && currentIndex < moduleList.length - 1) {
      const nextModule = moduleList[currentIndex + 1];
      if (updated[nextModule.id]) {
        updated[nextModule.id] = {
          ...updated[nextModule.id],
          isUnlocked: true
        };
      }
    }

    this.saveModuleProgress(updated);
    return updated;
  },

  getQuizAttempts(): QuizAttempt[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    return [];
  },

  recordQuizAttempt(attempt: QuizAttempt): void {
    const list = this.getQuizAttempts();
    list.unshift(attempt);
    localStorage.setItem(STORAGE_KEYS.QUIZ_ATTEMPTS, JSON.stringify(list));
    this.unlockNextModule(attempt.moduleId, attempt.score);
  },

  getDiscussions(moduleId?: string): DiscussionThread[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.DISCUSSIONS);
      const list: DiscussionThread[] = stored ? JSON.parse(stored) : INITIAL_DISCUSSIONS;
      if (moduleId) {
        return list.filter(d => d.moduleId === moduleId);
      }
      return list;
    } catch {
      return INITIAL_DISCUSSIONS;
    }
  },

  createDiscussionThread(thread: Omit<DiscussionThread, 'id' | 'createdAt' | 'upvotes' | 'replies' | 'isPinnedByTeacher'>): DiscussionThread {
    const list = this.getDiscussions();
    const newThread: DiscussionThread = {
      ...thread,
      id: `th-${Date.now()}`,
      createdAt: new Date().toISOString(),
      upvotes: [],
      isPinnedByTeacher: false,
      replies: []
    };
    list.unshift(newThread);
    localStorage.setItem(STORAGE_KEYS.DISCUSSIONS, JSON.stringify(list));
    return newThread;
  },

  addReply(threadId: string, reply: Omit<DiscussionReply, 'id' | 'createdAt' | 'upvotes'>): DiscussionReply {
    const list = this.getDiscussions();
    const target = list.find(t => t.id === threadId);
    if (!target) throw new Error('Thread not found');

    const newReply: DiscussionReply = {
      ...reply,
      id: `rep-${Date.now()}`,
      createdAt: new Date().toISOString(),
      upvotes: []
    };
    target.replies.push(newReply);
    localStorage.setItem(STORAGE_KEYS.DISCUSSIONS, JSON.stringify(list));
    return newReply;
  },

  toggleUpvote(threadId: string, replyId?: string): void {
    const user = this.getUserProfile();
    const list = this.getDiscussions();
    const targetThread = list.find(t => t.id === threadId);
    if (!targetThread) return;

    if (!replyId) {
      // Thread upvote
      const index = targetThread.upvotes.indexOf(user.id);
      if (index >= 0) {
        targetThread.upvotes.splice(index, 1);
      } else {
        targetThread.upvotes.push(user.id);
      }
    } else {
      // Reply upvote
      const rep = targetThread.replies.find(r => r.id === replyId);
      if (rep) {
        const index = rep.upvotes.indexOf(user.id);
        if (index >= 0) {
          rep.upvotes.splice(index, 1);
        } else {
          rep.upvotes.push(user.id);
        }
      }
    }

    localStorage.setItem(STORAGE_KEYS.DISCUSSIONS, JSON.stringify(list));
  },

  togglePinThread(threadId: string): void {
    const list = this.getDiscussions();
    const target = list.find(t => t.id === threadId);
    if (target) {
      target.isPinnedByTeacher = !target.isPinnedByTeacher;
      localStorage.setItem(STORAGE_KEYS.DISCUSSIONS, JSON.stringify(list));
    }
  },

  getBookmarks(): string[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BOOKMARKED_QUESTIONS);
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    return [];
  },

  toggleBookmark(questionId: string): boolean {
    const bookmarks = this.getBookmarks();
    const idx = bookmarks.indexOf(questionId);
    let isBookmarked = false;
    if (idx >= 0) {
      bookmarks.splice(idx, 1);
      isBookmarked = false;
    } else {
      bookmarks.push(questionId);
      isBookmarked = true;
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKED_QUESTIONS, JSON.stringify(bookmarks));
    return isBookmarked;
  },

  // Supabase Architecture DDL & RLS script for database export
  getSupabaseSchemaSQL(): string {
    return `-- ==========================================================
-- SIGMA: Sistem Interaktif Gerbang Modul Matematika Atraktif
-- Platform Persiapan TKA Kelas XI MAS DARUNNAJAH 9
-- PKM Pendidikan Matematika Universitas Pamulang (UNPAM)
-- ==========================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Modules Table
create table if not exists public.modules (
    id text primary key,
    order_index integer not null,
    title text not null,
    domain text not null,
    short_description text not null,
    estimated_duration text default '45 Menit',
    accent_color text default '#10B981',
    geometric_art_type text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Module Slides Table
create table if not exists public.module_slides (
    id text primary key,
    module_id text references public.modules(id) on delete cascade,
    order_index integer not null,
    title text not null,
    subtitle text,
    category text not null,
    content_markdown text not null,
    math_formulas jsonb default '[]'::jsonb,
    key_takeaway text not null
);

-- 3. Quiz Questions Table (15 questions per module, pass threshold >= 75%)
create table if not exists public.quiz_questions (
    id text primary key,
    module_id text references public.modules(id) on delete cascade,
    order_index integer not null,
    question_text text not null,
    math_expression text,
    options jsonb not null,
    correct_option text not null check (correct_option in ('A', 'B', 'C', 'D', 'E')),
    explanation text not null,
    tka_concept text not null,
    difficulty text not null
);

-- 4. Quiz Attempts
create table if not exists public.quiz_attempts (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references auth.users(id) on delete cascade,
    module_id text references public.modules(id) on delete cascade,
    score integer not null check (score between 0 and 100),
    correct_count integer not null check (correct_count between 0 and 15),
    passed boolean not null default false,
    time_spent_seconds integer not null default 0,
    answers jsonb not null,
    started_at timestamp with time zone default timezone('utc'::text, now()) not null,
    completed_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Discussion Threads & Replies
create table if not exists public.discussion_threads (
    id uuid primary key default uuid_generate_v4(),
    module_id text references public.modules(id) on delete cascade,
    author_id uuid references auth.users(id) on delete cascade,
    author_name text not null,
    author_role text not null check (author_role in ('student', 'teacher')),
    author_avatar jsonb not null,
    title text not null,
    content text not null,
    is_pinned boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.discussion_replies (
    id uuid primary key default uuid_generate_v4(),
    thread_id uuid references public.discussion_threads(id) on delete cascade,
    author_id uuid references auth.users(id) on delete cascade,
    author_name text not null,
    author_role text not null,
    author_avatar jsonb not null,
    content text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.discussion_upvotes (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references auth.users(id) on delete cascade,
    thread_id uuid references public.discussion_threads(id) on delete cascade,
    reply_id uuid references public.discussion_replies(id) on delete cascade,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(user_id, thread_id),
    unique(user_id, reply_id)
);

-- 6. Student Avatar Customizations
create table if not exists public.student_avatar_unlocks (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references auth.users(id) on delete cascade unique,
    glyph text not null default 'Σ',
    frame_shape text not null default 'hexagon',
    accent_color text not null default '#10B981',
    focus_tag text not null default 'Aljabar TKA',
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ==========================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================================
alter table public.modules enable row level security;
alter table public.module_slides enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.discussion_threads enable row level security;
alter table public.discussion_replies enable row level security;
alter table public.discussion_upvotes enable row level security;
alter table public.student_avatar_unlocks enable row level security;

-- Read policies for curriculum (Public/Authenticated)
create policy "Anyone can read modules" on public.modules for select using (true);
create policy "Anyone can read slides" on public.module_slides for select using (true);
create policy "Anyone can read questions" on public.quiz_questions for select using (true);

-- Student Personal Attempts (Personal-only: no public exposure of grades)
create policy "Users can view own quiz attempts" on public.quiz_attempts
    for select using (auth.uid() = user_id);

create policy "Users can insert own quiz attempts" on public.quiz_attempts
    for insert with check (auth.uid() = user_id);

-- Teachers can view aggregate analytics via secure RPC functions
-- Discussions: Everyone can read and post with real names
create policy "Anyone authenticated can read discussions" on public.discussion_threads
    for select using (true);

create policy "Users can insert own discussion threads" on public.discussion_threads
    for insert with check (auth.uid() = author_id);

create policy "Teachers can pin discussion threads" on public.discussion_threads
    for update using (
        exists (
            select 1 from auth.users 
            where auth.users.id = auth.uid() 
            and auth.users.raw_user_meta_data->>'role' = 'teacher'
        )
    );
`;
  }
};
