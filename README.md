# OttoIPWebAutomation

Playwright test automation project for end-to-end browser testing.

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a single test file:

```bash
npx playwright test tests/example.spec.ts
```

## View Report

Open the Playwright HTML report after a test run:

```bash
npx playwright show-report
```

## Project Structure

- `tests/` - Playwright test files
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project metadata and dependencies

## Notes

- `node_modules/` is ignored by Git.
- Test reports and result folders are also ignored through `.gitignore`.
