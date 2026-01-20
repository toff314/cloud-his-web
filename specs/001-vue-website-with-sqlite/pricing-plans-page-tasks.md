---

description: "Task list for Pricing Plans page with package cards and comparison table"
---

# Tasks: Pricing Plans Page

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

## Phase 4: User Story 1 Extension - Pricing Plans Page

**Goal**: Create the main "版本套餐" page with title "请选择您喜欢的套餐" and hint text "共6个，请滑动查看". Create a horizontal scrollable package card container component supporting multiple package cards. Inside the container, create "包月套餐" card with package name, highlighted red price "￥100元", validity period "30天", detailed package description, and "请选择" button with hover and selected interaction states. Also create "包年套餐" card with package name, highlighted red price "￥200元", validity period "365天", detailed package description, and "请选择" button with hover and selected interaction states. Create "各版本套餐对比" table region with table title "各版本套餐对比". Implement the comparison table with feature/permission names in the first column, package names in the first row, and use "√" symbols, specific numbers, or leave cells blank to indicate support status.

**Independent Test**: The pricing plans page should display the title, hint text, scrollable package cards with both monthly and annual packages, and a comparison table with clear indication of features across packages.

### Implementation for User Story 1 Extension

- [ ] T043 [US1] Create PricingPlans page component at frontend/src/pages/PricingPlans.vue
- [ ] T044 [US1] Add "请选择您喜欢的套餐" title to pricing plans page
- [ ] T045 [US1] Add "共6个，请滑动查看" hint text to pricing plans page
- [ ] T046 [US1] Create horizontal scrollable package card container component at frontend/src/components/PackageCardContainer.vue
- [ ] T047 [US1] Implement horizontal scrolling functionality for package card container
- [ ] T048 [US1] Add scroll indicators to package card container
- [ ] T049 [US1] Create PackageCard component at frontend/src/components/PackageCard.vue
- [ ] T050 [US1] Add "包月套餐" card to package card container
- [ ] T051 [US1] Add package name to "包月套餐" card
- [ ] T052 [US1] Add highlighted red price "￥100元" to "包月套餐" card
- [ ] T053 [US1] Add validity period "30天" to "包月套餐" card
- [ ] T054 [US1] Add detailed package description to "包月套餐" card
- [ ] T055 [US1] Add "请选择" button to "包月套餐" card
- [ ] T056 [US1] Implement hover state for "包月套餐" card
- [ ] T057 [US1] Implement selected state for "包月套餐" card
- [ ] T058 [US1] Add "包年套餐" card to package card container
- [ ] T059 [US1] Add package name to "包年套餐" card
- [ ] T060 [US1] Add highlighted red price "￥200元" to "包年套餐" card
- [ ] T061 [US1] Add validity period "365天" to "包年套餐" card
- [ ] T062 [US1] Add detailed package description to "包年套餐" card
- [ ] T063 [US1] Add "请选择" button to "包年套餐" card
- [ ] T064 [US1] Implement hover state for "包年套餐" card
- [ ] T065 [US1] Implement selected state for "包年套餐" card
- [ ] T066 [US1] Create "各版本套餐对比" table region
- [ ] T067 [US1] Add "各版本套餐对比" table title
- [ ] T068 [US1] Create comparison table component at frontend/src/components/ComparisonTable.vue
- [ ] T069 [US1] Implement table with feature/permission names in first column
- [ ] T070 [US1] Implement table with package names in first row
- [ ] T071 [US1] Add sample features to comparison table (e.g., user accounts, storage, support)
- [ ] T072 [US1] Add sample package names to comparison table (e.g., VIP套餐, 尊享套餐)
- [ ] T073 [US1] Implement "√" symbol for supported features in table
- [ ] T074 [US1] Implement specific numbers for quantitative features in table
- [ ] T075 [US1] Leave cells blank for unsupported features in table
- [ ] T076 [US1] Style comparison table with clear visual distinction
- [ ] T077 [US1] Add alternating row colors to comparison table
- [ ] T078 [US1] Add borders to table cells for better readability
- [ ] T079 [US1] Style package cards with consistent design
- [ ] T080 [US1] Add shadows to package cards for depth
- [ ] T081 [US1] Add smooth transitions to card interactions
- [ ] T082 [US1] Add responsive design for package cards
- [ ] T083 [US1] Add responsive design for comparison table
- [ ] T084 [US1] Add scroll buttons for package card container (left/right arrows)
- [ ] T085 [US1] Add keyboard navigation support for package cards
- [ ] T086 [US1] Add touch swipe support for mobile devices
- [ ] T087 [US1] Add focus states for accessibility
- [ ] T088 [US1] Add ARIA attributes for accessibility
- [ ] T089 [US1] Create mock data for package cards
- [ ] T090 [US1] Create mock data for comparison table
- [ ] T091 [US1] Add loading states for dynamic content
- [ ] T092 [US1] Add error handling for content loading
- [ ] T093 [US1] Add animations to package card interactions
- [ ] T094 [US1] Style the "请选择" button consistently
- [ ] T095 [US1] Add hover effects to "请选择" button
- [ ] T096 [US1] Add active state to "请选择" button
- [ ] T097 [US1] Add tooltips to features in comparison table if needed
- [ ] T098 [US1] Add search/filter functionality to comparison table if needed
- [ ] T099 [US1] Optimize package card images for web display
- [ ] T100 [US1] Test page layout across different screen sizes

**Checkpoint**: At this point, the Pricing Plans page should be fully functional with scrollable package cards and comparison table as specified.

---

## Phase 5: User Story 2 - Manage Website Metadata (Priority: P2)

**Goal**: Enable content managers to manage website metadata locally without external dependencies.

**Independent Test**: Content managers should be able to update website metadata stored in the local SQLite database.

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T101 [P] [US2] Contract test for GET /metadata endpoint in backend/tests/contract/test-metadata-api.js
- [ ] T102 [P] [US2] Contract test for GET /metadata/:page_slug endpoint in backend/tests/contract/test-metadata-slug-api.js

### Implementation for User Story 2

- [ ] T103 [P] [US2] Create ImageAsset model in backend/src/models/image-asset.model.js
- [ ] T104 [US2] Extend ContentService to handle metadata operations
- [ ] T105 [US2] Create ImageAsset service in backend/src/services/image-asset.service.js
- [ ] T106 [US2] Add metadata retrieval to metadata routes
- [ ] T107 [US2] Create metadata management components in frontend/src/components/MetadataEditor.vue
- [ ] T108 [US2] Add metadata display to ContentDisplay component
- [ ] T109 [US2] Implement metadata update functionality
- [ ] T110 [US2] Add SEO meta tags to page head based on metadata

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 6: User Story 3 - View Images Locally (Priority: P3)

**Goal**: Allow users to view images on the website without uploads happening externally to maintain privacy.

**Independent Test**: Images should be served locally without any external upload functionality.

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T111 [P] [US3] Contract test for GET /images endpoint in backend/tests/contract/test-images-api.js

### Implementation for User Story 3

- [ ] T112 [P] [US3] Create ImageAssets routes in backend/src/routes/image-assets.route.js
- [ ] T113 [US3] Add image asset retrieval to ImageAsset service
- [ ] T114 [US3] Create ImageGallery component in frontend/src/components/ImageGallery.vue
- [ ] T115 [US3] Implement local image display in ContentDisplay component
- [ ] T116 [US3] Add image asset listing functionality
- [ ] T117 [US3] Ensure no external image upload functionality exists

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T118 [P] Documentation updates in docs/
- [ ] T119 Code cleanup and refactoring
- [ ] T120 Performance optimization across all stories
- [ ] T121 [P] Additional unit tests (if requested) in tests/unit/
- [ ] T122 Security hardening
- [ ] T123 Run quickstart.md validation

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