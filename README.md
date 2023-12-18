# E-Commerce (Frontend only) React App

## Introduction

This app demonstrates React security best practices to follow for secure coding. It safeguards development workflow from most common react based attacks such as DOM XSS, Unsafe URL injection and Vulnerabilities in Dependencies and similar issues.

#### Security learning points along with technologies used

- Implemented sanitization through DOMPurify and trusted type security measure.

- Configured eslint-plugin-security linting to detect security issues through liniting.

- Added CodeQL code scanning automated workflow to find security vulnerabilities and coding errors. [CodeQL WorkFlow](https://github.com/gaurav-js-dev/auth-react/actions/workflows/github-code-scanning/codeql)

### This repository is built using NX ecosystem which consist **ecomm** app inside apps folder.

### Usage & local setup instructions

```bash

## install the required node_modules dependencies

yarn

## start the local webserver

yarn nx serve ecomm

# browse the localhost url inside the browser

- Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

```

### App functionality

- Adding and removing items from cart with all calculations.
- Hooks and Context API for State Management.
- React-Router for Routing.
- Consuming data (demo data) from local js file.
- Custom Hooks and Regular Expressions for Client-Side Form Validation.
