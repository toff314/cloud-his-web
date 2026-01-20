---

description: "Task list for Product Introduction page with grid layout"
---

# Tasks: Product Introduction Page

**Input**: Design documents from `/specs/001-vue-website-with-sqlite/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file path in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 [P] Initialize backend package.json with express, sqlite3, cors, helmet, morgan dependencies
- [ ] T003 [P] Initialize frontend package.json with vue@next, vue-router@4, pinia dependencies
- [ ] T004 [P] Install development dependencies for backend (nodemon, jest, supertest)
- [ ] T005 [P] Install development dependencies for frontend (@vitejs/plugin-vue, vite)
- [ ] T006 Create initial directory structures for backend and frontend

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T007 Create database configuration file at backend/src/config/database.config.js
- [ ] T008 [P] Create database initialization service at backend/src/services/sqlite-initializer.service.js
- [ ] T009 Create main application entry point at backend/src/app.js
- [ ] T010 Create Vite configuration for frontend at frontend/vite.config.js
- [ ] T011 [P] Create basic routing configuration at frontend/src/router/index.js
- [ ] T012 [P] Create Pinia store configuration at frontend/src/store/index.js
- [ ] T013 Create API service to connect frontend to backend at frontend/src/services/api.service.js
- [ ] T014 Create content fetcher service at frontend/src/services/content-fetcher.service.js
- [ ] T015 Create basic App.vue component at frontend/src/App.vue

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Website Content (Priority: P1) 🎯 MVP

**Goal**: Allow visitors to browse website content seamlessly so they can access information easily.

**Independent Test**: The website should load properly and allow navigation between pages with content displayed correctly.

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T016 [P] [US1] Contract test for GET /content endpoint in backend/tests/contract/test-content-api.js
- [ ] T017 [P] [US1] Contract test for GET /content/:slug endpoint in backend/tests/contract/test-content-slug-api.js

### Implementation for User Story 1

- [ ] T018 [P] [US1] Create WebsiteContent model in backend/src/models/content.model.js
- [ ] T019 [P] [US1] Create PageMetadata model in backend/src/models/page-metadata.model.js
- [ ] T020 [US1] Create ContentService in backend/src/services/content.service.js
- [ ] T021 [US1] Create Content routes in backend/src/routes/content.route.js
- [ ] T022 [US1] Create Metadata routes in backend/src/routes/metadata.route.js
- [ ] T023 [P] [US1] Create Header component with navigation bar at frontend/src/components/Header.vue
- [ ] T024 [P] [US1] Create Footer component at frontend/src/components/Footer.vue
- [ ] T025 [P] [US1] Create ContentDisplay component at frontend/src/components/ContentDisplay.vue
- [ ] T026 [P] [US1] Create Home page component at frontend/src/pages/Home.vue
- [ ] T027 [P] [US1] Create About page component at frontend/src/pages/About.vue
- [ ] T028 [P] [US1] Create Contact page component at frontend/src/pages/Contact.vue
- [ ] T029 [US1] Implement content retrieval in ContentDisplay component
- [ ] T030 [US1] Connect Header navigation to router
- [ ] T031 [US1] Add navigation highlighting for active route
- [ ] T032 [US1] Implement dropdown menu for "产品介绍" in Header component
- [ ] T033 [US1] Add "智慧云药房" submenu item to dropdown
- [ ] T034 [US1] Add "智慧云门诊" submenu item to dropdown
- [ ] T035 [US1] Add "社区医院统管平台" submenu item to dropdown
- [ ] T036 [US1] Add "互联网医院" submenu item to dropdown
- [ ] T037 [US1] Add "免费试用" button to header
- [ ] T038 [US1] Add "版本套餐" button to header
- [ ] T039 [US1] Add "登录" button to header
- [ ] T040 [US1] Add "智慧云门诊" logo to header
- [ ] T041 [US1] Style header to be fixed at top of page
- [ ] T042 [US1] Style active navigation item ("首页") with highlight

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 1 Extension - Product Introduction Page

**Goal**: Create the main "产品介绍" page with a grid layout displaying 6 feature modules in 2 rows, each module containing a circular placeholder image and text title/description.

**Independent Test**: The product introduction page should display 6 feature modules in a responsive grid layout with circular images and descriptive text.

### Implementation for User Story 1 Extension

- [ ] T043 [US1] Create ProductIntroduction page component at frontend/src/pages/ProductIntroduction.vue
- [ ] T044 [US1] Create FeatureModule component for individual feature display at frontend/src/components/FeatureModule.vue
- [ ] T045 [US1] Add "产品介绍" route to router configuration
- [ ] T046 [US1] Style FeatureModule component with circular image placeholder
- [ ] T047 [US1] Implement grid layout (2x3) for feature modules
- [ ] T048 [US1] Add "智慧云药房" module with description: "门诊无需配备实体药房..."
- [ ] T049 [US1] Add "智慧云门诊" module with description
- [ ] T050 [US1] Add "AI在线开方服务" module with description
- [ ] T051 [US1] Add "社区医院统管平台" module with description
- [ ] T052 [US1] Add "互联网医院" module with description
- [ ] T053 [US1] Add "库房管理" module with description
- [ ] T054 [US1] Implement responsive design for grid layout
- [ ] T055 [US1] Add hover effects to feature modules
- [ ] T056 [US1] Style circular image placeholders with CSS
- [ ] T057 [US1] Add transition animations between modules
- [ ] T058 [US1] Link "产品介绍" in navigation to the new page
- [ ] T059 [US1] Add placeholder images to assets folder
- [ ] T060 [US1] Optimize images for web display

**Checkpoint**: At this point, the Product Introduction page should be fully functional with 6 feature modules displayed in a grid layout.

---

## Phase 5: User Story 2 - Manage Website Metadata (Priority: P2)

**Goal**: Enable content managers to manage website metadata locally without external dependencies.

**Independent Test**: Content managers should be able to update website metadata stored in the local SQLite database.

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T061 [P] [US2] Contract test for GET /metadata endpoint in backend/tests/contract/test-metadata-api.js
- [ ] T062 [P] [US2] Contract test for GET /metadata/:page_slug endpoint in backend/tests/contract/test-metadata-slug-api.js

### Implementation for User Story 2

- [ ] T063 [P] [US2] Create ImageAsset model in backend/src/models/image-asset.model.js
- [ ] T064 [US2] Extend ContentService to handle metadata operations
- [ ] T065 [US2] Create ImageAsset service in backend/src/services/image-asset.service.js
- [ ] T066 [US2] Add metadata retrieval to metadata routes
- [ ] T067 [US2] Create metadata management components in frontend/src/components/MetadataEditor.vue
- [ ] T068 [US2] Add metadata display to ContentDisplay component
- [ ] T069 [US2] Implement metadata update functionality
- [ ] T070 [US2] Add SEO meta tags to page head based on metadata

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 6: User Story 3 - View Images Locally (Priority: P3)

**Goal**: Allow users to view images on the website without uploads happening externally to maintain privacy.

**Independent Test**: Images should be served locally without any external upload functionality.

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T071 [P] [US3] Contract test for GET /images endpoint in backend/tests/contract/test-images-api.js

### Implementation for User Story 3

- [ ] T072 [P] [US3] Create ImageAssets routes in backend/src/routes/image-assets.route.js
- [ ] T073 [US3] Add image asset retrieval to ImageAsset service
- [ ] T074 [US3] Create ImageGallery component in frontend/src/components/ImageGallery.vue
- [ ] T075 [US3] Implement local image display in ContentDisplay component
- [ ] T076 [US3] Add image asset listing functionality
- [ ] T077 [US3] Ensure no external image upload functionality exists

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T078 [P] Documentation updates in docs/
- [ ] T079 Code cleanup and refactoring
- [ ] T080 Performance optimization across all stories
- [ ] T081 [P] Additional unit tests (if requested) in tests/unit/
- [ ] T082 Security hardening
- [ ] T083 Run quickstart.md validation

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
- **User Story 1 Extension**: Depends on User Story 1 completion
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
3. Add User Story 1 Extension → Test independently → Deploy/Demo
4. Add User Story 2 → Test independently → Deploy/Demo
5. Add User Story 3 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

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