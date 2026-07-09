---
description: Create a UI component for this Next.js portfolio site
allowed-tools: Read, Write, Edit, Glob, Bash(npm run dev:*), Bash(npm run lint:*)
argument-hint: "[Brief component description]"
---

## User Input

The user has provided information about the component to make: **$ARGUMENTS**

## Do This First:

From the component information above, determine a PascalCase component name (e.g., "a skills badge" → `SkillBadge`).

### 1. Write Cypress Test First
Add a test to `cypress/e2e/home.cy.js` that checks for the new component's key content:

```js
it("renders [ComponentName]", () => {
  cy.visit("/")
  cy.contains("[expected text or selector]").should("be.visible")
})
```

### 2. Create Component
Single file: `app/components/[ComponentName].jsx`

Pattern:
```jsx
export default function ComponentName() {
  return (
    <section id="component-id" className="py-14 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
          Section Title
        </h2>
        {/* content */}
      </div>
    </section>
  )
}
```

Conventions:
- Tailwind utility classes only — no CSS Modules, no inline styles
- Use CSS vars via Tailwind: `text-muted`, `text-accent`, `text-accent-light`, `bg-card`, `border-border`
- Dark mode handled automatically via `ThemeProvider` — no manual dark: variants needed
- `scroll-margin-top` applied globally to `section[id]` — use `id` on section elements
- No semicolons at end of JSX lines

### 3. Add to Page
Import and place in `app/page.jsx` in the correct section order:
`Header → Hero → About → Skills → Experience → Resume → Projects → Education → Contact → Footer`

### 4. Verify Locally
```bash
npm run dev
```
Open http://localhost:3000 and confirm component renders correctly in both light and dark mode.

### 5. Run Lint
```bash
npm run lint
```

Fix any lint errors before finishing.

## Rules
- One file per component — no subdirectories
- All content hard-coded in the component (no CMS or data layer)
- Verify visually in browser before marking done