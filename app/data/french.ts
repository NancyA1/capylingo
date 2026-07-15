export type Question = {
  question: string;
  answer: string;
  pronunciation: string;
  hint: string;
  image: string;
};

export type Lesson = {
  title: string;
  description: string;
  questions: Question[];
};

export const frenchLessons: Record<number, Lesson> = {
  1: {
  title: "Greetings",
  description: "Learn common French greetings.",
  questions: [
    { 
      question: "hello", 
      answer: "bonjour", 
      pronunciation: "bon-zhoor", 
      hint: "The most common French greeting.", 
      image: "https://static.vecteezy.com/system/resources/previews/059/555/037/non_2x/happy-young-women-greeting-waving-with-hand-hello-gesture-joyful-communication-flat-vector.jpg" 
    },
    { 
      question: "goodbye", 
      answer: "au revoir", 
      pronunciation: "oh ruh-vwar", 
      hint: "Used when leaving someone.", 
      image: "https://static.vecteezy.com/system/resources/previews/059/681/523/non_2x/flat-cartoon-illustration-of-a-happy-schoolboy-waving-goodbye-ready-for-school-free-vector.jpg" 
    },
    { 
      question: "thank you", 
      answer: "merci", 
      pronunciation: "mehr-see", 
      hint: "Used to express gratitude.", 
      image: "https://static.vecteezy.com/system/resources/previews/006/013/201/non_2x/grateful-people-saying-thank-you-man-and-woman-keeping-hands-on-chest-expresses-gratitude-being-thankful-for-help-and-support-flat-illustration-vector.jpg" 
    },
    { 
      question: "please", 
      answer: "s'il vous plaît", 
      pronunciation: "seel voo pleh", 
      hint: "A polite word when asking for something.", 
      image: "https://img.magnific.com/free-vector/flat-design-please-illustration_23-2150187480.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      question: "yes", 
      answer: "oui", 
      pronunciation: "wee", 
      hint: "Positive answer.", 
      image: "https://static.vecteezy.com/system/resources/thumbnails/047/526/915/small_2x/yes-check-mark-cartoon-illustration-vector.jpg" 
    },
    { 
      question: "no", 
      answer: "non", 
      pronunciation: "noh", 
      hint: "Negative answer.", 
      image: "https://img.magnific.com/free-vector/stressed-man-holding-his-head_1308-171901.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      question: "good morning", 
      answer: "bonjour", 
      pronunciation: "bon-zhoor", 
      hint: "Morning greeting.", 
      image: "https://media.istockphoto.com/id/97403299/vector/rooster-standing-on-fence-post-crowing-as-the-sun-rises.jpg?s=612x612&w=0&k=20&c=wBTNcEvEL5R4Q_inMmIuJ-luoU_XqYztMXEgu_JuoSs=" 
    },
    { 
      question: "good evening", 
      answer: "bonsoir", 
      pronunciation: "bon-swahr", 
      hint: "Evening greeting.", 
      image: "https://media.istockphoto.com/id/1258106839/vector/panorama-of-sea-sunset-or-ocean-sunrise-vector-illustration-of-water-and-sky-horizon-sun.jpg?s=612x612&w=0&k=20&c=u1vE5Og2e7QioYzssdceoLPl9xlwSHT0yOK4tVMeHLI=" 
    },
    { 
      question: "how are you?", 
      answer: "comment allez-vous", 
      pronunciation: "koh-mahn tah-lay voo", 
      hint: "Ask someone how they are doing.", 
      image: "https://static.vecteezy.com/system/resources/thumbnails/007/685/789/small/young-smiling-cheerful-people-of-different-nationalities-colleagues-or-friends-wave-their-hand-in-a-friendly-greeting-flat-illustration-isolated-on-white-free-vector.jpg" 
    },
    { 
      question: "I am fine", 
      answer: "je vais bien", 
      pronunciation: "zhuh vay bee-en", 
      hint: "Reply when you're doing well.", 
      image: "https://media.istockphoto.com/id/1390284387/vector/smiling-confident-businessman-with-thumbs-up-gesture-successful-man-best-choice-retro-pop.jpg?s=612x612&w=0&k=20&c=ybAGm5li_rur79kEGi6ClgnMLpX4kaeKKWP-im--UhQ=" 
    }
  ]
},
  2: {
    title: "Animals",
    description: "Learn common animal names.",
    questions: [
      { question: "cat", answer: "chat", pronunciation: "sha", hint: "A popular pet.", image: "https://i.pinimg.com/736x/90/68/d3/9068d39a1cc4173c33a69bd11a127fab.jpg" },
      { question: "dog", answer: "chien", pronunciation: "shee-en", hint: "Man's best friend.", image: "https://i.pinimg.com/736x/55/c1/a4/55c1a4112135d9dc81217521bd926ca3.jpg" },
      { question: "bird", answer: "oiseau", pronunciation: "wah-zoh", hint: "An animal that flies.", image: "https://i.pinimg.com/1200x/f2/cb/f4/f2cbf4d2bfc8b4406ec088cf665d6370.jpg" },
      { question: "fish", answer: "poisson", pronunciation: "pwah-son", hint: "Lives in water.", image: "https://i.pinimg.com/736x/6e/0c/35/6e0c35017a977d434ac57ed8b475077d.jpg" },
      { question: "horse", answer: "cheval", pronunciation: "shuh-val", hint: "Used for riding.", image: "https://i.pinimg.com/1200x/e5/ce/00/e5ce0042cc7ef3677c84a413752b64dd.jpg" },
      { question: "lion", answer: "lion", pronunciation: "lee-on", hint: "King of the jungle.", image: "https://i.pinimg.com/1200x/3c/b9/75/3cb9751e83e64348c216d1e1b0cb2938.jpg" },
      { question: "elephant", answer: "éléphant", pronunciation: "ay-lay-fon", hint: "Largest land animal.", image: "https://i.pinimg.com/736x/64/f2/7e/64f27ee42124fdf02d1f720a9ef4d956.jpg" },
      { question: "rabbit", answer: "lapin", pronunciation: "la-pan", hint: "Has long ears.", image: "https://i.pinimg.com/736x/77/86/b1/7786b18509ff984fb34ac1b64b882b41.jpg" },
      { question: "bear", answer: "ours", pronunciation: "oor", hint: "Large wild animal.", image: "https://i.pinimg.com/736x/ff/cf/97/ffcf975055540ddf519231ab7c7e75f2.jpg" },
      { question: "tiger", answer: "tigre", pronunciation: "tee-gruh", hint: "A striped wild cat.", image: "https://i.pinimg.com/736x/4f/9f/12/4f9f12efd637abe70f7ab0058bb21942.jpg" },
    ],
  },
  3: {
    title: "Food",
    description: "Learn common food vocabulary.",
    questions: [
      { question: "apple", answer: "pomme", pronunciation: "pom", hint: "A common fruit.", image: "https://i.pinimg.com/1200x/c5/61/7a/c5617ad6d2a3b422ec45d7c478c53fd0.jpg" },
      { question: "bread", answer: "pain", pronunciation: "pan", hint: "A basic food made from flour.", image: "https://i.pinimg.com/1200x/60/95/22/6095223749578f60ba39396b5f53bea8.jpg" },
      { question: "water", answer: "eau", pronunciation: "oh", hint: "Essential for life.", image: "https://i.pinimg.com/736x/10/e8/43/10e843639e2ca6ae5b405ba8fe499f3d.jpg" },
      { question: "milk", answer: "lait", pronunciation: "lay", hint: "A white dairy drink.", image: "https://i.pinimg.com/736x/f4/25/20/f425206ec30749368439cc016a707d5c.jpg" },
      { question: "rice", answer: "riz", pronunciation: "ree", hint: "A common grain.", image: "https://i.pinimg.com/1200x/66/55/b7/6655b754043acb712a705784f48ed4b5.jpg" },
      { question: "chicken", answer: "poulet", pronunciation: "poo-lay", hint: "A popular meat.", image: "https://i.pinimg.com/736x/05/ab/ba/05abba99612dd7bd298a244f2caa02f0.jpg" },
      { question: "cheese", answer: "fromage", pronunciation: "froh-maj", hint: "France is famous for it.", image: "https://i.pinimg.com/736x/a3/0a/8f/a30a8f2c0cf706b51e97f19585b67991.jpg" },
      { question: "egg", answer: "œuf", pronunciation: "uhf", hint: "Comes from a chicken.", image: "https://i.pinimg.com/736x/ce/15/b5/ce15b50f4f726b8b2526298d1f92d3d9.jpg" },
      { question: "banana", answer: "banane", pronunciation: "ba-nan", hint: "A long yellow fruit.", image: "https://i.pinimg.com/736x/f6/6b/ba/f66bba832344648fc58b2e523b9c1534.jpg" },
      { question: "coffee", answer: "café", pronunciation: "ka-fay", hint: "A popular hot drink.", image: "https://i.pinimg.com/736x/e7/a4/53/e7a45353e974d8fe3bcb0ffcb33751e9.jpg" },
    ],
  },
 4: {
  "title": "Family",
  "description": "Learn vocabulary for family members.",
  "questions": [
    {
      "question": "father",
      "answer": "pere",
      "pronunciation": "pehr",
      "hint": "A male parent.",
      "image": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQG1D8cHoK0gLba10DjAcTVvtBJeZ3O4eVQXQqrkELQrJt-I-haAwxHLZVo12XQuwawlKGEvci-aVTh3eM"
    },
    {
      "question": "mother",
      "answer": "mere",
      "pronunciation": "mehr",
      "hint": "A female parent.",
      "image": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSJzrILWs1BTEebGhTQ0lnhzZ-hMPXCVOMbr8nCUil5u4HqRa4znheJbHgRo6wF_fI6MSxrkuwz_idOlPk"
    },
    {
      "question": "son",
      "answer": "fils",
      "pronunciation": "feess",
      "hint": "A male child.",
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR6tWTonqJF8b5YWQC-HJ3BLL9KMV3Le0bb903eBMSeHYuvld0GN-GpJgr-EOhSy5hYfAzOaMa5u7hb5dk"
    },
    {
      "question": "daughter",
      "answer": "fille",
      "pronunciation": "feey",
      "hint": "A female child.",
      "image": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTQ5D4iwvrulvAUuqiTRMkOUwx1tVeKpYnrOWP11wToVtvNUdP49DeewFgd2gCJITlqHgyMTCTu2f1mCI4"
    },
    {
      "question": "brother",
      "answer": "frère",
      "pronunciation": "frehr",
      "hint": "A male sibling.",
      "image": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSNoSkgY0hoGbhBlObRRIoYeKw_K1OldV5NhfAKG6B_IhQPdgbiRX_d4UQlu1HRaLZt8u7D6lVhNojePHU"
    },
    {
      "question": "sister",
      "answer": "sœur",
      "pronunciation": "suhr",
      "hint": "A female sibling.",
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVzvgJAn1TJ02Hy7o2SSY26vHTjrL3b97vTixaXWgy02_PhqCfihaEGEGpFpDmtP0nM8_fy1oo4uMGcLc"
    },
    {
      "question": "grandfather",
      "answer": "grand-père",
      "pronunciation": "grahn-pehr",
      "hint": "Your parent's father.",
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTX1nO2Xc8Zvz7Dd5JzyWhma55CUGEar4qLVbqmUBiZpx4pwJ7Q3KY26poHWT80H2dPCRh7J8IkSI2joCE"
    },
    {
      "question": "grandmother",
      "answer": "grand-mère",
      "pronunciation": "grahn-mehr",
      "hint": "Your parent's mother.",
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSiu86cmaVYt8X0GL4vDT6VklKmiH23dVGMCjsf9KFS2KonoE538kUZK516RhsJByTvhCKXYGdtV_IBEfs"
    },
    {
      "question": "uncle",
      "answer": "oncle",
      "pronunciation": "ohn-kluh",
      "hint": "Your parent's brother.",
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS66xMYCQRaf5riFiOa2jsQx7KZ9fo5iDlyxmPbtFenBIGgXkGxS8chwKabf2XyhP91Eb7QDcBYpEQVwOo"
    },
    {
      "question": "aunt",
      "answer": "tante",
      "pronunciation": "tahnt",
      "hint": "Your parent's sister.",
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTNvtTS-qYDt03MVJwEHUzsAYOPOHtV6OUJOI3rhGE_L5JoyW82e1LZoIGe-gIWUxjuU599sVcn6pcQcIQ"
    }
  ]
},
  5:{
  "title": "Travel",
  "description": "Useful words for navigating and traveling.",
  "questions": [
    { 
      "question": "passport", 
      "answer": "passeport", 
      "pronunciation": "pahs-por", 
      "hint": "Official travel document.", 
      "image": "https://img.magnific.com/premium-vector/passport-cartoon-style-vector-illustration_1116403-1471.jpg" 
    },
    { 
      "question": "hotel", 
      "answer": "hôtel", 
      "pronunciation": "oh-tel", 
      "hint": "A place to stay while traveling.", 
      "image": "https://static.vecteezy.com/system/resources/previews/015/694/767/non_2x/skyscraper-hotel-building-flat-cartoon-hand-drawn-illustration-template-with-view-on-city-space-of-street-panorama-design-vector.jpg" 
    },
    { 
      "question": "train", 
      "answer": "train", 
      "pronunciation": "tran", 
      "hint": "Runs on a railway track.", 
      "image": "https://media.craiyon.com/2025-07-19/WlS6_JY5QueJx89VB7qlLQ.webp" 
    },
    { 
      "question": "plane", 
      "answer": "avion", 
      "pronunciation": "ah-vee-ohn", 
      "hint": "Flies in the sky.", 
      "image": "https://static.vecteezy.com/system/resources/thumbnails/017/996/078/small_2x/airplane-cartoon-illustrative-design-vector.jpg" 
    },
    { 
      "question": "car", 
      "answer": "voiture", 
      "pronunciation": "vwah-teur", 
      "hint": "A 4-wheeled road vehicle.", 
      "image": "https://img.magnific.com/premium-vector/car-vector-illustration-classic-red-car-cartoon-transportation_648083-206.jpg" 
    },
    { 
      "question": "ticket", 
      "answer": "billet", 
      "pronunciation": "bee-yeh", 
      "hint": "Shows you paid for your ride.", 
      "image": "https://static.vecteezy.com/system/resources/previews/055/742/937/non_2x/hand-drawn-cute-cartoon-illustration-of-lucky-ticket-flat-gift-coupon-doodle-make-a-wish-fortune-in-game-gamble-bet-icon-or-sticker-superstition-symbol-hope-for-the-best-isolated-vector.jpg" 
    },
    { 
      "question": "airport", 
      "answer": "aéroport", 
      "pronunciation": "ah-ay-roh-por", 
      "hint": "Where planes take off and land.", 
      "image": "https://img.magnific.com/premium-photo/cartoon-illustration-airport-terminal-with-airplanes-tarmac_1235831-271402.jpg" 
    },
    { 
      "question": "station", 
      "answer": "gare", 
      "pronunciation": "gahr", 
      "hint": "Where you catch a train.", 
      "image": "https://img.magnific.com/free-vector/train-station-scene-with-steam-locomotive_1308-93939.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "baggage", 
      "answer": "bagage", 
      "pronunciation": "bah-gahzh", 
      "hint": "Suitcases and bags for travel.", 
      "image": "https://img.magnific.com/free-vector/different-kinds-suitcases-illustrations-set-collection-travel-bags-with-wheels-luggage-baggage-briefcase-isolated-white_74855-20531.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "map", 
      "answer": "carte", 
      "pronunciation": "kahrt", 
      "hint": "A visual guide for navigation.", 
      "image": "https://img.magnific.com/free-vector/vintage-treasure-map-with-compass-illustration_1308-181992.jpg?semt=ais_hybrid&w=740&q=80" 
    }
  ]
},
  6: {
  "title": "Colors",
  "description": "Learn standard colors.",
  "questions": [
    { 
      "question": "red", 
      "answer": "rouge", 
      "pronunciation": "roozh", 
      "hint": "The color of strawberries.", 
      "image": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQz8LPM28q8OH-RyfGdl-F8YjNfc-JmolAX91QvLNVZJ9pBWiEkONM69N0r6P049vztzogOC00DpyfgYu4" 
    },
    { 
      "question": "blue", 
      "answer": "bleu", 
      "pronunciation": "bluh", 
      "hint": "The color of the sky.", 
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTUCRsDlH38N1QMrK5UrVgKpARrnuWZjcEdUMZRTveL8QmSG1eltD4IpGU3THHVS_2jJpFwAey-mn0z2nc" 
    },
    { 
      "question": "green", 
      "answer": "vert", 
      "pronunciation": "vehr", 
      "hint": "The color of grass.", 
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSLnj7GqrOHxz5dS1uTUeZNnUhCXmcWI2hzRnA-7LJDhHuQe8JvavDWoiMZWCNpV3wGUv0lJjjjrl1Wt-Y" 
    },
    { 
      "question": "yellow", 
      "answer": "jaune", 
      "pronunciation": "zhohn", 
      "hint": "The color of lemons.", 
      "image": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSUi1sUHm8f33ooYf9nSGjWFwhjwIflkNscx-2hLqlJ6AU7bqy_4oOB8OZs2xWvguBWpC7pJq2wagt8ljM" 
    },
    { 
      "question": "black", 
      "answer": "noir", 
      "pronunciation": "nwahr", 
      "hint": "The darkest color.", 
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRUEoe7d7IItJTtqoKcEfG2pdzsO4MYtt49mGmO2IxVu1uTxv5DW78eohT9dhCGBpulKmIA39H7wlZuhAE" 
    },
    { 
      "question": "white", 
      "answer": "blanc", 
      "pronunciation": "blahnh", 
      "hint": "The color of snow.", 
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRSuJt42KKdDmmFnyOHKHf-6OC48urx4m24UsJU8TR9iEeNcvK0lQ4_tV4PEPmQ1PmC8jwKVhC05XBNIoE" 
    },
    { 
      "question": "pink", 
      "answer": "rose", 
      "pronunciation": "rohz", 
      "hint": "The color of flamingos.", 
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTLXDlhclImG1Tvu-hV18XBEAVFyc-ZboO__M-x7Y_wM4SWo2hiepuk2QQdxLTXb9KRsnVbq2u3s-FRKOs" 
    },
    { 
      "question": "orange", 
      "answer": "orange", 
      "pronunciation": "oh-rahnzh", 
      "hint": "Same name as the fruit.", 
      "image": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRm-mZfldWPWVlO8WQK-6nacp8G5XvVEszfPKEWmIK-YSEkjA_tLd4LG1gMbYwirQWGp33qih8hAt3ykiU" 
    },
    { 
      "question": "purple", 
      "answer": "violet", 
      "pronunciation": "vee-oh-leh", 
      "hint": "The color of grapes.", 
      "image": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS-utWJFoIRhuaM4vd2mP_i9lS2vpPqlRZQrbyppyMFAswXDOuANWBgX2VgAF7ndbWmVXJbYkDeD3pCEXA" 
    },
    { 
      "question": "grey", 
      "answer": "gris", 
      "pronunciation": "gree", 
      "hint": "The color of a rain cloud.", 
      "image": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTxBau3hjRVnBjedXDBD-2aLPExmnH2HEbOw_kayYHAlhZldsDC0SEeGGJT9CC3gAfYGp3e5lw2FSJ-Zeg" 
    }
  ]
},
  7: {
    title: "Numbers",
    description: "Learn to count from 1 to 10.",
    questions: [
      { question: "one", answer: "un", pronunciation: "uhn", hint: "The first number.", image: "https://pixabay.com/images/download/x-1019717_1920.jpg" },
      { question: "two", answer: "deux", pronunciation: "duh", hint: "1 + 1", image: "https://pixabay.com/images/download/x-1019719_1920.jpg" },
      { question: "three", answer: "trois", pronunciation: "trwah", hint: "2 + 1", image: "https://pixabay.com/images/download/peggy_marco-number-1019720_1920.jpg" },
      { question: "four", answer: "quatre", pronunciation: "katr", hint: "3 + 1", image: "https://pixabay.com/images/download/x-1019721_1920.jpg" },
      { question: "five", answer: "cinq", pronunciation: "sank", hint: "4 + 1", image: "https://pixabay.com/images/download/x-1019722_1920.jpg" },
      { question: "six", answer: "six", pronunciation: "sees", hint: "5 + 1", image: "https://pixabay.com/images/download/x-1019724_1920.jpg" },
      { question: "seven", answer: "sept", pronunciation: "set", hint: "6 + 1", image: "https://pixabay.com/images/download/x-1019725_1920.jpg" },
      { question: "eight", answer: "huit", pronunciation: "weet", hint: "7 + 1", image: "https://pixabay.com/images/download/x-1019726_1920.jpg" },
      { question: "nine", answer: "neuf", pronunciation: "nuhf", hint: "8 + 1", image: "https://pixabay.com/images/download/x-1019727_1920.jpg" },
      { question: "ten", answer: "dix", pronunciation: "dees", hint: "9 + 1", image: "https://pixabay.com/images/download/x-28310_1920.png" },
    ],
  },
  8: {
  "title": "Clothes",
  "description": "Common items of clothing.",
  "questions": [
    { 
      "question": "shirt", 
      "answer": "chemise", 
      "pronunciation": "shuh-meez", 
      "hint": "An upper-body garment with buttons.", 
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSSokJPNdDIB_9PgwitWK7hoJmr6YpCONWBUvL4ipQPP6kJR3msrg34uyPHabJqMUr250p6Y2ZaOP7CQko" 
    },
    { 
      "question": "pants", 
      "answer": "pantalon", 
      "pronunciation": "pahn-tah-lohn", 
      "hint": "Worn on your legs.", 
      "image": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSL5uF6AjfjBNXWpLbFxsUvEaBV2iXAiDHtXAeeFUS4trwg00bkrXlzsZC3T_IoKOdFW54Fdn9L4Of80gg" 
    },
    { 
      "question": "dress", 
      "answer": "robe", 
      "pronunciation": "rohb", 
      "hint": "A one-piece garment for women.", 
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT7_ZNgumLxwTsdupFs7g33ZX87-4etkD6TmWZFMkLOkujwrHQX5pO_43MFWq9v17xwD65yBEN7SibgPpY" 
    },
    { 
      "question": "shoes", 
      "answer": "chaussures", 
      "pronunciation": "shoh-seur", 
      "hint": "Worn on your feet.", 
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQk-oGu4E9mCvDjTz4tjrnwjfbPryBVEBdtwfep3cn0Eud_J-Ly_cwbKkBg76Q-O0FgRKtRaW9QSsc0vwk" 
    },
    { 
      "question": "hat", 
      "answer": "chapeau", 
      "pronunciation": "shah-poh", 
      "hint": "Worn on your head.", 
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS9PZW0gkj_RrQ7UWwhrY1mipaKMOc_9_opgQv8Bf1fbg2IVnmF9yi_ZuN4UpTT3zIHZUx715RHAa9-3t0" 
    },
    { 
      "question": "coat", 
      "answer": "manteau", 
      "pronunciation": "mahn-toh", 
      "hint": "Worn outside when it's cold.", 
      "image": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSRsu2nTcfMOak5gMxzRTWafgpHi2qZTCbo2X3lGKrpA1q0SJCExLES1gthDFO5UtnyD4zb__SGQ6lgMVc" 
    },
    { 
      "question": "skirt", 
      "answer": "jupe", 
      "pronunciation": "zhoop", 
      "hint": "Hangs from the waist downward.", 
      "image": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTxrWfJUvDNxc2YE-lMnuBTdjeXarDCzoN1iGaWwZDkuk34U0W7uIQrqkDf8bJn4oQmGp6eVFX3-B3caWQ" 
    },
    { 
      "question": "socks", 
      "answer": "chaussettes", 
      "pronunciation": "shoh-set", 
      "hint": "Worn inside your shoes.", 
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRbmd1CsvWT-0JkLxThg3iTkk6uSmuysp3h0zx4P78Pyi6ZbOXZpKQ_YTUuA6OXDGQkVS7nO4IztC-t0wA" 
    },
    { 
      "question": "jacket", 
      "answer": "veste", 
      "pronunciation": "vest", 
      "hint": "Light coat worn over clothes.", 
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSLhUnapSzn2bV6EwZXgtTBaIfy8T2PdY_VU01mNCCAL93VhUkF9kkRjYj5pW4WXbTS07HUt1f0zsajmA0" 
    },
    { 
      "question": "glasses", 
      "answer": "lunettes", 
      "pronunciation": "lu-net", 
      "hint": "Helps you see clearly.", 
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRrAymA8Wo-z18IkoYU2vTCYKMcSrlYdIvWOCEi1hchzoG2LqOoVFZZRLkcXsSpNlyeGJrzSXUbO7INtMI" 
    }
  ]
},
  9: {
  "title": "Weather",
  "description": "Phrases to describe daily weather conditions.",
  "questions": [
    { 
      "question": "it is sunny", 
      "answer": "il fait beau", 
      "pronunciation": "eel fay boh", 
      "hint": "Good, beautiful weather.", 
      "image": "https://img.magnific.com/free-vector/flat-design-landscape_23-2149141016.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "it is raining", 
      "answer": "il pleut", 
      "pronunciation": "eel pluh", 
      "hint": "Water falling from clouds.", 
      "image": "https://img.magnific.com/free-vector/happy-woman-walking-rainy-day-with-umbrella-isolated-flat-vector-illustration-cartoon-female-character-being-outdoors-autumn-rain-landscape-weather-concept_74855-10087.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "it is cold", 
      "answer": "il fait froid", 
      "pronunciation": "eel fay frwah", 
      "hint": "Low temperature.", 
      "image": "https://img.magnific.com/premium-vector/cold-woman-character-feeling-freezing-winter-weather-vector-flat-cartoon-illustration_357257-2124.jpg" 
    },
    { 
      "question": "it is hot", 
      "answer": "il fait chaud", 
      "pronunciation": "eel fay shoh", 
      "hint": "High temperature.", 
      "image": "https://static.vecteezy.com/system/resources/previews/013/001/069/non_2x/a-woman-standing-under-sun-light-on-hot-weather-and-having-headache-sunstroke-concept-flat-illustration-vector.jpg" 
    },
    { 
      "question": "sun", 
      "answer": "soleil", 
      "pronunciation": "soh-ley", 
      "hint": "The bright star in our sky.", 
      "image": "https://static.vecteezy.com/system/resources/previews/035/665/146/non_2x/flat-illustration-of-cute-sun-cartoon-on-isolated-background-free-vector.jpg" 
    },
    { 
      "question": "rain", 
      "answer": "pluie", 
      "pronunciation": "plwee", 
      "hint": "Precipitation.", 
      "image": "https://static.vecteezy.com/system/resources/previews/072/829/601/non_2x/rain-cloud-icon-with-falling-raindrops-isolated-flat-cartoon-illustration-of-a-rainy-weather-forecast-vector.jpg" 
    },
    { 
      "question": "snow", 
      "answer": "neige", 
      "pronunciation": "nezh", 
      "hint": "White frozen flakes.", 
      "image": "https://img.magnific.com/free-vector/cute-snowflake-ice-cartoon-vector-icon-illustration-nature-object-icon-isolated-flat-vector_138676-11411.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "wind", 
      "answer": "vent", 
      "pronunciation": "vahn", 
      "hint": "Moving air outside.", 
      "image": "https://img.magnific.com/free-vector/bad-weather-city-funny-flat-composition-with-people-blown-off-their-feet-by-storm_1284-53820.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "cloud", 
      "answer": "nuage", 
      "pronunciation": "nwahzh", 
      "hint": "Fluffy objects in the sky.", 
      "image": "https://img.magnific.com/free-vector/flat-clouds-collection_23-2149019660.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "it is windy", 
      "answer": "il y a du vent", 
      "pronunciation": "eel ee ah doo vahn", 
      "hint": "Describing a gusty day.", 
      "image": "https://static.vecteezy.com/system/resources/thumbnails/070/511/395/small_2x/strong-wind-bending-green-tree-weather-tornado-concept-flat-illustration-on-white-background-vector.jpg" 
    }
  ]
},
  10: {
  "title": "Daily Conversation",
  "description": "Simple expressions used in casual everyday chat.",
  "questions": [
    { 
      "question": "what is your name?", 
      "answer": "comment t'appelles-tu", 
      "pronunciation": "koh-mahn tah-pel too", 
      "hint": "Asking someone's name.", 
      "image": "https://img.magnific.com/free-vector/flat-design-gender-pronouns-illustration_23-2150516857.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "my name is...", 
      "answer": "je m'appelle", 
      "pronunciation": "zhuh mah-pel", 
      "hint": "Introducing yourself.", 
      "image": "https://img.magnific.com/premium-vector/introducing-yourself-foreign-language-isolated-cartoon-vector-illustration_107173-19074.jpg" 
    },
    { 
      "question": "where is...?", 
      "answer": "où est", 
      "pronunciation": "oo eh", 
      "hint": "Asking for a location.", 
      "image": "https://static.vecteezy.com/system/resources/previews/026/571/659/non_2x/happy-woman-puts-location-pin-on-map-flat-concept-spot-illustration-traveler-selecting-place-for-vacation-2d-cartoon-character-on-white-for-web-ui-design-isolated-editable-creative-hero-image-vector.jpg" 
    },
    { 
      "question": "how much is it?", 
      "answer": "combien ça coûte", 
      "pronunciation": "kohm-byan sah koot", 
      "hint": "Asking for the price.", 
      "image": "https://img.magnific.com/free-vector/discount-tag-cartoon-vector-icon-illustration-shopping-object-icon-isolated-flat-vector_138676-17237.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "nice to meet you", 
      "answer": "enchanté", 
      "pronunciation": "ahn-shahn-tay", 
      "hint": "Said when meeting someone new.", 
      "image": "https://img.magnific.com/free-vector/two-men-shake-hands-with-each-other-isolated-white-background-meeting-greeting-friends-businessmen-deal-agreement-illustration-partnership-cooperation-communication_575670-2344.jpg" 
    },
    { 
      "question": "excuse me", 
      "answer": "excusez-moi", 
      "pronunciation": "ek-skew-zay mwah", 
      "hint": "Getting someone's attention politely.", 
      "image": "https://static.vecteezy.com/system/resources/thumbnails/001/307/896/small/cute-little-girl-with-board-of-excuse-me.jpg" 
    },
    { 
      "question": "I don't understand", 
      "answer": "je ne comprends pas", 
      "pronunciation": "zhuh nuh cohm-prahn pah", 
      "hint": "When you miss the meaning.", 
      "image": "https://img.magnific.com/free-vector/hand-drawn-shrug-illustration_23-2149318021.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "do you speak English?", 
      "answer": "parlez-vous anglais", 
      "pronunciation": "par-lay voo ahn-glay", 
      "hint": "Checking for language compatibility.", 
      "image": "https://img.magnific.com/premium-vector/concept-learning-italian-italian-language-course-language-school_677161-718.jpg?semt=ais_hybrid&w=740&q=80" 
    },
    { 
      "question": "help", 
      "answer": "au secours", 
      "pronunciation": "oh suh-koor", 
      "hint": "Shouted in an emergency.", 
      "image": "https://static.vecteezy.com/system/resources/previews/026/780/698/non_2x/first-aid-emergency-rescue-concept-colored-flat-illustration-isolated-vector.jpg" 
    },
    { 
      "question": "see you soon", 
      "answer": "à bientôt", 
      "pronunciation": "ah byan-toh", 
      "hint": "Saying bye when you will meet again quickly.", 
      "image": "https://media.istockphoto.com/id/2078557092/vector/happy-stickman-with-speech-bubble-bye-see-ya-see-you-soon-vector.jpg?s=612x612&w=0&k=20&c=9ru43nd2-iFTURAQ6CNeiNjIFMYNULVp0wZwK98WJ18=" 
    }
  ]
},
};