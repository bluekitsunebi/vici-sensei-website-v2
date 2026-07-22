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

export const testimonials: TestimonialItem[] = [
  {
    photo: 'takuya.jpg',
    icon: 'hugeicons:sakura',
    name: 'Takuya K.',
    flag: '🇯🇵',
    role: 'Native Speaker / Friend',
    roleClass: 'text-accent-red',
    quote:
      "\"When I first heard Vici speak, I couldn't believe he was self-taught. Most foreigners study Japanese from textbooks and it shows immediately — stiff grammar, overly polite constructions, and a total disconnect from how people actually talk on the street. Vici was different from the first sentence. His understanding of daily street contractions, the little sound drops native speakers make without even noticing, and the natural pitch accent shifts that most learners never even hear, feels exactly like talking to someone who grew up in Tokyo. I've introduced him to friends who didn't believe he'd only been studying for a few years, and a couple of them straight up asked if he had Japanese family somewhere. What impresses me most isn't just the vocabulary or the grammar accuracy — it's the timing, the pauses, the way he reacts before a sentence is even finished, which is something I've genuinely never seen in someone who learned the language entirely on their own.\"",
    translated: true,
    quoteOriginal:
      '「初めてViciが話すのを聞いたとき、独学だなんて信じられなかった。ほとんどの外国人は教科書で日本語を勉強していて、それがすぐにわかる――硬い文法、丁寧すぎる言い回し、そして実際に街中で人々がどう話しているかとの完全なズレ。でもViciは最初の一言から違った。日常的な話し言葉の省略、ネイティブが無意識にしている小さな音の脱落、そしてほとんどの学習者が耳にすることすらない自然なピッチアクセントの変化への理解が、まるで東京出身のネイティブと話しているみたいだった。彼を友人に紹介したとき、数年しか勉強していないなんて信じてもらえなかったし、中には日本人の親戚がいるんじゃないかと本気で聞いてきた人もいた。一番驚かされるのは語彙や文法の正確さだけじゃない――間の取り方、文が終わる前に反応するタイミング、これは独学だけで日本語を身につけた人には今まで一度も見たことがない。」',
  },
  {
    icon: 'fa6-solid:user-ninja',
    name: 'Lucas M.',
    flag: '🇺🇸',
    role: 'Self-Learner Tier Member',
    quote:
      '"I used to sit frozen over conjugation tables. Being able to just ask my weird edge-case questions inside the stream completely changed my pace..."',
  },
  {
    photo: 'mai.jpg',
    icon: 'game-icons:paper-lantern',
    name: 'Mai H.',
    flag: '🇯🇵',
    role: 'Language Exchange Partner',
    roleClass: 'text-accent-red',
    quote:
      '"Most foreigners talk with a robotic grammar pattern. But Vici instantly uses emotional fillers (like なんていうka) perfectly. His accent training method clearly forces natural processing loops."',
    translated: true,
    quoteOriginal:
      '「ほとんどの外国人は機械的な文法パターンで話す。でもViciは「なんていうか」のような感情のこもったフィラーを瞬時に、完璧に使いこなす。彼のアクセント練習法は明らかに自然な処理回路を作り上げている。」',
  },
  {
    icon: 'pinhead:lotus-flower',
    name: 'Elena R.',
    flag: '🇩🇪',
    role: 'Inner Circle Premium Member',
    quote:
      '"The 1-to-3 groups forced output out of me in a way video tutorials never could. My pronunciation accent boundaries literally shattered in 3 weeks."',
  },
  {
    icon: 'healthicons:temple',
    name: 'Sofia P.',
    flag: '🇧🇷',
    role: 'Self-Learner Tier Member',
    quote:
      '"I want to write this properly because it genuinely changed how I approach learning a language. Before finding this program I had tried three different apps and two tutors, and I always plateaued around the same intermediate wall where textbook grammar stopped matching what people actually say. The turning point was the live conversation streams — being forced to respond in real time, without a pause button, rewired something in how fast I could retrieve vocabulary. Within two months I noticed I was no longer translating in my head before speaking. The community aspect matters just as much as the curriculum: other self-learners share the exact same struggles, so it never feels like you are the only one embarrassing yourself in front of a native speaker. If you are on the fence about committing, just know the first few sessions are the hardest and it gets dramatically easier once the habit sticks."',
  },
  {
    icon: 'hugeicons:sakura',
    name: 'Yuki S.',
    flag: '🇯🇵',
    role: 'Native Speaker / Friend',
    roleClass: 'text-accent-red',
    quote:
      "\"Watching a foreigner speak with real emotional nuance instead of textbook phrasing is rare. Vici's rhythm and pacing genuinely sound like someone who grew up hearing it.\"",
    translated: true,
    quoteOriginal:
      '「教科書通りの言い回しではなく、本物の感情のニュアンスを込めて話す外国人を見るのは珍しい。Viciのリズムと間の取り方は、本当に生まれた時からその言葉を聞いて育った人のように聞こえる。」',
  },
  {
    icon: 'pinhead:lotus-flower',
    name: 'Priya N.',
    flag: '🇮🇳',
    role: 'Self-Learner Tier Member',
    quote:
      '"I tried three other courses before this one. The difference is I actually get corrected in the moment instead of finding out I was wrong weeks later."',
  },
  {
    icon: 'game-icons:fuji',
    name: 'Marco T.',
    flag: '🇮🇹',
    role: 'Inner Circle Premium Member',
    quote: '"Short and blunt: my listening comprehension doubled in two months."',
  },
  {
    icon: 'game-icons:circling-fish',
    name: 'Amara O.',
    flag: '🇳🇬',
    role: 'Self-Learner Tier Member',
    quote:
      '"I want to be honest about how skeptical I was going in. I had already burned money on two other programs that promised fluency in weeks and delivered nothing but recycled flashcard decks. What changed my mind was sitting in on a single live session and watching total strangers actually hold a real conversation instead of reciting memorized lines. It forced me to stop treating Japanese like a subject I was studying for a test and start treating it like a language I needed to use in the moment. The corrections happen instantly, which stings a little at first, but within a few weeks I stopped dreading being called on and started looking forward to it. If you have tried everything else and nothing stuck, this is worth the discomfort."',
  },
  {
    icon: 'healthicons:temple',
    name: 'Haruto N.',
    flag: '🇯🇵',
    role: 'Language Exchange Partner',
    roleClass: 'text-accent-red',
    quote:
      '"Most learners freeze up the moment a conversation goes off-script. His students keep talking even when I throw in slang mid-sentence."',
    translated: true,
    quoteOriginal:
      '「ほとんどの学習者は会話が台本通りに進まなくなった瞬間に固まってしまう。でも彼の生徒たちは、僕が文の途中でスラングを混ぜても話し続ける。」',
  },
  {
    icon: 'hugeicons:origami',
    name: 'Emeka C.',
    flag: '🇬🇭',
    role: 'Self-Learner Tier Member',
    quote: '"Small class sizes meant I could not hide. Best decision I made this year."',
  },
  {
    icon: 'mdi:noodles',
    name: 'Jake W.',
    flag: '🇬🇧',
    role: 'Self-Learner Tier Member',
    quote:
      '"Cheeky way to put it, but I learned more useful Japanese ordering ramen with him than in a full semester at uni."',
  },
  {
    icon: 'game-icons:sushis',
    name: 'Isabella F.',
    flag: '🇦🇷',
    role: 'Inner Circle Premium Member',
    quote:
      '"Sushi jokes aside, this review is about the actual structure of the course, which I think gets undersold by how casual the streams feel. Behind the relaxed tone there is a very deliberate progression: pronunciation drilling early, then sentence construction, then improvisation under pressure once you are ready. I did not notice how much I had absorbed until a trip to Osaka where I ordered, asked for directions, and even argued lightly with a shop owner about a discount, all without switching to English once. That moment alone justified the entire subscription for me, and I say that as someone who is usually the first to cancel a course after a month."',
  },
  {
    icon: 'fa6-solid:user-ninja',
    name: 'Ryo T.',
    flag: '🇯🇵',
    role: 'Native Speaker / Friend',
    roleClass: 'text-accent-red',
    quote:
      '"He moves through a conversation like he is anticipating the next three sentences. That kind of reflex usually takes years to build."',
    translated: true,
    quoteOriginal:
      '「彼は会話の中で、まるで次の三文を先読みしているかのように進んでいく。そういう反射神経は普通、身につくまでに何年もかかる。」',
  },
  {
    icon: 'game-icons:samurai-helmet',
    name: 'Viktor K.',
    flag: '🇵🇱',
    role: 'Inner Circle Premium Member',
    quote:
      '"Disciplined structure, no fluff. Exactly what I needed after years of casual apps that went nowhere."',
  },
  {
    icon: 'game-icons:shuriken',
    name: 'Noah B.',
    flag: '🇨🇦',
    role: 'Self-Learner Tier Member',
    quote: '"Fast, sharp, no wasted time. Every session hits."',
  },
];
