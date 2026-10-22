# Harbourline Plumbing: demo website

## What this is
A one-page demo site for a FICTIONAL Newcastle NSW plumber, built to the
standard of an Australian trade-marketing agency. Quick-purchase trade:
customers need help today and call the first plumber who answers.

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS
- next/image for every image, next/font for fonts
- No UI kits. Hand-built components in /components
- Deploy target: Vercel

## Business facts (use ONLY these, never invent others)
- Name: Harbourline Plumbing. Owner: Dan, licensed plumber and gasfitter
- Phone: 0491 570 156 (fictional)
- Area: Newcastle and Lake Macquarie
- Hours: Mon-Sat 7am-6pm, 24/7 emergency call-outs
- Services: hot water, blocked drains, leaks & burst pipes, gas fitting,
  bathroom plumbing
- Anything unconfirmed: mark [CONFIRM] in a code comment

## Design rules
- Warm, trustworthy, not techy. Reviews and proof on light warm backgrounds
- Headlines break like speech, one idea per line, set by hand
- Text never sits over a face or the work in a photo
- Phone number in 4 places: header, hero, final CTA, footer
- Sticky call bar on mobile. Quote + call always one tap away
- Buttons say what happens next ("Get my price", "Call Dan"). Never "Submit"
- Banned words: best, leading, premium, #1, tradie

## Page order
1 Sticky header with call button  2 Hero: 2 CTAs + trust stats
3 Lead form (name, phone, suburb), hidden honeypot field
4 Services grid, quote button on each  5 Dark break section
6 Why choose us  7 Brands strip (logoipsum.com placeholder logos, no real brands)
8 Recent jobs  9 Reviews (labelled "Sample reviews")
10 How it works, 4 steps  11 Meet Dan  12 Service areas + suburbs
13 FAQ  14 Final CTA  15 Footer with licence line + "Demo concept" label
16 Sticky mobile call bar  17 Subtle scroll animations
18 LocalBusiness (Plumber) + FAQPage JSON-LD schema

## Quality bar (check before saying a task is done)
- Screenshots at 375px and 1440px. No sideways scroll on mobile
- Lighthouse: Performance 80+, Accessibility 95+, SEO 100
- Every link and button works; form shows a clear success state
- Change one thing at a time. Don't regenerate whole files to fix a detail