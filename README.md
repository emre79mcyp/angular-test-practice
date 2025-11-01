# ngx-admin Playwright Testing Practice Project

**⚠️ IMPORTANT: This is a TEST AUTOMATION & QA PRACTICE PROJECT, not an Angular development project.**

This repository is used for **learning Playwright end-to-end testing** on a pre-built Angular admin dashboard. The Angular application (ngx-admin) is the application under test (AUT). The focus is on writing and executing automated tests, not on building or developing the Angular application itself.

## Overview

This is an **educational testing project** that provides a real-world Angular application (ngx-admin) to practice automated testing with **Playwright**. Students/testers use this project to learn:
- Writing E2E tests with Playwright
- Testing authentication flows
- Testing UI interactions
- Cross-browser testing
- Test reporting and debugging

The underlying Angular application includes authentication flows, data visualization, tables, forms, and a complete admin dashboard UI—all of which serve as test subjects.

**Application Version:** 10.0.0  
**License:** MIT  
**Source Repository:** [pw-practice-app](https://github.com/bondar-artem/pw-practice-app.git)

## What You'll Test

This project provides a rich Angular application with many testable features:

- **Authentication Pages** - Login, register, password reset flows (test forms, validation, routing)
- **Dashboard & Widgets** - IoT dashboard with multiple components (test rendering, interactions)
- **Data Visualization** - Charts and graphs (test SVG rendering, data updates)
- **Tables & Data** - Smart tables with searching, sorting, pagination (test data interactions)
- **UI Components** - Multiple icon sets, modals, menus, sidebars (test UI element interactions)
- **Maps** - Leaflet map integration (test complex third-party components)
- **Responsive Design** - Bootstrap layout and responsive behavior (test viewport changes)
- **Navigation** - Lazy-loaded modules and routing (test page transitions)

## Technology Stack

### Core Framework
| Package | Version |
|---------|---------|
| Angular | 14.2.12 |
| Angular CLI | 14.2.10 |
| Angular CDK | 12.1.0 |
| TypeScript | 4.6.4 |
| RxJS | 6.6.2 |

### UI & Theming
| Package | Version |
|---------|---------|
| Nebular | 10.0.0 |
| Bootstrap | 4.3.1 |
| Eva Icons | 1.1.3 |
| Font Awesome | 5.2.0 |

### Data & Visualization
| Package | Version |
|---------|---------|
| ECharts | 4.9.0 |
| ngx-echarts | 4.2.2 |
| ngx-charts | 20.1.2 |
| Chart.js | Via angular2-chartjs |
| ng2-smart-table | 1.6.0 |

### Maps & Location
| Package | Version |
|---------|---------|
| Leaflet | 1.2.0 |
| ngx-leaflet | 3.0.1 |

### Testing
| Package | Version |
|---------|---------|
| Playwright | 1.53.1 |
| Karma | Test runner |
| Jasmine | Testing framework |

### Build & Development Tools
| Package | Version |
|---------|---------|
| Sass | 1.62.0 |
| TSLint | 6.1.0 |
| Stylelint | 15.6.0 |
| Compodoc | 1.1.19 |

## Prerequisites

- **Node.js** - v14.x or higher
- **npm** - v6.x or higher
- **Angular CLI** - v14.x

## Quick Start (For Testing)

This is the fastest path if you're here to **practice Playwright testing**:

```bash
# 1. Clone the repository
git clone https://github.com/bondar-artem/pw-practice-app.git
cd pw-practice-app

# 2. Install all dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Start the Angular application (keeps running)
npm start

# 5. In a NEW terminal, run Playwright tests
npx playwright test
```

That's it! The Angular app is running, and you're writing tests against it.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/bondar-artem/pw-practice-app.git
cd pw-practice-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright (Required for Testing)

```bash
npx playwright install
```

## Typical Testing Workflow

### 1. Start the Application (Terminal 1)

```bash
npm start
```

This starts the Angular application at `http://localhost:4200/`. Keep this terminal open while testing.

### 2. Write & Run Tests (Terminal 2)

```bash
npx playwright test
```

This runs all tests in the `e2e/` directory against the running application.

### 3. Debug Tests

If a test fails, run in debug mode to inspect what went wrong:
```bash
npx playwright test --debug
```

Or run in headed mode to watch the browser:
```bash
npx playwright test --headed
```

### 4. View Test Report

```bash
npx playwright show-report
```

## Application (AUT) Management

### Run for Testing
```bash
npm start
```
Application available at `http://localhost:4200/`

### Build the Application
```bash
npm run build -- --configuration production
```
Not typically needed for testing, but useful if you need to test a production build.

### Run Unit Tests (If Needed)
```bash
npm test
```
Runs Karma/Jasmine unit tests. Less common for E2E testing practice.

## Project Structure

```
src/
├── app/
│   ├── @core/              # Core services and utilities
│   ├── @theme/             # Theme configuration and global styles
│   ├── pages/              # Feature modules (lazy loaded)
│   ├── app.module.ts       # Root module
│   ├── app.component.ts    # Root component
│   └── app-routing.module.ts
├── environments/           # Environment configurations
├── assets/                 # Static assets
├── main.ts                 # Application entry point
├── polyfills.ts           # Browser polyfills
├── index.html             # Main HTML file
└── styles.scss            # Global styles
e2e/
├── auth.spec.ts           # Authentication tests
├── dashboard.spec.ts      # Dashboard tests
└── playwright.config.ts   # Playwright configuration
```

## Playwright Configuration

### Browser Support
Tests run on multiple browsers:
- **Chromium** - Default browser engine
- **Firefox** - For Mozilla compatibility testing
- **WebKit** - For Safari compatibility testing

### Test Configuration File
Configuration is typically in `playwright.config.ts`:
```javascript
{
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: 'http://localhost:4200',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  }
}
```

### Running Tests in Different Modes
```bash
# Debug mode - opens inspector
npx playwright test --debug

# Headed mode - see browser
npx playwright test --headed

# Specific browser
npx playwright test --project=firefox

# Specific test
npx playwright test login.spec.ts

# Update snapshots
npx playwright test --update-snapshots
```

## Build Configuration

### Development Build
```bash
ng serve
```
- Source maps: Enabled
- Optimization: Disabled
- Vendor chunk: Enabled
- Hot reload: Enabled

### Production Build
```bash
ng build --configuration production
```
- Optimization: Enabled
- Output hashing: All assets
- Source maps: Disabled
- Bundle analysis available

### Build Output
- **Directory**: `dist/ngx-admin-demo/`
- **Size budget**: 6kb max per component stylesheet
- **Licenses**: Extracted and included

## Application Routes

| Route | Description |
|-------|-------------|
| `/` | Redirects to IoT Dashboard |
| `/pages` | Main application pages (lazy-loaded) |
| `/auth/login` | Authentication login |
| `/auth/register` | User registration |
| `/auth/logout` | User logout |
| `/auth/request-password` | Password recovery request |
| `/auth/reset-password` | Password reset form |

## Browser Support

The application supports "evergreen" browsers:
- Chrome >= 55
- Safari >= 10
- Edge >= 13
- Firefox (latest)

## Troubleshooting

### Common Issues

**Port 4200 Already in Use**
```bash
ng serve --port 4300
```

**Dependencies Installation Issues**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Playwright Browser Installation Failed**
```bash
npx playwright install --with-deps
```

**Build Optimization Errors**
```bash
ng build --configuration development
```

### Clear Cache
```bash
ng cache clean
```

## Testing Scenarios & Practice Ideas

Use this application to practice testing these common scenarios:

### Authentication Testing
```bash
npx playwright test auth.spec.ts
```
- Test login with valid/invalid credentials
- Test registration form validation
- Test password recovery flow
- Test logout functionality
- Test session management

### UI Component Testing
- Test sidebar navigation
- Test modal and dialog interactions
- Test button clicks and form submissions
- Test icon rendering
- Test responsive layouts at different viewport sizes

### Data Interaction Testing
- Test table sorting and filtering
- Test pagination
- Test data updates
- Test chart rendering
- Test map interactions

### Navigation Testing
- Test lazy-loaded module loading
- Test route transitions
- Test URL changes
- Test browser back/forward
- Test invalid routes

## Learning Resources for Playwright Testing

### Official Documentation
- [Playwright Documentation](https://playwright.dev) - Complete Playwright API reference
- [Playwright Best Practices](https://playwright.dev/docs/best-practices) - Testing patterns and tips
- [Playwright Debug Tools](https://playwright.dev/docs/debug) - Debugging techniques

### Common Testing Patterns
```bash
# Selectors
page.locator('button[type="submit"]')
page.getByRole('button', { name: 'Login' })
page.getByPlaceholder('Email')

# Interactions
await page.fill('input[name="email"]', 'test@example.com')
await page.click('button[type="submit"]')
await page.waitForNavigation()

# Assertions
expect(page).toHaveURL('/dashboard')
expect(page.locator('h1')).toContainText('Welcome')
```

### Tips for This Project
- **Use data-testid attributes** - Add `data-testid="login-button"` to HTML for reliable selectors
- **Wait for navigation** - Use `page.waitForNavigation()` after form submissions
- **Test auth flows first** - Start with login/logout before testing other features
- **Use headed mode** - `--headed` flag helps understand what's being tested
- **Check selectors** - Use Playwright Inspector to find element selectors

## Project Structure for Testers

```
e2e/
├── auth.spec.ts           # Authentication test scenarios
├── dashboard.spec.ts      # Dashboard & widgets tests
├── tables.spec.ts         # Data table tests
├── charts.spec.ts         # Chart rendering tests
├── forms.spec.ts          # Form validation tests
├── navigation.spec.ts     # Routing & navigation tests
└── playwright.config.ts   # Playwright configuration
```

## Further Help

### For Testing & QA Practice
- [Playwright Documentation](https://playwright.dev) - Main resource for test automation
- [Playwright Examples](https://github.com/microsoft/playwright/tree/main/examples) - Real test examples
- [Locator Strategy Guide](https://playwright.dev/docs/locators) - How to find elements to test
- [Best Practices for E2E Testing](https://playwright.dev/docs/best-practices) - Testing patterns

### For Understanding the Test Application (AUT)
- [Angular CLI Documentation](https://angular.io/cli) - Understanding the app structure
- [Nebular Documentation](https://nebular.akveo.io/) - UI component library used
- [Bootstrap Grid System](https://getbootstrap.com/docs/4.3/layout/grid/) - Responsive design patterns

### Not Needed for This Project
- Angular development tutorials (focus on QA, not development)
- Building Angular apps (the app is pre-built, you test it)
- Angular best practices for development (test the features, don't modify them)

---

**⚠️ REMEMBER**: You are here to **TEST**, not to **BUILD**. 

Write tests. Run tests. Debug tests. Practice Playwright. That's it!

**Author**: Based on Akveo's ngx-admin template (provided as test subject)
**Purpose**: Educational Testing & QA Practice with Playwright
**Last Updated**: November 2025
