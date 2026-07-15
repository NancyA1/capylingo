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

export const japaneseLessons: Record<number, Lesson> = {
  1: {
    title: "Greetings",
    description: "Learn common Japanese greetings.",
    questions: [
      { question: "hello", answer: "konnichiwa", pronunciation: "kon-nee-chee-wah", hint: "The most common daytime greeting.", image: "greetings/hello.png" },
      { question: "goodbye", answer: "sayonara", pronunciation: "sah-yoh-nah-rah", hint: "Used when parting for a long time.", image: "greetings/goodbye.png" },
      { question: "thank you", answer: "arigatou", pronunciation: "ah-ree-gah-toh", hint: "Used to express gratitude.", image: "greetings/thankyou.png" },
      { question: "please", answer: "onegaishimasu", pronunciation: "oh-neh-guy-shee-mahs", hint: "A polite way to request something.", image: "greetings/please.png" },
      { question: "yes", answer: "hai", pronunciation: "high", hint: "Positive answer.", image: "greetings/yes.png" },
      { question: "no", answer: "iie", pronunciation: "ee-eh", hint: "Negative answer.", image: "greetings/no.png" },
      { question: "good morning", answer: "ohayou", pronunciation: "oh-hah-yoh", hint: "Morning greeting among friends.", image: "greetings/morning.png" },
      { question: "good evening", answer: "konbanwa", pronunciation: "kon-bahn-wah", hint: "Evening greeting.", image: "greetings/evening.png" },
      { question: "how are you?", answer: "ogenki desu ka", pronunciation: "oh-gen-kee dess kah", hint: "Ask someone if they are doing well.", image: "greetings/howareyou.png" },
      { question: "I am fine", answer: "genki desu", pronunciation: "gen-kee dess", hint: "Reply when you're doing well.", image: "greetings/fine.png" },
    ],
  },
  2: {
    title: "Animals",
    description: "Learn common animal names.",
    questions: [
      { question: "cat", answer: "neko", pronunciation: "neh-koh", hint: "A popular independent pet.", image: "animals/cat.png" },
      { question: "dog", answer: "inu", pronunciation: "ee-noo", hint: "Man's best friend.", image: "animals/dog.png" },
      { question: "bird", answer: "tori", pronunciation: "toh-ree", hint: "An animal that flies.", image: "animals/bird.png" },
      { question: "fish", answer: "sakana", pronunciation: "sah-kah-nah", hint: "Lives in water.", image: "animals/fish.png" },
      { question: "horse", answer: "uma", pronunciation: "oo-mah", hint: "Used for riding.", image: "animals/horse.png" },
      { question: "lion", answer: "raion", pronunciation: "rye-on", hint: "King of the jungle.", image: "animals/lion.png" },
      { question: "elephant", answer: "zou", pronunciation: "zoh", hint: "Largest land animal.", image: "animals/elephant.png" },
      { question: "rabbit", answer: "usagi", pronunciation: "oo-sah-gee", hint: "Has long ears and hops.", image: "animals/rabbit.png" },
      { question: "bear", answer: "kuma", pronunciation: "koo-mah", hint: "Large wild forest animal.", image: "animals/bear.png" },
      { question: "tiger", answer: "tora", pronunciation: "toh-rah", hint: "A striped wild cat.", image: "animals/tiger.png" },
    ],
  },
  3: {
    title: "Food",
    description: "Learn common food vocabulary.",
    questions: [
      { question: "apple", answer: "ringo", pronunciation: "reen-goh", hint: "A crisp, sweet fruit.", image: "food/apple.png" },
      { question: "bread", answer: "pan", pronunciation: "pahn", hint: "Borrowed from Portuguese, a basic baked flour food.", image: "food/bread.png" },
      { question: "water", answer: "mizu", pronunciation: "mee-zoo", hint: "Essential cold liquid for life.", image: "food/water.png" },
      { question: "milk", answer: "gyuunyuu", pronunciation: "gyoo-nyoo", hint: "White cow's dairy drink.", image: "food/milk.png" },
      { question: "rice", answer: "gohan", pronunciation: "go-hahn", hint: "A staple grain, also means 'meal'.", image: "food/rice.png" },
      { question: "chicken", answer: "toriniku", pronunciation: "toh-ree-nee-koo", hint: "Literally means 'bird meat'.", image: "food/chicken.png" },
      { question: "cheese", answer: "chiizu", pronunciation: "chee-zoo", hint: "A phonetic adaptation of the English word.", image: "food/cheese.png" },
      { question: "egg", answer: "tamago", pronunciation: "tah-mah-goh", hint: "Comes from a chicken.", image: "food/egg.png" },
      { question: "banana", answer: "banana", pronunciation: "bah-nah-nah", hint: "A long yellow fruit.", image: "food/banana.png" },
      { question: "coffee", answer: "koohii", pronunciation: "koh-hee", hint: "A popular hot caffeinated drink.", image: "food/coffee.png" },
    ],
  },
  4: {
    title: "Family",
    description: "Learn vocabulary for family members.",
    questions: [
      { question: "father", answer: "chichi", pronunciation: "chee-chee", hint: "How you refer to your own father.", image: "family/father.png" },
      { question: "mother", answer: "haha", pronunciation: "hah-hah", hint: "How you refer to your own mother.", image: "family/mother.png" },
      { question: "son", answer: "musuko", pronunciation: "moo-soo-koh", hint: "A male child.", image: "family/son.png" },
      { question: "daughter", answer: "musume", pronunciation: "moo-soo-meh", hint: "A female child.", image: "family/daughter.png" },
      { question: "brother", answer: "ani", pronunciation: "ah-nee", hint: "Specifically your own older brother.", image: "family/brother.png" },
      { question: "sister", answer: "ane", pronunciation: "ah-neh", hint: "Specifically your own older sister.", image: "family/sister.png" },
      { question: "grandfather", answer: "sofu", pronunciation: "soh-foo", hint: "Your parent's father.", image: "family/grandfather.png" },
      { question: "grandmother", answer: "sobo", pronunciation: "soh-boh", hint: "Your parent's mother.", image: "family/grandmother.png" },
      { question: "uncle", answer: "oji", pronunciation: "oh-jee", hint: "Your parent's brother.", image: "family/uncle.png" },
      { question: "aunt", answer: "oba", pronunciation: "oh-bah", hint: "Your parent's sister.", image: "family/aunt.png" },
    ],
  },
  5: {
    title: "Travel",
    description: "Useful words for navigating and traveling.",
    questions: [
      { question: "passport", answer: "pasupooto", pronunciation: "pah-soo-poh-toh", hint: "Official travel document.", image: "travel/passport.png" },
      { question: "hotel", answer: "hoteru", pronunciation: "hoh-teh-roo", hint: "A place to stay while traveling.", image: "travel/hotel.png" },
      { question: "train", answer: "densha", pronunciation: "den-shah", hint: "Electric railway train.", image: "travel/train.png" },
      { question: "plane", answer: "hikouki", pronunciation: "hee-koh-kee", hint: "Flies in the sky.", image: "travel/plane.png" },
      { question: "car", answer: "kuruma", pronunciation: "koo-roo-mah", hint: "A road vehicle.", image: "travel/car.png" },
      { question: "ticket", answer: "kippu", pronunciation: "keep-poo", hint: "Shows you paid for your train ride.", image: "travel/ticket.png" },
      { question: "airport", answer: "kuukou", pronunciation: "koo-koh", hint: "Where planes take off and land.", image: "travel/airport.png" },
      { question: "station", answer: "eki", pronunciation: "eh-kee", hint: "Where you catch a train or subway.", image: "travel/station.png" },
      { question: "baggage", answer: "nimotsu", pronunciation: "nee-moht-soo", hint: "Luggage or bags carried when traveling.", image: "travel/baggage.png" },
      { question: "map", answer: "chizu", pronunciation: "chee-zoo", hint: "A visual guide for navigation.", image: "travel/map.png" },
    ],
  },
  6: {
    title: "Colors",
    description: "Learn standard colors.",
    questions: [
      { question: "red", answer: "aka", pronunciation: "ah-kah", hint: "The color of ripe strawberries.", image: "colors/red.png" },
      { question: "blue", answer: "ao", pronunciation: "ow", hint: "The color of the sky or ocean.", image: "colors/blue.png" },
      { question: "green", answer: "midori", pronunciation: "mee-doh-ree", hint: "The color of lush grass.", image: "colors/green.png" },
      { question: "yellow", answer: "kiiro", pronunciation: "kee-ee-roh", hint: "The color of lemons.", image: "colors/yellow.png" },
      { question: "black", answer: "kuro", pronunciation: "koo-roh", hint: "The darkest color.", image: "colors/black.png" },
      { question: "white", answer: "shiro", pronunciation: "shee-roh", hint: "The color of clean snow.", image: "colors/white.png" },
      { question: "pink", answer: "pinku", pronunciation: "peen-koo", hint: "Phonetic adaptation of the English color.", image: "colors/pink.png" },
      { question: "orange", answer: "orenji", pronunciation: "oh-ren-jee", hint: "Same phonetic name as the fruit.", image: "colors/orange.png" },
      { question: "purple", answer: "murasaki", pronunciation: "moo-rah-sah-kee", hint: "The color of amethyst or grapes.", image: "colors/purple.png" },
      { question: "grey", answer: "haiiro", pronunciation: "high-ee-roh", hint: "Literally translates to 'ash color'.", image: "colors/grey.png" },
    ],
  },
  7: {
    title: "Numbers",
    description: "Learn to count from 1 to 10.",
    questions: [
      { question: "one", answer: "ichi", pronunciation: "ee-chee", hint: "The first counting number.", image: "numbers/1.png" },
      { question: "two", answer: "ni", pronunciation: "nee", hint: "1 + 1", image: "numbers/2.png" },
      { question: "three", answer: "san", pronunciation: "sahn", hint: "2 + 1", image: "numbers/3.png" },
      { question: "four", answer: "yon", pronunciation: "yohn", hint: "3 + 1 (also read as 'shi').", image: "numbers/4.png" },
      { question: "five", answer: "go", pronunciation: "goh", hint: "4 + 1", image: "numbers/5.png" },
      { question: "six", answer: "roku", pronunciation: "roh-koo", hint: "5 + 1", image: "numbers/6.png" },
      { question: "seven", answer: "nana", pronunciation: "nah-nah", hint: "6 + 1 (also read as 'shichi').", image: "numbers/7.png" },
      { question: "eight", answer: "hachi", pronunciation: "hah-chee", hint: "7 + 1", image: "numbers/8.png" },
      { question: "nine", answer: "kyuu", pronunciation: "kyoo", hint: "8 + 1", image: "numbers/9.png" },
      { question: "ten", answer: "juu", pronunciation: "joo", hint: "9 + 1", image: "numbers/10.png" },
    ],
  },
  8: {
    title: "Clothes",
    description: "Common items of clothing.",
    questions: [
      { question: "shirt", answer: "shatsu", pronunciation: "shah-tsoo", hint: "An upper-body clothing item.", image: "clothes/shirt.png" },
      { question: "pants", answer: "zubon", pronunciation: "zoo-bohn", hint: "Trousers worn on your legs.", image: "clothes/pants.png" },
      { question: "dress", answer: "wanpiisu", pronunciation: "wahn-pee-soo", hint: "From English 'one-piece'.", image: "clothes/dress.png" },
      { question: "shoes", answer: "kutsu", pronunciation: "koo-tsoo", hint: "Footwear.", image: "clothes/shoes.png" },
      { question: "hat", answer: "boushi", pronunciation: "boh-shee", hint: "Headwear to guard against sun or cold.", image: "clothes/hat.png" },
      { question: "coat", answer: "kooto", pronunciation: "koh-toh", hint: "Heavy outer layer for cold days.", image: "clothes/coat.png" },
      { question: "skirt", answer: "sukaato", pronunciation: "soo-kah-toh", hint: "Hangs from the waist downward.", image: "clothes/skirt.png" },
      { question: "socks", answer: "kutsushita", pronunciation: "koo-tsoo-shee-tah", hint: "Literally means 'below shoes'.", image: "clothes/socks.png" },
      { question: "jacket", answer: "jaketto", pronunciation: "jah-ket-toh", hint: "Light coat layer.", image: "clothes/jacket.png" },
      { question: "glasses", answer: "megane", pronunciation: "meh-gah-neh", hint: "Worn over eyes to improve vision.", image: "clothes/glasses.png" },
    ],
  },
  9: {
    title: "Weather",
    description: "Phrases to describe daily weather conditions.",
    questions: [
      { question: "it is sunny", answer: "hare desu", pronunciation: "hah-reh dess", hint: "Clear or fair weather skies.", image: "weather/sunny.png" },
      { question: "it is raining", answer: "ame desu", pronunciation: "ah-meh dess", hint: "Precipitation dropping.", image: "weather/raining.png" },
      { question: "it is cold", answer: "samui desu", pronunciation: "sah-moo-ee dess", hint: "Low atmospheric temperature context.", image: "weather/cold.png" },
      { question: "it is hot", answer: "atsui desu", pronunciation: "ah-tsoo-ee dess", hint: "High climate temperature.", image: "weather/hot.png" },
      { question: "sun", answer: "taiyou", pronunciation: "tie-yoh", hint: "The main solar body.", image: "weather/sun.png" },
      { question: "rain", answer: "ame", pronunciation: "ah-meh", hint: "Water falling from storm clouds.", image: "weather/rain.png" },
      { question: "snow", answer: "yuki", pronunciation: "yoo-kee", hint: "Frozen white precipitation.", image: "weather/snow.png" },
      { question: "wind", answer: "kaze", pronunciation: "kah-zeh", hint: "Moving breeze outside.", image: "weather/wind.png" },
      { question: "cloud", answer: "kumo", pronunciation: "koo-moh", hint: "Vapor formations in the sky.", image: "weather/cloud.png" },
      { question: "it is windy", answer: "kaze ga tsuyoi", pronunciation: "kah-zeh gah tsoo-yoy", hint: "Literally means 'the wind is strong'.", image: "weather/windy.png" },
    ],
  },
  10: {
    title: "Daily Conversation",
    description: "Simple expressions used in casual everyday chat.",
    questions: [
      { question: "what is your name?", answer: "onamae wa nan desu ka", pronunciation: "oh-nah-mah-eh wah nahn dess kah", hint: "Inquiring about identity.", image: "conversation/name.png" },
      { question: "my name is...", answer: "to moushimasu", pronunciation: "toh moh-shee-mahs", hint: "Polite template phrase to state your identity.", image: "conversation/myname.png" },
      { question: "where is...?", answer: "wa doko desu ka", pronunciation: "wah doh-koh dess kah", hint: "Inquiring about locations.", image: "conversation/whereis.png" },
      { question: "how much is it?", answer: "ikura desu ka", pronunciation: "ee-koo-rah dess kah", hint: "Asking price at a market.", image: "conversation/price.png" },
      { question: "nice to meet you", answer: "hajimemashite", pronunciation: "hah-jee-meh-mah-shee-teh", hint: "Said right at the beginning of a fresh introduction.", image: "conversation/nicetomeetyou.png" },
      { question: "excuse me", answer: "sumimasen", pronunciation: "soo-mee-mah-sen", hint: "Highly versatile word for attention or minor apology.", image: "conversation/excuseme.png" },
      { question: "I don't understand", answer: "wakarimasen", pronunciation: "wah-kah-ree-mah-sen", hint: "When you do not grasp meaning or intent.", image: "conversation/dontunderstand.png" },
      { question: "do you speak English?", answer: "eigo ga hanasemasu ka", pronunciation: "ay-goh gah hah-nah-seh-mahs kah", hint: "Checking fallback language capacity.", image: "conversation/speakenglish.png" },
      { question: "help", answer: "tasukete", pronunciation: "tah-soo-keh-teh", hint: "Urgent call for aid.", image: "conversation/help.png" },
      { question: "see you soon", answer: "mata ne", pronunciation: "mah-tah neh", hint: "Casual parting note with peers.", image: "conversation/seeyousoon.png" },
    ],
  },
};