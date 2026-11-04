# DGC Finder — Stacked Typography & Authentic PH Street Pidgin Plan

This update refines the typography and layout of the Journey Progress / Target Bar and the Sharp Actions section into clean stacked hierarchies (`14px semibold` top line with `12px medium` subtext below), while enriching the Port Harcourt Pidgin (`pcm`) dictionary across all 10 routes with lively, positive PH street slang and conductor humor—preserving all existing directions and avoiding any negative or "village people" references.

## User Review & Critical Decisions

> [!IMPORTANT]
> The choices below incorporate your confirmed preferences from the clarification step and govern the upcoming code update.

- **Confirmed Decision 1 — Stacked 14px / 12px Header Hierarchy**:
  - **Sharp Actions Card Header**: Stacked layout with `"Sharp Actions (WhatsApp & Bolt / Uber)"` as a `14px semibold` (`text-sm font-semibold`) heading on top and `"Copy Pidgin route give person or open Google Map"` as `12px medium` (`text-xs font-medium`) subtext stacked cleanly underneath.
  - **Progress / Target Bar Footer**: Stacked layout with `"De tap each step as you dey drop for junction"` as the `14px semibold` (`text-sm font-semibold`) top line and `"Target: Car Wash Junction"` (or `"Omo, You Don Land DGC!"` on completion) stacked cleanly below as `12px medium` (`text-xs font-medium`) gold-accented text.
- **Confirmed Decision 2 — Enriched Port Harcourt Pidgin (`pcm`) Without Removing Existing Directions**:
  - Preserve every existing direction and landmark instruction across all 10 Port Harcourt routes while weaving in authentic, positive PH street flavor: `"E choke"`, `"Sharp sharp"`, `"Gba"`, `"No cap / Na true true"`, `"Waka well"`, `"Port Harcourt boy / girl no dey carry last"`, lively conductor/agbero shouting commentary, passengers debating change, Keke riders navigating traffic, and `"No be say I say make you sleep oo, shine your eye for junction"` / `"If traffic hold you for Rumuokoro, just buy gala"`.
  - **Strict Positive Tone Filter**: Zero vague curses or `"village people"` expressions anywhere in the app.
  - **Celebratory Arrival Message**: Update the `pcm` arrival celebration copy to: *"Omo, you don arrive! Welcome to DGC, where your soul go catch breeze and rest matter go settle for your body! Port Harcourt boy / girl no dey carry last!"*

---

## 1. Overview & Core Concept

- **What It Does**: Enhances mobile readability on narrow smartphone screens by eliminating cramped side-by-side labels inside the Journey Tracker card, while making the default Port Harcourt Pidgin (`pcm`) experience genuinely entertaining, relatable, and clear for members and first-timers navigating PH public transit.
- **Target Audience / Persona**: DGC members, first-timers, and Follow-Up team members checking bus stop checkpoints or copying directions for WhatsApp while in transit across Port Harcourt.
- **Key Value**: Cleaner visual scanning on mobile viewports (`375px–430px`) paired with memorable, authentic Port Harcourt transit guidance.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **First Load (PH Pidgin + Light Mode Default)**: Opens directly in `PH Pidgin` (`pcm`) and `Light Mode` with subdued, clean surfaces and instant access to the 10 PH bus stop corridors.
  2. **Journey Progress & Target Tracking**: Below the progress bar track, users see the stacked `14px semibold` instruction (`"De tap each step as you dey drop for junction"`) and `12px medium` gold target line (`"Target: Car Wash Junction"`) without horizontal crowding or text wrapping collisions.
  3. **Sharp Actions (WhatsApp & Bolt / Uber)**: Above the action buttons, users see the stacked `14px semibold` title (`"Sharp Actions (WhatsApp & Bolt / Uber)"`) and `12px medium` subtitle (`"Copy Pidgin route give person or open Google Map"`).
  4. **Arrival Celebration**: Checking the final checkpoint triggers the confetti micro-animation and displays the celebratory PH Pidgin welcome banner.
- **Visual Identity & Theme**:
  - *Color Palette & Mood*: Subdued Light Mode default (`#F9F8FC` canvas, `#FFFFFF` cards, `#6B00B6` royal purple primary actions, `#9E7B1C` / `#D4AF37` warm crown gold highlights) with one-tap footer toggle to Dark Mode (`#0F071A` canvas, `#160C28` cards).
  - *Typography & Hierarchy*: `Plus Jakarta Sans` for display and body copy; `JetBrains Mono` (`tabular-nums`) for step numbers and progress percentages. Stacked section headers enforce `14px semibold` (`text-sm font-semibold`) titles over `12px medium` (`text-xs font-medium`) subtitles with `mt-0.5` (`2px–4px`) vertical spacing.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1 — Vertical Stacking Over Horizontal Justification**:
  - *Chosen Approach*: Replace `flex items-center justify-between` on the Progress Bar instruction/target row and the Sharp Actions header row with a vertical `flex flex-col gap-0.5` stack (`14px semibold` top, `12px medium` bottom).
  - *Why*: In PH Pidgin mode, strings like `"De tap each step as you dey drop for junction"` and `"Copy Pidgin route give person or open Google Map"` are longer than standard English labels; stacking prevents awkward line breaks on `375px` mobile screens.
- **Decision 2 — Additive Pidgin Enrichment Across Both Data Sources**:
  - *Chosen Approach*: Synchronize the enriched `pcm` route steps and UI dictionary across both the external route data script and the built-in fallback data inside the main HTML document.
  - *Why*: Guarantees 100% identical behavior whether served statically on GitHub Pages/Vercel or opened offline, while keeping all existing landmark instructions intact.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```
┌────────────────────────────────────────────────────────────────────┐
│                    Pure Static Client Runtime                      │
│         (HTML5 + Tailwind CDN + Vanilla JS + LocalStorage)         │
└─────────────────────────────────┬──────────────────────────────────┘
                                  │
        ┌─────────────────────────┴─────────────────────────┐
        ▼                                                   ▼
┌───────────────────────────────┐           ┌───────────────────────────────┐
│   Bilingual Route & UI Store  │           │   Interactive Journey Engine  │
│  - Default: lang = 'pcm'      │           │  - Search & Hub Filtering     │
│  - Default: isDark = false    │──────────▶│  - Checkpoint Progress (0-100)│
│  - Enriched PH Pidgin Steps   │           │  - Stacked 14px/12px Headers  │
│  - Clean English Steps        │           │  - WhatsApp & Map Formatters  │
└───────────────────────────────┘           └───────────────────────────────┘
```

- **Data Model & State**:
  - `UI_COPY.pcm` & `UI_COPY.en`: Holds all localized UI strings, including the updatedarrival celebration message and stacked header copy.
  - `routesData`: Array of 10 Port Harcourt transit hubs, each containing `routes[].steps[]` with `en` and enriched `pcm` strings.
- **Interactive Component & State Mapping**:
  - Toggling `[ English | PH Pidgin ]` mutates `state.lang`, persists to `localStorage`, and re-renders both the stacked headers and step instructions immediately.
  - Tapping `"Copy for WhatsApp"` formats the active route in the selected language (including the enriched PH Pidgin steps when `pcm` is active) and copies to clipboard with toast confirmation.
