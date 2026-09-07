import React, { useState } from 'react';
import { UserProfile } from '../types';
import { DEFAULT_STUDENT, DEFAULT_TEACHER, SupabaseService } from '../services/supabaseService';
import { SigmaEchoLogo } from './SigmaEchoLogo';
import { 
  Eye, 
  EyeOff, 
  GraduationCap, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface SpotifyLoginPageProps {
  onLoginSuccess: (userProfile: UserProfile) => void;
  onContinueAsGuest?: () => void;
}

export const SpotifyLoginPage: React.FC<SpotifyLoginPageProps> = ({
  onLoginSuccess,
  onContinueAsGuest
}) => {
  const [identifier, setIdentifier] = useState('fathir.rabbani@darunnajah9.sch.id');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  // Registration state
  const [regName, setRegName] = useState('');
  const [regNisn, setRegNisn] = useState('');
  const [regRole, setRegRole] = useState<'student' | 'teacher'>('student');

  const handleStandardLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!identifier.trim()) {
      setErrorMsg('Masukkan email, NISN, atau nama pengguna Anda.');
      return;
    }

    setIsSigningIn(true);
    setTimeout(() => {
      // If logging in as teacher / PKM
      if (
        identifier.toLowerCase().includes('guru') || 
        identifier.toLowerCase().includes('pkm') || 
        identifier.toLowerCase().includes('rahmat') || 
        identifier.toLowerCase().includes('unpam')
      ) {
        const teacherProfile = { ...DEFAULT_TEACHER };
        SupabaseService.loginAs(teacherProfile);
        onLoginSuccess(teacherProfile);
      } else {
        // Log in as student
        const studentProfile: UserProfile = {
          ...DEFAULT_STUDENT,
          name: identifier.includes('@') 
            ? identifier.split('@')[0].replace('.', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()) 
            : identifier,
        };
        SupabaseService.loginAs(studentProfile);
        onLoginSuccess(studentProfile);
      }
      setIsSigningIn(false);
    }, 450);
  };

  const handleQuickLogin = (role: 'student' | 'teacher') => {
    setIsSigningIn(true);
    setTimeout(() => {
      const profile = role === 'teacher' ? { ...DEFAULT_TEACHER } : { ...DEFAULT_STUDENT };
      SupabaseService.loginAs(profile);
      onLoginSuccess(profile);
      setIsSigningIn(false);
    }, 350);
  };

  const handleSocialLogin = (provider: 'Google' | 'Madrasah' | 'Apple') => {
    setIsSigningIn(true);
    setTimeout(() => {
      const studentProfile: UserProfile = {
        ...DEFAULT_STUDENT,
        name: provider === 'Madrasah' ? 'Fathir Rabbani (Santri DN9)' : 'Fathir Rabbani',
      };
      SupabaseService.loginAs(studentProfile);
      onLoginSuccess(studentProfile);
      setIsSigningIn(false);
    }, 400);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim()) {
      setErrorMsg('Nama lengkap siswa/guru wajib diisi.');
      return;
    }

    setIsSigningIn(true);
    setTimeout(() => {
      const newProfile: UserProfile = {
        id: `user-${Date.now()}`,
        name: regName.trim(),
        role: regRole,
        school: 'MAS DARUNNAJAH 9',
        classGrade: regRole === 'teacher' ? 'Pendamping Akademik TKA' : 'Kelas XI - MIA',
        avatarConfig: regRole === 'teacher' ? DEFAULT_TEACHER.avatarConfig : DEFAULT_STUDENT.avatarConfig
      };
      SupabaseService.loginAs(newProfile);
      onLoginSuccess(newProfile);
      setIsSigningIn(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E5E5E5] flex flex-col items-center justify-center p-4 sm:p-6 font-sans selection:bg-[#10B981] selection:text-black">
      {/* Centralized Card Layout on #121212 Background with rounded-xl corners and max-width */}
      <main className="w-full flex items-center justify-center my-auto">
        <div className="w-full max-w-[480px] bg-[#121212] rounded-xl border border-[#222222] p-6 sm:p-10 shadow-2xl shadow-black/80 transition-all">
          
          {/* Card Header with SIGMA Echo Logo and Clean Typography */}
          <div className="flex flex-col items-center text-center mb-7">
            <div className="mb-4">
              <SigmaEchoLogo 
                size="lg" 
                badgeText="MAS DARUNNAJAH 9" 
                badgeColor="emerald"
                interactive={true}
              />
            </div>

            <h1 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight leading-tight">
              {isRegisterMode ? 'Daftar Akun SIGMA' : 'Masuk ke SIGMA'}
            </h1>
            <p className="text-xs text-[#A3A3A3] mt-1.5 font-medium leading-relaxed max-w-sm">
              Sistem Interaktif Gerbang Modul Matematika Atraktif • MAS Darunnajah 9
            </p>
          </div>

          {/* Quick 1-Click Demo Profiles */}
          {!isRegisterMode && (
            <div className="mb-6 bg-[#181818] rounded-xl p-3 sm:p-3.5 border border-[#222222]">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#1DB954]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3A3A3]">
                    Masuk Cepat Demo (1-Klik)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#242424] text-[#A3A3A3]">
                  TKA 2026
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Siswa Demo */}
                <button
                  type="button"
                  onClick={() => handleQuickLogin('student')}
                  disabled={isSigningIn}
                  className="flex items-center space-x-2.5 p-2 rounded-lg bg-[#222222] hover:bg-[#282828] transition-all text-left group focus:outline-none focus:ring-1 focus:ring-white/20 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[#1DB954]/20 text-[#1DB954] flex items-center justify-center font-mono font-bold text-xs">
                    Σ
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-[#1DB954] transition-colors truncate">
                      Fathir Rabbani
                    </div>
                    <div className="text-[10px] text-[#A3A3A3] truncate">
                      Siswa XI • MAS DN9
                    </div>
                  </div>
                  <span className="text-xs text-[#727272] group-hover:text-white transition-colors">→</span>
                </button>

                {/* Guru / Tim PKM */}
                <button
                  type="button"
                  onClick={() => handleQuickLogin('teacher')}
                  disabled={isSigningIn}
                  className="flex items-center space-x-2.5 p-2 rounded-lg bg-[#222222] hover:bg-[#282828] transition-all text-left group focus:outline-none focus:ring-1 focus:ring-white/20 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[#3B82F6]/20 text-[#60A5FA] flex items-center justify-center font-mono font-bold text-xs">
                    ∫
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-[#1DB954] transition-colors truncate">
                      Tim PKM UNPAM
                    </div>
                    <div className="text-[10px] text-[#A3A3A3] truncate">
                      Instruktur TKA
                    </div>
                  </div>
                  <span className="text-xs text-[#727272] group-hover:text-white transition-colors">→</span>
                </button>
              </div>
            </div>
          )}

          {/* Social / SSO Single Sign-On Buttons */}
          <div className="space-y-2.5 mb-6">
            {/* Google Sign-in */}
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              disabled={isSigningIn}
              className="w-full relative flex items-center justify-center py-3 px-6 rounded-full bg-[#242424] hover:bg-[#2a2a2a] text-white font-bold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/30"
            >
              <div className="absolute left-5 sm:left-6 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1L1.9 7.7C.7 10 0 12.4 0 15s.7 5 1.9 7.3l3.7-2.9c-.2-.7-.4-1.4-.4-2.1z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.1 7.5 23 12 23z"
                  />
                </svg>
              </div>
              <span className="truncate">Lanjutkan dengan Google</span>
            </button>

            {/* Madrasah Darunnajah 9 Single Sign-On */}
            <button
              type="button"
              onClick={() => handleSocialLogin('Madrasah')}
              disabled={isSigningIn}
              className="w-full relative flex items-center justify-center py-3 px-6 rounded-full bg-[#242424] hover:bg-[#2a2a2a] text-white font-bold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/30"
            >
              <div className="absolute left-5 sm:left-6 flex items-center justify-center text-[#1DB954]">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="truncate">Lanjutkan dengan Akun Madrasah (DN9)</span>
            </button>
          </div>

          {/* Minimalist Divider */}
          <div className="w-full h-px bg-[#242424] my-7" />

          {/* Form Area */}
          {isRegisterMode ? (
            /* Registration Form */
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white mb-2">
                  Nama Lengkap Siswa / Guru
                </label>
                {/* Minimalist input with glowing border and ring effect on focus matching #10B981 */}
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Ilham"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  className="w-full bg-[#242424] hover:bg-[#282828] text-white border border-transparent rounded-lg px-4 py-3.5 text-sm placeholder-[#727272] transition-all focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] focus:shadow-[0_0_16px_rgba(16,185,129,0.35)] focus:bg-[#1e1e1e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-2">
                  NISN / NIP Madrasah
                </label>
                {/* Minimalist input with glowing border and ring effect on focus matching #10B981 */}
                <input
                  type="text"
                  placeholder="Contoh: 0072819201"
                  value={regNisn}
                  onChange={(e) => setRegNisn(e.target.value)}
                  className="w-full bg-[#242424] hover:bg-[#282828] text-white border border-transparent rounded-lg px-4 py-3.5 text-sm placeholder-[#727272] transition-all focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] focus:shadow-[0_0_16px_rgba(16,185,129,0.35)] focus:bg-[#1e1e1e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-2">
                  Peran Akademik
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setRegRole('student')}
                    className={`py-3 px-4 rounded-lg text-xs font-bold transition-all ${
                      regRole === 'student'
                        ? 'bg-[#1DB954] text-black shadow-md'
                        : 'bg-[#242424] text-white hover:bg-[#2a2a2a]'
                    }`}
                  >
                    Siswa Kelas XI
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegRole('teacher')}
                    className={`py-3 px-4 rounded-lg text-xs font-bold transition-all ${
                      regRole === 'teacher'
                        ? 'bg-[#1DB954] text-black shadow-md'
                        : 'bg-[#242424] text-white hover:bg-[#2a2a2a]'
                    }`}
                  >
                    Guru / Tim PKM
                  </button>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-[#E91429]/20 rounded-lg text-xs text-[#ffb4be]">
                  {errorMsg}
                </div>
              )}

              {/* Prominent Pill-Shaped Green Login/Register Button (#1DB954) */}
              <button
                type="submit"
                disabled={isSigningIn}
                className="w-full bg-[#1DB954] hover:bg-[#1ed760] hover:scale-[1.02] active:scale-[0.98] text-black font-extrabold text-base py-3.5 px-8 rounded-full transition-all tracking-wide shadow-lg mt-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1DB954]/50"
              >
                {isSigningIn ? 'Memproses Pendaftaran...' : 'Daftar Sekarang'}
              </button>

              <button
                type="button"
                onClick={() => setIsRegisterMode(false)}
                className="w-full text-center text-sm font-semibold text-[#A7A7A7] hover:text-white transition-colors mt-3"
              >
                Sudah punya akun? Masuk di sini
              </button>
            </form>
          ) : (
            /* Minimalist Standard Login Form */
            <form onSubmit={handleStandardLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white mb-2">
                  Email, NISN atau nama pengguna
                </label>
                {/* Minimalist input with glowing border and ring effect on focus matching #10B981 */}
                <input
                  type="text"
                  required
                  placeholder="Email, NISN atau nama pengguna"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full bg-[#242424] hover:bg-[#282828] text-white border border-transparent rounded-lg px-4 py-3.5 text-sm placeholder-[#727272] transition-all focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] focus:shadow-[0_0_16px_rgba(16,185,129,0.35)] focus:bg-[#1e1e1e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-2">
                  Kata sandi
                </label>
                <div className="relative">
                  {/* Minimalist input with glowing border and ring effect on focus matching #10B981 */}
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#242424] hover:bg-[#282828] text-white border border-transparent rounded-lg px-4 py-3.5 pr-11 text-sm placeholder-[#727272] transition-all focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] focus:shadow-[0_0_16px_rgba(16,185,129,0.35)] focus:bg-[#1e1e1e]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#727272] hover:text-white transition-colors p-1"
                    title={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Streaming-App "Ingat saya" Toggle Switch */}
              <div className="flex items-center space-x-3 pt-2 pb-1">
                <button
                  type="button"
                  role="switch"
                  aria-checked={rememberMe}
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#10B981]/60 cursor-pointer ${
                    rememberMe ? 'bg-[#1DB954]' : 'bg-[#535353]'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${
                      rememberMe ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className="text-sm font-medium text-white select-none">
                  Ingat saya
                </span>
              </div>

              {errorMsg && (
                <div className="p-3 bg-[#E91429]/20 rounded-lg text-xs text-[#ffb4be]">
                  {errorMsg}
                </div>
              )}

              {/* Prominent Pill-Shaped Green Login Button (#1DB954) */}
              <button
                type="submit"
                disabled={isSigningIn}
                className="w-full bg-[#1DB954] hover:bg-[#1ed760] hover:scale-[1.02] active:scale-[0.98] text-black font-extrabold text-base py-3.5 px-8 rounded-full transition-all tracking-wide shadow-lg mt-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1DB954]/50"
              >
                {isSigningIn ? 'Menghubungkan...' : 'Masuk'}
              </button>

              {/* Forgot password link */}
              <div className="text-center pt-3">
                <button
                  type="button"
                  onClick={() => alert('Fitur Reset Kata Sandi: Silakan hubungi admin akademik Madrasah Aliyah Darunnajah 9 atau tim instruktur PKM.')}
                  className="text-xs sm:text-sm font-semibold text-white/80 hover:text-[#1DB954] transition-colors underline"
                >
                  Lupa kata sandi Anda?
                </button>
              </div>
            </form>
          )}

          {/* Bottom Divider */}
          <div className="w-full h-px bg-[#242424] my-8" />

          {/* "Belum punya akun?" Section */}
          <div className="text-center space-y-3">
            <p className="text-[#A7A7A7] text-sm font-semibold">
              {isRegisterMode ? 'Ingin kembali ke menu masuk?' : 'Belum punya akun?'}
            </p>
            <button
              type="button"
              onClick={() => setIsRegisterMode(!isRegisterMode)}
              className="w-full bg-transparent hover:bg-[#242424] text-white font-bold text-sm py-3 px-8 rounded-full transition-all border border-[#727272] hover:border-white cursor-pointer"
            >
              {isRegisterMode ? 'Kembali ke Halaman Masuk' : 'Daftar ke SIGMA'}
            </button>

            {/* Optional Guest mode link */}
            {onContinueAsGuest && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onContinueAsGuest}
                  className="text-xs font-semibold text-[#8A8A8A] hover:text-[#1DB954] transition-colors"
                >
                  Masuk sebagai Tamu Penguji (Guest Evaluator) →
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Sleek Minimalist Footer */}
      <footer className="w-full py-6 px-6 text-center text-[11px] text-[#6A6A6A]">
        <div className="max-w-[480px] mx-auto space-y-2">
          <p className="leading-relaxed">
            Situs ini dilindungi oleh reCAPTCHA dan Kebijakan Privasi serta Persyaratan Layanan berlaku.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[#A7A7A7]">
            <span className="hover:text-white cursor-pointer">Bantuan</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Privasi & RLS Supabase</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Ketentuan Layanan</span>
            <span>•</span>
            <span className="text-[#727272]">MAS Darunnajah 9 & PKM Matematika UNPAM 2026</span>
          </div>
          <div className="pt-2 text-[10px] text-[#525252]">
            <span className="text-[#6E6E6E] font-medium">PKM Group 9</span>
            <span className="mx-1.5 text-[#383838]">·</span>
            <span>Novanda Maranatha Lumbantobing · Yolanda Putri Wirandes · Tri Bagus Ferdiansah</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
