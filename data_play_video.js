const data = {
            "bos": {
                "title": "Battle Of Surabaya",
"episode": "Episode 1",
                "description": "menceritakan tentang petualangan Musa. Ia adalah Seorang remaja yang bekerja sebagai tukang semir sepatu yang menjadi kurir bagi perjuangan arek-arek Suroboyo pada pertempuran 10 November 1945.<br><br> Cerita diawali dengan visualisasi dahsyat dari pengeboman kota Hiroshima oleh Sekutu yang menandakan menyerahnya Jepang. <br><br>“Indonesia merdeka, itu yang kudengar di RRI, Jepang menyerah!”, kata Musa. Tetapi langit Surabaya kembali merah dengan peristiwa Insiden Bendera dan kedatangan Sekutu yang ditumpangi oleh Belanda.",
                
            },
            
            "boboiboythemovie": {
                "title": "Boboiboy The Movie",
"episode": "Episode 1",
                "description": "Ochobot, si robot teman BoBoiBoy, telah diculik oleh sebuah komplotan pemburu harta karun asing berjulukan The Tengkotak, dan akan mereka gunakan untuk melacak lokasi Sfera Kuasa kuno yang bersembunyi di Bumi.",
                
            },
            "upinipinkerissiamangtunggal": {
                "title": "Upin & Ipin Keris Siamang Tunggal",
"episode": "Episode 1",
                "description": "Upin & Ipin: Keris Siamang Tunggal adalah film petualangan dan fantasi terbaru dari Upin & Ipin dan keenam sahabatnya: Ehsan, Fizi, Mail, Jarjit, Mei Mei, dan Susanti dalam menyelamatkan kerajaan fantasi Inderaloka dari ancaman musuhnya, Raja Bersiong yang jahat. Cerita bermula saat Upin, Ipin, dan para sahabatnya tak sengaja menemukan keris mistis di gudang Tok Dalang yang ternyata membuka portal menuju kerajaan Inderaloka.",
                
            },
"onepiecemv14": {
"title": "One Piece Movie 14 : Stampede",
"episode": "Episode 1",
"description": "Eksposisi perompak terhebat di dunia, oleh para perompak, untuk para perompak – Festival Perompak. Luffy dan kru Topi Jerami lainnya menerima undangan dari tuan rumahnya Buena Festa yang dikenal sebagai Master of Festivities. Mereka tiba untuk menemukan tempat yang penuh dengan paviliun glamor dan banyak perompak termasuk yang dari Generasi Terburuk. Tempatnya listrik.",

            },

"mashleseason2": {
"title": "Mashle Season 2",
"episode": "Episode 1",
"description": "menceritakan seorang anak bernama Mash Burnedead yang hidup di dunia yang penuh dengan sihir.<br><br>Dalam dunia sihir tersebut, seorang yang tidak memiliki sihir akan dianggap sebagai aib dan harus diasingkan.<br><br>Tokoh utama Mash Burnedead adalah salah satu manusia yang hidup dengan tidak memiliki sihir apapun.<br><br>Dibuang oleh keluarganya dan ditemukan seorang kakek, kemudia diadopsi dan hidup ditengah hutan.",

            },



"findingnemo": {
"title": "Finding Nemo",
"episode": "Episode 1",
"description": "Setelah anaknya tertangkap jaring nelayan di Great Barrier Reef dan dibawa ke Sydney, seekor clownfish pemalu bertekad menempuh perjalanan panjang penuh bahaya untuk menemukannya kembali.",

            },

















            
            
            
            
            
        };

        // Mendapatkan parameter dari URL untuk menentukan animasi yang dipilih
        const urlParams = new URLSearchParams(window.location.search);
        const animation = urlParams.get("animation");

        // Mengatur video yang akan ditampilkan berdasarkan animasi yang dipilih
        if (animation && data.hasOwnProperty(animation)) {
            const titleElement = document.getElementById("title");
            const descriptionElement = document.getElementById("description");
            
              const episodeElement = document.getElementById("episode");

titleElement.innerHTML = data[animation].title;
            episodeElement.textContent = data[animation].episode;
            descriptionElement.innerHTML = data[animation].description;

        }