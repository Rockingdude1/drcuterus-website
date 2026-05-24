export interface Post {
  slug: string;
  question: string;
  category: string;
  excerpt: string;
  body: string;
}

export const posts: Post[] = [
  {
    slug: "why-does-my-period-hurt",
    question: "Why does my period hurt?",
    category: "Menstrual Health",
    excerpt: "Period pain is one of the most common questions I get. Here's the real answer — and when to actually worry.",
    body: `Period pain (dysmenorrhoea) happens because your uterus contracts to shed its lining. These contractions are triggered by hormone-like chemicals called prostaglandins. The higher the prostaglandin levels, the stronger the contractions — and the more pain you feel.

**Is it normal?**
Mild cramping is normal. But pain that stops you from going to school, work, or living your life is not something you should just "push through." That level of pain deserves a proper check-up.

**Could it be endometriosis?**
Endometriosis is a condition where tissue similar to the uterine lining grows outside the uterus. It affects roughly 1 in 10 people with a uterus and is notoriously underdiagnosed. Signs to watch for: pain that gets worse over time, pain during sex, pain when going to the bathroom during your period, or very heavy bleeding.

**What helps?**
- NSAIDs (like ibuprofen) taken *before* the cramps start work better than after
- Heat on the lower abdomen
- Hormonal contraception can significantly reduce pain for many people
- Exercise (yes, really — it releases endorphins)

If your pain is severe or interfering with your life, please see a doctor. You deserve answers, not just a prescription for "toughing it out."`,
  },
  {
    slug: "what-is-a-normal-vaginal-discharge",
    question: "What is normal vaginal discharge?",
    category: "Vaginal Health",
    excerpt: "Discharge confuses a lot of people. Let's clear up what's normal, what's not, and why your vagina is actually a self-cleaning genius.",
    body: `Your vagina is a self-cleaning organ — and discharge is how it does that job. It's completely normal and healthy.

**What normal discharge looks like:**
- Clear to white or slightly yellow
- Thin or slightly stretchy (like raw egg white around ovulation)
- Minimal or no smell
- Varies in amount across your cycle

**What can change discharge naturally:**
- Where you are in your menstrual cycle (it changes a lot!)
- Arousal (more, clearer)
- Pregnancy
- Hormonal contraception

**Signs something might be off:**
- Strong, unpleasant smell (fishy = possible bacterial vaginosis)
- Thick, white, cottage-cheese texture with itching = possible yeast infection
- Yellow/green and frothy = possible STI (like trichomoniasis)
- Grey discharge

**The golden rule:**
Never douche. Your vagina doesn't need help cleaning itself — douching disrupts the natural pH and bacterial balance, and can actually *cause* the infections you're trying to avoid.

If something seems different from your normal, trust your instincts and get it checked.`,
  },
  {
    slug: "can-you-get-pregnant-on-your-period",
    question: "Can you get pregnant on your period?",
    category: "Reproductive Health",
    excerpt: "Short answer: yes. Longer answer: it depends on your cycle. Here's the biology explained simply.",
    body: `Yes, it is possible — though less likely than at other times in your cycle.

**Here's why:**
Sperm can survive inside the reproductive tract for up to 5 days. If you have a short cycle (say, 21 days) and have sex during your period, sperm could still be alive when you ovulate — which could be only a week after your period started.

**The myth of "safe days":**
There are no guaranteed safe days if you're not using contraception. Cycles vary, ovulation timing can shift due to stress, illness, or just randomness, and sperm are surprisingly persistent.

**What affects your risk:**
- Cycle length — shorter cycles = higher risk
- Cycle regularity — irregular cycles make tracking ovulation unreliable
- How long your period lasts

**Bottom line:**
If you don't want to get pregnant, use contraception every time — regardless of where you are in your cycle. The menstrual cycle is not a reliable birth control method on its own.`,
  },
  {
    slug: "what-does-the-hymen-actually-do",
    question: "What does the hymen actually do?",
    category: "Anatomy",
    excerpt: "The hymen is probably the most misunderstood structure in the human body. Time to set the record straight.",
    body: `Almost everything you've been told about the hymen is probably wrong.

**What it actually is:**
The hymen is a thin, fleshy membrane that partially covers the vaginal opening. It's present from birth and varies enormously in shape, size, and thickness between individuals. Some people are born with very little hymenal tissue at all.

**What it is NOT:**
- It is not a seal that "breaks" during first sex
- It is not proof of virginity
- It does not "pop"

**The truth about bleeding:**
Bleeding during first penetration (if it happens) is usually due to insufficient lubrication and tension — not the hymen tearing. Many people have no bleeding at all. The hymen is flexible tissue that stretches, not a membrane that breaks.

**Does it have a function?**
Honestly, we're not entirely sure. It may play a minor protective role in infancy. In adults, it has no known essential function.

**Why does this matter?**
The myths around the hymen are used to control and shame people — particularly women. They have no basis in anatomy. A person's worth, character, and "purity" cannot be determined by a piece of tissue.`,
  },
  {
    slug: "how-does-the-pill-work",
    question: "How does the contraceptive pill work?",
    category: "Contraception",
    excerpt: "The pill is one of the most used contraceptives in the world — but most people don't know how it actually works.",
    body: `The combined oral contraceptive pill (containing both oestrogen and progestogen) works through three main mechanisms:

**1. Stopping ovulation**
The hormones in the pill suppress the signals from your brain (specifically FSH and LH) that trigger your ovaries to release an egg. No egg = nothing to fertilise.

**2. Thickening cervical mucus**
Progestogen thickens the mucus at the cervix, making it much harder for sperm to swim through.

**3. Thinning the uterine lining**
This makes it less likely for a fertilised egg to implant (though this is considered a backup mechanism, not the primary one).

**How effective is it?**
With perfect use: over 99% effective. With typical use (missed pills, wrong timing): around 91%. That gap is why consistency matters.

**Common side effects:**
Nausea, breast tenderness, mood changes, and spotting are common in the first few months. Many people have no significant side effects at all.

**The pill does NOT:**
- Cause infertility (fertility returns quickly after stopping)
- "Store up" periods (the withdrawal bleed on the pill is not a real period)
- Protect against STIs

If you're considering the pill, a conversation with a doctor about which formulation suits you is worth it — there are many options.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
