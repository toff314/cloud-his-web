# Cloud-HIS Web Application

This is a comprehensive web application for cloud-based hospital information systems, featuring multiple pages and components as specified in the requirements.

## Features

- **Top Navigation Bar**: With "智慧云门诊" logo, navigation menu, and action buttons
- **Product Introduction Page**: Grid layout showcasing 6 functional modules
- **Solutions Page**: Interactive solution buttons with dynamic content
- **Customer Cases Page**: 3x3 grid layout for customer cases
- **Home Page**: With carousel, product intro, solutions, and customer cases sections
- **About Us Page**: With company intro, honors, and vision sections
- **Pricing Plans Page**: Scrollable package cards with comparison table
- **Free Trial Page**: With form and medical illustration
- **Responsive Design**: Works on desktop and mobile devices
- **Right Floating Navigation**: With contact and action buttons
- **Footer Component**: With ICP filing and QR code

## Tech Stack

- **Frontend**: Vue.js 3.x, Vue Router, Pinia
- **Backend**: Node.js, Express
- **Database**: SQLite
- **Build Tool**: Vite

## Project Structure

```
backend/
├── src/
│   ├── models/           # Database models
│   ├── services/         # Business logic
│   ├── routes/           # API routes
│   ├── config/           # Configuration files
│   └── app.js            # Main application entry point
└── package.json

frontend/
├── src/
│   ├── components/       # Vue components
│   ├── pages/            # Page components
│   ├── services/         # Frontend services
│   ├── assets/           # Static assets
│   ├── router/           # Vue Router configuration
│   ├── store/            # Pinia store
│   └── App.vue           # Main application component
├── public/
├── package.json
└── vite.config.js
```

## Setup

1. Install dependencies:
   ```bash
   cd backend
   npm install
   
   cd ../frontend
   npm install
   ```

2. Initialize the database:
   ```bash
   cd backend
   npm run init-db
   ```

3. Start the development servers:
   ```bash
   # In backend directory
   npm run dev
   
   # In frontend directory
   npm run dev
   ```

## API Endpoints

- `GET /api/v1/content` - Get all content
- `GET /api/v1/content/:slug` - Get content by slug
- `GET /api/v1/metadata` - Get all metadata
- `GET /api/v1/metadata/:page_slug` - Get metadata by page slug
- `GET /api/v1/images` - Get all images
- `GET /api/v1/carousel` - Get carousel items
- `GET /api/v1/about/:section` - Get about content by section
- `POST /api/v1/trials` - Submit trial request

## Development

The application follows a component-based architecture with clear separation of concerns between frontend and backend. Each feature is implemented as a standalone component or page that can be developed and tested independently.

## License

This project is licensed under the ISC License.