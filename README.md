# E-Commerce (Frontend only) React App

## Introduction

This app demonstrates React security best practices to follow for secure coding. It safeguards development workflow from most common react based attacks such as DOM XSS, Unsafe URL injection and Vulnerabilities in Dependencies and similar issues.

### Security learning points along with technologies used

- Implemented sanitization through DOMPurify and trusted type security measure.

- Snyk integration(globally) to Find and fix vulnerabilities in application code and dependencies in real time.

- Added Synk CI/CD pipeline through Github workflow for code scan upon push along with configuring security alerts.

- Configured eslint-plugin-security linting to detect security issues through linting.

- Added CodeQL code scanning automated workflow to find security vulnerabilities and coding errors. [CodeQL WorkFlow](https://github.com/gaurav-js-dev/auth-react/actions/workflows/github-code-scanning/codeql)

#### This repository is built using NX ecosystem which consist **ecomm** app inside apps folder.

### Usage & local setup instructions commands to follow

```bash

1. Install the required node_modules dependencies

yarn

2. Start the local webserver

yarn nx serve ecomm

3. Browse the localhost url inside the browser

- Open http://localhost:4200/ to view app running in the browser.

4. To use Snyk CLI

yarn global add snyk

snyk auth

5. Scan your project, first cd inside a folder with a react project, then start the scan by running:

snyk test

```

### App functionality

- Adding and removing items from cart with all calculations.
- Hooks and Context API for State Management.
- React-Router for Routing.
- Consuming data (demo data) from local js file.
- Custom Hooks and Regular Expressions for Client-Side Form Validation.
