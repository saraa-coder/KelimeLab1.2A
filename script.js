/**
* KELIME LAB 1.2 - LISTA OFICIAL COMPLETA
*/

const allWords = [
{word:"abla",correct:"hermana mayor"},
{word:"ağabey",correct:"hermano mayor"},
{word:"ağız",correct:"boca"},
{word:"aile",correct:"familia"},
{word:"amca",correct:"tío (paterno)"},
{word:"anadil",correct:"lengua materna"},
{word:"anahtar",correct:"llave"},
{word:"anaokulu",correct:"escuela infantil / jardín de infancia"},
{word:"anneanne",correct:"abuela (materna)"},
{word:"babaanne",correct:"abuela (paterna)"},
{word:"boyun",correct:"cuello"},
{word:"burun",correct:"nariz"},
{word:"dayı",correct:"tío (materno)"},
{word:"dede",correct:"abuelo"},
{word:"diş",correct:"diente"},
{word:"erkek kardeş",correct:"hermano (menor)"},
{word:"hala",correct:"tía (paterna)"},
{word:"havuz",correct:"piscina"},
{word:"ilkokul",correct:"escuela primaria"},
{word:"karı",correct:"esposa / mujer"},
{word:"kız kardeş",correct:"hermana (menor)"},
{word:"koca",correct:"marido"},
{word:"kol",correct:"brazo"},
{word:"lise",correct:"escuela secundaria / instituto"},
{word:"manto",correct:"abrigo"},
{word:"mektup",correct:"carta"},
{word:"omuz",correct:"hombro"},
{word:"ortaokul",correct:"escuela secundaria básica (primer ciclo)"},
{word:"satranç",correct:"ajedrez"},
{word:"şirket",correct:"empresa / compañía"},
{word:"teneffüs",correct:"recreo / descanso (escolar)"},
{word:"teyze",correct:"tía (materna)"},
{word:"üniversite",correct:"universidad"},
{word:"ütü",correct:"plancha"},
{word:"yabancı dil",correct:"idioma extranjero"},
{word:"yaramaz",correct:"travieso/a, malcriado/a"},
{word:"zevkli",correct:"placentero / divertido / de buen gusto"},
{word:"almak",correct:"tomar / comprar / recibir"},
{word:"dans etmek",correct:"bailar"},
{word:"çalmak",correct:"tocar (un instrumento) / robar / sonar (timbre)"},
{word:"hissetmek",correct:"sentir"},
{word:"yazmak",correct:"escribir"},
{word:"göndermek",correct:"enviar"},
{word:"oynamak",correct:"jugar / bailar"},
{word:"öğretmek",correct:"enseñar"},
{word:"telefon etmek",correct:"llamar por teléfono"},
{word:"ağustos",correct:"agosto"},
{word:"ajanda",correct:"agenda / diario"},
{word:"akıl",correct:"mente / inteligencia / razón"},
{word:"anma",correct:"conmemoración / recuerdo"},
{word:"aralık",correct:"diciembre / intervalo"},
{word:"ateş",correct:"fuego / fiebre"},
{word:"balayı",correct:"luna de miel"},
{word:"biricik",correct:"único / amado"},
{word:"birlikte",correct:"juntos/as"},
{word:"birliktelik",correct:"unión / compañerismo / relación"},
{word:"boya",correct:"pintura"},
{word:"buçuk",correct:"medio / y medio (para horas/números)"},
{word:"cimri",correct:"tacaño/a"},
{word:"cuma",correct:"viernes"},
{word:"cumartesi",correct:"sábado"},
{word:"çarşamba",correct:"miércoles"},
{word:"çeşitli",correct:"diverso/a, variado/a"},
{word:"çeyrek",correct:"cuarto (de hora / de algo)"},
{word:"çorba",correct:"sopa"},
{word:"coşku",correct:"entusiasmo / alegría intensa / fervor"},
{word:"dakika",correct:"minuto"},
{word:"dilek",correct:"deseo / petición"},
{word:"dini",correct:"religioso"},
{word:"dişçi",correct:"dentista"},
{word:"dolunay",correct:"luna llena"},
{word:"düğüm",correct:"nudo"},
{word:"egemenlik",correct:"soberanía"},
{word:"ekim",correct:"octubre"},
{word:"evlilik",correct:"matrimonio"},
{word:"eylül",correct:"septiembre"},
{word:"galeri",correct:"galería"},
{word:"gelecek",correct:"futuro / próximo"},
{word:"gençlik",correct:"juventud"},
{word:"geveze",correct:"hablador / charlatán"},
{word:"harf",correct:"letra"},
{word:"hazırlık",correct:"preparación"},
{word:"haziran",correct:"junio"},
{word:"hece",correct:"sílaba"},
{word:"heyecan",correct:"emoción / entusiasmo"},
{word:"ilkbahar",correct:"primavera"},
{word:"kasım",correct:"noviembre"},
{word:"kaza",correct:"accidente"},
{word:"kış",correct:"invierno"},
{word:"kurum",correct:"institución / corporación"},
{word:"kutlama",correct:"celebración"},
{word:"kültür",correct:"cultura"},
{word:"marş",correct:"himno / marcha"},
{word:"mart",correct:"marzo"},
{word:"mavi",correct:"azul"},
{word:"mayıs",correct:"mayo"},
{word:"mevsim",correct:"estación del año"},
{word:"mezuniyet",correct:"graduación"},
{word:"milli",correct:"nacional"},
{word:"mola",correct:"pausa / descanso"},
{word:"mor",correct:"morado"},
{word:"nice",correct:"muchos / numeroso"},
{word:"nikah",correct:"boda / matrimonio civil"},
{word:"nisan",correct:"abril"},
{word:"odun",correct:"leña / madera"},
{word:"ömür",correct:"vida / duración de la vida"},
{word:"palto",correct:"abrigo largo"},
{word:"pazar",correct:"domingo / mercado"},
{word:"pazartesi",correct:"lunes"},
{word:"perşembe",correct:"jueves"},
{word:"program",correct:"programa"},
{word:"randevu",correct:"cita / encuentro"},
{word:"resmi",correct:"oficial"},
{word:"rezervasyon",correct:"reserva"},
{word:"salı",correct:"martes"},
{word:"saniye",correct:"segundo"},
{word:"sarı",correct:"amarillo"},
{word:"saygıdeğer",correct:"respetable , estimado/a"},
{word:"sevgili",correct:"novio/a, pareja, querido/a"},
{word:"sonbahar",correct:"otoño"},
{word:"sürpriz",correct:"sorpresa"},
{word:"şubat",correct:"febrero"},
{word:"temmuz",correct:"julio"},
{word:"toplantı",correct:"reunión"},
{word:"ulusal",correct:"nacional"},
{word:"vakit",correct:"tiempo, rato"},
{word:"yaz",correct:"verano"},
{word:"yeşil",correct:"verde"},
{word:"yılbaşı",correct:"año nuevo / nochevieja"},
{word:"yıldönümü",correct:"aniversario"},
{word:"zafer",correct:"victoria"},
{word:"zorluk",correct:"dificultad"},
{word:"asmak",correct:"colgar"},
{word:"atlamak",correct:"saltar / omitir"},
{word:"atmak",correct:"tirar / lanzar"},
{word:"beklemek",correct:"esperar"},
{word:"benzemek",correct:"parecerse a"},
{word:"devam etmek",correct:"continuar"},
{word:"dilemek",correct:"desear / pedir"},
{word:"doğmak",correct:"nacer"},
{word:"evlenmek",correct:"casarse"},
{word:"gecikmek",correct:"retrasarse / llegar tarde"},
{word:"heyecanlanmak",correct:"emocionarse"},
{word:"kapanmak",correct:"cerrarse"},
{word:"karşılamak",correct:"recibir / dar la bienvenida"},
{word:"katılmak",correct:"unirse / participar"},
{word:"korumak",correct:"proteger / guardar"},
{word:"kutlamak",correct:"celebrar"},
{word:"kutlu olmak",correct:"ser bendito / ser celebrado"},
{word:"öpmek",correct:"besar"},
{word:"satın almak",correct:"comprar"},
{word:"sürmek",correct:"conducir / durar / untar"},
{word:"toplamak",correct:"reunir / recoger / sumar"},
{word:"vedalaşmak",correct:"despedirse"},
{word:"yakmak",correct:"quemar / encender (luz/fuego)"},
{word:"yaşlanmak",correct:"envejecer"},
{word:"yenmek",correct:"vencer / derrotar"},
{word:"yıkamak",correct:"lavar"},
{word:"ziyaret etmek",correct:"visitar"},
{word:"ağrı kesici",correct:"analgésico / calmante"},
{word:"akraba",correct:"pariente / familiar"},
{word:"aktör",correct:"actor"},
{word:"alt",correct:"debajo / parte inferior"},
{word:"antika",correct:"antigüedad"},
{word:"ara",correct:"intervalo / intermedio / distancia"},
{word:"arka",correct:"atrás / espalda / parte trasera"},
{word:"avize",correct:"lámpara de araña"},
{word:"ayak",correct:"pie"},
{word:"aynı",correct:"mismo/a, igual"},
{word:"ayran",correct:"ayran (bebida de yogur tradicional)"},
{word:"bacak",correct:"pierna"},
{word:"baldız",correct:"cuñada (hermana de la esposa)"},
{word:"baş ağrısı",correct:"dolor de cabeza"},
{word:"başkent",correct:"capital (ciudad)"},
{word:"başrol",correct:"papel principal / protagonismo"},
{word:"batı",correct:"oeste / occidente"},
{word:"birey",correct:"individuo/a"},
{word:"boy",correct:"estatura / tamaño / longitud"},
{word:"boyun",correct:"cuello"},
{word:"bozuk para",correct:"monedas / dinero suelto"},
{word:"çamaşır makinesi",correct:"lavadora"},
{word:"çene",correct:"barbilla / mentón / mandíbula"},
{word:"çift",correct:"pareja / par / doble"},
{word:"fayda",correct:"beneficio / utilidad / ventaja"},
{word:"fiziksel",correct:"físico"},
{word:"gelenek",correct:"tradición"},
{word:"gelin",correct:"novia (en una boda) / nuera"},
{word:"gizli",correct:"secreto / oculto"},
{word:"göğüs",correct:"pecho"},
{word:"göl",correct:"lago"},
{word:"görümce",correct:"cuñada (hermana del esposo)"},
{word:"güney",correct:"sur"},
{word:"hala",correct:"tía (paterna)"},
{word:"hamur",correct:"masa (de harina)"},
{word:"havalimanı",correct:"aeropuerto"},
{word:"hırsız",correct:"ladrón"},
{word:"iç",correct:"dentro / interior"},
{word:"ikiz",correct:"gemelo/a, mellizo/a"},
{word:"il",correct:"provincia"},
{word:"ilçe",correct:"distrito / municipio"},
{word:"ilginç",correct:"interesante, curioso/a"},
{word:"karın",correct:"abdomen / barriga"},
{word:"karşı",correct:"enfrente / contra"},
{word:"kaşık",correct:"cuchara"},
{word:"kaynana",correct:"suegra"},
{word:"kına",correct:"henna"},
{word:"kısa",correct:"corto/a, bajo/a (estatura)"},
{word:"oyuncu",correct:"actor, actriz, jugador/a"},
{word:"ödev",correct:"deberes"},
{word:"öksürük",correct:"tos"},
{word:"ön",correct:"frente / parte delantera"},
{word:"özel",correct:"especial, privado/a"},
{word:"özellik",correct:"característica / propiedad"},
{word:"parça",correct:"pieza / parte / trozo"},
{word:"parmak",correct:"dedo"},
{word:"raf",correct:"estante / repisa"},
{word:"sağ",correct:"derecha, vivo/a, sano/a"},
{word:"satış",correct:"venta"},
{word:"sayfa",correct:"página"},
{word:"sık sık",correct:"frecuentemente / a menudo"},
{word:"sol",correct:"izquierda"},
{word:"somun ekmeği",correct:"hogaza de pan"},
{word:"şeftali",correct:"melocotón / durazno"},
{word:"şık",correct:"elegante / chic / opción"},
{word:"şikâyet",correct:"queja / denuncia"},
{word:"tabak",correct:"plato"},
{word:"tablo",correct:"cuadro / tabla / pintura"},
{word:"tahlil",correct:"análisis / examen médico"},
{word:"tansiyon",correct:"presión arterial / tensión"},
{word:"taraf",correct:"lado / parte"},
{word:"tarz",correct:"estilo / manera"},
{word:"bahsetmek",correct:"mencionar / hablar de"},
{word:"başı ağrımak",correct:"tener dolor de cabeza"},
{word:"değiştirmek",correct:"cambiar / modificar"},
{word:"denemek",correct:"intentar / probar"},
{word:"eşleştirmek",correct:"emparejar / asociar"},
{word:"faydası olmak",correct:"ser útil / beneficiar"},
{word:"fırçalamak",correct:"cepillar"},
{word:"inanmak",correct:"creer"},
{word:"inmek",correct:"bajar / descender"},
{word:"kaldırmak",correct:"levantar / quitar / remover"},
{word:"karıştırmak",correct:"mezclar / confundir"},
{word:"karşılaşmak",correct:"encontrarse con / cruzarse con"},
{word:"karşılaştırmak",correct:"comparar"},
{word:"kına yakmak",correct:"aplicar henna"},
{word:"koparmak",correct:"arrancar / cortar / romper (algo blando o un hilo)"},
{word:"ölçmek",correct:"medir"},
{word:"sembolize etmek",correct:"simbolizar"},
{word:"sürpriz yapmak",correct:"hacer una sorpresa"},
{word:"tahlil yapmak",correct:"hacer un análisis médico"},
{word:"takip etmek",correct:"seguir / perseguir / rastrear"},
{word:"tanıtmak",correct:"presentar / introducir / promocionar"},
{word:"tansiyon ölçmek",correct:"medir la presión arterial"},
{word:"tavsiye etmek",correct:"recomendar / aconsejar"},
{word:"damat",correct:"yerno / novio (boda)"},
{word:"değişiklik",correct:"cambio / modificación"},
{word:"dirsek",correct:"codo"},
{word:"diz",correct:"rodilla"},
{word:"doğu",correct:"este / oriente"},
{word:"dükkân",correct:"tienda / comercio"},
{word:"edebiyat",correct:"literatura"},
{word:"el",correct:"mano"},
{word:"elti",correct:"cuñada (relación entre las esposas de dos hermanos)"},
{word:"emniyet",correct:"seguridad / departamento de policía"},
{word:"enişte",correct:"cuñado (esposo de la tía o de la hermana)"},
{word:"eşya",correct:"pertenencias / objetos / muebles"},
{word:"etraf",correct:"alrededor / entorno"},
{word:"koyu",correct:"oscuro (color) / denso / espeso"},
{word:"kulak",correct:"oreja / oído"},
{word:"kuzen",correct:"primo/a"},
{word:"kuzey",correct:"norte"},
{word:"küpe",correct:"pendiente / aro"},
{word:"maya",correct:"levadura"},
{word:"mide bulantısı",correct:"náusea / malestar estomacal"},
{word:"muhasebeci",correct:"contable"},
{word:"müdür",correct:"director / gerente / jefe"},
{word:"not",correct:"nota / calificación escolar"},
{word:"oğul",correct:"hijo (varón)"},
{word:"orta",correct:"medio / centro / mitad"},
{word:"oyuncak",correct:"juguete"},
{word:"uzun",correct:"largo / alto (estatura)"},
{word:"ünlü",correct:"famoso/a, vocal"},
{word:"yakışıklı",correct:"guapo (para hombres)"},
{word:"yan",correct:"lado / costado / junto a"},
{word:"yardımcı",correct:"asistente / ayudante / auxiliar"},
{word:"yaşlı",correct:"anciano/a, viejo/a"},
{word:"yenge",correct:"tía política / cuñada (esposa del hermano o del tío)"},
{word:"yılan",correct:"serpiente / culebra"},
{word:"yönerge",correct:"directriz / instrucción / directiva"},
{word:"zeki",correct:"inteligente, listo/a"},
{word:"zevk",correct:"placer / gusto / deleite"}

];

// VARIABLES DE ESTADO
let gameMode = 'tr-es';
let currentRoundMode = 'tr-es';
let score = 0;
let progress = {};
let current = null;
let activeQueue = [];
let locked = false;
let isMuted = false;
let lastWordKey = null; // Para evitar repeticiones seguidas

const MASTERY_THRESHOLD = 5;

// --- AUDIO Y BOTÓN MUTE ---
function setupMuteButton() {
if (document.getElementById('mute-btn')) return;
const btn = document.createElement('button');
btn.id = 'mute-btn';
btn.innerHTML = '🔊';
btn.style.cssText = `position:fixed;top:20px;right:20px;z-index:9999;width:50px;height:50px;border-radius:50%;border:2px solid white;background:rgba(0,0,0,0.3);color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;`;
btn.onclick = (e) => {
e.stopPropagation();
isMuted = !isMuted;
btn.innerHTML = isMuted ? '🔇' : '🔊';
if (isMuted) window.speechSynthesis.cancel();
};
document.body.appendChild(btn);
}

function hablarTurco(texto) {
if (isMuted) return;
window.speechSynthesis.cancel();
const mensaje = new SpeechSynthesisUtterance(texto);
mensaje.lang = 'tr-TR';
mensaje.rate = 0.7;
const voces = window.speechSynthesis.getVoices();
const vozTurca = voces.find(v => v.lang.includes('tr')) || voces[0];
if (vozTurca) mensaje.voice = vozTurca;
window.speechSynthesis.speak(mensaje);
}

// --- INTERFAZ ---
function setMode(mode, event) {
gameMode = mode;

document.querySelectorAll('#mode-selector .primary-btn').forEach(btn => {
btn.style.border = "none";
btn.style.opacity = "0.6";
});

if (event && event.currentTarget) {
event.currentTarget.style.border = "3px solid white";
event.currentTarget.style.opacity = "1";
}

// CARGAR PROGRESO
score = parseInt(localStorage.getItem(`kelime_score_${mode}`)) || 0;

progress = JSON.parse(
localStorage.getItem(`kelime_progress_${mode}`)
) || {};

// MOSTRAR BOTÓN CONTINUAR
const resumeBtn = document.getElementById('resume-button');

if (resumeBtn) {
resumeBtn.style.display =
(score > 0 || Object.keys(progress).length > 0)
? 'block'
: 'none';
}
}


function resetAndStart() {

localStorage.removeItem(`kelime_score_${gameMode}`);
localStorage.removeItem(`kelime_progress_${gameMode}`);

score = 0;
progress = {};

document.getElementById('resume-button').style.display = 'none';

startGame();
}

function startGame() {
document.getElementById('start-screen').style.display = 'none';
document.getElementById('game-container').style.display = 'flex';
hablarTurco(""); 
initQueue();
updateStats();
loadQuestion();
}

function showMenu() {
document.getElementById('game-container').style.display = 'none';
document.getElementById('start-screen').style.display = 'block';

// Esto es lo que falta:
const resumeBtn = document.getElementById('resume-button');
if (score > 0 || Object.keys(progress).length > 0) {
resumeBtn.style.display = 'block';
}
}

function updateStats() {
const scoreEl = document.getElementById("score");
const percentEl = document.getElementById("percent");
if (scoreEl) scoreEl.textContent = score + " tamamlanan";
if (percentEl) {
let p = Math.round((score / allWords.length) * 100);
percentEl.textContent = "%" + p;
}
}

// --- LÓGICA ---
function initQueue() {
// 1. Cogemos 23 palabras normales que no estén terminadas
activeQueue = [...allWords]
.filter(w => (progress[w.word] || 0) < MASTERY_THRESHOLD)
.sort(() => Math.random() - 0.5)
.slice(0, 23);
}

function loadQuestion() {
if (activeQueue.length === 0) initQueue();
locked = false;

// --- LÓGICA ANTI-REPETICIÓN ---
let chosenWord;
// Si faltan palabras para llegar a 25, sacamos un número aleatorio nuevo
if (activeQueue.length < 25 && Math.random() < 0.07) {
chosenWord = getRandomNumber();
} else if (activeQueue.length > 1) {
do {
chosenWord = activeQueue[Math.floor(Math.random() * activeQueue.length)];
} while (chosenWord.word === lastWordKey);
} else {
chosenWord = activeQueue[0] || getRandomNumber();
}

current = chosenWord;
lastWordKey = current.word; 
// ------------------------------

if (gameMode === 'mixed') {
currentRoundMode = Math.random() > 0.5 ? 'tr-es' : 'es-tr';
} else {
currentRoundMode = gameMode;
}

const wordEl = document.getElementById("word");
const optionsEl = document.getElementById("options");

// 1. LIMPIEZA
wordEl.classList.remove("word-mastered");
wordEl.style.color = ""; // Limpieza extra por seguridad

wordEl.textContent = (currentRoundMode === 'tr-es') ? current.word : current.correct;

// 2. ACTUALIZAR PUNTOS
renderDots(current.word);

if (currentRoundMode === 'tr-es') {
setTimeout(() => {
hablarTurco(current.word);
}, 500);
}

// 3. GENERAR OPCIONES
let correctText = (currentRoundMode === 'tr-es') ? current.correct : current.word;
let opts = new Set([correctText]);

while(opts.size < 4) {
let candidate;

// ¿Estamos trabajando con la lógica de números?
if (current.word && !isNaN(current.correct)) {
let n = Math.floor(Math.random() * 100);

if (currentRoundMode === 'tr-es') {
// Arriba sale Texto Turco -> Abajo CORRECTA es Cifra -> FALSAS deben ser Cifras
candidate = n.toString();
} else {
// Arriba sale Cifra -> Abajo CORRECTA es Texto Turco -> FALSAS deben ser Texto Turco
const unidades = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
const decenas = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
candidate = n < 10 ? unidades[n] : decenas[Math.floor(n/10)] + (n%10 !== 0 ? " " + unidades[n%10] : "");
}
} else {
// Lógica de palabras normales
let r = allWords[Math.floor(Math.random() * allWords.length)];
candidate = (currentRoundMode === 'tr-es') ? r.correct : r.word;
}

if (candidate !== correctText) opts.add(candidate);
}

optionsEl.innerHTML = "";
[...opts].sort(() => Math.random() - 0.5).forEach(opt => {
let btn = document.createElement("button");
btn.className = "option";
btn.textContent = opt;
btn.onclick = () => handleAnswer(opt, correctText);
optionsEl.appendChild(btn);
});
}

function handleAnswer(selected, correct) {
if (locked) return;
locked = true;
if (currentRoundMode === 'es-tr') hablarTurco(current.word);

const isCorrect = (selected === correct);
const wordKey = current.word;
const wordEl = document.getElementById("word");

if (isCorrect) {
progress[wordKey] = (progress[wordKey] || 0) + 1;

// Si llega a 5, añadimos la clase que definimos en el CSS
if (progress[wordKey] >= MASTERY_THRESHOLD) {
score++;
activeQueue = activeQueue.filter(w => w.word !== wordKey);
let available = allWords.filter(w => (progress[w.word] || 0) < 5 && !activeQueue.some(aq => aq.word === w.word));
if (available.length > 0) activeQueue.push(available[Math.floor(Math.random() * available.length)]);
wordEl.classList.add("word-mastered"); // <--- ESTO activa el amarillo
}
} else {
if (progress[wordKey] > 0) progress[wordKey]--;
}

// Los botones se mantienen con sus colores normales (verde/rojo)
document.querySelectorAll(".option").forEach(b => {
if (b.textContent === correct) b.style.backgroundColor = "#10b981";
if (b.textContent === selected && !isCorrect) b.style.backgroundColor = "#ef4444";
});

localStorage.setItem(`kelime_score_${gameMode}`, score);

localStorage.setItem(
`kelime_progress_${gameMode}`,
JSON.stringify(progress)
);

updateStats();
renderDots(wordKey);

setTimeout(loadQuestion, 1250);
}

function renderDots(wordKey) {
const container = document.getElementById("dots");
if (!container) return;
container.innerHTML = "";

let val = progress[wordKey] || 0;

for (let i = 0; i < MASTERY_THRESHOLD; i++) {
let d = document.createElement("div");
d.className = "dot";

if (i < val) {
// Si el progreso es 5, usamos la clase amarilla, si no, la verde (active)
if (val >= MASTERY_THRESHOLD) {
d.classList.add("mastered");
} else {
d.classList.add("active");
}
}
container.appendChild(d);
}
}

window.onload = () => {
setupMuteButton();
const btnDefault = document.querySelector('#mode-selector button');
if (btnDefault) setMode('tr-es', { currentTarget: btnDefault });
};
window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

function getRandomNumber() {
const unidades = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
const decenas = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
let n = Math.floor(Math.random() * 100);
let turco = n < 10 ? unidades[n] : decenas[Math.floor(n/10)] + (n%10 !== 0 ? " " + unidades[n%10] : "");
return { word: turco, correct: n.toString() };
}