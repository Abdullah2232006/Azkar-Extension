// 1. Data lists (simplified for example)
const morningAthkar = [{ text: "اللهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.", count: 1},
    { text: "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ. ", count: 3 },
    // { text: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. ", count: 3 },
    // { text: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. ", count: 3 },
    // { text: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. ", count: 1 },
    // { text: "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ .", count: 1 },
    // { text: "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. ", count: 3}
];

const nightAthkar = [{text: "أمسينا وأمسى الملك لله"}, {text: "اللهم بك أمسينا"}];

let currentList = [];
let currentIndex = 0;
let btn_counter_number;

// 2. Elements
const menuView = document.getElementById('menu-view');
const sessionView = document.getElementById('session-view');
const thikrDisplay = document.getElementById('thikr-text');
const counter_btn = document.getElementById('btn-counter');

// 3. Navigation Functions
function startSession(type) {
    currentList = type === 'morning' ? morningAthkar : nightAthkar;
    btn_counter_number = currentList[currentIndex].count;
    counter_btn.innerHTML = btn_counter_number;
    menuView.classList.add('hidden');
    sessionView.classList.remove('hidden');
    showThikr();
}

function showThikr() {
    if (currentIndex < currentList.length) {
        thikrDisplay.innerText = currentList[currentIndex].text;
    }
    else {
        thikrDisplay.innerText = "أتممت الأذكار بحمد الله";
        document.getElementById('btn-next').classList.add('hidden');
        document.getElementById('btn-counter').classList.add('hidden');
    }
}

function nextThikr() {
    if (btn_counter_number > 0) {
        showThikr();
    }
    else {
        if (currentIndex < currentList.length - 1) {
            currentIndex++;
            btn_counter_number = currentList[currentIndex].count;
            counter_btn.innerHTML = btn_counter_number;
            showThikr();
        }
        else {
            currentIndex++;
            showThikr();
        }
    }
    
}

function counter_btn_function() {
    if (btn_counter_number > 0) {
        btn_counter_number--;
        counter_btn.innerHTML = btn_counter_number;
        
        // Auto-advance to next thikr when counter reaches 0
        if (btn_counter_number === 0) {
            nextThikr();
        }
    }
}

// 4. Keyboard Listener
document.addEventListener('keydown', (event) => {
    // Check if the session is active and user pressed Spacebar (code "Space")
    if (!sessionView.classList.contains('hidden') && event.code === "Space") {
        nextThikr();
        // Prevent page from scrolling down when pressing space
        event.preventDefault(); 
    }
});

// 5. Button Listeners
document.getElementById('btn-counter').onclick = () => counter_btn_function();
document.getElementById('btn-morning').onclick = () => startSession('morning');
document.getElementById('btn-night').onclick = () => startSession('night');
document.getElementById('btn-back').onclick = () => {
    sessionView.classList.add('hidden');
    menuView.classList.remove('hidden');
    document.getElementById('btn-next').classList.remove('hidden');
};
document.getElementById('btn-next').onclick = nextThikr;
