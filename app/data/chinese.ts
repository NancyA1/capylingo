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

export const chineseLessons: Record<number, Lesson> = {
  1: {
    title: "Greetings",
    description: "Learn common Chinese greetings.",
    questions: [
      { 
        question: "hello", 
        answer: "nǐ hǎo", 
        pronunciation: "nee how", 
        hint: "The most common everyday greeting.", 
        image: "https://static.vecteezy.com/system/resources/previews/059/555/037/non_2x/happy-young-women-greeting-waving-with-hand-hello-gesture-joyful-communication-flat-vector.jpg" 
      },
      { 
        question: "goodbye", 
        answer: "zàijiàn", 
        pronunciation: "dzigh-jee-en", 
        hint: "Literally means 'meet again'.", 
        image: "https://static.vecteezy.com/system/resources/previews/059/681/523/non_2x/flat-cartoon-illustration-of-a-happy-schoolboy-waving-goodbye-ready-for-school-free-vector.jpg" 
      },
      { 
        question: "thank you", 
        answer: "xièxie", 
        pronunciation: "shyeh-shyeh", 
        hint: "Used to express gratitude.", 
        image: "https://static.vecteezy.com/system/resources/previews/006/013/201/non_2x/grateful-people-saying-thank-you-man-and-woman-keeping-hands-on-chest-expresses-gratitude-being-thankful-for-help-and-support-flat-illustration-vector.jpg" 
      },
      { 
        question: "please", 
        answer: "qǐng", 
        pronunciation: "cheeng", 
        hint: "Polite word placed before an action or request.", 
        image: "https://img.magnific.com/free-vector/flat-design-please-illustration_23-2150187480.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "yes", 
        answer: "shì de", 
        pronunciation: "shir duh", 
        hint: "Positive confirmation or agreement.", 
        image: "https://static.vecteezy.com/system/resources/thumbnails/047/526/915/small_2x/yes-check-mark-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "no", 
        answer: "bú shì", 
        pronunciation: "boo shirr", 
        hint: "Negative answer, literally 'is not'.", 
        image: "https://img.magnific.com/free-vector/stressed-man-holding-his-head_1308-171901.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "good morning", 
        answer: "zǎoshang hǎo", 
        pronunciation: "dzow-shahng how", 
        hint: "Morning greeting.", 
        image: "https://media.istockphoto.com/id/97403299/vector/rooster-standing-on-fence-post-crowing-as-the-sun-rises.jpg?s=612x612&w=0&k=20&c=wBTNcEvEL5R4Q_inMmIuJ-luoU_XqYztMXEgu_JuoSs=" 
      },
      { 
        question: "good evening", 
        answer: "wǎnshang hǎo", 
        pronunciation: "wahn-shahng how", 
        hint: "Evening greeting.", 
        image: "https://media.istockphoto.com/id/1258106839/vector/panorama-of-sea-sunset-or-ocean-sunrise-vector-illustration-of-water-and-sky-horizon-sun.jpg?s=612x612&w=0&k=20&c=u1vE5Og2e7QioYzssdceoLPl9xlwSHT0yOK4tVMeHLI=" 
      },
      { 
        question: "how are you?", 
        answer: "nǐ hǎo ma", 
        pronunciation: "nee how mah", 
        hint: "Adding 'ma' to hello turns it into a question.", 
        image: "https://static.vecteezy.com/system/resources/thumbnails/007/685/789/small/young-smiling-cheerful-people-of-different-nationalities-colleagues-or-friends-wave-their-hand-in-a-friendly-greeting-flat-illustration-isolated-on-white-free-vector.jpg" 
      },
      { 
        question: "I am fine", 
        answer: "wǒ hěn hǎo", 
        pronunciation: "waw hun how", 
        hint: "Literally translates to 'I very well'.", 
        image: "https://media.istockphoto.com/id/1390284387/vector/smiling-confident-businessman-with-thumbs-up-gesture-successful-man-best-choice-retro-pop.jpg?s=612x612&w=0&k=20&c=ybAGm5li_rur79kEGi6ClgnMLpX4kaeKKWP-im--UhQ=" 
      },
    ],
  },
  2: {
    title: "Animals",
    description: "Learn common animal names.",
    questions: [
      { 
        question: "cat", 
        answer: "māo", 
        pronunciation: "maow", 
        hint: "Sounds a bit like the sound a cat makes.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/563/128/non_2x/illustration-of-a-cute-cartoon-cat-free-vector.jpg" 
      },
      { 
        question: "dog", 
        answer: "gǒu", 
        pronunciation: "goh", 
        hint: "Man's best friend.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/048/207/non_2x/cute-dog-cartoon-free-vector.jpg" 
      },
      { 
        question: "bird", 
        answer: "niǎo", 
        pronunciation: "nyee-ow", 
        hint: "An animal that flies.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/904/004/non_2x/cute-blue-bird-cartoon-flying-vector.jpg" 
      },
      { 
        question: "fish", 
        answer: "yú", 
        pronunciation: "yoo", 
        hint: "Lives in water.", 
        image: "https://static.vecteezy.com/system/resources/previews/022/990/698/non_2x/aquarium-goldfish-swimming-isolated-cartoon-flat-illustration-vector.jpg" 
      },
      { 
        question: "horse", 
        answer: "mǎ", 
        pronunciation: "mah", 
        hint: "Used for riding; watch the low dip tone.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/850/665/non_2x/cute-brown-horse-cartoon-free-vector.jpg" 
      },
      { 
        question: "lion", 
        answer: "shīzi", 
        pronunciation: "shirr-dzuh", 
        hint: "King of the jungle.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/502/215/non_2x/cute-lion-cartoon-free-vector.jpg" 
      },
      { 
        question: "elephant", 
        answer: "dàxiàng", 
        pronunciation: "dah-shyahng", 
        hint: "Literally translates to 'big shape'.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/223/151/non_2x/cute-elephant-cartoon-character-free-vector.jpg" 
      },
      { 
        question: "rabbit", 
        answer: "tùzi", 
        pronunciation: "too-dzuh", 
        hint: "Has long ears and loves carrots.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/042/355/non_2x/cute-rabbit-cartoon-free-vector.jpg" 
      },
      { 
        question: "bear", 
        answer: "xióng", 
        pronunciation: "shyong", 
        hint: "Large wild mammal.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/982/100/non_2x/cute-brown-bear-cartoon-character-illustration-free-vector.jpg" 
      },
      { 
        question: "tiger", 
        answer: "lǎohǔ", 
        pronunciation: "low-hoo", 
        hint: "A powerful, striped wild cat.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/502/162/non_2x/cute-tiger-cartoon-free-vector.jpg" 
      },
    ],
  },
  3: {
    title: "Food",
    description: "Learn common food vocabulary.",
    questions: [
      { 
        question: "apple", 
        answer: "píngguǒ", 
        pronunciation: "peeng-gwaw", 
        hint: "A popular crisp, round fruit.", 
        image: "https://static.vecteezy.com/system/resources/previews/013/442/215/non_2x/red-apple-fruit-isolated-clipart-design-vector.jpg" 
      },
      { 
        question: "bread", 
        answer: "miànbāo", 
        pronunciation: "myen-baow", 
        hint: "A basic baked flour food stuff.", 
        image: "https://static.vecteezy.com/system/resources/previews/009/384/620/non_2x/fresh-bread-clipart-design-free-vector.jpg" 
      },
      { 
        question: "water", 
        answer: "shuǐ", 
        pronunciation: "shway", 
        hint: "The fluid essential for survival.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/846/non_2x/drinking-water-glass-clipart-free-vector.jpg" 
      },
      { 
        question: "milk", 
        answer: "niúnǎi", 
        pronunciation: "nyoh-nigh", 
        hint: "Literally means 'cow milk'.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/506/110/non_2x/milk-box-packaging-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "rice", 
        answer: "mǐfàn", 
        pronunciation: "mee-fahn", 
        hint: "Cooked white grains; a massive staple.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/137/747/non_2x/white-rice-in-bowl-cooked-rice-free-vector.jpg" 
      },
      { 
        question: "chicken", 
        answer: "jīròu", 
        pronunciation: "jee-roh-oo", 
        hint: "Literally means 'chicken meat'.", 
        image: "https://static.vecteezy.com/system/resources/previews/009/393/587/non_2x/fried-chicken-clipart-design-free-vector.jpg" 
      },
      { 
        question: "cheese", 
        answer: "qǐsī", 
        pronunciation: "chee-suh", 
        hint: "A dairy product made from milk curds.", 
        image: "https://static.vecteezy.com/system/resources/previews/012/612/125/non_2x/cute-cheese-cartoon-isolated-illustration-vector.jpg" 
      },
      { 
        question: "egg", 
        answer: "jīdàn", 
        pronunciation: "jee-dahn", 
        hint: "Literally means 'chicken egg'.", 
        image: "https://static.vecteezy.com/system/resources/previews/019/527/103/non_2x/fried-egg-clipart-design-free-vector.jpg" 
      },
      { 
        question: "banana", 
        answer: "xiāngjiāo", 
        pronunciation: "shyahng-jyaow", 
        hint: "Long, yellow curved fruit.", 
        image: "https://static.vecteezy.com/system/resources/previews/013/442/201/non_2x/yellow-banana-fruit-isolated-clipart-design-vector.jpg" 
      },
      { 
        question: "coffee", 
        answer: "kāfēi", 
        pronunciation: "kah-fay", 
        hint: "A direct phonetic loanword for the hot drink.", 
        image: "https://static.vecteezy.com/system/resources/previews/022/910/243/non_2x/coffee-cup-flat-icon-free-vector.jpg" 
      },
    ],
  },
  4: {
    title: "Family",
    description: "Learn vocabulary for family members.",
    questions: [
      { 
        question: "father", 
        answer: "bàba", 
        pronunciation: "bah-bah", 
        hint: "Informal, direct way to say dad.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/790/583/non_2x/portrait-of-a-smiling-middle-aged-man-avatar-of-a-happy-businessman-flat-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "mother", 
        answer: "māma", 
        pronunciation: "mah-mah", 
        hint: "Informal, direct way to say mom.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/790/538/non_2x/portrait-of-a-young-beautiful-woman-avatar-of-a-happy-girl-flat-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "son", 
        answer: "érzi", 
        pronunciation: "uhr-dzuh", 
        hint: "A male offspring.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/790/575/non_2x/portrait-of-a-cheerful-little-boy-avatar-of-a-happy-schoolboy-flat-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "daughter", 
        answer: "nǚ'ér", 
        pronunciation: "nwee-uhr", 
        hint: "A female offspring.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/790/563/non_2x/portrait-of-a-cheerful-little-girl-avatar-of-a-happy-schoolgirl-flat-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "brother", 
        answer: "xiōngdì", 
        pronunciation: "shyong-dee", 
        hint: "General term covering brothers.", 
        image: "https://static.vecteezy.com/system/resources/previews/002/097/990/non_2x/two-boys-brothers-hugging-and-smiling-vector.jpg" 
      },
      { 
        question: "sister", 
        answer: "jiěmèi", 
        pronunciation: "jyeh-may", 
        hint: "General term covering sisters.", 
        image: "https://static.vecteezy.com/system/resources/previews/003/602/476/non_2x/loving-elder-and-younger-sisters-hugging-and-standing-together-vector.jpg" 
      },
      { 
        question: "grandfather", 
        answer: "yéye", 
        pronunciation: "yeh-yeh", 
        hint: "Your father's father.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/790/566/non_2x/portrait-of-a-happy-grandpa-avatar-of-a-smiling-grandfather-flat-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "grandmother", 
        answer: "nǎinai", 
        pronunciation: "nigh-nigh", 
        hint: "Your father's mother.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/790/556/non_2x/portrait-of-a-happy-grandma-avatar-of-a-smiling-grandmother-flat-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "uncle", 
        answer: "shūshu", 
        pronunciation: "shoo-shoo", 
        hint: "Father's younger brother, or general polite title for older men.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/790/585/non_2x/portrait-of-a-middle-aged-man-avatar-with-eyeglasses-flat-cartoon-illustration-vector.jpg" 
      },
      { 
        question: "aunt", 
        answer: "āyí", 
        pronunciation: "ah-yee", 
        hint: "Mother's sister, or general friendly title for older women.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/790/564/non_2x/portrait-of-a-smiling-middle-aged-woman-with-glasses-flat-cartoon-illustration-vector.jpg" 
      },
    ],
  },
  5: {
    title: "Travel",
    description: "Useful words for navigating and traveling.",
    questions: [
      { 
        question: "passport", 
        answer: "hùzhào", 
        pronunciation: "hoo-jaow", 
        hint: "Essential cross-border identity book.", 
        image: "https://static.vecteezy.com/system/resources/previews/013/164/594/non_2x/passport-icon-flat-style-vector.jpg" 
      },
      { 
        question: "hotel", 
        answer: "jiǔdiàn", 
        pronunciation: "jyoh-dyen", 
        hint: "Literally means 'wine palace'.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/641/141/non_2x/hotel-building-cartoon-vector.jpg" 
      },
      { 
        question: "train", 
        answer: "huǒchē", 
        pronunciation: "hwaw-chuh", 
        hint: "Literally means 'fire vehicle'.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/014/115/non_2x/train-railway-isolated-on-white-cartoon-vector.jpg" 
      },
      { 
        question: "plane", 
        answer: "fēijī", 
        pronunciation: "fay-jee", 
        hint: "Literally means 'flying machine'.", 
        image: "https://static.vecteezy.com/system/resources/previews/010/890/292/non_2x/cartoon-passenger-airplane-vector.jpg" 
      },
      { 
        question: "car", 
        answer: "qìchē", 
        pronunciation: "chee-chuh", 
        hint: "Literally means 'steam/gas vehicle'.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/568/887/non_2x/cute-blue-car-cartoon-vector.jpg" 
      },
      { 
        question: "ticket", 
        answer: "piào", 
        pronunciation: "pyaow", 
        hint: "Paper or digital voucher showing entry admission.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/920/190/non_2x/illustration-of-two-retro-tickets-isolated-on-white-vector.jpg" 
      },
      { 
        question: "airport", 
        answer: "jīchǎng", 
        pronunciation: "jee-chahng", 
        hint: "Literally means 'machine yard'.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/720/192/non_2x/airport-terminal-exterior-vector.jpg" 
      },
      { 
        question: "station", 
        answer: "chēzhàn", 
        pronunciation: "chuh-jahn", 
        hint: "Vehicle stop area for trains or buses.", 
        image: "https://static.vecteezy.com/system/resources/previews/011/712/868/non_2x/bus-station-building-cartoon-icon-vector.jpg" 
      },
      { 
        question: "baggage", 
        answer: "xíngli", 
        pronunciation: "sheeng-lee", 
        hint: "Luggage items carried along the way.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/850/644/non_2x/traveling-suitcases-isolated-cartoon-style-vector.jpg" 
      },
      { 
        question: "map", 
        answer: "dìtú", 
        pronunciation: "dee-too", 
        hint: "Literally means 'earth drawing'.", 
        image: "https://static.vecteezy.com/system/resources/previews/010/825/258/non_2x/folded-paper-map-flat-icon-vector.jpg" 
      },
    ],
  },
  6: {
    title: "Colors",
    description: "Learn standard colors.",
    questions: [
      { 
        question: "red", 
        answer: "hóngsè", 
        pronunciation: "hoong-suh", 
        hint: "The color of luck, celebration, and strawberries.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/399/non_2x/watercolor-red-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "blue", 
        answer: "lánsè", 
        pronunciation: "lahn-suh", 
        hint: "The color of clear skies.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/401/non_2x/watercolor-blue-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "green", 
        answer: "lǜsè", 
        pronunciation: "lwee-suh", 
        hint: "The color of vibrant trees.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/402/non_2x/watercolor-green-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "yellow", 
        answer: "huángsè", 
        pronunciation: "hwahng-suh", 
        hint: "The color of bananas.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/403/non_2x/watercolor-yellow-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "black", 
        answer: "hēisè", 
        pronunciation: "hay-suh", 
        hint: "The ultimate dark color.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/404/non_2x/watercolor-black-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "white", 
        answer: "báisè", 
        pronunciation: "by-suh", 
        hint: "The color of fresh snow.", 
        image: "https://static.vecteezy.com/system/resources/previews/011/714/409/non_2x/watercolor-white-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "pink", 
        answer: "fěnhóngsè", 
        pronunciation: "fun-hoong-suh", 
        hint: "Literally means 'powder red'.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/396/non_2x/watercolor-pink-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "orange", 
        answer: "chéngsè", 
        pronunciation: "chung-suh", 
        hint: "Named directly after the fruit.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/397/non_2x/watercolor-orange-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "purple", 
        answer: "zǐsè", 
        pronunciation: "dzuh-suh", 
        hint: "The color of eggplants or grapes.", 
        image: "https://static.vecteezy.com/system/resources/previews/008/174/398/non_2x/watercolor-purple-splash-isolated-free-vector.jpg" 
      },
      { 
        question: "grey", 
        answer: "huīsè", 
        pronunciation: "hway-suh", 
        hint: "Literally means 'ash color'.", 
        image: "https://static.vecteezy.com/system/resources/previews/010/893/588/non_2x/watercolor-grey-splash-isolated-free-vector.jpg" 
      },
    ],
  },
  7: {
    title: "Numbers",
    description: "Learn to count from 1 to 10.",
    questions: [
      { 
        question: "one", 
        answer: "yī", 
        pronunciation: "yee", 
        hint: "A simple horizontal line character.", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/125/non_2x/cute-number-one-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "two", 
        answer: "èr", 
        pronunciation: "uhr", 
        hint: "1 + 1", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/126/non_2x/cute-number-two-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "three", 
        answer: "sān", 
        pronunciation: "sahn", 
        hint: "2 + 1", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/133/non_2x/cute-number-three-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "four", 
        answer: "sì", 
        pronunciation: "srr", 
        hint: "3 + 1 (watch the dropping tone).", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/135/non_2x/cute-number-four-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "five", 
        answer: "wǔ", 
        pronunciation: "woo", 
        hint: "4 + 1", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/140/non_2x/cute-number-five-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "six", 
        answer: "liù", 
        pronunciation: "lyoh", 
        hint: "5 + 1", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/145/non_2x/cute-number-six-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "seven", 
        answer: "qī", 
        pronunciation: "chee", 
        hint: "6 + 1", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/147/non_2x/cute-number-seven-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "eight", 
        answer: "bā", 
        pronunciation: "bah", 
        hint: "The ultimate lucky number symbol in China.", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/148/non_2x/cute-number-eight-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "nine", 
        answer: "jiǔ", 
        pronunciation: "jyoh", 
        hint: "8 + 1", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/149/non_2x/cute-number-nine-cartoon-isolated-vector.jpg" 
      },
      { 
        question: "ten", 
        answer: "shí", 
        pronunciation: "shir", 
        hint: "Looks exactly like a plus sign.", 
        image: "https://static.vecteezy.com/system/resources/previews/011/299/151/non_2x/cute-number-ten-cartoon-isolated-vector.jpg" 
      },
    ],
  },
  8: {
    title: "Clothes",
    description: "Common items of clothing.",
    questions: [
      { 
        question: "shirt", 
        answer: "chènshān", 
        pronunciation: "chuhn-shahn", 
        hint: "Buttoned formal or casual topwear.", 
        image: "https://static.vecteezy.com/system/resources/previews/019/912/866/non_2x/shirt-isolated-on-white-background-free-vector.jpg" 
      },
      { 
        question: "pants", 
        answer: "kùzi", 
        pronunciation: "koo-dzuh", 
        hint: "Garments covering the lower limbs.", 
        image: "https://static.vecteezy.com/system/resources/previews/022/990/694/non_2x/illustration-of-trouser-isolated-on-white-flat-cartoon-vector.jpg" 
      },
      { 
        question: "dress", 
        answer: "liányīqún", 
        pronunciation: "lyen-ee-chween", 
        hint: "Literally means 'connected shirt skirt'.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/796/099/non_2x/red-dress-cartoon-illustration-isolated-on-white-background-free-vector.jpg" 
      },
      { 
        question: "shoes", 
        answer: "xiézi", 
        pronunciation: "shyeh-dzuh", 
        hint: "Worn over socks for walking outside.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/568/888/non_2x/running-shoes-cartoon-vector.jpg" 
      },
      { 
        question: "hat", 
        answer: "màozi", 
        pronunciation: "maow-dzuh", 
        hint: "Worn over your head.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/568/901/non_2x/cute-winter-hat-cartoon-vector.jpg" 
      },
      { 
        question: "coat", 
        answer: "dàyī", 
        pronunciation: "dah-yee", 
        hint: "Literally means 'big clothing'.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/568/905/non_2x/yellow-winter-coat-cartoon-vector.jpg" 
      },
      { 
        question: "skirt", 
        answer: "qúnzi", 
        pronunciation: "chween-dzuh", 
        hint: "Waist down free-hanging garment.", 
        image: "https://static.vecteezy.com/system/resources/previews/019/912/864/non_2x/skirt-isolated-on-white-background-free-vector.jpg" 
      },
      { 
        question: "socks", 
        answer: "wàzi", 
        pronunciation: "wah-dzuh", 
        hint: "Worn directly on your feet inside footwear.", 
        image: "https://static.vecteezy.com/system/resources/previews/005/568/915/non_2x/cute-socks-cartoon-vector.jpg" 
      },
      { 
        question: "jacket", 
        answer: "jiákè", 
        pronunciation: "jyah-kuh", 
        hint: "A direct phonetic loanword for a zip-up layer.", 
        image: "https://static.vecteezy.com/system/resources/previews/004/850/668/non_2x/green-winter-jacket-cartoon-vector.jpg" 
      },
      { 
        question: "glasses", 
        answer: "yǎnjìng", 
        pronunciation: "yen-jeeng", 
        hint: "Worn over eyes to improve vision acuity.", 
        image: "https://static.vecteezy.com/system/resources/previews/009/393/639/non_2x/glasses-clipart-design-free-vector.jpg" 
      },
    ],
  },
  9: {
    title: "Weather",
    description: "Phrases to describe daily weather conditions.",
    questions: [
      { 
        question: "it is sunny", 
        answer: "qíngtiān", 
        pronunciation: "cheeng-tyen", 
        hint: "Clear day full of warm blue skies.", 
        image: "https://img.magnific.com/free-vector/flat-design-landscape_23-2149141016.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "it is raining", 
        answer: "xiàyǔ", 
        pronunciation: "shyah-yoo", 
        hint: "Literally means 'falling rain'.", 
        image: "https://img.magnific.com/free-vector/happy-woman-walking-rainy-day-with-umbrella-isolated-flat-vector-illustration-cartoon-female-character-being-outdoors-autumn-rain-landscape-weather-concept_74855-10087.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "it is cold", 
        answer: "hěn lěng", 
        pronunciation: "hun lung", 
        hint: "Low environmental temperatures.", 
        image: "https://img.magnific.com/premium-vector/cold-woman-character-feeling-freezing-winter-weather-vector-flat-cartoon-illustration_357257-2124.jpg" 
      },
      { 
        question: "it is hot", 
        answer: "hěn rè", 
        pronunciation: "hun ruh", 
        hint: "High oppressive environmental temperatures.", 
        image: "https://static.vecteezy.com/system/resources/previews/013/001/069/non_2x/a-woman-standing-under-sun-light-on-hot-weather-and-having-headache-sunstroke-concept-flat-illustration-vector.jpg" 
      },
      { 
        question: "sun", 
        answer: "tàiyáng", 
        pronunciation: "tie-yahng", 
        hint: "The cosmic solar star body.", 
        image: "https://static.vecteezy.com/system/resources/previews/035/665/146/non_2x/flat-illustration-of-cute-sun-cartoon-on-isolated-background-free-vector.jpg" 
      },
      { 
        question: "rain", 
        answer: "yǔ", 
        pronunciation: "yoo", 
        hint: "Liquid drops descending from skies.", 
        image: "https://static.vecteezy.com/system/resources/previews/072/829/601/non_2x/rain-cloud-icon-with-falling-raindrops-isolated-flat-cartoon-illustration-of-a-rainy-weather-forecast-vector.jpg" 
      },
      { 
        question: "snow", 
        answer: "xuě", 
        pronunciation: "shweh", 
        hint: "Frozen crystalline water drops.", 
        image: "https://img.magnific.com/free-vector/cute-snowflake-ice-cartoon-vector-icon-illustration-nature-object-icon-isolated-flat-vector_138676-11411.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "wind", 
        answer: "fēng", 
        pronunciation: "fung", 
        hint: "Sweeping atmospheric breezes.", 
        image: "https://img.magnific.com/free-vector/bad-weather-city-funny-flat-composition-with-people-blown-off-their-feet-by-storm_1284-53820.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "cloud", 
        answer: "yún", 
        pronunciation: "yoon", 
        hint: "Condensation vapor clusters in the skies.", 
        image: "https://img.magnific.com/free-vector/flat-clouds-collection_23-2149019660.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "it is windy", 
        answer: "guāfēng", 
        pronunciation: "gwah-fung", 
        hint: "Literally means 'scraping/blowing wind'.", 
        image: "https://static.vecteezy.com/system/resources/thumbnails/070/511/395/small_2x/strong-wind-bending-green-tree-weather-tornado-concept-flat-illustration-on-white-background-vector.jpg" 
      },
    ],
  },
  10: {
    title: "Daily Conversation",
    description: "Simple expressions used in casual everyday chat.",
    questions: [
      { 
        question: "what is your name?", 
        answer: "nǐ jiào shénme míngzi", 
        pronunciation: "nee jyaow shuhn-muh meeng-dzuh", 
        hint: "Asking someone how they are called.", 
        image: "https://img.magnific.com/free-vector/flat-design-gender-pronouns-illustration_23-2150516857.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "my name is...", 
        answer: "wǒ jiào", 
        pronunciation: "waw jyaow", 
        hint: "Stating your identity, literally 'I am called'.", 
        image: "https://img.magnific.com/premium-vector/introducing-yourself-foreign-language-isolated-cartoon-vector-illustration_107173-19074.jpg" 
      },
      { 
        question: "where is...?", 
        answer: "zài nǎlǐ", 
        pronunciation: "dzigh nah-lee", 
        hint: "Locating syntax added after an object.", 
        image: "https://static.vecteezy.com/system/resources/previews/026/571/659/non_2x/happy-woman-puts-location-pin-on-map-flat-concept-spot-illustration-traveler-selecting-place-for-vacation-2d-cartoon-character-on-white-for-web-ui-design-isolated-editable-creative-hero-image-vector.jpg" 
      },
      { 
        question: "how much is it?", 
        answer: "duōshao qián", 
        pronunciation: "dwaw-shaow chyen", 
        hint: "Asking for market values/prices.", 
        image: "https://img.magnific.com/free-vector/discount-tag-cartoon-vector-icon-illustration-shopping-object-icon-isolated-flat-vector_138676-17237.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "nice to meet you", 
        answer: "hěn gāoxìng rènshi nǐ", 
        pronunciation: "hun gaow-sheeng ruhn-shirr nee", 
        hint: "Literally 'Very happy to know you'.", 
        image: "https://img.magnific.com/free-vector/two-men-shake-hands-with-each-other-isolated-white-background-meeting-greeting-friends-businessmen-deal-agreement-illustration-partnership-cooperation-communication_575670-2344.jpg" 
      },
      { 
        question: "excuse me", 
        answer: "qǐngwèn", 
        pronunciation: "cheeng-wuhn", 
        hint: "Literally means 'please ask', used to grab attention before asking a question.", 
        image: "https://static.vecteezy.com/system/resources/thumbnails/001/307/896/small/cute-little-girl-with-board-of-excuse-me.jpg" 
      },
      { 
        question: "I don't understand", 
        answer: "wǒ bù dǒng", 
        pronunciation: "waw boo doong", 
        hint: "Stating your lack of clarity.", 
        image: "https://img.magnific.com/free-vector/hand-drawn-shrug-illustration_23-2149318021.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "do you speak English?", 
        answer: "nǐ huì shuō yīnyǔ ma", 
        pronunciation: "nee hway shwaw yeeng-yoo mah", 
        hint: "Inquiring about English-speaking capability.", 
        image: "https://img.magnific.com/premium-vector/concept-learning-italian-italian-language-course-language-school_677161-718.jpg?semt=ais_hybrid&w=740&q=80" 
      },
      { 
        question: "help", 
        answer: "jiùmìng", 
        pronunciation: "jyoh-meeng", 
        hint: "Urgent shout for life-saving help.", 
        image: "https://static.vecteezy.com/system/resources/previews/026/780/698/non_2x/first-aid-emergency-rescue-concept-colored-flat-illustration-isolated-vector.jpg" 
      },
      { 
        question: "see you soon", 
        answer: "huítóu jiàn", 
        pronunciation: "hway-toh jee-en", 
        hint: "See you soon.", 
        image: "https://media.istockphoto.com/id/2078557092/vector/happy-stickman-with-speech-bubble-bye-see-ya-see-you-soon-vector.jpg?s=612x612&w=0&k=20&c=9ru43nd2-iFTURAQ6CNeiNjIFMYNULVp0wZwK98WJ18=" 
      },
    ],
  },
};