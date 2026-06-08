# DayGrid 📅

okay so i built this app because i was TIRED of planning my whole day perfectly and then just... not doing any of it. like i'd make this beautiful timetable at 11pm and wake up the next day and just vibe on youtube for 3 hours and pretend it didn't happen.

so i made DayGrid. it's a student productivity tracker that doesn't let you lie to yourself.

---

## what it actually does

normal todo apps let you just not do a task and move on with your life. this one makes you confront it.

- you plan your day in time blocks (like 4pm-6pm: DSA practice)
- if you finish it → ✅ great
- if you half-did it → 🟡 tell me how much (slider)
- if you skipped it → ❌ pick an excuse from the list (yes it tracks your excuses)
- if there's a random gap where you did nothing → it flags it and forces you to label it (scrolling? procrastination? rest?)

at the end of the week it generates a reflection — best day, worst day, what time you're actually productive, your most common excuse. it's kind of brutal but that's the point.

---

## tech stack

i used react because i'm learning it and wanted the practice. also:

- **React 18** — component based, useState everywhere
- **Zustand** — for global state (much easier than redux honestly)
- **Framer Motion** — all the animations, the slide-ins, the floating characters
- **Tailwind CSS** — utility classes, dark theme
- **Recharts** — the bar charts and pie charts on the reality check page
- **date-fns** — date formatting and week calculations
- **localStorage** — all data saved locally, no backend, no account needed

---

## pages

| page | what it does |
|------|-------------|
| Dashboard | today's overview, progress ring, weekly bar chart |
| Planner | add/edit time blocks for today |
| Week View | full 7-day calendar, mood tagging per day |
| Reality Check | planned vs actual charts + your excuse bank |
| Gaps | label unplanned time slots |
| Streaks | milestone system (3d, 7d, 30d, 100d etc) |
| Weekly Reflection | auto-generated end of week analysis |
| Settings | name, goals, exam mode toggle |

---

## how to run it

you'll need Node.js installed first (grab it from nodejs.org if you don't have it)

```bash
# clone or download and unzip
cd daygrid

# install everything
npm install

# start it
npm start
```

opens at `http://localhost:3000`

to build for production:
```bash
npm run build
```

---

## features i actually use

the **gap detection** is the one i use most. like i'll have study from 4-6 and then dinner at 8 and there's that 2 hour gap where i just disappeared. now i have to label it. calling it "procrastination" 4 times a week made me actually fix my schedule.

the **excuse bank** on the reality check page is lowkey humbling. mine always says "phone distraction" is #1. working on it.

**exam mode** turns off the streak pressure during exam weeks so you don't feel bad for not logging everything perfectly.

---

## what i want to add later

- [ ] actual notifications / reminders (right now it's all manual)
- [ ] lock screen during study blocks (like forest app)
- [ ] ai timetable suggestions based on past data
- [ ] sync across devices (need a backend for this)
- [ ] dark/light mode toggle
- [ ] export weekly report as pdf

---

## folder structure

```
src/
├── components/
│   ├── AnimeCharacters.jsx   # the chibi characters (drew them in SVG)
│   ├── Sidebar.jsx           # nav
│   └── WelcomePopup.jsx      # onboarding screen
├── pages/
│   ├── Dashboard.jsx
│   ├── Planner.jsx
│   ├── WeekCalendar.jsx
│   ├── RealityCheck.jsx
│   ├── Gaps.jsx
│   ├── Streaks.jsx
│   ├── WeeklyReflection.jsx
│   └── Settings.jsx
├── store/
│   └── useDayGridStore.js    # zustand store, persisted to localStorage
└── App.jsx
```

---

## screenshots

*(will add once i clean up the ui more)*

---

built this over a few sessions, still improving it. if you're a student and you also lie to yourself about productivity, maybe this helps.

— made with too much chai and mild sleep deprivation ☕
