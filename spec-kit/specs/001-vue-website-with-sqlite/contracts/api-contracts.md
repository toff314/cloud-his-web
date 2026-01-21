# API Contracts: Vue Website with SQLite

## Overview
This document defines the API contracts for the Vue website with SQLite database. The API serves as a bridge between the Vue frontend and the SQLite backend.

## Base URL
`http://localhost:3000/api/v1`

## Endpoints

### Content Management

#### GET /content
Retrieve published website content based on filters

**Parameters**:
- `slug` (optional, string): Specific content slug to retrieve
- `limit` (optional, integer): Number of items to return (default: 10)
- `offset` (optional, integer): Offset for pagination (default: 0)
- `tag` (optional, string): Filter by tag
- `published` (optional, boolean): Filter by publication status (default: true)

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Sample Content",
      "content": "Content body...",
      "slug": "sample-content",
      "excerpt": "Short description...",
      "featured_image_path": "/assets/images/sample.jpg",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z",
      "is_published": true,
      "author": "Author Name",
      "tags": "tag1,tag2"
    }
  ],
  "pagination": {
    "total": 1,
    "limit": 10,
    "offset": 0
  }
}
```

#### GET /content/:slug
Retrieve specific content by slug

**Parameters**:
- `slug` (required, string): URL-friendly identifier for content

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Sample Content",
    "content": "Content body...",
    "slug": "sample-content",
    "excerpt": "Short description...",
    "featured_image_path": "/assets/images/sample.jpg",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z",
    "is_published": true,
    "author": "Author Name",
    "tags": "tag1,tag2"
  }
}
```

### Metadata Management

#### GET /metadata
Retrieve page metadata based on filters

**Parameters**:
- `page_slug` (optional, string): Specific page slug to retrieve
- `limit` (optional, integer): Number of items to return (default: 10)

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "page_slug": "home",
      "meta_title": "Home Page Title",
      "meta_description": "Home page description...",
      "meta_keywords": "keyword1, keyword2",
      "og_title": "Open Graph Title",
      "og_description": "Open Graph Description",
      "og_image_path": "/assets/images/og-image.jpg",
      "canonical_url": "https://example.com/",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z"
    }
  ]
}
```

#### GET /metadata/:page_slug
Retrieve specific page metadata by slug

**Parameters**:
- `page_slug` (required, string): URL-friendly identifier for page

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "page_slug": "home",
    "meta_title": "Home Page Title",
    "meta_description": "Home page description...",
    "meta_keywords": "keyword1, keyword2",
    "og_title": "Open Graph Title",
    "og_description": "Open Graph Description",
    "og_image_path": "/assets/images/og-image.jpg",
    "canonical_url": "https://example.com/",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
  }
}
```

### Image Assets

#### GET /images
Retrieve available image assets

**Parameters**:
- `limit` (optional, integer): Number of items to return (default: 10)
- `offset` (optional, integer): Offset for pagination (default: 0)
- `filename` (optional, string): Filter by filename

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "filename": "sample.jpg",
      "filepath": "/assets/images/sample.jpg",
      "alt_text": "Sample image alt text",
      "caption": "Sample image caption",
      "created_at": "2023-01-01T00:00:00Z",
      "file_size": 102400,
      "mime_type": "image/jpeg"
    }
  ],
  "pagination": {
    "total": 1,
    "limit": 10,
    "offset": 0
  }
}
```

### Database Initialization

#### POST /init-db
Initialize the database with required tables

**Request Body**: (empty)

**Response**:
```json
{
  "success": true,
  "message": "Database initialized successfully",
  "tables_created": ["website_content", "page_metadata", "image_assets"]
}
```

## Error Responses
All endpoints may return error responses in the following format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {} // Optional additional error details
  }
}
```

## Common Error Codes
- `CONTENT_NOT_FOUND`: Requested content does not exist
- `METADATA_NOT_FOUND`: Requested metadata does not exist
- `INVALID_PARAMETER`: Invalid parameter provided
- `DATABASE_ERROR`: Database operation failed
- `INITIALIZATION_ERROR`: Database initialization failed