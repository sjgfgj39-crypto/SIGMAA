/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LearningModule, ModuleProgress, QuizAttempt, UserProfile } from './types';
import { SupabaseService } from './services/supabaseService';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { ModuleCard } from './components/ModuleCard';
import { SlideViewer } from './components/SlideViewer';
import { QuizView } from './components/QuizView';
import { StudentDashboard } from './components/StudentDashboard';
import { TeacherDashboard } from './components/TeacherDashboard';
import { DiscussionSection } from './components/DiscussionSection';
import { SupabaseInspectorView } from './components/SupabaseInspectorView';
import { AvatarModal } from './components/AvatarModal';
import { SpotifyLoginPage } from './components/SpotifyLoginPage';
import { CompanionMotif } from './components/CompanionMotifs';
import { VisionStreamingLayout } from './components/VisionStreamingLayout';
import { MathNotationModal } from './components/MathView';
import { SigmaEchoLogo } from './components/SigmaEchoLogo';
import { 
  Sparkles, 
  Search, 
  Layers, 
  GraduationCap, 
  CheckCircle, 
  ArrowRight,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTab, setCurrentTab] = useState<'modules' | 'dashboard' | 'discussions' | 'schema'>('modules');
  const [user, setUser] = useState<UserProfile>(SupabaseService.getUserProfile());
  const [modules, setModules] = useState<LearningModule[]>(SupabaseService.getModules());
  const [progress, setProgress] = useState<Record<string, ModuleProgress>>(SupabaseService.getModuleProgress());
  const [attempts, setAttempts] = useState<QuizAttempt[]>(SupabaseService.getQuizAttempts());

  // Active sub-views
  const [activeModule, setActiveModule] = useState<LearningModule | null>(null);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isGlobalMathModalOpen, setIsGlobalMathModalOpen] = useState(false);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState<string>('all');

  const refreshUserData = () => {
    setUser(SupabaseService.getUserProfile());
    setProgress(SupabaseService.getModuleProgress());
    setAttempts(SupabaseService.getQuizAttempts());
  };

  const handleLoginSuccess = (profile: UserProfile) => {
    setUser(profile);
    setIsLoggedIn(true);
    refreshUserData();
  };

  const handleLogout = () => {
    SupabaseService.logout();
    setIsLoggedIn(false);
  };

  const handleToggleRole = () => {
    const updated = SupabaseService.toggleUserRole();
    setUser(updated);
  };

  const handleSelectModule = (mod: LearningModule) => {
    setActiveModule(mod);
    setIsQuizActive(false);
  };

  const handleStartQuiz = () => {
    setIsQuizActive(true);
  };

  const handleCompleteQuiz = (attempt: QuizAttempt) => {
    // Refresh state after quiz completion
    refreshUserData();
  };

  const handleExitModuleViewer = () => {
    setActiveModule(null);
    setIsQuizActive(false);
    refreshUserData();
  };

  // Filter modules based on search query and domain filter
  const filteredModules = modules.filter(m => {
    const matchesSearch = 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.domain.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDomain = domainFilter === 'all' || m.domain.toLowerCase().includes(domainFilter.toLowerCase());

    return matchesSearch && matchesDomain;
  });

  // Calculate high-level summary
  const completedModulesCount = (Object.values(progress) as ModuleProgress[]).filter(p => p.isCompleted).length;

  if (isLoading) {
    return <SplashScreen onComplete={() => setIsLoading(false)} />;
  }

  if (!isLoggedIn) {
    return (
      <SpotifyLoginPage 
        onLoginSuccess={handleLoginSuccess}
        onContinueAsGuest={() => setIsLoggedIn(true)}
      />
    );
  }

  return (
    <>
      <VisionStreamingLayout
        modules={modules}
        progress={progress}
        user={user}
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          setActiveModule(null);
          setIsQuizActive(false);
        }}
        activeModule={activeModule}
        onSelectModule={handleSelectModule}
        onStartQuiz={handleStartQuiz}
        isQuizActive={isQuizActive}
        onOpenAvatarModal={() => setIsAvatarModalOpen(true)}
        onToggleRole={handleToggleRole}
        onLogout={handleLogout}
        onOpenMathGuide={() => setIsGlobalMathModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        domainFilter={domainFilter}
        onSelectDomainFilter={setDomainFilter}
      >
        {/* Active Quiz View */}
        {isQuizActive && activeModule ? (
          <QuizView
            module={activeModule}
            onExit={handleExitModuleViewer}
            onCompleteQuiz={handleCompleteQuiz}
          />
        ) : activeModule ? (
          /* Active Slide Track Reader */
          <SlideViewer
            module={activeModule}
            onBack={handleExitModuleViewer}
            onStartQuiz={handleStartQuiz}
            onOpenDiscussions={() => {
              setCurrentTab('discussions');
              setActiveModule(null);
            }}
          />
        ) : (
          /* Non-modules Tabs */
          <div>
            {/* Tab: Dashboard */}
            {currentTab === 'dashboard' && (
              user.role === 'teacher' ? (
                <TeacherDashboard
                  user={user}
                  modules={modules}
                />
              ) : (
                <StudentDashboard
                  user={user}
                  modules={modules}
                  progress={progress}
                  attempts={attempts}
                  onSelectModule={handleSelectModule}
                  onOpenEditProfile={() => setIsAvatarModalOpen(true)}
                />
              )
            )}

            {/* Tab: Discussions */}
            {currentTab === 'discussions' && (
              <DiscussionSection
                user={user}
                modules={modules}
              />
            )}

            {/* Tab: Supabase Architecture */}
            {currentTab === 'schema' && (
              <SupabaseInspectorView />
            )}
          </div>
        )}
      </VisionStreamingLayout>

      {/* Avatar Personalization Modal */}
      <AvatarModal
        user={user}
        isOpen={isAvatarModalOpen}
        onClose={() => setIsAvatarModalOpen(false)}
        onUpdateUser={(updated) => setUser(updated)}
      />

      {/* Global Math Notation Modal */}
      <MathNotationModal
        isOpen={isGlobalMathModalOpen}
        onClose={() => setIsGlobalMathModalOpen(false)}
      />
    </>
  );
}
