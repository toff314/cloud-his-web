---

description: "Task list template for feature implementation"
---

# Tasks: Vue Website with SQLite

**Input**: Design documents from `/specs/001-vue-website-with-sqlite/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure per implementation plan
- [X] T002 [P] Initialize backend package.json with express, sqlite3, cors, helmet, morgan dependencies
- [X] T003 [P] Initialize frontend package.json with vue@next, vue-router@4, pinia dependencies
- [X] T004 [P] Install development dependencies for backend (nodemon, jest, supertest)
- [X] T005 [P] Install development dependencies for frontend (@vitejs/plugin-vue, vite)
- [X] T006 Create initial directory structures for backend and frontend

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [X] T007 Create database configuration file at backend/src/config/database.config.js
- [X] T008 [P] Create database initialization service at backend/src/services/sqlite-initializer.service.js
- [X] T009 Create main application entry point at backend/src/app.js
- [X] T010 Create Vite configuration for frontend at frontend/vite.config.js
- [X] T011 [P] Create basic routing configuration at frontend/src/router/index.js
- [X] T012 [P] Create Pinia store configuration at frontend/src/store/index.js
- [X] T013 Create API service to connect frontend to backend at frontend/src/services/api.service.js
- [X] T014 Create content fetcher service at frontend/src/services/content-fetcher.service.js
- [X] T015 Create basic App.vue component at frontend/src/App.vue

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Website Content (Priority: P1) 🎯 MVP

**Goal**: Allow visitors to browse website content seamlessly so they can access information easily.

**Independent Test**: The website should load properly and allow navigation between pages with content displayed correctly.

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [X] T016 [P] [US1] Contract test for GET /content endpoint in backend/tests/contract/test-content-api.js
- [X] T017 [P] [US1] Contract test for GET /content/:slug endpoint in backend/tests/contract/test-content-slug-api.js

### Implementation for User Story 1

- [X] T018 [P] [US1] Create WebsiteContent model in backend/src/models/content.model.js
- [X] T019 [P] [US1] Create PageMetadata model in backend/src/models/page-metadata.model.js
- [X] T020 [US1] Create ContentService in backend/src/services/content.service.js
- [X] T021 [US1] Create Content routes in backend/src/routes/content.route.js
- [X] T022 [US1] Create Metadata routes in backend/src/routes/metadata.route.js
- [X] T023 [P] [US1] Create Header component with navigation bar at frontend/src/components/Header.vue
- [X] T024 [P] [US1] Create Footer component at frontend/src/components/Footer.vue
- [X] T025 [P] [US1] Create ContentDisplay component at frontend/src/components/ContentDisplay.vue
- [X] T026 [P] [US1] Create Home page component at frontend/src/pages/Home.vue
- [X] T027 [P] [US1] Create About page component at frontend/src/pages/About.vue
- [X] T028 [P] [US1] Create Contact page component at frontend/src/pages/Contact.vue
- [X] T029 [US1] Implement content retrieval in ContentDisplay component
- [X] T030 [US1] Connect Header navigation to router
- [X] T031 [US1] Add navigation highlighting for active route
- [X] T032 [US1] Implement dropdown menu for "产品介绍" in Header component
- [X] T033 [US1] Add "智慧云药房" submenu item to dropdown
- [X] T034 [US1] Add "智慧云门诊" submenu item to dropdown
- [X] T035 [US1] Add "社区医院统管平台" submenu item to dropdown
- [X] T036 [US1] Add "互联网医院" submenu item to dropdown
- [X] T037 [US1] Add "免费试用" button to header
- [X] T038 [US1] Add "版本套餐" button to header
- [X] T039 [US1] Add "登录" button to header
- [X] T040 [US1] Add "智慧云门诊" logo to header
- [X] T041 [US1] Style header to be fixed at top of page
- [X] T042 [US1] Style active navigation item ("首页") with highlight

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Manage Website Metadata (Priority: P2)

**Goal**: Enable content managers to manage website metadata locally without external dependencies.

**Independent Test**: Content managers should be able to update website metadata stored in the local SQLite database.

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [X] T043 [P] [US2] Contract test for GET /metadata endpoint in backend/tests/contract/test-metadata-api.js
- [X] T044 [P] [US2] Contract test for GET /metadata/:page_slug endpoint in backend/tests/contract/test-metadata-slug-api.js

### Implementation for User Story 2

- [X] T045 [P] [US2] Create ImageAsset model in backend/src/models/image-asset.model.js
- [X] T046 [US2] Extend ContentService to handle metadata operations
- [X] T047 [US2] Create ImageAsset service in backend/src/services/image-asset.service.js
- [X] T048 [US2] Add metadata retrieval to metadata routes
- [X] T049 [US2] Create metadata management components in frontend/src/components/MetadataEditor.vue
- [X] T050 [US2] Add metadata display to ContentDisplay component
- [X] T051 [US2] Implement metadata update functionality
- [X] T052 [US2] Add SEO meta tags to page head based on metadata

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - View Images Locally (Priority: P3)

**Goal**: Allow users to view images on the website without uploads happening externally to maintain privacy.

**Independent Test**: Images should be served locally without any external upload functionality.

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [X] T053 [P] [US3] Contract test for GET /images endpoint in backend/tests/contract/test-images-api.js

### Implementation for User Story 3

- [X] T054 [P] [US3] Create ImageAssets routes in backend/src/routes/image-assets.route.js
- [X] T055 [US3] Add image asset retrieval to ImageAsset service
- [X] T056 [US3] Create ImageGallery component in frontend/src/components/ImageGallery.vue
- [X] T057 [US3] Implement local image display in ContentDisplay component
- [X] T058 [US3] Add image asset listing functionality
- [X] T059 [US3] Ensure no external image upload functionality exists

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T060 [P] Documentation updates in docs/
- [X] T061 Code cleanup and refactoring
- [X] T062 Performance optimization across all stories
- [X] T063 [P] Additional unit tests (if requested) in tests/unit/
- [X] T064 Security hardening
- [X] T065 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
Task: "Contract test for GET /content endpoint in backend/tests/contract/test-content-api.js"
Task: "Contract test for GET /content/:slug endpoint in backend/tests/contract/test-content-slug-api.js"

# Launch all models for User Story 1 together:
Task: "Create WebsiteContent model in backend/src/models/content.model.js"
Task: "Create PageMetadata model in backend/src/models/page-metadata.model.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence