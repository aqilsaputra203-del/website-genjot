/**
 * GenjotCandlestick Trading Academy - Database Materi & Kuis
 * File ini berisi semua materi pembelajaran (Fase 1-5), kuis fase,
 * glosarium istilah trading, dan kuis kepribadian trading.
 */

const ACADEMY_DATA = {
  phases: [
    {
      id: 1,
      title: "Fase 1: Fondasi Dasar (Minggu 1-4)",
      description: "Membangun fondasi pemahaman tentang pasar forex, keunikan XAU/USD (Emas), istilah teknis wajib, serta pengaruh fundamental ekonomi global.",
      weeks: [
        {
          id: 1,
          title: "Minggu 1: Pengenalan Forex & XAU/USD",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Apa itu Forex?</h3>
            <p><strong>Forex</strong> merupakan singkatan dari <em>Foreign Exchange</em> (Pertukaran Valuta Asing). Sederhananya, trading forex adalah aktivitas membeli satu mata uang sambil menjual mata uang lainnya secara online untuk mendapatkan keuntungan dari selisih perubahan harga.</p>
            <p>Pasar forex adalah pasar keuangan terbesar di dunia dengan perputaran uang mencapai lebih dari $7 Triliun per hari, dan beroperasi selama <strong>24 jam sehari, 5 hari seminggu</strong> (Senin hingga Jumat).</p>

            <div class="info-card">
              <h4>Kenapa XAU/USD? (Emas vs Dollar AS)</h4>
              <p>Di pasar forex, emas disimbolkan sebagai <strong>XAU</strong>, dan ditransaksikan terhadap Dollar Amerika Serikat (<strong>USD</strong>). Jadi, XAU/USD menunjukkan harga 1 troy ounce (sekitar 31.1 gram) emas murni dalam satuan Dollar Amerika.</p>
              <p>XAU/USD adalah instrumen favorit para trader karena beberapa alasan:</p>
              <ul>
                <li><strong>Volatilitas Tinggi:</strong> Harganya bergerak sangat aktif dan cepat, memberikan banyak peluang profit harian.</li>
                <li><strong>Likuiditas Sangat Besar:</strong> Sangat mudah untuk melakukan transaksi beli maupun jual secara instan.</li>
                <li><strong>Safe Haven Asset:</strong> Emas sering diburu investor saat terjadi ketidakpastian ekonomi atau perang dunia.</li>
              </ul>
            </div>

            <h3>Faktor Utama yang Memengaruhi Harga Emas</h3>
            <p>Secara umum, harga emas memiliki <strong>hubungan terbalik (inverse correlation)</strong> dengan kekuatan Dollar Amerika Serikat (DXY):</p>
            <div class="formula-box">
              <p>💵 US Dollar Menguat (📈) ➡️ 🥇 Emas Melemah (📉)</p>
              <p>💵 US Dollar Melemah (📉) ➡️ 🥇 Emas Menguat (📈)</p>
            </div>
          `,
          examples: [
            {
              title: "Contoh Kasus 1: Dampak Inflasi Tinggi",
              content: "Ketika inflasi di Amerika Serikat diumumkan melonjak tajam, nilai riil mata uang Dollar menurun. Investor menjadi panik dan memindahkan kekayaan mereka dari uang kertas ke aset fisik yang aman yaitu Emas. Akibatnya, permintaan Emas melonjak, dan harga XAU/USD naik dari 2000 ke 2040 dalam hitungan jam. Trader yang mengambil posisi <strong>Buy</strong> mendulang keuntungan."
            },
            {
              title: "Contoh Kasus 2: Kenaikan Suku Bunga The Fed",
              content: "Bank Sentral Amerika Serikat (The Fed) menaikkan suku bunga untuk meredam inflasi. Hal ini membuat investasi dalam mata uang Dollar menjadi sangat menarik karena memberikan imbal hasil tabungan/obligasi yang lebih tinggi. Investor berbondong-bondong menjual Emas (yang tidak menghasilkan bunga) untuk membeli Dollar. Akibatnya, harga XAU/USD merosot dari 2050 ke 2010. Trader yang mengambil posisi <strong>Sell</strong> mendapatkan keuntungan."
            }
          ],
          exercises: [
            {
              id: "w1_q1",
              question: "Jika perekonomian Amerika Serikat memburuk dan nilai Dollar melemah tajam, apa yang biasanya terjadi pada harga XAU/USD?",
              options: [
                "Harga XAU/USD akan turun karena orang takut investasi emas.",
                "Harga XAU/USD akan naik karena emas dianggap sebagai aset aman (Safe Haven) saat Dollar melemah.",
                "Harga XAU/USD tidak akan bergerak sama sekali.",
                "Harga XAU/USD akan menjadi sideways selamanya."
              ],
              correctAnswer: 1,
              explanation: "Tepat sekali! Hubungan XAU/USD umumnya berbanding terbalik dengan Dollar. Jika Dollar melemah karena ekonomi memburuk, investor cenderung mengamankan uang mereka dalam bentuk Emas, sehingga harga XAU/USD naik."
            },
            {
              id: "w1_q2",
              question: "Kapan pasar forex dibuka untuk umum?",
              options: [
                "Setiap hari selama 24 jam tanpa libur",
                "Senin sampai Jumat selama 24 jam sehari",
                "Sabtu dan Minggu saja",
                "Hanya jam 9 pagi sampai jam 5 sore setiap hari"
              ],
              correctAnswer: 1,
              explanation: "Benar! Pasar forex beroperasi 24 jam sehari dari Senin hingga Jumat. Pasar tutup pada hari Sabtu dan Minggu (weekend)."
            }
          ],
          summary: "Emas (XAU/USD) bergerak berlawanan dengan Dollar AS. Emas disukai karena volatilitasnya yang tinggi yang menawarkan peluang profit cepat bagi trader yang disiplin."
        },
        {
          id: 2,
          title: "Minggu 2: Istilah Dasar Trading",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Istilah Penting yang Wajib Dihafal Pemula</h3>
            <p>Sebelum masuk ke grafik chart, Anda harus memahami bahasa dasar yang digunakan dalam transaksi sehari-hari:</p>

            <ol>
              <li>
                <strong>Pip (Percentage in Point):</strong> 
                <p>Satuan terkecil untuk mengukur perubahan harga pada forex. Untuk XAU/USD, 1 pip setara dengan perubahan <strong>0.10</strong> pada harga. Contoh: Jika harga emas bergerak dari 2000.00 ke 2000.10, itu artinya harga naik 1 pip (atau 10 poin).</p>
              </li>
              <li>
                <strong>Lot (Volume Transaksi):</strong> 
                <p>Ukuran ukuran transaksi yang Anda buka di pasar. 
                <br>- 1.00 Lot Standard = Nilai kontrak besar.
                <br>- 0.10 Lot Mini.
                <br>- 0.01 Lot Micro (Sangat direkomendasikan untuk pemula dengan modal kecil).</p>
              </li>
              <li>
                <strong>Leverage (Daya Ungkit):</strong> 
                <p>Fasilitas pinjaman modal dari broker yang memungkinkan kita mengontrol nilai transaksi besar dengan jaminan modal kecil. Contoh leverage 1:100 berarti Anda cukup menyediakan modal $10 untuk melakukan transaksi senilai $1000.</p>
              </li>
              <li>
                <strong>Spread & Swap:</strong> 
                <p><strong>Spread</strong> adalah selisih antara harga jual (Bid) dan harga beli (Ask) yang diambil oleh broker sebagai komisi transaksi. <strong>Swap</strong> adalah biaya menginap jika posisi trading Anda dibiarkan terbuka melewati pergantian hari (pukul 04.00/05.00 WIB).</p>
              </li>
            </ol>

            <div class="info-card">
              <h4>Arah Transaksi: Buy/Long vs Sell/Short</h4>
              <ul>
                <li><strong>Buy (Long):</strong> Membuka posisi beli dengan harapan harga akan naik, lalu ditutup dengan menjualnya di harga yang lebih tinggi untuk mendapatkan keuntungan.</li>
                <li><strong>Sell (Short):</strong> Membuka posisi jual dengan harapan harga akan turun, lalu menutupnya dengan membeli kembali di harga yang lebih rendah. Ya, di forex kita bisa untung saat harga naik maupun turun!</li>
              </ul>
            </div>

            <h3>Support & Resistance (Batas Lantai & Plafon)</h3>
            <ul>
              <li><strong>Support (Lantai):</strong> Level harga di mana pembeli (buyers) biasanya mulai masuk untuk menahan harga agar tidak jatuh lebih dalam.</li>
              <li><strong>Resistance (Plafon):</strong> Level harga di mana penjual (sellers) mulai mendominasi untuk mencegah harga naik lebih tinggi.</li>
            </ul>
          `,
          examples: [
            {
              title: "Contoh Perhitungan Pip & Keuntungan",
              content: "Anda membuka posisi <strong>Buy</strong> XAU/USD sebanyak 0.10 lot di harga 2000.00. Harga kemudian meroket naik ke 2010.00. Kenaikan harga tersebut adalah sebesar 10.00 dollar (atau setara dengan 100 pips). Dengan ukuran transaksi 0.10 lot (di mana 1 pip bernilai kurang lebih $1), maka keuntungan bersih Anda adalah: 100 pips x $1 = $100."
            }
          ],
          exercises: [
            {
              id: "w2_q1",
              question: "Jika Anda melakukan Sell XAU/USD di harga 2050.00 dan harga turun ke 2045.00, apakah posisi Anda profit atau loss, dan berapa besar pergerakannya?",
              options: [
                "Loss sebesar 50 pips.",
                "Profit sebesar 5 pips.",
                "Profit sebesar 50 pips.",
                "Loss sebesar 5 pips."
              ],
              correctAnswer: 2,
              explanation: "Tepat sekali! Karena Anda melakukan Sell (mengharap harga turun), dan harga turun dari 2050.00 ke 2045.00 (selisih 5.00 poin atau 50 pips), maka Anda mendapatkan profit sebesar 50 pips!"
            },
            {
              id: "w2_q2",
              question: "Apa fungsi utama dari Leverage dalam trading?",
              options: [
                "Menjamin transaksi pasti profit 100%.",
                "Memperkecil spread yang dibebankan broker.",
                "Memungkinkan trader membuka transaksi bernilai besar dengan modal jaminan yang kecil.",
                "Menghilangkan biaya Swap secara otomatis."
              ],
              correctAnswer: 2,
              explanation: "Benar! Leverage memberikan daya ungkit sehingga modal kecil kita bisa mengendalikan transaksi dengan nilai kontrak yang jauh lebih besar."
            }
          ],
          summary: "Pahami pip (satuan gerak), lot (ukuran transaksi), leverage (daya ungkit), serta konsep Buy (untung saat naik) dan Sell (untung saat turun)."
        },
        {
          id: 3,
          title: "Minggu 3: Fundamental XAU",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Analisis Fundamental Emas (XAU)</h3>
            <p>Emas bukan sekadar mata uang biasa, melainkan komoditas berharga. Oleh karena itu, pergerakan harganya sangat dipengaruhi oleh kondisi makroekonomi global.</p>

            <div class="info-card">
              <h4>3 Pengaruh Utama Terhadap Emas:</h4>
              <ol>
                <li><strong>Inflasi:</strong> Emas dianggap sebagai pelindung nilai (hedging) terhadap penurunan daya beli uang. Jika inflasi global naik, harga emas cenderung ikut naik.</li>
                <li><strong>Kebijakan Suku Bunga Fed:</strong> Keputusan kenaikan atau penurunan suku bunga oleh Bank Sentral Amerika (Federal Reserve / The Fed) sangat menentukan kekuatan Dollar. Suku bunga naik = Dollar kuat = Emas melemah.</li>
                <li><strong>Ketegangan Geopolitik:</strong> Konflik militer, perang dagang, atau krisis politik global memicu kepanikan. Investor mengalihkan aset berisiko (seperti saham) ke Emas. Emas akan naik signifikan.</li>
              </ol>
            </div>

            <h3>Kalender Ekonomi: 3 Rilis Data Terpenting (High Impact)</h3>
            <p>Sebagai trader XAU/USD, Anda wajib melihat kalender ekonomi setiap hari untuk mengantisipasi gejolak harga ekstrem. Rilis data dari AS berikut ini adalah yang paling ditakuti:</p>
            <ul>
              <li><strong>NFP (Non-Farm Payrolls):</strong> Jumlah lapangan kerja baru di AS di luar sektor pertanian. Dirilis setiap hari Jumat pertama di setiap bulan. Jika data NFP bagus (di atas perkiraan) ➡️ Dollar menguat tajam ➡️ XAU/USD anjlok.</li>
              <li><strong>CPI (Consumer Price Index):</strong> Data pengukur inflasi di AS. Jika inflasi naik tinggi, di satu sisi dapat menaikkan minat emas sebagai lindung nilai, namun di sisi lain akan memaksa The Fed menaikkan suku bunga yang dapat menguatkan Dollar.</li>
              <li><strong>FOMC Meeting (Federal Open Market Committee):</strong> Rapat dewan The Fed yang mengumumkan suku bunga acuan. Pernyataan gubernur The Fed dalam konferensi pers ini selalu mengocok pasar XAU/USD hingga ratusan pips.</li>
            </ul>
          `,
          examples: [
            {
              title: "Contoh Kejadian Nyata: Ketegangan Perang Rusia-Ukraina",
              content: "Pada awal tahun 2022 saat ketegangan geopolitik Rusia dan Ukraina memuncak menjadi konflik bersenjata, indeks saham dunia berguguran karena investor panik. Emas (XAU/USD) langsung melesat kencang dari kisaran harga $1.890 hingga menembus $2.050 hanya dalam hitungan hari karena semua lembaga keuangan membeli emas demi keamanan modal."
            }
          ],
          exercises: [
            {
              id: "w3_q1",
              question: "Mengapa berita hasil rapat FOMC sangat penting bagi trader XAU/USD?",
              options: [
                "Karena FOMC menentukan harga fisik emas di pasar lokal Indonesia.",
                "Karena FOMC menentukan kebijakan suku bunga AS yang berdampak langsung pada kekuatan Dollar Amerika.",
                "Karena FOMC adalah aplikasi trading buatan Amerika.",
                "Karena FOMC membagikan sinyal trading gratis kepada para anggotanya."
              ],
              correctAnswer: 1,
              explanation: "Luar biasa! FOMC menentukan suku bunga acuan Dollar AS. Setiap perubahan suku bunga berdampak instan terhadap DXY (indeks Dollar) dan dengan demikian memicu pergerakan besar pada XAU/USD."
            }
          ],
          summary: "Emas dipengaruhi oleh inflasi, suku bunga Fed, dan geopolitik. Selalu pantau data NFP, CPI, dan FOMC di kalender ekonomi sebelum masuk ke pasar."
        },
        {
          id: 4,
          title: "Minggu 4: Time Frame & Korelasi DXY",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Mengenal Time Frame (Kerangka Waktu)</h3>
            <p>Di platform charting, Anda bisa melihat harga dalam berbagai kerangka waktu (Time Frame). Contoh:</p>
            <ul>
              <li><strong>Daily (D1):</strong> 1 candlestick mewakili aktivitas harga selama 1 hari penuh.</li>
              <li><strong>H4 (4 Jam):</strong> 1 candlestick mewakili pergerakan selama 4 jam.</li>
              <li><strong>H1 (1 Jam):</strong> 1 candlestick mewakili pergerakan selama 1 jam.</li>
              <li><strong>M15 (15 Menit) & M5 (5 Menit):</strong> 1 candlestick mewakili 15 atau 5 menit.</li>
            </ul>

            <div class="info-card">
              <h4>Aturan Penggunaan Time Frame untuk Pemula:</h4>
              <p>Sebagai pemula, <strong>JANGAN LANGSUNG TRADING DI TIME FRAME KECIL (seperti M5/M1)</strong>. Pergerakan di sana sangat acak dan banyak gangguan palsu (noise).</p>
              <p>Gunakan pendekatan <strong>Top-Down Analysis</strong>:</p>
              <ul>
                <li>Gunakan <strong>H4 atau H1</strong> untuk melihat arah tren utama (Uptrend atau Downtrend) serta menandai area Support dan Resistance penting.</li>
                <li>Gunakan <strong>M15</strong> untuk mencari titik masuk (Entry) yang lebih presisi setelah harga menyentuh area H1/H4 tersebut.</li>
              </ul>
            </div>

            <h3>Korelasi dengan Dollar Index (DXY)</h3>
            <p><strong>DXY (US Dollar Index)</strong> adalah indeks yang mengukur nilai mata uang Dollar AS terhadap sekeranjang mata uang utama dunia (seperti Euro, Yen, Poundsterling). Karena emas dinilai dalam Dollar, pergerakan emas hampir selalu berlawanan arah dengan DXY.</p>
            <div class="formula-box">
              <p>📊 DXY Naik 📈 ➡️ XAU/USD Turun 📉</p>
              <p>📊 DXY Turun 📉 ➡️ XAU/USD Naik 📈</p>
            </div>
            <p>Sebelum menganalisa grafik emas, sangat direkomendasikan untuk melirik grafik DXY terlebih dahulu guna memperkuat akurasi arah analisa Anda.</p>
          `,
          examples: [
            {
              title: "Contoh Analisis Multi-Timeframe",
              content: "Di chart H4, Anda mendeteksi bahwa tren besar XAU/USD sedang naik (Uptrend) dan harga baru saja memantul naik dari support H4 di 2010.00. Anda lalu berpindah ke chart M15 untuk mencari konfirmasi. Di M15, Anda melihat harga membentuk pola candlestick bullish engulfing. Anda kemudian memutuskan untuk mengambil keputusan Buy dengan rasa percaya diri tinggi karena searah dengan tren H4."
            }
          ],
          exercises: [
            {
              id: "w4_q1",
              question: "Time frame manakah yang paling ideal bagi trader pemula untuk melakukan analisis arah tren utama XAU/USD?",
              options: [
                "M1 atau M5 agar bisa melihat pergerakan detik demi detik.",
                "H4 atau H1 karena pergerakan trennya lebih stabil dan valid.",
                "Weekly (W1) saja agar tidak perlu melakukan analisa setiap hari.",
                "Tidak perlu melihat time frame, langsung klik buy atau sell."
              ],
              correctAnswer: 1,
              explanation: "Benar! Time frame H4 dan H1 memberikan pandangan tren yang bersih dan valid bagi pemula tanpa terlalu banyak distorsi/noise harga."
            },
            {
              id: "w4_q2",
              question: "Bagaimanakah hubungan korelasi yang khas antara grafik Dollar Index (DXY) dengan XAU/USD?",
              options: [
                "Bergerak searah, jika DXY naik maka XAU/USD juga pasti naik.",
                "Tidak memiliki hubungan sama sekali.",
                "Korelasi berbanding terbalik (inverse), jika DXY menguat maka XAU/USD cenderung melemah.",
                "DXY hanya bergerak pada hari libur saja."
              ],
              correctAnswer: 2,
              explanation: "Tepat sekali! Korelasi mereka bersifat negatif/terbalik. Pelemahan Dollar index (DXY) biasanya memicu penguatan harga emas (XAU/USD)."
            }
          ],
          summary: "Gunakan H4/H1 untuk menganalisis arah tren, dan pantau DXY sebagai indikator penguat arah Dollar sebelum mengambil posisi trading emas."
        }
      ],
      quiz: {
        title: "Kuis Fase 1: Fondasi Dasar",
        questions: [
          {
            question: "Apa singkatan dari kode instrumen XAU/USD di pasar trading?",
            options: [
              "Xenon vs US Dollar",
              "Gold (Emas) vs US Dollar",
              "Silver (Perak) vs US Dollar",
              "Australia Dollar vs US Dollar"
            ],
            correctAnswer: 1,
            explanation: "XAU adalah kode internasional untuk Emas (Gold) yang diambil dari bahasa Latin 'Aurum', dipasangkan dengan mata uang Dollar Amerika Serikat (USD)."
          },
          {
            question: "Jika harga emas bergerak dari 1980.00 ke 1982.50, berapa pips kah kenaikan harga tersebut?",
            options: [
              "2.5 pips",
              "25 pips",
              "250 pips",
              "0.25 pips"
            ],
            correctAnswer: 1,
            explanation: "Perubahan 0.10 pada emas setara 1 pip. Selisih dari 1980.00 ke 1982.50 adalah 2.50 poin, yang berarti 25 pips."
          },
          {
            question: "Manakah tindakan transaksi yang tepat bila Anda memprediksi harga XAU/USD akan merosot jatuh akibat naiknya suku bunga The Fed?",
            options: [
              "Membuka posisi Buy (Long)",
              "Membuka posisi Sell (Short)",
              "Melakukan penutupan akun trading",
              "Membeli Dollar secara fisik di money changer terdekat"
            ],
            correctAnswer: 1,
            explanation: "Untuk mendapatkan keuntungan dari penurunan harga instrumen keuangan di pasar forex, Anda mengambil posisi Sell (Short)."
          },
          {
            question: "Bagaimanakah korelasi umum yang terjadi antara pergerakan indeks DXY dengan harga XAU/USD?",
            options: [
              "Keduanya selalu naik bersamaan",
              "Keduanya bergerak berlawanan arah (korelasi terbalik)",
              "Emas memicu DXY bergerak 2x lipat lebih lambat",
              "DXY selalu mengikuti arah pergerakan Emas"
            ],
            correctAnswer: 1,
            explanation: "Emas dinilai dalam USD. Saat Dollar (DXY) menguat, harga emas cenderung turun karena pembeli membutuhkan lebih sedikit Dollar untuk membeli jumlah emas yang sama."
          },
          {
            question: "Rilis data makroekonomi AS di bawah ini yang menunjukkan jumlah lapangan kerja baru non-pertanian dan dirilis setiap hari Jumat pertama setiap bulan dinamakan...",
            options: [
              "CPI (Consumer Price Index)",
              "GDP (Gross Domestic Product)",
              "NFP (Non-Farm Payrolls)",
              "FOMC Interest Rate Decision"
            ],
            correctAnswer: 2,
            explanation: "Data tersebut adalah Non-Farm Payrolls (NFP), salah satu berita dengan dampak volatilitas tertinggi di pasar emas."
          }
        ]
      }
    },
    {
      id: 2,
      title: "Fase 2: Persiapan Tools (Minggu 5-6)",
      description: "Mempersiapkan alat tempur trading, memilih broker yang aman dan teregulasi, serta berlatih tanpa risiko finansial di akun simulasi (demo).",
      weeks: [
        {
          id: 5,
          title: "Minggu 5: Memilih Broker & Setup Akun",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Bagaimana Cara Memilih Broker Forex yang Aman?</h3>
            <p>Broker adalah perantara yang menyalurkan order transaksi kita ke pasar likuiditas dunia. Memilih broker sembarangan bisa berujung pada hilangnya modal Anda akibat penipuan atau manipulasi harga.</p>

            <div class="info-card">
              <h4>Kriteria Wajib Broker untuk Pemula:</h4>
              <ol>
                <li>
                  <strong>Regulasi Jelas & Kuat:</strong> 
                  <p>Broker lokal wajib terdaftar di BAPPEBTI di Indonesia. Untuk broker luar negeri, cari yang diregulasi oleh otoritas terpercaya seperti FCA (Inggris) atau ASIC (Australia).</p>
                </li>
                <li>
                  <strong>Spread Rendah untuk Emas:</strong> 
                  <p>Carilah broker dengan spread XAU/USD rendah agar Anda tidak langsung minus terlalu dalam saat membuka posisi.</p>
                </li>
                <li>
                  <strong>Sistem Keuangan yang Terbuka & Lancar:</strong> 
                  <p>Proses deposit & withdrawal harus cepat dan tidak dipersulit.</p>
                </li>
              </ol>
            </div>

            <h3>Rekomendasi Broker Resmi GenjotCandlestick</h3>
            <p>Berdasarkan seluruh kriteria di atas, baik untuk trader pemula maupun profesional, GenjotCandlestick secara eksklusif menggunakan dan bermitra dengan <strong>HFM Broker (HotForex)</strong>.</p>
            
            <div class="info-card" style="border: 1px solid rgba(245,158,11,0.25); background: linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(255,255,255,0.01) 100%); margin: 20px 0;">
              <h4 style="color: var(--accent-gold); margin-bottom: 10px;">Mengapa Harus HFM Broker?</h4>
              <ul>
                <li><strong>Regulasi Kelas Dunia:</strong> Regulasi dari FCA (UK) dan ASIC (Australia). Dana klien ditempatkan di rekening terpisah (segregated account).</li>
                <li><strong>Spread XAU/USD Paling Tipis:</strong> Optimal untuk strategi trading jangka pendek maupun scalping.</li>
                <li><strong>Akses Grup VIP Telegram GenjotCandlestick:</strong> Registrasi lewat link resmi GenjotCandlestick adalah satu-satunya cara gratis untuk mengklaim akses premium, edukasi intensif, dan sinyal harian kami.</li>
              </ul>
              
              <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
                <a href="https://register.hfmtrade-ind.com/sv/id/new-live-account/?refid=30425752&acid=l0t3sngs78" target="_blank" class="btn-primary" style="text-decoration: none; justify-content: center; color: #080c14; font-weight: 700; font-size: 0.88rem; padding: 12px;">
                  🚀 Registrasi HFM Broker Sekarang
                </a>
                <a href="https://t.me/tutorialgenjot" target="_blank" class="btn-secondary" style="text-decoration: none; justify-content: center; font-weight: 600; font-size: 0.88rem; padding: 12px;">
                  📖 Lihat Video/Teks Panduan Pendaftaran
                </a>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 15px; text-align: center;">
                Butuh bantuan pendaftaran? Chat Admin Support kami di Telegram: <a href="https://t.me/siwibuhunter" target="_blank" style="color: var(--accent-gold); text-decoration: underline;">@siwibuhunter</a>
              </p>
            </div>
          `,
          examples: [
            {
              title: "Perbedaan Akun Cent vs Akun Standard",
              content: "Bagi pemula yang baru ingin mencoba akun riil dengan modal sangat kecil, beberapa broker terpercaya menyediakan 'Akun Cent'. Di akun cent, saldo $10 Anda akan ditampilkan sebagai 1.000 cent. Hal ini memungkinkan Anda untuk melatih psikologi dengan lot micro (0.01 lot cent) tanpa takut kehilangan uang makan bulanan Anda."
            }
          ],
          exercises: [
            {
              id: "w5_q1",
              question: "Lembaga resmi pemerintah yang mengawasi dan meregulasi broker forex lokal di Indonesia adalah...",
              options: [
                "OJK (Otoritas Jasa Keuangan)",
                "BAPPEBTI (Badan Pengawas Perdagangan Berjangka Komoditi)",
                "BI (Bank Indonesia)",
                "KPK (Komisi Pemberantasan Korupsi)"
              ],
              correctAnswer: 1,
              explanation: "Benar! Untuk industri perdagangan berjangka komoditi dan forex di Indonesia, badan pengawas resminya adalah BAPPEBTI di bawah Kementerian Perdagangan."
            }
          ],
          summary: "Pilihlah broker berizin resmi (BAPPEBTI/FCA/ASIC), memiliki spread emas tipis (<30 pips), serta proses deposit-withdrawal yang lancar."
        },
        {
          id: 6,
          title: "Minggu 6: Platform Trading & Akun Demo",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Mengenal Alat Charting & Trading</h3>
            <p>Untuk melihat grafik harga emas dan mengeksekusi order transaksi, Anda memerlukan software khusus:</p>
            <ul>
              <li><strong>TradingView (Alat Analisis Utama):</strong> Platform web charting terbaik di dunia saat ini. Tampilannya sangat modern, ringan, memiliki fitur menggambar terlengkap, serta komunitas trader yang saling berbagi ide analisa.</li>
              <li><strong>MetaTrader 4 / MetaTrader 5 (MT4/MT5):</strong> Software standar industri untuk mengeksekusi buy/sell yang disediakan oleh hampir seluruh broker di dunia. Biasanya digunakan untuk eksekusi, sedangkan analisanya dilakukan di TradingView.</li>
            </ul>

            <div class="info-card">
              <h4>Aturan Emas Akun Demo (Simulasi)</h4>
              <p><strong>AKUN DEMO ADALAH WAJIB BAGI SETIAP PEMULA!</strong> Jangan pernah menyetor uang riil ke broker sebelum Anda membuktikan diri bisa menguntungkan secara konsisten di akun demo.</p>
              <p>Cara Setup Akun Demo yang Benar:</p>
              <ol>
                <li><strong>Gunakan Modal Virtual Realistis:</strong> Bila Anda berencana memulai live account dengan modal $200 nanti, maka buatlah akun demo dengan saldo virtual $200 - $1.000 saja. Jangan membuat akun demo dengan saldo virtual $100.000 jika modal nyata Anda tidak sebesar itu.</li>
                <li><strong>Gunakan Lot yang Realistis:</strong> Hanya buka transaksi dengan lot micro 0.01 - 0.05 lot.</li>
                <li><strong>Target Waktu:</strong> Bertahanlah dan coba cetak profit konsisten di akun demo selama minimal 3 hingga 6 bulan berturut-turut.</li>
              </ol>
            </div>
          `,
          examples: [
            {
              title: "Simulasi Latihan Akun Demo",
              content: "Seorang trader pemula membuka akun demo dengan modal $500. Dia berlatih disiplin menggunakan lot 0.01 saja pada XAU/USD. Setiap hari dia menganalisa tren di TradingView lalu mengeksekusi posisi di aplikasi MT5 handphone-nya. Dalam 3 bulan pertama, akunnya sempat turun ke $450 karena sering loss, namun di bulan ke-5 saldonya naik menjadi $520. Dia mencatat semua perubahannya di jurnal."
            }
          ],
          exercises: [
            {
              id: "w6_q1",
              question: "Mengapa disarankan untuk tidak membuat akun demo dengan saldo virtual terlalu besar (misal $100.000) jika nantinya hanya akan deposit modal asli sebesar $100?",
              options: [
                "Karena akun demo besar akan dikenakan biaya bulanan oleh broker.",
                "Agar melatih psikologi trading yang realistis sesuai dengan kapasitas modal yang akan digunakan di dunia nyata.",
                "Akun demo besar lebih mudah terkena hack.",
                "Tidak ada bedanya, hanya masalah angka saja."
              ],
              correctAnswer: 1,
              explanation: "Tepat sekali! Menggunakan saldo demo yang mendekati rencana modal asli akan membentuk mental, kebiasaan risiko, dan pengelolaan lot yang realistis saat transisi ke akun riil nanti."
            }
          ],
          summary: "Gunakan TradingView untuk menggambar analisa chart dan MT4/MT5 untuk eksekusi transaksi. Berlatihlah di akun demo dengan saldo realistis minimal 3-6 bulan."
        }
      ],
      quiz: {
        title: "Kuis Fase 2: Persiapan Tools",
        questions: [
          {
            question: "Manakah regulasi internasional yang terpercaya untuk broker luar negeri?",
            options: [
              "FCA (Inggris) dan ASIC (Australia)",
              "FBI (Amerika) dan Interpol",
              "FIFA (Swiss) dan PSSI",
              "FDA (Amerika) dan BPOM"
            ],
            correctAnswer: 0,
            explanation: "FCA (Financial Conduct Authority) di Inggris dan ASIC (Australian Securities and Investments Commission) di Australia adalah regulator keuangan dengan reputasi tertinggi di dunia forex."
          },
          {
            question: "Berapa target minimal waktu latihan di akun demo yang disarankan sebelum terjun ke akun riil?",
            options: [
              "1 sampai 2 hari saja",
              "1 minggu berturut-turut",
              "3 sampai 6 bulan secara konsisten",
              "Hingga saldo demo habis menjadi nol"
            ],
            correctAnswer: 2,
            explanation: "Trading membutuhkan pengenalan siklus market yang dinamis. Waktu 3-6 bulan dinilai cukup untuk melatih kedisiplinan aturan transaksi dan strategi."
          },
          {
            question: "Platform yang sangat populer digunakan oleh trader untuk menganalisis grafik harga dengan indikator interaktif dan menggambar tren adalah...",
            options: [
              "MetaTrader 4",
              "TradingView",
              "Microsoft Excel",
              "Instagram Stories"
            ],
            correctAnswer: 1,
            explanation: "TradingView adalah platform visualisasi chart yang paling canggih, interaktif, dan digemari oleh komunitas trader modern untuk menganalisis pasar keuangan."
          },
          {
            question: "Apa arti dari spread tipis (rendah) di broker forex?",
            options: [
              "Biaya komisi transaksi yang dibebankan kepada trader menjadi lebih murah.",
              "Kecepatan penarikan dana menjadi lebih lambat.",
              "Daya ungkit modal (leverage) menjadi lebih kecil.",
              "Grafik emas tidak bergerak aktif."
            ],
            correctAnswer: 0,
            explanation: "Spread adalah selisih harga jual dan beli yang menjadi keuntungan broker. Semakin tipis spreadnya, semakin kecil beban biaya transaksi awal yang ditanggung oleh trader."
          },
          {
            question: "Bila Anda ingin memulai live account dengan modal $200, pengaturan awal akun demo manakah yang paling direkomendasikan?",
            options: [
              "Saldo demo $500, lot transaksi dibatasi maksimal 0.01 - 0.02 lot.",
              "Saldo demo $1,000,000, lot transaksi bebas dari 10.0 sampai 50.0 lot.",
              "Tidak perlu mencoba akun demo, langsung deposit modal asli.",
              "Saldo demo $10, lot transaksi 1.00 lot."
            ],
            correctAnswer: 0,
            explanation: "Menggunakan nominal saldo demo kecil ($500) yang rasional dikombinasikan dengan lot mikro (0.01-0.02) membentuk disiplin manajemen risiko yang sesuai untuk modal asli $200."
          }
        ]
      }
    },
    {
      id: 3,
      title: "Fase 3: Price Action & Pattern (Minggu 7-14)",
      description: "Memahami pergerakan murni harga lewat anatomi candlestick, pola pembacaan formasi lilin (candle pattern), serta visual formasi grafik (chart pattern) yang umum terjadi.",
      weeks: [
        {
          id: 7,
          title: "Minggu 7: Pengenalan Candlestick",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Anatomi Dasar Candlestick (Grafik Lilin)</h3>
            <p>Candlestick adalah cara terbaik membaca perilaku psikologis pasar di chart. Setiap batang candle mewakili ringkasan transaksi dalam rentang waktu tertentu (misal: 1 jam pada chart H1).</p>
            
            <div class="image-container" style="text-align: center; margin: 20px 0;">
              <img src="candlestick_anatomy.png" alt="Anatomi Candlestick" loading="lazy" style="max-width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: 0 8px 24px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">Gambar 7.1: Anatomi Lengkap Candlestick Bullish (Hijau) & Bearish (Merah)</p>
            </div>

            <h4>4 Elemen Harga Penting:</h4>
            <ul>
              <li><strong>Open:</strong> Harga pertama saat lilin baru mulai terbentuk.</li>
              <li><strong>High:</strong> Harga tertinggi yang sempat dicapai selama durasi lilin tersebut.</li>
              <li><strong>Low:</strong> Harga terendah yang sempat dicapai selama durasi lilin tersebut.</li>
              <li><strong>Close:</strong> Harga penutupan akhir lilin sebelum berpindah ke batang lilin berikutnya.</li>
            </ul>

            <p><strong>Lilin Bullish (Hijau):</strong> Harga tutup <em>lebih tinggi</em> daripada harga buka. Menunjukkan pembeli mendominasi.</p>
            <p><strong>Lilin Bearish (Merah):</strong> Harga tutup <em>lebih rendah</em> daripada harga buka. Menunjukkan penjual mendominasi.</p>
          `,
          examples: [
            {
              title: "Membaca Kisah di Balik Lilin Emas 1 Jam",
              content: "Pada pukul 14.00 WIB, lilin H1 dibuka di harga 2010.00. Penjual sempat menekan harga turun ke 2005.00 (Low), namun tak lama kemudian pembeli masuk dalam jumlah besar hingga mendorong harga melesat ke 2025.00 (High). Tepat pukul 15.00 WIB, lilin ditutup di harga 2020.00. Terbentuklah lilin Bullish (hijau) dengan body tebal dan sumbu atas-bawah. Kisahnya: Pembeli sukses memenangkan pertempuran di jam tersebut."
            }
          ],
          exercises: [
            {
              id: "w7_q1",
              question: "Apabila harga penutupan (Close) sebuah candlestick berada di bawah harga pembukaannya (Open), maka candlestick tersebut dinamakan...",
              options: [
                "Bullish Candle (Hijau)",
                "Bearish Candle (Merah)",
                "Doji Candle",
                "Hammer Candle"
              ],
              correctAnswer: 1,
              explanation: "Benar! Jika harga ditutup lebih rendah dari harga bukanya, lilin akan berwarna merah (bearish) yang menandakan terjadinya penurunan harga akibat tekanan jual."
            }
          ],
          summary: "Candlestick menunjukkan harga Open, High, Low, dan Close. Lilin hijau (bullish) artinya pembeli menang; lilin merah (bearish) artinya penjual menang."
        },
        {
          id: 8,
          title: "Minggu 8: Single Candle Pattern",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Pola Satu Candlestick yang Memberi Sinyal Kuat</h3>
            <p>Hanya dengan melihat satu batang candlestick di area kunci (Support/Resistance), Anda bisa memprediksi ke mana harga akan berbalik arah:</p>

            <ol>
              <li>
                <strong>Doji (Keraguan Pasar):</strong> 
                <p>Harga buka dan tutup hampir persis sama, membuat badannya berupa garis tipis dengan sumbu panjang atas-bawah. Artinya kekuatan pembeli dan penjual seimbang (seri). Doji di ujung tren naik/turun sering menjadi sinyal awal pembalikan arah (reversal).</p>
                <div class="ascii-art">
    │  
  ──┼──  ← Body sangat tipis (Open = Close)
    │  
                </div>
              </li>
              <li>
                <strong>Hammer (Palu Pembalik Bullish):</strong> 
                <p>Body kecil di bagian atas dengan sumbu bawah yang sangat panjang (minimal 2-3 kali ukuran body-nya). Pola ini muncul setelah tren turun. Artinya: Penjual sempat menekan harga sangat rendah, tetapi pembeli melawan balik dengan kuat hingga menolak penurunan.</p>
                <div class="ascii-art">
   ┌─┐
   └─┘  ← Body kecil di atas
    │
    │   ← Sumbu bawah sangat panjang
    │
                </div>
              </li>
              <li>
                <strong>Shooting Star (Palu Pembalik Bearish):</strong> 
                <p>Kebalikan dari Hammer. Memiliki body kecil di bagian bawah dengan sumbu atas yang sangat panjang. Pola ini muncul setelah tren naik di area resistance, menandakan pembeli sempat mencoba mendorong naik tetapi digagalkan oleh tekanan jual yang dahsyat.</p>
                <div class="ascii-art">
    │
    │   ← Sumbu atas sangat panjang
    │
   ┌─┐
   └─┘  ← Body kecil di bawah
                </div>
              </li>
              <li>
                <strong>Marubozu (Dominasi Mutlak):</strong> 
                <p>Lilin dengan body panjang utuh tanpa memiliki sumbu sama sekali (botak). Menunjukkan kekuatan sepihak yang sangat dominan dari awal hingga akhir periode lilin tersebut.</p>
              </li>
            </ol>
          `,
          examples: [
            {
              title: "Studi Kasus Kemunculan Hammer di Support",
              content: "Harga emas merosot tajam selama berhari-hari hingga menyentuh angka psikologis 2000.00. Tiba-tiba di area tersebut terbentuk candlestick H4 dengan sumbu bawah yang panjang hingga 20 pips dengan body hijau kecil di atasnya (pola Hammer). Trader yang sigap langsung bersiap melakukan Buy setelah lilin penutupan Hammer selesai terbentuk, mengantisipasi pembalikan arah tren menjadi naik."
            }
          ],
          exercises: [
            {
              id: "w8_q1",
              question: "Pola candlestick tunggal yang memiliki sumbu atas sangat panjang dengan body kecil di bagian bawah dan muncul di area resistance dinamakan...",
              options: [
                "Hammer",
                "Shooting Star",
                "Marubozu",
                "Doji Capung"
              ],
              correctAnswer: 1,
              explanation: "Tepat sekali! Pola tersebut adalah Shooting Star. Menunjukkan penolakan harga atas (rejection) di resistance, yang merupakan sinyal kuat untuk bersiap Sell."
            }
          ],
          summary: "Doji menandakan keraguan pasar, Hammer menandakan pembalikan naik (bullish), Shooting Star menandakan pembalikan turun (bearish), dan Marubozu menandakan momentum kuat."
        },
        {
          id: 9,
          title: "Minggu 9: Double Candle Pattern",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Pola Dua Candlestick (Reversal Sinyal)</h3>
            <p>Kombinasi dua lilin berurutan memberikan kejelasan cerita yang lebih valid tentang pergantian kekuasaan dari pembeli ke penjual, atau sebaliknya:</p>

            <ol>
              <li>
                <strong>Bullish Engulfing (Menelan Naik):</strong> 
                <p>Lilin pertama berwarna merah (bearish), lalu diikuti oleh lilin kedua berwarna hijau (bullish) yang ukurannya jauh lebih besar. Badan lilin kedua sepenuhnya 'menelan' badan lilin pertama. Ini sinyal pembalikan arah naik yang sangat kuat.</p>
                <div class="ascii-art">
    [1]     [2]
            ┌───┐
     ┌─┐    │   │  
     │█│    │   │  ← Lilin hijau besar menutupi
     └─┘    │   │    seluruh lilin merah kecil
            └───┘
                </div>
              </li>
              <li>
                <strong>Bearish Engulfing (Menelan Turun):</strong> 
                <p>Kebalikan dari Bullish Engulfing. Lilin pertama berwarna hijau (bullish) kecil, ditelan sepenuhnya oleh lilin kedua berwarna merah (bearish) yang berukuran besar. Menandakan penjual telah merebut kendali pasar secara penuh.</p>
              </li>
              <li>
                <strong>Tweezer Bottom & Tweezer Top (Ujung Penjepit):</strong>
                <p>Dua lilin berseberangan warna yang memiliki sumbu/ekor yang menyentuh level yang <strong>sama persis</strong> di bagian bawah (Bottom) atau bagian atas (Top). Menandakan harga telah membentur tembok pertahanan yang sangat kokoh dan gagal melewatinya sebanyak dua kali berturut-turut.</p>
              </li>
            </ol>
          `,
          examples: [
            {
              title: "Contoh Bullish Engulfing di Support Nyata",
              content: "Harga XAU/USD turun perlahan menuju area support 1950.00. Candle H1 pertama ditutup merah kecil di 1952.00. Namun, candle H1 berikutnya langsung melonjak naik dan ditutup di harga 1965.00, membentuk body hijau panjang yang melampaui harga pembukaan candle merah sebelumnya. Terbentuklah Bullish Engulfing. Di candle ketiga, harga emas langsung melesat naik hingga ke level 1980.00."
            }
          ],
          exercises: [
            {
              id: "w9_q1",
              question: "Kondisi manakah yang melukiskan terbentuknya pola Bearish Engulfing di chart?",
              options: [
                "Lilin merah kecil diikuti oleh lilin hijau yang berukuran sama.",
                "Lilin hijau kecil diikuti oleh lilin merah besar yang badannya menutupi seluruh badan lilin hijau tersebut.",
                "Dua lilin merah berturut-turut dengan sumbu atas yang sama panjang.",
                "Lilin doji yang terbentuk di tengah-tengah tren sideways."
              ],
              correctAnswer: 1,
              explanation: "Benar! Bearish Engulfing terjadi ketika lilin hijau (bullish) kecil ditelan habis oleh lilin merah (bearish) besar berikutnya, mengisyaratkan dimulainya penurunan tren."
            }
          ],
          summary: "Engulfing pattern (Bullish/Bearish) terjadi ketika candle kedua melampaui body candle pertama. Tweezer menunjukkan penolakan ganda di level harga yang sama."
        },
        {
          id: 10,
          title: "Minggu 10: Triple Candle Pattern",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Pola Tiga Candlestick (Puncak Validitas Reversal & Continuation)</h3>
            <p>Pola tiga lilin adalah konfirmasi paling matang karena menyertakan fase persiapan, fase keraguan, dan fase eksekusi kemenangan arah baru:</p>

            <ol>
              <li>
                <strong>Morning Star (Bintang Pagi - Pembalikan Naik):</strong>
                <p>Pola ini diawali oleh lilin merah panjang (tren turun), diikuti lilin kedua berbadan kecil/doji (keraguan), dan ditutup oleh lilin ketiga hijau panjang yang menembus tinggi ke atas. Ini melambangkan fajar terbitnya tren naik baru.</p>
                <div class="ascii-art">
   [1]      [2]      [3]
  ┌───┐             ┌───┐
  │███│             │   │  ← Lilin 3: Hijau Panjang
  │███│     ┌─┐     │   │
  └───┘     └─┘     └───┘
          Lilin 2: Doji/Kecil
                </div>
              </li>
              <li>
                <strong>Evening Star (Bintang Sore - Pembalikan Turun):</strong>
                <p>Kebalikan dari Morning Star. Diawali lilin hijau panjang, lilin kecil di atas, lalu dikonfirmasi oleh lilin merah panjang yang menusuk tajam ke bawah. Sinyal kuat untuk melakukan posisi Sell.</p>
              </li>
              <li>
                <strong>Three White Soldiers & Three Black Crows (Prajurit Pendorong Tren):</strong>
                <p>Tiga batang lilin panjang beruntun dengan warna yang sama (3 hijau berturut-turut untuk White Soldiers, atau 3 merah berturut-turut untuk Black Crows) dengan sumbu yang sangat minimal. Ini menandakan momentum tren berjalan sangat kuat dan tidak boleh dilawan.</p>
              </li>
            </ol>
          `,
          examples: [
            {
              title: "Contoh Morning Star Menyelamatkan Posisi",
              content: "Setelah berita ekonomi dirilis buruk untuk emas, harga XAU/USD anjlok drastis. Namun di area support mingguan 1920.00, pelemahan terhenti. Terbentuk candle merah panjang (lilin 1), kemudian candle doji kecil (lilin 2), diikuti candle hijau panjang (lilin 3) yang menutup hampir sejajar dengan pembukaan lilin 1. Pola Morning Star terbentuk sempurna. Harga berbalik arah naik hingga 1960.00 dalam 24 jam berikutnya."
            }
          ],
          exercises: [
            {
              id: "w10_q1",
              question: "Pola Morning Star terdiri dari tiga lilin dengan susunan urutan warna...",
              options: [
                "Hijau - Hijau - Hijau",
                "Merah - Merah - Merah",
                "Merah - Lilin Kecil/Doji - Hijau Panjang",
                "Hijau - Lilin Kecil/Doji - Merah Panjang"
              ],
              correctAnswer: 2,
              explanation: "Tepat sekali! Morning star diawali merah (bearish), disusul lilin transisi kecil di bawah, lalu dikonfirmasi oleh lilin hijau (bullish) panjang sebagai tanda pembeli memegang kendali."
            }
          ],
          summary: "Morning Star (bullish) dan Evening Star (bearish) adalah pola tiga candle pembalikan arah yang sangat tepercaya. Three Soldiers/Crows menandakan tren berkelanjutan yang kuat."
        },
        {
          id: 11,
          title: "Minggu 11: Continuation Chart Pattern",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Mengenal Chart Pattern (Pola Grafik)</h3>
            <p>Jika candlestick pattern fokus pada 1 hingga 3 batang lilin, <strong>Chart Pattern</strong> melihat kumpulan puluhan lilin yang membentuk pola geometris tertentu pada grafik harga. Pola kelanjutan (Continuation) menandakan bahwa harga hanya beristirahat sejenak sebelum melanjutkan tren awalnya.</p>

            <ol>
              <li>
                <strong>Flag Pattern (Bendera):</strong>
                <p>Terbentuk setelah adanya pergerakan harga naik tajam secara lurus (tiang bendera / <em>flagpole</em>), diikuti oleh konsolidasi miring ke bawah yang rapi (bendera / <em>flag</em>). Ketika harga menembus batas atas bendera tersebut, tren naik akan berlanjut kembali.</p>
                <div class="ascii-art">
        ╱  ← Lanjutan naik setelah breakout
       ╱
  ┌───╱──┐
  │  ╱   │  ← Bendera (Konsolidasi miring)
  │ ╱    │
  └╱─────┘
  ╱
 ╱  ← Tiang bendera (Pergerakan naik tajam)
╱
                </div>
              </li>
              <li>
                <strong>Ascending Triangle (Segitiga Naik - Bullish):</strong>
                <p>Pola di mana batas atas (Resistance) berbentuk garis horizontal datar, sedangkan batas bawah (Support) membentuk garis miring yang semakin lama semakin meninggi (Higher Low). Harga terhimpit menyempit dan biasanya meletus menembus ke atas.</p>
                <div class="ascii-art">
   ───────────────────  ← Resistance datar
  ╱ ╲    ╱ ╲    ╱
 ╱   ╲  ╱   ╲  ╱   ← Support miring ke atas
╱     ╲╱     ╲╱
                </div>
              </li>
              <li>
                <strong>Descending Triangle (Segitiga Turun - Bearish):</strong>
                <p>Kebalikan dari Ascending Triangle. Memiliki support horizontal datar di bagian bawah, dengan resistance miring yang semakin merosot ke bawah (Lower High). Menandakan harga bersiap jebol ke bawah.</p>
              </li>
            </ol>
          `,
          examples: [
            {
              title: "Trading Bullish Flag pada Chart Emas H1",
              content: "Harga XAU/USD melesat dari 2020 ke 2060 akibat berita geopolitik (tiang bendera). Setelah itu, harga bergerak turun perlahan membentuk channel sempit di antara 2060 ke 2050 selama beberapa jam (bendera). Begitu harga menembus garis atas channel tersebut di 2054, trader masuk posisi Buy dengan target profit setinggi tiang bendera awal (40 pips), yaitu menuju harga 2094."
            }
          ],
          exercises: [
            {
              id: "w11_q1",
              question: "Pada pola Bullish Flag, bagaimanakah cara menentukan target kenaikan harga yang objektif setelah terjadi breakout?",
              options: [
                "Diukur setinggi tiang bendera (flagpole) awal dari titik breakout.",
                "Tidak ada target, dibiarkan saja sampai modal habis.",
                "Selalu ditargetkan profit 10 pips saja.",
                "Diukur sepanjang sumbu lilin doji terakhir."
              ],
              correctAnswer: 0,
              explanation: "Benar! Aturan baku proyeksi target keuntungan pola Flag adalah mengukur panjang pergerakan tiang (flagpole) awal, lalu memproyeksikannya ke atas dari titik tembus (breakout) bendera."
            }
          ],
          summary: "Continuation pattern seperti Flag dan Ascending/Descending Triangle menunjukkan konsolidasi harga sementara sebelum meletus melanjutkan tren utama."
        },
        {
          id: 12,
          title: "Minggu 12: Reversal Chart Pattern",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Pola Grafik Pembalikan Arah (Reversal)</h3>
            <p>Pola pembalikan memberi tahu kita bahwa tren yang sedang berjalan telah kehabisan bensin dan bersiap berputar arah 180 derajat. Mengetahui pola ini membantu Anda keluar dari posisi tren lama dan mengambil posisi baru sebelum terlambat:</p>

            <div class="image-container" style="text-align: center; margin: 20px 0;">
              <img src="double_bottom_pattern.png" alt="Double Bottom Reversal Pattern" loading="lazy" style="max-width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: 0 8px 24px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">Gambar 12.1: Contoh Riil Pola Double Bottom Reversal dengan Garis Neckline, Entry, SL, dan TP</p>
            </div>

            <ol>
              <li>
                <strong>Double Top & Double Bottom:</strong>
                <p><strong>Double Bottom (Gambar di atas):</strong> Harga turun membentuk dua lembah sejajar (First Bottom & Second Bottom) karena gagal menembus support yang sama, lalu berbalik meluncur naik menembus Neckline ke atas.</p>
                <p><strong>Double Top:</strong> Kebalikan dari Double Bottom. Harga naik membentuk dua puncak sejajar karena gagal menembus resistance yang sama sebanyak dua kali, kemudian ambruk melewati garis leher (Neckline) ke bawah.</p>
              </li>
              <li>
                <strong>Head and Shoulders (Kepala & Bahu - Reversal Bearish):</strong>
                <p>Terdiri dari tiga puncak puncak harga: puncak kiri (Left Shoulder), puncak tengah tertinggi (Head), dan puncak kanan yang lebih rendah (Right Shoulder). Garis horizontal yang menghubungkan titik-titik lembah bawah dinamakan <strong>Neckline (Garis Leher)</strong>. Jika harga menembus ke bawah Neckline, tren naik resmi berubah menjadi tren turun.</p>
              </li>
              <li>
                <strong>Inverse Head and Shoulders:</strong> Pola kebalikan Head & Shoulders yang mendeteksi pembalikan arah dari tren turun menjadi naik (Bullish Reversal).
              </li>
            </ol>
          `,
          examples: [
            {
              title: "Kejadian Double Top di Harga Emas Tertinggi",
              content: "XAU/USD mencapai harga rekor 2080.00 lalu turun ke 2050.00 (membentuk neckline). Harga naik lagi ke 2080.00 namun kembali ditolak jatuh dengan keras. Terbentuklah pola Double Top. Begitu lilin H4 ditutup di bawah garis leher 2050.00, trader membuka posisi Sell dengan target penurunan sejauh jarak puncak ke leher ($30), yaitu menuju target harga $2.020.00."
            }
          ],
          exercises: [
            {
              id: "w12_q1",
              question: "Garis horizontal penting yang menghubungkan lembah-lembah harga pada pola Head and Shoulders dan wajib ditembus sebagai konfirmasi sinyal Sell dinamakan...",
              options: [
                "Baseline",
                "Neckline (Garis Leher)",
                "Trendline",
                "Pivot Line"
              ],
              correctAnswer: 1,
              explanation: "Tepat sekali! Neckline adalah level support kritis pada pola Head & Shoulders. Breakout di bawah neckline merupakan konfirmasi valid bahwa struktur tren naik telah patah."
            }
          ],
          summary: "Head & Shoulders dan Double Top menandakan pembalikan turun. Inverse Head & Shoulders dan Double Bottom menandakan pembalikan naik setelah menyentuh level support/resistance kuat."
        },
        {
          id: 13,
          title: "Minggu 13: Breakout Pattern",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Cara Mengidentifikasi dan Melakukan Trading Breakout</h3>
            <p><strong>Breakout</strong> adalah kondisi di mana harga berhasil menjebol suatu area penting (Support, Resistance, atau batas garis pola chart) dengan dorongan volume dan kekuatan lilin yang sangat besar.</p>

            <div class="info-card">
              <h4>Tahapan Terjadinya Breakout yang Valid:</h4>
              <ol>
                <li><strong>Fase Konsolidasi:</strong> Harga bergerak naik-turun secara menyempit atau sideways di dalam area batas yang jelas.</li>
                <li><strong>Lilin Tembus (Breakout Candle):</strong> Muncul satu candlestick panjang (seperti Marubozu) yang ditutup di luar garis batas tersebut.</li>
                <li><strong>Retest (Konfirmasi Uji Kembali):</strong> Sering kali harga akan kembali turun/naik sedikit untuk menyentuh kembali garis batas yang baru saja ditembus (yang kini bertukar fungsi). Support menjadi Resistance, atau sebaliknya.</li>
                <li><strong>Kelanjutan Tren:</strong> Harga melanjutkan arah breakout-nya dengan dorongan kuat.</li>
              </ol>
            </div>

            <p class="warning-box">
              ⚠️ <strong>Hati-hati Fakeout (False Breakout):</strong> Kadang harga terlihat menembus garis batas dengan sumbu panjang, namun ditutup kembali di dalam area batas. Ini adalah jebakan broker/institusi besar untuk memakan Stop Loss trader retail.
            </p>
          `,
          examples: [
            {
              title: "Contoh Kasus Retest Buy Sukses",
              content: "Resistance XAU/USD berada di level 2010.00. Muncul lilin H1 bullish panjang yang ditutup di harga 2015.00 (Breakout). Trader tidak langsung membeli di 2015.00 karena takut mengejar harga yang terlampau tinggi. Dua jam kemudian, harga turun perlahan menyentuh level 2010.00 kembali (Retest). Di area 2010.00 ini muncul rejection sumbu bawah. Trader melakukan Buy di 2011.00 dan selamat dari kejaran harga."
            }
          ],
          exercises: [
            {
              id: "w13_q1",
              question: "Mengapa disarankan menunggu konfirmasi retest daripada langsung terburu-buru membuka posisi saat harga baru saja menembus garis resistance?",
              options: [
                "Untuk memastikan tembusnya harga bersifat valid dan mendapatkan harga entry yang jauh lebih murah/aman.",
                "Karena retest akan mengembalikan saldo trading yang hilang secara instan.",
                "Agar broker tidak mengambil komisi spread.",
                "Tidak ada alasan khusus, hanya tren kuno saja."
              ],
              correctAnswer: 0,
              explanation: "Benar! Menunggu retest menghindarkan kita dari jebakan False Breakout (Fakeout) serta memberikan harga entry yang jauh lebih ideal secara rasio risk/reward."
            }
          ],
          summary: "Trading breakout yang aman dilakukan dengan menunggu candlestick ditutup di luar area kunci, diikuti oleh pantulan uji kembali (retest) sebelum harga melanjutkan arah tren baru."
        },
        {
          id: 14,
          title: "Minggu 14: Kombinasi Pattern untuk Entry",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Menggabungkan Kekuatan Analisis (Multi-Confirmation Setup)</h3>
            <p>Di dunia trading, menggunakan satu alasan saja untuk entry (misal: hanya karena melihat lilin Hammer) memiliki probabilitas menang yang rendah. Rahasia trader konsisten adalah mencari <strong>Konfluensi (Kombinasi Konfirmasi)</strong>.</p>

            <div class="info-card">
              <h4>Rumus Kombinasi Emas GenjotCandlestick:</h4>
              <p>Carilah area di mana minimal 3 elemen teknikal saling bertemu di titik koordinat yang sama:</p>
              <ol>
                <li><strong>Lokasi (Dimana harga berada?):</strong> Pastikan harga berada tepat di garis Support atau Resistance historis yang kuat dari time frame besar (H4).</li>
                <li><strong>Bentuk Grafik (Apakah ada pola chart?):</strong> Periksa apakah area tersebut bertepatan dengan batas pola chart seperti Double Bottom, Head & Shoulders, atau batas Flag.</li>
                <li><strong>Konfirmasi Lilin (Bagaimana respon lilin?):</strong> Tunggu kemunculan pola candlestick reversal seperti Bullish Engulfing, Tweezer, atau Morning Star di time frame H1 sebagai pelatuk (trigger) eksekusi Buy atau Sell Anda.</li>
              </ol>
            </div>

            <p>Dengan menggabungkan ketiga faktor tersebut, tingkat akurasi transaksi Anda akan melonjak drastis dibandingkan hanya menebak arah grafik secara acak.</p>
          `,
          examples: [
            {
              title: "Ilustrasi Setup Trading Sempurna",
              content: "Emas sedang bergerak dalam pola tren naik H4. Harga terkoreksi turun menyentuh level support horizontal $1.980.00 yang bertepatan dengan garis batas bawah pola Bullish Flag. Tepat di level tersebut pada chart H1, muncul pola lilin Morning Star yang tebal. Kombinasi 3 sinyal (Support + Flag + Morning Star) memberikan konfirmasi Buy dengan probabilitas keberhasilan sangat tinggi."
            }
          ],
          exercises: [
            {
              id: "w14_q1",
              question: "Mana dari pilihan berikut yang merupakan contoh penerapan teknik konfluensi (kombinasi konfirmasi) yang benar?",
              options: [
                "Langsung melakukan Buy hanya karena harga terlihat murah tanpa indikator apapun.",
                "Melakukan Buy karena harga berada di support H4, bertepatan dengan garis bawah pola flag, dan muncul pola bullish engulfing di H1.",
                "Melakukan Sell karena teman di grup Telegram berkata harga emas pasti turun.",
                "Membuka posisi berulang-ulang tanpa memasang Stop Loss."
              ],
              correctAnswer: 1,
              explanation: "Tepat sekali! Menghubungkan level support H4 (Lokasi), pola Flag (Struktur), dan Bullish Engulfing H1 (Pelatuk) adalah contoh nyata teknik konfluensi yang menghasilkan akurasi tinggi."
            }
          ],
          summary: "Jangan trading dengan satu indikasi tunggal. Gabungkan lokasi area kunci (SNR), struktur pola (Chart Pattern), dan konfirmasi reaksi lilin (Candlestick) untuk akurasi terbaik."
        }
      ],
      quiz: {
        title: "Kuis Fase 3: Price Action & Pattern",
        questions: [
          {
            question: "Manakah anatomi candlestick yang menunjukkan harga penutupan lebih tinggi dari pembukaannya?",
            options: [
              "Candlestick Bearish",
              "Candlestick Bullish",
              "Candlestick Doji",
              "Candlestick Gravestone"
            ],
            correctAnswer: 1,
            explanation: "Candlestick Bullish (biasanya berwarna hijau atau putih) terjadi jika harga ditutup di atas harga pembukaan awal."
          },
          {
            question: "Pola pembalikan arah (reversal) yang terdiri dari satu puncak tinggi tengah diapit oleh dua puncak yang lebih rendah dinamakan...",
            options: [
              "Double Top",
              "Head and Shoulders",
              "Ascending Triangle",
              "Bullish Flag"
            ],
            correctAnswer: 1,
            explanation: "Head and Shoulders menyerupai anatomi tubuh manusia: bahu kiri (Left Shoulder), kepala (Head - tertinggi), dan bahu kanan (Right Shoulder)."
          },
          {
            question: "Apa arti psikologis dari pola candlestick tunggal Doji?",
            options: [
              "Pembeli menguasai pasar sepenuhnya.",
              "Penjual menguasai pasar sepenuhnya.",
              "Pasar sedang berada dalam keraguan/keseimbangan kekuatan yang sama kuat.",
              "Harga pasti akan meletus naik 100 pips."
            ],
            correctAnswer: 2,
            explanation: "Doji menunjukkan harga buka dan tutup yang hampir sama, yang melambangkan keraguan ekstrem di antara pembeli dan penjual."
          },
          {
            question: "Pola chart yang ditandai dengan garis resistance datar di atas dan garis support yang miring naik di bawah dinamakan...",
            options: [
              "Symmetrical Triangle",
              "Descending Triangle",
              "Ascending Triangle",
              "Bearish Flag"
            ],
            correctAnswer: 2,
            explanation: "Ascending Triangle (Segitiga Naik) ditandai dengan resistance horizontal dan support yang meninggi (higher low), biasanya pecah ke atas."
          },
          {
            question: "Bagaimanakah pola Bullish Engulfing terbentuk di chart?",
            options: [
              "Candle hijau kecil disusul candle merah besar.",
              "Candle merah kecil disusul candle hijau besar yang body-nya menelan habis body candle merah pertama.",
              "Candle doji kecil disusul candle doji besar.",
              "Tiga candle merah berurutan tanpa sumbu."
            ],
            correctAnswer: 1,
            explanation: "Bullish Engulfing dicirikan oleh lilin merah bearish kecil yang disusul dan badannya 'ditelan' oleh lilin hijau bullish besar berikutnya."
          }
        ]
      }
    },
    {
      id: 4,
      title: "Fase 4: 3 Metode Trading (Minggu 15-26)",
      description: "Mempelajari 3 metode analisis teknikal paling populer di dunia trading emas (SNR, SMC, dan SND). Bandingkan karakteristiknya dan temukan gaya trading yang paling cocok dengan kepribadian Anda.",
      weeks: [
        {
          id: 15,
          title: "Minggu 15: Pengenalan 3 Metode Trading (SNR, SMC, SND)",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Mengenal 3 Aliran Analisa Utama</h3>
            <p>Di pasar XAU/USD, ada tiga metode analisis teknikal yang paling populer digunakan oleh trader profesional maupun pemula. Ketiga metode ini memiliki sudut pandang yang berbeda dalam membaca pergerakan harga:</p>

            <div class="image-container" style="text-align: center; margin: 20px 0;">
              <img src="trading_methods_guide.png" alt="Comparison of SNR, SND, and SMC" loading="lazy" style="max-width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: 0 8px 24px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">Gambar 15.1: Panduan Perbandingan Visual Metode SNR (Garis Level), SND (Area Supply/Demand), dan SMC (Market Structure & BOS/CHoCH)</p>
            </div>

            <div class="method-box snr">
              <h4>1. SNR (Support & Resistance)</h4>
              <p><strong>Filosofi:</strong> Mengasumsikan harga bergerak memantul di antara batas lantai (Support) dan plafon (Resistance) historis.</p>
              <p><strong>Karakter:</strong> Sangat sederhana, mudah digambar, dan sangat efektif pada kondisi pasar sideways (ranging/datar).</p>
            </div>

            <div class="method-box smc">
              <h4>2. SMC (Smart Money Concept)</h4>
              <p><strong>Filosofi:</strong> Menganalisis pergerakan harga berdasarkan jejak transaksi lembaga keuangan besar/institusi (Smart Money) untuk menghindari jebakan retail.</p>
              <p><strong>Karakter:</strong> Memiliki rasio Risk:Reward yang sangat besar, menggunakan istilah struktur market yang ketat (BOS, CHoCH, Order Block, FVG).</p>
            </div>

            <div class="method-box snd">
              <h4>3. SND (Supply & Demand)</h4>
              <p><strong>Filosofi:</strong> Berdasarkan hukum ekonomi klasik. Harga melonjak karena ada zona permintaan tinggi (Demand), dan jatuh karena ada penawaran melimpah (Supply).</p>
              <p><strong>Karakter:</strong> Sangat akurat dalam mendeteksi area awal dimulainya pergerakan harga yang impulsif.</p>
            </div>

            <p>Gunakan Kuis Interaktif di bawah untuk mengetahui metode mana yang paling pas untuk kepribadian Anda sebelum mempelajari materinya secara mendalam.</p>
          `,
          examples: [
            {
              title: "Perbandingan Kecepatan Analisa",
              content: "Seorang trader SNR hanya membutuhkan waktu 1 menit untuk menarik garis horizontal support/resistance di chart H4. Trader SND membutuhkan waktu 3 menit untuk mencari area base dan menandai zona Demand. Sedangkan trader SMC membutuhkan waktu 10 menit untuk memetakan struktur market H4, mencari CHoCH di M15, dan menandai Order Block yang memiliki FVG belum terisi."
            }
          ],
          exercises: [
            {
              id: "w15_q1",
              question: "Metode trading manakah yang fokus utamanya adalah mengikuti jejak institusi keuangan besar agar terhindar dari manipulasi pasar retail?",
              options: [
                "Metode SNR",
                "Metode SMC",
                "Metode SND",
                "Semua metode di atas salah"
              ],
              correctAnswer: 1,
              explanation: "Tepat! SMC (Smart Money Concept) dikembangkan khusus untuk melacak jejak kaki para raksasa keuangan (Smart Money) seperti bank sentral atau hedge fund."
            }
          ],
          summary: "Tiga metode utama: SNR (mudah, mantul lantai/plafon), SMC (presisi tinggi, melacak institusi), dan SND (hukum penawaran/permintaan)."
        },
        {
          id: 16,
          title: "Minggu 16: Konsep Dasar SNR",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Filosofi Support & Resistance (SNR)</h3>
            <p>Metode SNR adalah metode paling legendaris dalam dunia analisis teknikal. Konsep dasarnya berlandaskan pada <strong>Psikologi Memori Manusia</strong>. Manusia cenderung mengingat harga murah di masa lalu untuk kembali membeli, dan mengingat harga mahal di masa lalu untuk menjual.</p>

            <div class="info-card">
              <h4>Pengertian Mendalam:</h4>
              <ul>
                <li>
                  <strong>Support (Lantai Harga):</strong> 
                  <p>Area harga di mana permintaan beli menghentikan pergerakan turun harga. Ketika harga turun mendekati support, para pembeli melihat harga tersebut murah dan mulai beramai-ramai melakukan aksi beli, menolak harga jatuh lebih bawah.</p>
                </li>
                <li>
                  <strong>Resistance (Plafon Harga):</strong> 
                  <p>Area harga di mana penawaran jual menghentikan pergerakan naik harga. Ketika harga meroket mendekati resistance, para penjual melihat harga tersebut mahal dan mulai melakukan aksi jual massal untuk mengambil profit.</p>
                </li>
              </ul>
            </div>

            <h3>Prinsip Pertukaran Peran (Role Reversal)</h3>
            <p>Salah satu aturan terpenting dalam SNR adalah:</p>
            <div class="formula-box">
              <p>🔄 <strong>SBR (Support Become Resistance):</strong> Support yang berhasil ditembus (breakout) ke bawah akan berubah fungsi menjadi Resistance baru ketika harga kembali naik mengujinya.</p>
              <p>🔄 <strong>RBS (Resistance Become Support):</strong> Resistance yang berhasil dijebol (breakout) ke atas akan berubah fungsi menjadi Support baru ketika harga turun mengujinya kembali.</p>
            </div>

            <div class="image-container">
              <img src="snr_concept_diagram.png" alt="Support & Resistance (SNR) Concept Diagram" loading="lazy">
            </div>
          `,
          examples: [
            {
              title: "Visualisasi Pertukaran Peran RBS",
              content: "Harga XAU/USD berkali-kali gagal menembus angka 2000.00 (Resistance). Tiba-tiba berita NFP memicu harga menembus 2000.00 hingga mencapai 2020.00. Ketika harga emas kembali turun (pullback) ke level 2000.00, para trader yang sebelumnya terlambat membeli kini berbondong-bondong buy di 2000.00. Level 2000.00 yang awalnya Resistance kini berubah menjadi Support kokoh (RBS)."
            }
          ],
          exercises: [
            {
              id: "w16_q1",
              question: "Apabila harga menembus level support ke bawah, lalu harga naik kembali menyentuh level tersebut dan memantul turun, fenomena ini dinamakan...",
              options: [
                "RBS (Resistance Become Support)",
                "SBR (Support Become Resistance)",
                "Double Bottom",
                "Fakeout"
              ],
              correctAnswer: 1,
              explanation: "Benar! Fenomena di mana support yang jebol bertukar peran menjadi resistance penahan kenaikan harga dinamakan SBR (Support Become Resistance)."
            }
          ],
          summary: "Support adalah lantai harga, Resistance adalah plafon harga. Jika salah satu ditembus, perannya akan saling bertukar (RBS/SBR)."
        },
        {
          id: 17,
          title: "Minggu 17: Cara Menggambar SNR",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Panduan Praktis Menggambar Garis SNR yang Valid</h3>
            <p>Banyak pemula menggambar puluhan garis di chart mereka hingga grafiknya terlihat seperti jaring laba-laba. Hal ini salah dan membingungkan. Berikut adalah cara menggambar garis SNR yang bersih dan tepercaya:</p>

            <div class="info-card">
              <h4>Langkah-Langkah Menggambar SNR:</h4>
              <ol>
                <li><strong>Gunakan Time Frame Besar:</strong> Bukalah chart H4 atau H1. Jangan pernah menggambar garis horizontal SNR di chart M5 karena tidak akurat.</li>
                <li><strong>Cari Titik Pantul (Swing High/Low):</strong> Carilah puncak tajam (Swing High) atau lembah tajam (Swing Low) di mana harga berbalik arah secara ekstrem setelah menyentuhnya.</li>
                <li><strong>Sentuhan Terbanyak (Multi-Touch):</strong> Tarik garis horizontal yang menghubungkan ujung-ujung sumbu lilin atau badan lilin yang paling banyak disentuh oleh harga. Semakin sering level tersebut disentuh tanpa jebol, semakin kuat level SNR tersebut.</li>
                <li><strong>Gunakan Area, Bukan Garis Tipis:</strong> Harga emas sering kali tidak memantul tepat di satu angka (misal tepat di 2010.00), melainkan pada kisaran area tipis (misal antara 2008.00 hingga 2011.00). Gunakan tool persegi panjang (Rectangle) di TradingView untuk menggambarnya sebagai area zona.</li>
              </ol>
            </div>
          `,
          examples: [
            {
              title: "Menandai Level Angka Bulat (Round Number)",
              content: "Pada XAU/USD, angka-angka bulat seperti 1900, 1950, 2000, 2050, dan 2100 secara psikologis alami bertindak sebagai level Support dan Resistance alami yang sangat dihormati oleh institusi global. Trader profesional selalu menandai angka-angka bulat ini di chart mereka."
            }
          ],
          exercises: [
            {
              id: "w17_q1",
              question: "Mengapa sebaiknya kita menggambar level SNR dalam bentuk area/zona daripada hanya satu garis tipis tunggal?",
              options: [
                "Karena harga sering kali berfluktuasi sedikit melampaui garis sebelum memantul, sehingga area/zona memberikan ruang toleransi yang realistis.",
                "Agar grafik terlihat lebih penuh warna.",
                "Karena satu garis tipis dilarang oleh broker forex.",
                "Tidak ada gunanya, garis tipis jauh lebih akurat."
              ],
              correctAnswer: 0,
              explanation: "Tepat sekali! Pasar forex dinamis. Harga sering memantul di zona kisaran tertentu, bukan tepat di satu angka desimal. Area zona memberikan ruang toleransi pergerakan yang valid."
            }
          ],
          summary: "Gambar SNR pada TF besar (H4/H1) pada puncak/lembah dengan sentuhan terbanyak. Buatlah dalam bentuk zona/area agar lebih fleksibel."
        },
        {
          id: 18,
          title: "Minggu 18: Trading dengan SNR",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Strategi Eksekusi Menggunakan SNR</h3>
            <p>Setelah mahir menggambar zona SNR, bagaimana cara kita membuka posisi trading yang menguntungkan?</p>

            <div class="info-card">
              <h4>1. Metode Pullback/Bounce (Memantul):</h4>
              <ul>
                <li><strong>Aturan Buy:</strong> Tunggu harga turun menyentuh area Support kuat. Jangan langsung buy. Tunggu munculnya konfirmasi lilin bullish (misal Hammer atau Bullish Engulfing) di H1. Entry Buy setelah lilin konfirmasi ditutup.</li>
                <li><strong>Aturan Sell:</strong> Tunggu harga naik menyentuh area Resistance kuat. Tunggu konfirmasi lilin bearish (Shooting Star/Bearish Engulfing) sebelum mengklik Sell.</li>
              </ul>
            </div>

            <div class="info-card">
              <h4>2. Metode Breakout & Retest (Menembus):</h4>
              <ul>
                <li>Jika Resistance dijebol dengan lilin tebal, tunggu harga turun kembali (retest) ke area bekas resistance tersebut (RBS). Entry Buy di area tersebut setelah muncul tanda rejection.</li>
                <li>Jika Support jebol ke bawah, tunggu harga naik mengujinya kembali (SBR) untuk melakukan entri Sell.</li>
              </ul>
            </div>

            <p class="warning-box">
              ⚠️ <strong>Di mana meletakkan Stop Loss?</strong> Selalu letakkan Stop Loss beberapa pips di bawah area Support (untuk posisi Buy) atau di atas area Resistance (untuk posisi Sell) untuk melindungi modal Anda dari lonjakan sesaat.
            </p>
          `,
          examples: [
            {
              title: "Contoh Rencana Transaksi SNR yang Disiplin",
              content: "Harga XAU/USD menyentuh Support 1990.00. Anda bersiap Buy. Muncul candle H1 Bullish Engulfing yang ditutup di harga 1993.00. Anda Entry Buy di 1993.00. Anda menempatkan Stop Loss di harga 1985.00 (di bawah support 1990.00, berisiko 80 pips). Anda mengincar Target Profit di area Resistance berikutnya yaitu 2013.00 (mendapatkan 200 pips). Rasio Risk:Reward Anda sangat sehat yaitu 1:2.5."
            }
          ],
          exercises: [
            {
              id: "w18_q1",
              question: "Di manakah posisi penempatan Stop Loss (SL) yang paling aman menurut kaidah trading SNR?",
              options: [
                "Tepat pada garis support agar tidak rugi banyak.",
                "Sedikit di bawah area support (untuk Buy) atau sedikit di atas area resistance (untuk Sell) sebagai ruang aman dari noise harga.",
                "Tidak perlu memasang Stop Loss sama sekali.",
                "1000 pips jauhnya agar tidak pernah tersentuh."
              ],
              correctAnswer: 1,
              explanation: "Benar! Menaruh SL sedikit di luar area zona pelindung (support/resistance) memastikan posisi kita tidak terpicu keluar secara prematur oleh fluktuasi/noise harga kecil."
            }
          ],
          summary: "Entry di SNR bisa menggunakan teknik pantulan (bounce) atau penembusan (breakout & retest). Selalu letakkan Stop Loss di luar batas area zona aman."
        },
        {
          id: 19,
          title: "Minggu 19: Praktik & Studi Kasus SNR",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Studi Kasus Transaksi Nyata XAU/USD dengan Metode SNR</h3>
            <p>Mari kita ulas lembar kerja grafik riil untuk melihat bagaimana seluruh teori SNR bekerja secara berkesinambungan:</p>

            <div class="ascii-art">
     [Resistance Major]
 2050 ══════════════════════════════════ [Zona Sell]
             ▲                      │
             │ (Harga naik)         ▼ (Konfirmasi Rejection)
             │                      ████
             │                      ████  ◀ Entry Sell di 2045
                                    SL: 2055
                                    TP: 2005
             ▲                      │
             │                      │ (Harga terjun)
             │                      ▼
 2000 ══════════════════════════════════ [RBS - Zona Buy]
                                    ████  ◀ Entry Buy di 2004 setelah retest
                                    SL: 1994
                                    TP: 2040
            </div>

            <h4>Langkah Analisa di Grafik Di Atas:</h4>
            <ol>
              <li>Trader memetakan garis horizontal resistance di 2050.00 karena harga berulang kali berbalik turun dari sana.</li>
              <li>Ketika harga kembali naik menyentuh 2050.00, trader mendeteksi sumbu penolakan panjang (Rejection) di H1. Trader melakukan entry Sell di 2045.00 dengan SL di 2055.00 dan TP di 2005.00. Posisi ini profit penuh (+400 pips).</li>
              <li>Harga anjlok ke level 2000.00 yang merupakan area bekas Resistance lama yang kini bertindak sebagai support baru (RBS). Trader mendeteksi pantulan naik dan entry Buy di 2004.00 dengan SL di 1994.00. Harga emas melesat kembali ke atas.</li>
            </ol>
          `,
          examples: [
            {
              title: "Pelajaran dari Loss: Mengakui Breakout Valid",
              content: "Terkadang support yang kita gambar tidak memantulkan harga melainkan jebol. Jika Anda memasang SL dengan disiplin di bawah support, kerugian Anda akan dibatasi kecil (misal rugi $10). Anda bisa segera merancang rencana transaksi baru mengikuti arah tembusan (Sell SBR) untuk menutupi kerugian tersebut."
            }
          ],
          exercises: [
            {
              id: "w19_q1",
              question: "Dari studi kasus di atas, apa tindakan terbaik yang harus diambil trader jika harga menembus area support 2000.00 ke bawah dengan lilin marubozu yang kuat?",
              options: [
                "Tetap mempertahankan posisi Buy tanpa Stop Loss.",
                "Menerima kerugian kecil dari Stop Loss Buy yang terpicu, lalu bersiap mencari peluang Sell saat harga naik kembali menguji level 2000.00 (SBR).",
                "Langsung deposit dana tambahan untuk melakukan Buy lagi di harga lebih murah tanpa analisa.",
                "Marah-marah kepada broker forex."
              ],
              correctAnswer: 1,
              explanation: "Tepat sekali! Disiplin menerima loss kecil lalu menyesuaikan arah analisa mengikuti struktur baru (SBR) adalah rahasia umur panjang para trader profesional."
            }
          ],
          summary: "Studi kasus nyata membuktikan kedisiplinan meletakkan SL dan kesabaran menunggu konfirmasi pola candle di area SNR membedakan trader pemenang dengan pecundang."
        },
        {
          id: 20,
          title: "Minggu 20: Konsep Dasar SMC",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Pengenalan Smart Money Concept (SMC)</h3>
            <p>Metode SMC adalah metode modern yang berusaha membaca grafik dengan meniru cara berpikir institusi keuangan raksasa (Bank, Hedge Funds, Market Makers) yang mengalirkan dana triliunan dollar ke pasar. Institusi besar tidak bertransaksi dengan cara mencicil di sembarang tempat; mereka meninggalkan jejak berupa <strong>Order Block</strong> dan <strong>Fair Value Gap (FVG)</strong>.</p>

            <div class="info-card">
              <h4>1. Order Block (Blok Pesanan Institusi):</h4>
              <p>Area harga di mana institusi besar mengumpulkan (accumulate) pesanan transaksi dalam volume raksasa. Secara visual, Order Block adalah <strong>lilin bearish terakhir sebelum lonjakan naik tajam (Bullish OB)</strong>, atau <strong>lilin bullish terakhir sebelum kejatuhan harga yang sangat ekstrem (Bearish OB)</strong>.</p>
            </div>

            <div class="info-card">
              <h4>2. Fair Value Gap (FVG - Ketidakseimbangan Pasar):</h4>
              <p>Celah kosong yang terbentuk ketika harga bergerak melompat sangat cepat ke satu arah akibat dorongan instan dana institusi, menyisakan ketidakseimbangan (imbalance) pasokan. FVG berfungsi seperti magnet. Harga di masa depan memiliki kecenderungan sangat kuat untuk turun/naik kembali guna mengisi celah kosong tersebut (rebalance) sebelum melanjutkan trennya.</p>
              <div class="ascii-art">
   Candle 1  ┌───┐
             └───┘ ◀ Jarak kosong ini adalah FVG (Gap Magnet)
   Candle 2  ░░░░░  (Lilin panjang melesat cepat)
             ░░░░░
   Candle 3  ┌───┐
             └───┘
              </div>
            </div>
          `,
          examples: [
            {
              title: "Bagaimana Institusi Menjebak Retailer",
              content: "Trader retail umumnya diajarkan untuk membeli (Buy) tepat di garis support. Institusi besar mengetahui hal ini. Mereka sengaja menekan harga turun sedikit menembus support untuk menyapu bersih semua Stop Loss pembeli retail (mengumpulkan likuiditas). Setelah semua Stop Loss tersapu, institusi baru menerbangkan harga XAU/USD ke atas dengan sangat kencang. Kejadian ini dinamakan 'Liquidity Sweep'."
            }
          ],
          exercises: [
            {
              id: "w20_q1",
              question: "Celah kosong yang ditinggalkan harga akibat pergerakan searah yang terlampau cepat dan bertindak sebagai magnet bagi koreksi harga di masa depan dinamakan...",
              options: [
                "Order Block",
                "Fair Value Gap (FVG)",
                "Support Line",
                "Moving Average"
              ],
              correctAnswer: 1,
              explanation: "Benar! Fair Value Gap (FVG) atau Imbalance adalah area kosong tiga lilin di mana sumbu lilin pertama dan ketiga tidak saling bertemu, menandakan ketidakseimbangan harga yang harus diisi kembali."
            }
          ],
          summary: "SMC melacak jejak institusi keuangan besar melalui Order Block (zona kumpul order) dan FVG (celah kosong harga yang bertindak sebagai magnet koreksi)."
        },
        {
          id: 21,
          title: "Minggu 21: Struktur Market SMC",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>BOS & CHoCH (Navigasi Arah SMC)</h3>
            <p>Dalam SMC, kita tidak menggunakan garis tren biasa. Kita melacak pergerakan tren dengan sangat presisi melalui perubahan struktur market:</p>

            <ol>
              <li>
                <strong>BOS (Break of Structure - Kelanjutan Tren):</strong>
                <p>Terjadi ketika harga berhasil menembus level puncak tertinggi sebelumnya (Higher High) dalam kondisi tren naik, atau menembus lembah terendah sebelumnya (Lower Low) dalam kondisi tren turun, dan ditutup dengan body lilin yang solid. Ini menandakan tren awal masih berjalan kuat.</p>
              </li>
              <li>
                <strong>CHoCH (Change of Character - Pembalikan Tren):</strong>
                <p>Sinyal paling berharga dalam SMC. CHoCH terjadi ketika harga memutus struktur trennya dengan menembus lembah penahan tren naik terakhir (Higher Low), atau menembus puncak penahan tren turun terakhir (Lower High). Ini menandakan **karakter tren telah resmi berubah arah**.</p>
              </li>
            </ol>

            <div class="image-container">
              <img src="smc_concept_diagram.png" alt="Smart Money Concepts (SMC) Market Structure Diagram" loading="lazy">
            </div>
          `,
          examples: [
            {
              title: "Skema Perubahan Arah CHoCH",
              content: "Emas naik membentuk puncak demi puncak: HH1, HL1, HH2, HL2. Tiba-tiba harga tidak sanggup membuat HH3, melainkan terjun bebas hingga menjebol level HL2 (lembah naik terakhir). Penembusan HL2 oleh body candle ini disebut CHoCH. Karakter pasar berubah dari Bullish menjadi Bearish. Trader SMC langsung menghentikan aksi Buy dan mencari area Order Block di atas untuk melakukan entri Sell."
            }
          ],
          exercises: [
            {
              id: "w21_q1",
              question: "Apakah perbedaan mendasar antara BOS dan CHoCH dalam analisis struktur market SMC?",
              options: [
                "BOS menandakan kelanjutan tren yang sedang berjalan, sedangkan CHoCH menandakan pembalikan arah tren utama.",
                "BOS digambar pada time frame M1, sedangkan CHoCH hanya pada Daily.",
                "BOS adalah area support, sedangkan CHoCH adalah area resistance.",
                "BOS dan CHoCH tidak memiliki perbedaan sama sekali."
              ],
              correctAnswer: 0,
              explanation: "Tepat sekali! BOS (Break of Structure) mengonfirmasi bahwa tren masih lanjut searah. CHoCH (Change of Character) mengumumkan bahwa tren telah patah dan berbalik arah."
            }
          ],
          summary: "BOS mengonfirmasi kelanjutan tren dengan menembus puncak/lembah sebelumnya. CHoCH menandakan perubahan arah tren dengan menjebol level lembah/puncak pertahanan terakhir."
        },
        {
          id: 22,
          title: "Minggu 22: Liquidity & Inducement",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Likuiditas: Bahan Bakar Pergerakan Harga</h3>
            <p>Smart Money membutuhkan tumpukan jutaan order berlawanan untuk bisa mengaktifkan pesanan triliunan dollar mereka tanpa menggeser harga terlalu jauh. Tumpukan order Stop Loss milik trader retail inilah yang disebut <strong>Likuiditas (Liquidity)</strong>.</p>
            <p>Harga bergerak dari satu tumpukan likuiditas ke tumpukan likuiditas berikutnya. Jika Anda tidak tahu di mana letak likuiditas berada, maka <strong>Stop Loss Anda adalah likuiditasnya!</strong></p>

            <div class="info-card">
              <h4>Bentuk-Bentuk Likuiditas Utama:</h4>
              <ul>
                <li><strong>EQH / EQL (Equal Highs / Equal Lows):</strong> Area puncak atau lembah ganda yang sejajar (Double Top/Double Bottom retail). Di atas/bawah area ini tersimpan ribuan Stop Loss. Smart Money hampir pasti akan menjebol area ini terlebih dahulu sebelum memutar arah harga.</li>
                <li><strong>Trendline Liquidity:</strong> Garis miring tren retail. Banyak trader menaruh SL tepat di bawah garis miring ini.</li>
                <li><strong>Inducement (Pancingan):</strong> Level jebakan struktur kecil yang sengaja dibuat untuk memancing retail melakukan buy/sell terlalu dini, sebelum harga mencapai Order Block yang sesungguhnya di bagian bawah/atas.</li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: "Kejadian Penyapuan EQL (Liquidity Sweep)",
              content: "Harga emas membentuk Double Bottom yang sangat rapi di level 1990.00. Jutaan trader retail dengan percaya diri menaruh order Buy dengan Stop Loss di 1987.00. Tiba-tiba muncul lilin merah menusuk cepat ke 1985.00, memicu seluruh SL retail terpicu rugi (liquidity diambil). Sedetik kemudian, harga berbalik arah terbang tinggi ke 2010.00. Kejadian sapu bersih ini dinamakan EQL Liquidity Sweep."
            }
          ],
          exercises: [
            {
              id: "w22_q1",
              question: "Mengapa Smart Money sering kali menjebol area puncak ganda (Double Top) atau lembah ganda (Double Bottom) retail sebelum harga berbalik arah?",
              options: [
                "Untuk mengumpulkan likuiditas berupa tumpukan order Stop Loss yang diletakkan para trader retail di area tersebut.",
                "Karena broker sedang mengalami kerusakan server.",
                "Agar grafik terlihat lebih acak.",
                "Untuk membantu trader retail mendapatkan profit lebih cepat."
              ],
              correctAnswer: 0,
              explanation: "Benar! Area Double Top/Bottom retail menyimpan tumpukan Stop Loss yang sangat besar. Smart Money sengaja menyapu area tersebut guna mengisi order raksasa mereka sendiri."
            }
          ],
          summary: "Pasar bergerak mencari likuiditas (Stop Loss). Hindari entry tepat di area Double Top/Bottom retail atau garis tren miring yang mudah disapu Smart Money."
        },
        {
          id: 23,
          title: "Minggu 23: Praktik & Studi Kasus SMC",
          estimation: "⏱️ 25 menit",
          theory: `
            <h3>Panduan Eksekusi Lengkap dengan Setup SMC</h3>
            <p>Mari kita rangkum cara bertransaksi presisi menggunakan SMC:</p>

            <div class="info-card">
              <h4>Langkah-Langkah Entry Setup SMC:</h4>
              <ol>
                <li><strong>Petakan Tren di TF Besar (H4):</strong> Tentukan apakah tren sedang naik atau turun berdasarkan BOS terakhir. Tandai Order Block (OB) yang masih segar (belum pernah disentuh) dan FVG terdekat.</li>
                <li><strong>Tunggu Harga Masuk POI (Point of Interest):</strong> Bersabarlah menunggu harga kembali masuk ke dalam area Order Block H4 tersebut.</li>
                <li><strong>Konfirmasi di TF Kecil (M15):</strong> Setelah harga menyentuh OB H4, turunkan time frame ke M15. Tunggu terjadinya <strong>CHoCH</strong> di M15 sebagai bukti pembeli/penjual institusi sudah masuk melakukan perlawanan.</li>
                <li><strong>Entry pada Order Block M15:</strong> Setelah CHoCH M15 terbentuk, pasang order pending Buy/Sell pada Order Block baru yang tercipta di M15. Taruh Stop Loss ketat di luar batas OB tersebut.</li>
              </ol>
            </div>

            <p>Setup ini memberikan rasio Risk:Reward yang fantastis (sering kali 1:3 hingga 1:5) karena Stop Loss di M15 sangat tipis, sementara target profit diatur mengikuti target TF besar H4.</p>
          `,
          examples: [
            {
              title: "Studi Kasus Eksekusi Buy XAU/USD 1:4 R:R",
              content: "Harga menyentuh Bullish OB H4 di 1960.00. Pada chart M15, terjadi CHoCH di mana harga menembus lower high terakhir di 1965.00. Terbentuk Bullish OB M15 baru di 1962.00 dengan FVG tipis di atasnya. Trader memasang Limit Buy di 1962.00 dengan SL di 1958.00 (resiko hanya 40 pips). Target TP diletakkan pada FVG H4 di 1978.00. Posisi terpancing aktif dan meluncur ke TP, menghasilkan profit 160 pips (R:R 1:4)."
            }
          ],
          exercises: [
            {
              id: "w23_q1",
              question: "Berapakah rasio Risk:Reward yang didapatkan trader jika menanggung resiko rugi (SL) sebesar 30 pips untuk mengincar target untung (TP) sebesar 120 pips?",
              options: [
                "1:2",
                "1:3",
                "1:4",
                "1:5"
              ],
              correctAnswer: 2,
              explanation: "Tepat sekali! 120 pips dibagi 30 pips adalah 4, sehingga rasio Risk:Reward transaksi tersebut adalah 1:4."
            }
          ],
          summary: "Entry SMC dilakukan dengan menunggu harga masuk POI TF besar, konfirmasi CHoCH di TF kecil, lalu entry di OB TF kecil dengan target TP TF besar untuk R:R maksimal."
        },
        {
          id: 24,
          title: "Minggu 24: Konsep Dasar SND",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Pengenalan Hukum Supply & Demand (SND)</h3>
            <p>Metode SND didasarkan pada hukum dasar ekonomi global: <strong>Hukum Penawaran (Supply) dan Permintaan (Demand)</strong>. Harga bergerak naik atau turun karena adanya ketidakseimbangan antara jumlah pembeli dan penjual di suatu area harga.</p>

            <div class="info-card">
              <h4>Konsep Zona SND:</h4>
              <ul>
                <li>
                  <strong>Demand Zone (Zona Permintaan/Beli):</strong> 
                  <p>Area di mana terdapat tumpukan minat beli yang sangat agresif. Ketika harga menyentuh zona ini, pesanan beli diaktifkan secara instan, mendorong harga melesat naik dengan sangat cepat.</p>
                </li>
                <li>
                  <strong>Supply Zone (Zona Penawaran/Jual):</strong> 
                  <p>Area di mana terdapat tumpukan minat jual yang sangat berlimpah. Ketika harga naik menyentuh zona ini, harga akan berbalik arah jatuh ke bawah karena membanjirnya pasokan jual.</p>
                </li>
              </ul>
            </div>

            <h3>Perbedaan Utama SND dengan SNR</h3>
            <p>Bila SNR mencari garis harga horizontal yang sering memantulkan harga (lantai/plafon), **SND mencari blok area asal muasal (pangkal) dimulainya pergerakan harga yang meledak kencang**.</p>
          `,
          examples: [
            {
              title: "Perbandingan Reaksi SND",
              content: "Emas tiba-tiba melonjak dari 1980 ke 2020 dalam 1 jam. Pangkal area konsolidasi sebelum ledakan terjadi di kisaran 1980-1985 disebut sebagai <strong>Demand Zone</strong>. Trader SND tidak mengejar harga di 2020. Mereka menandai kotak area 1980-1985 tersebut dan sabar menunggu harga kembali turun ke zona tersebut di masa depan untuk melakukan Buy."
            }
          ],
          exercises: [
            {
              id: "w24_q1",
              question: "Apakah perbedaan mendasar antara metode SNR dan metode SND dalam memandang grafik harga?",
              options: [
                "SNR mencari titik pantulan horizontal yang sering disentuh, sedangkan SND mencari area pangkal asal muasal terjadinya ledakan harga yang impulsif.",
                "SNR hanya untuk trading saham, sedangkan SND hanya untuk trading emas.",
                "SNR menggunakan indikator garis MA, sedangkan SND tidak menggunakan grafik.",
                "Tidak ada perbedaan sama sekali, hanya beda nama."
              ],
              correctAnswer: 0,
              explanation: "Benar! SNR fokus pada level-level historis horizontal (key levels), sedangkan SND fokus pada zona asal (base) tempat terjadinya ledakan ketidakseimbangan harga."
            }
          ],
          summary: "SND mencari zona awal (base) ketidakseimbangan harga: Demand Zone untuk area beli akibat lonjakan naik, Supply Zone untuk area jual akibat kejatuhan turun."
        },
        {
          id: 25,
          title: "Minggu 25: Fresh Zone vs Tested Zone",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Kekuatan Zona SND: Keaslian (Freshness)</h3>
            <p>Salah satu kunci sukses trading menggunakan metode SND adalah menilai kualitas dari zona tersebut. Kualitas zona ditentukan oleh seberapa sering zona tersebut sudah disentuh:</p>

            <div class="info-card">
              <h4>1. Fresh Zone (Zona Segar - Probabilitas Tinggi):</h4>
              <p>Zona Supply atau Demand yang baru saja terbentuk dan <strong>belum pernah dikunjungi atau disentuh kembali sama sekali oleh harga</strong>. Zona segar menyimpan jumlah pesanan (unfilled orders) institusi yang masih utuh dan utamanya sangat kuat memicu pantulan harga yang tajam saat disentuh pertama kali.</p>
            </div>

            <div class="info-card">
              <h4>2. Tested Zone (Zona Teruji - Probabilitas Rendah):</h4>
              <p>Zona yang sudah pernah dikunjungi kembali oleh harga satu kali atau lebih. Setiap kali harga mengunjungi zona tersebut, sisa pesanan beli/jual institusi akan terkikis (terisi/mitigated). Semakin sering sebuah zona disentuh, semakin lemah kekuatan zona tersebut dan semakin besar peluangnya untuk dijebol.</p>
            </div>

            <div class="formula-box">
              <p>⭐⭐ <strong>Golden Rule SND:</strong> Selalu utamakan transaksi pada <strong>Fresh Zone</strong>. Hindari bertransaksi pada zona yang sudah disentuh lebih dari 2 kali.</p>
            </div>
          `,
          examples: [
            {
              title: "Pemberian Uji Coba Zona tested",
              content: "Sebuah Demand Zone dibuat di harga 2000.00. Harga memantul naik tinggi. 2 hari kemudian harga kembali turun menyentuh 2000.00 dan memantul lagi (Sentuhan ke-1: Sukses). Minggu berikutnya harga turun lagi ke 2000.00 dan memantul kecil (Sentuhan ke-2: Lemah). Di sentuhan ke-3, harga langsung menembus level 2000.00 tanpa perlawanan sama sekali karena order beli di sana telah habis terpakai."
            }
          ],
          exercises: [
            {
              id: "w25_q1",
              question: "Mengapa kekuatan sebuah zona Supply atau Demand akan semakin melemah setiap kali dikunjungi kembali (retest) oleh harga?",
              options: [
                "Karena sisa order transaksi (unfilled orders) milik institusi di zona tersebut semakin terkikis habis terisi.",
                "Karena broker mengubah posisi harga secara manual.",
                "Karena trader retail kompak menghapus garis zonanya.",
                "Karena emas kehilangan nilai fisiknya."
              ],
              correctAnswer: 0,
              explanation: "Tepat sekali! Zona SND bekerja karena adanya pesanan tersisa (pending orders) institusi. Setiap kunjungan harga menyerap pesanan tersebut hingga akhirnya habis dan zona menjadi mudah ditembus."
            }
          ],
          summary: "Prioritaskan Fresh Zone yang belum pernah disentuh karena menyimpan order tersisa yang utuh. Hindari Tested Zone yang kekuatannya sudah terkikis habis."
        },
        {
          id: 26,
          title: "Minggu 26: RBD & DBR Pattern",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Formasi Struktur Terbentuknya Zona SND</h3>
            <p>Di grafik, zona Supply dan Demand dibentuk oleh empat formasi pergerakan harga yang sangat teratur. Mari kita pelajari dua formasi pembalikan yang paling populer:</p>

            <ol>
              <li>
                <strong>DBR (Drop-Base-Rally - Pembentukan Demand Zone):</strong>
                <p>Harga turun tajam (Drop), lalu tertahan diam membentuk lilin-lilin kecil sideways (Base / Dasaran), kemudian meledak terbang naik sangat kencang (Rally). Area <strong>Base</strong> lilin kecil inilah yang ditandai sebagai **Demand Zone** kita.</p>
                <div class="ascii-art">
   │  
   █  ← Drop (Turun tajam)
   █
  ┌─┐ ← Base (Lilin kecil sideways)
  └─┘ ◀ [ZONA DEMAND]
   ▲
   │  ← Rally (Melesat naik kencang)
   │
                </div>
              </li>
              <li>
                <strong>RBD (Rally-Base-Drop - Pembentukan Supply Zone):</strong>
                <p>Harga meroket naik kencang (Rally), tertahan sejenak membentuk lilin kecil (Base), kemudian ambruk jatuh sangat curam (Drop). Area <strong>Base</strong> lilin kecil di atas tersebut menjadi **Supply Zone** kita.</p>
              </li>
            </ol>

            <p>Ada juga formasi kelanjutan tren yaitu <strong>RBR (Rally-Base-Rally)</strong> dan <strong>DBD (Drop-Base-Drop)</strong>. Kunci utamanya tetap sama: Tandai area **Base** sebagai zona entri Anda.</p>

            <div class="image-container">
              <img src="snd_concept_diagram.png" alt="Supply & Demand (SND) RBD and DBR Diagram" loading="lazy">
            </div>
          `,
          examples: [
            {
              title: "Cara Menggambar Zona Base yang Benar",
              content: "Pada pola Rally-Base-Drop (RBD), zona Supply digambar dengan menarik kotak rectangle dari sumbu tertinggi lilin base (tertinggi) hingga ke harga pembukaan (open) lilin base terbawah. Kotak horizontal ini ditarik ke kanan untuk menunggu harga datang menjemput order Sell kita."
            }
          ],
          exercises: [
            {
              id: "w26_q1",
              question: "Pola bentukan zona SND yang dicirikan oleh kenaikan harga tajam, diikuti konsolidasi lilin kecil, disusul kejatuhan harga yang sangat ekstrem dinamakan...",
              options: [
                "Drop-Base-Rally (DBR)",
                "Rally-Base-Drop (RBD)",
                "Rally-Base-Rally (RBR)",
                "Drop-Base-Drop (DBD)"
              ],
              correctAnswer: 1,
              explanation: "Benar! Kenaikan (Rally), konsolidasi (Base), lalu kejatuhan (Drop) adalah formasi pembentukan zona Supply yang dinamakan RBD (Rally-Base-Drop)."
            }
          ],
          summary: "Zona SND diidentifikasi lewat pola DBR (Drop-Base-Rally) untuk demand dan RBD (Rally-Base-Drop) untuk supply. Area Base adalah lokasi entry kita."
        }
      ],
      quiz: {
        title: "Kuis Fase 4: 3 Metode Trading",
        questions: [
          {
            question: "Manakah konsep yang paling tepat menggambarkan prinsip SBR pada metode SNR?",
            options: [
              "Support yang ditembus ke bawah berubah fungsi menjadi Resistance baru.",
              "Resistance yang ditembus ke atas berubah fungsi menjadi Support baru.",
              "Harga mantul bolak-balik di area sideways.",
              "Mengambil keuntungan dua kali lipat saat rugi."
            ],
            correctAnswer: 0,
            explanation: "SBR singkatan dari Support Become Resistance. Terjadi ketika harga menembus support, lalu level tersebut bertindak menolak kenaikan harga selanjutnya."
          },
          {
            question: "Di dalam konsep SMC, lilin bearish terakhir sebelum terjadinya lonjakan harga naik yang mematahkan struktur pasar dinamakan...",
            options: [
              "Fair Value Gap",
              "Bullish Order Block",
              "Bearish Order Block",
              "Inducement"
            ],
            correctAnswer: 1,
            explanation: "Bullish Order Block adalah lilin bearish terakhir sebelum harga melesat naik tajam. OB ini menyimpan sisa order beli institusi."
          },
          {
            question: "Sinyal perubahan karakter tren dalam SMC yang ditandai dengan ditembusnya lembah/puncak pertahanan tren terakhir dinamakan...",
            options: [
              "BOS (Break of Structure)",
              "CHoCH (Change of Character)",
              "FVG (Fair Value Gap)",
              "Mitigation"
            ],
            correctAnswer: 1,
            explanation: "CHoCH (Change of Character) mengindikasikan pergantian sifat tren pasar dari naik ke turun, atau sebaliknya."
          },
          {
            question: "Mengapa trader SND sangat mengutamakan entry pada 'Fresh Zone'?",
            options: [
              "Karena Fresh Zone memiliki tampilan warna yang lebih menyala di chart.",
              "Karena Fresh Zone menyimpan order tersisa (unfilled orders) institusi yang masih utuh sehingga probabilitas memantulkan harga sangat tinggi.",
              "Karena Fresh Zone bebas dari biaya swap malam hari.",
              "Karena Fresh Zone direkomendasikan langsung oleh regulator BAPPEBTI."
            ],
            correctAnswer: 1,
            explanation: "Zona segar (Fresh Zone) belum pernah disentuh kembali sejak dibuat, artinya pesanan buy/sell institusi di dalamnya masih utuh dan kuat."
          },
          {
            question: "Formasi bentukan harga Drop-Base-Rally (DBR) pada metode SND menghasilkan zona...",
            options: [
              "Supply Zone",
              "Demand Zone",
              "Resistance Zone",
              "Sideways Zone"
            ],
            correctAnswer: 1,
            explanation: "Drop-Base-Rally (DBR) diawali kejatuhan harga lalu naik tajam, membentuk zona permintaan (Demand Zone) pada area Base lilin konsolidasinya."
          }
        ]
      }
    },
    {
      id: 5,
      title: "Fase 5: Psikologi & Money Management (Minggu 27-32)",
      description: "Mempelajari kunci rahasia yang membedakan 10% trader sukses dari 90% pemula yang bangkrut: pengelolaan uang yang ketat, kontrol emosi, pencatatan jurnal, dan penyusunan Trading Plan tertulis.",
      weeks: [
        {
          id: 27,
          title: "Minggu 27: Money Management Dasar",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Money Management: Pelampung Penyelamat Trader</h3>
            <p>Banyak pemula gagal bukan karena strategi analisanya buruk, melainkan karena mereka tidak tahu cara mengelola ukuran transaksi (Lot). Tanpa Money Management yang ketat, satu kali transaksi salah bisa langsung melenyapkan seluruh saldo akun Anda (Margin Call).</p>

            <div class="info-card">
              <h4>Aturan Risiko 1-2% (Maksimal):</h4>
              <p>Jangan pernah merisikokan uang lebih dari <strong>1% hingga 2%</strong> dari total modal akun Anda untuk satu kali transaksi.</p>
              <div class="formula-box">
                <p>💰 Modal: $1,000</p>
                <p>⚠️ Resiko 1% = $10 per trade</p>
                <p>⚠️ Resiko 2% = $20 per trade</p>
              </div>
              <p>Dengan membatasi risiko maksimal 1-2% per transaksi, Anda membutuhkan 50 hingga 100 kali kekalahan beruntun untuk membuat akun Anda bangkrut. Ini memberi Anda napas yang panjang untuk terus belajar dan memperbaiki strategi.</p>
            </div>

            <h3>Kalkulator Ukuran Lot (Lot Sizing)</h3>
            <p>Lot transaksi harus dihitung berdasarkan jarak Stop Loss Anda, bukan ditebak acak. Rumusnya:</p>
            <div class="formula-box">
              <p>🧮 <strong>Ukuran Lot = Jumlah Resiko ($) / (Jarak SL (pips) x Nilai per Pip)</strong></p>
            </div>
            <p>Gunakan aplikasi kalkulator lot gratis (seperti Myfxbook atau kalkulator lot di internet) setiap kali sebelum Anda mengklik Buy atau Sell.</p>
          `,
          examples: [
            {
              title: "Contoh Penghitungan Lot Riil",
              content: "Modal Anda $1,000 dan Anda menetapkan resiko 1% ($10). Anda ingin Buy emas dengan jarak Stop Loss sejauh 50 pips. Nilai per pip untuk 0.01 lot emas adalah $0.10. Maka perhitungannya: Lot = $10 / (50 pips x $10 per lot-pip) = 0.02 lot. Jadi, Anda hanya boleh membuka posisi sebesar 0.02 lot untuk trade ini."
            }
          ],
          exercises: [
            {
              id: "w27_q1",
              question: "Jika modal akun Anda adalah $500, berapakah jumlah uang maksimal yang boleh Anda risikokan dalam satu kali transaksi menurut aturan risiko 2%?",
              options: [
                "$100",
                "$50",
                "$10",
                "$2"
              ],
              correctAnswer: 2,
              explanation: "Tepat! 2% dari $500 adalah $10. Jadi kerugian maksimal jika Stop Loss Anda terkena tidak boleh melebihi $10."
            }
          ],
          summary: "Maksimal risikokan 1-2% modal per trade. Hitung lot transaksi berdasarkan jarak Stop Loss menggunakan rumus kalkulator lot."
        },
        {
          id: 28,
          title: "Minggu 28: Risk Management (SL & TP)",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Mengatur Stop Loss (SL) & Take Profit (TP)</h3>
            <p>Trading tanpa Stop Loss ibarat mengendarai mobil tanpa sabuk pengaman dan rem di turunan tajam. Cepat atau lambat Anda akan mengalami kecelakaan fatal.</p>

            <div class="info-card">
              <h4>1. Stop Loss (SL - Pembatas Rugi):</h4>
              <p>Perintah otomatis untuk menutup transaksi yang rugi ketika harga bergerak berlawanan arah menyentuh angka tertentu. SL berfungsi mengamankan sisa modal Anda agar tidak habis total saat analisa salah.</p>
            </div>

            <div class="info-card">
              <h4>2. Take Profit (TP - Target Untung):</h4>
              <p>Perintah otomatis untuk menutup transaksi dalam kondisi untung ketika harga berhasil menyentuh target target kita.</p>
            </div>

            <h3>Rasio Risk:Reward (R:R) Minimal 1:2</h3>
            <p>Jangan pernah masuk posisi jika target keuntungan Anda lebih kecil daripada risiko ruginya. Aturan emasnya adalah menggunakan rasio minimal <strong>1:2</strong>.</p>
            <div class="formula-box">
              <p>⚖️ Stop Loss: 20 pips ($20) ➡️ Target Profit Minimal: 40 pips ($40)</p>
            </div>
            <p>Dengan rasio R:R 1:2, Anda hanya butuh akurasi kemenangan <strong>35%</strong> saja untuk menjaga akun Anda tetap dalam kondisi untung secara keseluruhan dalam jangka panjang!</p>
          `,
          examples: [
            {
              title: "Keajaiban Matematika Risk:Reward 1:2",
              content: "Anda melakukan 10 kali trading. Akurasi Anda buruk, Anda kalah 6 kali (loss) dan hanya menang 4 kali (win). <br>- Kerugian: 6 kali x $10 = -$60.<br>- Keuntungan: 4 kali x $20 = +$80.<br>- Hasil Akhir: +$20. <br>Lihat! Meskipun Anda lebih sering salah daripada benar, akun Anda tetap menghasilkan uang bersih!"
            }
          ],
          exercises: [
            {
              id: "w28_q1",
              question: "Mengapa rasio Risk:Reward minimal 1:2 sangat krusial bagi kelangsungan hidup trader pemula?",
              options: [
                "Karena broker memberikan hadiah uang tambahan jika menggunakan rasio ini.",
                "Memungkinkan trader tetap profit secara akumulatif dalam jangka panjang meskipun win rate (akurasi) mereka di bawah 50%.",
                "Membuat Stop Loss tidak bisa tersentuh oleh harga.",
                "Mempercepat penarikan dana withdrawal."
              ],
              correctAnswer: 1,
              explanation: "Benar sekali! Keindahan matematika R:R 1:2 membebaskan kita dari beban keharusan tebakan selalu benar, membuat akun tetap tumbuh walau sering loss kecil."
            }
          ],
          summary: "Selalu pasang SL & TP sebelum entry. Gunakan rasio Risk:Reward minimal 1:2 untuk melindungi pertumbuhan jangka panjang akun Anda."
        },
        {
          id: 29,
          title: "Minggu 29: Trading Journal",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Jurnal Trading: Cermin Evaluasi Diri</h3>
            <p>Trader tanpa jurnal adalah penjudi yang berharap keberuntungan. Jurnal trading adalah rekaman catatan medis dari setiap transaksi yang Anda lakukan. Tanpa mencatat, Anda akan mengulangi kesalahan yang sama ratusan kali tanpa menyadarinya.</p>

            <div class="info-card">
              <h4>Komponen Wajib dalam Jurnal Trading:</h4>
              <ol>
                <li><strong>Waktu & Tanggal:</strong> Kapan posisi dibuka.</li>
                <li><strong>Arah & Ukuran Posisi:</strong> Buy/Sell, berapa lot.</li>
                <li><strong>Alasan Masuk (Setup):</strong> Mengapa Anda masuk? (Misal: Mantul Support H4 + Bullish Engulfing H1).</li>
                <li><strong>Jarak SL & TP:</strong> Berapa pips dan berapa nilai dolarnya.</li>
                <li><strong>Hasil Akhir:</strong> Win, Loss, atau BE (Break Even / Seri).</li>
                <li><strong>Kondisi Emosi:</strong> Apakah Anda merasa tenang, takut, tergesa-gesa, atau serakah saat transaksi berjalan?</li>
                <li><strong>Pelajaran (Review):</strong> Apa yang bisa diperbaiki dari transaksi tersebut?</li>
              </ol>
            </div>

            <p>Luangkan waktu 30 menit setiap akhir pekan (Sabtu/Minggu) saat pasar tutup untuk meninjau kembali jurnal Anda. Temukan pola kesalahan berulang Anda dan eliminasi satu per satu.</p>
          `,
          examples: [
            {
              title: "Contoh Catatan Jurnal Sederhana",
              content: "No: 12 | Tanggal: 21 Mei | Pair: XAU/USD | Type: Buy | Lot: 0.02 | Entry: 2010.00 | SL: 2005.00 | TP: 2020.00 | Hasil: Win (+$20) | Emosi: Tenang karena menunggu setup support matang | Pelajaran: Menunggu konfirmasi candle H1 terbukti membatasi false entry."
            }
          ],
          exercises: [
            {
              id: "w29_q1",
              question: "Kapan waktu terbaik untuk melakukan evaluasi menyeluruh terhadap isi jurnal trading Anda?",
              options: [
                "Setiap kali setelah mengalami loss agar bisa segera membalas dendam.",
                "Di akhir pekan saat pasar sedang tutup dan pikiran sedang dalam kondisi tenang.",
                "Saat sedang sibuk bekerja di kantor.",
                "Tidak perlu dievaluasi, cukup dicatat saja."
              ],
              correctAnswer: 1,
              explanation: "Tepat! Evaluasi saat pasar tutup (weekend) memberikan ketenangan emosional tanpa tekanan grafik berjalan, membantu Anda menganalisa data secara objektif."
            }
          ],
          summary: "Jurnal trading wajib diisi untuk merekam detail teknis dan emosional setiap trade. Review jurnal setiap akhir pekan untuk membuang kesalahan berulang."
        },
        {
          id: 30,
          title: "Minggu 30: Psikologi Trading",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Psikologi Trading: Musuh Terbesar adalah Diri Sendiri</h3>
            <p>Anda bisa memiliki strategi trading terhebat dengan akurasi 90%. Namun, jika Anda tidak bisa mengontrol emosi Anda, akun Anda akan tetap berakhir hancur. Pasar forex adalah cermin raksasa yang mengeksploitasi ketakutan dan keserakahan manusia.</p>

            <div class="warning-box">
              <h4>4 Penyakit Emosi Pemula yang Mematikan:</h4>
              <ul>
                <li>❌ <strong>FOMO (Fear Of Missing Out):</strong> Takut ketinggalan momen. Mengejar harga yang sudah terlanjur terbang tinggi tanpa menunggu koreksi. Hasilnya: membeli di pucuk harga.</li>
                <li>❌ <strong>Revenge Trading (Balas Dendam):</strong> Membuka posisi baru dengan lot jauh lebih besar sesaat setelah mengalami kekalahan demi mengembalikan modal instan. Hasilnya: kebangkrutan total.</li>
                <li>❌ <strong>Overtrading:</strong> Terlalu sering membuka posisi transaksi karena bosan atau serakah, meskipun tidak ada setup yang valid sesuai aturan strategi.</li>
                <li>❌ <strong>Menggeser Stop Loss:</strong> Menjauhkan Stop Loss saat harga mendekatinya karena takut rugi. Mengubah kerugian kecil yang terkendali menjadi kerugian raksasa yang menghancurkan.</li>
              </ul>
            </div>

            <div class="info-card">
              <h4>Mindset Trader Sukses:</h4>
              <ul>
                <li>Trading adalah bisnis probabilitas, bukan kepastian.</li>
                <li>Loss adalah biaya operasional bisnis yang wajar, bukan aib atau kegagalan.</li>
                <li>Konsistensi jangka panjang jauh lebih penting daripada menang besar satu kali lalu hancur di hari berikutnya.</li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: "Kisah Nyata Kegagalan Akibat Revenge Trading",
              content: "Seorang trader baru saja rugi $20 karena analisa emasnya salah. Merasa tidak terima dan marah pada market, dia langsung membuka posisi Sell sebesar 0.50 lot (10x lipat dari biasanya) tanpa analisa sama sekali. Harga berbalik arah naik cepat, membuat akunnya minus $150 dalam 10 menit. Dia panik dan mengalami Margin Call karena modalnya tidak kuat menahan gejolak."
            }
          ],
          exercises: [
            {
              id: "w30_q1",
              question: "Tindakan menjauhkan atau menghapus Stop Loss saat harga bergerak mendekatinya didorong oleh penyakit emosi...",
              options: [
                "FOMO (Takut ketinggalan)",
                "Ketakutan menerima kenyataan rugi (Loss Aversion) yang berujung pada kerugian lebih besar.",
                "Kedisiplinan yang tinggi.",
                "Ekspektasi keuntungan yang realistis."
              ],
              correctAnswer: 1,
              explanation: "Benar! Ketidakmampuan menerima kerugian kecil membuat pemula menggeser SL, yang akhirnya melipatgandakan kerugian menjadi bencana besar bagi akun mereka."
            }
          ],
          summary: "Kendalikan emosi Anda dari penyakit FOMO, balas dendam (revenge trading), dan overtrading. Terimalah loss sebagai biaya bisnis yang sehat."
        },
        {
          id: 31,
          title: "Minggu 31: Kesalahan Pemula & Cara Menghindari",
          estimation: "⏱️ 15 menit",
          theory: `
            <h3>Mengapa 90% Trader Pemula Mengalami Kegagalan?</h3>
            <p>Statistik global menunjukkan mayoritas pemula kehilangan modal mereka dalam 90 hari pertama. Berikut adalah rangkuman kesalahan mereka beserta tameng pelindungnya:</p>

            <table class="comparison-table" style="width: 100%; border-collapse: collapse; margin: 15px 0;">
              <thead>
                <tr style="background: rgba(255, 255, 255, 0.05);">
                  <th style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: left;">Kesalahan Pemula (❌)</th>
                  <th style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: left;">Solusi Penyelamat (✅)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Menginginkan cepat kaya dalam 1 malam.</td>
                  <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Target profit realistis 3-5% per bulan secara konsisten.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Percaya sinyal berbayar & robot auto-profit.</td>
                  <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Belajar mandiri dan percaya pada analisis sendiri.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Overleveraging (Menggunakan lot raksasa).</td>
                  <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Selalu menggunakan lot mikro (0.01) saat awal live.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Mencari strategi 'Holy Grail' (Akurasi 100%).</td>
                  <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Menerima bahwa loss pasti ada, fokus pada manajemen risiko.</td>
                </tr>
              </tbody>
            </table>
          `,
          examples: [
            {
              title: "Ekspektasi Realistis vs Khayalan",
              content: "Banyak iklan menyesatkan menjanjikan modal $100 menjadi $10.000 dalam 1 minggu. Ini adalah judi murni. Trader profesional dunia rata-rata membukukan keuntungan 3% hingga 8% per bulan secara stabil. Dengan bunga berbunga (compounding), persentase kecil tersebut akan melipatgandakan modal awal menjadi sangat masif dalam beberapa tahun."
            }
          ],
          exercises: [
            {
              id: "w31_q1",
              question: "Berapakah target persentase profit bulanan yang realistis bagi seorang trader konsisten?",
              options: [
                "100% sampai 200% per bulan.",
                "3% sampai 5% per bulan secara stabil.",
                "Pasti profit setiap hari tanpa rugi sama sekali.",
                "0% (Break Even saja sudah hebat)."
              ],
              correctAnswer: 1,
              explanation: "Benar! Menargetkan 3-5% profit per bulan adalah angka yang sangat realistis di industri finansial profesional, menghindarkan kita dari resiko transaksi berlebih (overleveraging)."
            }
          ],
          summary: "Hindari mencari jalan pintas cepat kaya atau percaya robot auto-profit. Sukses trading dibangun dari target profit realistis (3-5% per bulan) dan proteksi modal."
        },
        {
          id: 32,
          title: "Minggu 32: Trading Plan & Evaluasi",
          estimation: "⏱️ 20 menit",
          theory: `
            <h3>Menyusun Dokumen Trading Plan Pribadi</h3>
            <p>Selamat! Anda telah sampai pada minggu terakhir kurikulum pembelajaran. Langkah penutup yang paling krusial sebelum Anda mulai menyentuh akun trading riil (dimulai dari modal kecil) adalah menyusun **Trading Plan Tertulis**.</p>
            <p>Trading Plan adalah buku panduan aturan operasi bisnis Anda yang berisi janji tertulis pada diri sendiri yang tidak boleh dilanggar dalam kondisi pasar apa pun.</p>

            <div class="info-card">
              <h4>Struktur Trading Plan Wajib:</h4>
              <ol>
                <li><strong>Waktu Operasional:</strong> Jam berapa Anda akan menganalisa dan melakukan transaksi (misal: hanya pada Sesi London & New York pukul 14.00 - 22.00 WIB).</li>
                <li><strong>Metode Pilihan:</strong> Metode apa yang Anda gunakan (SNR / SMC / SND).</li>
                <li><strong>Aturan Entri (Trigger):</strong> Apa alasan pasti Anda untuk klik buy/sell (misal: tunggu harga masuk support + pola bullish engulfing H1).</li>
                <li><strong>Manajemen Risiko:</strong> Berapa risiko maksimal per trade (1% modal) dan berapa target R:R minimal (1:2).</li>
                <li><strong>Aturan Berhenti (Daily Cap):</strong> Kapan Anda wajib mematikan komputer (misal: jika sudah mengalami kekalahan 2 kali dalam sehari, wajib berhenti trading dan evaluasi besok).</li>
              </ol>
            </div>

            <p>Setelah menyelesaikan materi ini, Anda siap menempuh **Ujian Akhir Kelulusan** untuk mengunduh **Sertifikat Kesiapan Trading** Anda dari GenjotCandlestick!</p>
          `,
          examples: [
            {
              title: "Aturan Berhenti Harian (Daily Cap) Penyelamat Modal",
              content: "Dalam Trading Plan, Anda menulis: 'Maksimal kekalahan harian $20. Jika terkena, saya tidak boleh trading lagi hari ini.' Suatu sore, dua transaksi Anda berturut-turut terkena Stop Loss senilai masing-masing $10. Mengikuti aturan tertulis, Anda langsung menutup laptop meskipun mendeteksi ada peluang ketiga. Malam harinya emas ternyata terjun bebas. Kedisiplinan mematuhi plan menyelamatkan Anda dari kehancuran total."
            }
          ],
          exercises: [
            {
              id: "w32_q1",
              question: "Apakah fungsi utama dari dibuatnya dokumen Trading Plan tertulis?",
              options: [
                "Untuk dipamerkan di media sosial.",
                "Sebagai jangkar komitmen tertulis guna mengontrol emosi serta menuntun pengambilan keputusan trading yang objektif dan konsisten.",
                "Sebagai syarat pendaftaran akun riil ke broker.",
                "Untuk menghilangkan biaya swap menginap."
              ],
              correctAnswer: 1,
              explanation: "Tepat sekali! Trading Plan bertindak sebagai kompas penunjuk jalan rasional Anda saat pasar sedang bergejolak tinggi dan emosi keserakahan/ketakutan Anda mulai muncul."
            }
          ],
          summary: "Susunlah dokumen Trading Plan tertulis pribadi yang memuat aturan jam operasional, pemicu entry, batas risiko, dan aturan berhenti harian demi menjaga kedisiplinan akun riil."
        }
      ],
      quiz: {
        title: "Kuis Fase 5: Psikologi & Money Management (Ujian Akhir)",
        questions: [
          {
            question: "Berapakah batas maksimal risiko modal yang sangat direkomendasikan untuk satu kali transaksi?",
            options: [
              "10% sampai 20% dari modal",
              "1% sampai 2% dari modal",
              "50% dari modal",
              "Bebas sesuai dengan tingkat keyakinan trader"
            ],
            correctAnswer: 1,
            explanation: "Membatasi risiko antara 1% hingga 2% per transaksi memastikan akun Anda kuat menahan volatilitas pasar dan terhindar dari Margin Call cepat."
          },
          {
            question: "Jika Anda menanggung risiko kerugian $20 untuk mendapatkan target keuntungan sebesar $60, berapakah rasio Risk:Reward transaksi tersebut?",
            options: [
              "1:1",
              "1:2",
              "1:3",
              "1:4"
            ],
            correctAnswer: 2,
            explanation: "Perbandingan target untung ($60) terhadap resiko rugi ($20) adalah 60/20 = 3, menghasilkan rasio R:R sebesar 1:3."
          },
          {
            question: "Tindakan membuka posisi transaksi secara emosional dengan volume (lot) besar sesaat setelah kalah agar uang kembali instan dinamakan...",
            options: [
              "FOMO Trading",
              "Revenge Trading (Balas Dendam)",
              "Overtrading",
              "Scalping"
            ],
            correctAnswer: 1,
            explanation: "Revenge Trading adalah pembunuh akun nomor satu bagi pemula yang tidak mau menerima kerugian kecil secara rasional."
          },
          {
            question: "Manakah komponen di bawah ini yang tidak wajib dicatat ke dalam Jurnal Trading?",
            options: [
              "Alasan logis pembukaan posisi transaksi (Setup)",
              "Jarak penempatan Stop Loss dan Take Profit",
              "Nomor seri perangkat komputer yang digunakan",
              "Hasil keuntungan atau kerugian bersih beserta review emosi"
            ],
            correctAnswer: 2,
            explanation: "Nomor seri perangkat keras tidak memiliki pengaruh teknis maupun psikologis terhadap analisis transaksi Anda."
          },
          {
            question: "Kapan seorang trader diwajibkan untuk menutup chart dan berhenti melakukan transaksi berdasarkan aturan Trading Plan yang sehat?",
            options: [
              "Hanya saat komputer mengalami overheat.",
              "Ketika batas kerugian harian maksimal (Daily Loss Cap) yang ditetapkan dalam plan telah terpenuhi.",
              "Setelah mencetak satu kali kemenangan kecil.",
              "Saat bosan menunggu pergerakan market."
            ],
            correctAnswer: 1,
            explanation: "Mengikuti batas stop rugi harian (Daily Cap) mencegah trader dari bahaya overtrading dan luapan emosi balas dendam saat mengalami rentetan kekalahan beruntun."
          }
        ]
      }
    }
  ],
  glossary: [
    { term: "Pip", definition: "Satuan terkecil perubahan harga pada forex. Pada XAU/USD, 1 pip setara dengan gerakan 0.10 pada harga (misal dari 2000.00 ke 2000.10)." },
    { term: "Lot", definition: "Satuan volume transaksi di pasar forex. Lot terkecil adalah 0.01 micro lot." },
    { term: "Leverage", definition: "Daya ungkit modal yang dipinjamkan broker agar trader dapat mengontrol transaksi besar dengan jaminan modal kecil (misal 1:100, 1:500)." },
    { term: "Spread", definition: "Selisih harga jual (Bid) dan harga beli (Ask) yang dipotong broker sebagai biaya komisi transaksi awal." },
    { term: "Swap", definition: "Biaya atau bunga menginap yang dikenakan broker ketika transaksi dibiarkan terbuka melewati pergantian hari perdagangan." },
    { term: "Support", definition: "Batas bawah (lantai) harga di mana pembeli cenderung masuk untuk menolak penurunan harga lebih lanjut." },
    { term: "Resistance", definition: "Batas atas (plafon) harga di mana penjual cenderung masuk untuk menolak kenaikan harga lebih lanjut." },
    { term: "Uptrend", definition: "Kondisi pasar di mana harga bergerak naik membentuk puncak yang lebih tinggi (Higher High) dan lembah yang lebih tinggi (Higher Low)." },
    { term: "Downtrend", definition: "Kondisi pasar di mana harga merosot turun membentuk puncak yang lebih rendah (Lower High) dan lembah yang lebih rendah (Lower Low)." },
    { term: "Sideways", definition: "Kondisi pasar datar di mana harga bergerak mendatar bolak-balik di antara batas support dan resistance horizontal." },
    { term: "NFP (Non-Farm Payrolls)", definition: "Berita high impact Amerika Serikat tentang jumlah lapangan kerja baru non-pertanian, dirilis hari Jumat pertama setiap bulan." },
    { term: "CPI (Consumer Price Index)", definition: "Data ekonomi bulanan Amerika Serikat yang mengukur tingkat inflasi konsumen." },
    { term: "FOMC Meeting", definition: "Rapat rutin Bank Sentral AS (The Fed) yang mengumumkan kebijakan suku bunga acuan ekonomi." },
    { term: "DXY (Dollar Index)", definition: "Indeks kekuatan mata uang Dollar AS terhadap sekeranjang mata uang utama dunia. Umumnya berbanding terbalik dengan arah XAU/USD." },
    { term: "BOS (Break of Structure)", definition: "Kondisi tren berlanjut ditandai jebolnya level puncak/lembah sebelumnya oleh penutupan body lilin solid." },
    { term: "CHoCH (Change of Character)", definition: "Sinyal patah tren ditandai jebolnya level lembah/puncak pertahanan tren terakhir, menandai pembalikan arah." },
    { term: "Order Block (OB)", definition: "Lilin terakhir berlawanan arah sebelum ledakan pergerakan harga impulsif, menandakan jejak penumpukan order institusi." },
    { term: "FVG (Fair Value Gap)", definition: "Celah kosong ketidakseimbangan harga akibat lompatan harga cepat yang bertindak sebagai magnet koreksi harga di masa depan." },
    { term: "Demand Zone", definition: "Area asal ledakan pergerakan harga naik akibat banjirnya permintaan beli." },
    { term: "Supply Zone", definition: "Area asal ledakan kejatuhan harga akibat melimpahnya penawaran jual." },
    { term: "Stop Loss (SL)", definition: "Perintah batasan rugi otomatis jika harga bergerak berlawanan arah dari perkiraan transaksi awal." },
    { term: "Take Profit (TP)", definition: "Perintah target untung otomatis untuk menutup transaksi saat harga menyentuh target keuntungan yang direncanakan." },
    { term: "Risk:Reward (R:R)", definition: "Perbandingan jumlah resiko kerugian terhadap potensi target keuntungan pada satu transaksi (misal 1:2)." },
    { term: "Margin Call (MC)", definition: "Kondisi darurat di mana modal jaminan akun habis akibat menanggung kerugian transaksi tanpa Stop Loss, membuat broker menutup paksa seluruh posisi." }
  ],
  personalityQuiz: {
    title: "Kuis Tipe Trading: Metode Manakah yang Cocok untuk Anda?",
    description: "Jawablah 5 pertanyaan kepribadian ini untuk mengetahui apakah karakter psikologis Anda lebih cocok menggunakan metode SNR, SMC, atau SND.",
    questions: [
      {
        id: "p1",
        question: "1. Bagaimana reaksi Anda saat mempelajari aturan analisa teknikal baru?",
        options: [
          "A. Saya suka yang langsung to-the-point, praktis, dan tidak memakan waktu lama untuk digambar.",
          "B. Saya suka menganalisa secara mendalam, meneliti sejarah struktur grafik, walau harus memakan waktu lebih lama.",
          "C. Saya suka yang seimbang, logis berdasarkan hukum pasar (supply & demand), tidak terlalu simpel tapi juga tidak terlalu rumit."
        ],
        results: ["SNR", "SMC", "SND"]
      },
      {
        id: "p2",
        question: "2. Bagaimana tipe manajemen waktu trading yang paling Anda sukai?",
        options: [
          "A. Saya tidak suka terlalu lama menunggu. Saya ingin sering membuka posisi (5-10 trade per hari) dan cepat mengambil untung.",
          "B. Saya sangat sabar. Saya tidak masalah hanya mendapat 1 atau 2 trade dalam sehari (bahkan seminggu), asalkan akurasinya presisi dan rasio profitnya besar.",
          "C. Saya sedang-sedang saja. Saya suka menunggu setup di area penting, dengan frekuensi trade sedang (3-5 kali per hari)."
        ],
        results: ["SNR", "SMC", "SND"]
      },
      {
        id: "p3",
        question: "3. Seberapa besar toleransi Anda terhadap kekalahan (Stop Loss) yang tipis?",
        options: [
          "A. Saya tidak suka Stop Loss yang terlalu tipis karena takut langsung tersapu oleh fluktuasi kecil pasar sebelum harga sempat naik.",
          "B. Saya sangat menyukai Stop Loss ketat/tipis agar resikonya kecil, meskipun konsekuensinya posisi saya akan lebih sering terkena SL sebelum mendapatkan profit besar.",
          "C. Saya menyukai Stop Loss yang proporsional di batas area terluar sebuah zona harga agar lebih aman."
        ],
        results: ["SNR", "SMC", "SND"]
      },
      {
        id: "p4",
        question: "4. Kondisi pergerakan pasar emas (XAU/USD) manakah yang paling membuat Anda nyaman bertransaksi?",
        options: [
          "A. Saat harga bergerak bolak-balik naik turun dengan rapi di dalam batas area mendatar (sideways/ranging).",
          "B. Saat harga bergerak melesat kencang membentuk tren satu arah yang kuat (trending).",
          "C. Saya menyukai segala kondisi pasar, baik sideways maupun trending, asalkan ada area penawaran/permintaan yang jelas."
        ],
        results: ["SNR", "SMC", "SND"]
      },
      {
        id: "p5",
        question: "5. Manakah target rasio Risk:Reward (R:R) yang paling memuaskan psikologi Anda?",
        options: [
          "A. Cukup rasio 1:1.5 sampai 1:2. Yang penting sering menang (Win Rate tinggi).",
          "B. Saya mengincar rasio raksasa 1:3 sampai 1:5. Saya rela sering kalah kecil demi sekali menang besar yang menutupi semua kekalahan.",
          "C. Saya menyukai rasio stabil 1:2 sampai 1:3 yang konsisten dan aman."
        ],
        results: ["SNR", "SMC", "SND"]
      }
    ]
  }
};
