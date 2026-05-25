/**
 * GenjotCandlestick Trading Academy - Core Logic JS
 * Mengatur state aplikasi, routing navigasi, pemuatan materi dinamis,
 * interaksi kuis, dan pencetakan sertifikat kelulusan.
 */

// 1. STATE DEFAULT USER
let userState = {
  name: "",
  currentPhase: 1,
  currentWeek: 1,
  unlockedPhases: [1], // Fase 1 selalu terbuka di awal
  completedWeeks: [],  // Daftar ID minggu yang sudah selesai
  quizScores: {},      // Catatan skor kuis fase, misal { 1: 100 }
  completedPhases: [], // Fase yang sudah lulus kuisnya
  personalityResult: null, // "SNR", "SMC", atau "SND"
  streak: 1,
  lastActiveDate: ""
};

// 2. DOM ELEMENTS
const DOM = {
  nameModal: document.getElementById('name-modal'),
  nameForm: document.getElementById('name-form'),
  nameInput: document.getElementById('name-input'),
  nameDisplay: document.getElementById('user-name-display'),
  avatarInitial: document.getElementById('user-avatar-initial'),
  badgeDisplay: document.getElementById('user-badge-display'),
  progressText: document.getElementById('progress-percentage-text'),
  progressBarFill: document.getElementById('progress-percentage-fill'),
  streakDays: document.getElementById('streak-days-display'),
  sidebar: document.getElementById('sidebar'),
  menuToggle: document.getElementById('menu-toggle'),
  
  // Header Info
  headerTitle: document.getElementById('header-view-title'),
  headerSubtitle: document.getElementById('header-view-subtitle'),
  
  // Views
  views: {
    dashboard: document.getElementById('dashboard-view'),
    lesson: document.getElementById('lesson-view'),
    quiz: document.getElementById('quiz-view'),
    quizResult: document.getElementById('quiz-result-view'),
    personalityQuiz: document.getElementById('personality-quiz-view'),
    glossary: document.getElementById('glossary-view'),
    certificate: document.getElementById('certificate-view'),
    locked: document.getElementById('locked-view-placeholder')
  },

  // Dashboard View Elements
  dashboardStartBtn: document.getElementById('dashboard-start-btn'),
  statsWeeks: document.getElementById('stats-weeks-completed'),
  statsActivePhase: document.getElementById('stats-active-phase'),
  statsQuizzes: document.getElementById('stats-quizzes-passed'),
  statsBadge: document.getElementById('stats-current-badge'),
  dashboardPhasesContainer: document.getElementById('dashboard-phases-container'),
  
  // Lesson View Elements
  lessonMeta: document.getElementById('lesson-meta-info'),
  lessonTitle: document.getElementById('lesson-title-display'),
  lessonTheory: document.getElementById('lesson-theory-content'),
  lessonExamplesSection: document.getElementById('lesson-examples-section'),
  lessonExamplesList: document.getElementById('lesson-examples-list'),
  lessonExercisesSection: document.getElementById('lesson-exercises-section'),
  lessonExercisesList: document.getElementById('lesson-exercises-list'),
  lessonSummary: document.getElementById('lesson-summary-text'),
  lessonCompleteBtn: document.getElementById('lesson-complete-btn'),

  // Quiz View Elements
  quizBadge: document.getElementById('quiz-badge-title'),
  quizTitle: document.getElementById('quiz-title-display'),
  quizQuestionNum: document.getElementById('quiz-question-number'),
  quizQuestionTotal: document.getElementById('quiz-question-total'),
  quizProgressFill: document.getElementById('quiz-progress-fill'),
  quizQuestionsContainer: document.getElementById('quiz-questions-container'),
  quizPrevBtn: document.getElementById('quiz-prev-btn'),
  quizActionBtn: document.getElementById('quiz-action-btn'),

  // Quiz Result Elements
  resultIcon: document.getElementById('quiz-result-icon'),
  resultTitle: document.getElementById('quiz-result-title'),
  resultDesc: document.getElementById('quiz-result-desc'),
  resultScore: document.getElementById('quiz-result-score'),
  resultRetryBtn: document.getElementById('quiz-result-retry-btn'),
  resultContinueBtn: document.getElementById('quiz-result-continue-btn'),

  // Personality Quiz Elements
  pquizContainer: document.getElementById('pquiz-questions-container'),
  pquizSubmitBtn: document.getElementById('pquiz-submit-btn'),
  pquizFooter: document.getElementById('pquiz-footer'),
  pquizResultBox: document.getElementById('pquiz-result-box'),
  pquizResultTitle: document.getElementById('pquiz-result-title-display'),
  pquizResultDesc: document.getElementById('pquiz-result-desc-display'),
  pquizResultConfirmBtn: document.getElementById('pquiz-result-confirm-btn'),

  // Glossary Elements
  glossarySearch: document.getElementById('glossary-search-input'),
  glossaryContainer: document.getElementById('glossary-list-container'),

  // Certificate Elements
  certUserName: document.getElementById('cert-user-name'),
  certDate: document.getElementById('cert-date-val'),
  certPrintBtn: document.getElementById('cert-print-btn'),
  certBackBtn: document.getElementById('cert-back-dashboard-btn'),
  sidebarCertLink: document.getElementById('sidebar-cert-link'),
  certLockIcon: document.getElementById('cert-lock-icon'),

  // Locked Placeholder Elements
  lockedTitle: document.getElementById('locked-placeholder-title'),
  lockedDesc: document.getElementById('locked-placeholder-desc'),
  lockedBtn: document.getElementById('locked-placeholder-btn')
};

// 3. INisialisasi APLIKASI
window.addEventListener('DOMContentLoaded', () => {
  loadStateFromLocalStorage();
  checkStreak();
  initSidebarNavigation();
  initEventListeners();
  initSidebarAccordion();
  initBackToTop();
  
  // Daftarkan route hash default
  if (!window.location.hash) {
    window.location.hash = '#dashboard';
  } else {
    router();
  }
  
  // Jika nama user belum terdaftar, tampilkan modal pendaftaran
  if (!userState.name) {
    DOM.nameModal.classList.add('active-modal');
  } else {
    updateUIForUser();
  }
});

// 4. LOCAL STORAGE OPERATIONS
function loadStateFromLocalStorage() {
  const savedState = localStorage.getItem('genjot_candlestick_state');
  if (savedState) {
    try {
      userState = { ...userState, ...JSON.parse(savedState) };
    } catch (e) {
      console.error("Gagal memuat state dari local storage, menggunakan default.", e);
    }
  }
}

function saveStateToLocalStorage() {
  localStorage.setItem('genjot_candlestick_state', JSON.stringify(userState));
}

// 5. STREAK CALCULATOR
function checkStreak() {
  const todayStr = new Date().toISOString().split('T')[0];
  
  if (userState.lastActiveDate) {
    const lastActive = new Date(userState.lastActiveDate);
    const today = new Date(todayStr);
    const diffTime = Math.abs(today - lastActive);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Aktif berturut-turut
      userState.streak += 1;
    } else if (diffDays > 1) {
      // Lewat sehari, reset streak
      userState.streak = 1;
    }
  } else {
    userState.streak = 1;
  }
  
  userState.lastActiveDate = todayStr;
  saveStateToLocalStorage();
  DOM.streakDays.innerText = `${userState.streak} Hari`;
}

// 6. UPDATE USER INTERFACE DATA
function updateUIForUser() {
  DOM.nameDisplay.innerText = userState.name;
  DOM.avatarInitial.innerText = userState.name.charAt(0).toUpperCase();
  
  // Hitung tingkat badge user
  let badge = "Rookie";
  if (userState.completedPhases.includes(5)) {
    badge = "Gold Master";
  } else if (userState.completedPhases.includes(3)) {
    badge = "Silver Strategist";
  } else if (userState.completedPhases.includes(1)) {
    badge = "Bronze Analyst";
  }
  
  DOM.badgeDisplay.innerText = badge;
  DOM.statsBadge.innerText = badge;
  
  // Set target visual untuk badge active
  document.getElementById('badge-rookie-card').classList.add('active');
  if (badge === "Bronze Analyst" || badge === "Silver Strategist" || badge === "Gold Master") {
    document.getElementById('badge-bronze-card').classList.add('active');
  } else {
    document.getElementById('badge-bronze-card').classList.remove('active');
  }
  if (badge === "Silver Strategist" || badge === "Gold Master") {
    document.getElementById('badge-silver-card').classList.add('active');
  } else {
    document.getElementById('badge-silver-card').classList.remove('active');
  }
  if (badge === "Gold Master") {
    document.getElementById('badge-gold-card').classList.add('active');
  } else {
    document.getElementById('badge-gold-card').classList.remove('active');
  }

  // Hitung total progress
  // Total materi = 32 minggu + 5 kuis = 37 item
  const totalItems = 37;
  const completedItemsCount = userState.completedWeeks.length + userState.completedPhases.length;
  const percentage = Math.min(100, Math.round((completedItemsCount / totalItems) * 100));
  
  DOM.progressText.innerText = `${percentage}%`;
  DOM.progressBarFill.style.width = `${percentage}%`;
  
  // Hitung statistik dashboard
  DOM.statsWeeks.innerText = `${userState.completedWeeks.length} / 32`;
  DOM.statsQuizzes.innerText = `${userState.completedPhases.length} / 5`;
  
  // Cari fase aktif saat ini
  let activePhaseNum = 1;
  for (let i = 1; i <= 5; i++) {
    if (userState.unlockedPhases.includes(i)) {
      activePhaseNum = i;
    }
  }
  DOM.statsActivePhase.innerText = `Fase ${activePhaseNum}`;
  
  // Unlock Certificate
  const isDevMode = userState.name && userState.name.toLowerCase().includes('dev mode');
  const allPhasesCompleted = [1,2,3,4,5].every(id => userState.completedPhases.includes(id));
  
  if (allPhasesCompleted || isDevMode) {
    DOM.sidebarCertLink.classList.remove('locked');
    DOM.certLockIcon.innerText = "🔓";
    DOM.certLockIcon.classList.remove('lock');
    DOM.certLockIcon.classList.add('check');
  } else {
    DOM.sidebarCertLink.classList.add('locked');
    DOM.certLockIcon.innerText = "🔒";
    DOM.certLockIcon.classList.remove('check');
    DOM.certLockIcon.classList.add('lock');
  }

  // Render ulang menu sidebar dan list dashboard
  renderSidebarWeeks();
  renderDashboardPhases();
}

// 7. ROUTER - PENANGAN HASH NAVIGASI
window.addEventListener('hashchange', router);

function router() {
  const hash = window.location.hash || '#dashboard';
  
  // Sembunyikan semua panel view terlebih dahulu
  for (const key in DOM.views) {
    DOM.views[key].classList.remove('active-view');
  }
  
  // Tutup menu sidebar mobile otomatis
  DOM.sidebar.classList.remove('mobile-open');

  // Rute Kuis Kepribadian Khusus Minggu 15
  if (hash === '#week-15') {
    switchView('personalityQuiz');
    DOM.headerTitle.innerText = "Kuis Kecocokan Metode";
    DOM.headerSubtitle.innerText = "Fase 4 • Minggu 15";
    renderPersonalityQuiz();
    return;
  }

  // Router Pencocokan Pola Hash
  if (hash.startsWith('#week-')) {
    const weekId = parseInt(hash.replace('#week-', ''));
    const weekData = getWeekData(weekId);
    
    if (weekData) {
      // Periksa apakah materi dikunci
      if (isWeekLocked(weekId)) {
        showLockedView("Materi Belum Terbuka 🔒", `Selesaikan materi minggu-minggu sebelumnya dan kuis Fase ${getPhaseIdByWeek(weekId) - 1} terlebih dahulu untuk membuka Minggu ${weekId}.`);
      } else {
        switchView('lesson');
        DOM.headerTitle.innerText = weekData.title;
        DOM.headerSubtitle.innerText = `Fase ${getPhaseIdByWeek(weekId)} • Minggu ${weekId}`;
        renderWeekLesson(weekData);
      }
    } else {
      window.location.hash = '#dashboard';
    }
  } 
  else if (hash.startsWith('#quiz-')) {
    const phaseId = parseInt(hash.replace('#quiz-', ''));
    const phaseData = ACADEMY_DATA.phases.find(p => p.id === phaseId);
    
    if (phaseData) {
      if (isQuizLocked(phaseId)) {
        showLockedView("Kuis Terkunci 🔒", `Anda harus menyelesaikan seluruh materi Minggu pembelajaran di Fase ${phaseId} terlebih dahulu sebelum dapat mengikuti kuis ini.`);
      } else {
        switchView('quiz');
        DOM.headerTitle.innerText = `Kuis Fase ${phaseId}`;
        DOM.headerSubtitle.innerText = phaseData.title;
        startPhaseQuiz(phaseId);
      }
    } else {
      window.location.hash = '#dashboard';
    }
  } 
  else if (hash === '#glossary') {
    switchView('glossary');
    DOM.headerTitle.innerText = "Kamus Istilah Trading";
    DOM.headerSubtitle.innerText = "GenjotCandlestick Glossary";
    renderGlossary();
  } 
  else if (hash === '#certificate') {
    switchView('certificate');
    DOM.headerTitle.innerText = "Sertifikat Kelulusan (Preview)";
    DOM.headerSubtitle.innerText = "Selamat Atas Pencapaian Anda!";
    renderCertificate();
  } 
  else if (hash === '#dashboard' || hash === '') {
    switchView('dashboard');
    DOM.headerTitle.innerText = "Beranda Akademi";
    DOM.headerSubtitle.innerText = `Selamat datang kembali, ${userState.name || 'Trader'}`;
    updateUIForUser();
  } 
  else {
    switchView('dashboard');
  }

  // Highlight menu navigasi aktif
  updateSidebarActiveHighlight(hash);
}

function switchView(viewName) {
  if (DOM.views[viewName]) {
    DOM.views[viewName].classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function showLockedView(title, desc) {
  DOM.lockedTitle.innerText = title;
  DOM.lockedDesc.innerText = desc;
  switchView('locked');
}

// 8. DATA NAVIGATION HELPER FUNCTIONS
function getWeekData(weekId) {
  for (const phase of ACADEMY_DATA.phases) {
    const week = phase.weeks.find(w => w.id === weekId);
    if (week) return week;
  }
  return null;
}

function getPhaseIdByWeek(weekId) {
  for (const phase of ACADEMY_DATA.phases) {
    if (phase.weeks.some(w => w.id === weekId)) {
      return phase.id;
    }
  }
  return 1;
}

function isWeekLocked(weekId) {
  // Developer Bypass
  if (userState.name && userState.name.toLowerCase().includes('dev mode')) return false;

  const phaseId = getPhaseIdByWeek(weekId);
  if (!userState.unlockedPhases.includes(phaseId)) return true;
  // Cek apakah minggu sebelumnya sudah selesai (kecuali minggu pertama di fase)
  const phase = ACADEMY_DATA.phases.find(p => p.id === phaseId);
  if (!phase) return true;
  const firstWeekInPhase = phase.weeks[0].id;
  if (weekId === firstWeekInPhase) return false;
  return !userState.completedWeeks.includes(weekId - 1);
}

function isQuizLocked(phaseId) {
  // Developer Bypass
  if (userState.name && userState.name.toLowerCase().includes('dev mode')) return false;

  const phase = ACADEMY_DATA.phases.find(p => p.id === phaseId);
  if (!phase) return true;
  return !phase.weeks.every(w => userState.completedWeeks.includes(w.id));
}

// 9. DYNAMIC SIDEBAR RENDER
function renderSidebarWeeks() {
  ACADEMY_DATA.phases.forEach(phase => {
    const listContainer = document.getElementById(`phase-list-${phase.id}`);
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    
    // Render list minggu
    phase.weeks.forEach(week => {
      const isLocked = isWeekLocked(week.id);
      const isCompleted = userState.completedWeeks.includes(week.id);
      
      const li = document.createElement('li');
      
      const a = document.createElement('a');
      a.className = `week-link ${isLocked ? 'locked' : ''}`;
      
      let statusIcon = '';
      if (isCompleted) {
        statusIcon = '<span class="status-icon check">✅</span>';
      } else if (isLocked) {
        statusIcon = '<span class="status-icon lock">🔒</span>';
      } else {
        statusIcon = '<span class="status-icon">📖</span>';
      }
      
      a.innerHTML = `
        <span>Minggu ${week.id}: ${week.title.split(': ')[1] || week.title}</span>
        ${statusIcon}
      `;
      
      if (!isLocked) {
        a.addEventListener('click', () => {
          window.location.hash = `#week-${week.id}`;
        });
      }
      
      li.appendChild(a);
      listContainer.appendChild(li);
    });
    
    // Render tombol kuis di akhir fase
    const isQuizLock = isQuizLocked(phase.id);
    const isQuizPassed = userState.completedPhases.includes(phase.id);
    
    const quizLi = document.createElement('li');
    const quizA = document.createElement('a');
    quizA.className = `week-link ${isQuizLock ? 'locked' : ''}`;
    quizA.style.fontWeight = 'bold';
    quizA.style.borderTop = '1px solid var(--border-color)';
    quizA.style.marginTop = '4px';
    quizA.style.paddingTop = '8px';
    
    let quizStatus = '';
    if (isQuizPassed) {
      quizStatus = '<span class="status-icon check">🏆</span>';
    } else if (isQuizLock) {
      quizStatus = '<span class="status-icon lock">🔒</span>';
    } else {
      quizStatus = '<span class="status-icon">📝</span>';
    }
    
    quizA.innerHTML = `
      <span>Kuis Akhir Fase ${phase.id}</span>
      ${quizStatus}
    `;
    
    if (!isQuizLock) {
      quizA.addEventListener('click', () => {
        window.location.hash = `#quiz-${phase.id}`;
      });
    }
    
    quizLi.appendChild(quizA);
    listContainer.appendChild(quizLi);
  });
  
  // Refresh accordion heights setelah konten sidebar berubah
  requestAnimationFrame(() => refreshAccordionHeights());
}

function updateSidebarActiveHighlight(hash) {
  // Reset active classes
  document.querySelectorAll('.menu-link, .week-link').forEach(link => {
    link.classList.remove('active');
  });
  
  if (hash === '#dashboard' || hash === '') {
    document.querySelector('[data-view="dashboard"]').classList.add('active');
  } else if (hash === '#glossary') {
    document.querySelector('[data-view="glossary"]').classList.add('active');
  } else if (hash === '#certificate') {
    DOM.sidebarCertLink.classList.add('active');
  } else if (hash.startsWith('#week-')) {
    const weekId = hash.replace('#week-', '');
    // Cari elemen minggu di sidebar
    document.querySelectorAll('.week-list a').forEach(a => {
      if (a.innerText.includes(`Minggu ${weekId}:`)) {
        a.classList.add('active');
      }
    });
  } else if (hash.startsWith('#quiz-')) {
    const phaseId = hash.replace('#quiz-', '');
    document.querySelectorAll('.week-list a').forEach(a => {
      if (a.innerText.includes(`Kuis Akhir Fase ${phaseId}`)) {
        a.classList.add('active');
      }
    });
  }
}

// 10. DYNAMIC DASHBOARD PHASES RENDER
function renderDashboardPhases() {
  DOM.dashboardPhasesContainer.innerHTML = '';
  
  ACADEMY_DATA.phases.forEach(phase => {
    // Selalu paksa fase terbuka untuk Preview/Crosscheck mode
    const isUnlocked = true;
    const isCompleted = userState.completedPhases.includes(phase.id);
    
    const card = document.createElement('div');
    card.className = `phase-card`; // Hapus class locked
    
    let statusBadgeText = 'Terbuka (Preview)';
    let badgeClass = 'in-progress';
    let btnText = 'Lihat Modul';
    let btnDisabled = false;
    
    if (isCompleted) {
      statusBadgeText = 'Selesai';
      badgeClass = 'completed';
      btnText = 'Tinjau Materi';
    }
    
    card.innerHTML = `
      <div class="phase-card-left">
        <div class="phase-card-title">
          <span>${phase.title}</span>
          <span class="phase-status-badge ${badgeClass}">${statusBadgeText}</span>
        </div>
        <div class="phase-card-desc">${phase.description}</div>
      </div>
      <div class="phase-card-right">
        <button class="phase-btn" ${btnDisabled ? 'disabled' : ''}>${btnText}</button>
      </div>
    `;
    
    if (!btnDisabled) {
      card.querySelector('.phase-btn').addEventListener('click', () => {
        // Arahkan ke minggu pertama fase tersebut
        const firstWeekId = phase.weeks[0].id;
        window.location.hash = `#week-${firstWeekId}`;
      });
    }
    
    DOM.dashboardPhasesContainer.appendChild(card);
  });
}

// 11. LESSON VIEWS RENDER LOGIC
let answeredExercises = {};

function renderWeekLesson(weekData) {
  answeredExercises = {}; // Reset tracking latihan inline
  
  DOM.lessonMeta.innerText = `Fase ${getPhaseIdByWeek(weekData.id)} • Minggu ${weekData.id} • ${weekData.estimation}`;
  DOM.lessonTitle.innerText = weekData.title;
  DOM.lessonTheory.innerHTML = weekData.theory;
  DOM.lessonSummary.innerText = weekData.summary;
  
  // Render Examples
  if (weekData.examples && weekData.examples.length > 0) {
    DOM.lessonExamplesSection.style.display = 'block';
    DOM.lessonExamplesList.innerHTML = '';
    weekData.examples.forEach(ex => {
      const div = document.createElement('div');
      div.className = 'example-item';
      div.innerHTML = `
        <div class="example-item-title">
          <span>💡</span> ${ex.title}
        </div>
        <div class="example-item-content">${ex.content}</div>
      `;
      DOM.lessonExamplesList.appendChild(div);
    });
  } else {
    DOM.lessonExamplesSection.style.display = 'none';
  }
  
  // Render Inline Exercises
  if (weekData.exercises && weekData.exercises.length > 0) {
    DOM.lessonExercisesSection.style.display = 'block';
    DOM.lessonExercisesList.innerHTML = '';
    
    weekData.exercises.forEach((ex, idx) => {
      answeredExercises[ex.id] = false; // Tandai belum dijawab benar
      
      const div = document.createElement('div');
      div.className = 'exercise-item';
      div.id = `exercise-${ex.id}`;
      
      let optionsHTML = '';
      ex.options.forEach((opt, optIdx) => {
        optionsHTML += `
          <li>
            <button class="option-btn" data-ex-id="${ex.id}" data-opt-idx="${optIdx}">
              ${opt}
            </button>
          </li>
        `;
      });
      
      div.innerHTML = `
        <div class="exercise-question">Soal ${idx + 1}: ${ex.question}</div>
        <ul class="options-list">
          ${optionsHTML}
        </ul>
        <div class="exercise-check-btn-wrapper">
          <button class="btn-check-answer" id="check-btn-${ex.id}" disabled>Cek Jawaban</button>
        </div>
        <div class="exercise-feedback correct" id="feedback-correct-${ex.id}">
          <strong>Benar!</strong> ${ex.explanation}
        </div>
        <div class="exercise-feedback wrong" id="feedback-wrong-${ex.id}">
          <strong>Kurang Tepat!</strong> Coba pikirkan lagi logikanya.
        </div>
      `;
      
      // Track selected answer per exercise
      let selectedOptIdx = null;
      
      // Event listener klik opsi pilihan - hanya highlight, belum cek jawaban
      div.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          // Jika sudah dicek dan benar, jangan izinkan ganti pilihan
          if (answeredExercises[ex.id]) return;
          
          selectedOptIdx = parseInt(e.target.getAttribute('data-opt-idx'));
          
          // Highlight tombol terpilih
          div.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
          e.target.classList.add('selected');
          
          // Aktifkan tombol Cek Jawaban
          const checkBtn = document.getElementById(`check-btn-${ex.id}`);
          checkBtn.disabled = false;
        });
      });
      
      // Event listener tombol Cek Jawaban
      const checkBtn = div.querySelector(`#check-btn-${ex.id}`);
      checkBtn.addEventListener('click', () => {
        if (selectedOptIdx === null) return;
        handleInlineExerciseAnswer(ex.id, selectedOptIdx, ex.correctAnswer, div);
      });
      
      DOM.lessonExercisesList.appendChild(div);
    });
    
    DOM.lessonCompleteBtn.disabled = true; // Kunci tombol lanjut sampai semua kuis kecil terjawab benar
    DOM.lessonCompleteBtn.innerText = "Selesaikan Soal Latihan Di Atas";
  } else {
    DOM.lessonExercisesSection.style.display = 'none';
    DOM.lessonCompleteBtn.disabled = false;
    DOM.lessonCompleteBtn.innerText = "Tandai Selesai & Lanjut →";
  }
  
  // Atur action tombol selesai
  DOM.lessonCompleteBtn.onclick = () => {
    handleCompleteWeek(weekData.id);
  };
}

function handleInlineExerciseAnswer(exId, optIdx, correctIdx, container) {
  const buttons = container.querySelectorAll('.option-btn');
  const feedbackCorrect = document.getElementById(`feedback-correct-${exId}`);
  const feedbackWrong = document.getElementById(`feedback-wrong-${exId}`);
  const checkBtn = document.getElementById(`check-btn-${exId}`);
  
  // Reset state tombol pilihan
  buttons.forEach(btn => {
    btn.classList.remove('selected', 'correct', 'wrong');
  });
  
  const selectedBtn = container.querySelector(`[data-opt-idx="${optIdx}"]`);
  
  if (optIdx === correctIdx) {
    selectedBtn.classList.add('correct');
    feedbackCorrect.style.display = 'block';
    feedbackWrong.style.display = 'none';
    answeredExercises[exId] = true;
    
    // Matikan interaksi jika sudah menjawab benar
    buttons.forEach(btn => btn.disabled = true);
    // Sembunyikan tombol Cek Jawaban
    if (checkBtn) checkBtn.style.display = 'none';
  } else {
    selectedBtn.classList.add('wrong');
    feedbackCorrect.style.display = 'none';
    feedbackWrong.style.display = 'block';
    answeredExercises[exId] = false;
    
    // Reset: biarkan user memilih ulang setelah salah
    checkBtn.disabled = true;
    setTimeout(() => {
      buttons.forEach(btn => {
        btn.classList.remove('wrong');
      });
      feedbackWrong.style.display = 'none';
    }, 2000);
  }
  
  // Cek apakah seluruh kuis kecil sudah selesai dijawab benar
  const allCorrect = Object.values(answeredExercises).every(val => val === true);
  if (allCorrect) {
    DOM.lessonCompleteBtn.disabled = false;
    DOM.lessonCompleteBtn.innerText = "Tandai Selesai & Lanjut →";
  }
}

function handleCompleteWeek(weekId) {
  if (!userState.completedWeeks.includes(weekId)) {
    userState.completedWeeks.push(weekId);
  }
  
  saveStateToLocalStorage();
  updateUIForUser();
  showToast(`Minggu ${weekId} selesai! Progress tersimpan ✅`);
  
  // Cari tujuan navigasi berikutnya
  const nextWeekId = weekId + 1;
  const currentPhaseId = getPhaseIdByWeek(weekId);
  const nextWeekPhaseId = getWeekData(nextWeekId) ? getPhaseIdByWeek(nextWeekId) : null;
  
  if (nextWeekPhaseId === currentPhaseId) {
    // Lanjut ke minggu berikutnya di fase yang sama
    window.location.hash = `#week-${nextWeekId}`;
  } else {
    // Fase ini selesai! Arahkan ke kuis fase
    window.location.hash = `#quiz-${currentPhaseId}`;
  }
}

// 12. PHASE QUIZ LOGIC
let currentQuiz = {
  phaseId: null,
  questions: [],
  currentIndex: 0,
  userAnswers: [], // Menyimpan jawaban terpilih user
  isChecked: false
};

function startPhaseQuiz(phaseId) {
  const phaseData = ACADEMY_DATA.phases.find(p => p.id === phaseId);
  if (!phaseData) return;
  
  currentQuiz = {
    phaseId: phaseId,
    questions: phaseData.quiz.questions,
    currentIndex: 0,
    userAnswers: new Array(phaseData.quiz.questions.length).fill(null),
    isChecked: false
  };
  
  DOM.quizBadge.innerText = `Kuis Akhir Fase ${phaseId}`;
  DOM.quizTitle.innerText = phaseData.quiz.title;
  DOM.quizQuestionTotal.innerText = currentQuiz.questions.length;
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qIdx = currentQuiz.currentIndex;
  const question = currentQuiz.questions[qIdx];
  DOM.quizQuestionNum.innerText = qIdx + 1;
  
  // Update progress bar
  const progressPercent = ((qIdx) / currentQuiz.questions.length) * 100;
  DOM.quizProgressFill.style.width = `${progressPercent}%`;
  
  DOM.quizQuestionsContainer.innerHTML = '';
  
  const div = document.createElement('div');
  div.className = 'quiz-question-container active-question';
  
  let optionsHTML = '';
  question.options.forEach((opt, idx) => {
    optionsHTML += `
      <li>
        <button class="option-btn" data-opt-idx="${idx}">${opt}</button>
      </li>
    `;
  });
  
  div.innerHTML = `
    <div class="quiz-question-text">${question.question}</div>
    <ul class="options-list">
      ${optionsHTML}
    </ul>
    <div class="exercise-feedback correct" id="quiz-feedback-correct" style="margin-top:20px;">
      <strong>Benar!</strong> ${question.explanation}
    </div>
    <div class="exercise-feedback wrong" id="quiz-feedback-wrong" style="margin-top:20px;">
      <strong>Kurang Tepat!</strong> ${question.explanation}
    </div>
  `;
  
  // Event listener klik opsi pilihan
  div.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (currentQuiz.isChecked) return;
      
      const optIdx = parseInt(e.target.getAttribute('data-opt-idx'));
      currentQuiz.userAnswers[qIdx] = optIdx;
      
      // Highlight tombol terpilih
      div.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');
      
      DOM.quizActionBtn.disabled = false;
    });
  });
  
  DOM.quizQuestionsContainer.appendChild(div);
  
  // Atur navigasi tombol kuis
  DOM.quizPrevBtn.style.visibility = qIdx > 0 ? 'visible' : 'hidden';
  
  // Reset tombol eksekusi
  currentQuiz.isChecked = false;
  DOM.quizActionBtn.disabled = currentQuiz.userAnswers[qIdx] === null;
  DOM.quizActionBtn.innerText = "Cek Jawaban";
  
  // Jika pertanyaan ini sudah pernah dijawab sebelumnya dan dicek
  const savedAns = currentQuiz.userAnswers[qIdx];
  if (savedAns !== null) {
    const selectedBtn = div.querySelector(`[data-opt-idx="${savedAns}"]`);
    if (selectedBtn) selectedBtn.classList.add('selected');
  }
}

// Handler Tombol Aksi Kuis Utama (Cek Jawaban / Lanjut)
DOM.quizActionBtn.addEventListener('click', () => {
  const qIdx = currentQuiz.currentIndex;
  const question = currentQuiz.questions[qIdx];
  const userAns = currentQuiz.userAnswers[qIdx];
  
  const container = document.querySelector('.quiz-question-container');
  const buttons = container.querySelectorAll('.option-btn');
  const feedbackCorrect = document.getElementById('quiz-feedback-correct');
  const feedbackWrong = document.getElementById('quiz-feedback-wrong');
  
  if (!currentQuiz.isChecked) {
    // 1. TAHAP PENGECEKAN JAWABAN (CEK JAWABAN)
    currentQuiz.isChecked = true;
    
    buttons.forEach((btn, idx) => {
      btn.disabled = true; // Kunci semua tombol
      if (idx === question.correctAnswer) {
        btn.classList.add('correct');
      } else if (idx === userAns) {
        btn.classList.add('wrong');
      }
    });
    
    if (userAns === question.correctAnswer) {
      feedbackCorrect.style.display = 'block';
    } else {
      feedbackWrong.style.display = 'block';
    }
    
    // Ganti teks tombol menjadi Lanjut
    if (qIdx === currentQuiz.questions.length - 1) {
      DOM.quizActionBtn.innerText = "Lihat Hasil Akhir";
    } else {
      DOM.quizActionBtn.innerText = "Pertanyaan Berikutnya →";
    }
  } else {
    // 2. TAHAP NAVIGASI (LANJUT)
    if (qIdx < currentQuiz.questions.length - 1) {
      currentQuiz.currentIndex += 1;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  }
});

DOM.quizPrevBtn.addEventListener('click', () => {
  if (currentQuiz.currentIndex > 0) {
    currentQuiz.currentIndex -= 1;
    renderQuizQuestion();
  }
});

function showQuizResults() {
  const totalQuestions = currentQuiz.questions.length;
  let correctCount = 0;
  
  currentQuiz.questions.forEach((q, idx) => {
    if (currentQuiz.userAnswers[idx] === q.correctAnswer) {
      correctCount++;
    }
  });
  
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const passed = scorePercent >= 80;
  
  // Simpan nilai ke state
  userState.quizScores[currentQuiz.phaseId] = scorePercent;
  
  if (passed) {
    if (!userState.completedPhases.includes(currentQuiz.phaseId)) {
      userState.completedPhases.push(currentQuiz.phaseId);
    }
    
    // Unlock fase berikutnya jika belum terbuka
    const nextPhaseId = currentQuiz.phaseId + 1;
    if (nextPhaseId <= 5 && !userState.unlockedPhases.includes(nextPhaseId)) {
      userState.unlockedPhases.push(nextPhaseId);
    }
    
    DOM.resultIcon.innerText = "🎉";
    DOM.resultIcon.className = "result-icon success";
    DOM.resultTitle.innerText = `Selamat, Anda Lulus Fase ${currentQuiz.phaseId}!`;
    DOM.resultDesc.innerText = `Anda lulus dengan nilai di atas passing grade (80%). Pintu gerbang Fase ${nextPhaseId <= 5 ? nextPhaseId : 5} kini telah terbuka lebar untuk Anda.`;
    DOM.resultScore.className = "result-score-value passed";
    DOM.resultContinueBtn.style.display = 'inline-flex';
  } else {
    DOM.resultIcon.innerText = "❌";
    DOM.resultIcon.className = "result-icon failure";
    DOM.resultTitle.innerText = "Maaf, Anda Belum Lulus.";
    DOM.resultDesc.innerText = "Nilai Anda masih di bawah standar kelulusan minimal (80%). Jangan berkecil hati, pelajari kembali materi teorinya dan coba lagi.";
    DOM.resultScore.className = "result-score-value failed";
    DOM.resultContinueBtn.style.display = 'none';
  }
  
  DOM.resultScore.innerText = `${scorePercent}%`;
  saveStateToLocalStorage();
  updateUIForUser();
  
  // Arahkan ke panel hasil kuis
  switchView('quizResult');
  
  DOM.resultRetryBtn.onclick = () => {
    startPhaseQuiz(currentQuiz.phaseId);
    switchView('quiz');
  };
  
  DOM.resultContinueBtn.onclick = () => {
    window.location.hash = '#dashboard';
  };
}

// 13. SPECIAL PERSONALITY QUIZ (WEEK 15)
let selectedPQuizAnswers = {};

function renderPersonalityQuiz() {
  selectedPQuizAnswers = {};
  DOM.pquizContainer.innerHTML = '';
  DOM.pquizResultBox.style.display = 'none';
  DOM.pquizFooter.style.display = 'flex';
  DOM.pquizSubmitBtn.disabled = true;
  
  // Render pendahuluan teori Minggu 15
  const week15Data = getWeekData(15);
  const pquizIntro = document.getElementById('pquiz-intro-theory');
  if (pquizIntro && week15Data) {
    pquizIntro.innerHTML = week15Data.theory;
  }
  
  const qData = ACADEMY_DATA.personalityQuiz;
  
  qData.questions.forEach((q, idx) => {
    selectedPQuizAnswers[q.id] = null;
    
    const div = document.createElement('div');
    div.className = 'exercise-item';
    div.id = `pquestion-${q.id}`;
    
    let optionsHTML = '';
    q.options.forEach((opt, optIdx) => {
      optionsHTML += `
        <li>
          <button class="option-btn" data-q-id="${q.id}" data-opt-idx="${optIdx}" data-method="${q.results[optIdx]}">
            ${opt}
          </button>
        </li>
      `;
    });
    
    div.innerHTML = `
      <div class="exercise-question">${q.question}</div>
      <ul class="options-list">
        ${optionsHTML}
      </ul>
    `;
    
    div.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qId = e.target.getAttribute('data-q-id');
        const optIdx = parseInt(e.target.getAttribute('data-opt-idx'));
        const method = e.target.getAttribute('data-method');
        
        selectedPQuizAnswers[qId] = method;
        
        // Highlight active choice
        div.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
        
        // Cek jika seluruh 5 soal kepribadian telah terisi
        const allAnswered = Object.values(selectedPQuizAnswers).every(val => val !== null);
        DOM.pquizSubmitBtn.disabled = !allAnswered;
      });
    });
    
    DOM.pquizContainer.appendChild(div);
  });
}

DOM.pquizSubmitBtn.addEventListener('click', () => {
  // Hitung jumlah jawaban terbanyak
  const answers = Object.values(selectedPQuizAnswers);
  const counts = { SNR: 0, SMC: 0, SND: 0 };
  
  answers.forEach(ans => {
    if (counts[ans] !== undefined) counts[ans]++;
  });
  
  let recommendedMethod = "SNR";
  let maxCount = counts.SNR;
  
  if (counts.SMC > maxCount) {
    recommendedMethod = "SMC";
    maxCount = counts.SMC;
  }
  if (counts.SND > maxCount) {
    recommendedMethod = "SND";
  }
  
  // Tampilkan box hasil rekomendasi
  DOM.pquizFooter.style.display = 'none';
  DOM.pquizResultBox.style.display = 'block';
  
  let resTitle = "";
  let resDesc = "";
  
  if (recommendedMethod === "SNR") {
    resTitle = "Rekomendasi Anda: SNR (Support & Resistance)";
    resDesc = "Kepribadian Anda cenderung menyukai kepraktisan, kecepatan analisa, serta ketenangan dari grafik yang terstruktur rapi. Anda sangat cocok memulai dengan metode SNR. Metode ini melatih pemahaman 'lantai' dan 'plafon' harga emas di H4/H1 secara rasional. Pembelajaran terperinci Anda akan dimulai di Minggu 16!";
  } else if (recommendedMethod === "SMC") {
    resTitle = "Rekomendasi Anda: SMC (Smart Money Concept)";
    resDesc = "Anda memiliki kepribadian yang sangat analitis, sabar, menyukai detail strategi layaknya bermain catur, dan mengincar profit besar dengan risiko Stop Loss ketat. Metode SMC sangat cocok melacak jejak raksasa institusi keuangan global. Pembelajaran terperinci Anda dimulai di Minggu 20!";
  } else {
    resTitle = "Rekomendasi Anda: SND (Supply & Demand)";
    resDesc = "Anda adalah orang yang seimbang (balance). Anda menyukai logika hukum ekonomi murni (penawaran & permintaan) dan menyukai fleksibilitas dalam menghadapi segala kondisi pasar. Metode SND menawarkan akurasi entri di zona base murni. Pembelajaran terperinci Anda dimulai di Minggu 24!";
  }
  
  DOM.pquizResultTitle.innerText = resTitle;
  DOM.pquizResultDesc.innerText = resDesc;
  
  // Simpan hasil ke state
  userState.personalityResult = recommendedMethod;
  
  // Scroll mulus ke box hasil kuis
  DOM.pquizResultBox.scrollIntoView({ behavior: 'smooth' });
});

DOM.pquizResultConfirmBtn.addEventListener('click', () => {
  // Selesaikan Minggu 15
  if (!userState.completedWeeks.includes(15)) {
    userState.completedWeeks.push(15);
  }
  saveStateToLocalStorage();
  updateUIForUser();
  
  // Arahkan ke materi metode rekomendasi langsung
  if (userState.personalityResult === "SNR") {
    window.location.hash = '#week-16';
  } else if (userState.personalityResult === "SMC") {
    window.location.hash = '#week-20';
  } else {
    window.location.hash = '#week-24';
  }
});

// 14. GLOSSARY LOGIC
function renderGlossary() {
  DOM.glossaryContainer.innerHTML = '';
  
  ACADEMY_DATA.glossary.forEach(item => {
    const div = document.createElement('div');
    div.className = 'glossary-item';
    div.setAttribute('data-term', item.term.toLowerCase());
    div.setAttribute('data-def', item.definition.toLowerCase());
    
    div.innerHTML = `
      <div class="glossary-term">${item.term}</div>
      <div class="glossary-definition">${item.definition}</div>
    `;
    DOM.glossaryContainer.appendChild(div);
  });
}

// Event handler live search glossary
DOM.glossarySearch.addEventListener('keyup', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const items = DOM.glossaryContainer.querySelectorAll('.glossary-item');
  
  // Remove existing empty state
  const existingEmpty = DOM.glossaryContainer.querySelector('.glossary-empty-state');
  if (existingEmpty) existingEmpty.remove();
  
  let visibleCount = 0;
  items.forEach(item => {
    const term = item.getAttribute('data-term');
    const def = item.getAttribute('data-def');
    
    if (term.includes(query) || def.includes(query)) {
      item.style.display = 'block';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });
  
  // Show empty state if no results
  if (visibleCount === 0 && query.length > 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'glossary-empty-state';
    emptyDiv.innerHTML = `
      <div class="empty-icon">🔍</div>
      <p>Tidak ada istilah yang cocok dengan "<strong>${query}</strong>"</p>
      <p style="margin-top: 8px; font-size: 0.8rem;">Coba gunakan kata kunci lain</p>
    `;
    DOM.glossaryContainer.appendChild(emptyDiv);
  }
});

// 15. CERTIFICATE GENERATION LOGIC
function renderCertificate() {
  DOM.certUserName.innerText = userState.name.toUpperCase();
  
  // Format tanggal kelulusan hari ini dalam bahasa Indonesia
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString('id-ID', options);
  DOM.certDate.innerText = today;
}

DOM.certPrintBtn.addEventListener('click', () => {
  window.print();
});

DOM.certBackBtn.addEventListener('click', () => {
  window.location.hash = '#dashboard';
});

// 16. STATIC INTERACTIONS (SIDEBAR TOGGLE & NAME FORM)
function initEventListeners() {
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  
  // Mobile Sidebar Toggle with overlay
  DOM.menuToggle.addEventListener('click', () => {
    const isOpen = DOM.sidebar.classList.toggle('mobile-open');
    sidebarOverlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  // Close sidebar when clicking overlay
  sidebarOverlay.addEventListener('click', () => {
    DOM.sidebar.classList.remove('mobile-open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Submit modal nama user baru
  DOM.nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputVal = DOM.nameInput.value.trim();
    if (inputVal) {
      userState.name = inputVal;
      saveStateToLocalStorage();
      DOM.nameModal.classList.remove('active-modal');
      updateUIForUser();
      
      // Update subtitle header welcome
      DOM.headerSubtitle.innerText = `Selamat datang kembali, ${userState.name}`;
      router();
      showToast('Selamat datang, ' + userState.name + '! 🚀');
    }
  });

  // Tombol Mulai Belajar di Dashboard
  DOM.dashboardStartBtn.addEventListener('click', () => {
    // Cari minggu terkecil yang belum diselesaikan
    let targetWeekId = 1;
    for (let w = 1; w <= 32; w++) {
      if (!userState.completedWeeks.includes(w)) {
        targetWeekId = w;
        break;
      }
    }
    window.location.hash = `#week-${targetWeekId}`;
  });

  // Tombol locked view placeholder
  DOM.lockedBtn.addEventListener('click', () => {
    window.location.hash = '#dashboard';
  });
  
  // Edit Profile Button
  const editProfileBtn = document.getElementById('edit-profile-btn');
  const editProfileModal = document.getElementById('edit-profile-modal');
  const editProfileForm = document.getElementById('edit-profile-form');
  const editNameInput = document.getElementById('edit-name-input');
  const editProfileCloseBtn = document.getElementById('edit-profile-close-btn');
  const resetProgressBtn = document.getElementById('reset-progress-btn');
  
  editProfileBtn.addEventListener('click', () => {
    editNameInput.value = userState.name;
    editProfileModal.classList.add('active-modal');
  });
  
  editProfileCloseBtn.addEventListener('click', () => {
    editProfileModal.classList.remove('active-modal');
  });
  
  // Close edit modal on overlay click
  editProfileModal.addEventListener('click', (e) => {
    if (e.target === editProfileModal) {
      editProfileModal.classList.remove('active-modal');
    }
  });
  
  editProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = editNameInput.value.trim();
    if (newName) {
      userState.name = newName;
      saveStateToLocalStorage();
      editProfileModal.classList.remove('active-modal');
      updateUIForUser();
      DOM.headerSubtitle.innerText = `Selamat datang kembali, ${userState.name}`;
      showToast('Nama berhasil diperbarui ✅');
    }
  });
  
  resetProgressBtn.addEventListener('click', () => {
    if (confirm('⚠️ Apakah Anda yakin ingin mereset seluruh progress?\n\nSemua materi yang sudah diselesaikan, skor kuis, dan badge akan dihapus. Tindakan ini tidak dapat dibatalkan.')) {
      const userName = userState.name;
      userState = {
        name: userName,
        currentPhase: 1,
        currentWeek: 1,
        unlockedPhases: [1],
        completedWeeks: [],
        quizScores: {},
        completedPhases: [],
        personalityResult: null,
        streak: 1,
        lastActiveDate: new Date().toISOString().split('T')[0]
      };
      saveStateToLocalStorage();
      editProfileModal.classList.remove('active-modal');
      updateUIForUser();
      window.location.hash = '#dashboard';
      showToast('Progress berhasil direset 🔄');
    }
  });
}

function initSidebarNavigation() {
  // Binding rute pada data-view yang bukan minggu (misal glossary, dashboard)
  document.querySelectorAll('[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      const view = e.currentTarget.getAttribute('data-view');
      // Jika cert dikunci, skip klik
      if (view === 'certificate' && e.currentTarget.classList.contains('locked')) {
        return;
      }
      window.location.hash = `#${view}`;
    });
  });
}

// 17. SIDEBAR ACCORDION (COLLAPSIBLE FASE)
function initSidebarAccordion() {
  const toggles = document.querySelectorAll('[data-phase-toggle]');
  
  toggles.forEach(toggle => {
    const phaseId = toggle.getAttribute('data-phase-toggle');
    const weekList = document.getElementById(`phase-list-${phaseId}`);
    
    if (!weekList) return;
    
    // Default: collapse semua kecuali fase 1 (atau fase aktif)
    const activePhase = getActivePhaseId();
    if (parseInt(phaseId) !== activePhase) {
      toggle.classList.add('collapsed');
      weekList.classList.add('collapsed');
    } else {
      // Set max-height untuk fase yang terbuka
      weekList.style.maxHeight = weekList.scrollHeight + 200 + 'px';
    }
    
    toggle.addEventListener('click', () => {
      const isCollapsed = toggle.classList.contains('collapsed');
      
      if (isCollapsed) {
        // Expand
        toggle.classList.remove('collapsed');
        weekList.classList.remove('collapsed');
        weekList.style.maxHeight = weekList.scrollHeight + 200 + 'px';
      } else {
        // Collapse
        toggle.classList.add('collapsed');
        weekList.style.maxHeight = weekList.scrollHeight + 'px';
        // Force reflow
        weekList.offsetHeight;
        weekList.classList.add('collapsed');
      }
    });
  });
}

function getActivePhaseId() {
  for (let i = 5; i >= 1; i--) {
    if (userState.unlockedPhases.includes(i)) return i;
  }
  return 1;
}

// Refresh accordion max-heights after sidebar content changes
function refreshAccordionHeights() {
  document.querySelectorAll('[data-phase-toggle]').forEach(toggle => {
    const phaseId = toggle.getAttribute('data-phase-toggle');
    const weekList = document.getElementById(`phase-list-${phaseId}`);
    if (weekList && !weekList.classList.contains('collapsed')) {
      weekList.style.maxHeight = weekList.scrollHeight + 200 + 'px';
    }
  });
}

// 18. BACK TO TOP BUTTON
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 19. TOAST NOTIFICATION HELPER
function showToast(message, duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✔</span> ${message}`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}
