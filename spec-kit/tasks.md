---

description: "Task list for comprehensive Vue website with multiple pages and components"
---

# Tasks: Cloud-HIS Website

**Input**: Design documents from `/specs/001-vue-website-with-sqlite/` and user requirements
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

## Phase 3: User Story 1 - Top Navigation Bar Component (Priority: P1) 🎯 MVP

**Goal**: Create a top navigation bar component with "智慧云门诊" logo on the left, middle navigation menu ("首页"[highlighted], "产品介绍"[with dropdown submenu: 智慧云药房, 智慧云门诊, 社区医院统管平台, 互联网医院], "解决方案", "客户案例", "关于我们"), right action area ("免费试用", "版本套餐" buttons and gray "登录" button), and fixed to the top of the page.

**Independent Test**: The top navigation bar should display correctly with all elements in their proper positions, dropdown menu should work, and remain fixed at the top of the page.

### Implementation for User Story 1

- [X] T016 [US1] Create Header component with navigation bar at frontend/src/components/Header.vue
- [X] T017 [US1] Add "智慧云门诊" logo to left side of header
- [X] T018 [US1] Create navigation menu in middle section of header
- [X] T019 [US1] Add "首页" navigation item with highlight styling
- [X] T020 [US1] Add "产品介绍" navigation item with dropdown functionality
- [X] T021 [US1] Add "智慧云药房" submenu item to dropdown
- [X] T022 [US1] Add "智慧云门诊" submenu item to dropdown
- [X] T023 [US1] Add "社区医院统管平台" submenu item to dropdown
- [X] T024 [US1] Add "互联网医院" submenu item to dropdown
- [X] T025 [US1] Add "解决方案" navigation item
- [X] T026 [US1] Add "客户案例" navigation item
- [X] T027 [US1] Add "关于我们" navigation item
- [X] T028 [US1] Add "免费试用" button to right side of header
- [X] T029 [US1] Add "版本套餐" button to right side of header
- [X] T030 [US1] Add "登录" button with gray styling to right side of header
- [X] T031 [US1] Style header to be fixed at top of page
- [X] T032 [US1] Implement dropdown menu functionality for "产品介绍"
- [X] T033 [US1] Add hover effects to navigation items
- [X] T034 [US1] Add active state styling for current page
- [X] T035 [US1] Add responsive design for mobile navigation
- [X] T036 [US1] Add hamburger menu for mobile view
- [X] T037 [US1] Add smooth transitions for dropdown menu
- [X] T038 [US1] Add accessibility attributes to navigation elements
- [X] T039 [US1] Add keyboard navigation support
- [X] T040 [US1] Test navigation functionality across different screen sizes

**Checkpoint**: At this point, the top navigation bar should be fully functional with all specified elements.

---

## Phase 4: User Story 2 - Product Introduction Page (Priority: P2)

**Goal**: Create the "产品介绍" main page with a grid layout showing 6 functional modules in 2 rows, each module containing a circular placeholder image and text title/description. Modules: "智慧云药房: 门诊无需配备实体药房...", "智慧云门诊", "AI在线开方服务", "社区医院统管平台", "互联网医院", "库房管理".

**Independent Test**: The product introduction page should display 6 feature modules in a responsive 2x3 grid layout with circular images and descriptive text.

### Implementation for User Story 2

- [X] T041 [US2] Create ProductIntroduction page component at frontend/src/pages/ProductIntroduction.vue
- [X] T042 [US2] Create FeatureModule component for individual feature display at frontend/src/components/FeatureModule.vue
- [X] T043 [US2] Add "产品介绍" route to router configuration
- [X] T044 [US2] Style FeatureModule component with circular image placeholder
- [X] T045 [US2] Implement grid layout (2x3) for feature modules
- [X] T046 [US2] Add "智慧云药房" module with description: "门诊无需配备实体药房..."
- [X] T047 [US2] Add "智慧云门诊" module with description
- [X] T048 [US2] Add "AI在线开方服务" module with description
- [X] T049 [US2] Add "社区医院统管平台" module with description
- [X] T050 [US2] Add "互联网医院" module with description
- [X] T051 [US2] Add "库房管理" module with description
- [X] T052 [US2] Implement responsive design for grid layout
- [X] T053 [US2] Add hover effects to feature modules
- [X] T054 [US2] Style circular image placeholders with CSS
- [X] T055 [US2] Add transition animations between modules
- [X] T056 [US2] Link "产品介绍" in navigation to the new page
- [X] T057 [US2] Add placeholder images to assets folder
- [X] T058 [US2] Optimize images for web display
- [X] T059 [US2] Add loading animation for feature modules
- [X] T060 [US2] Add accessibility attributes to feature modules

**Checkpoint**: At this point, the Product Introduction page should be fully functional with 6 feature modules displayed in a grid layout.

---

## Phase 5: User Story 3 - Solutions Page (Priority: P3)

**Goal**: Create the "解决方案" main page with 5 solution buttons arranged horizontally ("智慧云门诊", "智慧云药房", "医院HIS对接", "AI辅诊", "社区医院合作", "中医馆一键部署"), a central image display that changes when buttons are clicked, and text descriptions below that also change with button selection.

**Independent Test**: The solutions page should display 5 solution buttons horizontally, show corresponding large images in the center when clicked, and update text descriptions below accordingly.

### Implementation for User Story 3

- [X] T061 [US3] Create Solutions page component at frontend/src/pages/Solutions.vue
- [X] T062 [US3] Create SolutionButton component for individual solution buttons at frontend/src/components/SolutionButton.vue
- [X] T063 [US3] Add "解决方案" route to router configuration
- [X] T064 [US3] Style horizontal layout for solution buttons
- [X] T065 [US3] Implement button click functionality to switch content
- [X] T066 [US3] Create SolutionContent component for image and text display at frontend/src/components/SolutionContent.vue
- [X] T067 [US3] Add "智慧云门诊" solution button with functionality
- [X] T068 [US3] Add "智慧云药房" solution button with functionality
- [X] T069 [US3] Add "医院HIS对接" solution button with functionality
- [X] T070 [US3] Add "AI辅诊" solution button with functionality
- [X] T071 [US3] Add "社区医院合作" solution button with functionality
- [X] T072 [US3] Add "中医馆一键部署" solution button with functionality
- [X] T073 [US3] Implement central image display area that updates on button click
- [X] T074 [US3] Implement text description area that updates on button click
- [X] T075 [US3] Add smooth transitions between solution views
- [X] T076 [US3] Add active state styling for selected solution button
- [X] T077 [US3] Link "解决方案" in navigation to the new page
- [X] T078 [US3] Add solution-specific images to assets folder
- [X] T079 [US3] Create mock data for solution content (images and descriptions)
- [X] T080 [US3] Implement responsive design for solution buttons
- [X] T081 [US3] Add hover effects to solution buttons

**Checkpoint**: At this point, the Solutions page should be fully functional with 5 solution buttons that control the central image display and text descriptions.

---

## Phase 6: User Story 4 - Customer Cases Page (Priority: P4)

**Goal**: Create the "客户案例" main page to showcase partner hospital logos and cases, with 3 rows of 3 columns of图文结合 customer cases, each containing a hospital logo image and hospital name text.

**Independent Test**: The customer cases page should display 9 customer cases in a 3x3 grid layout, each with a hospital logo and name.

### Implementation for User Story 4

- [X] T082 [US4] Create CustomerCases page component at frontend/src/pages/CustomerCases.vue
- [X] T083 [US4] Create CustomerCaseItem component for individual case display at frontend/src/components/CustomerCaseItem.vue
- [X] T084 [US4] Add "客户案例" route to router configuration
- [X] T085 [US4] Style 3x3 grid layout for customer cases
- [X] T086 [US4] Implement responsive design for grid layout
- [X] T087 [US4] Add first row of 3 customer cases with hospital logos and names
- [X] T088 [US4] Add second row of 3 customer cases with hospital logos and names
- [X] T089 [US4] Add third row of 3 customer cases with hospital logos and names
- [X] T090 [US4] Create placeholder images for hospital logos
- [X] T091 [US4] Add hospital names next to their respective logos
- [X] T092 [US4] Style hospital name text to appear to the left of the logo
- [X] T093 [US4] Add hover effects to customer case items
- [X] T094 [US4] Implement smooth transitions for hover effects
- [X] T095 [US4] Add spacing between grid items
- [X] T096 [US4] Add border styling to customer case items
- [X] T097 [US4] Link "客户案例" in navigation to the new page
- [X] T098 [US4] Add hospital logo images to assets folder
- [X] T099 [US4] Optimize images for web display
- [X] T100 [US4] Create mock data for customer cases (hospital names and logos)
- [X] T101 [US4] Add loading animation for customer cases

**Checkpoint**: At this point, the Customer Cases page should be fully functional with 9 customer cases displayed in a 3x3 grid layout.

---

## Phase 7: User Story 5 - Home Page (Priority: P5)

**Goal**: Create the "首页" main page with sections from top to bottom: 1) Carousel area (supports multi-image configuration and auto-play); 2) Product introduction area (reference product intro page, take 1 row for arrangement); 3) Solutions area (reference "解决方案" page, take 1 row for arrangement); 4) Customer cases area (reference "客户案例" page, take upper and middle parts for arrangement).

**Independent Test**: The home page should display all four sections in a vertical layout: carousel at the top, followed by product introduction, solutions, and customer cases sections.

### Implementation for User Story 5

- [X] T102 [US5] Create Carousel component for banner images at frontend/src/components/Carousel.vue
- [X] [US5] Create Carousel service for managing carousel data at frontend/src/services/carousel.service.js
- [X] T103 [US5] Add auto-play functionality to Carousel component
- [X] T104 [US5] Add navigation controls to Carousel component
- [X] T105 [US5] Add indicators to Carousel component
- [X] T106 [US5] Create ProductIntroSection component for product introduction area at frontend/src/components/ProductIntroSection.vue
- [X] T107 [US5] Adapt product introduction content for home page (one row only)
- [X] T108 [US5] Create SolutionsSection component for solutions area at frontend/src/components/SolutionsSection.vue
- [X] T109 [US5] Adapt solutions content for home page (one row only)
- [X] T110 [US5] Create CustomerCasesSection component for customer cases area at frontend/src/components/CustomerCasesSection.vue
- [X] T111 [US5] Adapt customer cases content for home page (upper and middle parts)
- [X] T112 [US5] Modify Home.vue to include all four sections
- [X] T113 [US5] Add backend API endpoint for carousel configuration at backend/src/routes/carousel.route.js
- [X] T114 [US5] Create Carousel model for storing carousel data at backend/src/models/carousel.model.js
- [X] T115 [US5] Create Carousel service for backend at backend/src/services/carousel.service.js
- [X] T116 [US5] Add carousel images to assets folder
- [X] T117 [US5] Add product introduction images to assets folder
- [X] T118 [US5] Add solution images to assets folder
- [X] T119 [US5] Add customer case images to assets folder
- [X] T120 [US5] Style carousel section with appropriate dimensions
- [X] T121 [US5] Style product introduction section to match home page layout
- [X] T122 [US5] Style solutions section to match home page layout
- [X] T123 [US5] Style customer cases section to match home page layout
- [X] T124 [US5] Add smooth scrolling between sections
- [X] T125 [US5] Add responsive design for all sections
- [X] T126 [US5] Add loading states for dynamic content
- [X] T127 [US5] Add error handling for carousel images
- [X] T128 [US5] Optimize images for web display
- [X] T129 [US5] Create mock data for carousel content
- [X] T130 [US5] Create mock data for product introduction (one row)
- [X] T131 [US5] Create mock data for solutions (one row)
- [X] T132 [US5] Create mock data for customer cases (upper and middle parts)
- [X] T133 [US5] Add accessibility features to carousel
- [X] T134 [US5] Add keyboard navigation to carousel
- [X] T135 [US5] Add touch swipe support to carousel (mobile)
- [X] T136 [US5] Add transition animations between carousel slides

**Checkpoint**: At this point, the Home page should be fully functional with all four sections: carousel, product introduction, solutions, and customer cases.

---

## Phase 8: User Story 6 - Footer Component (Priority: P6)

**Goal**: Create a footer component with two sections: left side contains ("智慧云门诊") ICP filing, company name, company address; right side contains WeChat official account QR code, with left-right alignment.

**Independent Test**: The footer should display two sections with proper alignment: left section with ICP filing, company name and address, and right section with WeChat QR code.

### Implementation for User Story 6

- [X] T137 [US6] Create Footer component at frontend/src/components/Footer.vue
- [X] T138 [US6] Enhance Footer component with left section layout
- [X] T139 [US6] Add "智慧云门诊" text to left section of footer
- [X] T140 [US6] Add ICP filing information to left section of footer
- [X] T141 [US6] Add company name to left section of footer
- [X] T142 [US6] Add company address to left section of footer
- [X] T143 [US6] Enhance Footer component with right section layout
- [X] T144 [US6] Add WeChat official account QR code to right section of footer
- [X] T145 [US6] Style left and right sections with proper alignment
- [X] T146 [US6] Add responsive design for footer sections
- [X] T147 [US6] Add spacing between footer sections
- [X] T148 [US6] Style footer background and text colors
- [X] T149 [US6] Add copyright notice to footer
- [X] T150 [US6] Add link to ICP filing if applicable
- [X] T151 [US6] Add hover effect to QR code if needed
- [X] T152 [US6] Add tooltip to QR code explaining its purpose
- [X] T153 [US6] Add alternative text for QR code image
- [X] T154 [US6] Create placeholder QR code image
- [X] T155 [US6] Add QR code image to assets folder
- [X] T156 [US6] Optimize QR code image for web display
- [X] T157 [US6] Add flexbox or grid layout for left-right alignment
- [X] T158 [US6] Add media queries for mobile responsiveness
- [X] T159 [US6] Add padding and margins for proper spacing
- [X] T160 [US6] Test footer display across different screen sizes
- [X] T161 [US6] Add accessibility attributes to footer elements
- [X] T162 [US6] Ensure footer stays at bottom of page

**Checkpoint**: At this point, the Footer component should be fully functional with left and right sections as specified.

---

## Phase 9: User Story 7 - Right Floating Navigation Component (Priority: P7)

**Goal**: Create a right floating navigation component with "联系电话", "客服微信", "免费试用" and "立即登录" buttons.

**Independent Test**: The floating navigation should appear on the right side of the screen and contain all four specified buttons.

### Implementation for User Story 7

- [X] T163 [US7] Create RightFloatingNav component at frontend/src/components/RightFloatingNav.vue
- [X] T164 [US7] Add "联系电话" button to floating navigation
- [X] T165 [US7] Add "客服微信" button to floating navigation
- [X] T166 [US7] Add "免费试用" button to floating navigation
- [X] T167 [US7] Add "立即登录" button to floating navigation
- [X] T168 [US7] Style floating navigation to position on right side of screen
- [X] T169 [US7] Add z-index to ensure navigation floats above other content
- [X] T170 [US7] Add smooth hover effects to buttons
- [X] T171 [US7] Add icons to each button for better UX
- [X] T172 [US7] Style buttons with consistent design
- [X] T173 [US7] Add vertical stacking for buttons in floating nav
- [X] T174 [US7] Add subtle shadow to floating navigation
- [X] T175 [US7] Add smooth transition animations
- [X] T176 [US7] Implement click functionality for "联系电话" button
- [X] T177 [US7] Implement click functionality for "客服微信" button
- [X] T178 [US7] Implement click functionality for "免费试用" button
- [X] T179 [US7] Implement click functionality for "立即登录" button
- [X] T180 [US7] Add phone number popup/modal for "联系电话" button
- [X] T181 [US7] Add WeChat QR code popup/modal for "客服微信" button
- [X] T182 [US7] Add redirect functionality for "免费试用" button
- [X] T183 [US7] Add redirect functionality for "立即登录" button
- [X] T184 [US7] Add responsive design for floating navigation
- [X] T185 [US7] Add media queries to hide floating nav on small screens if needed
- [X] T186 [US7] Add accessibility attributes to buttons
- [X] T187 [US7] Add keyboard navigation support
- [X] T188 [US7] Add tooltip functionality to buttons
- [X] T189 [US7] Create placeholder images for WeChat QR code
- [X] T190 [US7] Add WeChat QR code image to assets folder
- [X] T191 [US7] Optimize images for web display
- [X] T192 [US7] Add animation for floating effect
- [X] T193 [US7] Add smooth show/hide functionality if needed
- [X] T194 [US7] Integrate floating navigation with App.vue
- [X] T195 [US7] Test floating navigation across different pages

**Checkpoint**: At this point, the Right Floating Navigation component should be fully functional with all four buttons.

---

## Phase 10: User Story 8 - About Us Page (Priority: P8)

**Goal**: Create the "关于我们" main page with sections from top to bottom: 1) Company intro area with title "公司简介", company image placeholder on the right, and detailed company intro text on the left with editable backend configuration interface; 2) Honors area with title "荣誉资质" and four side-by-side certificate display units below, each containing a certificate image placeholder and certificate name text ("社区医院多源处方智能审方与尚配协同方法及系统", "社区医院多源处方智能审方与尚配协同方法及系统", "兴邦智慧云药房库存智能预警系统", "软著证书二"); 3) Company vision area with title "公司愿景" and 3 horizontally arranged image-text combinations below: "服务至上", "中医文化传承", "提升门诊效率".

**Independent Test**: The about us page should display all three sections with proper layout: company intro with image and text, honors with four certificates, and vision with three image-text combinations.

### Implementation for User Story 8

- [X] T196 [US8] Create AboutUs page component at frontend/src/pages/AboutUs.vue
- [X] T197 [US8] Add "关于我们" route to router configuration
- [X] T198 [US8] Add "公司简介" section title to About page
- [X] T199 [US8] Create company image placeholder area on the right side of intro section
- [X] T200 [US8] Add detailed company intro text on the left side of intro section
- [X] T201 [US8] Style company intro section with left-right layout
- [X] T202 [US8] Add editable backend configuration interface for company intro text
- [X] T203 [US8] Create backend API endpoint for company intro content at backend/src/routes/about.route.js
- [X] T204 [US8] Create AboutContent model for storing about page data at backend/src/models/about-content.model.js
- [X] T205 [US8] Create AboutContent service for managing about page data at backend/src/services/about-content.service.js
- [X] T206 [US8] Add honors area to About page component
- [X] T207 [US8] Add "荣誉资质" section title to About page
- [X] T208 [US8] Create four side-by-side certificate display units in honors area
- [X] T209 [US8] Add certificate image placeholders to each certificate unit
- [X] T210 [US8] Add first certificate name: "社区医院多源处方智能审方与尚配协同方法及系统"
- [X] T211 [US8] Add second certificate name: "社区医院多源处方智能审方与尚配协同方法及系统"
- [X] T212 [US8] Add third certificate name: "兴邦智慧云药房库存智能预警系统"
- [X] T213 [US8] Add fourth certificate name: "软著证书二"
- [X] T214 [US8] Style honors area with grid layout for four certificates
- [X] T215 [US8] Create company vision area in About page component
- [X] T216 [US8] Add "公司愿景" section title to About page
- [X] T217 [US8] Create three horizontally arranged vision items in vision area
- [X] T218 [US8] Add "服务至上" vision item with image and text
- [X] T219 [US8] Add "中医文化传承" vision item with image and text
- [X] T220 [US8] Add "提升门诊效率" vision item with image and text
- [X] T221 [US8] Style vision items with image above text layout
- [X] T222 [US8] Add spacing between all sections
- [X] T223 [US8] Add responsive design for all sections
- [X] T224 [US8] Add company image placeholder to assets folder
- [X] T225 [US8] Add certificate image placeholders to assets folder
- [X] T226 [US8] Add vision images placeholders to assets folder
- [X] T227 [US8] Optimize images for web display
- [X] T228 [US8] Add smooth scrolling between sections
- [X] T229 [US8] Add animations to vision items
- [X] T230 [US8] Add hover effects to certificate units
- [X] T231 [US8] Add loading states for dynamic content
- [X] T232 [US8] Add error handling for content loading
- [X] T233 [US8] Create mock data for company intro content
- [X] T234 [US8] Create mock data for honors/certificates
- [X] T235 [US8] Create mock data for company vision items
- [X] T236 [US8] Add accessibility features to all sections
- [X] T237 [US8] Add proper alt text to all images
- [X] T238 [US8] Add keyboard navigation support
- [X] T239 [US8] Style consistent typography across all sections
- [X] T240 [US8] Add section dividers for visual separation
- [X] T241 [US8] Add anchor links for easy navigation within the page
- [X] T242 [US8] Test page layout across different screen sizes

**Checkpoint**: At this point, the About Us page should be fully functional with all three sections as specified.

---

## Phase 11: User Story 9 - Pricing Plans Page (Priority: P9)

**Goal**: Create the "版本套餐" main page with title "请选择您喜欢的套餐" and hint text "共6个，请滑动查看". Create a horizontal scrollable package card container component supporting multiple package cards. Inside the container, create "包月套餐" card with package name, highlighted red price "￥100元", validity period "30天", detailed package description, and "请选择" button with hover and selected interaction states. Also create "包年套餐" card with package name, highlighted red price "￥200元", validity period "365天", detailed package description, and "请选择" button with hover and selected interaction states. Create "各版本套餐对比" table region with table title "各版本套餐对比". Implement the comparison table with feature/permission names in the first column, package names in the first row, and use "√" symbols, specific numbers, or leave cells blank to indicate support status.

**Independent Test**: The pricing plans page should display the title, hint text, scrollable package cards with both monthly and annual packages, and a comparison table with clear indication of features across packages.

### Implementation for User Story 9

- [X] T243 [US9] Create PricingPlans page component at frontend/src/pages/PricingPlans.vue
- [X] T244 [US9] Add "请选择您喜欢的套餐" title to pricing plans page
- [X] T245 [US9] Add "共6个，请滑动查看" hint text to pricing plans page
- [X] T246 [US9] Create horizontal scrollable package card container component at frontend/src/components/PackageCardContainer.vue
- [X] T247 [US9] Implement horizontal scrolling functionality for package card container
- [X] T248 [US9] Add scroll indicators to package card container
- [X] T249 [US9] Create PackageCard component at frontend/src/components/PackageCard.vue
- [X] T250 [US9] Add "包月套餐" card to package card container
- [X] T251 [US9] Add package name to "包月套餐" card
- [X] T252 [US9] Add highlighted red price "￥100元" to "包月套餐" card
- [X] T253 [US9] Add validity period "30天" to "包月套餐" card
- [X] T254 [US9] Add detailed package description to "包月套餐" card
- [X] T255 [US9] Add "请选择" button to "包月套餐" card
- [X] T256 [US9] Implement hover state for "包月套餐" card
- [X] T257 [US9] Implement selected state for "包月套餐" card
- [X] T258 [US9] Add "包年套餐" card to package card container
- [X] T259 [US9] Add package name to "包年套餐" card
- [X] T260 [US9] Add highlighted red price "￥200元" to "包年套餐" card
- [X] T261 [US9] Add validity period "365天" to "包年套餐" card
- [X] T262 [US9] Add detailed package description to "包年套餐" card
- [X] T263 [US9] Add "请选择" button to "包年套餐" card
- [X] T264 [US9] Implement hover state for "包年套餐" card
- [X] T265 [US9] Implement selected state for "包年套餐" card
- [X] T266 [US9] Create "各版本套餐对比" table region
- [X] T267 [US9] Add "各版本套餐对比" table title
- [X] T268 [US9] Create comparison table component at frontend/src/components/ComparisonTable.vue
- [X] T269 [US9] Implement table with feature/permission names in first column
- [X] T270 [US9] Implement table with package names in first row
- [X] T271 [US9] Add sample features to comparison table (e.g., user accounts, storage, support)
- [X] T272 [US9] Add sample package names to comparison table (e.g., VIP套餐, 尊享套餐)
- [X] T273 [US9] Implement "√" symbol for supported features in table
- [X] T274 [US9] Implement specific numbers for quantitative features in table
- [X] T275 [US9] Leave cells blank for unsupported features in table
- [X] T276 [US9] Style comparison table with clear visual distinction
- [X] T277 [US9] Add alternating row colors to comparison table
- [X] T278 [US9] Add borders to table cells for better readability
- [X] T279 [US9] Style package cards with consistent design
- [X] T280 [US9] Add shadows to package cards for depth
- [X] T281 [US9] Add smooth transitions to card interactions
- [X] T282 [US9] Add responsive design for package cards
- [X] T283 [US9] Add responsive design for comparison table
- [X] T284 [US9] Add scroll buttons for package card container (left/right arrows)
- [X] T285 [US9] Add keyboard navigation support for package cards
- [X] T286 [US9] Add touch swipe support for mobile devices
- [X] T287 [US9] Add focus states for accessibility
- [X] T288 [US9] Add ARIA attributes for accessibility
- [X] T289 [US9] Create mock data for package cards
- [X] T290 [US9] Create mock data for comparison table
- [X] T291 [US9] Add loading states for dynamic content
- [X] T292 [US9] Add error handling for content loading
- [X] T293 [US9] Add animations to package card interactions
- [X] T294 [US9] Style the "请选择" button consistently
- [X] T295 [US9] Add hover effects to "请选择" button
- [X] T296 [US9] Add active state to "请选择" button
- [X] T297 [US9] Add tooltips to features in comparison table if needed
- [X] T298 [US9] Add search/filter functionality to comparison table if needed
- [X] T299 [US9] Optimize package card images for web display
- [X] T300 [US9] Test page layout across different screen sizes

**Checkpoint**: At this point, the Pricing Plans page should be fully functional with scrollable package cards and comparison table as specified.

---

## Phase 12: User Story 10 - Free Trial Page (Priority: P10)

**Goal**: Create the "免费试用" main page with a left-right column layout container, form on the left, medical scene themed illustration on the right, and ensure it becomes stacked vertically on mobile. Create form title "免费试用申请" and form description "请填写以下信息，开启智慧云门诊体验". Create "手机号" input field with type tel and mark as required. Create "验证码" input field with "获取验证码" button on the right that sends SMS and starts 60-second countdown. Create "诊所名" and "联系人" input fields, both marked as required. Create "邀请码" input field marked as optional. Create "提交申请" main button at the bottom with form validation and submission API logic. Add privacy commitment text "患者至上 放心提问，我们承诺100%尊重患者，保护患者隐私". Embed specified medical scene themed illustration in the right column.

**Independent Test**: The free trial page should display the two-column layout on desktop, stacked on mobile, with all form fields, validation, and the medical illustration as specified.

### Implementation for User Story 10

- [X] T301 [US10] Create FreeTrial page component at frontend/src/pages/FreeTrial.vue
- [X] T302 [US10] Create left-right column layout container in FreeTrial page
- [X] T303 [US10] Style layout to become stacked vertically on mobile
- [X] T304 [US10] Add form section to left column
- [X] T305 [US10] Add medical illustration section to right column
- [X] T306 [US10] Add "免费试用申请" title to form
- [X] T307 [US10] Add "请填写以下信息，开启智慧云门诊体验" description to form
- [X] T308 [US10] Create phone number input field with type tel and required validation
- [X] T309 [US10] Create verification code input field with "获取验证码" button
- [X] T310 [US10] Implement SMS sending functionality for verification code button
- [X] T311 [US10] Implement 60-second countdown timer for verification button
- [X] T312 [US10] Disable verification button during countdown
- [X] T313 [US10] Create clinic name input field and mark as required
- [X] T314 [US10] Create contact person input field and mark as required
- [X] T315 [US10] Create invitation code input field and mark as optional
- [X] T316 [US10] Create "提交申请" main button at form bottom
- [X] T317 [US10] Implement form validation logic for all required fields
- [X] T318 [US10] Create API endpoint for form submission at backend/src/routes/trial-request.route.js
- [X] T319 [US10] Create TrialRequest model for storing trial requests at backend/src/models/trial-request.model.js
- [X] T320 [US10] Create TrialRequest service for handling trial requests at backend/src/services/trial-request.service.js
- [X] T321 [US10] Connect "提交申请" button to form submission API
- [X] T322 [US10] Add privacy commitment text "患者至上 放心提问，我们承诺100%尊重患者，保护患者隐私"
- [X] T323 [US10] Add medical scene illustration to right column
- [X] T324 [US10] Add responsive design to ensure proper layout on mobile
- [X] T325 [US10] Style form inputs with consistent design
- [X] T326 [US10] Style "提交申请" button with prominent styling
- [X] T327 [US10] Add error handling for form validation
- [X] T328 [US10] Add success message after form submission
- [X] T329 [US10] Add loading state for form submission
- [X] T330 [US10] Add placeholder images for medical illustrations
- [X] T331 [US10] Add image to assets folder
- [X] T332 [US10] Optimize medical illustration for web display
- [X] T333 [US10] Add accessibility attributes to form fields
- [X] T334 [US10] Add proper labels and ARIA attributes to inputs
- [X] T335 [US10] Add keyboard navigation support for form
- [X] T336 [US10] Add focus states for form inputs
- [X] T337 [US10] Implement proper error messaging for validation
- [X] T338 [US10] Add input masking for phone number field
- [X] T339 [US10] Add character limits to input fields where appropriate
- [X] T340 [US10] Add confirmation dialog before form submission if needed
- [X] T341 [US10] Add analytics tracking to form events if needed
- [X] T342 [US10] Create mock data for testing form submission
- [X] T343 [US10] Add responsive breakpoints for different screen sizes
- [X] T344 [US10] Test layout switching between desktop and mobile views
- [X] T345 [US10] Add smooth transitions between form states
- [X] T346 [US10] Style verification button with appropriate state changes
- [X] T347 [US10] Add tooltip to invitation code field explaining it's optional
- [X] T348 [US10] Add link to privacy policy if available
- [X] T349 [US10] Add terms and conditions acceptance checkbox if needed
- [X] T350 [US10] Test form functionality across different browsers
- [X] T351 [US10] Add input sanitization for security

**Checkpoint**: At this point, the Free Trial page should be fully functional with the two-column layout, form with all specified fields and validation, and medical illustration.

---

## Phase 13: User Story 11 - Browse Website Content (Priority: P11)

**Goal**: Allow visitors to browse website content seamlessly so they can access information easily.

**Independent Test**: The website should load properly and allow navigation between pages with content displayed correctly.

### Tests for User Story 11 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [X] T352 [P] [US11] Contract test for GET /content endpoint in backend/tests/contract/test-content-api.js
- [X] T353 [P] [US11] Contract test for GET /content/:slug endpoint in backend/tests/contract/test-content-slug-api.js

### Implementation for User Story 11

- [X] T354 [P] [US11] Create WebsiteContent model in backend/src/models/content.model.js
- [X] T355 [P] [US11] Create PageMetadata model in backend/src/models/page-metadata.model.js
- [X] T356 [US11] Create ContentService in backend/src/services/content.service.js
- [X] T357 [US11] Create Content routes in backend/src/routes/content.route.js
- [X] T358 [US11] Create Metadata routes in backend/src/routes/metadata.route.js
- [X] T359 [P] [US11] Create ContentDisplay component at frontend/src/components/ContentDisplay.vue
- [X] T360 [P] [US11] Create Home page component at frontend/src/pages/Home.vue
- [X] T361 [P] [US11] Create About page component at frontend/src/pages/About.vue
- [X] T362 [P] [US11] Create Contact page component at frontend/src/pages/Contact.vue
- [X] T363 [US11] Implement content retrieval in ContentDisplay component
- [X] T364 [US11] Connect Header navigation to router
- [X] T365 [US11] Add navigation highlighting for active route

**Checkpoint**: At this point, User Story 11 should be fully functional and testable independently

---

## Phase 14: User Story 12 - Manage Website Metadata (Priority: P12)

**Goal**: Enable content managers to manage website metadata locally without external dependencies.

**Independent Test**: Content managers should be able to update website metadata stored in the local SQLite database.

### Tests for User Story 12 (OPTIONAL - only if tests requested) ⚠️

- [X] T366 [P] [US12] Contract test for GET /metadata endpoint in backend/tests/contract/test-metadata-api.js
- [X] T367 [P] [US12] Contract test for GET /metadata/:page_slug endpoint in backend/tests/contract/test-metadata-slug-api.js

### Implementation for User Story 12

- [X] T368 [P] [US12] Create ImageAsset model in backend/src/models/image-asset.model.js
- [X] T369 [US12] Extend ContentService to handle metadata operations
- [X] T370 [US12] Create ImageAsset service in backend/src/services/image-asset.service.js
- [X] T371 [US12] Add metadata retrieval to metadata routes
- [X] T372 [US12] Create metadata management components in frontend/src/components/MetadataEditor.vue
- [X] T373 [US12] Add metadata display to ContentDisplay component
- [X] T374 [US12] Implement metadata update functionality
- [X] T375 [US12] Add SEO meta tags to page head based on metadata

**Checkpoint**: At this point, User Stories 11 AND 12 should both work independently

---

## Phase 15: User Story 13 - View Images Locally (Priority: P13)

**Goal**: Allow users to view images on the website without uploads happening externally to maintain privacy.

**Independent Test**: Images should be served locally without any external upload functionality.

### Tests for User Story 13 (OPTIONAL - only if tests requested) ⚠️

- [X] T376 [P] [US13] Contract test for GET /images endpoint in backend/tests/contract/test-images-api.js

### Implementation for User Story 13

- [X] T377 [P] [US13] Create ImageAssets routes in backend/src/routes/image-assets.route.js
- [X] T378 [US13] Add image asset retrieval to ImageAsset service
- [X] T379 [US13] Create ImageGallery component in frontend/src/components/ImageGallery.vue
- [X] T380 [US13] Implement local image display in ContentDisplay component
- [X] T381 [US13] Add image asset listing functionality
- [X] T382 [US13] Ensure no external image upload functionality exists

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T383 [P] Documentation updates in docs/
- [X] T384 Code cleanup and refactoring
- [X] T385 Performance optimization across all stories
- [X] T386 [P] Additional unit tests (if requested) in tests/unit/
- [X] T387 Security hardening
- [X] T388 Run quickstart.md validation
- [X] T389 Global styling consistency across all pages
- [X] T390 Cross-browser compatibility testing
- [X] T391 Accessibility compliance check (WCAG)
- [X] T392 Performance audit and optimization
- [X] T393 SEO optimization across all pages
- [X] T394 Mobile responsiveness verification
- [X] T395 Final integration testing

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
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 4 (P4)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 5 (P5)**: Depends on US1 (Header), US2 (Product Intro), US3 (Solutions), US4 (Customer Cases)
- **User Story 6 (P6)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 7 (P7)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 8 (P8)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 9 (P9)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 10 (P10)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 11 (P11)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 12 (P12)**: Can start after Foundational (Phase 2) - May integrate with US11 but should be independently testable
- **User Story 13 (P13)**: Can start after Foundational (Phase 2) - May integrate with US11/US12 but should be independently testable

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
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add User Story 5 → Test independently → Deploy/Demo
7. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
   - Developer E: User Story 5
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