# E-Commerce (Frontend only) React App

## Introduction

This app demonstrates React security best practices to follow for secure coding. It safeguards development workflow from most common react based attacks such as DOM XSS, Unsafe URL injection and Vulnerabilities in Dependencies and similar issues.

### Security learning points along with technologies used

- Implemented sanitization through DOMPurify and trusted type security measure.

- Snyk integration(globally) to Find and fix vulnerabilities in application code in real time.

- Configured eslint-plugin-security linting to detect security issues through linting.

- Added CodeQL code scanning automated workflow to find security vulnerabilities and coding errors. [CodeQL WorkFlow](https://github.com/gaurav-js-dev/auth-react/actions/workflows/github-code-scanning/codeql)

#### This repository is built using NX ecosystem which consist **ecomm** app inside apps folder.

### Usage & local setup instructions

```bash

## install the required node_modules dependencies

yarn

## start the local webserver

yarn nx serve ecomm

# browse the localhost url inside the browser

- Browse to http://localhost:4200/ to view app running in the browser.

# To use Snyk CLI

yarn global add snyk

snyk auth

# Scan your project, first cd inside a folder with a react project, then start the scan by running:

snyk test

```

### App functionality

- Adding and removing items from cart with all calculations.
- Hooks and Context API for State Management.
- React-Router for Routing.
- Consuming data (demo data) from local js file.
- Custom Hooks and Regular Expressions for Client-Side Form Validation.
