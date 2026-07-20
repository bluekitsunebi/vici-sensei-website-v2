export interface MethodologyItem {
  num: string;
  accent: string;
  title: string;
  description: string;
}

export const methodologyItems: MethodologyItem[] = [
  {
    num: 'PILLAR 01',
    accent: '#00d2ff',
    title: 'The Structural Pillar',
    description:
      'In the live sessions we use a <strong>structure-first approach</strong>, breaking down Japanese grammar into a <strong>precise, logical system</strong> with clear rules of construction. You will understand exactly how sentences are built so you can create your own correct sentences from scratch.',
  },
  {
    num: 'PILLAR 02',
    accent: '#ff7a00',
    title: 'The Practice Pillar',
    description:
      'We put theory into practice by <strong>solving exam papers (JLPT)</strong> in their entirety. I guide you step-by-step through complex reading and listening sections, dissecting your mistakes and <strong>explaining the exact logic</strong> behind correct answers until your execution is flawless.',
  },
  {
    num: 'PILLAR 03',
    accent: '#00ff66',
    title: 'The Grinding Pillar',
    description:
      'Our live session time is too valuable to spend repeating words. You use our <strong>dedicated vocabulary app</strong> (built on a <strong>spaced repetition system</strong>) to learn words and Kanji on your own, efficiently. This ensures long-term retention with optimal daily effort.',
  },
];
