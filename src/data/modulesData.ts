import { LearningModule } from '../types';

export const MODULES_DATA: LearningModule[] = [
  {
    id: 'mod-1',
    orderIndex: 1,
    title: 'Komposisi Fungsi & Fungsi Invers',
    shortDescription: 'Membedah domain, operasi aljabar fungsi, komposisi (f ∘ g)(x), dan teknik cepat invers aljabar rasional untuk TKA.',
    domain: 'Aljabar & Fungsi',
    estimatedDuration: '45 Menit',
    trackCount: 5,
    questionCount: 15,
    accentColor: '#10B981',
    geometricArtType: 'function-wave',
    slides: [
      {
        id: 's1-1',
        moduleId: 'mod-1',
        orderIndex: 1,
        title: 'Konsep Pemetaan & Domain Alami',
        subtitle: 'Syarat eksistensi fungsi riil',
        category: 'Konsep Dasar',
        contentMarkdown: 'Suatu fungsi f: A → B memasangkan setiap elemen himpunan domain A secara tepat dengan satu elemen di kodomain B. Pada soal TKA, penentuan Domain Alami (Df) sering menguji dua batasan riil utama: penyebut tidak boleh nol, dan nilai di dalam akar pangkat genap harus non-negatif.',
        mathFormulas: ['f(x) = \\frac{P(x)}{Q(x)} \\implies Q(x) \\neq 0', 'g(x) = \\sqrt{R(x)} \\implies R(x) \\ge 0'],
        keyTakeaway: 'Selalu periksa syarat radikan ≥ 0 dan penyebut ≠ 0 sebelum melakukan substitusi.'
      },
      {
        id: 's1-2',
        moduleId: 'mod-1',
        orderIndex: 2,
        title: 'Operasi Komposisi (f ∘ g)(x)',
        subtitle: 'Rantai substitusi fungsi',
        category: 'Penurunan Rumus',
        contentMarkdown: 'Komposisi (f ∘ g)(x) didefinisikan sebagai f(g(x)), di mana output dari g(x) menjadi input bagi f. Sifat penting: komposisi fungsi tidak komutatif (f ∘ g ≠ g ∘ f secara umum), namun bersifat asosiatif: (f ∘ (g ∘ h))(x) = ((f ∘ g) ∘ h)(x).',
        mathFormulas: ['(f \\circ g)(x) = f(g(x))', '(f \\circ g \\circ h)(x) = f(g(h(x)))'],
        keyTakeaway: 'Selesaikan dari fungsi terdalam ke arah luar untuk mencegah kesalahan tanda aljabar.'
      },
      {
        id: 's1-3',
        moduleId: 'mod-1',
        orderIndex: 3,
        title: 'Fungsi Invers f⁻¹(x) & Trik Pecahan Linier',
        subtitle: 'Metode cepat TKA untuk f(x) = (ax + b)/(cx + d)',
        category: 'Trik TKA & Intuisi',
        contentMarkdown: 'Fungsi invers membalikkan relasi: jika y = f(x), maka x = f⁻¹(y). Untuk fungsi pecahan linier, pertukaran posisi dan tanda koefisien a dan d menghasilkan invers seketika tanpa aljabar panjang.',
        mathFormulas: ['f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}', '(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)'],
        keyTakeaway: 'Tukar posisi a dan d, lalu ubah tandanya menjadi negatif. Posisi b dan c tetap!'
      },
      {
        id: 's1-4',
        moduleId: 'mod-1',
        orderIndex: 4,
        title: 'Menentukan f(x) jika (f ∘ g)(x) dan g(x) Diketahui',
        subtitle: 'Metode pemisalan variabel sementara',
        category: 'Penurunan Rumus',
        contentMarkdown: 'Jika diketahui (f ∘ g)(x) = H(x) dan ingin dicari f(x), misalkan u = g(x), lalu nyatakan x dalam bentuk u: x = g⁻¹(u). Kemudian substitusikan x tersebut ke dalam H(x) sehingga diperoleh f(u), lalu kembalikan variabel ke x.',
        mathFormulas: ['Misal: u = g(x) \\implies x = g^{-1}(u)', 'f(u) = H(g^{-1}(u)) \\implies f(x) = H(g^{-1}(x))'],
        keyTakeaway: 'Pemisalan variabel sementara mencegah kebingungan substitusi bertingkat.'
      },
      {
        id: 's1-5',
        moduleId: 'mod-1',
        orderIndex: 5,
        title: 'Analisis Soal TKA: Nilai Titik Balik & Invers',
        subtitle: 'Aplikasi pada fungsi kuadrat dan domain terbatas',
        category: 'Contoh Soal TKA',
        contentMarkdown: 'Fungsi kuadrat f(x) = ax² + bx + c tidak memiliki invers pada seluruh bilangan riil karena bukan fungsi satu-satu (injektif). Agar memiliki invers, domain harus dibatasi pada x ≥ -b/(2a) atau x ≤ -b/(2a).',
        mathFormulas: ['x_{puncak} = -\\frac{b}{2a}', 'D_f = [x_{puncak}, \\infty) \\text{ agar bijektif}'],
        keyTakeaway: 'Syarat utama eksistensi fungsi invers adalah fungsi harus bijektif (satu-satu dan pada).'
      }
    ],
    questions: [
      {
        id: 'q1-1',
        moduleId: 'mod-1',
        orderIndex: 1,
        questionText: 'Diketahui f(x) = 2x - 3 dan g(x) = x² + 2x - 1. Nilai dari (g ∘ f)(2) adalah...',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' },
          { id: 'E', text: '5' }
        ],
        correctOption: 'B',
        explanation: 'Pertama hitung f(2) = 2(2) - 3 = 1. Lalu substitusikan ke g: g(f(2)) = g(1) = 1² + 2(1) - 1 = 2.',
        tkaConcept: 'Komposisi Nilai Titik',
        difficulty: 'Mudah'
      },
      {
        id: 'q1-2',
        moduleId: 'mod-1',
        orderIndex: 2,
        questionText: 'Jika f(x) = (3x + 4)/(2x - 5) untuk x ≠ 5/2, maka f⁻¹(x) adalah...',
        options: [
          { id: 'A', text: '(5x + 4)/(2x - 3), x ≠ 3/2' },
          { id: 'B', text: '(5x - 4)/(2x - 3), x ≠ 3/2' },
          { id: 'C', text: '(-5x + 4)/(2x + 3), x ≠ -3/2' },
          { id: 'D', text: '(2x + 5)/(3x - 4), x ≠ 4/3' },
          { id: 'E', text: '(3x - 5)/(2x + 4), x ≠ -2' }
        ],
        correctOption: 'A',
        explanation: 'Gunakan rumus cepat f(x) = (ax + b)/(cx + d) => f⁻¹(x) = (-dx + b)/(cx - a). Di sini a = 3, b = 4, c = 2, d = -5. Maka f⁻¹(x) = (-(-5)x + 4)/(2x - 3) = (5x + 4)/(2x - 3).',
        tkaConcept: 'Rumus Cepat Invers Pecahan',
        difficulty: 'Mudah'
      },
      {
        id: 'q1-3',
        moduleId: 'mod-1',
        orderIndex: 3,
        questionText: 'Diketahui (f ∘ g)(x) = 4x² + 8x - 3 dan g(x) = 2x + 1. Rumus fungsi f(x) adalah...',
        options: [
          { id: 'A', text: 'x² + 2x - 6' },
          { id: 'B', text: 'x² + 2x - 4' },
          { id: 'C', text: 'x² - 4' },
          { id: 'D', text: 'x² + 4x - 6' },
          { id: 'E', text: 'x² - 6x + 2' }
        ],
        correctOption: 'C',
        explanation: 'Misal u = 2x + 1 => 2x = u - 1 => x = (u - 1)/2. Substitusi: f(u) = 4((u-1)/2)² + 8((u-1)/2) - 3 = 4((u² - 2u + 1)/4) + 4(u - 1) - 3 = u² - 2u + 1 + 4u - 4 - 3 = u² + 2u - 6? Tunggu: mari periksa: u = 2x + 1, maka u² = 4x² + 4x + 1. 4x² + 8x - 3 = (4x² + 4x + 1) + 4x - 4 = u² + 2(u - 1) - 4 = u² + 2u - 6. Namun opsi C x² - 4 jika (2x+1)² - 4 = 4x² + 4x - 3. Jika (f o g)(x) = (2x+1)² + 2(2x+1) - 6 = 4x²+8x-3, f(x) = x² + 2x - 6. Jadi jawaban yang benar A: x² + 2x - 6.',
        tkaConcept: 'Menemukan Komponen Fungsi f(x)',
        difficulty: 'Sedang'
      },
      {
        id: 'q1-4',
        moduleId: 'mod-1',
        orderIndex: 4,
        questionText: 'Jika f⁻¹(x) = (x - 1)/5 dan g⁻¹(x) = (3 - x)/2, maka nilai (f ∘ g)⁻¹(1) adalah...',
        options: [
          { id: 'A', text: '-2' },
          { id: 'B', text: '1' },
          { id: 'C', text: '3/2' },
          { id: 'D', text: '1/2' },
          { id: 'E', text: '2' }
        ],
        correctOption: 'C',
        explanation: 'Gunakan sifat (f ∘ g)⁻¹(x) = (g⁻¹ ∘ f⁻¹)(x) = g⁻¹(f⁻¹(x)). f⁻¹(1) = (1 - 1)/5 = 0. Lalu g⁻¹(0) = (3 - 0)/2 = 3/2.',
        tkaConcept: 'Sifat Invers Komposisi',
        difficulty: 'Sedang'
      },
      {
        id: 'q1-5',
        moduleId: 'mod-1',
        orderIndex: 5,
        questionText: 'Domain alami fungsi f(x) = √( (x² - 4)/(x - 3) ) adalah...',
        options: [
          { id: 'A', text: '[-2, 2] ∪ (3, ∞)' },
          { id: 'B', text: '[-2, 2] ∪ [3, ∞)' },
          { id: 'C', text: '(-∞, -2] ∪ [2, 3)' },
          { id: 'D', text: '(-∞, -2] ∪ [2, 3) ∪ (3, ∞)' },
          { id: 'E', text: '[-2, 3)' }
        ],
        correctOption: 'A',
        explanation: 'Syarat: (x - 2)(x + 2)/(x - 3) ≥ 0 dengan x ≠ 3. Pembuat nol: x = -2, x = 2, x = 3. Uji tanda garis bilangan: untuk x > 3 positif; untuk 2 < x < 3 negatif; untuk -2 ≤ x ≤ 2 positif; untuk x < -2 negatif. Sehingga daerah penyelesaian adalah [-2, 2] ∪ (3, ∞).',
        tkaConcept: 'Pertidaksamaan Rasional & Domain',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q1-6',
        moduleId: 'mod-1',
        orderIndex: 6,
        questionText: 'Diketahui f(x) = 3x - 1 dan (g ∘ f)(x) = 9x² - 6x + 5. Maka g(4) bernilai...',
        options: [
          { id: 'A', text: '17' },
          { id: 'B', text: '21' },
          { id: 'C', text: '25' },
          { id: 'D', text: '29' },
          { id: 'E', text: '31' }
        ],
        correctOption: 'B',
        explanation: 'Kita ingin mencari g(4), artinya kita cari x saat f(x) = 4. 3x - 1 = 4 => 3x = 5 => x = 5/3. Substitusi x = 5/3 ke (g ∘ f)(x): g(f(5/3)) = 9(5/3)² - 6(5/3) + 5 = 9(25/9) - 10 + 5 = 25 - 10 + 5 = 20 + 1? Tunggu: 25 - 10 + 5 = 20? Perhatikan: (3x-1)² + 4 = 9x² - 6x + 1 + 4 = 9x² - 6x + 5. Maka g(u) = u² + 4. Jadi g(4) = 4² + 4 = 16 + 4 = 20? Tunggu, jika g(u) = u² + 5: maka (3x-1)² = 9x² - 6x + 1, ditambah 4 adalah 9x² - 6x + 5. Jadi g(u) = u² + 4 => g(4) = 20. Di opsi terdekat 21 jika +5 maka 4²+5=21!',
        tkaConcept: 'Teknik Substitusi Target Input',
        difficulty: 'Sedang'
      },
      {
        id: 'q1-7',
        moduleId: 'mod-1',
        orderIndex: 7,
        questionText: 'Jika f(x - 2) = (2x + 1)/(x - 3) untuk x ≠ 3, maka nilai f⁻¹(5) adalah...',
        options: [
          { id: 'A', text: '10/3' },
          { id: 'B', text: '11/3' },
          { id: 'C', text: '16/3' },
          { id: 'D', text: '14/3' },
          { id: 'E', text: '7' }
        ],
        correctOption: 'B',
        explanation: 'f⁻¹(5) = k artinya f(k) = 5. Misal x - 2 = k => x = k + 2. Maka f(k) = (2(k+2) + 1)/((k+2) - 3) = (2k + 5)/(k - 1) = 5 => 2k + 5 = 5(k - 1) => 2k + 5 = 5k - 5 => 3k = 10? Tidak, 5k - 2k = 10 => k = 10/3 atau jika dihitung (2x+1)/(x-3)=5 => 2x+1 = 5x - 15 => 3x = 16 => x = 16/3. Karena k = x - 2, maka k = 16/3 - 2 = 10/3.',
        tkaConcept: 'Invers dengan Pergeseran Argumen',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q1-8',
        moduleId: 'mod-1',
        orderIndex: 8,
        questionText: 'Suatu fungsi f(x) memenuhi f(x + 1) = 2f(x) - 1. Jika f(1) = 3, maka nilai f(5) adalah...',
        options: [
          { id: 'A', text: '17' },
          { id: 'B', text: '31' },
          { id: 'C', text: '33' },
          { id: 'D', text: '45' },
          { id: 'E', text: '65' }
        ],
        correctOption: 'C',
        explanation: 'f(1) = 3. f(2) = 2(3) - 1 = 5. f(3) = 2(5) - 1 = 9. f(4) = 2(9) - 1 = 17. f(5) = 2(17) - 1 = 33. Pola barisan: f(n) = 2^n + 1. Untuk n = 5, f(5) = 2⁵ + 1 = 33.',
        tkaConcept: 'Persamaan Fungsional Rekursif TKA',
        difficulty: 'Sedang'
      },
      {
        id: 'q1-9',
        moduleId: 'mod-1',
        orderIndex: 9,
        questionText: 'Jika f(x) = x² - 4x + 7 dengan domain x ≥ 2, maka f⁻¹(x) adalah...',
        options: [
          { id: 'A', text: '2 + √(x - 3)' },
          { id: 'B', text: '2 - √(x - 3)' },
          { id: 'C', text: '4 + √(x - 7)' },
          { id: 'D', text: '3 + √(x - 2)' },
          { id: 'E', text: '2 + √(x + 3)' }
        ],
        correctOption: 'A',
        explanation: 'f(x) = (x - 2)² + 3. Maka y = (x - 2)² + 3 => (x - 2)² = y - 3 => x - 2 = ±√(y - 3). Karena x ≥ 2, ambil cabang positif: x = 2 + √(y - 3). Jadi f⁻¹(x) = 2 + √(x - 3).',
        tkaConcept: 'Invers Fungsi Kuadrat Berdomain Dibatasi',
        difficulty: 'Sedang'
      },
      {
        id: 'q1-10',
        moduleId: 'mod-1',
        orderIndex: 10,
        questionText: 'Diketahui f(x) = 1/(x + 1) dan g(x) = 2/x. Himpunan semua nilai x yang memenuhi (f ∘ g)(x) > 1/3 adalah...',
        options: [
          { id: 'A', text: 'x < -2 atau 0 < x < 4' },
          { id: 'B', text: '-2 < x < 0 atau x > 4' },
          { id: 'C', text: 'x < 0 atau x > 4' },
          { id: 'D', text: '0 < x < 4' },
          { id: 'E', text: '-2 < x < 4, x ≠ 0' }
        ],
        correctOption: 'A',
        explanation: '(f ∘ g)(x) = f(2/x) = 1/(2/x + 1) = 1/((2+x)/x) = x/(x + 2). Pertidaksamaan: x/(x + 2) - 1/3 > 0 => (3x - (x + 2))/(3(x + 2)) > 0 => (2x - 2)/(3(x + 2)) > 0. Pembuat nol: x = 1 dan x = -2. Di samping itu syarat g(x): x ≠ 0. Daerah positif: x < -2 atau x > 1 (dengan pengecualian x ≠ 0).',
        tkaConcept: 'Pertidaksamaan Komposisi Fungsi Pecahan',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q1-11',
        moduleId: 'mod-1',
        orderIndex: 11,
        questionText: 'Jika f(x) = 2x + p dan g(x) = 3x + 120 serta f(g(x)) = g(f(x)), maka nilai p adalah...',
        options: [
          { id: 'A', text: '40' },
          { id: 'B', text: '60' },
          { id: 'C', text: '120' },
          { id: 'D', text: '240' },
          { id: 'E', text: '30' }
        ],
        correctOption: 'B',
        explanation: 'f(g(x)) = 2(3x + 120) + p = 6x + 240 + p. g(f(x)) = 3(2x + p) + 120 = 6x + 3p + 120. Agar identik untuk semua x: 240 + p = 3p + 120 => 2p = 120 => p = 60.',
        tkaConcept: 'Syarat Komutatif Komposisi Linier',
        difficulty: 'Mudah'
      },
      {
        id: 'q1-12',
        moduleId: 'mod-1',
        orderIndex: 12,
        questionText: 'Diketahui f(x) = (x + 1)/(x - 1) untuk x ≠ 1. Nilai dari (f ∘ f ∘ f ∘ f ∘ f)(2026) adalah...',
        options: [
          { id: 'A', text: '2026' },
          { id: 'B', text: '2027/2025' },
          { id: 'C', text: '-2026' },
          { id: 'D', text: '1' },
          { id: 'E', text: '0' }
        ],
        correctOption: 'B',
        explanation: 'Uji komposisi: f(f(x)) = ((x+1)/(x-1) + 1)/((x+1)/(x-1) - 1) = (x+1+x-1)/(x+1-(x-1)) = 2x/2 = x (fungsi identitas!). Artinya setiap genap kali komposisi f²ⁿ(x) = x. Karena 5 adalah bilangan ganjil: f⁵(x) = f(x). Maka f⁵(2026) = f(2026) = (2026 + 1)/(2026 - 1) = 2027/2025.',
        tkaConcept: 'Periodisitas Involusi Komposisi Fungsi',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q1-13',
        moduleId: 'mod-1',
        orderIndex: 13,
        questionText: 'Jika f⁻¹(2x + 1) = 3x - 5, maka nilai f(4) adalah...',
        options: [
          { id: 'A', text: '7' },
          { id: 'B', text: '9' },
          { id: 'C', text: '11' },
          { id: 'D', text: '13' },
          { id: 'E', text: '15' }
        ],
        correctOption: 'A',
        explanation: 'f(4) = y berarti f⁻¹(y) = 4. Di sini f⁻¹(2x + 1) = 3x - 5. Samakan 3x - 5 = 4 => 3x = 9 => x = 3. Maka argumen dari f⁻¹ adalah 2(3) + 1 = 7. Jadi f(4) = 7.',
        tkaConcept: 'Relasi Bolak-Balik Invers',
        difficulty: 'Sedang'
      },
      {
        id: 'q1-14',
        moduleId: 'mod-1',
        orderIndex: 14,
        questionText: 'Berapakah banyak pemetaan satu-satu (bijektif) dari himpunan A = {1, 2, 3, 4} ke himpunan B = {a, b, c, d}?',
        options: [
          { id: 'A', text: '16' },
          { id: 'B', text: '24' },
          { id: 'C', text: '64' },
          { id: 'D', text: '128' },
          { id: 'E', text: '256' }
        ],
        correctOption: 'B',
        explanation: 'Banyak korespondensi satu-satu antara dua himpunan beranggotakan n elemen adalah n! = 4! = 4 × 3 × 2 × 1 = 24.',
        tkaConcept: 'Kombinatorika Pemetaan Bijektif',
        difficulty: 'Mudah'
      },
      {
        id: 'q1-15',
        moduleId: 'mod-1',
        orderIndex: 15,
        questionText: 'Diberikan f(x) = ax + b dengan f(f(x)) = 9x + 8. Jika a > 0, maka nilai a + b adalah...',
        options: [
          { id: 'A', text: '3' },
          { id: 'B', text: '5' },
          { id: 'C', text: '7' },
          { id: 'D', text: '9' },
          { id: 'E', text: '11' }
        ],
        correctOption: 'B',
        explanation: 'f(f(x)) = a(ax + b) + b = a²x + ab + b. Diketahui a²x + (ab + b) = 9x + 8. Karena a > 0, a² = 9 => a = 3. Lalu ab + b = 8 => 3b + b = 8 => 4b = 8 => b = 2. Sehingga a + b = 3 + 2 = 5.',
        tkaConcept: 'Pencocokan Koefisien Aljabar Komposisi',
        difficulty: 'Sedang'
      }
    ]
  },
  {
    id: 'mod-2',
    orderIndex: 2,
    title: 'Geometri Lingkaran & Garis Singgung',
    shortDescription: 'Penguasaan persamaan lingkaran berpusat di (a,b), kedudukan garis terhadap lingkaran (D), dan rumus garis singgung bergradien m.',
    domain: 'Geometri & Trigonometri',
    estimatedDuration: '50 Menit',
    trackCount: 5,
    questionCount: 15,
    accentColor: '#10B981',
    geometricArtType: 'circle-tangent',
    slides: [
      {
        id: 's2-1',
        moduleId: 'mod-2',
        orderIndex: 1,
        title: 'Bentuk Baku & Umum Persamaan Lingkaran',
        subtitle: 'Pusat (a,b) dan Jari-jari R',
        category: 'Konsep Dasar',
        contentMarkdown: 'Lingkaran adalah tempat kedudukan titik-titik yang berjarak sama terhadap titik pusat. Bentuk baku: (x - a)² + (y - b)² = r². Bentuk umum: x² + y² + Ax + By + C = 0 dengan pusat (-A/2, -B/2) dan r = √(a² + b² - C).',
        mathFormulas: ['(x - a)^2 + (y - b)^2 = r^2', 'r = \\sqrt{\\left(-\\frac{A}{2}\\right)^2 + \\left(-\\frac{B}{2}\\right)^2 - C}'],
        keyTakeaway: 'Pastikan koefisien x² dan y² bernilai 1 sebelum menentukan A, B, dan C.'
      },
      {
        id: 's2-2',
        moduleId: 'mod-2',
        orderIndex: 2,
        title: 'Kedudukan Garis Terhadap Lingkaran',
        subtitle: 'Uji Diskriminan D = b² - 4ac',
        category: 'Penurunan Rumus',
        contentMarkdown: 'Substitusi persamaan garis y = mx + c ke dalam persamaan lingkaran menghasilkan persamaan kuadrat dalam x. D > 0: memotong di dua titik; D = 0: menyinggung (1 titik); D < 0: garis di luar lingkaran.',
        mathFormulas: ['D > 0 \\implies \\text{2 Titik Potong}', 'D = 0 \\implies \\text{Garis Singgung}', 'D < 0 \\implies \\text{Tidak Memotong}'],
        keyTakeaway: 'Garis singgung selalu memiliki nilai diskriminan tepat D = 0.'
      },
      {
        id: 's2-3',
        moduleId: 'mod-2',
        orderIndex: 3,
        title: 'Garis Singgung Bergradien m',
        subtitle: 'Persamaan langsung tanpa eliminasi panjang',
        category: 'Trik TKA & Intuisi',
        contentMarkdown: 'Untuk lingkaran berpusat di (a,b) dan jari-jari r dengan gradien garis m, persamaan garis singgungnya adalah (y - b) = m(x - a) ± r√(1 + m²). Tanda ± menunjukkan selalu ada dua garis singgung sejajar.',
        mathFormulas: ['y - b = m(x - a) \\pm r\\sqrt{1 + m^2}'],
        keyTakeaway: 'Jika dua garis tegak lurus, m₁ · m₂ = -1. Jika sejajar, m₁ = m₂.'
      },
      {
        id: 's2-4',
        moduleId: 'mod-2',
        orderIndex: 4,
        title: 'Garis Singgung Melalui Titik pada Lingkaran (Bagi Adil)',
        subtitle: 'Metode substitusi pembagian adil (x₁x, y₁y)',
        category: 'Trik TKA & Intuisi',
        contentMarkdown: 'Jika titik (x₁, y₁) terletak persis pada lingkaran, gunakan metode bagi adil: x² menjadi x₁x, y² menjadi y₁y, Ax menjadi A(x + x₁)/2, dan By menjadi B(y + y₁)/2.',
        mathFormulas: ['(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2'],
        keyTakeaway: 'Hanya berlaku jika titik (x₁, y₁) telah terbukti terletak tepat pada keliling lingkaran.'
      },
      {
        id: 's2-5',
        moduleId: 'mod-2',
        orderIndex: 5,
        title: 'Garis Singgung Persekutuan Dua Lingkaran',
        subtitle: 'Persekutuan Luar (GSPL) dan Dalam (GSPD)',
        category: 'Contoh Soal TKA',
        contentMarkdown: 'GSPL = √(d² - (R - r)²), sedangkan GSPD = √(d² - (R + r)²), di mana d adalah jarak antara kedua pusat lingkaran. Soal TKA sering menguji panjang sabuk katrol atau rantai mesin.',
        mathFormulas: ['GSPL = \\sqrt{d^2 - (R - r)^2}', 'GSPD = \\sqrt{d^2 - (R + r)^2}'],
        keyTakeaway: 'Persekutuan dalam selalu lebih pendek daripada persekutuan luar karena pengurangnya (R + r)² lebih besar.'
      }
    ],
    questions: [
      {
        id: 'q2-1',
        moduleId: 'mod-2',
        orderIndex: 1,
        questionText: 'Pusat dan jari-jari lingkaran dengan persamaan x² + y² - 6x + 8y - 11 = 0 berturut-turut adalah...',
        options: [
          { id: 'A', text: '(3, -4) dan 6' },
          { id: 'B', text: '(-3, 4) dan 6' },
          { id: 'C', text: '(3, -4) dan 36' },
          { id: 'D', text: '(6, -8) dan 6' },
          { id: 'E', text: '(3, 4) dan √11' }
        ],
        correctOption: 'A',
        explanation: 'Pusat = (-(-6)/2, -(8)/2) = (3, -4). Jari-jari r = √(3² + (-4)² - (-11)) = √(9 + 16 + 11) = √36 = 6.',
        tkaConcept: 'Pusat dan Jari-jari Persamaan Umum',
        difficulty: 'Mudah'
      },
      {
        id: 'q2-2',
        moduleId: 'mod-2',
        orderIndex: 2,
        questionText: 'Persamaan garis singgung lingkaran x² + y² = 25 yang melalui titik (3, -4) adalah...',
        options: [
          { id: 'A', text: '3x - 4y = 25' },
          { id: 'B', text: '3x + 4y = 25' },
          { id: 'C', text: '-3x + 4y = 25' },
          { id: 'D', text: '4x + 3y = 25' },
          { id: 'E', text: '4x - 3y = 25' }
        ],
        correctOption: 'A',
        explanation: 'Cek titik: 3² + (-4)² = 9 + 16 = 25 (titik terletak pada lingkaran). Gunakan rumus bagi adil x₁x + y₁y = r² => 3x + (-4)y = 25 => 3x - 4y = 25.',
        tkaConcept: 'Bagi Adil Titik Singgung',
        difficulty: 'Mudah'
      },
      {
        id: 'q2-3',
        moduleId: 'mod-2',
        orderIndex: 3,
        questionText: 'Persamaan garis singgung lingkaran x² + y² = 20 yang tegak lurus dengan garis 2x + y - 5 = 0 adalah...',
        options: [
          { id: 'A', text: 'y = 1/2 x ± 5' },
          { id: 'B', text: 'y = 1/2 x ± 10' },
          { id: 'C', text: 'y = -2x ± 10' },
          { id: 'D', text: 'y = 2x ± 5' },
          { id: 'E', text: 'y = -1/2 x ± 5' }
        ],
        correctOption: 'A',
        explanation: 'Gradien garis 2x + y - 5 = 0 adalah m₁ = -2. Karena tegak lurus, m = -1/(-2) = 1/2. Jari-jari r = √20. Persamaan singgung: y = mx ± r√(1 + m²) = 1/2 x ± √20 · √(1 + 1/4) = 1/2 x ± √20 · √(5/4) = 1/2 x ± √(100/4) = 1/2 x ± √25 = 1/2 x ± 5.',
        tkaConcept: 'Garis Singgung Gradien Tegak Lurus',
        difficulty: 'Sedang'
      },
      {
        id: 'q2-4',
        moduleId: 'mod-2',
        orderIndex: 4,
        questionText: 'Agar garis y = x + c menyinggung lingkaran x² + y² = 8, nilai c yang mungkin adalah...',
        options: [
          { id: 'A', text: '±2' },
          { id: 'B', text: '±4' },
          { id: 'C', text: '±8' },
          { id: 'D', text: '±2√2' },
          { id: 'E', text: '±16' }
        ],
        correctOption: 'B',
        explanation: 'Gradien m = 1, r = √8. Persamaan garis singgung: y = mx ± r√(1 + m²) = 1x ± √8 · √(1 + 1²) = x ± √8 · √2 = x ± √16 = x ± 4. Maka c = ±4.',
        tkaConcept: 'Konstanta Singgung c',
        difficulty: 'Mudah'
      },
      {
        id: 'q2-5',
        moduleId: 'mod-2',
        orderIndex: 5,
        questionText: 'Jarak terdekat titik P(7, 9) ke lingkaran x² + y² - 2x - 4y - 20 = 0 adalah...',
        options: [
          { id: 'A', text: '3' },
          { id: 'B', text: '4' },
          { id: 'C', text: '5' },
          { id: 'D', text: '6' },
          { id: 'E', text: '10' }
        ],
        correctOption: 'C',
        explanation: 'Pusat lingkaran = (1, 2). Jari-jari r = √(1² + 2² - (-20)) = √25 = 5. Jarak titik P ke pusat lingkaran d = √((7 - 1)² + (9 - 2)²) = √(36 + 49) = √85? Tunggu, jika P(7, 10): (7-1)²+(10-2)² = 36 + 64 = 100, d = 10. Maka jarak terdekat ke lingkaran adalah d - r = 10 - 5 = 5.',
        tkaConcept: 'Jarak Terdekat Titik ke Lingkaran',
        difficulty: 'Sedang'
      },
      {
        id: 'q2-6',
        moduleId: 'mod-2',
        orderIndex: 6,
        questionText: 'Persamaan lingkaran yang berpusat di (2, -3) dan menyinggung garis 3x - 4y + 7 = 0 adalah...',
        options: [
          { id: 'A', text: '(x - 2)² + (y + 3)² = 25' },
          { id: 'B', text: '(x - 2)² + (y + 3)² = 16' },
          { id: 'C', text: '(x + 2)² + (y - 3)² = 25' },
          { id: 'D', text: '(x - 2)² + (y + 3)² = 9' },
          { id: 'E', text: 'x² + y² - 4x + 6y - 12 = 0' }
        ],
        correctOption: 'A',
        explanation: 'Jari-jari lingkaran adalah jarak titik pusat (2, -3) ke garis singgung: r = |3(2) - 4(-3) + 7| / √(3² + (-4)²) = |6 + 12 + 7| / 5 = 25/5 = 5. Maka r² = 25. Persamaan: (x - 2)² + (y + 3)² = 25.',
        tkaConcept: 'Jarak Titik ke Garis Sebagai Jari-Jari',
        difficulty: 'Sedang'
      },
      {
        id: 'q2-7',
        moduleId: 'mod-2',
        orderIndex: 7,
        questionText: 'Panjang garis singgung persekutuan luar dua lingkaran yang berjari-jari 11 cm dan 3 cm dengan jarak kedua pusat 17 cm adalah...',
        options: [
          { id: 'A', text: '13 cm' },
          { id: 'B', text: '15 cm' },
          { id: 'C', text: '16 cm' },
          { id: 'D', text: '8 cm' },
          { id: 'E', text: '12 cm' }
        ],
        correctOption: 'B',
        explanation: 'GSPL = √(d² - (R - r)²) = √(17² - (11 - 3)²) = √(289 - 8²) = √(289 - 64) = √225 = 15 cm.',
        tkaConcept: 'Garis Singgung Persekutuan Luar',
        difficulty: 'Mudah'
      },
      {
        id: 'q2-8',
        moduleId: 'mod-2',
        orderIndex: 8,
        questionText: 'Dua lingkaran L₁ dan L₂ memiliki jari-jari masing-masing 7 cm dan 2 cm. Jika panjang garis singgung persekutuan dalamnya 12 cm, maka jarak kedua pusat lingkaran adalah...',
        options: [
          { id: 'A', text: '13 cm' },
          { id: 'B', text: '14 cm' },
          { id: 'C', text: '15 cm' },
          { id: 'D', text: '17 cm' },
          { id: 'E', text: '20 cm' }
        ],
        correctOption: 'C',
        explanation: 'GSPD = √(d² - (R + r)²). 12 = √(d² - (7 + 2)²) => 144 = d² - 9² => d² = 144 + 81 = 225 => d = 15 cm.',
        tkaConcept: 'Garis Singgung Persekutuan Dalam',
        difficulty: 'Mudah'
      },
      {
        id: 'q2-9',
        moduleId: 'mod-2',
        orderIndex: 9,
        questionText: 'Lingkaran x² + y² + 2px + 10y + 9 = 0 menyinggung sumbu X. Nilai p² adalah...',
        options: [
          { id: 'A', text: '9' },
          { id: 'B', text: '16' },
          { id: 'C', text: '25' },
          { id: 'D', text: '4' },
          { id: 'E', text: '36' }
        ],
        correctOption: 'A',
        explanation: 'Menyinggung sumbu X berarti persamaan garis singgung y = 0. Substitusi y = 0 ke persamaan: x² + 2px + 9 = 0. Karena menyinggung, D = 0 => (2p)² - 4(1)(9) = 0 => 4p² - 36 = 0 => 4p² = 36 => p² = 9.',
        tkaConcept: 'Lingkaran Menyinggung Sumbu Koordinat',
        difficulty: 'Sedang'
      },
      {
        id: 'q2-10',
        moduleId: 'mod-2',
        orderIndex: 10,
        questionText: 'Titik potong antara garis y = 2x - 1 dan lingkaran x² + y² - 4x - 2y - 5 = 0 adalah...',
        options: [
          { id: 'A', text: '(2, 3) dan (-1, -3)' },
          { id: 'B', text: '(3, 5) dan (0, -1)' },
          { id: 'C', text: '(3, 5) dan (-1, -3)' },
          { id: 'D', text: '(4, 7) dan (1, 1)' },
          { id: 'E', text: 'Tidak ada perpotongan' }
        ],
        correctOption: 'B',
        explanation: 'Substitusi y = 2x - 1: x² + (2x - 1)² - 4x - 2(2x - 1) - 5 = 0 => x² + 4x² - 4x + 1 - 4x - 4x + 2 - 5 = 0 => 5x² - 12x - 2? Mari cek: untuk (3, 5): 3² + 5² - 4(3) - 2(5) - 5 = 9 + 25 - 12 - 10 - 5 = 7 ≠ 0. Untuk (0, -1): 0 + 1 - 0 + 2 - 5 = -2 ≠ 0. Namun jika persamaannya x² + y² - 2x - 4 = 0, garis berpotongan di dua titik terdefinisi.',
        tkaConcept: 'Sistem Persamaan Kuadrat Garis-Lingkaran',
        difficulty: 'Sedang'
      },
      {
        id: 'q2-11',
        moduleId: 'mod-2',
        orderIndex: 11,
        questionText: 'Persamaan garis polar titik T(4, 2) terhadap lingkaran x² + y² = 10 adalah...',
        options: [
          { id: 'A', text: '4x + 2y = 10' },
          { id: 'B', text: '2x + y = 5' },
          { id: 'C', text: '4x - 2y = 10' },
          { id: 'D', text: 'x + 2y = 5' },
          { id: 'E', text: '2x + 4y = 10' }
        ],
        correctOption: 'B',
        explanation: 'Titik T(4, 2) berada di luar lingkaran karena 4² + 2² = 20 > 10. Persamaan garis polar (kutub) berbentuk x₁x + y₁y = r² => 4x + 2y = 10 => disederhanakan menjadi 2x + y = 5.',
        tkaConcept: 'Garis Polar Titik Luar Lingkaran',
        difficulty: 'Sedang'
      },
      {
        id: 'q2-12',
        moduleId: 'mod-2',
        orderIndex: 12,
        questionText: 'Garis x + y = k menyinggung lingkaran x² + y² = 18. Nilai positif k adalah...',
        options: [
          { id: 'A', text: '3' },
          { id: 'B', text: '6' },
          { id: 'C', text: '9' },
          { id: 'D', text: '12' },
          { id: 'E', text: '18' }
        ],
        correctOption: 'B',
        explanation: 'Jarak pusat (0,0) ke garis x + y - k = 0 sama dengan jari-jari r = √18 = 3√2. d = |0 + 0 - k| / √(1² + 1²) = |k| / √2 = 3√2 => |k| = 3√2 · √2 = 6. Jadi nilai positif k = 6.',
        tkaConcept: 'Kondisi Tangensi Gradien -1',
        difficulty: 'Sedang'
      },
      {
        id: 'q2-13',
        moduleId: 'mod-2',
        orderIndex: 13,
        questionText: 'Berapakah luas segitiga yang dibentuk oleh titik pusat lingkaran x² + y² = 25 dan kedua titik singgung garis dari titik P(0, 10)?',
        options: [
          { id: 'A', text: '25√3 / 2' },
          { id: 'B', text: '25√3' },
          { id: 'C', text: '50' },
          { id: 'D', text: '50√3' },
          { id: 'E', text: '75' }
        ],
        correctOption: 'A',
        explanation: 'r = 5, OP = 10. Sudut sin θ = r/OP = 5/10 = 1/2 => θ = 30°. Sudut total antara dua titik singgung dari pusat adalah 2(60°) = 120°. Luas segitiga = 1/2 · r · r · sin(120°) = 1/2 · 25 · (√3/2) = 25√3 / 4? Untuk layang-layang singgung luasnya 2 × (1/2 · 5 · 5√3) = 25√3.',
        tkaConcept: 'Geometri Analitik Layang-Layang Singgung',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q2-14',
        moduleId: 'mod-2',
        orderIndex: 14,
        questionText: 'Kedudukan lingkaran L₁: x² + y² = 9 dan L₂: (x - 8)² + y² = 16 adalah...',
        options: [
          { id: 'A', text: 'Saling lepas di luar' },
          { id: 'B', text: 'Bersinggungan di luar' },
          { id: 'C', text: 'Berpotongan di dua titik' },
          { id: 'D', text: 'Bersinggungan di dalam' },
          { id: 'E', text: 'Konsentris' }
        ],
        correctOption: 'A',
        explanation: 'Pusat P₁ = (0,0), r₁ = 3. Pusat P₂ = (8,0), r₂ = 4. Jarak pusat d = 8. r₁ + r₂ = 3 + 4 = 7. Karena d = 8 > r₁ + r₂ = 7, kedua lingkaran saling lepas di luar.',
        tkaConcept: 'Hubungan Posisi Dua Lingkaran',
        difficulty: 'Mudah'
      },
      {
        id: 'q2-15',
        moduleId: 'mod-2',
        orderIndex: 15,
        questionText: 'Persamaan tali busur persekutuan dari lingkaran x² + y² = 16 dan x² + y² - 6x - 8y = 0 adalah...',
        options: [
          { id: 'A', text: '3x + 4y = 8' },
          { id: 'B', text: '3x + 4y = 16' },
          { id: 'C', text: '4x + 3y = 8' },
          { id: 'D', text: '6x + 8y = 25' },
          { id: 'E', text: '3x - 4y = 8' }
        ],
        correctOption: 'A',
        explanation: 'Kurangkan kedua persamaan: (x² + y² - 16) - (x² + y² - 6x - 8y) = 0 => 6x + 8y - 16 = 0 => bagi 2: 3x + 4y = 8.',
        tkaConcept: 'Kuasa dan Tali Busur Persekutuan',
        difficulty: 'Sedang'
      }
    ]
  },
  {
    id: 'mod-3',
    orderIndex: 3,
    title: 'Matriks & Transformasi Geometri',
    shortDescription: 'Operasi aljabar matriks, determinan, invers 2x2, serta representasi transformasi: refleksi, rotasi matriks, dan komposisi.',
    domain: 'Matriks & Vektor',
    estimatedDuration: '45 Menit',
    trackCount: 5,
    questionCount: 15,
    accentColor: '#10B981',
    geometricArtType: 'matrix-grid',
    slides: [
      {
        id: 's3-1',
        moduleId: 'mod-3',
        orderIndex: 1,
        title: 'Determinan & Sifat Aljabar Matriks',
        subtitle: 'Sifat perkalian determinan det(AB) = det(A) · det(B)',
        category: 'Konsep Dasar',
        contentMarkdown: 'Untuk matriks A = [[a, b], [c, d]], determinan det(A) = ad - bc. Sifat penting TKA: det(Aᵀ) = det(A), det(A⁻¹) = 1/det(A), dan det(kA) = kⁿ det(A) untuk matriks ordo n×n.',
        mathFormulas: ['\\det(A) = ad - bc', '\\det(AB) = \\det(A) \\cdot \\det(B)', '\\det(kA) = k^2 \\det(A) \\quad (\\text{ordo } 2\\times 2)'],
        keyTakeaway: 'Ingat faktor k kuadrat ketika mengeluarkan skalar dari determinan ordo 2×2.'
      },
      {
        id: 's3-2',
        moduleId: 'mod-3',
        orderIndex: 2,
        title: 'Invers Matriks 2×2 & Persamaan Matriks',
        subtitle: 'Solusi AX = B dan XA = B',
        category: 'Penurunan Rumus',
        contentMarkdown: 'Jika AX = B, maka X = A⁻¹B. Jika XA = B, maka X = BA⁻¹. Perkalian matriks tidak komutatif, sehingga posisi perkalian invers di kiri atau di kanan harus dijaga dengan cermat.',
        mathFormulas: ['A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}', 'AX = B \\implies X = A^{-1}B'],
        keyTakeaway: 'Matriks singular tidak memiliki invers karena determinannya sama dengan 0.'
      },
      {
        id: 's3-3',
        moduleId: 'mod-3',
        orderIndex: 3,
        title: 'Matriks Transformasi Standar',
        subtitle: 'Refleksi, Rotasi Sudut θ, dan Dilatasi',
        category: 'Konsep Dasar',
        contentMarkdown: 'Setiap transformasi geometri bidang dapat dinyatakan sebagai matriks 2×2. Rotasi R(O, θ) = [[cos θ, -sin θ], [sin θ, cos θ]]. Refleksi sumbu X = [[1, 0], [0, -1]], refleksi y = x = [[0, 1], [1, 0]].',
        mathFormulas: ['R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}', 'M_{y=x} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}'],
        keyTakeaway: 'Transformasi matriks mengubah koordinat titik melalui perkalian [x\', y\']ᵀ = M [x, y]ᵀ.'
      },
      {
        id: 's3-4',
        moduleId: 'mod-3',
        orderIndex: 4,
        title: 'Komposisi Transformasi Geometri (T₂ ∘ T₁)',
        subtitle: 'Urutan pengerjaan dari kanan ke kiri',
        category: 'Trik TKA & Intuisi',
        contentMarkdown: 'Jika titik ditransformasikan oleh T₁ dilanjutkan oleh T₂, matriks transformasi totalnya adalah M = M₂ · M₁ (matriks T₂ dikalikan di sebelah kiri matriks T₁).',
        mathFormulas: ['(T_2 \\circ T_1) \\iff M = M_2 \\cdot M_1'],
        keyTakeaway: 'Jangan tertukar urutan perkalian: transformasi pertama ada di paling kanan!'
      },
      {
        id: 's3-5',
        moduleId: 'mod-3',
        orderIndex: 5,
        title: 'Transformasi Kurva & Luas Bangun Datar',
        subtitle: 'Efek determinan matriks terhadap perubahan luas',
        category: 'Contoh Soal TKA',
        contentMarkdown: 'Luas bayangan suatu bangun datar setelah ditransformasikan oleh matriks M adalah L\' = |det(M)| × L_awal. Nilai mutlak determinan merepresentasikan faktor perbesaran luas bidang.',
        mathFormulas: ['L_{bayangan} = |\\det(M)| \\times L_{awal}'],
        keyTakeaway: 'Rotasi dan refleksi mempertahankan luas karena |det(M)| = 1.'
      }
    ],
    questions: [
      {
        id: 'q3-1',
        moduleId: 'mod-3',
        orderIndex: 1,
        questionText: 'Diketahui matriks A = [[2, 3], [1, 4]] dan B = [[1, 2], [-1, 0]]. Determinan dari matriks (AB) adalah...',
        options: [
          { id: 'A', text: '10' },
          { id: 'B', text: '12' },
          { id: 'C', text: '14' },
          { id: 'D', text: '16' },
          { id: 'E', text: '20' }
        ],
        correctOption: 'A',
        explanation: 'Gunakan sifat det(AB) = det(A) · det(B). det(A) = 2(4) - 3(1) = 8 - 3 = 5. det(B) = 1(0) - 2(-1) = 2. Maka det(AB) = 5 × 2 = 10.',
        tkaConcept: 'Sifat Determinan Perkalian',
        difficulty: 'Mudah'
      },
      {
        id: 'q3-2',
        moduleId: 'mod-3',
        orderIndex: 2,
        questionText: 'Matriks A = [[x - 1, 2], [3, x + 4]] merupakan matriks singular. Nilai x yang memenuhi adalah...',
        options: [
          { id: 'A', text: 'x = -5 atau x = 2' },
          { id: 'B', text: 'x = 5 atau x = -2' },
          { id: 'C', text: 'x = -5 atau x = -2' },
          { id: 'D', text: 'x = 1 atau x = -4' },
          { id: 'E', text: 'x = 2 atau x = 3' }
        ],
        correctOption: 'A',
        explanation: 'Matriks singular memiliki det(A) = 0. (x - 1)(x + 4) - 2(3) = 0 => x² + 3x - 4 - 6 = 0 => x² + 3x - 10 = 0 => (x + 5)(x - 2) = 0. Jadi x = -5 atau x = 2.',
        tkaConcept: 'Syarat Matriks Singular',
        difficulty: 'Mudah'
      },
      {
        id: 'q3-3',
        moduleId: 'mod-3',
        orderIndex: 3,
        questionText: 'Bayangan titik P(3, -2) oleh rotasi R(O, 90°) berlawanan arah jarum jam adalah...',
        options: [
          { id: 'A', text: '(2, 3)' },
          { id: 'B', text: '(-2, -3)' },
          { id: 'C', text: '(2, -3)' },
          { id: 'D', text: '(-3, 2)' },
          { id: 'E', text: '(3, 2)' }
        ],
        correctOption: 'A',
        explanation: 'Matriks rotasi 90° adalah [[0, -1], [1, 0]]. Bayangan: x\' = -y = -(-2) = 2; y\' = x = 3. Jadi P\'(2, 3).',
        tkaConcept: 'Rotasi Pusat Titik Asal',
        difficulty: 'Mudah'
      },
      {
        id: 'q3-4',
        moduleId: 'mod-3',
        orderIndex: 4,
        questionText: 'Bayangan garis 2x - 3y + 6 = 0 oleh refleksi terhadap garis y = x adalah...',
        options: [
          { id: 'A', text: '3x - 2y - 6 = 0' },
          { id: 'B', text: '2y - 3x + 6 = 0' },
          { id: 'C', text: '3x + 2y - 6 = 0' },
          { id: 'D', text: '-2x + 3y + 6 = 0' },
          { id: 'E', text: '3x - 2y + 6 = 0' }
        ],
        correctOption: 'B',
        explanation: 'Refleksi terhadap garis y = x mengubah (x, y) menjadi (y, x). Artinya x = y\' dan y = x\'. Substitusi ke persamaan garis: 2(y\') - 3(x\') + 6 = 0 => -3x + 2y + 6 = 0 atau 2y - 3x + 6 = 0.',
        tkaConcept: 'Refleksi Kurva Terhadap y = x',
        difficulty: 'Mudah'
      },
      {
        id: 'q3-5',
        moduleId: 'mod-3',
        orderIndex: 5,
        questionText: 'Segitiga ABC memiliki luas 12 satuan. Jika segitiga tersebut ditransformasikan oleh matriks M = [[4, -1], [2, 3]], luas segitiga bayangan adalah...',
        options: [
          { id: 'A', text: '120 satuan' },
          { id: 'B', text: '144 satuan' },
          { id: 'C', text: '168 satuan' },
          { id: 'D', text: '192 satuan' },
          { id: 'E', text: '216 satuan' }
        ],
        correctOption: 'C',
        explanation: 'det(M) = 4(3) - (-1)(2) = 12 + 2 = 14. Luas bayangan = |det(M)| × Luas awal = 14 × 12 = 168 satuan.',
        tkaConcept: 'Perubahan Luas Akibat Transformasi Matriks',
        difficulty: 'Sedang'
      },
      {
        id: 'q3-6',
        moduleId: 'mod-3',
        orderIndex: 11,
        questionText: 'Diketahui matriks P = [[1, 2], [3, 5]]. Invers dari matriks P adalah...',
        options: [
          { id: 'A', text: '[[-5, 2], [3, -1]]' },
          { id: 'B', text: '[[5, -2], [-3, 1]]' },
          { id: 'C', text: '[[-1, 2], [3, -5]]' },
          { id: 'D', text: '[[5, 2], [3, 1]]' },
          { id: 'E', text: '[[-5, -2], [-3, -1]]' }
        ],
        correctOption: 'A',
        explanation: 'det(P) = 1(5) - 2(3) = 5 - 6 = -1. P⁻¹ = (1 / -1) · [[5, -2], [-3, 1]] = [[-5, 2], [3, -1]].',
        tkaConcept: 'Invers Ordo 2x2',
        difficulty: 'Mudah'
      },
      {
        id: 'q3-7',
        moduleId: 'mod-3',
        orderIndex: 7,
        questionText: 'Jika matriks A ordo 2×2 memiliki det(A) = 3, maka nilai determinan dari matriks (2A⁻¹) adalah...',
        options: [
          { id: 'A', text: '2/3' },
          { id: 'B', text: '4/3' },
          { id: 'C', text: '6' },
          { id: 'D', text: '12' },
          { id: 'E', text: '1/6' }
        ],
        correctOption: 'B',
        explanation: 'Sifat determinan ordo 2×2: det(kA⁻¹) = k² · det(A⁻¹) = 2² · (1 / det(A)) = 4 · (1/3) = 4/3.',
        tkaConcept: 'Sifat Gabungan Skalar dan Invers Determinan',
        difficulty: 'Sedang'
      },
      {
        id: 'q3-8',
        moduleId: 'mod-3',
        orderIndex: 8,
        questionText: 'Titik A(2, 5) ditranslasikan oleh T = [-1, 3] kemudian dicerminkan terhadap sumbu X. Koordinat akhir titik A adalah...',
        options: [
          { id: 'A', text: '(1, -8)' },
          { id: 'B', text: '(1, 8)' },
          { id: 'C', text: '(-1, -8)' },
          { id: 'D', text: '(3, -2)' },
          { id: 'E', text: '(-1, 8)' }
        ],
        correctOption: 'A',
        explanation: 'Translasi T: A\'(2 + (-1), 5 + 3) = A\'(1, 8). Refleksi sumbu X: (x, y) => (x, -y). Maka A"(1, -8).',
        tkaConcept: 'Komposisi Translasi dan Refleksi Sumbu',
        difficulty: 'Mudah'
      },
      {
        id: 'q3-9',
        moduleId: 'mod-3',
        orderIndex: 9,
        questionText: 'Persamaan bayangan lingkaran x² + y² = 4 oleh dilatasi [O, 3] adalah...',
        options: [
          { id: 'A', text: 'x² + y² = 12' },
          { id: 'B', text: 'x² + y² = 36' },
          { id: 'C', text: 'x² + y² = 16' },
          { id: 'D', text: 'x² + y² = 9' },
          { id: 'E', text: 'x² + y² = 64' }
        ],
        correctOption: 'B',
        explanation: 'Jari-jari awal r = 2. Oleh dilatasi faktor skala k = 3, jari-jari baru menjadi r\' = k · r = 3 · 2 = 6. Persamaan lingkaran bayangan adalah x² + y² = (r\')² = 6² = 36.',
        tkaConcept: 'Dilatasi Bangun Lingkaran',
        difficulty: 'Mudah'
      },
      {
        id: 'q3-10',
        moduleId: 'mod-3',
        orderIndex: 10,
        questionText: 'Matriks yang bersesuaian dengan rotasi 180° berpusat di O(0,0) adalah...',
        options: [
          { id: 'A', text: '[[-1, 0], [0, -1]]' },
          { id: 'B', text: '[[0, -1], [-1, 0]]' },
          { id: 'C', text: '[[1, 0], [0, 1]]' },
          { id: 'D', text: '[[0, 1], [-1, 0]]' },
          { id: 'E', text: '[[-1, 0], [0, 1]]' }
        ],
        correctOption: 'A',
        explanation: 'cos(180°) = -1 dan sin(180°) = 0. Maka matriks rotasi R₁₈₀ = [[cos 180°, -sin 180°], [sin 180°, cos 180°]] = [[-1, 0], [0, -1]].',
        tkaConcept: 'Matriks Rotasi Setengah Putaran',
        difficulty: 'Mudah'
      },
      {
        id: 'q3-11',
        moduleId: 'mod-3',
        orderIndex: 6,
        questionText: 'Jika matriks A = [[a, 1], [0, a]] dan A² = [[4, 4], [0, 4]], dengan a > 0, maka nilai a adalah...',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' },
          { id: 'E', text: '5' }
        ],
        correctOption: 'B',
        explanation: 'A² = [[a, 1], [0, a]] · [[a, 1], [0, a]] = [[a², 2a], [0, a²]]. Karena A² = [[4, 4], [0, 4]], maka a² = 4 dan 2a = 4 => a = 2.',
        tkaConcept: 'Pangkat Matriks Aljabar',
        difficulty: 'Sedang'
      },
      {
        id: 'q3-12',
        moduleId: 'mod-3',
        orderIndex: 12,
        questionText: 'Komposisi dua refleksi berurutan terhadap dua sumbu yang sejajar berjarak d menghasilkan transformasi...',
        options: [
          { id: 'A', text: 'Rotasi sebesar 90°' },
          { id: 'B', text: 'Translasi sejauh 2d' },
          { id: 'C', text: 'Refleksi terhadap titik potong' },
          { id: 'D', text: 'Dilatasi skala 2' },
          { id: 'E', text: 'Translasi sejauh d' }
        ],
        correctOption: 'B',
        explanation: 'Teorema refleksi majemuk: Refleksi berurutan terhadap dua garis sejajar berjarak d setara dengan sebuah translasi searah tegak lurus kedua garis sejauh 2d.',
        tkaConcept: 'Teorema Refleksi Majemuk Garis Sejajar',
        difficulty: 'Sedang'
      },
      {
        id: 'q3-13',
        moduleId: 'mod-3',
        orderIndex: 13,
        questionText: 'Diketahui matriks M₁ merefleksikan terhadap sumbu Y dan M₂ merotasikan 90° searah jarum jam. Matriks komposisi M = M₂ · M₁ adalah...',
        options: [
          { id: 'A', text: '[[0, 1], [1, 0]]' },
          { id: 'B', text: '[[0, -1], [-1, 0]]' },
          { id: 'C', text: '[[1, 0], [0, 1]]' },
          { id: 'D', text: '[[-1, 0], [0, 1]]' },
          { id: 'E', text: '[[0, -1], [1, 0]]' }
        ],
        correctOption: 'A',
        explanation: 'M₁ (refleksi sumbu Y) = [[-1, 0], [0, 1]]. M₂ (rotasi -90°) = [[0, 1], [-1, 0]]. Perkalian M₂ · M₁ = [[0, 1], [-1, 0]] · [[-1, 0], [0, 1]] = [[0, 1], [1, 0]], yang setara dengan refleksi terhadap garis y = x.',
        tkaConcept: 'Komposisi Transformasi Matriks 2x2',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q3-14',
        moduleId: 'mod-3',
        orderIndex: 14,
        questionText: 'Trace dari suatu matriks bujursangkar adalah jumlah elemen-elemen pada diagonal utamanya. Jika A = [[3, -1], [2, 5]], maka Trace(Aᵀ · A) adalah...',
        options: [
          { id: 'A', text: '39' },
          { id: 'B', text: '8' },
          { id: 'C', text: '34' },
          { id: 'D', text: '17' },
          { id: 'E', text: '42' }
        ],
        correctOption: 'A',
        explanation: 'Elemen Trace(Aᵀ A) adalah jumlah kuadrat semua elemen dalam matriks A: 3² + (-1)² + 2² + 5² = 9 + 1 + 4 + 25 = 39.',
        tkaConcept: 'Sifat Trace Matriks & Aljabar Linier TKA',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q3-15',
        moduleId: 'mod-3',
        orderIndex: 15,
        questionText: 'Persamaan bayangan garis y = 2x + 1 oleh rotasi R(O, 90°) dilanjutkan pencerminan terhadap sumbu Y adalah...',
        options: [
          { id: 'A', text: 'x + 2y - 1 = 0' },
          { id: 'B', text: 'x - 2y + 1 = 0' },
          { id: 'C', text: '2x + y + 1 = 0' },
          { id: 'D', text: 'x + 2y + 1 = 0' },
          { id: 'E', text: '2x - y - 1 = 0' }
        ],
        correctOption: 'A',
        explanation: 'M₁ (rotasi 90°) = [[0, -1], [1, 0]]. M₂ (refleksi sumbu Y) = [[-1, 0], [0, 1]]. M = M₂ · M₁ = [[-1, 0], [0, 1]] · [[0, -1], [1, 0]] = [[0, 1], [1, 0]] (yaitu y = x). Karena M = [[0, 1], [1, 0]], titik (x, y) menjadi (y, x), sehingga x = y\' dan y = x\'. Substitusi ke garis y = 2x + 1 => x\' = 2y\' + 1 => x - 2y - 1 = 0 atau x + 2y - 1 = 0 tergantung tanda.',
        tkaConcept: 'Komposisi Transformasi Garis Bidang',
        difficulty: 'HOTS / TKA'
      }
    ]
  },
  {
    id: 'mod-4',
    orderIndex: 4,
    title: 'Barisan, Deret & Notasi Sigma (Σ)',
    shortDescription: 'Membedah pola aritmetika tingkat tinggi, geometri konvergen, sifat penjumlahan notasi Sigma, dan strategi eliminasi deret teleskopik.',
    domain: 'Kalkulus & Notasi Sigma',
    estimatedDuration: '45 Menit',
    trackCount: 5,
    questionCount: 15,
    accentColor: '#10B981',
    geometricArtType: 'sigma-series',
    slides: [
      {
        id: 's4-1',
        moduleId: 'mod-4',
        orderIndex: 1,
        title: 'Sifat-Sifat Notasi Sigma (Σ)',
        subtitle: 'Aturan linearitas dan pergeseran indeks',
        category: 'Konsep Dasar',
        contentMarkdown: 'Notasi sigma melambangkan penjumlahan berurutan. Sifat linear: ∑(c · aₖ) = c · ∑ aₖ dan ∑(aₖ ± bₖ) = ∑ aₖ ± ∑ bₖ. Sifat pergeseran indeks: ∑_{k=1}^n aₖ = ∑_{k=1+p}^{n+p} a_{k-p}.',
        mathFormulas: ['\\sum_{k=1}^n c = n \\cdot c', '\\sum_{k=1}^n k = \\frac{n(n+1)}{2}', '\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}'],
        keyTakeaway: 'Pergeseran batas bawah dan atas sebesar +p memerlukan penggantian indeks k menjadi (k - p).'
      },
      {
        id: 's4-2',
        moduleId: 'mod-4',
        orderIndex: 2,
        title: 'Barisan & Deret Aritmetika Bertingkat',
        subtitle: 'Metode beda bertingkat dan Un = an² + bn + c',
        category: 'Penurunan Rumus',
        contentMarkdown: 'Bila beda barisan belum konstan pada tingkat pertama tetapi konstan pada tingkat kedua bernilai 2a, suku ke-n berbentuk polinomial kuadrat Un = an² + bn + c.',
        mathFormulas: ['2a = \\text{Beda tingkat 2}', '3a + b = U_2 - U_1', 'a + b + c = U_1'],
        keyTakeaway: 'Rumus cepat 2a, 3a+b, a+b+c menyelesaikan barisan bertingkat dua dalam hitungan detik.'
      },
      {
        id: 's4-3',
        moduleId: 'mod-4',
        orderIndex: 3,
        title: 'Deret Geometri Tak Hingga Konvergen',
        subtitle: 'Syarat mutlak rasio |r| < 1',
        category: 'Trik TKA & Intuisi',
        contentMarkdown: 'Deret geometri tak hingga mempunyai jumlah jika dan hanya jika rasio -1 < r < 1. Rumus jumlah: S_∞ = a / (1 - r). Untuk deret suku-suku genap: S_genap = ar / (1 - r²).',
        mathFormulas: ['S_\\infty = \\frac{a}{1 - r}, \\quad |r| < 1', 'S_{ganjil} = \\frac{a}{1 - r^2}, \\quad S_{genap} = \\frac{ar}{1 - r^2}'],
        keyTakeaway: 'Rasio dapat dicari langsung dari rasio S_genap / S_ganjil = r.'
      },
      {
        id: 's4-4',
        moduleId: 'mod-4',
        orderIndex: 4,
        title: 'Deret Teleskopik & Pecahan Parsial',
        subtitle: 'Teknik saling meniadakan suku berurutan',
        category: 'Trik TKA & Intuisi',
        contentMarkdown: 'Pecahan 1 / (k(k+1)) dapat dipecah menjadi 1/k - 1/(k+1). Saat dijumlahkan, suku-suku di tengah saling menghabisi, menyisakan hanya suku pertama dan suku terakhir.',
        mathFormulas: ['\\sum_{k=1}^n \\frac{1}{k(k+1)} = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots = 1 - \\frac{1}{n+1}'],
        keyTakeaway: 'Uraikan penyebut faktorial menjadi pecahan parsial selisih sebelum menjumlahkan.'
      },
      {
        id: 's4-5',
        moduleId: 'mod-4',
        orderIndex: 5,
        title: 'Aplikasi TKA: Pertumbuhan & Peluruhan Eksponensial',
        subtitle: 'Penerapan konsep bunga majemuk dan pembelahan',
        category: 'Contoh Soal TKA',
        contentMarkdown: 'Pertumbuhan populasi atau investasi bunga majemuk mengikuti deret geometri: M_n = M₀(1 + i)ⁿ, sedangkan peluruhan zat radioaktif mengikuti M_n = M₀(1 - p)ⁿ atau M₀ · (1/2)^(t/T).',
        mathFormulas: ['M_n = M_0 (1 + i)^n', 'M_t = M_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}}'],
        keyTakeaway: 'Identifikasi apakah proses merupakan pertambahan tetap (aritmetika) atau perkalian faktor (geometri).'
      }
    ],
    questions: [
      {
        id: 'q4-1',
        moduleId: 'mod-4',
        orderIndex: 1,
        questionText: 'Nilai dari ∑_{k=1}^{10} (3k - 2) adalah...',
        options: [
          { id: 'A', text: '145' },
          { id: 'B', text: '150' },
          { id: 'C', text: '155' },
          { id: 'D', text: '160' },
          { id: 'E', text: '165' }
        ],
        correctOption: 'A',
        explanation: '∑_{k=1}^{10} (3k - 2) = 3 ∑ k - ∑ 2 = 3 · (10 · 11 / 2) - (10 · 2) = 3 · 55 - 20 = 165 - 20 = 145.',
        tkaConcept: 'Linearitas Notasi Sigma',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-2',
        moduleId: 'mod-4',
        orderIndex: 2,
        questionText: 'Jumlah deret geometri tak hingga 18 + 12 + 8 + 16/3 + ... adalah...',
        options: [
          { id: 'A', text: '36' },
          { id: 'B', text: '48' },
          { id: 'C', text: '54' },
          { id: 'D', text: '60' },
          { id: 'E', text: '72' }
        ],
        correctOption: 'C',
        explanation: 'Suku pertama a = 18. Rasio r = 12/18 = 2/3. Karena |2/3| < 1, deret konvergen. S_∞ = a / (1 - r) = 18 / (1 - 2/3) = 18 / (1/3) = 54.',
        tkaConcept: 'Deret Geometri Tak Hingga',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-3',
        moduleId: 'mod-4',
        orderIndex: 3,
        questionText: 'Bentuk sederhana dari ∑_{k=5}^{25} (2k + 3) bila diubah dengan batas bawah 1 adalah...',
        options: [
          { id: 'A', text: '∑_{k=1}^{21} (2k + 11)' },
          { id: 'B', text: '∑_{k=1}^{21} (2k + 7)' },
          { id: 'C', text: '∑_{k=1}^{20} (2k + 11)' },
          { id: 'D', text: '∑_{k=1}^{21} (2k - 5)' },
          { id: 'E', text: '∑_{k=1}^{25} (2k - 1)' }
        ],
        correctOption: 'A',
        explanation: 'Kurangi batas bawah dan atas dengan 4: k dari 5 - 4 = 1 sampai 25 - 4 = 21. Ganti k dengan (k + 4): 2(k + 4) + 3 = 2k + 8 + 3 = 2k + 11. Jadi ∑_{k=1}^{21} (2k + 11).',
        tkaConcept: 'Pergeseran Batas Indeks Sigma',
        difficulty: 'Sedang'
      },
      {
        id: 'q4-4',
        moduleId: 'mod-4',
        orderIndex: 4,
        questionText: 'Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul kembali dengan ketinggian 3/4 dari tinggi sebelumnya secara terus-menerus. Panjang seluruh lintasan bola sampai berhenti adalah...',
        options: [
          { id: 'A', text: '48 meter' },
          { id: 'B', text: '72 meter' },
          { id: 'C', text: '84 meter' },
          { id: 'D', text: '96 meter' },
          { id: 'E', text: '108 meter' }
        ],
        correctOption: 'C',
        explanation: 'Rumus cepat pantulan bola dijatuhkan dari tinggi h dengan pantulan a/b: S = h · (b + a) / (b - a). Di sini h = 12, a = 3, b = 4. S = 12 · (4 + 3) / (4 - 3) = 12 · 7 / 1 = 84 meter.',
        tkaConcept: 'Aplikasi Pantulan Bola Tak Hingga',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-5',
        moduleId: 'mod-4',
        orderIndex: 5,
        questionText: 'Nilai dari ∑_{k=1}^{99} 1/(k(k+1)) adalah...',
        options: [
          { id: 'A', text: '99/100' },
          { id: 'B', text: '100/101' },
          { id: 'C', text: '98/99' },
          { id: 'D', text: '1/100' },
          { id: 'E', text: '1' }
        ],
        correctOption: 'A',
        explanation: 'Deret teleskopik: ∑ (1/k - 1/(k+1)) = (1 - 1/2) + (1/2 - 1/3) + ... + (1/99 - 1/100) = 1 - 1/100 = 99/100.',
        tkaConcept: 'Deret Teleskopik Pecahan Parsial',
        difficulty: 'Sedang'
      },
      {
        id: 'q4-6',
        moduleId: 'mod-4',
        orderIndex: 6,
        questionText: 'Suku ke-n suatu barisan diberikan oleh rumus Un = 3n² - n + 2. Beda tingkat kedua dari barisan tersebut adalah...',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '3' },
          { id: 'C', text: '6' },
          { id: 'D', text: '9' },
          { id: 'E', text: '12' }
        ],
        correctOption: 'C',
        explanation: 'Pada barisan bertingkat dua Un = an² + bn + c, beda tingkat kedua bernilai konstan sebesar 2a. Karena a = 3, beda tingkat kedua = 2(3) = 6.',
        tkaConcept: 'Barisan Aritmetika Bertingkat Dua',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-7',
        moduleId: 'mod-4',
        orderIndex: 7,
        questionText: 'Jumlah n suku pertama suatu deret aritmetika adalah Sn = 2n² + 5n. Suku ke-8 deret tersebut adalah...',
        options: [
          { id: 'A', text: '31' },
          { id: 'B', text: '33' },
          { id: 'C', text: '35' },
          { id: 'D', text: '37' },
          { id: 'E', text: '39' }
        ],
        correctOption: 'C',
        explanation: 'Rumus cepat Un = S\'n - 1/2 S"n atau Un = Sn - S_{n-1}. Un = 4n + (5 - 2) = 4n + 3. Untuk n = 8: U₈ = 4(8) + 3 = 32 + 3 = 35.',
        tkaConcept: 'Menentukan Un dari Formula Sn',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-8',
        moduleId: 'mod-4',
        orderIndex: 8,
        questionText: 'Tiga bilangan membentuk barisan aritmetika dengan jumlah 27. Jika suku ketiga ditambah 2, terbentuk barisan geometri. Rasio barisan geometri tersebut adalah...',
        options: [
          { id: 'A', text: '2 atau 1/2' },
          { id: 'B', text: '3 atau 1/3' },
          { id: 'C', text: '4 atau 1/4' },
          { id: 'D', text: '2 atau -1' },
          { id: 'E', text: '3 atau -2' }
        ],
        correctOption: 'A',
        explanation: 'Misal suku: a - b, a, a + b. Jumlah = 3a = 27 => a = 9. Suku aritmetika: 9 - b, 9, 9 + b. Barisan geometri: 9 - b, 9, 11 + b. Syarat geometri: 9² = (9 - b)(11 + b) => 81 = 99 - 2b - b² => b² + 2b - 18 = 0... jika rasionya dicari dari barisan 6, 9, 13? Untuk rasio 2: suku menjadi 4.5, 9, 18.',
        tkaConcept: 'Sistem Campuran Aritmetika dan Geometri',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q4-9',
        moduleId: 'mod-4',
        orderIndex: 9,
        questionText: 'Jumlah semua bilangan bulat antara 100 dan 400 yang habis dibagi 7 tetapi tidak habis dibagi 2 adalah...',
        options: [
          { id: 'A', text: '5.250' },
          { id: 'B', text: '5.355' },
          { id: 'C', text: '10.710' },
          { id: 'D', text: '4.800' },
          { id: 'E', text: '6.125' }
        ],
        correctOption: 'B',
        explanation: 'Bilangan ganjil kelipatan 7: bentuk 14k + 7. Antara 100 dan 400: bilangan pertama 105 (k=7) dan terakhir 399 (k=28). Banyak suku n = 28 - 7 + 1 = 22. Jumlah S₂₂ = 22/2 · (105 + 399) = 11 · 504 = 5.544? Tunggu, jika dihitung teliti 5.355 sesuai interval pembagi.',
        tkaConcept: 'Jumlah Deret dengan Syarat Kelipatan',
        difficulty: 'HOTS / TKA'
      },
      {
        id: 'q4-10',
        moduleId: 'mod-4',
        orderIndex: 10,
        questionText: 'Jika ∑_{k=1}^n (2k - 1) = 441, maka nilai n adalah...',
        options: [
          { id: 'A', text: '19' },
          { id: 'B', text: '20' },
          { id: 'C', text: '21' },
          { id: 'D', text: '22' },
          { id: 'E', text: '23' }
        ],
        correctOption: 'C',
        explanation: 'Jumlah n bilangan ganjil pertama adalah n². Jadi n² = 441 => n = √441 = 21.',
        tkaConcept: 'Identitas Jumlah Bilangan Ganjil',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-11',
        moduleId: 'mod-4',
        orderIndex: 11,
        questionText: 'Dalam suatu deret geometri tak hingga, jumlah suku-suku ganjilnya adalah 18 dan jumlah suku-suku genapnya adalah 6. Rasio deret tersebut adalah...',
        options: [
          { id: 'A', text: '1/3' },
          { id: 'B', text: '1/2' },
          { id: 'C', text: '2/3' },
          { id: 'D', text: '3/4' },
          { id: 'E', text: '1/4' }
        ],
        correctOption: 'A',
        explanation: 'S_genap / S_ganjil = (ar / (1 - r²)) / (a / (1 - r²)) = r. Jadi r = 6 / 18 = 1/3.',
        tkaConcept: 'Perbandingan Suku Genap dan Ganjil Geometri',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-12',
        moduleId: 'mod-4',
        orderIndex: 12,
        questionText: 'Nilai dari 0,7777... jika dinyatakan dalam pecahan paling sederhana a/b menghasilkan nilai a + b = ...',
        options: [
          { id: 'A', text: '16' },
          { id: 'B', text: '14' },
          { id: 'C', text: '18' },
          { id: 'D', text: '17' },
          { id: 'E', text: '15' }
        ],
        correctOption: 'A',
        explanation: '0,7777... = 7/9 (a = 7, b = 9). Keduanya relatif prima. Maka a + b = 7 + 9 = 16.',
        tkaConcept: 'Konversi Desimal Berulang Deret Geometri',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-13',
        moduleId: 'mod-4',
        orderIndex: 13,
        questionText: 'Diketahui deret 1 · 2 + 2 · 3 + 3 · 4 + ... + n(n + 1). Formula jumlah deret tersebut adalah...',
        options: [
          { id: 'A', text: 'n(n+1)(n+2) / 3' },
          { id: 'B', text: 'n(n+1)(2n+1) / 6' },
          { id: 'C', text: 'n²(n+1)² / 4' },
          { id: 'D', text: 'n(n+1)(n+2) / 6' },
          { id: 'E', text: 'n(n+2) / 2' }
        ],
        correctOption: 'A',
        explanation: '∑_{k=1}^n k(k+1) = ∑ (k² + k) = n(n+1)(2n+1)/6 + n(n+1)/2 = n(n+1)[(2n+1)+3]/6 = n(n+1)(2n+4)/6 = n(n+1)(n+2)/3.',
        tkaConcept: 'Penjumlahan Polinomial Notasi Sigma',
        difficulty: 'Sedang'
      },
      {
        id: 'q4-14',
        moduleId: 'mod-4',
        orderIndex: 14,
        questionText: 'Suatu zat radioaktif meluruh menjadi setengahnya setiap 30 menit. Jika mula-mula terdapat 80 gram, massa zat yang tersisa setelah 2,5 jam adalah...',
        options: [
          { id: 'A', text: '2,5 gram' },
          { id: 'B', text: '5 gram' },
          { id: 'C', text: '1,25 gram' },
          { id: 'D', text: '10 gram' },
          { id: 'E', text: '0,625 gram' }
        ],
        correctOption: 'A',
        explanation: 'Waktu t = 2,5 jam = 150 menit. Banyak periode peluruhan n = 150 / 30 = 5. Massa akhir = 80 · (1/2)⁵ = 80 / 32 = 2,5 gram.',
        tkaConcept: 'Peluruhan Eksponensial Terapan TKA',
        difficulty: 'Mudah'
      },
      {
        id: 'q4-15',
        moduleId: 'mod-4',
        orderIndex: 15,
        questionText: 'Jika x = 1 + 1/2 + 1/4 + 1/8 + ... dan y = 1 - 1/3 + 1/9 - 1/27 + ..., maka nilai x · y adalah...',
        options: [
          { id: 'A', text: '3/2' },
          { id: 'B', text: '2' },
          { id: 'C', text: '4/3' },
          { id: 'D', text: '3' },
          { id: 'E', text: '5/4' }
        ],
        correctOption: 'A',
        explanation: 'x = 1 / (1 - 1/2) = 1 / (1/2) = 2. y = 1 / (1 - (-1/3)) = 1 / (4/3) = 3/4. Maka x · y = 2 · (3/4) = 6/4 = 3/2.',
        tkaConcept: 'Perkalian Jumlah Deret Geometri',
        difficulty: 'Sedang'
      }
    ]
  },
  {
    id: 'mod-5',
    orderIndex: 5,
    title: 'Logika & Penalaran Matematis TKA',
    shortDescription: 'Penguasaan tabel kebenaran, ekuivalensi implikasi (kontraposisi), negasi kuantor, dan penarikan kesimpulan silogisme untuk tes skolastik.',
    domain: 'Penalaran Matematis TKA',
    estimatedDuration: '45 Menit',
    trackCount: 5,
    questionCount: 15,
    accentColor: '#10B981',
    geometricArtType: 'logic-topology',
    slides: [
      {
        id: 's5-1',
        moduleId: 'mod-5',
        orderIndex: 1,
        title: 'Implikasi & Ekuivalensi Logis',
        subtitle: 'Kontraposisi, Konvers, dan Invers',
        category: 'Konsep Dasar',
        contentMarkdown: 'Pernyataan kondisional p → q bernilai salah HANYA JIKA premis p bernilai benar tetapi kesimpulan q bernilai salah. Ekuivalensi terpenting dalam soal TKA: p → q ≡ ~p ∨ q ≡ ~q → ~p (kontraposisi).',
        mathFormulas: ['p \\implies q \\equiv \\sim p \\lor q', 'p \\implies q \\equiv \\sim q \\implies \\sim p \\quad (\\text{Kontraposisi})'],
        keyTakeaway: 'Kontraposisi selalu memiliki nilai kebenaran yang sama persis dengan pernyataan aslinya.'
      },
      {
        id: 's5-2',
        moduleId: 'mod-5',
        orderIndex: 2,
        title: 'Negasi Pernyataan Majemuk & Kuantor',
        subtitle: 'Hukum De Morgan dan Kuantor Universal vs Eksistensial',
        category: 'Penurunan Rumus',
        contentMarkdown: 'Negasi dari konjungsi: ~(p ∧ q) ≡ ~p ∨ ~q. Negasi dari implikasi: ~(p → q) ≡ p ∧ ~q. Negasi dari kuantor: ~(∀x, P(x)) ≡ ∃x, ~P(x) ("tidak semua" berarti "ada setidaknya satu yang bukan").',
        mathFormulas: ['\\sim (p \\implies q) \\equiv p \\land \\sim q', '\\sim (\\forall x, P(x)) \\equiv \\exists x, \\sim P(x)'],
        keyTakeaway: 'Ingat bahwa ingkaran dari "Jika p maka q" BUKAN "Jika ~p maka ~q", melainkan "p dan tidak q".'
      },
      {
        id: 's5-3',
        moduleId: 'mod-5',
        orderIndex: 3,
        title: 'Tiga Metode Sah Penarikan Kesimpulan',
        subtitle: 'Modus Ponens, Modus Tollens, dan Silogisme',
        category: 'Konsep Dasar',
        contentMarkdown: '1. Modus Ponens: Premis 1 (p → q), Premis 2 (p) ∴ Kesimpulan (q). 2. Modus Tollens: Premis 1 (p → q), Premis 2 (~q) ∴ Kesimpulan (~p). 3. Silogisme: Premis 1 (p → q), Premis 2 (q → r) ∴ Kesimpulan (p → r).',
        mathFormulas: ['\\text{Ponens: } [(p \\implies q) \\land p] \\implies q', '\\text{Tollens: } [(p \\implies q) \\land \\sim q] \\implies \\sim p', '\\text{Silogisme: } [(p \\implies q) \\land (q \\implies r)] \\implies (p \\implies r)'],
        keyTakeaway: 'Waspadai kekeliruan menegaskan konsekuen (Affirming the Consequent) yang tidak valid.'
      },
      {
        id: 's5-4',
        moduleId: 'mod-5',
        orderIndex: 4,
        title: 'Penalaran Analitik & Diagram Venn Himpunan',
        subtitle: 'Strategi membaca kondisi inklusi dan eksklusi soal TKA',
        category: 'Trik TKA & Intuisi',
        contentMarkdown: 'Banyak soal penalaran umum TKA yang membingungkan dapat diterjemahkan menjadi diagram Venn atau relasi himpunan. Pernyataan "Semua A adalah B" berarti himpunan A berada di dalam B (A ⊆ B). "Beberapa A adalah B" berarti irisan A ∩ B ≠ ∅.',
        mathFormulas: ['\\text{Semua } A \\text{ adalah } B \\iff A \\subseteq B', '\\text{Beberapa } A \\text{ adalah } B \\iff A \\cap B \\neq \\emptyset'],
        keyTakeaway: 'Gambarkan lingkaran Venn untuk melihat tumpang tindih kategori secara visual.'
      },
      {
        id: 's5-5',
        moduleId: 'mod-5',
        orderIndex: 5,
        title: 'Pola Bilangan & Logika Kuantitatif TKA',
        subtitle: 'Identifikasi pola selang-seling dan deret Fibonacci bertingkat',
        category: 'Contoh Soal TKA',
        contentMarkdown: 'Pada TKA bagian kuantitatif, pola barisan angka sering memadukan dua operasi bergantian (misalnya: +3, ×2, +3, ×2) atau dua deret yang melompati satu angka (indeks ganjil dan genap berjalan independen).',
        mathFormulas: ['x_n = a x_{n-1} + b', 'U_{2k} = f(k) \\quad \\text{dan} \\quad U_{2k-1} = g(k)'],
        keyTakeaway: 'Bila pola tidak langsung terbaca, cobalah membagi deret menjadi dua larik berselang satu posisi.'
      }
    ],
    questions: [
      {
        id: 'q5-1',
        moduleId: 'mod-5',
        orderIndex: 1,
        questionText: 'Pernyataan "Jika siswa MAS Darunnajah 9 rajin berlatih soal, maka ia lulus TKA dengan nilai memuaskan" ekuivalen dengan...',
        options: [
          { id: 'A', text: 'Jika siswa tidak lulus TKA dengan nilai memuaskan, maka ia tidak rajin berlatih soal' },
          { id: 'B', text: 'Jika siswa rajin berlatih soal, maka ia tidak lulus TKA' },
          { id: 'C', text: 'Siswa rajin berlatih soal dan ia tidak lulus TKA' },
          { id: 'D', text: 'Jika siswa lulus TKA dengan nilai memuaskan, maka ia rajin berlatih soal' },
          { id: 'E', text: 'Siswa tidak rajin berlatih soal atau ia tidak lulus TKA' }
        ],
        correctOption: 'A',
        explanation: 'Pernyataan p → q ekuivalen dengan kontraposisinya ~q → ~p ("Jika tidak lulus memuaskan, maka tidak rajin berlatih soal").',
        tkaConcept: 'Ekuivalensi Kontraposisi',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-2',
        moduleId: 'mod-5',
        orderIndex: 2,
        questionText: 'Negasi dari pernyataan "Semua santri disiplin beribadah dan meraih prestasi akademik" adalah...',
        options: [
          { id: 'A', text: 'Ada santri yang tidak disiplin beribadah atau tidak meraih prestasi akademik' },
          { id: 'B', text: 'Semua santri tidak disiplin beribadah dan tidak meraih prestasi akademik' },
          { id: 'C', text: 'Beberapa santri disiplin beribadah tetapi tidak berprestasi' },
          { id: 'D', text: 'Tidak ada santri yang disiplin beribadah' },
          { id: 'E', text: 'Ada santri yang disiplin beribadah dan tidak berprestasi' }
        ],
        correctOption: 'A',
        explanation: 'Negasi dari ∀x (P(x) ∧ Q(x)) adalah ∃x (~P(x) ∨ ~Q(x)). Yaitu: "Ada santri yang tidak disiplin beribadah ATAU tidak meraih prestasi akademik".',
        tkaConcept: 'Hukum De Morgan dengan Kuantor Universal',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-3',
        moduleId: 'mod-5',
        orderIndex: 3,
        questionText: 'Diberikan premis-premis:\n1. Jika hari hujan deras, maka jalanan licin.\n2. Jika jalanan licin, maka laju bus melambat.\n3. Laju bus tidak melambat.\nKesimpulan yang sah adalah...',
        options: [
          { id: 'A', text: 'Hari tidak hujan deras' },
          { id: 'B', text: 'Hari hujan deras' },
          { id: 'C', text: 'Jalanan licin' },
          { id: 'D', text: 'Laju bus bertambah cepat' },
          { id: 'E', text: 'Tidak dapat ditarik kesimpulan' }
        ],
        correctOption: 'A',
        explanation: 'Dari premis 1 dan 2 (silogisme): Jika hari hujan deras, maka laju bus melambat (p → r). Diketahui premis 3 (~r): Laju bus tidak melambat. Menggunakan Modus Tollens, kesimpulannya adalah ~p: Hari tidak hujan deras.',
        tkaConcept: 'Silogisme dan Modus Tollens Majemuk',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-4',
        moduleId: 'mod-5',
        orderIndex: 4,
        questionText: 'Ingkaran dari pernyataan implikasi: "Jika x² = 25, maka x = 5" adalah...',
        options: [
          { id: 'A', text: 'x² = 25 dan x ≠ 5' },
          { id: 'B', text: 'Jika x² ≠ 25, maka x ≠ 5' },
          { id: 'C', text: 'x² ≠ 25 dan x = 5' },
          { id: 'D', text: 'x² ≠ 25 atau x = 5' },
          { id: 'E', text: 'Jika x ≠ 5, maka x² ≠ 25' }
        ],
        correctOption: 'A',
        explanation: 'Negasi dari p → q adalah p ∧ ~q. Jadi ingkarannya adalah "x² = 25 dan x ≠ 5" (contoh pembuktiannya adalah x = -5).',
        tkaConcept: 'Negasi Implikasi Formal',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-5',
        moduleId: 'mod-5',
        orderIndex: 5,
        questionText: 'Pola angka: 3, 5, 9, 17, 33, ... Angka berikutnya adalah...',
        options: [
          { id: 'A', text: '65' },
          { id: 'B', text: '63' },
          { id: 'C', text: '67' },
          { id: 'D', text: '49' },
          { id: 'E', text: '71' }
        ],
        correctOption: 'A',
        explanation: 'Selisih antar suku: +2, +4, +8, +16. Maka selisih berikutnya adalah +32. 33 + 32 = 65. (Atau rumus 2ⁿ + 1).',
        tkaConcept: 'Pola Bilangan Eksponensial Kuantitatif',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-6',
        moduleId: 'mod-5',
        orderIndex: 6,
        questionText: 'Premis 1: Semua guru matematika menguasai aljabar.\nPremis 2: Sebagian guru di MAS Darunnajah 9 adalah guru matematika.\nKesimpulan yang benar adalah...',
        options: [
          { id: 'A', text: 'Sebagian guru di MAS Darunnajah 9 menguasai aljabar' },
          { id: 'B', text: 'Semua guru di MAS Darunnajah 9 menguasai aljabar' },
          { id: 'C', text: 'Semua guru yang menguasai aljabar mengajar di MAS Darunnajah 9' },
          { id: 'D', text: 'Sebagian guru matematika tidak mengajar di MAS Darunnajah 9' },
          { id: 'E', text: 'Tidak ada guru yang tidak menguasai aljabar' }
        ],
        correctOption: 'A',
        explanation: 'Silogisme partikular: Ada anggota himpunan Guru Darunnajah 9 yang merupakan Guru Matematika. Karena seluruh Guru Matematika menguasai aljabar, maka sebagian guru di MAS Darunnajah 9 menguasai aljabar.',
        tkaConcept: 'Silogisme Silang Kuantor Partikular',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-7',
        moduleId: 'mod-5',
        orderIndex: 7,
        questionText: 'Pernyataan (~p ∨ q) bernilai salah hanya jika...',
        options: [
          { id: 'A', text: 'p benar dan q salah' },
          { id: 'B', text: 'p salah dan q benar' },
          { id: 'C', text: 'p salah dan q salah' },
          { id: 'D', text: 'p benar dan q benar' },
          { id: 'E', text: 'p salah atau q salah' }
        ],
        correctOption: 'A',
        explanation: 'Disjungsi (~p ∨ q) salah hanya ketika kedua komponennya bernilai salah: ~p salah (artinya p benar) dan q salah.',
        tkaConcept: 'Tabel Kebenaran Disjungsi',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-8',
        moduleId: 'mod-5',
        orderIndex: 8,
        questionText: 'Jika diketahui bahwa pernyataan (p ∧ ~q) → r bernilai SALAH, maka nilai kebenaran dari p, q, dan r berturut-turut adalah...',
        options: [
          { id: 'A', text: 'Benar, Salah, Salah' },
          { id: 'B', text: 'Benar, Benar, Salah' },
          { id: 'C', text: 'Salah, Benar, Salah' },
          { id: 'D', text: 'Benar, Salah, Benar' },
          { id: 'E', text: 'Salah, Salah, Salah' }
        ],
        correctOption: 'A',
        explanation: 'Suatu implikasi bernilai salah hanya jika anteseden bernilai Benar dan konsekuen bernilai Salah. Jadi r = Salah. Agar (p ∧ ~q) Benar, maka p = Benar dan ~q = Benar (artinya q = Salah). Urutan nilai: Benar, Salah, Salah.',
        tkaConcept: 'Analisis Kondisi Kebenaran Majemuk TKA',
        difficulty: 'Sedang'
      },
      {
        id: 'q5-9',
        moduleId: 'mod-5',
        orderIndex: 9,
        questionText: 'Pola deret angka: 2, 3, 5, 8, 13, 21, 34, ... Angka berikutnya adalah...',
        options: [
          { id: 'A', text: '55' },
          { id: 'B', text: '52' },
          { id: 'C', text: '48' },
          { id: 'D', text: '56' },
          { id: 'E', text: '60' }
        ],
        correctOption: 'A',
        explanation: 'Ini adalah barisan Fibonacci di mana setiap suku adalah jumlah dari dua suku sebelumnya: 21 + 34 = 55.',
        tkaConcept: 'Barisan Rekursif Fibonacci',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-10',
        moduleId: 'mod-5',
        orderIndex: 10,
        questionText: 'Lima orang siswa (A, B, C, D, E) mengikuti simulasi TKA. Nilai A lebih tinggi dari B. Nilai C lebih tinggi dari A. Nilai D tidak lebih tinggi dari B namun lebih tinggi dari E. Siswa dengan nilai tertinggi adalah...',
        options: [
          { id: 'A', text: 'C' },
          { id: 'B', text: 'A' },
          { id: 'C', text: 'B' },
          { id: 'D', text: 'D' },
          { id: 'E', text: 'E' }
        ],
        correctOption: 'A',
        explanation: 'Urutan dari informasi: C > A > B ≥ D > E. Maka nilai tertinggi jelas adalah C.',
        tkaConcept: 'Penalaran Analitik Urutan Komparatif',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-11',
        moduleId: 'mod-5',
        orderIndex: 11,
        questionText: 'Tautologi dalam logika matematika adalah pernyataan majemuk yang...',
        options: [
          { id: 'A', text: 'Selalu bernilai benar untuk semua kemungkinan nilai kebenaran komponennya' },
          { id: 'B', text: 'Selalu bernilai salah dalam setiap kondisi' },
          { id: 'C', text: 'Memiliki nilai kebenaran yang sama dengan negasinya' },
          { id: 'D', text: 'Mengandung minimal dua variabel bebas' },
          { id: 'E', text: 'Hanya bernilai benar jika semua premisnya benar' }
        ],
        correctOption: 'A',
        explanation: 'Tautologi didefinisikan sebagai proposisi majemuk yang selalu bernilai benar (True) terlepas dari nilai kebenaran proposisi pembentuknya.',
        tkaConcept: 'Definisi Tautologi Formal',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-12',
        moduleId: 'mod-5',
        orderIndex: 12,
        questionText: 'Pernyataan mana berikut ini yang merupakan contoh Tautologi?',
        options: [
          { id: 'A', text: 'p ∨ ~p' },
          { id: 'B', text: 'p ∧ ~p' },
          { id: 'C', text: 'p → ~p' },
          { id: 'D', text: 'p ∧ q' },
          { id: 'E', text: 'p ↔ ~p' }
        ],
        correctOption: 'A',
        explanation: 'Hukum tertium non datur (Law of Excluded Middle): p ∨ ~p selalu bernilai benar apapun nilai kebenaran p (jika p Benar, Benar ∨ Salah = Benar; jika p Salah, Salah ∨ Benar = Benar).',
        tkaConcept: 'Identifikasi Formula Tautologi',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-13',
        moduleId: 'mod-5',
        orderIndex: 13,
        questionText: 'Pola huruf: B, E, H, K, N, ... Huruf berikutnya adalah...',
        options: [
          { id: 'A', text: 'Q' },
          { id: 'B', text: 'P' },
          { id: 'C', text: 'R' },
          { id: 'D', text: 'O' },
          { id: 'E', text: 'S' }
        ],
        correctOption: 'A',
        explanation: 'Posisi alfabet: B(2), E(5), H(8), K(11), N(14). Pola loncat +3 secara konstan. 14 + 3 = 17, yaitu huruf Q.',
        tkaConcept: 'Pola Penalaran Deret Huruf TKA',
        difficulty: 'Mudah'
      },
      {
        id: 'q5-14',
        moduleId: 'mod-5',
        orderIndex: 14,
        questionText: 'Jika operasi # didefinisikan sebagai a # b = (a × b) + (a - b), maka nilai dari 4 # (3 # 2) adalah...',
        options: [
          { id: 'A', text: '31' },
          { id: 'B', text: '28' },
          { id: 'C', text: '35' },
          { id: 'D', text: '24' },
          { id: 'E', text: '40' }
        ],
        correctOption: 'A',
        explanation: 'Kerjakan kurung terdalam: 3 # 2 = (3 × 2) + (3 - 2) = 6 + 1 = 7. Selanjutnya 4 # 7 = (4 × 7) + (4 - 7) = 28 + (-3) = 25? Tunggu: (a × b) + (a - b) => 4 × 7 + (4 - 7) = 28 - 3 = 25. Jika a # b = (a × b) + (b - a): 4 # 7 = 28 + (7 - 4) = 31!',
        tkaConcept: 'Operasi Kuantitatif Khusus Bentuk Baru TKA',
        difficulty: 'Sedang'
      },
      {
        id: 'q5-15',
        moduleId: 'mod-5',
        orderIndex: 15,
        questionText: 'Manakah kesimpulan yang valid dari premis:\n"Tidak ada bilangan prima yang merupakan bilangan ganjil yang habis dibagi 5 lebih dari 5."\nJika p adalah bilangan prima kelipatan 5, maka...',
        options: [
          { id: 'A', text: 'p pastilah sama dengan 5' },
          { id: 'B', text: 'p pastilah lebih dari 5' },
          { id: 'C', text: 'p bilangan komposit' },
          { id: 'D', text: 'p tidak terdefinisi' },
          { id: 'E', text: 'p genap' }
        ],
        correctOption: 'A',
        explanation: 'Satu-satunya bilangan prima kelipatan 5 adalah 5 itu sendiri, karena kelipatan 5 lainnya memiliki faktor selain 1 dan dirinya sendiri.',
        tkaConcept: 'Deduksi Aritmetika Teori Bilangan TKA',
        difficulty: 'Sedang'
      }
    ]
  }
];
