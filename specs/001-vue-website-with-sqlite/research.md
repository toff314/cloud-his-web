# Research Findings: Vue Website with SQLite

## Summary
This document captures research findings for building a Vue.js-based website with local SQLite database storage, following the requirements to minimize external dependencies and keep images stored locally.

## Decisions Made

### 1. Vue.js Framework Choice
- **Decision**: Use Vue.js 3.x as the frontend framework
- **Rationale**: Vue.js offers a gentle learning curve, excellent documentation, and allows for minimal external dependencies when needed. It provides the reactivity and component system needed for the website while still allowing native HTML/CSS/JS implementation where beneficial.
- **Alternatives considered**: React, Angular, vanilla JavaScript frameworks
- **Conclusion**: Vue.js strikes the right balance between functionality and simplicity for this project.

### 2. Backend Technology
- **Decision**: Use Node.js with Express for the backend API
- **Rationale**: Node.js works well with JavaScript/JSON data from the frontend and has good SQLite support through the sqlite3 package. It allows for a unified JavaScript stack across frontend and backend.
- **Alternatives considered**: Python Flask/FastAPI, PHP, direct SQLite file access
- **Conclusion**: Node.js provides the best compatibility with the Vue.js frontend.

### 3. SQLite Integration
- **Decision**: Use sqlite3 npm package for database operations
- **Rationale**: This package provides a simple interface to SQLite, which meets the requirement of local data storage without external dependencies. It supports async/await for better performance.
- **Alternatives considered**: IndexedDB, localStorage, JSON files
- **Conclusion**: SQLite provides more robust querying capabilities than alternatives while still meeting local storage requirements.

### 4. Build Tool Selection
- **Decision**: Use Vite as the build tool
- **Rationale**: Vite offers faster build times and hot module replacement compared to traditional webpack-based tools. It has excellent Vue.js support and keeps the build process lightweight.
- **Alternatives considered**: Webpack, Rollup, Parcel
- **Conclusion**: Vite is modern and efficient for Vue.js projects.

### 5. Image Storage Approach
- **Decision**: Store images locally in the project's assets folder
- **Rationale**: This satisfies the requirement that images not be uploaded anywhere externally. Images will be referenced by path in the database rather than stored as binary data.
- **Alternatives considered**: Base64 encoding in database, external CDN
- **Conclusion**: Local storage meets privacy requirements while keeping complexity low.

### 6. Database Initialization
- **Decision**: Implement automatic SQLite initialization on application startup
- **Rationale**: Ensures the database schema exists and is up-to-date when the application starts. This prevents errors when trying to read data from uninitialized tables.
- **Implementation**: Will create a service that checks and creates tables if they don't exist.
- **Alternatives considered**: Manual initialization, external migration tools
- **Conclusion**: Automatic initialization provides better user experience.

## Technical Unknowns Resolved

### 1. How to connect Vue frontend to SQLite backend?
- **Finding**: Through a Node.js/Express REST API that serves as a bridge between the Vue frontend and SQLite database. The frontend makes HTTP requests to the backend API, which queries the SQLite database and returns JSON responses.

### 2. How to handle database initialization?
- **Finding**: Implement a database initialization service that runs on application startup. This service will check if required tables exist and create them if they don't, along with any necessary initial data.

### 3. How to serve the Vue app in production?
- **Finding**: Build the Vue app using Vite (which creates static files) and serve these files through the Express server. The Express server will handle API requests and serve the built Vue application.

## Best Practices Identified

### 1. Vue.js Component Architecture
- Use a component-based architecture with clear separation of concerns
- Implement proper state management using Pinia or Vue's built-in composition API
- Follow Vue style guide recommendations for naming and structure

### 2. Database Schema Design
- Normalize data appropriately while considering query performance
- Use proper indexing for frequently queried fields
- Implement proper validation both at the API and database level

### 3. Error Handling
- Implement comprehensive error handling on both frontend and backend
- Provide meaningful error messages to users
- Log errors appropriately for debugging

### 4. Security Considerations
- Sanitize user inputs to prevent SQL injection
- Implement proper CORS policies
- Validate and sanitize file uploads if any are needed in the future

## Potential Challenges

### 1. SQLite Concurrency
- SQLite has limitations with concurrent writes that may need to be considered if multiple users update content simultaneously.

### 2. Performance Optimization
- Need to carefully optimize database queries to ensure page load times stay under 3 seconds as content grows.

### 3. Local Development Environment
- Ensuring the setup process is straightforward for other developers to get started.