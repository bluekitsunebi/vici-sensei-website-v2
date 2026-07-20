export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqItems: FaqEntry[] = [
  {
    question: 'Is this program suitable for absolute beginners?',
    answer:
      "Yes, absolutely. In fact, starting as a beginner here is an advantage because you won't have to break old habits and relearn the right way. I will guide you cleanly from zero straight into the structured system I've spent years to build.",
  },
  {
    question: 'How is the payment managed?',
    answer:
      'Payment is made once every 4 weeks, in advance, <strong>only after</strong> signing the contract and issuing the first invoice. It is securely completed via bank transfer (or Stripe, if available).',
  },
  {
    question: 'What happens if I can’t attend a scheduled session?',
    answer:
      "Because the dynamic and individual pace of the ultra-small groups is important, reliability is key. If you ever have an emergency, the session can be rescheduled if all group members unanimously agree. Alternatively, we will try our best to accommodate you in another active group for that week. If all other slots are fully booked, you won't fall behind—we will immediately provide you with the complete learning materials and tasks which would've been covered during that class.",
  },
];
