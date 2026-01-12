{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Arial-BoldMT;\f1\froman\fcharset0 Times-Bold;\f2\fswiss\fcharset0 ArialMT;
\f3\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 EduMall SRS v13 \'96 MODULE 1
\f1\fs48 \

\f0\fs61\fsmilli30667 USER, ROLE & ACCESS MANAGEMENT SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 1.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 1 defines the complete User, Role, Identity, and Access Management framework\uc0\u8232  for the EduMall ecosystem. This module governs how users are created, authenticated,\u8232  authorized, monitored, and governed across all EduMall products, DiLCe centres,\u8232  schools, colleges, institutes, and partner platforms.\u8232 \u8232  This module is foundational and applies to all other modules.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.2 User Categories
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall supports multiple user categories:\uc0\u8232 \u8232  \'95 Students\u8232  \'95 Parents / Guardians\u8232  \'95 Teachers / Mentors\u8232  \'95 Counselors\u8232  \'95 Heads of Department (HOD)\u8232  \'95 Centre Incharges\u8232  \'95 School / Institute Admins\u8232  \'95 DiLCe Centre Admins\u8232  \'95 Referral Promoters\u8232  \'95 Content Creators\u8232  \'95 EduMall HQ Admins\u8232  \'95 System Auditors\u8232 \u8232  Each user belongs to one or more organizations (tenant-aware).
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.3 Role-Based Access Control (RBAC)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Access is governed by role-based and permission-based controls.\uc0\u8232 \u8232  Key Principles:\u8232  \'95 Least-privilege access\u8232  \'95 Explicit permission grants\u8232  \'95 Hierarchical role inheritance\u8232  \'95 Context-aware permissions (course, batch, centre)\u8232 \u8232  Roles can be:\u8232  \'95 System-defined (core roles)\u8232  \'95 Tenant-defined (custom roles)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.4 Authentication Methods
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supported authentication methods include:\uc0\u8232 \u8232  \'95 Email + password\u8232  \'95 Mobile OTP\u8232  \'95 Passwordless login (OTP / magic link)\u8232  \'95 Institution SSO (future)\u8232  \'95 Device-based authentication (optional)\u8232 \u8232  Security rules:\u8232  \'95 Multi-factor authentication for admins\u8232  \'95 Session timeout policies\u8232  \'95 Concurrent login limits
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.5 Parent\'96Student Relationship Model
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports explicit parent\'96student binding:\uc0\u8232 \u8232  \'95 One parent \u8594  multiple students\u8232  \'95 One student \u8594  multiple parents (optional)\u8232  \'95 Parent access is read-only by default\u8232  \'95 Parent permissions are configurable\u8232 \u8232  Parents cannot:\u8232  \'95 Submit assessments\u8232  \'95 Modify learning paths\u8232  \'95 Interact as students
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.6 Organization & Tenant Association
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Users may belong to:\uc0\u8232 \u8232  \'95 Schools\u8232  \'95 Colleges\u8232  \'95 Institutes\u8232  \'95 DiLCe Centres\u8232  \'95 EduMall HQ\u8232 \u8232  A user can:\u8232  \'95 Belong to multiple tenants\u8232  \'95 Have different roles per tenant\u8232  \'95 Have isolated data visibility per tenant
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.7 Referral Promoter Role
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Referral Promoters are special users who can onboard learners through\uc0\u8232  QR codes or referral links.\u8232 \u8232  Capabilities:\u8232  \'95 Generate referral QR codes\u8232  \'95 Track leads and conversions\u8232  \'95 View referral performance dashboards\u8232 \u8232  Restrictions:\u8232  \'95 No access to academic data\u8232  \'95 No access to student performance
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.8 User Lifecycle Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 User lifecycle stages:\uc0\u8232 \u8232  \'95 Invited\u8232  \'95 Registered\u8232  \'95 Active\u8232  \'95 Suspended\u8232  \'95 Archived\u8232 \u8232  Lifecycle events trigger:\u8232  \'95 Notifications\u8232  \'95 Access revocation\u8232  \'95 Audit logs
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.9 Permissions & Overrides
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Permissions can be overridden by:\uc0\u8232 \u8232  \'95 Teacher (limited scope)\u8232  \'95 HOD (academic override)\u8232  \'95 Centre Incharge (operational override)\u8232  \'95 EduMall HQ (global override)\u8232 \u8232  All overrides require:\u8232  \'95 Justification\u8232  \'95 Audit trail
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.10 Data Security & Privacy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security principles:\uc0\u8232 \u8232  \'95 DPDP-compliant storage\u8232  \'95 Encrypted credentials\u8232  \'95 Role-based data masking\u8232  \'95 Activity logs for sensitive actions\u8232 \u8232  Users can:\u8232  \'95 View their data\u8232  \'95 Request corrections\u8232  \'95 Request deactivation
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.11 Audit & Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system maintains:\uc0\u8232 \u8232  \'95 Login audit logs\u8232  \'95 Permission change logs\u8232  \'95 Override action logs\u8232  \'95 Referral attribution logs\u8232 \u8232  Auditors have read-only access.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.12 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Support millions of users\u8232  \'95 Horizontal scaling\u8232  \'95 Stateless authentication services\u8232  \'95 High availability architecture
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.13 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Duplicate accounts\u8232  \'95 Role conflicts\u8232  \'95 Orphaned parent/student links\u8232  \'95 Cross-tenant access violations\u8232  \'95 Session hijack attempts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 1.14 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module is a dependency for all other modules including:\uc0\u8232  \'95 Course Management\u8232  \'95 Live Classroom\u8232  \'95 Assessments\u8232  \'95 AI Engine\u8232  \'95 Payments\u8232  \'95 Referral Engine
\f3\fs24 \

\f2\fs29\fsmilli14667 \'a0
\f3\fs24 \

\f2\fs29\fsmilli14667 \'a0
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 2
\f1\fs48 \

\f0\fs61\fsmilli30667 TENANT, WHITE-LABEL & MULTI-ORGANIZATION MANAGEMENT SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 2.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 2 defines the Tenant, White\uc0\u8209 Label, and Multi\u8209 Organization Management framework\u8232  for the EduMall ecosystem. This module enables EduMall to operate as a unified yet\u8232  logically isolated platform supporting schools, colleges, institutes, DiLCe centres,\u8232  NGOs, franchises, and corporate partners.\u8232 \u8232  This module ensures branding independence, data isolation, governance control,\u8232  and scalable onboarding of organizations.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.2 Definition of Tenant
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 A Tenant represents an independent organizational entity operating on EduMall.\uc0\u8232 \u8232  A tenant can be:\u8232  \'95 School\u8232  \'95 College / University\u8232  \'95 Coaching Institute\u8232  \'95 DiLCe Centre\u8232  \'95 NGO / CSR Partner\u8232  \'95 Corporate / Industry Partner\u8232  \'95 EduMall Internal Unit\u8232 \u8232  Each tenant operates in an isolated logical environment while sharing common\u8232  platform infrastructure.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.3 Tenant Hierarchy & Relationships
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports hierarchical tenant relationships:\uc0\u8232 \u8232  \'95 EduMall HQ (Root Tenant)\u8232  \'95 Regional / State Level Tenants (optional)\u8232  \'95 DiLCe Master Franchise\u8232  \'95 DiLCe Centre\u8232  \'95 School / Institute Tenant\u8232 \u8232  Rules:\u8232  \'95 Parent tenant can view aggregated data of child tenants\u8232  \'95 Child tenants cannot view parent or sibling data\u8232  \'95 Policies can flow downward but not upward
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.4 White\uc0\u8209 Label Capabilities
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Each tenant may operate as a white\uc0\u8209 label instance with configurable branding:\u8232 \u8232  \'95 Logo, name, favicon\u8232  \'95 Color palette & typography\u8232  \'95 Custom domain / sub\u8209 domain\u8232  \'95 App branding (future)\u8232  \'95 Certificate & report branding\u8232 \u8232  White\u8209 label settings are isolated per tenant and do not affect others.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.5 Tenant Configuration Parameters
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Each tenant can configure:\uc0\u8232 \u8232  \'95 Academic programs enabled\u8232  \'95 Course categories allowed\u8232  \'95 Languages supported\u8232  \'95 Learning modes (self\u8209 paced, mentor\u8209 led, hybrid)\u8232  \'95 Subscription plans & seat limits (as allowed)\u8232  \'95 Referral & QR campaign permissions\u8232 \u8232  All configurations are subject to EduMall HQ policy constraints.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.6 Data Isolation & Security
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Tenant data isolation principles:\uc0\u8232 \u8232  \'95 Logical data separation at database level\u8232  \'95 Enforced tenant ID in all queries\u8232  \'95 No cross\u8209 tenant data access by default\u8232  \'95 Aggregation allowed only for authorized parent tenants\u8232 \u8232  Security measures:\u8232  \'95 Encrypted tenant data\u8232  \'95 Isolated analytics views\u8232  \'95 Audit trails for cross\u8209 tenant actions
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.7 Tenant Lifecycle Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Tenant lifecycle stages:\uc0\u8232 \u8232  \'95 Prospect\u8232  \'95 Onboarded\u8232  \'95 Active\u8232  \'95 Suspended\u8232  \'95 Archived\u8232 \u8232  Lifecycle actions include:\u8232  \'95 Provisioning of tenant space\u8232  \'95 Branding activation\u8232  \'95 Default role creation\u8232  \'95 Data archival on termination
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.8 Role & User Association with Tenants
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Users may belong to:\uc0\u8232 \u8232  \'95 Single tenant\u8232  \'95 Multiple tenants with different roles\u8232 \u8232  Rules:\u8232  \'95 Roles are tenant\u8209 scoped\u8232  \'95 Permissions do not automatically transfer across tenants\u8232  \'95 Referral promoters may be linked to multiple tenants (with consent)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.9 Academic & Operational Governance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance controls include:\uc0\u8232 \u8232  \'95 Academic policy enforcement (curriculum, assessments)\u8232  \'95 Teacher assignment & approval\u8232  \'95 Batch creation rules\u8232  \'95 Quality monitoring thresholds\u8232 \u8232  Operational governance includes:\u8232  \'95 Seat usage limits\u8232  \'95 Subscription compliance\u8232  \'95 Referral misuse detection\u8232  \'95 Audit enforcement
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.10 Reporting & Analytics Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Analytics visibility rules:\uc0\u8232 \u8232  \'95 Tenant sees its own data\u8232  \'95 Parent tenant sees aggregated child data\u8232  \'95 EduMall HQ sees platform\u8209 wide anonymized data\u8232 \u8232  Reports include:\u8232  \'95 Enrollment trends\u8232  \'95 Performance KPIs\u8232  \'95 Teacher effectiveness\u8232  \'95 Referral performance (tenant\u8209 scoped)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.11 Integration with Other Modules
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 2 integrates tightly with:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 3 \'96 Course Management\u8232  \'95 Module 7 \'96 Learning Intelligence Engine\u8232  \'95 Module 9 \'96 Communication Engine\u8232  \'95 Module 11 \'96 Subscription & Revenue Engine\u8232  \'95 Module 17 \'96 Referral & QR Engine
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.12 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Support tens of thousands of tenants\u8232  \'95 Fast tenant provisioning\u8232  \'95 Metadata\u8209 driven configuration\u8232  \'95 Horizontal scaling without tenant coupling
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.13 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Tenant misconfiguration\u8232  \'95 Overlapping branding assets\u8232  \'95 Tenant suspension with active learners\u8232  \'95 Cross\u8209 tenant referral conflicts\u8232  \'95 Tenant merge or split requests
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.14 Compliance & Audit
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Compliance requirements:\uc0\u8232 \u8232  \'95 DPDP\u8209 compliant data handling\u8232  \'95 Tenant\u8209 level audit logs\u8232  \'95 Branding misuse detection\u8232  \'95 Periodic compliance reporting
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 2.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232  \'95 Module 1 \'96 Identity & Access Management\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Data isolation\u8232  \'95 Branding context\u8232  \'95 Governance boundaries
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 3
\f1\fs48 \

\f0\fs61\fsmilli30667 COURSE, CURRICULUM & CONTENT STRUCTURE MANAGEMENT SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 3.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 3 defines the complete framework for creating, structuring, governing, and delivering\uc0\u8232  courses and curricula across the EduMall ecosystem. This module supports academic (K\'9612),\u8232  competitive exams, skill programs, higher education, and professional learning.\u8232 \u8232  It ensures curriculum alignment, modular content design, AI-readiness, and controlled\u8232  access across tenants, DiLCe centres, schools, colleges, and institutes.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.2 Course Hierarchy Model
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall follows a standardized hierarchical academic structure:\uc0\u8232 \u8232  \'95 Program (e.g., Class 9 CBSE / JEE Foundation / Skillopedia AI)\u8232  \'95 Course (e.g., Physics / Mathematics / Spoken English)\u8232  \'95 Subject (if applicable)\u8232  \'95 Chapter / Unit\u8232  \'95 Topic\u8232  \'95 Sub-topic / Concept\u8232 \u8232  This hierarchy enables:\u8232  \'95 Precise tagging of content & questions\u8232  \'95 AI-driven diagnostics & recommendations\u8232  \'95 Adaptive learning paths\u8232  \'95 Granular analytics
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.3 Course Categories Supported
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The platform supports multiple course categories:\uc0\u8232 \u8232  A. Academic (K\'9612)\u8232  \'95 Boards: CBSE, ICSE, GSEB, State Boards, Cambridge\u8232  \'95 Languages: English, Hindi, regional languages\u8232 \u8232  B. Competitive Exams\u8232  \'95 JEE, NEET, UPSC, GPSC, NDA, CLAT, CUET, SAT\u8232 \u8232  C. Skill & Professional Programs\u8232  \'95 AI, Robotics, Coding, Data Science\u8232  \'95 Soft skills, communication, leadership\u8232 \u8232  D. Higher Education & Certification\u8232  \'95 UG / PG support courses\u8232  \'95 Industry-aligned certification programs
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.4 Curriculum Governance & Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Curriculum governance ensures academic integrity:\uc0\u8232 \u8232  \'95 Board-aligned syllabus mapping\u8232  \'95 Versioned curriculum updates\u8232  \'95 Approval workflows (Teacher \u8594  HOD \u8594  Centre \u8594  HQ)\u8232  \'95 Academic session locking\u8232 \u8232  Curriculum changes:\u8232  \'95 Are logged\u8232  \'95 Do not retroactively affect completed cohorts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.5 Content Types Supported
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports rich, multi-modal content:\uc0\u8232 \u8232  \'95 Video lectures (studio / classroom)\u8232  \'95 PDF notes & textbooks\u8232  \'95 Slides & presentations\u8232  \'95 SCORM 1.2 / 2004 packages\u8232  \'95 H5P interactive content\u8232  \'95 Images, diagrams, simulations\u8232  \'95 External URLs (controlled)\u8232 \u8232  All content is versioned and tagged.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.6 Content Access & Protection Rules
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Default content access rules:\uc0\u8232 \u8232  \'95 Non-downloadable\u8232  \'95 Non-copyable\u8232  \'95 Watermarked (user & tenant)\u8232  \'95 Time-bound access (if configured)\u8232 \u8232  Course creators may:\u8232  \'95 Enable downloads selectively\u8232  \'95 Allow offline access windows\u8232  \'95 Control print permissions
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.7 Teacher Authoring & Instigating Content
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Teachers can create structured learning material including:\uc0\u8232 \u8232  \'95 Core explanations\u8232  \'95 Instigating / probing questions\u8232  \'95 Visual prompts\u8232  \'95 Misconception markers\u8232  \'95 Teaching checkpoints\u8232 \u8232  This standardizes teaching quality while preserving teacher autonomy.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.8 Student Interaction with Content
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Students may:\uc0\u8232 \u8232  \'95 Pause videos and generate notes\u8232  \'95 Add time-stamped annotations on videos\u8232  \'95 Highlight and comment on PDFs\u8232  \'95 Maintain private, searchable notes\u8232 \u8232  Annotations are:\u8232  \'95 Student-owned\u8232  \'95 Non-shareable by default\u8232  \'95 Synced across devices
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.9 Assignment & Practice Integration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Each course unit can include:\uc0\u8232 \u8232  \'95 Assignments\u8232  \'95 Practice sets\u8232  \'95 Class-end diagnostics\u8232  \'95 Weekly tests\u8232  \'95 Chapter tests\u8232  \'95 PYQs\u8232  \'95 Full-length & mock tests\u8232 \u8232  All questions are tagged with:\u8232  \'95 Subject, grade, chapter, topic\u8232  \'95 Cognitive type\u8232  \'95 Difficulty level\u8232 \u8232  Question metadata feeds AI analysis.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.10 Course Delivery Modes
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Courses can be delivered as:\uc0\u8232 \u8232  \'95 Self-paced (default)\u8232  \'95 Mentor-monitored\u8232  \'95 Live + recorded\u8232  \'95 Hybrid (DiLCe)\u8232 \u8232  Delivery mode defines:\u8232  \'95 Access rules\u8232  \'95 Progress control\u8232  \'95 Assessment frequency
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.11 Progression & Unlock Logic
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Courses may enforce progression rules:\uc0\u8232 \u8232  \'95 Chapter unlock after minimum mastery bar\u8232  \'95 Teacher-defined or AI-suggested thresholds\u8232  \'95 Exam-target-specific bars (e.g., 90%+)\u8232 \u8232  Students cannot progress until conditions are met\u8232  (unless overridden by authorized roles).
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.12 Course Versioning & Archival
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Versioning rules:\uc0\u8232 \u8232  \'95 Each curriculum update creates a new version\u8232  \'95 Existing learners remain on assigned version\u8232  \'95 Archived courses are read-only\u8232  \'95 Historical performance remains intact
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.13 AI Readiness & Integration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 3 is AI-ready and integrates with:\uc0\u8232 \u8232  \'95 Module 7 \'96 Learning Intelligence Engine\u8232  \'95 Module 14 \'96 Intelligent Content & Assignment Engine\u8232 \u8232  AI uses course structure for:\u8232  \'95 Adaptive paths\u8232  \'95 Remedials\u8232  \'95 Content recommendations\u8232  \'95 Knowledge graph construction
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.14 Reporting & Analytics
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Analytics generated include:\uc0\u8232 \u8232  \'95 Course enrollment & completion\u8232  \'95 Topic-level mastery trends\u8232  \'95 Content effectiveness\u8232  \'95 Drop-off points\u8232 \u8232  Reports are visible based on tenant and role permissions.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.15 Compliance, Security & Audit
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Compliance measures:\uc0\u8232 \u8232  \'95 DPDP-aligned content access logs\u8232  \'95 IP protection mechanisms\u8232  \'95 Audit trails for content changes\u8232  \'95 Misuse detection (mass downloads, sharing attempts)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.16 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Support millions of content assets\u8232  \'95 CDN-based delivery\u8232  \'95 Metadata-driven content retrieval\u8232  \'95 Tenant-isolated content indexing
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.17 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Curriculum mid-session updates\u8232  \'95 Content rollback requests\u8232  \'95 Unauthorized access attempts\u8232  \'95 Broken content references\u8232  \'95 Offline access expiry
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 3.18 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 2 \'96 Tenant & White-Label Management\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Learning delivery\u8232  \'95 Assessment mapping\u8232  \'95 AI intelligence
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 4
\f1\fs48 \

\f0\fs61\fsmilli30667 LIVE, HYBRID & DiLCe CLASSROOM DELIVERY SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 4.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 4 defines the Live, Hybrid, and DiLCe Classroom Delivery System for EduMall.\uc0\u8232  This module enables synchronous and asynchronous teaching across physical classrooms,\u8232  DiLCe centres, studios, and remote learners.\u8232 \u8232  It is designed specifically for India-scale, last-mile education, supporting blended,\u8232  hybrid, and broadcast teaching models with strong governance, analytics, and AI feedback.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.2 Classroom Delivery Models Supported
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall supports the following delivery models:\uc0\u8232 \u8232  A. Fully Online Classroom\u8232  \'95 Teacher and students online\u8232 \u8232  B. Physical Classroom\u8232  \'95 Teacher and students in the same location\u8232 \u8232  C. Hybrid Classroom (DiLCe Model)\u8232  \'95 Teacher remote or in studio\u8232  \'95 Students physically present at DiLCe\u8232  \'95 Classroom assistant present\u8232 \u8232  D. Broadcast Classroom\u8232  \'95 One teacher teaching multiple DiLCe centres simultaneously\u8232 \u8232  E. Studio-to-Classroom Model\u8232  \'95 Teacher in studio\u8232  \'95 Students in multiple classrooms + online learners
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.3 DiLCe Smart Classroom Architecture
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 A standard DiLCe classroom includes:\uc0\u8232 \u8232  \'95 Large digital display / smart board\u8232  \'95 HD webcam covering classroom\u8232  \'95 Teacher audio output system\u8232  \'95 Classroom assistant wireless microphone\u8232  \'95 Stable internet with failover (where available)\u8232 \u8232  This architecture enables two-way interaction and classroom capture.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.4 Classroom Assistant Role
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The Classroom Assistant is a critical role in DiLCe delivery.\uc0\u8232 \u8232  Responsibilities:\u8232  \'95 Mark physical attendance\u8232  \'95 Manage student microphones\u8232  \'95 Facilitate questions\u8232  \'95 Handle technical coordination\u8232  \'95 Act as invigilator (for tests)\u8232 \u8232  Assistant actions are logged and auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.5 Live Class Scheduling & Configuration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Live classes can be configured with:\uc0\u8232 \u8232  \'95 Course, batch, teacher\u8232  \'95 Delivery model\u8232  \'95 Duration & recurrence\u8232  \'95 Attendance rules\u8232  \'95 Recording rules\u8232 \u8232  Scheduling integrates with:\u8232  \'95 Student calendars\u8232  \'95 Teacher dashboards\u8232  \'95 Communication engine (Module 9)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.6 Video Conferencing & Streaming Integration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supported integrations include:\uc0\u8232 \u8232  \'95 BigBlueButton\u8232  \'95 Zoom\u8232  \'95 Google Meet\u8232  \'95 Microsoft Teams\u8232 \u8232  Rules:\u8232  \'95 Platform selectable per class\u8232  \'95 Failover supported\u8232  \'95 API-based control for recording & attendance
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.7 Attendance Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Attendance capture methods:\uc0\u8232 \u8232  \'95 Auto attendance (online join)\u8232  \'95 Manual attendance (assistant)\u8232  \'95 QR-based classroom attendance\u8232  \'95 Late-join handling\u8232 \u8232  Attendance feeds into:\u8232  \'95 Dashboards\u8232  \'95 AI learning intelligence\u8232  \'95 Parent alerts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.8 Session Recording & Access Control
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Recording rules:\uc0\u8232 \u8232  \'95 Auto-record by default\u8232  \'95 Secure storage\u8232  \'95 Watermarked playback\u8232  \'95 Batch-based access\u8232  \'95 Time-bound availability\u8232 \u8232  Recordings are:\u8232  \'95 Non-downloadable by default\u8232  \'95 Audit-logged for access
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.9 Student Interaction & Engagement
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Interaction tools include:\uc0\u8232 \u8232  \'95 Raise hand\u8232  \'95 Chat (moderated)\u8232  \'95 Polls\u8232  \'95 Live quizzes\u8232  \'95 Classroom Q&A via assistant\u8232 \u8232  Engagement data feeds AI analysis.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.10 Class-End Diagnostics Integration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Each live class can trigger:\uc0\u8232 \u8232  \'95 Short diagnostic assessment\u8232  \'95 Topic-level feedback\u8232  \'95 Teaching effectiveness signals\u8232 \u8232  Diagnostics integrate with:\u8232  \'95 Module 5 \'96 Assessment\u8232  \'95 Module 7 \'96 Learning Intelligence
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.11 Teaching Quality & Feedback Loop
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system detects:\uc0\u8232 \u8232  \'95 Topic-level mass confusion\u8232  \'95 Engagement drops\u8232  \'95 Attendance anomalies\u8232 \u8232  Signals are sent to:\u8232  \'95 Teacher dashboards\u8232  \'95 HOD dashboards\u8232  \'95 Centre incharge dashboards\u8232 \u8232  Corrective actions can be initiated.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.12 Security, Privacy & Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 Encrypted streams\u8232  \'95 Role-based join permissions\u8232  \'95 Classroom-level access control\u8232  \'95 DPDP-compliant recording storage\u8232 \u8232  Unauthorized access attempts are logged.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.13 Scalability & Reliability
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 One-to-many broadcasting\u8232  \'95 Regional streaming optimization\u8232  \'95 Network failure recovery\u8232  \'95 Offline fallback (recording-based)\u8232 \u8232  Supports large-scale simultaneous classes.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.14 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Teacher network drop\u8232  \'95 Classroom power failure\u8232  \'95 Assistant absence\u8232  \'95 Partial recording loss\u8232  \'95 Attendance sync conflicts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 4.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 2 \'96 Tenant Management\u8232  \'95 Module 3 \'96 Course Management\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Live learning delivery\u8232  \'95 Engagement data\u8232  \'95 Teaching analytics
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 5
\f1\fs48 \

\f0\fs61\fsmilli30667 ASSESSMENT, EXAMINATION & DIAGNOSTIC INTELLIGENCE SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 5.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 5 defines the Assessment, Examination, and Diagnostic Intelligence System of EduMall.\uc0\u8232  This module governs how student learning is measured, diagnosed, analyzed, and fed back\u8232  into teaching correction and adaptive learning.\u8232 \u8232  It supports academic exams, competitive exams, skill assessments, diagnostics,\u8232  and continuous evaluation across EduMall, DiLCe centres, schools, and institutes.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.2 Assessment Types Supported
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The platform supports multiple assessment types:\uc0\u8232 \u8232  A. Diagnostic Assessments\u8232  \'95 Class-entry diagnostics\u8232  \'95 Class-end diagnostics\u8232  \'95 Topic diagnostics\u8232 \u8232  B. Formative Assessments\u8232  \'95 Daily practice questions\u8232  \'95 Assignments\u8232  \'95 Weekly tests\u8232 \u8232  C. Summative Assessments\u8232  \'95 Chapter tests\u8232  \'95 Unit tests\u8232  \'95 Monthly tests\u8232  \'95 Term exams\u8232 \u8232  D. Competitive Exam Assessments\u8232  \'95 PYQs\u8232  \'95 Part-length tests\u8232  \'95 Full-length mock tests\u8232  \'95 Exam-specific simulations
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.3 Question Bank Architecture
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The question bank is centralized, versioned, and AI-assisted.\uc0\u8232 \u8232  Each question is tagged with:\u8232  \'95 Subject, grade, chapter, topic, sub-topic\u8232  \'95 Question type (fact, concept, application, numerical, skill)\u8232  \'95 Difficulty level (normal, moderate, advanced, HOTS, complex)\u8232  \'95 Exam relevance (board / exam-specific)\u8232 \u8232  Difficulty levels are dynamically recalibrated using response analytics.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.4 Question Difficulty Intelligence
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system continuously recalculates question difficulty based on:\uc0\u8232 \u8232  \'95 Attempt count\u8232  \'95 Correct response percentage\u8232  \'95 Time taken\u8232  \'95 Error patterns\u8232 \u8232  Rules:\u8232  \'95 \u8805 80% correct \u8594  Easy\u8232  \'95 30\'9679% correct \u8594  Moderate\u8232  \'95 \u8804 20% correct \u8594  Difficult\u8232 \u8232  AI flags:\u8232  \'95 Ambiguous questions\u8232  \'95 Misleading questions\u8232  \'95 Outdated questions
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.5 Test Creation & Configuration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Teachers and admins can configure tests with:\uc0\u8232 \u8232  \'95 Question selection rules\u8232  \'95 Mixed difficulty distribution\u8232  \'95 Cognitive type distribution\u8232  \'95 Time limits\u8232  \'95 Negative marking (where applicable)\u8232 \u8232  Test patterns can be saved and reused.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.6 Delivery Modes
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Assessments can be delivered via:\uc0\u8232 \u8232  \'95 Online (web/app)\u8232  \'95 Offline (DiLCe supervised)\u8232  \'95 Hybrid (online + physical invigilation)\u8232 \u8232  Delivery mode determines:\u8232  \'95 Proctoring level\u8232  \'95 Attendance linkage\u8232  \'95 Integrity controls
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.7 Proctoring & Integrity Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Integrity mechanisms include:\uc0\u8232 \u8232  \'95 Device binding\u8232  \'95 Browser restrictions\u8232  \'95 Camera monitoring (optional)\u8232  \'95 AI anomaly detection\u8232  \'95 Physical invigilation (DiLCe)\u8232 \u8232  All integrity events are logged and auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.8 Subjective Answer Evaluation (Integrated)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports AI-assisted evaluation of subjective answers:\uc0\u8232 \u8232  \'95 Content accuracy\u8232  \'95 Concept coverage\u8232  \'95 Answer structure\u8232  \'95 Grammar & language\u8232  \'95 Vocabulary usage\u8232 \u8232  Evaluation is rubric-based with teacher override and detailed reports.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.9 Class-End Diagnostic Feedback Loop
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 After each class:\uc0\u8232 \u8232  \'95 Short diagnostic test is triggered\u8232  \'95 Topic-wise and level-wise analysis generated\u8232 \u8232  Decision logic:\u8232  \'95 Mass failure \u8594  Teaching issue\u8232  \'95 Isolated failure \u8594  Learning issue\u8232 \u8232  Signals are sent to:\u8232  \'95 Teachers\u8232  \'95 HODs\u8232  \'95 Centre Incharges\u8232  \'95 AI Learning Engine
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.10 Reports & Analytics
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reports generated include:\uc0\u8232 \u8232  \'95 Student-level micro analysis\u8232  \'95 Batch-level performance\u8232  \'95 Topic mastery heatmaps\u8232  \'95 Teaching effectiveness indicators\u8232  \'95 Exam readiness indices\u8232 \u8232  Reports are role- and tenant-aware.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.11 Integration with Learning Intelligence
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Assessment outputs feed directly into:\uc0\u8232 \u8232  \'95 Module 7 \'96 Learning Intelligence Engine\u8232  \'95 Module 8 \'96 Dashboards\u8232  \'95 Module 14 \'96 Remedials & top-up content\u8232 \u8232  No assessment data remains isolated.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.12 Security, Compliance & Audit
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 Encrypted question storage\u8232  \'95 Secure test delivery\u8232  \'95 DPDP-compliant data retention\u8232  \'95 Audit logs for:\u8232  \'a0 - Test creation\u8232  \'a0 - Evaluation\u8232  \'a0 - Overrides
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.13 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Support millions of attempts\u8232  \'95 Peak-load handling during exams\u8232  \'95 Horizontal scaling\u8232  \'95 Cached analytics summaries
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.14 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Network disruption during test\u8232  \'95 Power failure at centre\u8232  \'95 Partial submissions\u8232  \'95 Re-evaluation requests\u8232  \'95 Integrity disputes
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 3 \'96 Course & Curriculum\u8232  \'95 Module 4 \'96 Live Class Delivery\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 AI decisions\u8232  \'95 Dashboards\u8232  \'95 Adaptive learning
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 Module 5A
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 Question Taxonomy & Cognitive Classification Framework
\f1\fs36 \

\f0\fs45\fsmilli22667 5A.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module formally defines the standard framework for classifying questions across all assessments in the EduMall ecosystem. It ensures consistency, scalability, and AI-readiness for question creation, test generation, analytics, and adaptive learning.\uc0\u8232 \u8232  This module acts as an addendum to SRS v13 and applies to:\u8232  - Module 5 (Assessment & Test Engine)\u8232  - Module 7 (AI Learning Engine)\u8232  - Module 8 (Dashboards & Analytics)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.2 Question Type Classification
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Each question must be assigned exactly one Question Type. Question type determines rendering, evaluation logic, UI behavior, and analytics.\uc0\u8232 \u8232  Objective Question Types:\u8232  - MCQ_SINGLE (One correct option)\u8232  - MCQ_MULTIPLE (Multiple correct options)\u8232  - TRUE_FALSE\u8232  - ASSERTION_REASONING\u8232  - FILL_IN_THE_BLANK\u8232 \u8232  Competitive / Advanced Question Types:\u8232  - NUMERICAL (integer/decimal with tolerance)\u8232  - MATRIX_MATCH\u8232  - CASE_STUDY (passage with sub-questions)\u8232  - PASSAGE_BASED (reading comprehension)\u8232 \u8232  Skill & Psychometric Question Types:\u8232  - SITUATIONAL\u8232  - SCENARIO_BASED\u8232  - LIKERT_SCALE\u8232  - SKILL_TASK
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.3 Difficulty Level Classification
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Difficulty level defines how challenging a question is, independent of its type or category.\uc0\u8232 \u8232  Difficulty Levels:\u8232  - EASY\u8232  - MEDIUM\u8232  - HARD\u8232  - VERY_HARD\u8232 \u8232  Difficulty is used for test balancing, adaptive testing, and performance analysis.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.4 Cognitive & Skill-Based Category Classification
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This classification defines the type of thinking or skill the question assesses.\uc0\u8232 \u8232  Cognitive / Skill Categories:\u8232  - FACTUAL\u8232  - FORMULA_BASED\u8232  - CONCEPTUAL\u8232  - APPLICATION_BASED\u8232  - NUMERICAL\u8232  - ANALYTICAL\u8232  - LOGICAL\u8232  - SKILL_BASED\u8232  - CREATIVE\u8232 \u8232  These categories are independent of difficulty and question type.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.5 Combined Question Identity
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Each question is uniquely identified by the combination of:\uc0\u8232  - Question Type\u8232  - Difficulty Level\u8232  - Cognitive Category\u8232 \u8232  Example combinations:\u8232  - MCQ_SINGLE + EASY + FACTUAL\u8232  - NUMERICAL + HARD + APPLICATION_BASED\u8232  - ASSERTION_REASONING + MEDIUM + CONCEPTUAL\u8232  This combined identity powers AI recommendations, analytics, and test construction.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.6 Data Model Extension
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The following attributes are added to the Question entity without impacting existing architecture:\uc0\u8232 \u8232  - question_type (ENUM)\u8232  - difficulty_level (ENUM)\u8232  - cognitive_category (ENUM)\u8232 \u8232  Other existing attributes remain unchanged.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.7 Impact on Test Paper Creation
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Test papers can now be generated using rules based on:\uc0\u8232  - Question type\u8232  - Difficulty distribution\u8232  - Cognitive category mix\u8232 \u8232  Example rule:\u8232  Select 20 questions where:\u8232  - Subject = Physics\u8232  - Difficulty = MEDIUM\u8232  - Category = APPLICATION_BASED\u8232  - Type = NUMERICAL
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.8 Impact on AI Learning Engine
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This taxonomy enables the AI engine to:\uc0\u8232  - Detect conceptual vs formula-based weaknesses\u8232  - Identify skill gaps\u8232  - Recommend targeted remediation\u8232  - Build adaptive learning paths
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.9 Impact on Dashboards & Analytics
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Dashboards can now present insights such as:\uc0\u8232  - Student weak in APPLICATION_BASED questions\u8232  - Strong in FACTUAL but weak in CONCEPTUAL\u8232  - Skill readiness indicators for counselors and parents
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 5A.10 Governance & Quality Control
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 All questions follow a governed lifecycle:\uc0\u8232  - DRAFT\u8232  - REVIEWED\u8232  - APPROVED\u8232 \u8232  Every change is logged to maintain auditability and assessment integrity.
\f3\fs24 \
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 6
\f1\fs48 \

\f0\fs61\fsmilli30667 PSYCHOMETRIC, CAREER & STUDENT PROFILING INTELLIGENCE SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 6.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 6 defines the Psychometric, Career, and Student Profiling Intelligence System of EduMall.\uc0\u8232  This module scientifically identifies students\'92 aptitude, interests, personality traits,\u8232  learning styles, and career inclinations, and converts them into actionable guidance\u8232  for learning paths, subject choices, exams, skills, and long-term careers.\u8232 \u8232  This module is non-clinical, ethical, explainable, and designed for Indian and global\u8232  education contexts across EduMall, DiLCe centres, schools, colleges, and institutes.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.2 Target User Groups
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module supports:\uc0\u8232 \u8232  \'95 Students (Class 2 onwards to professionals)\u8232  \'95 Parents / Guardians\u8232  \'95 Counselors\u8232  \'95 Teachers & Mentors\u8232  \'95 Heads of Department\u8232  \'95 Centre Incharges\u8232  \'95 Institutional leadership\u8232 \u8232  Each group receives role-appropriate insights and reports.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.3 Psychometric Constructs Covered
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system evaluates validated psychometric constructs, including:\uc0\u8232 \u8232  \'95 Cognitive abilities (verbal, numerical, logical, spatial)\u8232  \'95 Aptitude domains (STEM, commerce, humanities, creative)\u8232  \'95 Personality traits (Big Five aligned)\u8232  \'95 Interest mapping (RIASEC / Holland Codes)\u8232  \'95 Learning styles (visual, auditory, kinesthetic, reading/writing)\u8232  \'95 Emotional intelligence (age-appropriate)\u8232  \'95 Motivation & work values\u8232  \'95 Career maturity & readiness\u8232 \u8232  All constructs are age-appropriate and culturally contextualized.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.4 Test Battery Design
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Psychometric assessments are delivered as structured batteries:\uc0\u8232 \u8232  \'95 Age-wise batteries (Class 2\'965, 6\'968, 9\'9610, 11\'9612, UG, PG, Professionals)\u8232  \'95 Adaptive question flow (difficulty adjusts)\u8232  \'95 Time-controlled but low-stress format\u8232  \'95 Assisted delivery option at DiLCe centres\u8232 \u8232  Batteries are versioned and validated.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.5 Test Delivery & Experience
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Delivery modes include:\uc0\u8232 \u8232  \'95 Online (web/app)\u8232  \'95 Assisted (DiLCe with counselor support)\u8232  \'95 Institution-supervised\u8232 \u8232  Rules:\u8232  \'95 Resume allowed\u8232  \'95 Integrity checks\u8232  \'95 Clear instructions & consent capture
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.6 Scoring, Normalization & Reliability
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Scoring methodology:\uc0\u8232 \u8232  \'95 Raw score calculation\u8232  \'95 Age-group normalization\u8232  \'95 Population benchmarking\u8232  \'95 Reliability & consistency checks\u8232  \'95 Anomaly detection\u8232 \u8232  Scores are probabilistic indicators, not deterministic labels.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.7 Student Profile Generation
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 A dynamic Student Profile is generated containing:\uc0\u8232 \u8232  \'95 Strengths & potential areas\u8232  \'95 Interest clusters\u8232  \'95 Preferred learning style\u8232  \'95 Exam suitability indices\u8232  \'95 Skill inclination indicators\u8232 \u8232  Profiles evolve over time with new data.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.8 Career Mapping & Recommendations
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Career guidance logic considers:\uc0\u8232 \u8232  \'95 Psychometric profile\u8232  \'95 Academic performance (Module 5)\u8232  \'95 Learning behavior (Module 7)\u8232  \'95 Market-aligned career database\u8232 \u8232  Outputs:\u8232  \'95 Primary career paths\u8232  \'95 Alternate pathways\u8232  \'95 Required exams & skills\u8232  \'95 Short-term action plans
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.9 Reports & Deliverables
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reports generated:\uc0\u8232 \u8232  \'95 Student-friendly report (visual, motivational)\u8232  \'95 Parent report (simplified, advisory)\u8232  \'95 Counselor report (detailed, analytical)\u8232  \'95 Institution aggregate reports (anonymized)\u8232 \u8232  All reports are explainable and non-judgmental.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.10 Ethical Framework & Consent
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Ethical principles:\uc0\u8232 \u8232  \'95 Explicit consent required\u8232  \'95 No clinical or medical claims\u8232  \'95 No permanent labeling\u8232  \'95 Transparent scoring explanation\u8232  \'95 Right to retest\u8232 \u8232  Parents control data usage for minors.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.11 Integration with Learning Intelligence
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module integrates with:\uc0\u8232 \u8232  \'95 Module 7 \'96 Learning Intelligence Engine\u8232  \'95 Module 8 \'96 Dashboards\u8232  \'95 Module 3 \'96 Course Management\u8232 \u8232  Psychometric insights influence:\u8232  \'95 Course recommendations\u8232  \'95 Learning mode decisions\u8232  \'95 Remedial strategies
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.12 Data Security & Privacy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 DPDP-compliant storage\u8232  \'95 Encrypted psychometric data\u8232  \'95 Role-based access\u8232  \'95 Audit logs for report access
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.13 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Millions of assessments\u8232  \'95 Pre-computed scoring models\u8232  \'95 Multilingual report generation\u8232  \'95 Horizontal scalability
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.14 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Incomplete assessments\u8232  \'95 Extreme response patterns\u8232  \'95 Parent\'96student expectation conflicts\u8232  \'95 Counselor overrides
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 6.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 5 \'96 Assessment Engine\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 AI personalization\u8232  \'95 Career guidance\u8232  \'95 Parent counseling
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13.1 \'96 MODULE 7 (UPDATED)
\f1\fs48 \

\f0\fs61\fsmilli30667 LEARNING INTELLIGENCE, ADAPTIVE AI & ENGAGEMENT VALIDATION (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 7.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 7 defines the Learning Intelligence and Adaptive AI Engine of EduMall EduOS.\uc0\u8232 \u8232  This module acts as the cognitive brain of the platform, continuously analyzing learner\u8232  behavior, performance, engagement quality, and progress to deliver personalized learning\u8232  paths, diagnostics, remedials, and motivation signals.\u8232 \u8232  This updated version explicitly governs engagement validation for reward points,\u8232  burnout detection, adaptive difficulty, and ethical AI usage.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.2 Core Principles
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 \'95 Learning outcomes over activity volume\uc0\u8232  \'95 Quality-weighted engagement, not raw time\u8232  \'95 Continuous diagnostic feedback\u8232  \'95 Adaptive difficulty and pacing\u8232  \'95 Explainable and ethical AI\u8232  \'95 Human-in-the-loop governance
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.3 Learner Data Signals
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The engine analyzes multi-dimensional signals including:\uc0\u8232 \u8232  \'95 Content interaction patterns (pause, rewind, notes)\u8232  \'95 Assessment performance trends\u8232  \'95 Improvement velocity\u8232  \'95 Error types and misconceptions\u8232  \'95 Engagement consistency\u8232  \'95 Discussion quality\u8232  \'95 Burnout and fatigue indicators\u8232 \u8232  No single signal determines outcomes.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.4 Engagement Quality Validation
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module validates engagement for:\uc0\u8232 \u8232  \'95 Reward point eligibility (Module 10)\u8232  \'95 Learning progression\u8232  \'95 Diagnostic assessments\u8232 \u8232  Validation rules:\u8232  \'95 Checkpoint completion\u8232  \'95 Active interactions (notes, answers)\u8232  \'95 Idle detection\u8232  \'95 Anti-gaming heuristics\u8232 \u8232  Raw watch-time alone is insufficient.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.5 Adaptive Learning Paths
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Adaptive mechanisms include:\uc0\u8232 \u8232  \'95 Dynamic content sequencing\u8232  \'95 Difficulty adjustment based on mastery\u8232  \'95 Topic-level remedials\u8232  \'95 Acceleration for high performers\u8232  \'95 Alternative explanations and formats\u8232 \u8232  Paths can be self-paced or mentor-controlled.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.6 Diagnostic Intelligence
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Diagnostics operate at:\uc0\u8232 \u8232  \'95 Question level\u8232  \'95 Topic & subtopic level\u8232  \'95 Skill category level\u8232  \'95 Cognitive level (Bloom\'92s taxonomy)\u8232 \u8232  Diagnostics inform teaching interventions and student guidance.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.7 Burnout & Wellbeing Detection
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Wellbeing safeguards include:\uc0\u8232 \u8232  \'95 Excessive usage detection\u8232  \'95 Performance fatigue signals\u8232  \'95 Alerting mentors / parents\u8232  \'95 Automatic cooldowns if needed\u8232 \u8232  Wellbeing overrides gamification incentives.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.8 AI Explainability & Transparency
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system provides:\uc0\u8232 \u8232  \'95 Reason codes for recommendations\u8232  \'95 Explainable feedback to learners\u8232  \'95 Teacher-facing insights\u8232  \'95 Auditability of AI decisions\u8232 \u8232  Black-box decisions are prohibited.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.9 Human Oversight & Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Human controls include:\uc0\u8232 \u8232  \'95 Teacher override of AI suggestions\u8232  \'95 Admin tuning of AI sensitivity\u8232  \'95 Institution-level policies\u8232  \'95 Manual review flags\u8232 \u8232  AI assists, humans decide.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.10 Data Ethics & Privacy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Ethical safeguards include:\uc0\u8232 \u8232  \'95 Minimal data usage\u8232  \'95 Purpose limitation\u8232  \'95 No behavioral manipulation\u8232  \'95 DPDP-compliant processing\u8232 \u8232  Student trust is paramount.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.11 Integration with Rewards & Payments
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Integration rules:\uc0\u8232 \u8232  \'95 Module 7 validates engagement quality\u8232  \'95 Module 10 awards points only after validation\u8232  \'95 Module 11 uses validated points for checkout\u8232  \'95 No direct financial decisions by AI\u8232 \u8232  AI never handles money.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.12 Reporting & Insights
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Insights provided:\uc0\u8232 \u8232  \'95 Individual learner profiles\u8232  \'95 Class and batch intelligence\u8232  \'95 Teaching effectiveness signals\u8232  \'95 Content quality feedback\u8232 \u8232  Reports are role-aware.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.13 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module integrates with:\uc0\u8232 \u8232  \'95 Module 5 \'96 Assessments\u8232  \'95 Module 8 \'96 Dashboards\u8232  \'95 Module 10 \'96 Gamification & Rewards\u8232  \'95 Module 15 \'96 Governance\u8232  \'95 Module 23 \'96 UX & Ethics\u8232 \u8232  This module does not operate independently.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 7.14 Final Positioning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 7 is the intelligence backbone of EduMall.\uc0\u8232 \u8232  It ensures personalization, fairness, wellbeing, and integrity while\u8232  enabling motivation systems without compromising educational values.
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13.1 \'96 MODULE 8 (UPDATED)
\f1\fs48 \

\f0\fs61\fsmilli30667 INTELLIGENT DASHBOARDS, ANALYTICS & WELLBEING VISUALIZATION (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 8.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 8 defines the Intelligent Dashboards and Analytics Layer of EduMall EduOS.\uc0\u8232 \u8232  This module provides role-based, explainable, and action-oriented dashboards for students,\u8232  parents, teachers, mentors, administrators, and institutions.\u8232 \u8232  The updated version integrates AI insights (Module 7), reward points & redemption visibility\u8232  (Module 10 & 11), and wellbeing safeguards under governance (Module 15).
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.2 Core Dashboard Principles
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 \'95 Explainable metrics only\uc0\u8232  \'95 Actionable insights, not raw data\u8232  \'95 Role-specific views\u8232  \'95 Separation of academics, rewards, and finance\u8232  \'95 Wellbeing-first visualization\u8232  \'95 Privacy and consent-aware display
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.3 Dashboard Types & Roles
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Dashboards are provided for:\uc0\u8232 \u8232  \'95 Student\u8232  \'95 Parent\u8232  \'95 Teacher\u8232  \'95 Mentor / Counselor\u8232  \'95 Head of Department\u8232  \'95 Centre Incharge\u8232  \'95 Institution Admin\u8232  \'95 EduMall HQ (aggregated)\u8232 \u8232  Each dashboard follows role-based permissions.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.4 Student Dashboard (UPDATED)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Student dashboard includes:\uc0\u8232 \u8232  Academic View:\u8232  \'95 Learning progress by subject/topic\u8232  \'95 Mastery level & adaptive path status\u8232  \'95 Diagnostic insights\u8232  \'95 Upcoming tasks & assessments\u8232 \u8232  Reward View:\u8232  \'95 Academic Points\u8232  \'95 Engagement Points\u8232  \'95 Community Points\u8232  \'95 Eligible redeemable value (clearly capped)\u8232 \u8232  Wellbeing View:\u8232  \'95 Engagement balance indicator\u8232  \'95 Burnout risk alerts\u8232  \'95 Recommended rest or pacing suggestions
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.5 Parent Dashboard (UPDATED)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Parent dashboard includes:\uc0\u8232 \u8232  \'95 Child academic progress & trends\u8232  \'95 Engagement quality (not raw screen time)\u8232  \'95 Reward summary (read-only)\u8232  \'95 Burnout & wellbeing alerts\u8232  \'95 Attendance and discipline indicators\u8232 \u8232  Parents cannot redeem rewards.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.6 Teacher Dashboard
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Teacher dashboard provides:\uc0\u8232 \u8232  \'95 Class & batch performance\u8232  \'95 Topic-wise success/failure analysis\u8232  \'95 Engagement quality heatmaps\u8232  \'95 Diagnostic flags for teaching gaps\u8232  \'95 Assignment & assessment insights
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.7 Mentor / Counselor Dashboard
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Mentor dashboard includes:\uc0\u8232 \u8232  \'95 Individual learner intelligence profiles\u8232  \'95 AI recommendations with reason codes\u8232  \'95 Wellbeing and burnout indicators\u8232  \'95 Counseling notes & action tracking
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.8 Institutional & Admin Dashboards
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Institution-level dashboards include:\uc0\u8232 \u8232  \'95 Centre performance\u8232  \'95 Revenue vs reward impact\u8232  \'95 Engagement & retention metrics\u8232  \'95 Compliance & governance indicators\u8232  \'95 Risk and incident summaries
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.9 Reward & Financial Visualization Rules
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reward display rules:\uc0\u8232 \u8232  \'95 Rewards shown separately from grades\u8232  \'95 No cash-equivalent inflation\u8232  \'95 Clear caps & expiry shown\u8232  \'95 No gamified pressure visuals\u8232 \u8232  Financial values masked where required.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.10 AI Explainability in Dashboards
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 AI insights include:\uc0\u8232 \u8232  \'95 Why a recommendation was made\u8232  \'95 What data signals were used\u8232  \'95 Confidence indicators\u8232  \'95 Human override options\u8232 \u8232  Black-box analytics are prohibited.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.11 Alerts, Nudges & Notifications
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Dashboard-driven alerts include:\uc0\u8232 \u8232  \'95 Academic risk alerts\u8232  \'95 Burnout warnings\u8232  \'95 Reward eligibility notifications\u8232  \'95 Compliance reminders\u8232 \u8232  Alert frequency is controlled.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.12 Privacy, Consent & Data Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Privacy safeguards:\uc0\u8232 \u8232  \'95 Role-based visibility\u8232  \'95 Consent-aware data display\u8232  \'95 Masking for minors\u8232  \'95 Audit trails for access
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.13 Performance & Scalability
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Dashboards support:\uc0\u8232 \u8232  \'95 Real-time and near-real-time updates\u8232  \'95 Cached analytics for scale\u8232  \'95 High concurrency during exams\u8232 \u8232  Performance must remain responsive.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.14 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module integrates with:\uc0\u8232 \u8232  \'95 Module 7 \'96 Learning Intelligence\u8232  \'95 Module 10 \'96 Gamification & Rewards\u8232  \'95 Module 11 \'96 Payments & Redemption\u8232  \'95 Module 15 \'96 Governance & Compliance\u8232  \'95 Module 23 \'96 UX & Accessibility
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 8.15 Final Positioning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 8 is the visual intelligence layer of EduMall.\uc0\u8232 \u8232  It ensures insights are transparent, ethical, role-appropriate,\u8232  and aligned with learning outcomes rather than raw engagement.
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 9
\f1\fs48 \

\f0\fs61\fsmilli30667 COMMUNICATION, NOTIFICATION & ENGAGEMENT ENGINE (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 9.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 9 defines the Communication, Notification & Engagement Engine of EduMall.\uc0\u8232  This module ensures timely, contextual, role-aware communication across the entire\u8232  learning lifecycle, including academics, assessments, counseling, operations,\u8232  referrals, and governance.\u8232 \u8232  The module focuses on clarity, relevance, automation, and trust \'97 avoiding spam\u8232  while ensuring no critical information is missed.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.2 Communication Channels Supported
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall supports multi-channel communication:\uc0\u8232 \u8232  \'95 In-app notifications\u8232  \'95 Email\u8232  \'95 SMS\u8232  \'95 WhatsApp (API-based)\u8232  \'95 Push notifications (mobile app)\u8232  \'95 System alerts within dashboards\u8232 \u8232  Channel availability depends on tenant configuration and user consent.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.3 Role-Based Communication Logic
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Messages are tailored by role:\uc0\u8232 \u8232  \'95 Students \'96 learning tasks, motivation, deadlines\u8232  \'95 Parents \'96 alerts, progress summaries, counseling updates\u8232  \'95 Teachers \'96 academic insights, action items\u8232  \'95 Counselors \'96 profile updates, follow-ups\u8232  \'95 HOD / Centre Incharge \'96 escalations, governance alerts\u8232  \'95 Promoters \'96 referral performance updates\u8232  \'95 EduMall HQ \'96 system-level alerts\u8232 \u8232  Each role receives only relevant information.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.4 Event-Driven Communication
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Communications are triggered by system events such as:\uc0\u8232 \u8232  \'95 Class scheduling or cancellation\u8232  \'95 Test creation, start, and results\u8232  \'95 Diagnostic outcomes\u8232  \'95 AI alerts (learning or teaching issues)\u8232  \'95 Remedial assignment\u8232  \'95 Attendance anomalies\u8232  \'95 Subscription or seat usage alerts\u8232  \'95 Referral conversions\u8232 \u8232  Events are configurable per tenant.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.5 AI-Triggered Smart Notifications
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Integration with Module 7 enables:\uc0\u8232 \u8232  \'95 Priority-based alerts\u8232  \'95 Risk notifications (dropout, burnout)\u8232  \'95 Teaching quality alerts\u8232  \'95 Adaptive nudges for students\u8232 \u8232  AI decides:\u8232  \'95 Who to notify\u8232  \'95 When to notify\u8232  \'95 How frequently to notify
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.6 Message Templates & Personalization
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports:\uc0\u8232 \u8232  \'95 Pre-approved message templates\u8232  \'95 Multi-language templates\u8232  \'95 Dynamic placeholders (name, course, topic)\u8232  \'95 Tone control (informative, motivational, alert)\u8232 \u8232  Templates are tenant-specific and auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.7 Referral & QR-Based Communication
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Referral-aware communication includes:\uc0\u8232 \u8232  \'95 Auto-messages after QR scan\u8232  \'95 Lead follow-up workflows\u8232  \'95 Conversion confirmation messages\u8232  \'95 Promoter performance summaries\u8232 \u8232  Referral attribution is preserved across all messages.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.8 Scheduling & Automation
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Communication workflows include:\uc0\u8232 \u8232  \'95 Scheduled reminders\u8232  \'95 Escalation timelines\u8232  \'95 Retry logic for failed delivery\u8232  \'95 Time-zone awareness\u8232 \u8232  Automation reduces manual intervention.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.9 Communication Governance & Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance features:\uc0\u8232 \u8232  \'95 Approval workflows for bulk messages\u8232  \'95 Frequency caps to prevent spam\u8232  \'95 Opt-in / opt-out management\u8232  \'95 Audit logs for all communications
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.10 Analytics & Effectiveness Tracking
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system tracks:\uc0\u8232 \u8232  \'95 Delivery status\u8232  \'95 Open and click rates\u8232  \'95 Response actions\u8232  \'95 Conversion attribution\u8232 \u8232  Analytics feed into:\u8232  \'95 Marketing optimization\u8232  \'95 Academic engagement analysis
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.11 Security, Privacy & Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 DPDP-compliant consent management\u8232  \'95 Masking of sensitive data\u8232  \'95 Encrypted message payloads\u8232  \'95 Secure API integrations
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.12 Scalability & Reliability
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 High-volume message throughput\u8232  \'95 Queue-based delivery systems\u8232  \'95 Failover mechanisms\u8232  \'95 Provider redundancy
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.13 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Message delivery failures\u8232  \'95 Duplicate notifications\u8232  \'95 Channel outages\u8232  \'95 Incorrect role targeting
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 9.14 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 2 \'96 Tenant Management\u8232  \'95 Module 7 \'96 Learning Intelligence Engine\u8232  \'95 Module 8 \'96 Dashboards\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Alerts\u8232  \'95 Engagement\u8232  \'95 Governance communication
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13.1 \'96 MODULE 10 (UPDATED)
\f1\fs48 \

\f0\fs61\fsmilli30667 GAMIFICATION, REWARD POINTS & LOYALTY ENGINE (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 10.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 10 defines the Gamification, Reward Points, and Loyalty Engine of EduMall EduOS.\uc0\u8232  Its objective is to motivate learners through ethical, education-first incentives while\u8232  maintaining academic seriousness, governance, and regulatory safety.\u8232 \u8232  This module introduces reward points that are partially cash-equivalent under strict\u8232  policy control.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.2 Core Principles
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 \'95 Education-first motivation\uc0\u8232  \'95 No addiction or gambling mechanics\u8232  \'95 Quality-weighted engagement\u8232  \'95 Partial, policy-driven cash equivalence\u8232  \'95 Age-appropriate & institution-controlled\u8232  \'95 Transparent and auditable logic
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.3 Point Categories (Mandatory Separation)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall maintains three non-mergeable point buckets:\uc0\u8232 \u8232  A. Academic Points\u8232  \'95 Earned via learning, assignments, tests, diagnostics\u8232  \'95 Eligible for LIMITED cash-equivalent usage\u8232 \u8232  B. Engagement Points\u8232  \'95 Earned via consistency, forums, discipline\u8232  \'95 VERY LIMITED conversion eligibility\u8232 \u8232  C. Community Points\u8232  \'95 Earned via events & EduMall social activity\u8232  \'95 NO cash conversion (recognition only)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.4 Point Earning Logic
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Points are awarded only when engagement quality is validated:\uc0\u8232 \u8232  \'95 Content checkpoints passed\u8232  \'95 Assignments attempted sincerely\u8232  \'95 Improvement over baseline\u8232  \'95 Peer help (validated)\u8232  \'95 Teacher / AI moderation applied\u8232 \u8232  Raw time-based or spam activity earns zero points.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.5 Cash-Equivalent Conversion Rules
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reward points are loyalty credits, NOT currency.\uc0\u8232 \u8232  Conversion rules:\u8232  \'95 Partial usage only (admin-defined percentage)\u8232  \'95 Course / product must be marked reward-eligible\u8232  \'95 Course creator may override within limits\u8232  \'95 Time-bound campaign applicability\u8232  \'95 Never 100% fee replacement
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.6 Eligibility & Safeguards
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Eligibility conditions include:\uc0\u8232 \u8232  \'95 Active subscription\u8232  \'95 Minimum academic engagement\u8232  \'95 No misconduct flags\u8232  \'95 Age-based limits\u8232  \'95 Daily / weekly earning caps\u8232  \'95 Burnout detection via Module 7
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.7 Redemption Flow
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Redemption occurs at checkout:\uc0\u8232 \u8232  \'95 Eligible points displayed\u8232  \'95 Maximum redeemable value shown\u8232  \'95 Final approval via Module 11\u8232  \'95 Full audit trail maintained
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.8 Governance & Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance controls include:\uc0\u8232 \u8232  \'95 Admin policy configuration\u8232  \'95 Institution-level enable/disable\u8232  \'95 Parent opt-out\u8232  \'95 Audit logs & reports\u8232  \'95 Compliance with education & consumer laws
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.9 UX & Anti-Abuse Design
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 UX guidelines enforce:\uc0\u8232 \u8232  \'95 No slot-machine effects\u8232  \'95 No infinite scrolling rewards\u8232  \'95 Clear educational framing\u8232  \'95 Transparency of earning & usage\u8232 \u8232  Design governed by Module 23.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.10 Reporting & Analytics
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reports include:\uc0\u8232 \u8232  \'95 Point earning trends\u8232  \'95 Redemption impact\u8232  \'95 Academic correlation analysis\u8232  \'95 Abuse detection signals
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.11 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module integrates with:\uc0\u8232 \u8232  \'95 Module 7 \'96 Learning Intelligence\u8232  \'95 Module 11 \'96 Payments & Subscription\u8232  \'95 Module 15 \'96 Governance & Compliance\u8232  \'95 Module 23 \'96 UX & Accessibility\u8232 \u8232  Module 10 does not control pricing or academic grading.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 10.12 Final Positioning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 10 is a motivational support system, not an academic shortcut.\uc0\u8232 \u8232  Reward points enhance engagement and affordability without compromising\u8232  learning integrity, ethics, or regulatory safety.
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13.1 \'96 MODULE 11 (UPDATED)
\f1\fs48 \

\f0\fs61\fsmilli30667 PAYMENTS, CHECKOUT, DISCOUNTS & REWARD REDEMPTION (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 11.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 11 governs all payment, checkout, subscription, discount, and reward\uc0\u8232  redemption mechanisms within EduMall EduOS.\u8232 \u8232  This updated version integrates cash-equivalent reward points (Module 10 v13.1)\u8232  into the checkout flow under strict governance, compliance, and audit control.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.2 Core Principles
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 \'95 Payments-first integrity\uc0\u8232  \'95 Partial reward redemption only\u8232  \'95 Policy-driven discounts\u8232  \'95 Transparent pricing\u8232  \'95 No wallet or stored-value behavior\u8232  \'95 Full auditability
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.3 Supported Payment Models
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall supports:\uc0\u8232 \u8232  \'95 One-time course purchase\u8232  \'95 Subscription-based access\u8232  \'95 Bundled programs\u8232  \'95 Institutional licensing\u8232  \'95 Promotional campaigns\u8232 \u8232  All models support partial reward redemption where enabled.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.4 Checkout Flow (Updated)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Checkout sequence:\uc0\u8232 \u8232  1. Course / product selection\u8232  2. Price calculation (base price)\u8232  3. Eligibility check for reward usage\u8232  4. Display of maximum redeemable points\u8232  5. User confirmation\u8232  6. Net payable amount calculation\u8232  7. Payment gateway processing\u8232  8. Receipt, invoice & audit logging
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.5 Reward Point Redemption Rules
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Redemption rules:\uc0\u8232 \u8232  \'95 Reward points are loyalty credits, not currency\u8232  \'95 Max redemption percentage set by admin\u8232  \'95 Course creator may override within limits\u8232  \'95 Campaign-based time windows\u8232  \'95 Points deducted post successful payment only\u8232  \'95 No redemption on taxes unless allowed by law
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.6 Discount & Coupon Engine
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports:\uc0\u8232 \u8232  \'95 Coupon codes\u8232  \'95 Referral discounts\u8232  \'95 Institutional discounts\u8232  \'95 Volume-based pricing\u8232  \'95 Reward-based discounts\u8232 \u8232  Discount stacking rules are policy-controlled.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.7 Governance & Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance includes:\uc0\u8232 \u8232  \'95 Admin configuration of redemption caps\u8232  \'95 Institution-level enable/disable\u8232  \'95 Parent opt-out for minors\u8232  \'95 Abuse detection & blocking\u8232  \'95 Full transaction audit trail
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.8 Compliance & Legal Safeguards
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Compliance measures:\uc0\u8232 \u8232  \'95 No wallet or cash-out facility\u8232  \'95 No gambling or chance-based rewards\u8232  \'95 Transparent terms & conditions\u8232  \'95 Consumer protection compliance\u8232  \'95 DPDP-aligned transaction data handling
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.9 Reporting & Reconciliation
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reports include:\uc0\u8232 \u8232  \'95 Gross vs net revenue\u8232  \'95 Reward redemption impact\u8232  \'95 Discount utilization\u8232  \'95 Refunds & adjustments\u8232  \'95 Tax & compliance summaries
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.10 Refunds, Cancellations & Edge Cases
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Edge handling:\uc0\u8232 \u8232  \'95 Refunds recalculate reward usage\u8232  \'95 Points reinstated per policy\u8232  \'95 Partial cancellations supported\u8232  \'95 Fraud detection mechanisms
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.11 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module integrates with:\uc0\u8232 \u8232  \'95 Module 10 \'96 Gamification & Rewards\u8232  \'95 Module 15 \'96 Governance & Compliance\u8232  \'95 Module 20 \'96 DevOps & Infrastructure\u8232  \'95 External payment gateways\u8232 \u8232  Module 11 remains the single source of truth for pricing and payments.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 11.12 Final Positioning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 11 ensures EduMall monetization remains ethical, compliant, and scalable.\uc0\u8232 \u8232  Reward-based affordability enhances access without compromising\u8232  financial integrity or academic value.
\f3\fs24 \
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 12
\f1\fs48 \

\f0\fs61\fsmilli30667 CONTENT DELIVERY, OFFLINE ACCESS & KNOWLEDGE PROTECTION SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 12.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 12 defines the Content Delivery, Offline Access, and Knowledge Protection System\uc0\u8232  of EduMall. This module ensures secure, high-performance, and controlled delivery of\u8232  educational content across online and offline environments while protecting intellectual\u8232  property.\u8232 \u8232  The module supports students in low-connectivity regions, DiLCe centres, and institutions,\u8232  without compromising content security or academic integrity.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.2 Content Delivery Architecture
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall content delivery supports:\uc0\u8232 \u8232  \'95 Streaming-based video delivery (adaptive bitrate)\u8232  \'95 Secure document rendering (PDF, slides)\u8232  \'95 Interactive content playback\u8232  \'95 CDN-based global distribution\u8232  \'95 Tenant-isolated content endpoints\u8232 \u8232  Delivery is optimized for low bandwidth and mobile-first access.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.3 Content Protection Principles
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Default content protection rules:\uc0\u8232 \u8232  \'95 No download\u8232  \'95 No copy-paste\u8232  \'95 No screen recording (where supported)\u8232  \'95 Dynamic watermarking (user, tenant, timestamp)\u8232  \'95 Access-token based authorization\u8232 \u8232  Protection rules are configurable by course creator and tenant.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.4 Offline Access Model
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Offline access is supported via controlled mechanisms:\uc0\u8232 \u8232  \'95 Time-bound offline access windows\u8232  \'95 Device-bound encrypted storage\u8232  \'95 Auto-expiry and revalidation\u8232  \'95 Selective content availability (videos / notes)\u8232 \u8232  Offline content never exists in raw, extractable form.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.5 Video Intelligence Features
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Video-specific capabilities include:\uc0\u8232 \u8232  \'95 Pause-and-note generation\u8232  \'95 Auto notes from video (AI-assisted)\u8232  \'95 Time-stamped student annotations\u8232  \'95 Resume playback across devices\u8232  \'95 Playback speed control (within limits)\u8232 \u8232  Annotations are private by default.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.6 Document Interaction Features
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 For PDFs and documents:\uc0\u8232 \u8232  \'95 Highlighting and annotations\u8232  \'95 Margin notes\u8232  \'95 Keyword search\u8232  \'95 Cross-linking with topics\u8232 \u8232  All interactions are logged for learning analytics.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.7 Teacher & Creator Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Content creators can configure:\uc0\u8232 \u8232  \'95 Download permissions\u8232  \'95 Offline availability\u8232  \'95 Print permissions\u8232  \'95 Access duration\u8232  \'95 Annotation permissions\u8232 \u8232  Changes are versioned and auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.8 Knowledge Graph & LLM Readiness
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 All content is structured to feed EduMall\'92s future LLM and knowledge graph:\uc0\u8232 \u8232  \'95 Class-wise indexing\u8232  \'95 Subject-wise indexing\u8232  \'95 Topic and sub-topic tagging\u8232  \'95 Difficulty and cognitive tagging\u8232 \u8232  This enables intelligent querying and AI tutoring.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.9 Multi-Language & Accessibility
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports:\uc0\u8232 \u8232  \'95 Multi-language content delivery\u8232  \'95 Subtitles and transcripts\u8232  \'95 Font scaling and contrast modes\u8232  \'95 Assistive technology compatibility\u8232 \u8232  Accessibility is built-in, not optional.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.10 Integration with AI Tutor & LLM (Future)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module integrates with:\uc0\u8232 \u8232  \'95 AI Tutor (real-time Q&A)\u8232  \'95 Knowledge querying (text, voice)\u8232  \'95 Offline AI packages (future product)\u8232 \u8232  AI responses are sourced only from authorized content.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.11 Security, Privacy & Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures include:\uc0\u8232 \u8232  \'95 Encrypted content storage\u8232  \'95 Secure key management\u8232  \'95 DPDP-compliant access logs\u8232  \'95 Anti-piracy monitoring\u8232 \u8232  Violations trigger alerts and access revocation.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.12 Performance & Scalability
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Millions of concurrent content streams\u8232  \'95 CDN edge caching\u8232  \'95 Efficient offline sync\u8232  \'95 Minimal device storage footprint
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.13 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Offline expiry during access\u8232  \'95 Device change or loss\u8232  \'95 Partial content sync\u8232  \'95 Unauthorized screen capture attempts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 12.14 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 3 \'96 Course & Curriculum\u8232  \'95 Module 7 \'96 Learning Intelligence\u8232  \'95 Module 11 \'96 Subscription & Entitlements\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Secure learning delivery\u8232  \'95 AI knowledge sourcing
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 13
\f1\fs48 \

\f0\fs61\fsmilli30667 ADMISSIONS, CRM & LEAD MANAGEMENT SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 13.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 13 defines the Admissions, CRM, and Lead Management System of EduMall.\uc0\u8232  This module manages the complete learner acquisition lifecycle\'97from first inquiry\u8232  to enrollment, onboarding, and post-admission engagement\'97across EduMall, DiLCe centres,\u8232  schools, colleges, institutes, NGOs, and corporate programs.\u8232 \u8232  It integrates marketing, counseling, admissions, and subscription workflows into\u8232  one governed, auditable system.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.2 Lead Sources & Capture
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Leads can be captured from multiple sources:\uc0\u8232 \u8232  \'95 Website forms\u8232  \'95 Landing pages\u8232  \'95 QR-code scans (DiLCe / School / Teacher / Campaign)\u8232  \'95 WhatsApp chatbots\u8232  \'95 Call center entries\u8232  \'95 Walk-in registrations\u8232  \'95 Referral links and codes\u8232 \u8232  Each lead is automatically tagged with source, tenant, and promoter.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.3 Lead Profiling & Segmentation
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Each lead profile includes:\uc0\u8232 \u8232  \'95 Personal details\u8232  \'95 Academic background\u8232  \'95 Interest areas\u8232  \'95 Intended courses\u8232  \'95 Psychometric test status (if taken)\u8232  \'95 Lead source & referral attribution\u8232 \u8232  Leads are segmented dynamically for targeted follow-up.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.4 Counseling & Interaction Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Counselors can:\uc0\u8232 \u8232  \'95 Schedule counseling sessions\u8232  \'95 Record counseling notes\u8232  \'95 Recommend courses and tests\u8232  \'95 Assign psychometric assessments\u8232  \'95 Track parent interactions\u8232 \u8232  All interactions are time-stamped and auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.5 Admission Workflow
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Admission stages include:\uc0\u8232 \u8232  \'95 New lead\u8232  \'95 Contacted\u8232  \'95 Counseled\u8232  \'95 Test assigned\u8232  \'95 Offer generated\u8232  \'95 Enrolled\u8232  \'95 Onboarded\u8232 \u8232  Stage movement can trigger automated communications.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.6 Integration with Psychometric & AI Engines
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The module integrates with:\uc0\u8232 \u8232  \'95 Module 6 \'96 Psychometric & Career Intelligence\u8232  \'95 Module 7 \'96 Learning Intelligence Engine\u8232 \u8232  AI assists counselors with:\u8232  \'95 Course suitability insights\u8232  \'95 Risk indicators\u8232  \'95 Conversion probability scoring
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.7 Offers, Discounts & Conversions
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports:\uc0\u8232 \u8232  \'95 Personalized offers\u8232  \'95 Referral-linked discounts\u8232  \'95 Time-bound promotions\u8232  \'95 Seat availability checks\u8232 \u8232  Conversion is locked only after successful payment.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.8 Post-Admission Onboarding
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 After enrollment, the system:\uc0\u8232 \u8232  \'95 Creates user accounts\u8232  \'95 Allocates seats\u8232  \'95 Assigns courses and batches\u8232  \'95 Triggers onboarding communication\u8232 \u8232  This ensures zero manual handover gaps.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.9 CRM Dashboards & Reports
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 CRM dashboards provide:\uc0\u8232 \u8232  \'95 Lead funnel visualization\u8232  \'95 Conversion ratios\u8232  \'95 Counselor performance\u8232  \'95 Campaign ROI\u8232  \'95 Referral effectiveness\u8232 \u8232  Reports are role- and tenant-aware.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.10 Automation & Follow-Up Rules
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Automation capabilities include:\uc0\u8232 \u8232  \'95 Auto reminders\u8232  \'95 Escalation for idle leads\u8232  \'95 Task assignment to counselors\u8232  \'95 SLA tracking\u8232 \u8232  Automation reduces lead leakage.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.11 Security, Privacy & Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 DPDP-compliant lead data handling\u8232  \'95 Consent tracking\u8232  \'95 Role-based access\u8232  \'95 Audit logs for edits and exports
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.12 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 High-volume lead ingestion\u8232  \'95 Concurrent counselor access\u8232  \'95 Real-time funnel updates\u8232  \'95 Horizontal scalability
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.13 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Duplicate leads\u8232  \'95 Conflicting counselor assignments\u8232  \'95 Referral disputes\u8232  \'95 Offer expiry conflicts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 13.14 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 2 \'96 Tenant Management\u8232  \'95 Module 6 \'96 Psychometric System\u8232  \'95 Module 11 \'96 Subscription & Payment\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Admissions\u8232  \'95 Growth tracking\u8232  \'95 Revenue funnel
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 14
\f1\fs48 \

\f0\fs61\fsmilli30667 INTELLIGENT CONTENT, ASSIGNMENT & REMEDIAL ENGINE (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 14.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 14 defines the Intelligent Content, Assignment & Remedial Engine of EduMall.\uc0\u8232  This module is the execution arm of EduMall\'92s Learning Intelligence (Module 7),\u8232  responsible for delivering personalized content, assignments, practice sets,\u8232  remedials, and top-up materials to learners.\u8232 \u8232  It ensures that every learner receives the right content, at the right depth,\u8232  at the right time, based on data-driven decisions.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.2 Content Intelligence Framework
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The engine operates on structured content intelligence:\uc0\u8232 \u8232  \'95 Content mapped to class, subject, chapter, topic, sub-topic\u8232  \'95 Cognitive tagging (fact, concept, application, HOTS)\u8232  \'95 Difficulty tagging (normal to complex)\u8232  \'95 Exam relevance tagging\u8232 \u8232  All content metadata is continuously refined by AI feedback.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.3 Assignment Types Supported
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supported assignment types include:\uc0\u8232 \u8232  \'95 Practice assignments\u8232  \'95 Concept reinforcement tasks\u8232  \'95 Writing & expression assignments\u8232  \'95 Numerical/problem-solving sets\u8232  \'95 Skill-based tasks\u8232  \'95 Project & case-study assignments\u8232 \u8232  Assignments can be auto-generated or teacher-curated.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.4 AI-Generated & Teacher-Curated Content
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports:\uc0\u8232 \u8232  \'95 AI-generated practice questions\u8232  \'95 AI-generated assignments\u8232  \'95 Teacher-authored assignments\u8232  \'95 Blended AI + teacher workflows\u8232 \u8232  Teachers always retain final approval authority.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.5 Diagnostic-Driven Assignment Delivery
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Assignment delivery is triggered by:\uc0\u8232 \u8232  \'95 Class-end diagnostics\u8232  \'95 Weekly/monthly assessments\u8232  \'95 Learning gap detection by Module 7\u8232 \u8232  Assignments are personalized per student or per group.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.6 Remedial & Top-Up Material Engine
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 For detected gaps, the engine delivers:\uc0\u8232 \u8232  \'95 Topic revision videos\u8232  \'95 Simplified notes\u8232  \'95 Extra practice\u8232  \'95 Writing drills\u8232  \'95 Concept re-teaching material\u8232 \u8232  Remedials are adaptive and time-bound.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.7 Adaptive Difficulty & Volume Control
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The engine dynamically adjusts:\uc0\u8232 \u8232  \'95 Number of questions\u8232  \'95 Difficulty level\u8232  \'95 Cognitive mix\u8232  \'95 Time allocation\u8232 \u8232  Adjustments are based on learner response patterns.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.8 Mastery-Based Progression Support
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The engine supports mastery learning:\uc0\u8232 \u8232  \'95 Minimum mastery thresholds\u8232  \'95 Chapter-level gating\u8232  \'95 Exam-target-based bars\u8232  \'95 Teacher or mentor override\u8232 \u8232  Learners progress only after mastery is demonstrated.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.9 Feedback & Evaluation Integration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Assignments integrate with:\uc0\u8232 \u8232  \'95 Auto-evaluation (objective)\u8232  \'95 AI-assisted subjective evaluation\u8232  \'95 Teacher evaluation\u8232 \u8232  Feedback is actionable and instructional.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.10 Student Interaction & Reflection
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Students can:\uc0\u8232 \u8232  \'95 Review feedback\u8232  \'95 See mistake patterns\u8232  \'95 Attempt corrections\u8232  \'95 Reflect on learning\u8232 \u8232  Reflection data feeds learning intelligence.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.11 Teacher & Academic Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Teachers and academic leaders can:\uc0\u8232 \u8232  \'95 Customize assignment rules\u8232  \'95 Approve AI-generated content\u8232  \'95 Adjust remedial depth\u8232  \'95 Monitor assignment effectiveness
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.12 Analytics & Effectiveness Measurement
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Analytics include:\uc0\u8232 \u8232  \'95 Assignment completion rates\u8232  \'95 Improvement post-remedial\u8232  \'95 Difficulty calibration accuracy\u8232  \'95 Content effectiveness scores\u8232 \u8232  Insights feed curriculum improvement.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.13 Security & Content Protection
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 Assignment access control\u8232  \'95 Non-downloadable by default\u8232  \'95 Attempt limits\u8232  \'95 Audit logs for changes
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.14 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 High-frequency assignment generation\u8232  \'95 Batch and individual personalization\u8232  \'95 Horizontal scaling\u8232  \'95 Efficient content retrieval
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.15 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Over-assignment risk\u8232  \'95 Conflicting AI signals\u8232  \'95 Student overload\u8232  \'95 Teacher override conflicts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 14.16 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 3 \'96 Course & Curriculum\u8232  \'95 Module 5 \'96 Assessment Engine\u8232  \'95 Module 7 \'96 Learning Intelligence\u8232  \'95 Module 12 \'96 Content Delivery\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Learning execution\u8232  \'95 Remediation delivery
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13.1 \'96 MODULE 15 (UPDATED)
\f1\fs48 \

\f0\fs61\fsmilli30667 GOVERNANCE, POLICY, ETHICS & COMPLIANCE ENGINE (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 15.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 15 defines the Governance, Policy, Ethics, and Compliance Engine of EduMall EduOS.\uc0\u8232 \u8232  This module acts as the constitutional backbone of the platform, governing how academic,\u8232  financial, AI, reward, data, and operational decisions are controlled, audited, and enforced.\u8232 \u8232  This updated version explicitly governs reward-to-cash policies, AI ethics, learner wellbeing,\u8232  institutional controls, and regulatory compliance.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.2 Governance Philosophy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Core principles:\uc0\u8232 \u8232  \'95 Education-first governance\u8232  \'95 Policy-driven over hardcoded logic\u8232  \'95 Transparency and auditability\u8232  \'95 Human oversight over automation\u8232  \'95 Safety, fairness, and accountability\u8232  \'95 Compliance by design
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.3 Policy Domains Covered
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module governs policies across:\uc0\u8232 \u8232  \'95 Academic integrity & progression\u8232  \'95 AI usage and explainability\u8232  \'95 Reward points & cash-equivalent limits\u8232  \'95 Payments, discounts & pricing rules\u8232  \'95 Data privacy & protection\u8232  \'95 Child safety & wellbeing\u8232  \'95 Institutional and tenant controls
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.4 Reward & Loyalty Governance (UPDATED)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reward governance rules include:\uc0\u8232 \u8232  \'95 Definition of reward points as loyalty credits, not currency\u8232  \'95 Admin-controlled conversion percentages\u8232  \'95 Course-creator override within bounds\u8232  \'95 Campaign-based enablement\u8232  \'95 Age-based and institution-based restrictions\u8232  \'95 Anti-hoarding and expiry rules\u8232 \u8232  All reward usage is auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.5 AI Ethics & Learning Integrity
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 AI governance ensures:\uc0\u8232 \u8232  \'95 Explainable AI recommendations\u8232  \'95 No black-box decision making\u8232  \'95 No manipulation or addiction mechanics\u8232  \'95 Burnout and wellbeing safeguards\u8232  \'95 Teacher and admin override rights\u8232 \u8232  AI must serve learning outcomes, not engagement metrics.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.6 Financial & Consumer Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Compliance measures include:\uc0\u8232 \u8232  \'95 Transparent pricing disclosures\u8232  \'95 Clear reward redemption terms\u8232  \'95 No wallet or cash-out behavior\u8232  \'95 Consumer protection alignment\u8232  \'95 Tax and invoicing compliance\u8232 \u8232  Financial rules integrate with Module 11.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.7 Data Privacy & Protection
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Data governance includes:\uc0\u8232 \u8232  \'95 DPDP-compliant data handling\u8232  \'95 Consent management\u8232  \'95 Purpose limitation\u8232  \'95 Data minimization\u8232  \'95 Audit logs for access and usage\u8232 \u8232  Privacy overrides analytics convenience.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.8 Child Safety & Wellbeing
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Safeguards include:\uc0\u8232 \u8232  \'95 Parental visibility and opt-out\u8232  \'95 Age-appropriate gamification limits\u8232  \'95 Burnout detection enforcement\u8232  \'95 Content moderation workflows\u8232 \u8232  Child safety has highest priority.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.9 Institutional & Tenant Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Institutions can:\uc0\u8232 \u8232  \'95 Enable/disable modules\u8232  \'95 Set local policies within global limits\u8232  \'95 Approve campaigns and rewards\u8232  \'95 Review analytics and compliance reports\u8232 \u8232  Tenant autonomy operates under EduMall constitution.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.10 Audit, Monitoring & Enforcement
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance enforcement includes:\uc0\u8232 \u8232  \'95 Policy violation detection\u8232  \'95 Automated and manual audits\u8232  \'95 Corrective action workflows\u8232  \'95 Suspension or rollback controls\u8232  \'95 Immutable audit trails
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.11 Regulatory Readiness
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports readiness for:\uc0\u8232 \u8232  \'95 School boards\u8232  \'95 Universities\u8232  \'95 Government agencies\u8232  \'95 CSR & NGO programs\u8232  \'95 International compliance (with Module 22)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.12 Reporting & Transparency
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reports include:\uc0\u8232 \u8232  \'95 Governance compliance dashboards\u8232  \'95 Reward impact audits\u8232  \'95 AI decision traceability\u8232  \'95 Incident and resolution logs
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.13 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module governs and integrates with:\uc0\u8232 \u8232  \'95 Module 7 \'96 Learning Intelligence\u8232  \'95 Module 10 \'96 Gamification & Rewards\u8232  \'95 Module 11 \'96 Payments & Subscription\u8232  \'95 Module 20 \'96 DevOps & Infrastructure\u8232  \'95 Module 22 \'96 Globalization\u8232 \u8232  No module may bypass Module 15.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 15.14 Final Positioning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 15 is a LOCKED CORE MODULE.\uc0\u8232 \u8232  It acts as EduMall\'92s constitution, ensuring long-term trust,\u8232  legal safety, academic seriousness, and ethical scalability.
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 16
\f1\fs48 \

\f0\fs61\fsmilli30667 HUMAN RESOURCE, FACULTY & OPERATIONS MANAGEMENT SYSTEM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 16.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 16 defines the Human Resource, Faculty, and Operations Management System of EduMall.\uc0\u8232  This module governs recruitment, onboarding, role allocation, performance management,\u8232  capacity planning, and day-to-day operational workflows across EduMall HQ, DiLCe centres,\u8232  schools, institutes, and partner organizations.\u8232 \u8232  It ensures that people, processes, and performance remain aligned with EduMall\'92s\u8232  academic and ethical standards.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.2 User Categories Covered
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module manages:\uc0\u8232 \u8232  \'95 Teachers & Faculty\u8232  \'95 Counselors\u8232  \'95 Academic Coordinators\u8232  \'95 Classroom Assistants (DiLCe)\u8232  \'95 Centre Incharges\u8232  \'95 Operations Staff\u8232  \'95 Sales & Admission Staff\u8232  \'95 HR Managers\u8232  \'95 External Experts & Visiting Faculty
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.3 Recruitment & Onboarding
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Recruitment workflows include:\uc0\u8232 \u8232  \'95 Requirement creation & approval\u8232  \'95 Candidate applications & screening\u8232  \'95 Interview scheduling\u8232  \'95 Offer issuance\u8232  \'95 Digital joining & document verification\u8232 \u8232  Onboarding includes:\u8232  \'95 Role assignment\u8232  \'95 Policy acceptance\u8232  \'95 Training allocation\u8232  \'95 Access provisioning
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.4 Role Assignment & Capacity Planning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports:\uc0\u8232 \u8232  \'95 Faculty-course-batch mapping\u8232  \'95 Teaching load allocation\u8232  \'95 Counselor-student ratios\u8232  \'95 Assistant-classroom ratios\u8232 \u8232  Capacity planning ensures:\u8232  \'95 No overload\u8232  \'95 Optimal utilization\u8232  \'95 Academic continuity
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.5 Performance Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Performance metrics include:\uc0\u8232 \u8232  \'95 Teaching effectiveness (from Module 7)\u8232  \'95 Student outcomes\u8232  \'95 Engagement metrics\u8232  \'95 Feedback scores\u8232  \'95 Compliance adherence\u8232 \u8232  Performance reviews are periodic and evidence-based.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.6 Training & Upskilling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The module manages:\uc0\u8232 \u8232  \'95 Mandatory training programs\u8232  \'95 Pedagogical upskilling\u8232  \'95 Technology training\u8232  \'95 AI & data literacy modules\u8232 \u8232  Completion is tracked and auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.7 Attendance, Leave & Scheduling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Operational tracking includes:\uc0\u8232 \u8232  \'95 Staff attendance\u8232  \'95 Leave management\u8232  \'95 Shift scheduling (centres)\u8232  \'95 Substitute allocation\u8232 \u8232  Integrates with live class schedules.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.8 Incentives & Commission Inputs
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module feeds data into Module 11 for:\uc0\u8232 \u8232  \'95 Faculty incentives\u8232  \'95 Counselor commissions\u8232  \'95 Promoter payouts (operational linkage)\u8232 \u8232  No financial settlement is done here.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.9 Operational Task Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports:\uc0\u8232 \u8232  \'95 Task assignment\u8232  \'95 SLA tracking\u8232  \'95 Escalations\u8232  \'95 Issue resolution\u8232 \u8232  Used by centre and operations teams.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.10 Compliance & Policy Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Ensures compliance with:\uc0\u8232 \u8232  \'95 HR policies\u8232  \'95 Academic SOPs\u8232  \'95 Child safety norms\u8232  \'95 Institutional guidelines\u8232 \u8232  Policy breaches trigger alerts.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.11 Reports & Dashboards
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reports include:\uc0\u8232 \u8232  \'95 Staff utilization\u8232  \'95 Performance summaries\u8232  \'95 Training completion\u8232  \'95 Attrition indicators\u8232 \u8232  Dashboards are role-aware.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.12 Security & Privacy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 Role-based access\u8232  \'95 Sensitive data masking\u8232  \'95 Audit logs for HR actions\u8232  \'95 DPDP-compliant storage
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.13 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Multi-centre operations\u8232  \'95 High staff counts\u8232  \'95 Efficient scheduling algorithms\u8232  \'95 Horizontal scalability
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.14 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Staff role conflicts\u8232  \'95 Sudden faculty unavailability\u8232  \'95 Data inconsistencies\u8232  \'95 Unauthorized access attempts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 16.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 4 \'96 Live Classroom\u8232  \'95 Module 7 \'96 Learning Intelligence\u8232  \'95 Module 11 \'96 Payment & Incentives\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Human resource availability\u8232  \'95 Operational continuity
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 17
\f1\fs48 \

\f0\fs61\fsmilli30667 REFERRAL, QR & GROWTH INTELLIGENCE ENGINE (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 17.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 17 defines the Referral, QR Code, and Growth Intelligence Engine of EduMall.\uc0\u8232  This module enables scalable, traceable, and incentive-driven growth across EduMall,\u8232  DiLCe centres, schools, institutes, NGOs, teachers, and individual promoters.\u8232 \u8232  It ensures every learner acquisition is attributable, auditable, and aligned with\u8232  EduMall\'92s academic and ethical standards.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.2 Referral Actor Types
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The system supports multiple referral actors:\uc0\u8232 \u8232  \'95 DiLCe Centres\u8232  \'95 Schools & Colleges\u8232  \'95 Institutes & Coaching Centres\u8232  \'95 Teachers & Faculty\u8232  \'95 Counselors\u8232  \'95 Individual Promoters / Influencers\u8232  \'95 CSR / NGO Partners\u8232  \'95 EduMall Internal Teams\u8232 \u8232  Each actor is registered with a unique referral identity.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.3 QR Code Generation & Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 QR codes can be generated for:\uc0\u8232 \u8232  \'95 Centre-wise onboarding\u8232  \'95 School / institute-specific campaigns\u8232  \'95 Teacher-specific referrals\u8232  \'95 Event / seminar campaigns\u8232  \'95 Time-bound promotions\u8232 \u8232  Each QR code is:\u8232  \'95 Unique\u8232  \'95 Trackable\u8232  \'95 Configurable for validity and usage limits
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.4 Referral Links & Codes
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 In addition to QR codes, the system supports:\uc0\u8232 \u8232  \'95 Text-based referral codes\u8232  \'95 Short referral URLs\u8232  \'95 Campaign-specific codes\u8232  \'95 Discount-linked codes\u8232 \u8232  Codes are mapped to referral actors and campaigns.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.5 Attribution & Tracking Logic
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Attribution rules:\uc0\u8232 \u8232  \'95 First-touch and last-touch configurable\u8232  \'95 Persistent attribution until conversion\u8232  \'95 Multi-tenant aware attribution\u8232  \'95 Cross-device continuity (where possible)\u8232 \u8232  Attribution survives registration, login, and payment.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.6 Incentive & Discount Engine
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The engine supports:\uc0\u8232 \u8232  \'95 Fixed incentive payouts\u8232  \'95 Percentage-based incentives\u8232  \'95 Hybrid incentive + learner discount\u8232  \'95 Tiered incentive slabs\u8232 \u8232  All incentives are governed by policies defined in Module 11.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.7 Referral Lifecycle
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Referral lifecycle stages:\uc0\u8232 \u8232  \'95 QR scan / link click\u8232  \'95 Lead captured\u8232  \'95 Counseling / follow-up\u8232  \'95 Conversion (payment)\u8232  \'95 Incentive eligibility\u8232  \'95 Settlement\u8232 \u8232  Each stage is logged and reportable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.8 Fraud Detection & Abuse Prevention
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Anti-abuse mechanisms include:\uc0\u8232 \u8232  \'95 Self-referral detection\u8232  \'95 Duplicate account detection\u8232  \'95 Device and IP anomaly detection\u8232  \'95 Unusual conversion patterns\u8232  \'95 Manual review flags\u8232 \u8232  Suspected abuse triggers alerts and holds incentives.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.9 Dashboards & Analytics
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Referral dashboards include:\uc0\u8232 \u8232  \'95 Leads generated\u8232  \'95 Conversion ratios\u8232  \'95 Revenue attributed\u8232  \'95 Incentives earned\u8232  \'95 Campaign ROI\u8232 \u8232  Dashboards are role- and tenant-aware.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.10 Communication Integration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Integrates with Module 9 for:\uc0\u8232 \u8232  \'95 Auto follow-ups after QR scan\u8232  \'95 Referral status updates\u8232  \'95 Incentive notifications\u8232  \'95 Campaign announcements
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.11 Governance & Policy Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance features:\uc0\u8232 \u8232  \'95 Referral policy versioning\u8232  \'95 Approval workflows for campaigns\u8232  \'95 Incentive caps\u8232  \'95 Suspension or blacklisting of promoters\u8232 \u8232  All actions are auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.12 Security & Privacy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 DPDP-compliant lead handling\u8232  \'95 Masking of learner data\u8232  \'95 Secure referral identifiers\u8232  \'95 Audit logs for all referral actions
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.13 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Millions of QR scans\u8232  \'95 High-concurrency attribution\u8232  \'95 Real-time analytics updates\u8232  \'95 Horizontal scaling
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.14 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Multiple referral claims\u8232  \'95 Referral expiry during conversion\u8232  \'95 Campaign overlap conflicts\u8232  \'95 Incentive disputes
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 17.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 11 \'96 Subscription & Revenue\u8232  \'95 Module 13 \'96 Admissions & CRM\u8232  \'95 Module 9 \'96 Communication Engine\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 Growth attribution\u8232  \'95 Incentive calculation
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 18
\f1\fs48 \

\f0\fs61\fsmilli30667 SYSTEM INTEGRATION, API GATEWAY & INTEROPERABILITY PLATFORM (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 18.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 18 defines the System Integration, API Gateway, and Interoperability Platform\uc0\u8232  of EduMall. This module enables secure, scalable, and governed integration between\u8232  EduMall EduOS and external systems including school ERPs, university MIS, government\u8232  platforms, payment providers, AI services, mobile apps, websites, and third-party tools.\u8232 \u8232  This module ensures EduMall remains an open yet controlled ecosystem.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.2 Integration Philosophy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Core principles:\uc0\u8232 \u8232  \'95 API-first architecture\u8232  \'95 Zero business logic in client applications\u8232  \'95 Loose coupling with strong governance\u8232  \'95 Backward compatibility\u8232  \'95 Versioned integrations\u8232  \'95 Security by default\u8232 \u8232  All integrations must respect EduMall core logic and locked modules.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.3 API Gateway Architecture
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The API Gateway provides:\uc0\u8232 \u8232  \'95 Unified entry point for all APIs\u8232  \'95 Authentication & authorization enforcement\u8232  \'95 Rate limiting and throttling\u8232  \'95 Request validation\u8232  \'95 API version management\u8232  \'95 Traffic routing and load balancing\u8232 \u8232  The gateway supports REST and future GraphQL interfaces.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.4 API Categories
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall APIs are grouped as:\uc0\u8232 \u8232  A. Core APIs\u8232  \'95 User & Role APIs\u8232  \'95 Tenant & Branding APIs\u8232  \'95 Course & Content APIs\u8232  \'95 Assessment APIs\u8232  \'95 Subscription & Payment APIs\u8232 \u8232  B. Intelligence APIs\u8232  \'95 Learning Intelligence APIs\u8232  \'95 Dashboard & Analytics APIs\u8232  \'95 Recommendation APIs\u8232 \u8232  C. Engagement APIs\u8232  \'95 Communication APIs\u8232  \'95 Gamification APIs\u8232  \'95 Referral & QR APIs\u8232 \u8232  D. Integration APIs\u8232  \'95 ERP/MIS sync APIs\u8232  \'95 LMS interoperability APIs\u8232  \'95 Government reporting APIs
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.5 Authentication & Authorization
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security mechanisms include:\uc0\u8232 \u8232  \'95 OAuth 2.0 / OpenID Connect\u8232  \'95 Token-based authentication\u8232  \'95 Role- and tenant-aware scopes\u8232  \'95 API key management for system integrations\u8232  \'95 Expiry and refresh token policies\u8232 \u8232  No anonymous or unrestricted access is allowed.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.6 Data Synchronization & Interoperability
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports:\uc0\u8232 \u8232  \'95 One-way and bi-directional sync\u8232  \'95 Scheduled and event-driven sync\u8232  \'95 Conflict resolution rules\u8232  \'95 Field-level mapping\u8232 \u8232  Interoperability standards:\u8232  \'95 SCORM\u8232  \'95 IMS\u8232  \'95 LTI (where applicable)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.7 Mobile, WebApp & Website Consumption
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 All client applications must:\uc0\u8232 \u8232  \'95 Consume EduMall APIs only\u8232  \'95 Perform no core logic\u8232  \'95 Respect rate limits\u8232  \'95 Handle offline sync via approved APIs\u8232 \u8232  Clients include:\u8232  \'95 WebApp (LMS)\u8232  \'95 Android App\u8232  \'95 iOS App\u8232  \'95 Marketing Website
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.8 External Service Integration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports integration with:\uc0\u8232 \u8232  \'95 Payment gateways\u8232  \'95 SMS / Email / WhatsApp providers\u8232  \'95 Video conferencing tools\u8232  \'95 AI services (approved)\u8232  \'95 Analytics & BI tools\u8232 \u8232  All integrations are pluggable and governed.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.9 Versioning & Backward Compatibility
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 API versioning rules:\uc0\u8232 \u8232  \'95 Semantic versioning\u8232  \'95 Parallel support for critical versions\u8232  \'95 Deprecation notices\u8232  \'95 Migration guides\u8232 \u8232  Backward compatibility is mandatory for live tenants.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.10 Monitoring, Logging & Observability
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Provides:\uc0\u8232 \u8232  \'95 API usage logs\u8232  \'95 Performance metrics\u8232  \'95 Error tracking\u8232  \'95 Security alerts\u8232  \'95 Integration health dashboards
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.11 Security, Privacy & Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 Encrypted data in transit\u8232  \'95 IP allow/deny lists\u8232  \'95 Audit logs for API access\u8232  \'95 DPDP-compliant data sharing\u8232  \'95 Third-party access reviews
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.12 Governance & Approval Workflows
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance includes:\uc0\u8232 \u8232  \'95 Integration approval workflows\u8232  \'95 Scope and permission reviews\u8232  \'95 Periodic audits\u8232  \'95 Revocation mechanisms\u8232 \u8232  Unauthorized integrations are blocked.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.13 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 High API throughput\u8232  \'95 Horizontal scalability\u8232  \'95 Stateless services\u8232  \'95 Low-latency response times
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.14 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 API abuse\u8232  \'95 Partial failures\u8232  \'95 Data conflicts\u8232  \'95 Version mismatch issues
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 18.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 2 \'96 Tenant Management\u8232  \'95 Module 11 \'96 Subscription & Payments\u8232  \'95 Module 15 \'96 Governance & Compliance\u8232 \u8232  Other modules depend on this module for:\u8232  \'95 External access\u8232  \'95 Client application support\u8232  \'95 Ecosystem expansion
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\
\
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 19
\f1\fs48 \

\f0\fs61\fsmilli30667 MOBILE APPLICATIONS (ANDROID & iOS) \'96 DELIVERY & EXPERIENCE LAYER (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 19.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 19 defines the Mobile Applications layer of EduMall, covering Android and iOS apps.\uc0\u8232  These apps act as secure client interfaces to EduMall EduOS, enabling students, parents,\u8232  teachers, counselors, and administrators to access learning, analytics, communication,\u8232  and operational features on mobile devices.\u8232 \u8232  Mobile apps contain NO core business logic and rely entirely on EduMall APIs\u8232  (Module 18).
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.2 Design Principles
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Core design principles:\uc0\u8232 \u8232  \'95 API-only consumption (no logic duplication)\u8232  \'95 Offline-first for learners\u8232  \'95 Secure-by-design\u8232  \'95 Performance optimized for low-end devices\u8232  \'95 Role-based UI rendering\u8232  \'95 Accessibility and usability focus
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.3 Supported User Roles
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Mobile apps support the following roles:\uc0\u8232 \u8232  \'95 Students\u8232  \'95 Parents\u8232  \'95 Teachers (limited admin)\u8232  \'95 Counselors (CRM access)\u8232  \'95 Centre Incharge (monitoring)\u8232  \'95 EduMall Admin (restricted)\u8232 \u8232  Role access is governed by Module 1.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.4 Student App Features
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Student-specific capabilities:\uc0\u8232 \u8232  \'95 Course access & learning dashboard\u8232  \'95 Secure video & content playback\u8232  \'95 Offline content sync (Module 12)\u8232  \'95 Assignments & assessments\u8232  \'95 AI suggestions & learning nudges\u8232  \'95 Notes, highlights & bookmarks\u8232  \'95 Push notifications & reminders\u8232  \'95 Gamification & streak tracking
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.5 Parent App Features
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Parent-specific capabilities:\uc0\u8232 \u8232  \'95 Child performance overview\u8232  \'95 Attendance & engagement summary\u8232  \'95 Alerts on risks & milestones\u8232  \'95 Communication with counselors\u8232  \'95 Fee & subscription visibility\u8232 \u8232  Parents cannot access raw content or assessments.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.6 Teacher App Features
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Teacher-specific capabilities:\uc0\u8232 \u8232  \'95 Class & batch overview\u8232  \'95 Attendance marking\u8232  \'95 Assignment review (limited)\u8232  \'95 Student alerts\u8232  \'95 Communication tools\u8232 \u8232  Core content creation remains web-based.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.7 Counselor & Operations App Features
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports:\uc0\u8232 \u8232  \'95 Lead & inquiry tracking\u8232  \'95 Counseling schedules\u8232  \'95 Follow-up reminders\u8232  \'95 Basic CRM actions\u8232 \u8232  Complex CRM workflows remain web-based.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.8 Offline Access & Sync Strategy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Offline capabilities include:\uc0\u8232 \u8232  \'95 Encrypted offline storage\u8232  \'95 Time-bound access\u8232  \'95 Auto-expiry & revalidation\u8232  \'95 Background sync when online\u8232 \u8232  Offline sync follows policies defined in Module 12.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.9 Security & Device Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security measures:\uc0\u8232 \u8232  \'95 Secure authentication\u8232  \'95 Device binding\u8232  \'95 Jailbreak / root detection (where feasible)\u8232  \'95 Screenshot / screen recording restrictions\u8232  \'95 Token expiry and refresh policies
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.10 Push Notifications
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports:\uc0\u8232 \u8232  \'95 Academic reminders\u8232  \'95 Assessment alerts\u8232  \'95 Engagement nudges\u8232  \'95 System announcements\u8232 \u8232  Push logic is governed by Module 9.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.11 Performance & Optimization
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Performance considerations:\uc0\u8232 \u8232  \'95 Optimized video streaming\u8232  \'95 Minimal battery usage\u8232  \'95 Adaptive UI for device capability\u8232  \'95 Crash reporting & analytics
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.12 Accessibility & UX
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Accessibility features:\uc0\u8232 \u8232  \'95 Font scaling\u8232  \'95 Dark mode\u8232  \'95 Multilingual support\u8232  \'95 Assistive technology compatibility
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.13 App Distribution & Updates
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Distribution strategy:\uc0\u8232 \u8232  \'95 Google Play Store\u8232  \'95 Apple App Store\u8232  \'95 Controlled release cycles\u8232  \'95 Mandatory update enforcement for critical fixes
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.14 Monitoring & Analytics
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 App analytics include:\uc0\u8232 \u8232  \'95 Active users\u8232  \'95 Session duration\u8232  \'95 Feature usage\u8232  \'95 Crash reports\u8232 \u8232  Analytics feed central dashboards.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 19.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 1 \'96 User & Role Management\u8232  \'95 Module 7 \'96 Learning Intelligence\u8232  \'95 Module 9 \'96 Communication Engine\u8232  \'95 Module 12 \'96 Content Protection\u8232  \'95 Module 18 \'96 API Gateway\u8232 \u8232  Apps cannot function independently.
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13.1 \'96 MODULE 20 (UPDATED)
\f1\fs48 \

\f0\fs61\fsmilli30667 DEVOPS, CLOUD INFRASTRUCTURE & PLATFORM RELIABILITY (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 20.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 20 defines the DevOps, Cloud Infrastructure, Deployment, Security, Monitoring,\uc0\u8232  and Reliability framework of EduMall EduOS.\u8232 \u8232  This updated version aligns infrastructure governance with AI workloads, reward systems,\u8232  high-concurrency assessments, live classes, mobile access, and national-scale compliance\u8232  requirements.\u8232 \u8232  This module governs HOW EduMall is built, deployed, scaled, secured, and operated.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.2 Infrastructure Philosophy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Core principles:\uc0\u8232 \u8232  \'95 Cloud-native & container-first architecture\u8232  \'95 Infrastructure as Code (IaC)\u8232  \'95 Zero-downtime deployments\u8232  \'95 Security-by-design\u8232  \'95 Cost-aware scalability\u8232  \'95 Compliance-ready operations
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.3 Environment Architecture
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall operates across isolated environments:\uc0\u8232 \u8232  \'95 Development\u8232  \'95 QA\u8232  \'95 UAT\u8232  \'95 Staging\u8232  \'95 Production\u8232 \u8232  Strict isolation prevents data leakage and policy violations.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.4 Cloud & Network Architecture
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Infrastructure supports:\uc0\u8232 \u8232  \'95 Multi-region cloud deployment (India primary)\u8232  \'95 Auto-scaling compute & storage\u8232  \'95 Secure VPC and subnet isolation\u8232  \'95 CDN for video & content delivery\u8232  \'95 Load balancers for high concurrency
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.5 Containerization & Orchestration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Standards include:\uc0\u8232 \u8232  \'95 Docker containerization\u8232  \'95 Kubernetes orchestration\u8232  \'95 Auto-healing services\u8232  \'95 Rolling & blue-green deployments\u8232  \'95 Canary releases for critical services
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.6 CI/CD & Release Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 CI/CD pipelines include:\uc0\u8232 \u8232  \'95 Automated builds & testing\u8232  \'95 Security scanning (SAST/DAST)\u8232  \'95 Dependency vulnerability checks\u8232  \'95 Automated deployment & rollback\u8232  \'95 Version tagging and audit trails
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.7 AI & Analytics Infrastructure
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 AI workload support includes:\uc0\u8232 \u8232  \'95 Scalable inference services\u8232  \'95 Model versioning & rollback\u8232  \'95 GPU/accelerator support (where required)\u8232  \'95 Isolation of AI workloads from core services\u8232 \u8232  AI infra must be explainable and auditable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.8 Data Storage, Backup & DR
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Data resilience includes:\uc0\u8232 \u8232  \'95 Encrypted storage at rest\u8232  \'95 Automated backups\u8232  \'95 Point-in-time recovery\u8232  \'95 Multi-zone redundancy\u8232  \'95 Disaster recovery drills with RPO/RTO targets
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.9 Security Operations (DevSecOps)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Security controls include:\uc0\u8232 \u8232  \'95 WAF, firewalls & intrusion detection\u8232  \'95 Secrets management\u8232  \'95 API security enforcement\u8232  \'95 Access logging and alerts\u8232  \'95 Periodic penetration testing
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.10 Performance & Load Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Performance planning supports:\uc0\u8232 \u8232  \'95 Peak exam traffic\u8232  \'95 Concurrent live classes\u8232  \'95 Reward redemption spikes\u8232  \'95 Mobile sync surges\u8232 \u8232  Load testing is mandatory before releases.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.11 Cost Management & FinOps
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Cost governance includes:\uc0\u8232 \u8232  \'95 Resource tagging\u8232  \'95 Budget alerts\u8232  \'95 Cost attribution per tenant\u8232  \'95 Auto-scale cost controls\u8232  \'95 Periodic optimization reviews
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.12 Observability & Monitoring
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Observability includes:\uc0\u8232 \u8232  \'95 Application performance monitoring\u8232  \'95 Infrastructure metrics\u8232  \'95 Centralized logs\u8232  \'95 SLA and SLO tracking\u8232  \'95 Incident alerts
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.13 Incident, Change & Release Governance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Operational governance includes:\uc0\u8232 \u8232  \'95 Incident response playbooks\u8232  \'95 Root cause analysis\u8232  \'95 Change approval workflows\u8232  \'95 Emergency rollback procedures
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.14 Compliance & Audit Readiness
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports audits for:\uc0\u8232 \u8232  \'95 DPDP compliance\u8232  \'95 Financial audits\u8232  \'95 Security audits\u8232  \'95 Academic integrity reviews\u8232 \u8232  All actions are logged and traceable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module underpins:\uc0\u8232 \u8232  \'95 All runtime operations\u8232  \'95 API availability (Module 18)\u8232  \'95 Payments (Module 11)\u8232  \'95 Rewards redemption (Module 10)\u8232  \'95 Analytics (Module 21)\u8232 \u8232  It is governed by Module 15.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 20.16 Final Positioning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 20 is mandatory for production deployment.\uc0\u8232 \u8232  It ensures EduMall remains secure, reliable, compliant, and scalable\u8232  as an AI-powered, reward-enabled education platform.
\f3\fs24 \
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 21
\f1\fs48 \

\f0\fs61\fsmilli30667 DATA WAREHOUSE, BUSINESS INTELLIGENCE & ADVANCED ANALYTICS (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 21.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 21 defines the centralized Data Warehouse, Business Intelligence (BI),\uc0\u8232  and Advanced Analytics framework of EduMall EduOS.\u8232 \u8232  This module enables long-term data storage, cross-module analytics, trend discovery,\u8232  forecasting, benchmarking, and decision intelligence for EduMall HQ, institutions,\u8232  investors, policymakers, and academic leadership.\u8232 \u8232  This module is READ-ONLY with respect to core transactional systems.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.2 Data Philosophy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Core principles:\uc0\u8232 \u8232  \'95 Single source of analytical truth\u8232  \'95 Read-only, non-intrusive access\u8232  \'95 Privacy-first aggregation\u8232  \'95 Long-term historical analysis\u8232  \'95 Decision support, not operational control
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.3 Data Sources
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 The data warehouse ingests data from:\uc0\u8232 \u8232  \'95 User & Role Management (Module 1)\u8232  \'95 Academics & Courses (Modules 3, 4)\u8232  \'95 Assessments & Diagnostics (Module 5)\u8232  \'95 Psychometrics & Intelligence (Modules 6, 7)\u8232  \'95 Dashboards & Engagement (Modules 8, 10)\u8232  \'95 CRM & Admissions (Module 13)\u8232  \'95 Payments & Subscriptions (Module 11)\u8232  \'95 Referrals & Growth (Module 17)\u8232  \'95 Infrastructure metrics (Module 20)
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.4 Data Ingestion & Pipelines
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Ingestion mechanisms include:\uc0\u8232 \u8232  \'95 Batch ETL pipelines\u8232  \'95 Near real-time streaming (events)\u8232  \'95 Schema validation\u8232  \'95 Data quality checks\u8232  \'95 Error quarantine & reprocessing
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.5 Data Modeling & Storage
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Warehouse design supports:\uc0\u8232 \u8232  \'95 Fact and dimension tables\u8232  \'95 Time-series data\u8232  \'95 Partitioned storage\u8232  \'95 Historical snapshots\u8232  \'95 Scalable cloud data warehouses\u8232 \u8232  Optimized for analytical workloads.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.6 BI Dashboards & Reports
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 BI dashboards support:\uc0\u8232 \u8232  \'95 Academic performance trends\u8232  \'95 Institution benchmarking\u8232  \'95 Revenue & growth analytics\u8232  \'95 Seat utilization & ROI\u8232  \'95 Referral effectiveness\u8232  \'95 Centre-wise comparisons\u8232 \u8232  Dashboards are role-based and permissioned.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.7 Advanced Analytics & Forecasting
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Advanced analytics include:\uc0\u8232 \u8232  \'95 Enrollment forecasting\u8232  \'95 Dropout risk modeling\u8232  \'95 Capacity planning insights\u8232  \'95 Revenue projections\u8232  \'95 Campaign performance forecasting
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.8 AI, ML & Research Enablement
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module supports:\uc0\u8232 \u8232  \'95 Training datasets for AI models\u8232  \'95 Model evaluation datasets\u8232  \'95 Research & policy analysis\u8232  \'95 Anonymized data exports\u8232 \u8232  No model inference happens here.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.9 Data Privacy & Anonymization
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Privacy controls include:\uc0\u8232 \u8232  \'95 Aggregation thresholds\u8232  \'95 Anonymization & pseudonymization\u8232  \'95 Masking of personal identifiers\u8232  \'95 Tenant data isolation\u8232 \u8232  Compliance with DPDP is mandatory.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.10 External BI Tool Integration
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports integration with:\uc0\u8232 \u8232  \'95 Power BI\u8232  \'95 Tableau\u8232  \'95 Looker\u8232  \'95 Custom BI tools\u8232 \u8232  Access is governed and audited.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.11 Governance & Access Control
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance includes:\uc0\u8232 \u8232  \'95 Role-based BI access\u8232  \'95 Approval workflows for reports\u8232  \'95 Export controls\u8232  \'95 Audit logs for data access
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.12 Performance & Scalability
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Large data volumes\u8232  \'95 Long retention periods\u8232  \'95 High query concurrency\u8232  \'95 Cost-efficient storage tiers
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.13 Data Retention & Archival
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Retention policies include:\uc0\u8232 \u8232  \'95 Hot data for recent periods\u8232  \'95 Cold archival for historical data\u8232  \'95 Policy-driven deletion schedules
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.14 Edge Cases & Error Handling
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Handled scenarios:\uc0\u8232 \u8232  \'95 Incomplete data feeds\u8232  \'95 Late-arriving data\u8232  \'95 Schema evolution\u8232  \'95 Report inconsistencies
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 21.15 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 15 \'96 Governance & Compliance\u8232  \'95 Module 20 \'96 DevOps & Infrastructure\u8232 \u8232  Other modules do not depend on this module for operations.
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13 \'96 MODULE 22
\f1\fs48 \

\f0\fs61\fsmilli30667 GLOBALIZATION, LOCALIZATION & MULTI-COUNTRY COMPLIANCE (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 22.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 22 defines the Globalization, Localization, and Multi-Country Compliance\uc0\u8232  framework of EduMall EduOS.\u8232 \u8232  This module prepares EduMall for national-to-international expansion by enabling\u8232  multi-country operations, multi-currency support, localized academic rules, language\u8232  adaptation, and jurisdiction-specific legal and regulatory compliance.\u8232 \u8232  This module ensures EduMall can scale globally without re-architecting core systems.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.2 Globalization Philosophy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Core principles:\uc0\u8232 \u8232  \'95 Global core, local rules\u8232  \'95 Configuration over customization\u8232  \'95 No forked codebases\u8232  \'95 Country isolation where legally required\u8232  \'95 Compliance-first expansion\u8232 \u8232  Global expansion must never weaken core governance.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.3 Localization Framework
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Localization capabilities include:\uc0\u8232 \u8232  \'95 Multi-language UI and content\u8232  \'95 Region-specific calendars and holidays\u8232  \'95 Time-zone aware scheduling\u8232  \'95 Local grading scales and academic terms\u8232  \'95 Cultural context adaptations (non-academic)\u8232 \u8232  Localization is tenant- and region-configurable.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.4 Multi-Currency & Financial Localization
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Financial localization supports:\uc0\u8232 \u8232  \'95 Multiple currencies\u8232  \'95 Country-specific tax structures\u8232  \'95 Local payment gateways\u8232  \'95 Currency conversion handling\u8232  \'95 Invoice and receipt localization\u8232 \u8232  All financial rules integrate with Module 11.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.5 Academic Board & Curriculum Localization
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports:\uc0\u8232 \u8232  \'95 Country-wise academic boards\u8232  \'95 Board-specific curriculum structures\u8232  \'95 Examination patterns\u8232  \'95 Grading and promotion rules\u8232 \u8232  Academic localization is configuration-driven.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.6 Legal & Regulatory Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Compliance support includes:\uc0\u8232 \u8232  \'95 Data protection laws (GDPR, DPDP, etc.)\u8232  \'95 Child protection and consent laws\u8232  \'95 Education regulations\u8232  \'95 Data residency requirements\u8232 \u8232  Compliance rules are enforced via policies.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.7 Data Residency & Sovereignty
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports:\uc0\u8232 \u8232  \'95 Country-specific data residency\u8232  \'95 Region-isolated storage\u8232  \'95 Controlled cross-border data access\u8232  \'95 Encryption and access audits\u8232 \u8232  Some regions may require full data isolation.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.8 Content & IP Compliance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Ensures:\uc0\u8232 \u8232  \'95 Region-specific content restrictions\u8232  \'95 Copyright compliance\u8232  \'95 Licensing enforcement\u8232  \'95 Content takedown workflows\u8232 \u8232  IP protection remains aligned with Module 12.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.9 User Experience Localization
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 UX localization includes:\uc0\u8232 \u8232  \'95 Language preferences\u8232  \'95 Local formats (date, number)\u8232  \'95 Cultural UX norms\u8232  \'95 Accessibility standards per region
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.10 Global Reporting & Benchmarking
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Supports:\uc0\u8232 \u8232  \'95 Country-wise reports\u8232  \'95 Cross-country benchmarking\u8232  \'95 Region-specific KPIs\u8232  \'95 Global HQ dashboards\u8232 \u8232  Data aggregation respects privacy laws.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.11 Governance & Expansion Controls
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Governance features:\uc0\u8232 \u8232  \'95 Country onboarding approval workflows\u8232  \'95 Compliance readiness checks\u8232  \'95 Feature enablement by region\u8232  \'95 Suspension or rollback controls
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.12 Scalability & Performance
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Design considerations:\uc0\u8232 \u8232  \'95 Multi-region deployments\u8232  \'95 Latency optimization\u8232  \'95 Regional failover\u8232  \'95 Global CDN strategy
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.13 Risk Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Risk controls include:\uc0\u8232 \u8232  \'95 Legal risk assessment\u8232  \'95 Regulatory change monitoring\u8232  \'95 Compliance audit readiness\u8232  \'95 Exit strategies for regions
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.14 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module depends on:\uc0\u8232 \u8232  \'95 Module 2 \'96 Tenant & White-Label\u8232  \'95 Module 11 \'96 Payments & Subscription\u8232  \'95 Module 12 \'96 Content Protection\u8232  \'95 Module 15 \'96 Governance & Compliance\u8232  \'95 Module 20 \'96 DevOps & Infrastructure\u8232 \u8232  Other modules reference this module for\u8232  global readiness but do not depend on it.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 22.15 Final Positioning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 22 is the final functional module of EduMall SRS v13.\uc0\u8232 \u8232  It completes EduMall\'92s transformation from a national platform\u8232  into a globally deployable Education Operating System (EduOS).
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
\
\
\
\
\pard\pardeftab720\sa160\partightenfactor0

\f0\b\fs61\fsmilli30667 \cf0 EduMall SRS v13.1 \'96 MODULE 23 (UPDATED)
\f1\fs48 \

\f0\fs61\fsmilli30667 UX, UI, DESIGN SYSTEM, ACCESSIBILITY & ETHICAL ENGAGEMENT (FINAL)
\f1\fs48 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\fs45\fsmilli22667 \cf0 23.1 Purpose & Scope
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 23 defines the UX, UI, Design System, Accessibility, and Ethical Engagement\uc0\u8232  governance for EduMall EduOS.\u8232 \u8232  This updated version explicitly governs how AI, gamification, reward points, dashboards,\u8232  and monetization cues are presented to users across WebApp, Android, iOS, and Website,\u8232  ensuring clarity, inclusivity, non-addictive design, and trust.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.2 UX Governance Philosophy
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Core principles:\uc0\u8232 \u8232  \'95 Learning-first experience\u8232  \'95 Transparency over persuasion\u8232  \'95 Non-addictive engagement\u8232  \'95 Accessibility by default\u8232  \'95 Consistency across platforms\u8232  \'95 Trust-building interfaces\u8232 \u8232  UX must never manipulate learner behavior.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.3 Unified Design System
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 EduMall Design System includes:\uc0\u8232 \u8232  \'95 Brand typography & color tokens\u8232  \'95 Accessible color contrast palettes\u8232  \'95 UI components (cards, charts, buttons)\u8232  \'95 Interaction states & feedback\u8232  \'95 Motion & animation limits\u8232  \'95 Reward & notification components\u8232 \u8232  Single source of truth across all platforms.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.4 Ethical Gamification & Reward UX (UPDATED)
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Reward-related UX rules:\uc0\u8232 \u8232  \'95 Clear distinction between learning and rewards\u8232  \'95 Explicit display of reward eligibility & limits\u8232  \'95 No casino-style animations or loops\u8232  \'95 No dark patterns or urgency traps\u8232  \'95 Rewards framed as benefits, not income\u8232 \u8232  Reward UX must align with Module 10 & 15.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.5 Role-Based UX Patterns
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 UX varies by role:\uc0\u8232 \u8232  \'95 Students \'96 focus, progress clarity, wellbeing cues\u8232  \'95 Parents \'96 reassurance, transparency, alerts\u8232  \'95 Teachers \'96 efficiency, insight density\u8232  \'95 Admins \'96 governance visibility, controls\u8232 \u8232  Role-based UX prevents overload.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.6 Accessibility Standards
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Accessibility compliance:\uc0\u8232 \u8232  \'95 WCAG 2.1 AA\u8232  \'95 Screen readers\u8232  \'95 Keyboard navigation\u8232  \'95 Font scaling\u8232  \'95 Motion reduction\u8232  \'95 Multilingual support\u8232 \u8232  Accessibility is mandatory.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.7 Dashboard & Data Visualization Rules
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Dashboard UX rules:\uc0\u8232 \u8232  \'95 Explainable metrics only\u8232  \'95 Tooltips & context labels\u8232  \'95 No hidden scoring\u8232  \'95 Clear separation of academic vs reward data\u8232  \'95 Burnout and wellbeing indicators visible\u8232 \u8232  Works with Module 8.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.8 Performance-Aware UI
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Performance guidelines:\uc0\u8232 \u8232  \'95 Lazy loading\u8232  \'95 Skeleton screens\u8232  \'95 Low-bandwidth modes\u8232  \'95 Optimized media delivery\u8232 \u8232  UX must not degrade performance.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.9 Localization & Cultural Sensitivity
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Localization includes:\uc0\u8232 \u8232  \'95 Language-aware layouts\u8232  \'95 Cultural color sensitivity\u8232  \'95 Regional UX norms\u8232  \'95 RTL/LTR readiness\u8232 \u8232  Aligns with Module 22.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.10 Security-Aware UX
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 UX safeguards:\uc0\u8232 \u8232  \'95 No exposure of sensitive data\u8232  \'95 Masked financial values where required\u8232  \'95 Secure error messaging\u8232  \'95 Role-based visibility enforcement\u8232 \u8232  UX cannot bypass security.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.11 UX Research & Validation
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Practices include:\uc0\u8232 \u8232  \'95 Usability testing\u8232  \'95 Accessibility audits\u8232  \'95 Reward UX impact reviews\u8232  \'95 A/B testing (ethically constrained)\u8232 \u8232  Research informs iteration.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.12 Design Change Management
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Change control includes:\uc0\u8232 \u8232  \'95 Versioned design releases\u8232  \'95 Impact analysis\u8232  \'95 Governance approval\u8232  \'95 Rollback capability\u8232 \u8232  Design changes must be safe.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.13 Tooling & Documentation
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Tooling includes:\uc0\u8232 \u8232  \'95 Figma / design libraries\u8232  \'95 Component documentation\u8232  \'95 Usage guidelines\u8232  \'95 Accessibility checklists\u8232 \u8232  Vendors must comply.
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.14 Dependencies
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 This module governs presentation for:\uc0\u8232 \u8232  \'95 Module 7 \'96 Learning Intelligence\u8232  \'95 Module 8 \'96 Dashboards\u8232  \'95 Module 10 \'96 Rewards & Gamification\u8232  \'95 Module 11 \'96 Payments UI\u8232  \'95 Module 15 \'96 Governance\u8232  \'95 Module 22 \'96 Localization
\f3\fs24 \
\pard\pardeftab720\sa106\partightenfactor0

\f0\b\fs45\fsmilli22667 \cf0 23.15 Final Positioning
\f1\fs36 \
\pard\pardeftab720\sa266\partightenfactor0

\f2\b0\fs29\fsmilli14667 \cf0 Module 23 is a governance layer for experience.\uc0\u8232 \u8232  It ensures EduMall remains ethical, inclusive, transparent,\u8232  and learner-centric while scaling AI and reward systems.
\f3\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \
\
}