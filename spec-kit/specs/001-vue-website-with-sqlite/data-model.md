# Data Model: Vue Website with SQLite

## Entities

### WebsiteContent
- **Fields**:
  - id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
  - title (TEXT, NOT NULL)
  - content (TEXT, NOT NULL)
  - slug (TEXT, UNIQUE, NOT NULL) - URL-friendly identifier
  - excerpt (TEXT) - Short description for listings
  - featured_image_path (TEXT) - Path to local image file
  - created_at (DATETIME, DEFAULT CURRENT_TIMESTAMP)
  - updated_at (DATETIME, DEFAULT CURRENT_TIMESTAMP)
  - is_published (BOOLEAN, DEFAULT 1) - Whether content is publicly visible
  - author (TEXT) - Content author name
  - tags (TEXT) - Comma-separated tags

- **Relationships**:
  - None (self-contained entity)

- **Validation rules**:
  - title: Required, max 255 chars
  - content: Required
  - slug: Required, unique, URL-safe characters only
  - is_published: Boolean value (0 or 1)

### PageMetadata
- **Fields**:
  - id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
  - page_slug (TEXT, UNIQUE, NOT NULL) - References the page URL
  - meta_title (TEXT) - SEO title tag
  - meta_description (TEXT) - SEO meta description
  - meta_keywords (TEXT) - SEO keywords
  - og_title (TEXT) - Open Graph title
  - og_description (TEXT) - Open Graph description
  - og_image_path (TEXT) - Open Graph image path
  - canonical_url (TEXT) - Canonical URL for SEO
  - created_at (DATETIME, DEFAULT CURRENT_TIMESTAMP)
  - updated_at (DATETIME, DEFAULT CURRENT_TIMESTAMP)

- **Relationships**:
  - Links to WebsiteContent via page_slug

- **Validation rules**:
  - page_slug: Required, unique
  - meta_title: Max 60 chars
  - meta_description: Max 160 chars

### ImageAsset
- **Fields**:
  - id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
  - filename (TEXT, NOT NULL) - Original filename
  - filepath (TEXT, NOT NULL) - Full path relative to project
  - alt_text (TEXT) - Alt text for accessibility
  - caption (TEXT) - Image caption
  - created_at (DATETIME, DEFAULT CURRENT_TIMESTAMP)
  - file_size (INTEGER) - File size in bytes
  - mime_type (TEXT) - MIME type of the file

- **Relationships**:
  - Referenced by WebsiteContent in featured_image_path

- **Validation rules**:
  - filename: Required
  - filepath: Required, must exist in project assets
  - mime_type: Valid image type

## State Transitions

### WebsiteContent
- Draft → Published: When is_published changes from 0 to 1
- Published → Draft: When is_published changes from 1 to 0
- Content Updated: When updated_at timestamp is modified

## Database Schema

```sql
-- Content table
CREATE TABLE IF NOT EXISTS website_content (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    featured_image_path TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_published BOOLEAN DEFAULT 1,
    author TEXT,
    tags TEXT
);

-- Metadata table
CREATE TABLE IF NOT EXISTS page_metadata (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_slug TEXT UNIQUE NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    og_title TEXT,
    og_description TEXT,
    og_image_path TEXT,
    canonical_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Image assets table
CREATE TABLE IF NOT EXISTS image_assets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    filepath TEXT NOT NULL,
    alt_text TEXT,
    caption TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    file_size INTEGER,
    mime_type TEXT
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_content_slug ON website_content(slug);
CREATE INDEX IF NOT EXISTS idx_content_published ON website_content(is_published);
CREATE INDEX IF NOT EXISTS idx_content_updated ON website_content(updated_at);
CREATE INDEX IF NOT EXISTS idx_metadata_page ON page_metadata(page_slug);
```