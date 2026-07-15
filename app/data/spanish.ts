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

export const spanishLessons: Record<number, Lesson> = {
  1: {
    title: "Greetings",
    description: "Learn common Spanish greetings.",
    questions: [
      { question: "hello", answer: "hola", pronunciation: "oh-lah", hint: "The most common Spanish greeting.", image: "greetings/hello.png" },
      { question: "goodbye", answer: "adiós", pronunciation: "ah-dyohss", hint: "Used when leaving someone.", image: "greetings/goodbye.png" },
      { question: "thank you", answer: "gracias", pronunciation: "grah-syahss", hint: "Used to express gratitude.", image: "greetings/thankyou.png" },
      { question: "please", answer: "por favor", pronunciation: "por fah-vor", hint: "A polite phrase when asking for something.", image: "greetings/please.png" },
      { question: "yes", answer: "sí", pronunciation: "see", hint: "Positive answer.", image: "greetings/yes.png" },
      { question: "no", answer: "no", pronunciation: "noh", hint: "Negative answer.", image: "greetings/no.png" },
      { question: "good morning", answer: "buenos días", pronunciation: "bweh-nohss deeyahss", hint: "Morning greeting.", image: "greetings/morning.png" },
      { question: "good evening", answer: "buenas noches", pronunciation: "bweh-nahss noh-chehss", hint: "Evening or night greeting.", image: "greetings/evening.png" },
      { question: "how are you?", answer: "cómo estás", pronunciation: "koh-moh ehss-tahss", hint: "Ask someone how they are doing.", image: "greetings/howareyou.png" },
      { question: "I am fine", answer: "estoy bien", pronunciation: "ehss-toy byehn", hint: "Reply when you're doing well.", image: "greetings/fine.png" },
    ],
  },
  2: {
    title: "Animals",
    description: "Learn common animal names.",
    questions: [
      { question: "cat", answer: "gato", pronunciation: "gah-toh", hint: "A popular, independent pet.", image: "animals/cat.png" },
      { question: "dog", answer: "perro", pronunciation: "peh-rroh", hint: "Man's best friend.", image: "animals/dog.png" },
      { question: "bird", answer: "pájaro", pronunciation: "pah-khah-roh", hint: "An animal that flies.", image: "animals/bird.png" },
      { question: "fish", answer: "pez", pronunciation: "pehss", hint: "Lives in water (while alive).", image: "animals/fish.png" },
      { question: "horse", answer: "caballo", pronunciation: "kah-bah-yoh", hint: "Used for riding and farm work.", image: "animals/horse.png" },
      { question: "lion", answer: "león", pronunciation: "leh-ohn", hint: "King of the jungle.", image: "animals/lion.png" },
      { question: "elephant", answer: "elefante", pronunciation: "eh-leh-fahn-teh", hint: "Largest land animal.", image: "animals/elephant.png" },
      { question: "rabbit", answer: "conejo", pronunciation: "koh-neh-khoh", hint: "Has long ears and hops.", image: "animals/rabbit.png" },
      { question: "bear", answer: "oso", pronunciation: "oh-soh", hint: "Large wild forest animal.", image: "animals/bear.png" },
      { question: "tiger", answer: "tigre", pronunciation: "tee-greh", hint: "A striped wild cat.", image: "animals/tiger.png" },
    ],
  },
  3: {
    title: "Food",
    description: "Learn common food vocabulary.",
    questions: [
      { question: "apple", answer: "manzana", pronunciation: "mahn-thah-nah", hint: "A common crisp fruit.", image: "food/apple.png" },
      { question: "bread", answer: "pan", pronunciation: "pahn", hint: "A basic food made from baked flour.", image: "food/bread.png" },
      { question: "water", answer: "agua", pronunciation: "ah-gwah", hint: "Essential cold fluid for life.", image: "food/water.png" },
      { question: "milk", answer: "leche", pronunciation: "leh-cheh", hint: "A white dairy drink.", image: "food/milk.png" },
      { question: "rice", answer: "arroz", pronunciation: "ah-rrohss", hint: "A common tiny white grain.", image: "food/rice.png" },
      { question: "chicken", answer: "pollo", pronunciation: "poh-yoh", hint: "A very popular poultry meat.", image: "food/chicken.png" },
      { question: "cheese", answer: "queso", pronunciation: "keh-soh", hint: "A dairy product made from milk curds.", image: "food/cheese.png" },
      { question: "egg", answer: "huevo", pronunciation: "weh-voh", hint: "Comes from a chicken.", image: "food/egg.png" },
      { question: "banana", answer: "plátano", pronunciation: "plah-tah-noh", hint: "A long yellow tropical fruit.", image: "food/banana.png" },
      { question: "coffee", answer: "café", pronunciation: "kah-feh", hint: "A popular hot dark drink.", image: "food/coffee.png" },
    ],
  },
  4: {
    title: "Family",
    description: "Learn vocabulary for family members.",
    questions: [
      { question: "father", answer: "padre", pronunciation: "pah-dreh", hint: "A male parent.", image: "family/father.png" },
      { question: "mother", answer: "madre", pronunciation: "mah-dreh", hint: "A female parent.", image: "family/mother.png" },
      { question: "son", answer: "hijo", pronunciation: "ee-khoh", hint: "A male child.", image: "family/son.png" },
      { question: "daughter", answer: "hija", pronunciation: "ee-khah", hint: "A female child.", image: "family/daughter.png" },
      { question: "brother", answer: "hermano", pronunciation: "ehr-mah-noh", hint: "A male sibling.", image: "family/brother.png" },
      { question: "sister", answer: "hermana", pronunciation: "ehr-mah-nah", hint: "A female sibling.", image: "family/sister.png" },
      { question: "grandfather", answer: "abuelo", pronunciation: "ah-bweh-loh", hint: "Your parent's father.", image: "family/grandfather.png" },
      { question: "grandmother", answer: "abuela", pronunciation: "ah-bweh-lah", hint: "Your parent's mother.", image: "family/grandmother.png" },
      { question: "uncle", answer: "tío", pronunciation: "tee-oh", hint: "Your parent's brother.", image: "family/uncle.png" },
      { question: "aunt", answer: "tía", pronunciation: "tee-ah", hint: "Your parent's sister.", image: "family/aunt.png" },
    ],
  },
  5: {
    title: "Travel",
    description: "Useful words for navigating and traveling.",
    questions: [
      { question: "passport", answer: "pasaporte", pronunciation: "pah-sah-por-teh", hint: "Official travel document.", image: "travel/passport.png" },
      { question: "hotel", answer: "hotel", pronunciation: "oh-tel", hint: "A place to stay while traveling.", image: "travel/hotel.png" },
      { question: "train", answer: "tren", pronunciation: "trehn", hint: "Runs on a railway track.", image: "travel/train.png" },
      { question: "plane", answer: "avión", pronunciation: "ah-byohn", hint: "Flies in the sky.", image: "travel/plane.png" },
      { question: "car", answer: "coche", pronunciation: "koh-cheh", hint: "A 4-wheeled road vehicle.", image: "travel/car.png" },
      { question: "ticket", answer: "billete", pronunciation: "bee-yeh-teh", hint: "Shows you paid for your ride.", image: "travel/ticket.png" },
      { question: "airport", answer: "aeropuerto", pronunciation: "ah-eh-roh-pwer-toh", hint: "Where planes take off and land.", image: "travel/airport.png" },
      { question: "station", answer: "estación", pronunciation: "ehss-tah-thyohn", hint: "Where you catch a train or bus.", image: "travel/station.png" },
      { question: "baggage", answer: "equipaje", pronunciation: "eh-kee-pah-kheh", hint: "Suitcases and bags for travel.", image: "travel/baggage.png" },
      { question: "map", answer: "mapa", pronunciation: "mah-pah", hint: "A visual guide for orientation.", image: "travel/map.png" },
    ],
  },
  6: {
    title: "Colors",
    description: "Learn standard colors.",
    questions: [
      { question: "red", answer: "rojo", pronunciation: "roh-khoh", hint: "The color of strawberries.", image: "colors/red.png" },
      { question: "blue", answer: "azul", pronunciation: "ah-thool", hint: "The color of the sky.", image: "colors/blue.png" },
      { question: "green", answer: "verde", pronunciation: "behr-deh", hint: "The color of leaves and grass.", image: "colors/green.png" },
      { question: "yellow", answer: "amarillo", pronunciation: "ah-mah-ree-yoh", hint: "The color of sunflowers.", image: "colors/yellow.png" },
      { question: "black", answer: "negro", pronunciation: "neh-groh", hint: "The darkest color.", image: "colors/black.png" },
      { question: "white", answer: "blanco", pronunciation: "blahn-koh", hint: "The color of snow.", image: "colors/white.png" },
      { question: "pink", answer: "rosa", pronunciation: "roh-sah", hint: "The color of flamingos.", image: "colors/pink.png" },
      { question: "orange", answer: "naranja", pronunciation: "nah-rahn-khah", hint: "Same name as the citrus fruit.", image: "colors/orange.png" },
      { question: "purple", answer: "morado", pronunciation: "moh-rah-doh", hint: "The color of grapes.", image: "colors/purple.png" },
      { question: "grey", answer: "gris", pronunciation: "grees", hint: "The color of a storm cloud.", image: "colors/grey.png" },
    ],
  },
  7: {
    title: "Numbers",
    description: "Learn to count from 1 to 10.",
    questions: [
      { question: "one", answer: "uno", pronunciation: "oo-noh", hint: "The first counting number.", image: "numbers/1.png" },
      { question: "two", answer: "dos", pronunciation: "dohss", hint: "1 + 1", image: "numbers/2.png" },
      { question: "three", answer: "tres", pronunciation: "trehss", hint: "2 + 1", image: "numbers/3.png" },
      { question: "four", answer: "cuatro", pronunciation: "kwah-troh", hint: "3 + 1", image: "numbers/4.png" },
      { question: "five", answer: "cinco", pronunciation: "theen-koh", hint: "4 + 1", image: "numbers/5.png" },
      { question: "six", answer: "seis", pronunciation: "saywss", hint: "5 + 1", image: "numbers/6.png" },
      { question: "seven", answer: "siete", pronunciation: "syeh-teh", hint: "6 + 1", image: "numbers/7.png" },
      { question: "eight", answer: "ocho", pronunciation: "oh-choh", hint: "7 + 1", image: "numbers/8.png" },
      { question: "nine", answer: "nueve", pronunciation: "nweh-veh", hint: "8 + 1", image: "numbers/9.png" },
      { question: "ten", answer: "diez", pronunciation: "dyeeth", hint: "9 + 1", image: "numbers/10.png" },
    ],
  },
  8: {
    title: "Clothes",
    description: "Common items of clothing.",
    questions: [
      { question: "shirt", answer: "camisa", pronunciation: "kah-mee-sah", hint: "An upper-body garment with buttons.", image: "clothes/shirt.png" },
      { question: "pants", answer: "pantalones", pronunciation: "pahn-tah-loh-nehss", hint: "Worn on your legs.", image: "clothes/pants.png" },
      { question: "dress", answer: "vestido", pronunciation: "behss-tee-doh", hint: "A one-piece garment.", image: "clothes/dress.png" },
      { question: "shoes", answer: "zapatos", pronunciation: "thah-pah-tohss", hint: "Footwear for walking outside.", image: "clothes/shoes.png" },
      { question: "hat", answer: "sombrero", pronunciation: "sohm-breh-roh", hint: "Worn on your head.", image: "clothes/hat.png" },
      { question: "coat", answer: "abrigo", pronunciation: "ah-bree-goh", hint: "Heavy layer worn when it's freezing.", image: "clothes/coat.png" },
      { question: "skirt", answer: "falda", pronunciation: "fahl-dah", hint: "Hangs from the waist downward.", image: "clothes/skirt.png" },
      { question: "socks", answer: "calcetines", pronunciation: "kahl-theh-tee-nehss", hint: "Worn directly on your feet inside shoes.", image: "clothes/socks.png" },
      { question: "jacket", answer: "chaqueta", pronunciation: "chah-keh-tah", hint: "Light coat layer.", image: "clothes/jacket.png" },
      { question: "glasses", answer: "gafas", pronunciation: "gah-fahss", hint: "Worn over eyes to improve vision.", image: "clothes/glasses.png" },
    ],
  },
  9: {
    title: "Weather",
    description: "Phrases to describe daily weather conditions.",
    questions: [
      { question: "it is sunny", answer: "hace sol", pronunciation: "ah-theh sohl", hint: "Bright, direct solar light outside.", image: "weather/sunny.png" },
      { question: "it is raining", answer: "está lloviendo", pronunciation: "ehss-tah yoh-byen-doh", hint: "Water falling actively from clouds.", image: "weather/raining.png" },
      { question: "it is cold", answer: "hace frío", pronunciation: "ah-theh free-oh", hint: "Low atmospheric temperature.", image: "weather/cold.png" },
      { question: "it is hot", answer: "hace calor", pronunciation: "ah-theh kah-lor", hint: "High climate temperature.", image: "weather/hot.png" },
      { question: "sun", answer: "sol", pronunciation: "sohl", hint: "The yellow star in our sky.", image: "weather/sun.png" },
      { question: "rain", answer: "lluvia", pronunciation: "yoo-byah", hint: "Precipitation.", image: "weather/rain.png" },
      { question: "snow", answer: "nieve", pronunciation: "nyeh-beh", hint: "Frozen white flakes.", image: "weather/snow.png" },
      { question: "wind", answer: "viento", pronunciation: "byehn-toh", hint: "Gusty moving air outside.", image: "weather/wind.png" },
      { question: "cloud", answer: "nube", pronunciation: "noo-beh", hint: "Fluffy white or dark configurations in the sky.", image: "weather/cloud.png" },
      { question: "it is windy", answer: "hace viento", pronunciation: "ah-theh byehn-toh", hint: "Describing a breezy day.", image: "weather/windy.png" },
    ],
  },
  10: {
    title: "Daily Conversation",
    description: "Simple expressions used in casual everyday chat.",
    questions: [
      { question: "what is your name?", answer: "cómo te llamas", pronunciation: "koh-moh teh yah-mahss", hint: "Inquiring about someone's name.", image: "conversation/name.png" },
      { question: "my name is...", answer: "me llamo", pronunciation: "meh yah-moh", hint: "How to introduce yourself.", image: "conversation/myname.png" },
      { question: "where is...?", answer: "dónde está", pronunciation: "dohn-deh ehss-tah", hint: "Asking for a specific location.", image: "conversation/whereis.png" },
      { question: "how much is it?", answer: "cuánto cuesta", pronunciation: "kwahn-toh kwehss-tah", hint: "Asking for the market price.", image: "conversation/price.png" },
      { question: "nice to meet you", answer: "mucho gusto", pronunciation: "moo-choh gooss-toh", hint: "Pleasurable sign-off when meeting someone new.", image: "conversation/nicetomeetyou.png" },
      { question: "excuse me", answer: "disculpe", pronunciation: "deess-kool-peh", hint: "Polite attention-getter or slight apology.", image: "conversation/excuseme.png" },
      { question: "I don't understand", answer: "no entiendo", pronunciation: "noh ehn-tyehn-doh", hint: "When meaning isn't completely clear.", image: "conversation/dontunderstand.png" },
      { question: "do you speak English?", answer: "hablas inglés", pronunciation: "ah-blahss een-glehss", hint: "Checking fallback dialogue capabilities.", image: "conversation/speakenglish.png" },
      { question: "help", answer: "ayuda", pronunciation: "ah-yoo-dah", hint: "Used in an emergency when you need assistance", image: "conversation/help.png" },
      { question: "see you soon", answer: "hasta pronto", pronunciation: "ahss-tah prohn-toh", hint: "Parting note when you expect to return quickly.", image: "conversation/seeyousoon.png" },
    ],
  },
};