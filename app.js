/* ==========================================================================
   OLIVIAS KAFFE BUDDY - APPLICATION LOGIC & RECIPE DATABASE
   ========================================================================== */

// 1. Complete Recipe Database (SVGs included for modern, crisp, vector designs)
const RECIPES = [
    {
        id: "cappuccino",
        name: "Cappuccino",
        category: "small",
        categoryText: "Små kopper",
        tagline: "Mye skum & digg kanel",
        // Beautiful Neo-Brutalist SVG coffee cup
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <!-- Cup outline -->
            <rect x="25" y="45" width="50" height="40" rx="12" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" />
            <!-- Cup handle -->
            <path d="M75 52 C85 52, 85 70, 75 70" fill="none" stroke="#1E1C1A" stroke-width="4" stroke-linecap="round" />
            <!-- Coffee liquid top -->
            <ellipse cx="50" cy="45" rx="23" ry="5" fill="#4E3629" stroke="#1E1C1A" stroke-width="3" />
            <!-- Lots of fluffy foam bubbles -->
            <circle cx="38" cy="41" r="6" fill="#F3E5D8" stroke="#1E1C1A" stroke-width="2" />
            <circle cx="50" cy="38" r="8" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="2" />
            <circle cx="62" cy="41" r="6" fill="#F3E5D8" stroke="#1E1C1A" stroke-width="2" />
            <circle cx="44" cy="42" r="5" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="2" />
            <circle cx="56" cy="42" r="5" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="2" />
            <!-- Steam lines -->
            <path d="M38 25 Q41 18, 38 12" fill="none" stroke="#1E1C1A" stroke-width="3" stroke-linecap="round" />
            <path d="M50 22 Q53 15, 50 10" fill="none" stroke="#1E1C1A" stroke-width="3" stroke-linecap="round" />
            <path d="M62 25 Q65 18, 62 12" fill="none" stroke="#1E1C1A" stroke-width="3" stroke-linecap="round" />
            <!-- Cinnamon sprinkles representation -->
            <circle cx="48" cy="35" r="1.2" fill="#D84315" />
            <circle cx="53" cy="34" r="1" fill="#D84315" />
            <circle cx="44" cy="36" r="1.5" fill="#D84315" />
            <circle cx="56" cy="36" r="1.2" fill="#D84315" />
        </svg>`,
        steps: [
            "Kaffe: Lag <strong>1 eller 2 espresso-shots</strong> rett i koppen.",
            "Melk: Fyll melkekannen til <strong>rett under streken</strong>.",
            "Steaming: Blås ut luft 💨 → Velg <strong>Cappuccino-programmet</strong>.",
            "Hell: Hell melken rolig til koppen er fylt <strong>helt opp til kanten</strong>."
        ],
        alert: {
            title: "🚨 Husk kanel!",
            text: "Spør alltid kunden om de vil ha deilig kanel strødd på toppen!"
        }
    },
    {
        id: "americano",
        name: "Americano",
        category: "small",
        categoryText: "Små kopper",
        tagline: "Vannet først, takk!",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <rect x="25" y="45" width="50" height="40" rx="12" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" />
            <path d="M75 52 C85 52, 85 70, 75 70" fill="none" stroke="#1E1C1A" stroke-width="4" stroke-linecap="round" />
            <!-- Dark water and espresso layer -->
            <ellipse cx="50" cy="45" rx="23" ry="5" fill="#3E2723" stroke="#1E1C1A" stroke-width="3" />
            <!-- Hot water pouring indicator -->
            <path d="M35 15 L35 38" fill="none" stroke="#29B6F6" stroke-width="3" stroke-dasharray="4,4" stroke-linecap="round" />
            <!-- Rising heat wave -->
            <path d="M50 25 Q53 18, 50 12" fill="none" stroke="#1E1C1A" stroke-width="3" stroke-linecap="round" />
            <path d="M60 27 Q63 20, 60 14" fill="none" stroke="#1E1C1A" stroke-width="3" stroke-linecap="round" />
        </svg>`,
        steps: [
            "Vann: Fyll koppen <strong>halvfull med varmt vann</strong> først.",
            "Kaffe: Lag <strong>1 eller 2 espresso-shots</strong> rett oppi vannet til slutt for å beholde cremaen."
        ],
        alert: null
    },
    {
        id: "espresso",
        name: "Espresso",
        category: "small",
        categoryText: "Små kopper",
        tagline: "Ren energi - kjapt og enkelt",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <!-- Very small cup -->
            <rect x="32" y="55" width="36" height="30" rx="8" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" />
            <path d="M68 60 C75 60, 75 75, 68 75" fill="none" stroke="#1E1C1A" stroke-width="4" stroke-linecap="round" />
            <!-- Concentrated dark espresso liquid -->
            <ellipse cx="50" cy="55" rx="16" ry="4" fill="#3E2723" stroke="#1E1C1A" stroke-width="3" />
            <!-- Crema swirls -->
            <path d="M42 55 Q50 53, 58 55" fill="none" stroke="#FFA726" stroke-width="2.5" />
            <!-- Double steam line -->
            <path d="M46 38 Q48 30, 46 24" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
            <path d="M54 38 Q56 30, 54 24" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
        </svg>`,
        steps: [
            "Kaffe: Kjør <strong>1 eller 2 vanlige shots</strong> med espresso rett i den lille koppen.",
            "Servering: Ferdig! Ingen melk, ingen dikkedarier, bare ren kraft."
        ],
        alert: null
    },
    {
        id: "cortado",
        name: "Cortado",
        category: "small",
        categoryText: "Små kopper",
        tagline: "50/50 kaffe og melk - manuell steam",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <!-- Glass cup style -->
            <path d="M30 45 L35 80 C36 83, 64 83, 65 80 L70 45 Z" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" stroke-linejoin="round" />
            <!-- Liquid levels: Espresso on bottom, milk on top -->
            <path d="M35 80 L32.5 62 L67.5 62 L65 80 Z" fill="#5D4037" />
            <path d="M32.5 62 L30 45 L70 45 L67.5 62 Z" fill="#D7CCC8" stroke="#1E1C1A" stroke-width="3" />
            <!-- Steam -->
            <path d="M50 25 Q53 18, 50 12" fill="none" stroke="#1E1C1A" stroke-width="3" stroke-linecap="round" />
        </svg>`,
        steps: [
            "Kaffe: Lag <strong>1 eller 2 espresso-shots</strong> i en liten kopp.",
            "Melk: Hell opp <strong>halvparten så mye melk</strong> som til en latte i en metallkanne.",
            "Steaming: Bruk den <strong>manuelle steameren</strong>! Blås ut luft først 💨. Hold i kannen til den er så varm at du nesten brenner deg.",
            "Hell: Bruk en skje til å <strong>holde igjen skummet</strong> mens du fyller koppen til den er <strong>3/4 full</strong>."
        ],
        alert: null
    },
    {
        id: "flatwhite",
        name: "Flat White",
        category: "small",
        categoryText: "Små kopper",
        tagline: "Som en Cortado, fyll helt opp",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <rect x="25" y="45" width="50" height="40" rx="12" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" />
            <path d="M75 52 C85 52, 85 70, 75 70" fill="none" stroke="#1E1C1A" stroke-width="4" stroke-linecap="round" />
            <!-- Liquid inside -->
            <ellipse cx="50" cy="45" rx="23" ry="5" fill="#4E3629" stroke="#1E1C1A" stroke-width="3" />
            <!-- Milk leaf art representing microfoam -->
            <path d="M50 48 Q45 42, 50 40 Q55 42, 50 48" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="2" />
            <path d="M47 43 Q50 42, 53 43" fill="none" stroke="#1E1C1A" stroke-width="1.5" />
            <!-- Steam -->
            <path d="M45 25 Q48 18, 45 12" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
            <path d="M55 25 Q58 18, 55 12" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
        </svg>`,
        steps: [
            "Forberedelser: Gjør alt <strong>helt likt som med en Cortado</strong> (kaffe, melkemengde og manuell steaming).",
            "Hell: Når du skal helle: <strong>Bare hell melken rolig helt opp</strong> til kanten uten å bruke skje for å holde igjen skummet."
        ],
        alert: null
    },
    {
        id: "caffelatte",
        name: "Caffè Latte",
        category: "large",
        categoryText: "Store kopper",
        tagline: "Masse digg melk",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <!-- Tall glass -->
            <path d="M30 30 L38 85 C39 88, 61 88, 62 85 L70 30 Z" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" stroke-linejoin="round" />
            <!-- Milk-coffee gradient layers inside -->
            <path d="M37.5 80 L35.5 68 L64.5 68 L62.5 80 Z" fill="#5D4037" />
            <path d="M35.5 68 L32.8 48 L67.2 48 L64.5 68 Z" fill="#B08968" />
            <path d="M32.8 48 L30 30 L70 30 L67.2 48 Z" fill="#F3E5D8" stroke="#1E1C1A" stroke-width="2" />
            <!-- Small foam head on top -->
            <ellipse cx="50" cy="30" rx="19.5" ry="4" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="2.5" />
            <!-- Heat ripples -->
            <path d="M45 18 Q48 12, 45 6" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
            <path d="M55 18 Q58 12, 55 6" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
        </svg>`,
        steps: [
            "Kaffe: Lag <strong>1 eller 2 espresso-shots</strong> i bunnen av det store glasset.",
            "Melk: Fyll melk til <strong>streken</strong> i metallkannen.",
            "Steaming: Blås ut luft 💨 → Velg det automatiske <strong>Latte-programmet</strong>.",
            "Hell: Hell den deilige, varme melken <strong>rolig i kaffen helt opp til kanten</strong>."
        ],
        alert: null
    },
    {
        id: "mocca",
        name: "Mocca",
        category: "large",
        categoryText: "Store kopper",
        tagline: "Sjokolade + kaffe = sant",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <path d="M30 30 L38 85 C39 88, 61 88, 62 85 L70 30 Z" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" stroke-linejoin="round" />
            <!-- Bottom chocolate syrup layer -->
            <path d="M37.5 80 L36.7 74 L63.3 74 L62.5 80 Z" fill="#3E2723" />
            <!-- Coffee/milk mix -->
            <path d="M36.7 74 L32.8 48 L67.2 48 L63.3 74 Z" fill="#6D4C41" />
            <path d="M32.8 48 L30 30 L70 30 L67.2 48 Z" fill="#E0D4C3" stroke="#1E1C1A" stroke-width="2" />
            <!-- Dustings of chocolate on foam -->
            <ellipse cx="50" cy="30" rx="19.5" ry="4" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="2.5" />
            <circle cx="45" cy="30" r="1.5" fill="#3E2723" />
            <circle cx="55" cy="31" r="1" fill="#3E2723" />
            <circle cx="50" cy="29" r="1.2" fill="#3E2723" />
        </svg>`,
        steps: [
            "Sjokolade: Start med å pumpe <strong>sjokoladesirup i bunnen</strong> av glasset først.",
            "Melk: Fyll melk til streken i kannen, og start <strong>Latte-programmet</strong> på steameren.",
            "Kaffe: Kjør espresso <strong>rett ned i sjokoladesirupen</strong>, og rør <strong>sykt godt rundt med en skje</strong> før du gjør noe annet slik at det smelter sammen.",
            "Hell: Hell den varme, skummede melken rolig oppi til slutt."
        ],
        alert: null
    },
    {
        id: "hotchocolate",
        name: "Hot Chocolate",
        category: "large",
        categoryText: "Store kopper",
        tagline: "Glem kaffen, gi meg sjokolade",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <!-- Classic Red Mug -->
            <rect x="25" y="40" width="50" height="45" rx="12" fill="#FF5252" stroke="#1E1C1A" stroke-width="4" />
            <path d="M75 48 C85 48, 85 72, 75 72" fill="none" stroke="#1E1C1A" stroke-width="4" stroke-linecap="round" />
            <!-- Rich hot chocolate liquid -->
            <ellipse cx="50" cy="40" rx="23" ry="5" fill="#3E2723" stroke="#1E1C1A" stroke-width="3" />
            <!-- Beautiful whipped cream swirl -->
            <path d="M38 38 C38 28, 62 28, 62 38 Z" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="2.5" />
            <path d="M44 32 C44 24, 56 24, 56 32 Z" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="2" />
            <!-- Steam -->
            <path d="M50 18 Q53 12, 50 6" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
        </svg>`,
        steps: [
            "Melk: Fyll melk i kannen (<strong>samme mengde</strong> som til en vanlig Caffe Latte).",
            "Sjokolade: Pump <strong>5–10 ganger med sjokolade</strong> rett i melken. Rør til den ser skikkelig brun og digg ut.",
            "Steaming: Blås ut damp fra dysen 💨 → Velg det vanlige <strong>Latte-programmet</strong>."
        ],
        alert: {
            title: "🚨 Husk billing og krem!",
            text: "Spør alltid kunden om de vil ha digg krem på toppen! (+3 kr ekstra legges til på kassa)."
        }
    },
    {
        id: "iskaffe",
        name: "Iskaffe Latte",
        category: "cold",
        categoryText: "Iskaffe & Filter",
        tagline: "Nedkjølt favoritt",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <!-- Takeaway plastic cup -->
            <path d="M32 25 L38 85 C39 88, 61 88, 62 85 L68 25 Z" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" stroke-linejoin="round" />
            <!-- Liquid and ice cubes -->
            <path d="M36.3 68 L32.8 33 L67.2 33 L63.7 68 Z" fill="#D7CCC8" opacity="0.8" />
            <!-- Coffee floating down -->
            <path d="M34.5 50 L32.8 33 L67.2 33 L65.5 50 Z" fill="#5D4037" />
            <!-- Ice cube squares -->
            <rect x="40" y="44" width="12" height="12" rx="2" transform="rotate(15 46 50)" fill="#E0F2F1" stroke="#1E1C1A" stroke-width="2" />
            <rect x="52" y="55" width="12" height="12" rx="2" transform="rotate(-10 58 61)" fill="#E0F2F1" stroke="#1E1C1A" stroke-width="2" />
            <!-- Green Straw -->
            <path d="M52 8 L52 25 L48 80" fill="none" stroke="#4CAF50" stroke-width="4" stroke-linecap="round" />
            <!-- Cup rim lid -->
            <rect x="29" y="21" width="42" height="5" rx="2" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="3" />
        </svg>`,
        steps: [
            "Sjekk bestilling: Har kunden valgt sirup i iskaffen sin?",
            "<strong>Dersom JA:</strong> Pump sirup i bunnen av plastbegeret (1-2 pumper for enkel, 2-4 for dobbel). Kjør espresso rett oppi og rør ut sirupen. Hell i bittelitt melk, fyll på med masse isbiter, og etterfyll med melk.",
            "<strong>Dersom NEI:</strong> Kjør espressoen i det lille metallmålet. Fyll plastbegeret med isbiter og melk først, hell kaffen over til slutt, og etterfyll med melk til toppen."
        ],
        alert: {
            title: "🚨 Husk tilbehør & smil!",
            text: "Sett på plastlokk, tilby sugerør og server med et stort og hyggelig smil!"
        }
    },
    {
        id: "traktekaffe",
        name: "Vanlig Traktekaffe",
        category: "large",
        categoryText: "Filter",
        tagline: "Klassikeren",
        icon: `
        <svg viewBox="0 0 100 100" class="coffee-svg">
            <!-- Glass Coffee Carafe -->
            <path d="M35 35 L30 75 C29 82, 71 82, 70 75 L65 35 Z" fill="#FFFFFF" stroke="#1E1C1A" stroke-width="4" stroke-linejoin="round" />
            <!-- Handle -->
            <path d="M30 45 L20 45 L20 68 L28 68" fill="none" stroke="#1E1C1A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <!-- Filter coffee level -->
            <path d="M32.5 55 L30.6 70 C29 82, 71 82, 69.4 70 L67.5 55 Z" fill="#3E2723" stroke="#1E1C1A" stroke-width="1" />
            <!-- Metal filter band mock -->
            <rect x="34.5" y="44" width="31" height="5" fill="#B0BEC5" stroke="#1E1C1A" stroke-width="2.5" />
            <!-- Steam -->
            <path d="M45 23 Q48 16, 45 10" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
            <path d="M55 23 Q58 16, 55 10" fill="none" stroke="#1E1C1A" stroke-width="2.5" stroke-linecap="round" />
        </svg>`,
        steps: [
            "Koppstørrelse: Spør kunden: <strong>'Vil du ha stor eller liten kopp?'</strong>",
            "Tilbehør: Spør kunden: <strong>'Vil du ha melk i kaffen din?'</strong>",
            "Servering: Hell kaffen rolig fra kolben opp i koppen og kos deg."
        ],
        alert: null
    }
];

// 2. Synthesized Web Audio API Feedback (Zero download requirements!)
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play tactual clicking sound on card taps and controls
function playClickSound() {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    // Quick organic analog pop sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, audioCtx.currentTime + 0.08);
    
    gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
}

// Play sweet two-tone chime upon completing all checklist recipe steps
function playChimeSound() {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const now = audioCtx.currentTime;
    
    // Low bell (E5)
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(659.25, now);
    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
    osc1.start(now);
    osc1.stop(now + 0.3);
    
    // High bell (A5)
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880.00, now + 0.1);
    gain2.gain.setValueAtTime(0.12, now + 0.1);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.1 + 0.35);
    osc2.start(now + 0.1);
    osc2.stop(now + 0.1 + 0.4);
}

// 3. UI DOM Cache Reference
const recipeGrid = document.getElementById("recipe-grid");
const noResults = document.getElementById("no-results");
const searchInput = document.getElementById("recipe-search");
const clearSearchBtn = document.getElementById("clear-search");
const tabs = document.querySelectorAll(".category-tab");
const statusTime = document.getElementById("status-time");

// Drawer DOM
const drawer = document.getElementById("recipe-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const drawerClose = document.getElementById("drawer-close");
const drawerIcon = document.getElementById("drawer-recipe-icon");
const drawerTitle = document.getElementById("drawer-recipe-title");
const drawerTagline = document.getElementById("drawer-recipe-tagline");
const drawerSectionTitle = document.getElementById("drawer-section-title");
const drawerChecklistGuide = document.getElementById("drawer-checklist-guide");
const recipeChecklist = document.getElementById("recipe-checklist");
const recipeAlertsContainer = document.getElementById("recipe-alerts-container");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const btnCompleteRecipe = document.getElementById("btn-complete-recipe");
const particlesContainer = document.getElementById("particles-container");

// Carousel DOM
const hacksTrack = document.getElementById("hacks-track");
const indicators = document.querySelectorAll(".indicator");

// 4. App States
let currentFilter = "all";
let searchQuery = "";
let currentActiveRecipe = null;
let currentSlideIndex = 0;
let carouselInterval = null;

// Stengerutiner DOM
const btnRoutineBefore = document.getElementById("btn-routine-before");
const btnRoutineAfter = document.getElementById("btn-routine-after");
const msgBeforeSuccess = document.getElementById("msg-before-success");
const msgAfterSuccess = document.getElementById("msg-after-success");

// Stengerutiner Tilstand (persistent i localStorage)
let checkedBefore17 = [];
try {
    const stored = localStorage.getItem("checked_before_17");
    if (stored) checkedBefore17 = JSON.parse(stored);
    if (!Array.isArray(checkedBefore17)) checkedBefore17 = [];
} catch (e) {
    checkedBefore17 = [];
}

let checkedAfter17 = [];
try {
    const stored = localStorage.getItem("checked_after_17");
    if (stored) checkedAfter17 = JSON.parse(stored);
    if (!Array.isArray(checkedAfter17)) checkedAfter17 = [];
} catch (e) {
    checkedAfter17 = [];
}

let currentActiveRoutineType = null; // "before", "after", eller null

// Realtime Status Bar Clock (Guarded safely since status bar was removed)
function updateClock() {
    if (!statusTime) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    statusTime.textContent = `${hours}:${minutes}`;
}
if (statusTime) {
    setInterval(updateClock, 1000);
    updateClock();
}

// 5. Card Rendering Engine
function renderRecipeCards() {
    recipeGrid.innerHTML = "";
    
    // Skjul/vis stengerutiner basert på søk eller filter
    const closingRoutinesSection = document.getElementById("closing-routines-section");
    if (closingRoutinesSection) {
        if (searchQuery !== "" || currentFilter !== "all") {
            closingRoutinesSection.style.display = "none";
        } else {
            closingRoutinesSection.style.display = "block";
        }
    }
    
    // Filter recipes
    const filteredRecipes = RECIPES.filter(recipe => {
        const matchesCategory = currentFilter === "all" || recipe.category === currentFilter;
        const matchesSearch = recipe.name.toLowerCase().includes(searchQuery) ||
                              recipe.tagline.toLowerCase().includes(searchQuery) ||
                              recipe.steps.some(step => step.toLowerCase().includes(searchQuery));
        return matchesCategory && matchesSearch;
    });

    if (filteredRecipes.length === 0) {
        recipeGrid.style.display = "none";
        noResults.style.display = "block";
        return;
    }

    recipeGrid.style.display = "grid";
    noResults.style.display = "none";

    filteredRecipes.forEach(recipe => {
        // Find category class for badges
        let badgeClass = "small-cup";
        if (recipe.category === "large") badgeClass = "large-cup";
        if (recipe.category === "cold") badgeClass = "iced-cup";

        const card = document.createElement("div");
        card.className = "recipe-card";
        card.setAttribute("role", "listitem");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `${recipe.name}, ${recipe.tagline}`);
        
        card.innerHTML = `
            <span class="card-category-badge ${badgeClass}">${recipe.categoryText}</span>
            <div class="recipe-card-icon-container">
                ${recipe.icon}
            </div>
            <div>
                <h3 class="recipe-card-title">${recipe.name}</h3>
                <p class="recipe-card-tagline">"${recipe.tagline}"</p>
            </div>
        `;

        // Card events (Tap & tactile interaction)
        const openAction = () => {
            playClickSound();
            // Tactile pressed state visual delay
            card.classList.add("pressed");
            setTimeout(() => {
                card.classList.remove("pressed");
                openRecipeDrawer(recipe);
            }, 80);
        };

        card.addEventListener("click", openAction);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openAction();
            }
        });

        recipeGrid.appendChild(card);
    });
}

// 6. Interactive Step-by-Step Drawer Logics
function openRecipeDrawer(recipe) {
    currentActiveRecipe = recipe;
    
    // Reset complete button visual styles
    btnCompleteRecipe.classList.remove("celebrate");
    btnCompleteRecipe.innerHTML = `<span class="btn-emoji">🎉</span> Ferdig og klar!`;

    // Draw header content
    drawerIcon.innerHTML = recipe.icon;
    drawerTitle.textContent = recipe.name;
    
    // Determine category badge class
    let badgeClass = "small-cup";
    if (recipe.category === "large") badgeClass = "large-cup";
    if (recipe.category === "cold") badgeClass = "iced-cup";
    
    drawerTagline.innerHTML = `"${recipe.tagline}" &bull; <span class="drawer-category-badge ${badgeClass}">${recipe.categoryText}</span>`;

    // Sett oppskriftstitler i skuffen
    if (drawerSectionTitle) drawerSectionTitle.textContent = "Oppskrift & Steg";
    if (drawerChecklistGuide) drawerChecklistGuide.textContent = "Huk av stegene etter hvert som du lager drikken:";

    // Draw interactive checklist steps
    recipeChecklist.innerHTML = "";
    recipe.steps.forEach((stepText, idx) => {
        const stepLabel = document.createElement("label");
        stepLabel.className = "recipe-step";
        stepLabel.innerHTML = `
            <div class="step-checkbox"></div>
            <span class="step-text">${stepText}</span>
        `;
        
        // Touch input integration
        stepLabel.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent double trigger
            playClickSound();
            stepLabel.classList.toggle("checked");
            updateProgress();
        });

        recipeChecklist.appendChild(stepLabel);
    });

    // Draw Warnings/Alerts if present
    recipeAlertsContainer.innerHTML = "";
    if (recipe.alert) {
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert-box warning";
        alertDiv.innerHTML = `
            <span class="alert-box-icon">🚨</span>
            <div class="alert-box-content">
                <strong>${recipe.alert.title}</strong>
                <p>${recipe.alert.text}</p>
            </div>
        `;
        recipeAlertsContainer.appendChild(alertDiv);
    }

    // Refresh Progress Indicator
    updateProgress();

    // Slide up drawer
    drawerOverlay.classList.add("active");
    drawer.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
}

function closeRecipeDrawer() {
    playClickSound();
    drawerOverlay.classList.remove("active");
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    currentActiveRecipe = null;
    currentActiveRoutineType = null;
}

// Recalculates checkboxes completed inside active recipe card drawer
function updateProgress() {
    const steps = recipeChecklist.querySelectorAll(".recipe-step");
    if (steps.length === 0) return;

    const checkedSteps = recipeChecklist.querySelectorAll(".recipe-step.checked");
    const percentage = Math.round((checkedSteps.length / steps.length) * 100);

    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;

    // Dynamic celebration triggers if 100% completed
    if (percentage === 100) {
        btnCompleteRecipe.classList.add("celebrate");
        btnCompleteRecipe.innerHTML = `<span class="btn-emoji">🌟</span> Kjempegodt jobba!`;
    } else {
        btnCompleteRecipe.classList.remove("celebrate");
        btnCompleteRecipe.innerHTML = `<span class="btn-emoji">🎉</span> Ferdig og klar!`;
    }
}

// Celebrates completion of coffee drink by firing tactile particle explosion
function triggerConfettiExplosion(event) {
    playChimeSound();
    
    // Determine center of trigger button to blow out particles
    const rect = btnCompleteRecipe.getBoundingClientRect();
    const screenRect = document.querySelector(".phone-screen").getBoundingClientRect();
    
    const x = rect.left - screenRect.left + rect.width / 2;
    const y = rect.top - screenRect.top;

    const colors = ["#4E3629", "#26A69A", "#FFB300", "#FF5252", "#9C27B0", "#FFFFFF", "#B08968"];
    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        
        // Random style and travel coordinates
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 8 + 4;
        
        const tx = (Math.random() - 0.5) * 180; // horizontal travel range
        const ty = -(Math.random() * 120 + 60);  // float upwards range
        const rot = Math.random() * 360;

        p.style.backgroundColor = color;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        p.style.setProperty("--tx", `${tx}px`);
        p.style.setProperty("--ty", `${ty}px`);
        p.style.setProperty("--rot", `${rot}deg`);

        // Bean shaped vector randoms
        if (Math.random() > 0.5) {
            p.style.borderRadius = "50% 30% 50% 30%";
        }

        particlesContainer.appendChild(p);

        // Remove element when anim completes
        p.addEventListener("animationend", () => {
            p.remove();
        });
    }

    // Visual button bump animation
    btnCompleteRecipe.style.transform = "scale(0.95)";
    setTimeout(() => {
        btnCompleteRecipe.style.transform = "";
        // Close modal after completion celebration
        setTimeout(closeRecipeDrawer, 600);
    }, 100);
}

// 7. Barista Hacks Carousel Controls
function goToSlide(index) {
    currentSlideIndex = index;
    // Track translate
    hacksTrack.style.transform = `translateX(-${index * 33.333}%)`;
    
    // Refresh indicators active states
    indicators.forEach((ind, idx) => {
        ind.classList.toggle("active", idx === index);
    });
}

function startCarouselTimer() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        let nextIndex = (currentSlideIndex + 1) % 3;
        goToSlide(nextIndex);
    }, 6000); // Rotates every 6 seconds
}

// 8. Global Event Listeners Registration
document.addEventListener("DOMContentLoaded", () => {
    // Initial Render
    renderRecipeCards();

    // Category Buttons Tab Switches
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            playClickSound();
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentFilter = tab.getAttribute("data-category");
            renderRecipeCards();
        });
    });

    // Search input typing
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        if (searchQuery.length > 0) {
            clearSearchBtn.style.display = "flex";
        } else {
            clearSearchBtn.style.display = "none";
        }
        renderRecipeCards();
    });

    // Clear Search Input
    clearSearchBtn.addEventListener("click", () => {
        playClickSound();
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderRecipeCards();
        searchInput.focus();
    });

    // Drawer close buttons
    drawerClose.addEventListener("click", closeRecipeDrawer);
    drawerOverlay.addEventListener("click", closeRecipeDrawer);

    // Done celebration triggers
    btnCompleteRecipe.addEventListener("click", triggerConfettiExplosion);

    // Indicators click event
    indicators.forEach((ind, idx) => {
        ind.addEventListener("click", () => {
            playClickSound();
            goToSlide(idx);
            // Reset automatic carousel timer so it doesn't immediately slide again
            startCarouselTimer();
        });
    });

    // Swipe gestures or drags support on Hacks cards
    let touchStartX = 0;
    let touchEndX = 0;
    
    const footerContainer = document.querySelector(".hacks-carousel");
    footerContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    footerContainer.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const threshold = 50; // swipe length minimum
        if (touchStartX - touchEndX > threshold) {
            // Swiped Left -> Next Slide
            playClickSound();
            let nextIndex = (currentSlideIndex + 1) % 3;
            goToSlide(nextIndex);
            startCarouselTimer();
        } else if (touchEndX - touchStartX > threshold) {
            // Swiped Right -> Prev Slide
            playClickSound();
            let prevIndex = (currentSlideIndex - 1 + 3) % 3;
            goToSlide(prevIndex);
            startCarouselTimer();
        }
    }

    // Initialize & Fire auto-slide carousel timer
    startCarouselTimer();

    // ----------------------------------------------------------------------
    // STENGERUTINER LOGIKK (Før & Etter 17:00)
    // ----------------------------------------------------------------------
    
    // Klikk-lyttere for de nye stengerutine-kortene (knappene)
    if (btnRoutineBefore) {
        btnRoutineBefore.addEventListener("click", () => {
            playClickSound();
            // Tactile pressed state visual delay
            btnRoutineBefore.classList.add("pressed");
            setTimeout(() => {
                btnRoutineBefore.classList.remove("pressed");
                openRoutineDrawer("before");
            }, 80);
        });
        
        btnRoutineBefore.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                playClickSound();
                btnRoutineBefore.classList.add("pressed");
                setTimeout(() => {
                    btnRoutineBefore.classList.remove("pressed");
                    openRoutineDrawer("before");
                }, 80);
            }
        });
    }

    if (btnRoutineAfter) {
        btnRoutineAfter.addEventListener("click", () => {
            playClickSound();
            // Tactile pressed state visual delay
            btnRoutineAfter.classList.add("pressed");
            setTimeout(() => {
                btnRoutineAfter.classList.remove("pressed");
                openRoutineDrawer("after");
            }, 80);
        });

        btnRoutineAfter.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                playClickSound();
                btnRoutineAfter.classList.add("pressed");
                setTimeout(() => {
                    btnRoutineAfter.classList.remove("pressed");
                    openRoutineDrawer("after");
                }, 80);
            }
        });
    }

    // Sjekk lagret stengestatus ved oppstart og tenn suksessbokser hvis fullført
    if (typeof checkInitialRoutineCompletion === "function") {
        checkInitialRoutineCompletion();
    }

    // Enable Web Audio context on any first click in body
    document.body.addEventListener("click", () => {
        initAudio();
    }, { once: true });
});

// ==========================================================================
// STENGERUTINER DATABASE & LOGIKK (GLOBAL SCOPE)
// ==========================================================================

const ROUTINES_BEFORE_17 = [
    { id: "b1", text: "Fyll på: kaffekopper/lokk 🥤" },
    { id: "b2", text: "Fyll på: brus 🥤" },
    { id: "b3", text: "Fyll på: melk 🥛" },
    { id: "b4", text: "Fyll på: servietter osv.. 🧻" },
    { id: "b5", text: "Ferdigstille oppvasken på kjøkkenet 🧼" },
    { id: "b6", text: "Pusse glass på salgsdisk og utside sandwichskap ✨" },
    { id: "b7", text: "Vaske overflater 🧽" },
    { id: "b8", text: "Vask over ovnene og slå av 🔌" },
    { id: "b9", text: "Kost/vask gulvet 🧹" }
];

const ROUTINES_AFTER_17 = [
    { id: "a1", text: "Ta inn åpningsskiltet 🚪" },
    { id: "a2", text: "Slå av speedovn, og åpne døren under nedkjøling 🌬️" },
    { id: "a3", text: "Start renseprogram på espressomaskin (gjør andre ting i mellomtiden) ☕" },
    { id: "a4", text: "Ta svinn: fordel i flere poser og sett på kjøl 🍎" },
    { id: "a5", text: "Ta svinn: Legg plain croissanter i oransje esker i fryseren (blir mandelcroissanter!) 🥐" },
    { id: "a6", text: "Koste brødhyller og brødmaskin 🍞" },
    { id: "a7", text: "Sett brett på plass (Husk: skal ALDRI i vaskemaskin! ⚠️)" },
    { id: "a8", text: "Husk: Klorin i vaskene! 🧽" },
    { id: "a9", text: "Husk: Skyll klutene skikkelig! 🧼" },
    { id: "a10", text: "Koste og vaske over salgsdisk ✨" },
    { id: "a11", text: "Hell ut kaffe, skyll kaffekanner og kast kaffefilter ☕" },
    { id: "a12", text: "Vaske pizzaklyper 🍕" },
    { id: "a13", text: "Vaske og pusse sandwich-disk, og slå av lyset 💡" },
    { id: "a14", text: "Koste og vaske gulvet 🧹" },
    { id: "a15", text: "Ta søppel ut i container (restavfall og papp – papp legges flatt) 🗑️" },
    { id: "a16", text: "Slå av vifte (Husk å skru av vifte! 🌬️)" },
    { id: "a17", text: "Slå av lys bak og hovedlys 💡" },
    { id: "a18", text: "Husk: Klor ved sirupen! 🧴" },
    { id: "a19", text: "Husk: Kopp under alle sirupene! 🥤" },
    { id: "a20", text: "Husk: Plastfolie på siruptutene! 🍬" },
    { id: "a21", text: "Låse døra og legge nøkkelen i nøkkelboksen 🔑" }
];

function openRoutineDrawer(type) {
    currentActiveRoutineType = type;
    currentActiveRecipe = null; // Tøm aktiv oppskrift slik at Fullfør-knappen vet hva som lukkes

    // Nullstill knappe-stilene
    btnCompleteRecipe.classList.remove("celebrate");
    btnCompleteRecipe.innerHTML = `<span class="btn-emoji">🎉</span> Ferdig og klar!`;

    const routinesList = type === "before" ? ROUTINES_BEFORE_17 : ROUTINES_AFTER_17;
    const checkedList = type === "before" ? checkedBefore17 : checkedAfter17;
    const routineTitle = type === "before" ? "Stengerutine før 17:00" : "Stengerutine etter 17:00";
    const routineIcon = type === "before" ? "🧹" : "🔑";
    const routineTagline = type === "before" ? "Oppvask, kopper & vasking" : "Sirup, klorin & låsing";
    const badgeClass = type === "before" ? "large-cup" : "iced-cup";

    // Sett opp header-innholdet
    drawerIcon.innerHTML = `<span style="font-size: 2.8rem; display: inline-block; line-height: 1;">${routineIcon}</span>`;
    drawerTitle.textContent = routineTitle;
    drawerTagline.innerHTML = `"${routineTagline}" &bull; <span class="drawer-category-badge ${badgeClass}">Rutine</span>`;

    // Sett stengerutinetitler i skuffen
    if (drawerSectionTitle) drawerSectionTitle.textContent = "Stengepunkter";
    if (drawerChecklistGuide) drawerChecklistGuide.textContent = "Huk av punktene etter hvert som de er gjennomført:";

    // Generer den interaktive sjekklisten
    recipeChecklist.innerHTML = "";
    routinesList.forEach((item) => {
        const isChecked = checkedList.includes(item.id);
        const stepLabel = document.createElement("label");
        stepLabel.className = `recipe-step ${isChecked ? 'checked' : ''}`;
        
        let textHTML = item.text;
        if (textHTML.startsWith("Husk:")) {
            textHTML = `<strong style="color: #D84315;">Husk:</strong> ${textHTML.substring(5)}`;
        } else if (textHTML.includes(":")) {
            const parts = textHTML.split(":");
            textHTML = `<strong>${parts[0]}:</strong>${parts[1]}`;
        }

        stepLabel.innerHTML = `
            <div class="step-checkbox"></div>
            <span class="step-text">${textHTML}</span>
        `;
        
        // Klikk-håndtering med taktile lyder
        stepLabel.addEventListener("click", (e) => {
            e.preventDefault(); // Unngå dobbeltrigger
            playClickSound();
            stepLabel.classList.toggle("checked");
            
            let currentChecked = type === "before" ? checkedBefore17 : checkedAfter17;
            if (currentChecked.includes(item.id)) {
                currentChecked = currentChecked.filter(id => id !== item.id);
            } else {
                currentChecked.push(item.id);
            }
            
            if (type === "before") {
                checkedBefore17 = currentChecked;
                localStorage.setItem("checked_before_17", JSON.stringify(checkedBefore17));
            } else {
                checkedAfter17 = currentChecked;
                localStorage.setItem("checked_after_17", JSON.stringify(checkedAfter17));
            }
            
            updateRoutineProgress();
        });

        recipeChecklist.appendChild(stepLabel);
    });

    // Injisér gule huskebokser hvis det er stengerutinen etter 17:00
    recipeAlertsContainer.innerHTML = "";
    if (type === "after") {
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert-box warning";
        alertDiv.innerHTML = `
            <span class="alert-box-icon">🚨</span>
            <div class="alert-box-content">
                <strong>Husk ved stenging!</strong>
                <p>Klorin i vaskene, skyll klutene skikkelig, og husk klor ved sirupene med kopper under sirupen og plastfolie på siruptutene!</p>
            </div>
        `;
        recipeAlertsContainer.appendChild(alertDiv);
    }

    // Oppdater fremdriftsindikatoren
    updateRoutineProgress();

    // Glid skuffen opp
    drawerOverlay.classList.add("active");
    drawer.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
}

function updateRoutineProgress() {
    const type = currentActiveRoutineType;
    if (!type) return;

    const routinesList = type === "before" ? ROUTINES_BEFORE_17 : ROUTINES_AFTER_17;
    const currentChecked = type === "before" ? checkedBefore17 : checkedAfter17;
    
    const totalSteps = routinesList.length;
    const checkedSteps = currentChecked.length;
    
    const percentage = totalSteps > 0 ? Math.round((checkedSteps / totalSteps) * 100) : 0;

    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;

    // Hvis alle punktene er huket av
    if (percentage === 100) {
        btnCompleteRecipe.classList.add("celebrate");
        btnCompleteRecipe.innerHTML = `🏆 Fullført! Nyt kvelden! 🌟`;
        
        if (type === "before" && msgBeforeSuccess) {
            if (msgBeforeSuccess.style.display !== "block") {
                msgBeforeSuccess.style.display = "block";
                playFanfareSound();
            }
        } else if (type === "after" && msgAfterSuccess) {
            if (msgAfterSuccess.style.display !== "block") {
                msgAfterSuccess.style.display = "block";
                playFanfareSound();
            }
        }
    } else {
        btnCompleteRecipe.classList.remove("celebrate");
        btnCompleteRecipe.innerHTML = `<span class="btn-emoji">🎉</span> Fortsett stengingen...`;
        
        if (type === "before" && msgBeforeSuccess) {
            msgBeforeSuccess.style.display = "none";
        } else if (type === "after" && msgAfterSuccess) {
            msgAfterSuccess.style.display = "none";
        }
    }
}

function checkInitialRoutineCompletion() {
    const beforeAllDone = ROUTINES_BEFORE_17.every(item => checkedBefore17.includes(item.id));
    if (beforeAllDone && msgBeforeSuccess) {
        msgBeforeSuccess.style.display = "block";
    } else if (msgBeforeSuccess) {
        msgBeforeSuccess.style.display = "none";
    }

    const afterAllDone = ROUTINES_AFTER_17.every(item => checkedAfter17.includes(item.id));
    if (afterAllDone && msgAfterSuccess) {
        msgAfterSuccess.style.display = "block";
    } else if (msgAfterSuccess) {
        msgAfterSuccess.style.display = "none";
    }
}

function playFanfareSound() {
    if (!audioCtx) initAudio();
    if (!audioCtx) return; // AudioContext utilgjengelig eller blokkert

    const now = audioCtx.currentTime;

    // Triumferende meloditoner (C5 -> E5 -> G5 -> C6)
    const notes = [
        { freq: 523.25, time: 0.0, duration: 0.12 }, // C5
        { freq: 659.25, time: 0.12, duration: 0.12 }, // E5
        { freq: 783.99, time: 0.24, duration: 0.12 }, // G5
        { freq: 1046.50, time: 0.36, duration: 0.24 } // C6
    ];

    notes.forEach(note => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.freq, now + note.time);
        
        gain.gain.setValueAtTime(0, now + note.time);
        gain.gain.linearRampToValueAtTime(0.12, now + note.time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, now + note.time + note.duration);
        
        osc.start(now + note.time);
        osc.stop(now + note.time + note.duration);
    });

    // Detunede sagtannbølger filtrert gjennom et lavpass-filter for fet trompet/messing-lyd
    const chordNotes = [523.25, 659.25, 783.99, 1046.50];
    chordNotes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq + (idx * 0.5), now + 0.55); // lett detune
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, now + 0.55);
        filter.Q.setValueAtTime(1.2, now + 0.55);

        gain.gain.setValueAtTime(0, now + 0.55);
        gain.gain.linearRampToValueAtTime(0.05, now + 0.57);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55 + 1.2);
        
        osc.start(now + 0.55);
        osc.stop(now + 0.55 + 1.3);
    });
}
