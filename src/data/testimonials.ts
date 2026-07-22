export interface TestimonialItem {
  photo?: string;
  icon: string;
  name: string;
  flag: string;
  role: string;
  roleClass?: string;
  quote: string;
  translated?: boolean;
  quoteOriginal?: string;
}

// TO DO: student reviews

// Profile pictures are placed in: ./src/assets/avatars (examples: takuya.jpg, mai.jpg)

// Examples for the values ​​of the items in the TestimonialItem list:

// photo: 
// - 'takuya.jpg'
// - 'mai.jpg'

// icon:
// - 'hugeicons:sakura'
// - 'fa6-solid:user-ninja'
// - 'game-icons:paper-lantern'
// - 'pinhead:lotus-flower'
// - 'healthicons:temple'
// - 'game-icons:fuji'
// - 'game-icons:circling-fish'
// - 'hugeicons:origami'
// - 'mdi:noodles'
// - 'game-icons:sushis'
// - 'game-icons:samurai-helmet'
// - 'game-icons:shuriken'

// flag:
// - 'JP'
// - 'US'
// - 'RO'

// role:
// - 'Native Speaker / Friend'
// - 'Self-Learner Tier Member'
// - 'Language Exchange Partner'
// - 'Inner Circle Premium Member'

// quote:
// '" ... "' (for Japanese natives, text translated into English)

// -------------------------

// Only for Japanese natives:

// quote:
// "\" ... \""

// quoteOriginal:
// '「 ... 」' (text in Japanese)

// roleClass:
// - 'text-accent-red' 

// translated:
// - true

export const testimonials: TestimonialItem[] = [
  {
    icon: 'hugeicons:sakura',
    name: '',
    flag: '',
    role: '',
    quote:
      '" ... "',
  },

  // for Japanese natives
  {
    photo: '',
    icon: 'healthicons:temple',
    name: '',
    flag: '',
    role: '',
    roleClass: '',
    quote:
      "\" ... \"",
    translated: true,
    quoteOriginal:
      '「 ... 」',
  },
];
