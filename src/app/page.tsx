'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { COURSES_DATA, Course } from '@/data/courses';
import {
  ClassYear,
  SemesterTerm,
  ScaleOption,
  WeekAnswer,
  WizardStep
} from '@/types';
import {
  ChevronRight,
  ChevronLeft,
  Search,
  Check,
  CheckCircle2,
  Copy,
  Sparkles,
  BookOpen,
  Calendar,
  Database,
  ArrowRight,
  FileText,
  User,
  History,
  Layers,
  CheckCheck,
  ExternalLink,
  Lock,
  LogOut,
  ShieldCheck,
  Eye,
  Download,
  X,
  RefreshCw,
  Filter,
  FileSpreadsheet
} from 'lucide-react';

const SCALE_OPTIONS: ScaleOption[] = [
  {
    id: 'tam_uyumlu',
    label: 'Birebir / Tamamen Örtüşüyor',
    sublabel: 'Bologna planındaki bu konu derste eksiksiz ve uygun şekilde işlendi.',
    badge: 'Tam Uyumlu',
  },
  {
    id: 'kismen_uyumlu',
    label: 'Kısmen Örtüşüyor / Güncel Örnekle Zenginleştirildi',
    sublabel: 'Konu işlendi; güncel sağlık yönetimi vaka ve mevzuat örnekleriyle anlatıldı.',
    badge: 'Güncel/Zengin',
  },
  {
    id: 'farkli',
    label: 'Farklı Sırayla / Başka Konu İşlendi',
    sublabel: 'Konu sıralaması değişti veya bu hafta başka bir konu ağırlıklı işlendi.',
    badge: 'Sıra Değişti',
  },
  {
    id: 'islenmedi',
    label: 'Bu Konu İşlenmedi / Atlandı',
    sublabel: 'Bu konu amfide henüz ele alınmadı veya plan dışı bırakıldı.',
    badge: 'İşlenmedi',
  },
];

export default function MobileBolognaShopifyApp() {
  // Wizard Navigation
  const [step, setStep] = useState<WizardStep>('term');

  // Selections
  const [selectedYear, setSelectedYear] = useState<ClassYear>(1);
  const [selectedTerm, setSelectedTerm] = useState<SemesterTerm>('Güz');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const [targetWeekCount, setTargetWeekCount] = useState<number>(7);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Search in course list
  const [courseSearch, setCourseSearch] = useState('');

  // Questionnaire state: answers per week
  const [weekAnswers, setWeekAnswers] = useState<{ [week: number]: WeekAnswer }>({});

  // Final summary state
  const [studentName, setStudentName] = useState('Sınıf Temsilcisi');
  const [generalStatus, setGeneralStatus] = useState<
    'Büyük ölçüde örtüşüyor' | 'Açıklığa kavuşturulması gereken noktalar var' | 'Bilgi paketine ulaşılamadı'
  >('Büyük ölçüde örtüşüyor');
  const [generalExampleNote, setGeneralExampleNote] = useState('');

  // Database and saving state
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // History & Admin Auth state
  const [historyRecords, setHistoryRecords] = useState<any[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUsernameInput, setAdminUsernameInput] = useState('');
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [adminLoginError, setAdminLoginError] = useState('');

  // Check existing admin session from localStorage
  useEffect(() => {
    try {
      const isAuth = localStorage.getItem('sbf_admin_auth');
      if (isAuth === 'true') {
        setIsAdminLoggedIn(true);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUsernameInput.trim() === 'saglikbf' && adminPasswordInput.trim() === 'saglikbf') {
      setIsAdminLoggedIn(true);
      setAdminLoginError('');
      try {
        localStorage.setItem('sbf_admin_auth', 'true');
      } catch (e) {}
      fetchHistory();
    } else {
      setAdminLoginError('Hatalı kullanıcı adı veya şifre girdiniz.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem('sbf_admin_auth');
    } catch (e) {}
  };

  // Table filters & Modal state
  const [tableSearch, setTableSearch] = useState('');
  const [tableYearFilter, setTableYearFilter] = useState<'all' | number>('all');
  const [tableStatusFilter, setTableStatusFilter] = useState<'all' | string>('all');
  const [selectedRecordModal, setSelectedRecordModal] = useState<any | null>(null);
  const [modalCopied, setModalCopied] = useState(false);
  const [rowCopiedId, setRowCopiedId] = useState<number | null>(null);

  // Format timestamp
  const formatDate = (isoString?: string) => {
    if (!isoString) return '-';
    try {
      const d = new Date(isoString);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      const hours = String(d.getHours()).padStart(2, '0');
      const minutes = String(d.getMinutes()).padStart(2, '0');
      return `${day}.${month}.${year} ${hours}:${minutes}`;
    } catch {
      return isoString;
    }
  };

  // Filtered history records for Table
  const filteredHistoryRecords = useMemo(() => {
    return historyRecords.filter((item) => {
      const q = tableSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        (item.course_name && item.course_name.toLowerCase().includes(q)) ||
        (item.course_code && item.course_code.toLowerCase().includes(q)) ||
        (item.instructor && item.instructor.toLowerCase().includes(q)) ||
        (item.student_name && item.student_name.toLowerCase().includes(q));

      const matchYear =
        tableYearFilter === 'all' || item.class_year === tableYearFilter;

      const matchStatus =
        tableStatusFilter === 'all' || item.general_status === tableStatusFilter;

      return matchSearch && matchYear && matchStatus;
    });
  }, [historyRecords, tableSearch, tableYearFilter, tableStatusFilter]);

  // Table summary stats
  const historyStats = useMemo(() => {
    const total = historyRecords.length;
    const uyumlu = historyRecords.filter(
      (r) => r.general_status === 'Büyük ölçüde örtüşüyor'
    ).length;
    const aciklik = historyRecords.filter(
      (r) => r.general_status === 'Açıklığa kavuşturulması gereken noktalar var'
    ).length;
    const ulasilamadi = historyRecords.filter(
      (r) => r.general_status === 'Bilgi paketine ulaşılamadı'
    ).length;
    return { total, uyumlu, aciklik, ulasilamadi };
  }, [historyRecords]);

  // Export records to CSV / Excel
  const exportToCSV = () => {
    if (!filteredHistoryRecords.length) return;
    const headers = [
      'ID',
      'Tarih',
      'Sınıf',
      'Dönem',
      'Ders Kodu',
      'Ders Adı',
      'Öğretim Elemanı',
      'Öğrenci/Temsilci',
      'İncelenen Haftalar',
      'Genel Durum',
      'Somut Örnek',
      'Hoca Rapor Metni'
    ];

    const rows = filteredHistoryRecords.map((r) => [
      r.id,
      `"${formatDate(r.created_at)}"`,
      `"${r.class_year}. Sınıf"`,
      `"${r.term}"`,
      `"${r.course_code}"`,
      `"${(r.course_name || '').replace(/"/g, '""')}"`,
      `"${(r.instructor || '').replace(/"/g, '""')}"`,
      `"${(r.student_name || '').replace(/"/g, '""')}"`,
      `"${(r.reviewed_weeks || '').replace(/"/g, '""')}"`,
      `"${(r.general_status || '').replace(/"/g, '""')}"`,
      `"${(r.example_note || '').replace(/"/g, '""')}"`,
      `"${(r.summary_report || '').replace(/"/g, '""')}"`
    ]);

    const csvContent =
      '\uFEFF' + [headers.join(';'), ...rows.map((row) => row.join(';'))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `bologna_ders_degerlendirmeleri_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyRowReport = (report: string, id: number) => {
    navigator.clipboard.writeText(report);
    setRowCopiedId(id);
    setTimeout(() => setRowCopiedId(null), 2000);
  };

  const handleCopyModalReport = (report: string) => {
    navigator.clipboard.writeText(report);
    setModalCopied(true);
    setTimeout(() => setModalCopied(false), 2000);
  };

  // Copied feedback
  const [copiedText, setCopiedText] = useState(false);

  // Today formatted
  const todayStr = useMemo(() => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}.${d.getFullYear()}`;
  }, []);

  // Filter courses by current selectedYear and selectedTerm
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((c) => {
      const matchYear = c.year === selectedYear;
      const matchTerm = c.term === selectedTerm;
      const matchSearch =
        c.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
        c.code.toLowerCase().includes(courseSearch.toLowerCase()) ||
        c.instructor.toLowerCase().includes(courseSearch.toLowerCase());
      return matchYear && matchTerm && matchSearch;
    });
  }, [selectedYear, selectedTerm, courseSearch]);

  // Selected Course Object
  const selectedCourse = useMemo(() => {
    return COURSES_DATA.find((c) => c.id === selectedCourseId) || null;
  }, [selectedCourseId]);

  // Weeks to evaluate for this course (up to targetWeekCount)
  const activeWeeks = useMemo(() => {
    if (!selectedCourse || !selectedCourse.weeks) return [];
    return selectedCourse.weeks.slice(0, targetWeekCount);
  }, [selectedCourse, targetWeekCount]);

  // Current Question (Week)
  const currentWeek = useMemo(() => {
    return activeWeeks[currentQuestionIndex] || null;
  }, [activeWeeks, currentQuestionIndex]);

  // Current Answer for active question
  const currentAnswer = useMemo(() => {
    if (!currentWeek) return null;
    return (
      weekAnswers[currentWeek.week] || {
        week: currentWeek.week,
        topic: currentWeek.topic,
        resources: currentWeek.resources,
        rating: 'tam_uyumlu',
        ratingLabel: 'Birebir / Tamamen Örtüşüyor',
        note: '',
      }
    );
  }, [currentWeek, weekAnswers]);

  // Select a Course and advance to week range selection
  const handleSelectCourse = (course: Course) => {
    setSelectedCourseId(course.id);
    const availableWeeks = course.weeks.length > 0 ? Math.min(7, course.weeks.length) : 7;
    setTargetWeekCount(availableWeeks);
    setCurrentQuestionIndex(0);

    // Initialize default answers
    const initAnswers: { [week: number]: WeekAnswer } = {};
    for (let i = 0; i < availableWeeks; i++) {
      const wk = course.weeks[i];
      if (wk) {
        initAnswers[wk.week] = {
          week: wk.week,
          topic: wk.topic,
          resources: wk.resources,
          rating: 'tam_uyumlu',
          ratingLabel: 'Birebir / Tamamen Örtüşüyor',
          note: '',
        };
      }
    }
    setWeekAnswers(initAnswers);
    setSaveSuccess(false);
    setSaveError(null);
    setStep('range');
  };

  // Start Questions
  const handleStartQuestions = () => {
    setCurrentQuestionIndex(0);
    setStep('questions');
  };

  // Update Answer for current week
  const handleUpdateRating = (opt: ScaleOption) => {
    if (!currentWeek) return;
    setWeekAnswers((prev) => ({
      ...prev,
      [currentWeek.week]: {
        ...currentAnswer!,
        rating: opt.id,
        ratingLabel: opt.label,
      },
    }));
  };

  const handleUpdateNote = (noteText: string) => {
    if (!currentWeek) return;
    setWeekAnswers((prev) => ({
      ...prev,
      [currentWeek.week]: {
        ...currentAnswer!,
        note: noteText,
      },
    }));
  };

  // Quick action: Fill remaining weeks with 'tam_uyumlu'
  const handleQuickFillRemaining = () => {
    setWeekAnswers((prev) => {
      const updated = { ...prev };
      activeWeeks.forEach((wk) => {
        if (!updated[wk.week] || updated[wk.week].rating === undefined) {
          updated[wk.week] = {
            week: wk.week,
            topic: wk.topic,
            resources: wk.resources,
            rating: 'tam_uyumlu',
            ratingLabel: 'Birebir / Tamamen Örtüşüyor',
            note: '',
          };
        }
      });
      return updated;
    });
    goToSummary();
  };

  // Calculate and prepare summary
  const goToSummary = () => {
    if (!selectedCourse) return;

    const answersList = Object.values(weekAnswers);
    const hasIssues = answersList.some((a) => a.rating === 'islenmedi' || a.rating === 'farkli');

    if (hasIssues) {
      setGeneralStatus('Açıklığa kavuşturulması gereken noktalar var');
    } else {
      setGeneralStatus('Büyük ölçüde örtüşüyor');
    }

    const notesWithContent = answersList.filter((a) => a.note && a.note.trim().length > 0);
    if (notesWithContent.length > 0) {
      const derived = notesWithContent
        .map((a) => `${a.week}. Hafta (${a.topic}): ${a.note}`)
        .join('. ');
      setGeneralExampleNote(derived);
    } else if (hasIssues) {
      const changed = answersList.filter((a) => a.rating !== 'tam_uyumlu');
      const sample = changed.map((c) => `${c.week}. hafta konusunda ders işleyişinde esneklik yapılmıştır`).join(', ');
      setGeneralExampleNote(sample);
    } else {
      setGeneralExampleNote(
        'Bologna bilgi paketinde yer alan haftalık konu başlıkları ile sınıfta bugüne kadar işlenen ders içeriği ve materyaller büyük ölçüde örtüşmektedir.'
      );
    }

    setStep('summary');
  };

  // Generate Report Text
  const reportText = useMemo(() => {
    if (!selectedCourse) return '';
    return `• Dersin adı ve kodu: ${selectedCourse.code} ${selectedCourse.name}
• İnceleme tarihi ve karşılaştırılan haftalar: ${todayStr} (1-${targetWeekCount}. haftalar)
• Genel durum: ${generalStatus}
• Varsa somut örnek: ${generalExampleNote || 'Bologna bilgi paketindeki konu akışıyla amfideki ders anlatımları uyumludur.'}`;
  }, [selectedCourse, todayStr, targetWeekCount, generalStatus, generalExampleNote]);

  // Save to PostgreSQL
  const handleSaveToDatabase = async () => {
    if (!selectedCourse) return;
    setIsSaving(true);
    setSaveError(null);

    const payload = {
      class_year: selectedYear,
      semester: selectedCourse.semester,
      term: selectedTerm,
      course_id: selectedCourse.id,
      course_code: selectedCourse.code,
      course_name: selectedCourse.name,
      instructor: selectedCourse.instructor,
      student_name: studentName,
      reviewed_weeks: `1-${targetWeekCount}. haftalar`,
      general_status: generalStatus,
      example_note: generalExampleNote,
      week_answers: Object.values(weekAnswers),
      summary_report: reportText,
    };

    try {
      const res = await fetch('/api/evaluations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Kaydetme başarısız oldu.');
      }

      setSaveSuccess(true);
    } catch (err: any) {
      console.error(err);
      setSaveError(err.message || 'Veritabanı bağlantı hatası oluştu.');
    } finally {
      setIsSaving(false);
    }
  };

  // Load history from PostgreSQL
  const fetchHistory = async () => {
    setLoadingHistory(true);
    try {
      const res = await fetch(`/api/evaluations`);
      const data = await res.json();
      if (data.success) {
        setHistoryRecords(data.data);
      }
    } catch (e) {
      console.error('Fetch history error:', e);
    } finally {
      setLoadingHistory(false);
    }
  };

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(reportText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-[#36F4A4] selection:text-black">
      {/* Cinematic Top Navigation (Forest #102620 background, subtle #1E2C31 border) */}
      <header className="bg-forest/90 backdrop-blur-md border-b border-dark-border px-4 py-3.5 sticky top-0 z-50">
        <div className={`mx-auto flex items-center justify-between transition-all duration-300 ${step === 'history' && isAdminLoggedIn ? 'max-w-6xl' : 'max-w-md'}`}>
          <div className="flex items-center space-x-3">
            {/* Ambient indicator dot */}
            <div className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_8px_#36F4A4]" />
            <div>
              <div className="text-[10px] tracking-wider uppercase font-light text-muted-text">
                Selçuk Üniversitesi
              </div>
              <h1 className="text-sm font-light tracking-wide text-white">
                Bologna Akreditasyon Değerlendirme
              </h1>
            </div>
          </div>

          {/* History Pill Button */}
          <button
            onClick={() => {
              if (step === 'history') {
                setStep('term');
              } else {
                fetchHistory();
                setStep('history');
              }
            }}
            className="px-3.5 py-1.5 rounded-pill bg-deep-teal border border-dark-border hover:border-neon-green text-xs font-light text-shade-30 hover:text-white transition-all flex items-center gap-1.5 active:scale-95"
          >
            {step === 'history' ? <Layers className="w-3.5 h-3.5 text-neon-green" /> : <History className="w-3.5 h-3.5 text-neon-green" />}
            <span className="text-[11px]">
              {step === 'history' ? 'Ankete Dön' : 'Kayıtlar'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className={`flex-1 w-full mx-auto p-4 pb-28 transition-all duration-300 ${step === 'history' && isAdminLoggedIn ? 'max-w-6xl' : 'max-w-md'}`}>
        {/* ======================================================== */}
        {/* STEP 1: DÖNEM SEÇİNİZ */}
        {/* ======================================================== */}
        {step === 'term' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Hero Card */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-5 shadow-shopify-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest/40 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[11px] font-mono text-neon-green bg-forest px-2.5 py-0.5 rounded-pill border border-dark-border">
                  01 / 03
                </span>
                <span className="text-xs text-muted-text font-light">Sınıf & Dönem</span>
              </div>

              <h2 className="text-2xl font-light text-white tracking-tight">
                Dönem Seçiniz
              </h2>
              <p className="text-xs text-muted-text mt-1.5 font-light leading-relaxed">
                İnceleme yapacağınız sınıfı ve eğitim dönemini belirleyiniz.
              </p>
            </div>

            {/* Term Toggle (Güz / Bahar) */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-2 shadow-shopify-card">
              <div className="grid grid-cols-2 gap-1.5 bg-dark-forest p-1 rounded-xl">
                <button
                  onClick={() => setSelectedTerm('Güz')}
                  className={`py-2.5 text-xs font-light rounded-lg transition-all ${
                    selectedTerm === 'Güz'
                      ? 'bg-white text-black font-medium shadow-sm'
                      : 'text-muted-text hover:text-white'
                  }`}
                >
                  Güz Dönemi (Aktif)
                </button>
                <button
                  onClick={() => setSelectedTerm('Bahar')}
                  className={`py-2.5 text-xs font-light rounded-lg transition-all ${
                    selectedTerm === 'Bahar'
                      ? 'bg-white text-black font-medium shadow-sm'
                      : 'text-muted-text hover:text-white'
                  }`}
                >
                  Bahar Dönemi
                </button>
              </div>
            </div>

            {/* Class Year Selection Cards */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-mono tracking-wider text-muted-text block px-1 uppercase">
                Sınıf Düzeyi
              </label>

              {([1, 2, 3, 4] as ClassYear[]).map((year) => {
                const count = COURSES_DATA.filter(
                  (c) => c.year === year && c.term === selectedTerm
                ).length;
                const isSelected = selectedYear === year;

                return (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between active:scale-[0.99] ${
                      isSelected
                        ? 'bg-deep-teal border-neon-green shadow-shopify-card-hover'
                        : 'bg-deep-teal border-dark-border hover:border-shade-70 shadow-shopify-card'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm transition-all ${
                          isSelected
                            ? 'bg-neon-green text-black font-semibold'
                            : 'bg-dark-forest text-muted-text border border-dark-border'
                        }`}
                      >
                        {year}
                      </div>

                      <div>
                        <h3 className="font-light text-sm text-white">
                          {year}. Sınıf
                        </h3>
                        <p className="text-xs text-muted-text mt-0.5 font-light">
                          {count} ders kayıtlı ({selectedTerm})
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'border-neon-green bg-neon-green text-black'
                          : 'border-shade-70'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Primary Full-Pill CTA (White Fill, Black Text) */}
            <button
              onClick={() => setStep('course')}
              className="w-full py-4 px-6 bg-white hover:bg-shade-30 text-black font-medium text-sm rounded-pill shadow-lg shadow-black/60 flex items-center justify-center space-x-2 transition-all active:scale-[0.98] focus:ring-2 focus:ring-neon-green"
            >
              <span>Ders Seçimine Geç</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 2: DERS SEÇİNİZ */}
        {/* ======================================================== */}
        {step === 'course' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Back link */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep('term')}
                className="text-xs text-muted-text hover:text-white flex items-center gap-1 font-light py-1 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Dönem Değiştir</span>
              </button>
              <span className="text-[11px] font-mono text-neon-green bg-forest px-3 py-0.5 rounded-pill border border-dark-border">
                {selectedYear}. Sınıf • {selectedTerm}
              </span>
            </div>

            {/* Search and Header Card */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-5 shadow-shopify-card">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-[11px] font-mono text-neon-green bg-forest px-2.5 py-0.5 rounded-pill border border-dark-border">
                  02 / 03
                </span>
                <span className="text-xs text-muted-text font-light">Ders Tercihi</span>
              </div>

              <h2 className="text-2xl font-light text-white tracking-tight">
                Ders Seçiniz
              </h2>
              <p className="text-xs text-muted-text mt-1 font-light">
                İncelemek istediğiniz dersin üzerine dokununuz.
              </p>

              {/* Dark Search Input with Neon Focus */}
              <div className="relative mt-3.5">
                <Search className="w-4 h-4 text-shade-50 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Ders adı, kodu veya hoca ara..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-dark-forest border border-shade-70 rounded-xl text-white placeholder-shade-50 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition"
                />
              </div>
            </div>

            {/* Course Cards List */}
            <div className="space-y-2.5">
              {filteredCourses.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelectCourse(c)}
                  className="w-full bg-deep-teal p-4 rounded-2xl border border-dark-border hover:border-neon-green text-left transition-all active:scale-[0.99] group shadow-shopify-card"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-forest text-neon-green border border-dark-border">
                          {c.code}
                        </span>
                        <span className="text-[10px] text-muted-text px-2 py-0.5 rounded bg-dark-forest border border-dark-border">
                          {c.ects} AKTS
                        </span>
                        <span className="text-[10px] text-muted-text px-2 py-0.5 rounded bg-dark-forest border border-dark-border">
                          {c.type}
                        </span>
                      </div>

                      <h3 className="text-sm font-light text-white group-hover:text-neon-green transition-colors leading-snug">
                        {c.name}
                      </h3>

                      <p className="text-xs text-muted-text mt-1 flex items-center gap-1.5 font-light">
                        <User className="w-3.5 h-3.5 text-shade-60" />
                        <span>{c.instructor}</span>
                      </p>

                      <div className="mt-2 text-[11px] text-shade-50 flex items-center gap-1 font-mono">
                        <BookOpen className="w-3.5 h-3.5 text-neon-green" />
                        <span>{c.weeks.length || 14} haftalık Bologna konu planı</span>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-dark-forest border border-dark-border flex items-center justify-center text-muted-text group-hover:text-black group-hover:bg-neon-green group-hover:border-neon-green transition-all mt-1">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              ))}

              {filteredCourses.length === 0 && (
                <div className="bg-deep-teal border border-dark-border rounded-2xl p-8 text-center text-muted-text text-xs">
                  Aramanıza uygun ders bulunamadı.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 3: HAFTA ARALIĞI SEÇİMİ */}
        {/* ======================================================== */}
        {step === 'range' && selectedCourse && (
          <div className="space-y-4 animate-fadeIn">
            <button
              onClick={() => setStep('course')}
              className="text-xs text-muted-text hover:text-white flex items-center gap-1 font-light py-1 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Ders Değiştir</span>
            </button>

            {/* Selected Course Header */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-5 shadow-shopify-card">
              <span className="text-[11px] font-mono text-neon-green bg-forest px-2.5 py-0.5 rounded-pill border border-dark-border">
                {selectedCourse.code}
              </span>
              <h2 className="text-xl font-light text-white mt-1.5">{selectedCourse.name}</h2>
              <p className="text-xs text-muted-text mt-1 font-light">{selectedCourse.instructor}</p>
            </div>

            {/* Range Selection Card */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-5 shadow-shopify-card space-y-3">
              <h3 className="text-sm font-light text-white">
                Kaçıncı Haftaya Kadar İşlediniz?
              </h3>
              <p className="text-xs text-muted-text font-light leading-relaxed">
                Hocamız <b>yalnızca bugüne kadar işlenen konuları</b> değerlendirmemizi istedi. Vizeye
                kadar sınıfta tamamlanan hafta sayısını belirleyiniz:
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2">
                {[5, 6, 7, 8, 10, 14].map((w) => {
                  const isSelected = targetWeekCount === w;
                  return (
                    <button
                      key={w}
                      onClick={() => setTargetWeekCount(w)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'border-neon-green bg-forest text-neon-green shadow-sm'
                          : 'border-dark-border bg-dark-forest text-muted-text hover:border-shade-70'
                      }`}
                    >
                      <span className="text-xs font-mono block">1 - {w}. Hafta</span>
                      {w === 7 && (
                        <span className="text-[9px] text-neon-green/80 mt-0.5 block font-mono">
                          (Önerilen)
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Pill Button */}
            <button
              onClick={handleStartQuestions}
              className="w-full py-4 px-6 bg-white hover:bg-shade-30 text-black font-medium text-sm rounded-pill shadow-lg shadow-black/60 flex items-center justify-center space-x-2 transition-all active:scale-[0.98] focus:ring-2 focus:ring-neon-green"
            >
              <span>Soruları Başlat ({targetWeekCount} Konu)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 4: SORULAR TEK TEK (Ölçekli Değerlendirme Akışı) */}
        {/* ======================================================== */}
        {step === 'questions' && selectedCourse && currentWeek && (
          <div className="space-y-4 animate-fadeIn">
            {/* Top Indicator */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-4 shadow-shopify-card space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neon-green">
                  Hafta {currentWeek.week} / {targetWeekCount}
                </span>
                <span className="text-muted-text text-[11px]">
                  %{Math.round(((currentQuestionIndex + 1) / targetWeekCount) * 100)} Tamamlandı
                </span>
              </div>

              {/* Neon Progress Line */}
              <div className="w-full bg-dark-forest h-1.5 rounded-full overflow-hidden border border-dark-border">
                <div
                  className="bg-neon-green h-full transition-all duration-300 rounded-full shadow-[0_0_8px_#36F4A4]"
                  style={{ width: `${((currentQuestionIndex + 1) / targetWeekCount) * 100}%` }}
                />
              </div>

              <p className="text-[11px] text-muted-text truncate font-light pt-0.5">
                {selectedCourse.code} • {selectedCourse.name}
              </p>
            </div>

            {/* QUESTION CARD */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-5 shadow-shopify-card space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-pill bg-forest text-neon-green border border-dark-border">
                  {currentWeek.week}. HAFTA KONUSU
                </span>
              </div>

              <h3 className="text-lg font-light text-white leading-snug">
                {currentWeek.topic}
              </h3>

              {currentWeek.resources && (
                <p className="text-xs text-muted-text/80 font-light leading-relaxed border-t border-dark-border pt-2 mt-2">
                  📚 Kaynak: {currentWeek.resources}
                </p>
              )}
            </div>

            {/* VERTICAL SCALE OPTIONS (Üstten alta çoktan seçmeli) */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-mono tracking-wider text-muted-text block px-1 uppercase">
                Bu konu sınıfta nasıl işlendi? (Ölçek)
              </label>

              {SCALE_OPTIONS.map((opt) => {
                const isSelected = currentAnswer?.rating === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleUpdateRating(opt)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all active:scale-[0.99] flex items-start space-x-3.5 ${
                      isSelected
                        ? 'bg-forest border-neon-green shadow-shopify-card-hover'
                        : 'bg-deep-teal border-dark-border hover:border-shade-70 shadow-shopify-card'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isSelected
                          ? 'border-neon-green bg-neon-green'
                          : 'border-shade-70'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-black" />}
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xs font-medium text-white leading-tight">
                        {opt.label}
                      </h4>
                      <p className="text-[11px] text-muted-text mt-1 leading-normal font-light">
                        {opt.sublabel}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Optional Note for this week */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-4 shadow-shopify-card">
              <label className="text-xs font-light text-muted-text block mb-1.5">
                📝 Bu konu için eklemek istediğiniz not (İsteğe bağlı):
              </label>
              <input
                type="text"
                placeholder="Örn: Güncel hastane yönetimi vaka analiziyle zenginleştirildi..."
                value={currentAnswer?.note || ''}
                onChange={(e) => handleUpdateNote(e.target.value)}
                className="w-full p-3 text-xs bg-dark-forest border border-shade-70 rounded-xl text-white placeholder-shade-50 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition"
              />
            </div>

            {/* Quick Fill Button */}
            <div className="text-center pt-1">
              <button
                onClick={handleQuickFillRemaining}
                className="text-xs text-neon-green hover:underline font-light inline-flex items-center gap-1.5 py-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-neon-green" />
                <span>Kalan konuları &apos;Tam Örtüşüyor&apos; olarak tamamla</span>
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 5: ÖZET, GENEL DURUM & POSTGRESQL'E KAYDETME */}
        {/* ======================================================== */}
        {step === 'summary' && selectedCourse && (
          <div className="space-y-4 animate-fadeIn">
            {/* Success Notification */}
            {saveSuccess && (
              <div className="bg-forest border border-neon-green text-white p-4 rounded-2xl shadow-shopify-card space-y-1.5">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-neon-green" />
                  <h3 className="font-light text-sm text-neon-green">PostgreSQL Veritabanına Kaydedildi!</h3>
                </div>
                <p className="text-xs text-muted-text leading-relaxed font-light">
                  Değerlendirmeniz sisteme aktarıldı. Şimdi aşağıdaki metni kopyalayarak hocaya iletebilirsiniz.
                </p>
              </div>
            )}

            {saveError && (
              <div className="bg-dark-forest border border-shade-70 text-shade-30 p-3.5 rounded-2xl text-xs space-y-1">
                <p className="font-medium text-white">Kayıt hatası:</p>
                <p>{saveError}</p>
              </div>
            )}

            {/* Course Header */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-5 shadow-shopify-card">
              <span className="text-[11px] font-mono text-neon-green bg-forest px-2.5 py-0.5 rounded-pill border border-dark-border">
                Değerlendirme Tamamlandı
              </span>
              <h2 className="text-xl font-light text-white mt-1.5">
                {selectedCourse.code} • {selectedCourse.name}
              </h2>
              <p className="text-xs text-muted-text mt-0.5 font-light">{selectedCourse.instructor}</p>
              <p className="text-xs text-neon-green font-mono mt-1">
                1 - {targetWeekCount}. haftalar incelendi
              </p>
            </div>

            {/* General Status Selector */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-4 shadow-shopify-card space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-text block">
                Genel Durum (Hocanın İstediği Şablon)
              </label>

              {[
                {
                  id: 'Büyük ölçüde örtüşüyor',
                  desc: 'Bologna planı ile fiili işleyiş tam uyumlu',
                },
                {
                  id: 'Açıklığa kavuşturulması gereken noktalar var',
                  desc: 'Farklı konular işlendi veya sıralama değişti',
                },
                {
                  id: 'Bilgi paketine ulaşılamadı',
                  desc: 'Bologna paketi eksik veya açılamadı',
                },
              ].map((opt) => {
                const isSelected = generalStatus === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setGeneralStatus(opt.id as any)}
                    className={`w-full p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
                      isSelected
                        ? 'border-neon-green bg-forest text-white'
                        : 'border-dark-border bg-dark-forest text-muted-text hover:border-shade-70'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs font-medium text-white">{opt.id}</h4>
                      <p className="text-[10px] text-muted-text mt-0.5 font-light">{opt.desc}</p>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-neon-green" />}
                  </button>
                );
              })}
            </div>

            {/* Somut Örnek Alanı */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-4 shadow-shopify-card space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-text block">
                Varsa Somut Örnek
              </label>
              <textarea
                rows={3}
                value={generalExampleNote}
                onChange={(e) => setGeneralExampleNote(e.target.value)}
                placeholder="Bologna'da yer alan konu ve derste ele alınan içerik..."
                className="w-full p-3 text-xs bg-dark-forest border border-shade-70 rounded-xl text-white placeholder-shade-50 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition font-light leading-relaxed"
              />
            </div>

            {/* Student Name */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-4 shadow-shopify-card space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-text block">
                Değerlendiren Temsilci / Öğrenci
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Örn: Sınıf Temsilcisi"
                className="w-full p-3 text-xs bg-dark-forest border border-shade-70 rounded-xl text-white placeholder-shade-50 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition"
              />
            </div>

            {/* SAVE TO DATABASE BUTTON (Pill CTA) */}
            <button
              disabled={isSaving}
              onClick={handleSaveToDatabase}
              className={`w-full py-4 px-6 font-medium text-sm rounded-pill shadow-lg transition-all active:scale-[0.98] flex items-center justify-center space-x-2 ${
                saveSuccess
                  ? 'bg-forest border border-neon-green text-neon-green'
                  : 'bg-white hover:bg-shade-30 text-black'
              }`}
            >
              {isSaving ? (
                <span>PostgreSQL&apos;e Kaydediliyor...</span>
              ) : saveSuccess ? (
                <>
                  <CheckCheck className="w-4 h-4 text-neon-green" />
                  <span>Veritabanında Güncellendi</span>
                </>
              ) : (
                <>
                  <Database className="w-4 h-4" />
                  <span>Veritabanına Kaydet (PostgreSQL)</span>
                </>
              )}
            </button>

            {/* OFFICIAL REPORT OUTPUT (FOR PROFESSOR / WHATSAPP) */}
            <div className="bg-deep-teal border border-dark-border rounded-2xl p-5 shadow-shopify-card space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neon-green flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Hocaya Atılacak Resmi Metin
                </span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 rounded-pill bg-white hover:bg-shade-30 text-black font-medium text-xs flex items-center gap-1 transition active:scale-95"
                >
                  {copiedText ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span>Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-black" />
                      <span>Metni Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3.5 bg-void rounded-xl font-mono text-xs text-aloe leading-relaxed border border-dark-border select-all whitespace-pre-wrap">
                {reportText}
              </div>

              <p className="text-[11px] text-muted-text text-center font-light pt-1">
                Metni panoya kopyalayıp WhatsApp&apos;tan hocanıza doğrudan gönderebilirsiniz.
              </p>
            </div>

            {/* Back to course selection */}
            <button
              onClick={() => setStep('course')}
              className="w-full py-3.5 bg-transparent border border-dark-border hover:border-shade-70 text-shade-30 font-light text-xs rounded-pill transition"
            >
              Farklı Bir Dersi Değerlendir
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* STEP 6: VERİTABANI GEÇMİŞİ & YÖNETİCİ GİRİŞİ */}
        {/* ======================================================== */}
        {step === 'history' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep('term')}
                className="text-xs text-muted-text hover:text-white flex items-center gap-1 font-light py-1 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Ankete Dön</span>
              </button>
              {isAdminLoggedIn && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={fetchHistory}
                    className="text-xs text-neon-green hover:underline font-mono"
                  >
                    Yenile
                  </button>
                  <button
                    onClick={handleAdminLogout}
                    className="text-xs text-shade-50 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-pill bg-deep-teal border border-dark-border"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>Çıkış</span>
                  </button>
                </div>
              )}
            </div>

            {/* ADMIN LOGIN FORM (Eğer giriş yapılmamışsa) */}
            {!isAdminLoggedIn ? (
              <div className="bg-deep-teal border border-dark-border rounded-2xl p-6 shadow-shopify-card space-y-4">
                <div className="w-12 h-12 rounded-full bg-forest border border-dark-border flex items-center justify-center text-neon-green mx-auto mb-2 shadow-[0_0_15px_rgba(54,244,164,0.15)]">
                  <Lock className="w-6 h-6" />
                </div>

                <div className="text-center space-y-1">
                  <div className="flex items-center justify-center space-x-1.5">
                    <span className="text-[10px] font-mono text-neon-green bg-forest px-2.5 py-0.5 rounded-pill border border-dark-border uppercase">
                      Admin Panel
                    </span>
                  </div>
                  <h2 className="text-xl font-light text-white tracking-tight pt-1">
                    Yönetici Girişi
                  </h2>
                  <p className="text-xs text-muted-text font-light leading-relaxed max-w-xs mx-auto">
                    Kayıtlı ders değerlendirmelerini ve sınıf raporlarını görüntülemek için giriş yapınız.
                  </p>
                </div>

                <form onSubmit={handleAdminLogin} className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-muted-text uppercase tracking-wider block px-1">
                      Kullanıcı Adı
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kullanıcı adınız"
                      value={adminUsernameInput}
                      onChange={(e) => setAdminUsernameInput(e.target.value)}
                      className="w-full p-3 text-xs bg-dark-forest border border-shade-70 rounded-xl text-white placeholder-shade-50 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-muted-text uppercase tracking-wider block px-1">
                      Şifre
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={adminPasswordInput}
                      onChange={(e) => setAdminPasswordInput(e.target.value)}
                      className="w-full p-3 text-xs bg-dark-forest border border-shade-70 rounded-xl text-white placeholder-shade-50 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition"
                    />
                  </div>

                  {adminLoginError && (
                    <div className="p-2.5 rounded-xl bg-forest border border-rose-500/40 text-rose-300 text-xs font-light text-center">
                      {adminLoginError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-white hover:bg-shade-30 text-black font-medium text-xs rounded-pill shadow-lg shadow-black/60 flex items-center justify-center space-x-2 transition-all active:scale-[0.98] mt-2 focus:ring-2 focus:ring-neon-green"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Yönetici Olarak Giriş Yap</span>
                  </button>
                </form>
              </div>
            ) : (
              /* LOGGED IN ADMIN: RECORDS TABLE & METRICS */
              <div className="space-y-4">
                {/* Header Card */}
                <div className="bg-deep-teal border border-dark-border rounded-2xl p-5 shadow-shopify-card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1.5">
                        <span className="text-[11px] font-mono text-neon-green bg-forest px-2.5 py-0.5 rounded-pill border border-dark-border">
                          Yönetici Paneli
                        </span>
                        <span className="text-xs text-muted-text font-light">
                          PostgreSQL Canlı Veritabanı
                        </span>
                      </div>
                      <h2 className="text-xl font-light text-white tracking-tight">
                        Kayıtlı Ders Değerlendirmeleri
                      </h2>
                      <p className="text-xs text-muted-text mt-1 font-light leading-relaxed">
                        Öğrenci temsilcilerinin sisteme kaydettiği tüm ders karşılaştırma raporları tablosu.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        onClick={exportToCSV}
                        disabled={filteredHistoryRecords.length === 0}
                        className="py-2 px-3.5 rounded-pill bg-forest hover:bg-forest/80 border border-dark-border hover:border-neon-green text-white text-xs font-light flex items-center gap-1.5 transition active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                        title="Tabloyu Excel / CSV olarak indir"
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5 text-neon-green" />
                        <span>Excel / CSV</span>
                      </button>

                      <button
                        onClick={fetchHistory}
                        disabled={loadingHistory}
                        className="py-2 px-3 rounded-pill bg-dark-forest hover:bg-forest border border-dark-border text-muted-text hover:text-white text-xs font-light flex items-center gap-1 transition active:scale-95"
                        title="Verileri Yenile"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${loadingHistory ? 'animate-spin text-neon-green' : ''}`} />
                        <span className="hidden sm:inline">Yenile</span>
                      </button>
                    </div>
                  </div>

                  {/* Summary Metric Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 mt-4 border-t border-dark-border/80">
                    <div className="bg-dark-forest/80 border border-dark-border rounded-xl p-3">
                      <div className="text-[11px] text-muted-text font-mono">Toplam Kayıt</div>
                      <div className="text-lg font-light text-white font-mono mt-0.5">
                        {historyStats.total}
                      </div>
                    </div>
                    <div className="bg-forest/50 border border-neon-green/20 rounded-xl p-3">
                      <div className="text-[11px] text-neon-green font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                        Örtüşüyor
                      </div>
                      <div className="text-lg font-light text-white font-mono mt-0.5">
                        {historyStats.uyumlu}
                      </div>
                    </div>
                    <div className="bg-amber-950/20 border border-amber-600/30 rounded-xl p-3">
                      <div className="text-[11px] text-amber-300 font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Açıklık Gereken
                      </div>
                      <div className="text-lg font-light text-white font-mono mt-0.5">
                        {historyStats.aciklik}
                      </div>
                    </div>
                    <div className="bg-rose-950/20 border border-rose-600/30 rounded-xl p-3">
                      <div className="text-[11px] text-rose-300 font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        Ulaşılamadı
                      </div>
                      <div className="text-lg font-light text-white font-mono mt-0.5">
                        {historyStats.ulasilamadi}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter and Search Bar */}
                <div className="bg-deep-teal border border-dark-border rounded-2xl p-3 shadow-shopify-card flex flex-col md:flex-row gap-2.5 items-stretch md:items-center justify-between">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-shade-50 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Ders adı, kodu, hoca veya öğrenci ara..."
                      value={tableSearch}
                      onChange={(e) => setTableSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-dark-forest border border-dark-border rounded-xl text-white placeholder-shade-50 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition"
                    />
                    {tableSearch && (
                      <button
                        onClick={() => setTableSearch('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-shade-50 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Sınıf Filter Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
                    <span className="text-[11px] font-mono text-muted-text mr-1 hidden lg:inline">Sınıf:</span>
                    {(['all', 1, 2, 3, 4] as const).map((yr) => (
                      <button
                        key={yr}
                        onClick={() => setTableYearFilter(yr)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition whitespace-nowrap ${
                          tableYearFilter === yr
                            ? 'bg-white text-black font-medium'
                            : 'bg-dark-forest text-shade-30 hover:text-white border border-dark-border'
                        }`}
                      >
                        {yr === 'all' ? 'Tümü' : `${yr}. Sınıf`}
                      </button>
                    ))}
                  </div>

                  {/* Durum Filter Dropdown */}
                  <div className="flex items-center gap-1">
                    <select
                      value={tableStatusFilter}
                      onChange={(e) => setTableStatusFilter(e.target.value)}
                      className="text-xs bg-dark-forest border border-dark-border text-shade-30 py-1.5 px-2.5 rounded-lg focus:outline-none focus:border-neon-green"
                    >
                      <option value="all">Tüm Durumlar</option>
                      <option value="Büyük ölçüde örtüşüyor">Büyük Ölçüde Örtüşüyor</option>
                      <option value="Açıklığa kavuşturulması gereken noktalar var">Açıklık Gereken</option>
                      <option value="Bilgi paketine ulaşılamadı">Ulaşılamadı</option>
                    </select>
                  </div>
                </div>

                {/* TABLE CONTAINER */}
                {loadingHistory ? (
                  <div className="py-16 text-center text-muted-text text-xs font-mono bg-deep-teal border border-dark-border rounded-2xl flex flex-col items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 animate-spin text-neon-green" />
                    <span>Veritabanından ders kayıtları alınıyor...</span>
                  </div>
                ) : filteredHistoryRecords.length > 0 ? (
                  <div className="bg-deep-teal border border-dark-border rounded-2xl shadow-shopify-card overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead className="bg-dark-forest/90 border-b border-dark-border font-mono text-[11px] uppercase tracking-wider text-muted-text">
                          <tr>
                            <th className="py-3 px-3.5 text-center w-12">#</th>
                            <th className="py-3 px-3.5 w-32">Tarih</th>
                            <th className="py-3 px-3.5">Ders Kodu & Adı</th>
                            <th className="py-3 px-3.5 w-28">Sınıf / Dönem</th>
                            <th className="py-3 px-3.5 w-44">Öğretim Elemanı</th>
                            <th className="py-3 px-3.5 w-28">Haftalar</th>
                            <th className="py-3 px-3.5 w-40">Genel Durum</th>
                            <th className="py-3 px-3.5 w-36">Temsilci</th>
                            <th className="py-3 px-3.5 text-right w-24">İşlem</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-dark-border/50 text-xs font-light">
                          {filteredHistoryRecords.map((item) => (
                            <tr
                              key={item.id}
                              className="hover:bg-dark-forest/70 transition-colors group cursor-pointer"
                              onClick={() => setSelectedRecordModal(item)}
                            >
                              <td className="py-3.5 px-3.5 text-center font-mono text-shade-50">
                                {item.id}
                              </td>
                              <td className="py-3.5 px-3.5 font-mono text-muted-text whitespace-nowrap text-[11px]">
                                {formatDate(item.created_at)}
                              </td>
                              <td className="py-3.5 px-3.5">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-[10px] font-medium px-2 py-0.5 rounded bg-forest text-neon-green border border-dark-border shrink-0">
                                    {item.course_code}
                                  </span>
                                  <span className="text-white font-medium group-hover:text-neon-green transition-colors line-clamp-1">
                                    {item.course_name}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3.5 px-3.5 whitespace-nowrap font-mono text-shade-30 text-[11px]">
                                {item.class_year}. Sınıf • {item.term}
                              </td>
                              <td className="py-3.5 px-3.5 text-shade-30 max-w-[170px] truncate">
                                {item.instructor}
                              </td>
                              <td className="py-3.5 px-3.5 font-mono text-shade-50 whitespace-nowrap text-[11px]">
                                {item.reviewed_weeks}
                              </td>
                              <td className="py-3.5 px-3.5 whitespace-nowrap">
                                {item.general_status === 'Büyük ölçüde örtüşüyor' ? (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-forest text-neon-green border border-neon-green/30 text-[11px] font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                    Örtüşüyor
                                  </span>
                                ) : item.general_status === 'Açıklığa kavuşturulması gereken noktalar var' ? (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-amber-950/40 text-amber-300 border border-amber-600/30 text-[11px] font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                    Açıklık Gerekli
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-rose-950/40 text-rose-300 border border-rose-600/30 text-[11px] font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                                    Ulaşılamadı
                                  </span>
                                )}
                              </td>
                              <td className="py-3.5 px-3.5 text-shade-50 whitespace-nowrap text-[11px] truncate max-w-[140px]">
                                {item.student_name}
                              </td>
                              <td
                                className="py-3.5 px-3.5 text-right whitespace-nowrap"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    onClick={() => setSelectedRecordModal(item)}
                                    title="Detaylı Raporu İncele"
                                    className="p-1.5 rounded-lg bg-dark-forest border border-dark-border text-shade-30 hover:text-white hover:border-shade-70 transition active:scale-95"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleCopyRowReport(item.summary_report, item.id)}
                                    title="Hoca Rapor Metnini Kopyala"
                                    className="p-1.5 rounded-lg bg-dark-forest border border-dark-border text-shade-30 hover:text-neon-green hover:border-neon-green transition active:scale-95"
                                  >
                                    {rowCopiedId === item.id ? (
                                      <CheckCheck className="w-3.5 h-3.5 text-neon-green" />
                                    ) : (
                                      <Copy className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-3 bg-dark-forest/50 border-t border-dark-border flex items-center justify-between text-xs text-muted-text font-mono">
                      <span>Gösterilen: {filteredHistoryRecords.length} / {historyRecords.length} kayıt</span>
                      <span className="text-[11px] text-shade-50">Satıra tıklayarak detaylı raporu açabilirsiniz</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-deep-teal border border-dark-border rounded-2xl p-10 text-center space-y-2">
                    <p className="text-white text-sm font-light">Eşleşen Değerlendirme Bulunamadı</p>
                    <p className="text-muted-text text-xs font-light">
                      {tableSearch || tableYearFilter !== 'all' || tableStatusFilter !== 'all'
                        ? 'Arama veya filtre kriterlerinizi değiştirip tekrar deneyiniz.'
                        : 'Henüz veritabanında kayıtlı bir ders değerlendirmesi bulunmuyor.'}
                    </p>
                    {(tableSearch || tableYearFilter !== 'all' || tableStatusFilter !== 'all') && (
                      <button
                        onClick={() => {
                          setTableSearch('');
                          setTableYearFilter('all');
                          setTableStatusFilter('all');
                        }}
                        className="mt-3 px-4 py-1.5 rounded-pill bg-forest border border-dark-border text-xs text-neon-green hover:border-neon-green transition"
                      >
                        Filtreleri Temizle
                      </button>
                    )}
                  </div>
                )}

                {/* DETAIL MODAL */}
                {selectedRecordModal && (
                  <div
                    className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedRecordModal(null)}
                  >
                    <div
                      className="bg-deep-teal border border-dark-border rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 max-h-[88vh] overflow-y-auto relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Modal Top Bar */}
                      <div className="flex items-start justify-between gap-3 border-b border-dark-border pb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest text-neon-green border border-dark-border">
                              {selectedRecordModal.course_code}
                            </span>
                            <span className="text-[11px] font-mono text-muted-text">
                              {selectedRecordModal.class_year}. Sınıf ({selectedRecordModal.term})
                            </span>
                            <span className="text-[10px] font-mono text-shade-50">
                              #{selectedRecordModal.id}
                            </span>
                          </div>
                          <h3 className="text-base font-light text-white">
                            {selectedRecordModal.course_name}
                          </h3>
                          <p className="text-xs text-muted-text font-light mt-0.5">
                            Öğretim Elemanı: <span className="text-white">{selectedRecordModal.instructor}</span>
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedRecordModal(null)}
                          className="p-1.5 rounded-full bg-dark-forest border border-dark-border text-shade-30 hover:text-white transition"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Modal Meta Details */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-dark-forest/70 p-2.5 rounded-xl border border-dark-border">
                          <span className="text-[10px] font-mono text-muted-text uppercase block">Tarih</span>
                          <span className="text-white font-mono text-[11px]">{formatDate(selectedRecordModal.created_at)}</span>
                        </div>
                        <div className="bg-dark-forest/70 p-2.5 rounded-xl border border-dark-border">
                          <span className="text-[10px] font-mono text-muted-text uppercase block">Temsilci / Öğrenci</span>
                          <span className="text-white truncate block">{selectedRecordModal.student_name}</span>
                        </div>
                        <div className="bg-dark-forest/70 p-2.5 rounded-xl border border-dark-border">
                          <span className="text-[10px] font-mono text-muted-text uppercase block">İncelenen Haftalar</span>
                          <span className="text-white font-mono text-[11px]">{selectedRecordModal.reviewed_weeks}</span>
                        </div>
                        <div className="bg-dark-forest/70 p-2.5 rounded-xl border border-dark-border">
                          <span className="text-[10px] font-mono text-muted-text uppercase block">Genel Durum</span>
                          <span className="text-neon-green font-medium">{selectedRecordModal.general_status}</span>
                        </div>
                      </div>

                      {/* Somut Örnek (if exists) */}
                      {selectedRecordModal.example_note && (
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono text-muted-text uppercase tracking-wider block">
                            Varsa Somut Örnek & Notlar
                          </label>
                          <div className="p-3 bg-dark-forest border border-dark-border rounded-xl text-xs text-shade-30 font-light leading-relaxed">
                            {selectedRecordModal.example_note}
                          </div>
                        </div>
                      )}

                      {/* Exact 4-item Professor Output */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between">
                          <label className="text-[11px] font-mono text-neon-green uppercase tracking-wider">
                            Hoca Şablonundaki 4 Maddelik Rapor
                          </label>
                          <button
                            onClick={() => handleCopyModalReport(selectedRecordModal.summary_report)}
                            className="text-xs text-neon-green hover:underline flex items-center gap-1 font-mono"
                          >
                            {modalCopied ? (
                              <>
                                <CheckCheck className="w-3.5 h-3.5" />
                                <span>Kopyalandı</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Metni Kopyala</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="text-xs text-aloe bg-void p-3.5 rounded-xl border border-dark-border font-mono whitespace-pre-wrap select-all leading-relaxed">
                          {selectedRecordModal.summary_report}
                        </div>
                      </div>

                      {/* Modal Footer Actions */}
                      <div className="flex items-center justify-end gap-2 pt-2 border-t border-dark-border">
                        <button
                          onClick={() => setSelectedRecordModal(null)}
                          className="py-2.5 px-5 rounded-pill bg-dark-forest hover:bg-forest border border-dark-border text-xs text-shade-30 hover:text-white transition"
                        >
                          Kapat
                        </button>
                        <button
                          onClick={() => handleCopyModalReport(selectedRecordModal.summary_report)}
                          className="py-2.5 px-5 rounded-pill bg-white hover:bg-shade-30 text-black font-medium text-xs flex items-center gap-1.5 transition active:scale-95"
                        >
                          {modalCopied ? <CheckCheck className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black" />}
                          <span>{modalCopied ? 'Rapor Kopyalandı' : 'Raporu Kopyala'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* FIXED BOTTOM ACTION BAR FOR QUESTIONS */}
      {step === 'questions' && (
        <footer className="fixed bottom-0 left-0 right-0 bg-deep-teal/95 backdrop-blur-md border-t border-dark-border p-3 shadow-2xl z-40">
          <div className="max-w-md mx-auto flex items-center justify-between gap-2">
            <button
              onClick={() => {
                if (currentQuestionIndex > 0) {
                  setCurrentQuestionIndex(currentQuestionIndex - 1);
                } else {
                  setStep('range');
                }
              }}
              className="py-3 px-5 rounded-pill border border-dark-border bg-dark-forest text-muted-text hover:text-white font-light text-xs flex items-center gap-1 active:scale-95 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Geri</span>
            </button>

            {currentQuestionIndex < targetWeekCount - 1 ? (
              <button
                onClick={() => {
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                }}
                className="flex-1 py-3 px-5 rounded-pill bg-white hover:bg-shade-30 text-black font-medium text-xs flex items-center justify-center gap-1 shadow-md active:scale-95 transition"
              >
                <span>Sonraki Soru ({currentQuestionIndex + 2} / {targetWeekCount})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={goToSummary}
                className="flex-1 py-3 px-5 rounded-pill bg-neon-green hover:bg-aloe text-black font-medium text-xs flex items-center justify-center gap-1 shadow-md shadow-neon-green/20 active:scale-95 transition"
              >
                <span>Özete ve Kaydetmeye Geç</span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </footer>
      )}
    </div>
  );
}
