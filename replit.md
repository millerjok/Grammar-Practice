# Japanese Grammar Dojo - Chiaki Education

## Overview
AI-powered Japanese grammar practice app for JLPT N5-N4 grammar points with printable worksheet functionality.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS (client/)
- **Backend**: Express.js (server/)
- **Shared Types**: Zod schemas (shared/schema.ts)
- **No database**: All grammar data is static, served from server-side data files

## Key Files
- `client/src/App.tsx` - Main React app component (fetches data from API)
- `server/routes.ts` - API routes (/api/grammar/levels, /api/grammar/questions/:grammarPoint)
- `server/data/` - Grammar question data files (level1-4.ts, grammarQuestions.ts, grammarLevels.ts)
- `shared/schema.ts` - Zod schemas for Question, GrammarData, GrammarLevel types

## API Endpoints
- `GET /api/grammar/levels` - Returns all grammar levels with sections and items
- `GET /api/grammar/questions/:grammarPoint` - Returns exercises for a specific grammar point
- `GET /api/grammar/questions` - Returns all questions data

## Grammar Data Structure
- 4 levels with 96+ grammar points total
- Each grammar point has: usage explanation + 5 translation exercises
- Each exercise: english, japanese, kana, romaji, tip
- Level styling: Level 1=red, Level 2=blue, Level 3=emerald, Level 4=violet

## Features
- Dark/light theme toggle
- Printable worksheets (exercises page + answer key page)
- Copy questions to clipboard
- Reveal/hide individual or all answers
- Kanji highlighting (yellow) for target characters

## Design
- Chiaki Education branding
- Footer email: soullennon41@gmail.com
- Vocabulary limited to JLPT N5-N4

## Dev Commands
- `npm run dev` - Start dev server (port 5000)
- `npm run build` - Build for production
- `npm start` - Start production server
