/**
 * INTERNATIONALIZATION (i18n) DICTIONARY & CONTROLLER
 * Ahmed Adel Saad Obaid Portfolio
 * Internationalization (i18n) Engine - EN / AR
 */

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_about_full: "About & Credentials",
    nav_education: "Education",
    nav_certifications: "Certifications",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_projects_full: "Projects",
    nav_services: "Services",
    nav_achievements: "Achievements",
    nav_contact: "Contact",
    nav_contact_full: "Contact & Services",
    btn_contact_nav: "Contact Me",

    // Subpage Headers & Hub
    page_about_tag: "PROFILE & CREDENTIALS",
    page_about_title: "About Me & <span class='text-gradient'>Credentials</span>",
    page_about_subtitle: "Cybersecurity background, academic studies at AOU, Cisco CCNA credentials, DEPI specialization, and technical skillset.",
    page_projects_tag: "PORTFOLIO & WORK",
    page_projects_title: "Technical Systems & <span class='text-gradient'>Projects</span>",
    page_projects_subtitle: "Deep dive into independent AI cybersecurity systems, live production web applications, and network architectures.",
    page_contact_tag: "GET IN TOUCH",
    page_contact_title: "Services & <span class='text-gradient'>Contact</span>",
    page_contact_subtitle: "Reach out for SOC Analyst opportunities, cybersecurity collaboration, network infrastructure, or secure web development.",
    home_explore_more: "Explore Detailed Sections",
    home_explore_subtitle: "Visit dedicated pages for verified credentials, live projects, and direct collaboration channels.",
    card_about_title: "About & Credentials",
    card_about_desc: "Arab Open University degree, Cisco CCNA modules (Networks, Switching, Routing, Automation), and DEPI incident response track.",
    card_about_btn: "View Credentials",
    card_projects_title: "Projects Showcase",
    card_projects_desc: "DeepVision AI Deepfake Detection System, e-commerce, company portal, and network tools with live demos and code.",
    card_projects_btn: "View Projects",
    card_contact_title: "Services & Inquiries",
    card_contact_desc: "Defensive SOC analysis, SIEM monitoring, network setups, and secure web application development. Direct message & phone.",
    card_contact_btn: "Get in Touch",
    featured_project_badge: "FLAGSHIP AI & CYBERSECURITY SYSTEM",
    view_project_details: "Explore System Details & Demo",
    quick_stats_univ_title: "Cybersecurity",
    quick_stats_univ_sub: "Arab Open University (2022–2026)",
    quick_stats_ccna_title: "Cisco CCNA",
    quick_stats_ccna_sub: "3 Verified Cisco Modules (210h)",
    quick_stats_depi_title: "DEPI Fellow",
    quick_stats_depi_sub: "Cyber Incident Response Analyst",
    quick_stats_proj_title: "100% Practical",
    quick_stats_proj_sub: "End-to-End Engineered Systems",

    // Home Structured Sections
    home_brief_about_tag: "01 // OVERVIEW",
    home_brief_about_title: "Core Focus & <span class='text-gradient'>Specialization</span>",
    home_brief_about_subtitle: "Bridging the gap between defensive SOC operations, Cisco networking, and secure application engineering.",
    home_core_skills_tag: "02 // CAPABILITIES",
    home_core_skills_title: "Core Technical <span class='text-gradient'>Competencies</span>",
    home_core_skills_subtitle: "Key technical pillars tested through real-world systems, certified Cisco training, and continuous learning.",
    home_featured_projects_tag: "03 // OTHER WORK",
    home_featured_projects_title: "Other Notable <span class='text-gradient'>Projects</span>",
    home_featured_projects_subtitle: "Real-world client portals, responsive e-commerce web applications, and interactive learning systems.",
    home_cta_tag: "04 // GET IN TOUCH",
    home_cta_title: "Ready to <span class='text-gradient'>Collaborate?</span>",
    home_cta_subtitle: "Available for SOC Analyst positions, cybersecurity internships, network infrastructure projects, and web development.",
    btn_view_all_projects: "View Full Projects Showcase &rarr;",
    btn_read_more_about: "View Full Bio, Education & Certifications &rarr;",
    btn_open_deepvision_modal: "Open Technical Case Study (Architecture & Confusion Matrix)",

    // Hero Section
    telemetry_status: "SOC Monitoring & Continuous Learning Active",
    hero_brand: "Ahmed Adel",
    hero_name: "Ahmed Adel Saad Obaid",
    hero_role_primary: "Cybersecurity Student & Aspiring SOC Analyst",
    hero_role_secondary: "Web Developer | Networking Enthusiast",
    hero_usp: "“I combine cybersecurity, networking, and web development with practical project experience to build secure and practical digital solutions.”",
    btn_view_projects: "View My Projects",
    btn_hero_contact: "Contact Me",
    avatar_status_1: "Threat Analysis Ready",
    avatar_status_2: "Web & Network Dev",
    preloader_status: "INITIALIZING SECURITY ENVIRONMENT...",
    avatar_status_badge: "Active SOC Analyst",
    avatar_cred_badge: "Cisco CCNA & DEPI",
    avatar_change_hint: "Photo Space",
    avatar_role_tag: "SOC Operations • Network Security • Web Engineering",

    // About Section
    section_about_tag: "01 // PROFILE",
    section_about_title: "About <span class='text-gradient'>Me</span>",
    section_about_subtitle: "Cybersecurity student with a dedicated focus on Security Operations (SOC), Network Security, and Modern Web Development.",
    about_intro_summary: "Undergraduate student in Cybersecurity at Arab Open University (AOU) with Cisco CCNA credentials and DEPI Fellowship. Focused on digital defense, incident triage, enterprise network infrastructure, and high-performance secure web applications.",
    about_card1_title: "Security Operations & SOC",
    about_card1_desc: "Hands-on training in security monitoring, threat mitigation, SIEM analysis, Wireshark packet inspection, and defensive workflows to investigate security incidents.",
    about_card2_title: "Networking & Infrastructure",
    about_card2_desc: "Solid foundation in enterprise networking, switching, routing, dynamic routing (OSPF), IP subnetting, access security, QoS, and Cisco network technologies.",
    about_card3_title: "Web Development & Scripting",
    about_card3_desc: "Developing responsive front-end interfaces, educational platforms, and scripting tools using PHP, Python, modern JavaScript, HTML5, and CSS3.",
    about_card4_title: "Independent Project Lifecycles",
    about_card4_desc: "Proven track record of researching, designing, and independently developing end-to-end technical systems such as DeepVision and production web applications.",

    // Education Section
    section_edu_tag: "02 // ACADEMIC",
    section_edu_title: "Education & <span class='text-gradient'>Academic Path</span>",
    section_edu_subtitle: "Specialized undergraduate degree in Computers & Cybersecurity.",
    edu_inst: "Arab Open University – Egypt",
    edu_faculty: "Faculty of Computers and Information / Cybersecurity",
    edu_major: "Major: Cybersecurity",
    edu_date: "2022 – Expected Graduation 2026",
    edu_grade_label: "Academic Grade",
    edu_grade_val: "Very Good",

    // Certifications Section
    section_cert_tag: "03 // CREDENTIALS",
    section_cert_title: "Certifications & <span class='text-gradient'>Training</span>",
    section_cert_subtitle: "Verified Cisco CCNA credentials and active specialized government training programs.",
    cert1_title: "CCNA: Introduction to Networks",
    cert1_provider: "Cisco Networking Academy – Arab Open University",
    cert1_date: "Completed: 12 February 2025",
    cert1_duration: "70 Hours",
    cert2_title: "CCNA: Switching, Routing, and Wireless Essentials",
    cert2_provider: "Cisco Networking Academy – Arab Open University",
    cert2_date: "Completed: 28 March 2025",
    cert2_duration: "70 Hours",
    cert3_title: "CCNA: Enterprise Networking, Security, and Automation",
    cert3_provider: "Cisco Networking Academy – Arab Open University",
    cert3_date: "Completed: 27 July 2025",
    cert3_duration: "70 Hours",
    btn_view_cert: "View Full Certificate",
    
    // DEPI Training
    depi_badge: "Specialized Training Track",
    depi_title: "Digital Egypt Pioneers Initiative (DEPI)",
    depi_track: "Track: Infrastructure & Security – Cyber Security Incident Response Analyst",
    depi_status: "Status: In Progress (Started 2026 — 6 Months Duration)",
    depi_learning_intro: "Confirmed practical learning areas currently in training:",

    // Skills Section
    section_skills_tag: "04 // CAPABILITIES",
    section_skills_title: "Technical <span class='text-gradient'>Skills</span>",
    section_skills_subtitle: "Divided into practical technical domains without exaggerated numerical percentages.",
    cat_cybersecurity: "Cybersecurity & SOC",
    cat_networking: "Networking & Cisco Tech",
    cat_web: "Programming & Web Development",
    cat_systems: "Systems & Infrastructure",
    cat_creative: "Creative & Digital Media",
    cat_professional: "Professional Competencies",

    // Projects Section
    section_proj_tag: "05 // PORTFOLIO WORK",
    section_proj_title: "Featured <span class='text-gradient'>Projects</span>",
    section_proj_subtitle: "Verified, practical systems developed independently and client work built to industry standards.",
    filter_all: "All Projects",
    filter_cyber: "Cybersecurity & AI",
    filter_web: "Web Development",
    filter_client: "Client / Company Work",

    // DeepVision
    dv_tag: "FLAGSHIP AI & CYBERSECURITY SYSTEM",
    dv_title: "DeepVision — AI-Powered Deepfake Detection System",
    dv_role: "Individual Project / Developed Independently",
    dv_desc: "DeepVision is an AI-powered deepfake detection system designed to analyze images and videos to determine whether media is real or fake, providing exact confidence scores. Rather than passing raw media blindly, DeepVision enforces a multi-stage computer vision pipeline focused on facial biometric regions.",
    dv_pipeline_title: "Verified Technical Processing Pipeline",
    dv_step1_name: "01. Face Detection",
    dv_step1_desc: "MediaPipe BlazeFace detects facial regions with a 20% margin to eliminate background noise.",
    dv_step2_name: "02. Normalization",
    dv_step2_desc: "Detected facial crop is resized to 224 × 224 pixels in RGB format.",
    dv_step3_name: "03. Attention Backbone",
    dv_step3_desc: "EfficientNet-B4 extracts features while CBAM (Channel & Spatial Attention) refines representations.",
    dv_step4_name: "04. Video Analysis",
    dv_step4_desc: "Analyzes 50 evenly spaced frames (FRAME_STEP = 20) assessing consecutive fake thresholds.",
    dv_step5_name: "05. Final Prediction",
    dv_step5_desc: "Rule-based aggregate scoring yields binary verdict with calibrated confidence score.",

    dv_eval_title: "Performance & Empirical Evaluation Results",
    dv_eval_note: "Empirical results measured on FaceForensics++ C23 benchmark dataset (24,859 total test instances):",
    dv_stat_acc: "Overall Accuracy",
    dv_stat_fake_f1: "Fake (Class 0) F1-Score",
    dv_stat_real_f1: "Real (Class 1) F1-Score",
    dv_stat_weighted: "Weighted F1-Score",
    dv_table_class: "Class / Metric",
    dv_table_prec: "Precision",
    dv_table_rec: "Recall",
    dv_table_f1: "F1-Score",
    dv_table_support: "Support",
    dv_matrix_title: "Verified Confusion Matrix Visualizer",
    dv_matrix_tf: "True Fake → Predicted Fake",
    dv_matrix_fr: "True Fake → Predicted Real (Type II)",
    dv_matrix_rf: "True Real → Predicted Fake (Type I)",
    dv_matrix_tr: "True Real → Predicted Real",
    dv_gallery_title: "Authentic Project Evidence & System Screens",

    // Project 2: STAR
    star_badge: "Client Company Project",
    star_title: "STAR Business Services — Corporate Website",
    star_role: "Role: Website Developer (Individual Project)",
    star_desc: "Official corporate website developed for STAR (الشركة السعودية لريادة الأعمال - Saudi Entrepreneurship Company), a leading consulting and logistics firm with operations in Egypt, Saudi Arabia, and Bahrain.",
    star_feat1: "Comprehensive company presentation & bilingual branding",
    star_feat2: "Services showcase (Company formation, licensing, legal support)",
    star_feat3: "Client portfolio & success partners integration",
    star_feat4: "Interactive consultation booking UI & contact workflow",
    star_feat5: "Custom preloader, dark/light theme, and responsive design",

    // Project 3: Store
    store_badge: "Web Development / Front-End",
    store_title: "Modern E-Commerce Store",
    store_role: "Role: Individual Project (Front-End Only)",
    store_desc: "A responsive, feature-rich front-end e-commerce interface built using pure HTML, CSS, and JavaScript, demonstrating clean UI/UX and product catalog navigation.",
    store_feat1: "Product catalog browsing, category filtering, and search",
    store_feat2: "Promotional deals, discounts, and offers presentation",
    store_feat3: "Interactive shopping cart & checkout simulation UI",
    store_feat4: "User authentication modals (Login / Registration)",
    store_feat5: "Customer support, shipping information, and policy sections",

    // Project 4: PHP Mastery
    php_badge: "Educational Platform / Front-End",
    php_title: "PHP Mastery — Bilingual Learning Platform",
    php_role: "Role: Individual Project (Front-End Only)",
    php_desc: "An interactive educational platform designed to teach PHP fundamentals through lessons, live code examples, and quizzes with instant feedback in a sleek glassmorphism UI.",
    php_feat1: "Structured lesson catalog from syntax to advanced functions",
    php_feat2: "Interactive code examples with instant visual preview",
    php_feat3: "Interactive quiz engine with instant score calculations",
    php_feat4: "Complete Arabic and English bilingual support with true RTL",
    php_feat5: "Modern glassmorphism-inspired dark design system",

    btn_live_demo: "Live Demo",
    btn_github: "GitHub Repo",
    btn_gallery: "View Gallery",

    // Additional Project Showcase & Detail Page Keys
    btn_back_projects: "Back to All Projects",
    btn_back_showcase: "Back to Projects Showcase",
    btn_open_live_demo: "Open Live Demo",
    btn_github_repo: "GitHub Repository",
    btn_github_code: "View Source Code on GitHub",
    btn_view_case_study: "View Full Case Study &rarr;",
    btn_view_project_details: "View Project Details &rarr;",
    btn_featured_dv: "Featured Project: DeepVision Case Study &rarr;",
    btn_next_php: "Next Project: PHP Mastery &rarr;",
    btn_next_store: "Next Project: Modern E-Commerce &rarr;",
    btn_next_star: "Next Project: STAR Company Website &rarr;",
    section_gallery_title: "Production Screenshot Gallery",
    section_gallery_title_4: "Production Screenshot Gallery (4 Views)",
    section_gallery_title_5: "Production Screenshot Gallery (5 Views)",
    gallery_hint: "Click any view to inspect the high-resolution screenshot in full screen:",

    // Projects Grid Cards
    dv_badge: "Cybersecurity & AI Flagship",
    dv_role_brief: "98.32% ACCURACY • INDIVIDUAL PROJECT",
    dv_title_short: "DeepVision: AI Deepfake Detection System",
    dv_desc_card: "Multi-stage facial forensics system using MediaPipe BlazeFace, EfficientNet-B4 backbone, and CBAM (Channel & Spatial Attention) evaluated on 24,859 benchmark samples.",
    star_client_tag: "CLIENT: Saudi Entrepreneurship Company (STAR)",
    star_desc_card: "Official corporate portal delivering executive consulting presentations, an interactive consultation booking workflow, client case studies, and a brand preloader animation.",
    store_role_tag: "FRONT-END SYSTEM • STOREFRONT UX",
    store_desc_card: "Responsive storefront interface engineered with dynamic product category filtering, instant price calculation, a sliding cart drawer, and multi-step checkout.",
    php_role_tag: "INTERACTIVE LEARNING • FRONT-END",
    php_desc_card: "Educational platform for PHP programming featuring glassmorphic cyber styling, structured lesson indexing, live code playgrounds, and instant evaluation quizzes.",

    // PHP Detail Page
    php_hero_title: "PHP Mastery: <span class='text-gradient'>Interactive Learning Platform</span>",
    php_hero_desc: "An educational web application for software developers and computer science students learning PHP, featuring frosted glassmorphism visuals, live code previews, structured curricula, and instant quizzes.",
    php_role_detail: "Individual Project (Front-End)",
    php_sec1_title: "Concept & Educational Vision",
    php_sec1_desc: "Traditional programming tutorials are frequently dense and unengaging. PHP Mastery was engineered to convert PHP syntax learning into an interactive, step-by-step experience where theoretical explanations are coupled with live code playgrounds and quizzes with instantaneous validation.",
    php_sec2_title: "Platform Architecture & Features",
    php_feat1_title: "01. Glassmorphic Dark UI",
    php_feat1_desc: "A modern cyber aesthetic utilizing backdrop blurs and subtle neon accents to prevent eye fatigue during study.",
    php_feat2_title: "02. Structured Lesson Indexing",
    php_feat2_desc: "A categorized sidebar taking learners from variables and control loops to object-oriented programming (OOP) and PDO.",
    php_feat3_title: "03. Live Code Editor & Output",
    php_feat3_desc: "Interactive syntax highlighting and output preview area to understand code execution flow intuitively.",
    php_feat4_title: "04. Instant Evaluation Quiz Engine",
    php_feat4_desc: "Integrated assessments with randomized questions, immediate feedback explanations, and calculated mastery scores.",

    // Store Detail Page
    store_hero_title: "Modern E-Commerce: <span class='text-gradient'>Interactive Storefront System</span>",
    store_hero_desc: "A responsive front-end online shopping application featuring instant product category filters, a slide-out shopping cart drawer, dynamic price calculation, and a multi-step checkout workflow.",
    store_role_detail: "Individual Project (Front-End)",
    store_sec1_title: "Concept & Scope",
    store_sec1_desc: "Designed and built as a standalone front-end application to simulate modern retail UX without third-party frameworks. The project showcases mastery of client-side DOM manipulation, state handling for shopping baskets, dynamic badge calculations, and responsive mobile-first UI design.",
    store_sec2_title: "Key E-Commerce Architectural Components",
    store_feat1_title: "01. Dynamic Category Filtering",
    store_feat1_desc: "Instant client-side catalog filtering allowing shoppers to isolate categories seamlessly without full-page reloads.",
    store_feat2_title: "02. Slide-out Cart Drawer",
    store_feat2_desc: "A persistent shopping cart sidebar showing item counts, real-time quantity controls, subtotal tallies, and clean item removals.",
    store_feat3_title: "03. Multi-Step Checkout Modal",
    store_feat3_desc: "A friction-free purchasing workflow validating customer contact details, shipping addresses, and simulated payment confirmation.",
    store_feat4_title: "04. Fully Responsive Fluid Layout",
    store_feat4_desc: "Adaptive grid system providing optimal viewing experiences from ultra-wide desktops down to mobile phone viewports.",

    // STAR Detail Page
    star_hero_title: "STAR Business Services: <span class='text-gradient'>Official Corporate Website</span>",
    star_hero_desc: "The official corporate presentation website for STAR Business Services, handling executive consulting services, appointment booking, client project portfolio, and customized branding animations.",
    star_client_badge: "Client / Corporate Project",
    star_client_name: "Client: Saudi Entrepreneurship Company (STAR)",
    star_sec1_title: "Project Scope & Client Background",
    star_sec1_desc1: "The client, <strong>Saudi Entrepreneurship Company (STAR)</strong>, required an authoritative, modern digital portal to showcase their administrative services, corporate incorporation solutions, and strategic advisory offerings across the Saudi and Gulf markets.",
    star_sec1_desc2: "The scope entailed designing and engineering a multi-section landing portal that inspires trust, communicates corporate credibility, and provides friction-free lead generation for business consultations.",
    star_sec2_title: "Key Delivered Capabilities",
    star_feat1_title: "01. Executive Branding & Services",
    star_feat1_desc: "Clean typography, structured service cards, and corporate color harmony presenting company formation, licensing, and feasibility studies.",
    star_feat2_title: "02. Consultation Booking Workflow",
    star_feat2_desc: "An intuitive form allowing entrepreneurs and corporate executives to request consultations directly with validated input fields.",
    star_feat3_title: "03. Client Portfolio & Partners",
    star_feat3_desc: "A curated partner showcase establishing corporate credibility, success stories, and verified client testimonials.",
    star_feat4_title: "04. Custom Brand Preloader",
    star_feat4_desc: "A tailored SVG brand drawing animation greeting visitors while the page assets load smoothly in the background.",

    // DeepVision Detail Page
    dv_hero_title: "DeepVision: <span class='text-gradient'>AI Deepfake Detection System</span>",
    dv_hero_desc: "A high-performance forensics system engineered to detect hyper-realistic facial manipulations across static images and dynamic video sequences with calibrated temporal confidence.",
    dv_stat_evaluated: "Evaluated on 24,859 Samples",
    dv_stat_fake_sub: "Precision: 99.11% | Recall: 98.90%",
    dv_stat_cbam_sub: "Channel + Spatial Attention",
    dv_stat_ff_sub: "C23 Compression Benchmark",
    dv_stat_accuracy_label: "Overall Accuracy",
    dv_stat_fake_label: "Fake F1-Score",
    dv_stat_backbone_label: "Attention Backbone",
    dv_stat_dataset_label: "Benchmark Dataset",
    dv_sec1_title: "1. The Problem: The Proliferation of Synthetic Forgery",
    dv_sec1_p1: "The rapid advancement of deep learning generative models (GANs and diffusion algorithms) has allowed threat actors to create hyper-realistic synthetic video and image manipulations with minimal effort. Deepfakes threaten organizational communications, executive identity verification, KYC onboarding, and judicial evidence.",
    dv_sec1_p2: "Standard classification architectures struggle with real-world compressed video. Passing entire frames without facial isolation creates background noise, leading to catastrophic false alarms or missed manipulation artifacts along facial boundaries.",
    dv_sec2_title: "2. The Concept: Biometric Localization & Attentive Feature Forensics",
    dv_sec2_p1: "Rather than passing full images blindly, DeepVision implements a disciplined multi-stage computer vision pipeline focused on facial biometric regions.",
    dv_sec3_title: "3. System Architecture & Processing Pipeline",
    dv_sec4_title: "4. Quantitative Evaluation & Empirical Results",
    dv_sec5_title: "5. Confusion Matrix & Verification",
    dv_sec6_title: "6. Authentic Project Evidence & System Screens",

    // Services Section
    section_serv_tag: "06 // OFFERINGS",
    section_serv_title: "Services & <span class='text-gradient'>Capabilities</span>",
    section_serv_subtitle: "Accurate services aligned with my confirmed technical expertise.",
    serv1_title: "Web Development",
    serv1_desc: "Building clean, responsive, and performance-optimized websites using modern web standards (HTML5, CSS3, ES6+ JavaScript).",
    serv2_title: "PHP Development",
    serv2_desc: "Developing backend web scripts, educational portals, and functional web applications with PHP.",
    serv3_title: "E-Commerce Front-End Development",
    serv3_desc: "Designing user-centric online store interfaces with catalog browsing, shopping carts, and checkout workflows.",
    serv4_title: "Security Monitoring & SOC Fundamentals",
    serv4_desc: "Traffic inspection, event log analysis, threat mitigation basics, and defensive monitoring.",
    serv5_title: "Networking Support & Basic Configuration",
    serv5_desc: "Subnetting, switching, routing setups, basic OSPF configuration, and Cisco equipment troubleshooting.",
    serv6_title: "Video Editing",
    serv6_desc: "Professional video editing, pacing, color grading, and audio synchronization for digital media.",
    serv7_title: "Motion Graphics",
    serv7_desc: "Creating engaging motion graphics, animated logos, and visual title sequences.",
    serv8_title: "Animation",
    serv8_desc: "Producing 2D animations, UI micro-interactions, and visual storytelling assets.",
    serv9_title: "3D Design",
    serv9_desc: "Modeling 3D geometric objects, product renders, and stylized scene assets.",
    serv10_title: "Digital Content Creation",
    serv10_desc: "Producing educational, technical, and marketing content tailored for modern digital platforms.",

    // Achievements Section
    section_ach_tag: "07 // MILESTONES",
    section_ach_title: "Verified <span class='text-gradient'>Highlights</span>",
    section_ach_subtitle: "Key factual milestones achieved throughout academic and independent projects.",
    ach1_title: "Cisco Networking Academy Triple CCNA Completion",
    ach1_desc: "Completed all 3 core CCNA courses (Introduction to Networks, Switching & Routing, Enterprise Networking & Security) totaling 210 hours of verified study.",
    ach2_title: "Independent Development of DeepVision AI System",
    ach2_desc: "Researched, architected, and built an end-to-end deepfake detection system utilizing MediaPipe, EfficientNet-B4, and CBAM attention mechanisms with 98.32% measured accuracy.",
    ach3_title: "DEPI Incident Response Analyst Participation",
    ach3_desc: "Selected for the Digital Egypt Pioneers Initiative (DEPI) specialized track in Infrastructure & Security Incident Response.",
    ach4_title: "Client Corporate Website Delivery",
    ach4_desc: "Successfully developed the public-facing corporate website for STAR (Saudi Entrepreneurship Company) featuring comprehensive business presentation.",
    ach5_title: "Interactive Educational & E-Commerce Platforms",
    ach5_desc: "Independently created the PHP Mastery bilingual learning portal and a modern responsive e-commerce web platform.",

    // Contact Section
    section_cont_tag: "08 // CONNECT",
    section_cont_title: "Let’s <span class='text-gradient'>Connect</span>",
    section_cont_subtitle: "Have a project, opportunity, or collaboration in mind?",
    cont_email_label: "Direct Email",
    cont_phone_label: "Phone & WhatsApp",
    cont_location_label: "Location",
    cont_location_val: "Monufia, Egypt",
    btn_copy_email: "Copy Email",
    btn_copied: "Copied!",
    form_name_label: "Your Name",
    form_email_label: "Your Email",
    form_subject_label: "Subject",
    form_msg_label: "Message",
    btn_send_msg: "Send Message",

    // Homepage Complete Keys
    hero_status: "AVAILABLE FOR SOC ANALYST ROLES & INTERNSHIPS",
    hero_bio_clean: "Computer Science student at Arab Open University (AOU) with Cisco CCNA certifications and DEPI Security Fellowship. Dedicated to security operations (SOC), threat monitoring, network infrastructure, and engineering high-reliability web applications.",
    hero_badge_ccna: "Cisco CCNA (3 Modules)",
    hero_badge_depi: "DEPI Security Fellow",
    hero_badge_dv: "AI Deepfake Detection",
    hero_badge_web: "Full-Stack Web Dev",
    btn_explore_dv: "Explore DeepVision Case Study &rarr;",
    btn_contact_services: "Contact & Services",
    hero_glance_title: "// Core Profile At A Glance",
    hero_academic_title: "ACADEMIC PURSUIT",
    hero_academic_inst: "Arab Open University (AOU)",
    hero_academic_degree: "B.Sc. in Computer Science (In Progress)",
    hero_certs_title: "VERIFIED CERTIFICATIONS",
    hero_certs_provider: "Cisco Networking Academy",
    hero_certs_list: "CCNA 1 (ITN) • CCNA 2 (SRWE) • CCNA 3 (ENSA)",
    hero_train_title: "SPECIALIZED TRAINING",
    hero_train_name: "DEPI Cybersecurity Fellowship",
    hero_train_desc: "Digital Egypt Pioneers Initiative — SOC Track",
    hero_flagship_title: "FLAGSHIP RESEARCH",
    hero_flagship_name: "DeepVision AI Pipeline",
    hero_flagship_desc: "98.32% Accuracy with PyTorch & CBAM",
    domains_tag: "01 // SPECIALIZATIONS",
    domains_title: "Technical Expertise & Capabilities",
    domains_subtitle: "A balanced fusion of cyber defense discipline and scalable software development.",
    domain1_title: "SOC & Cyber Defense",
    domain1_desc: "Trained in event triage, log analysis, threat intelligence, and network vulnerability mitigation. Hands-on enterprise routing, switching, and security protocol configuration.",
    domain1_link: "View Cisco Badges & Training &rarr;",
    domain2_title: "AI & Threat Detection",
    domain2_desc: "Creator of DeepVision: PyTorch deepfake detection architecture with Convolutional Block Attention Modules (CBAM), MTCNN facial tracking, and rigorous test validation.",
    domain2_link: "Inspect DeepVision Architecture &rarr;",
    domain3_title: "Web Development",
    domain3_desc: "Engineering modern user experiences with pure Vanilla JS, PHP, and semantic responsive styling. Building interactive e-commerce, client business portals, and learning platforms.",
    domain3_link: "Explore All Web Projects &rarr;",
    flagship_tag: "02 // FLAGSHIP SYSTEM",
    flagship_title: "DeepVision: AI Deepfake Detection",
    flagship_subtitle: "A production-grade neural pipeline detecting facial manipulation with 98.32% test accuracy.",
    flagship_badge: "RESEARCH & IMPLEMENTATION CASE STUDY",
    flagship_heading: "Defending Media Authenticity Against Generative Synthesis",
    flagship_summary: "Deepfake technology poses massive threats to identity verification, disinformation campaigns, and national security. DeepVision extracts facial regions via MTCNN, processes them through ResNet + CBAM dual-attention channels, and achieves state-of-the-art detection.",
    flagship_acc_label: "Test Accuracy",
    flagship_f1_label: "F1-Score",
    flagship_dataset_label: "C23 Dataset",
    btn_full_case_study: "View Full Case Study & Pipeline &rarr;",
    btn_github_repo: "GitHub Repository",
    other_proj_tag: "03 // RECENT WORK",
    other_proj_title: "Other Engineering Projects",
    other_proj_subtitle: "Click any project to inspect its architecture, screenshots, and live demo.",
    proj1_badge: "Client Project",
    proj1_category: "CORPORATE PORTAL",
    proj1_title: "STAR Business Services",
    proj1_desc: "Official corporate web platform featuring dynamic services presentation, appointment booking system, and interactive brand preloader.",
    btn_inspect_case_study: "Inspect Case Study &rarr;",
    proj2_badge: "Web Application",
    proj2_category: "FRONT-END STOREFRONT",
    proj2_title: "Modern E-Commerce Store",
    proj2_desc: "High-performance storefront with live search filtering, animated slide-over shopping cart, real-time price totals, and checkout flow.",
    proj3_badge: "Educational Platform",
    proj3_category: "INTERACTIVE LEARNING",
    proj3_title: "PHP Mastery Platform",
    proj3_desc: "Educational platform for PHP programming featuring glassmorphic cyber styling, structured lesson indexing, live code playgrounds, and instant evaluation quizzes.",
    footer_role: "Cybersecurity Student & SOC Analyst",
    footer_summary: "Cybersecurity student at Arab Open University, Cisco CCNA certified, and DEPI Incident Response fellow. Dedicated to security operations, network infrastructure, and scalable web engineering.",
    footer_available: "Available for SOC Analyst Roles",
    footer_case_studies: "CASE STUDIES & PROJECTS",
    footer_contact_title: "CONTACT & LOCATION",
    footer_location: "Menofia, Egypt",
    footer_univ: "Arab Open University (AOU)",
    footer_back_top: "Back to top &uarr;",
    copyright: "© 2026 Ahmed Adel Saad Obaid. All rights reserved.",
    footer_built: "Engineered with semantic HTML, CSS, and vanilla JavaScript."
  },

  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_about_full: "عني والمؤهلات",
    nav_education: "التعليم",
    nav_certifications: "الشهادات",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_projects_full: "المشاريع",
    nav_services: "الخدمات",
    nav_achievements: "الإنجازات",
    nav_contact: "تواصل معي",
    nav_contact_full: "الخدمات والتواصل",
    btn_contact_nav: "تواصل معي",

    // Subpage Headers & Hub
    page_about_tag: "السيرة والمؤهلات",
    page_about_title: "نبذة عن أحمد و <span class='text-gradient'>المؤهلات الرسمية</span>",
    page_about_subtitle: "استكشف الخلفية في الأمن السيبراني، دراسة الجامعة العربية المفتوحة، شهادات سيسكو المعتمدة، منحة رواد مصر الرقمية، والمهارات التقنية.",
    page_projects_tag: "معرض الأعمال والأنظمة",
    page_projects_title: "الأنظمة البرمجية و <span class='text-gradient'>المشاريع</span>",
    page_projects_subtitle: "استعرض الأنظمة المطوّرة ذاتياً في الذكاء الاصطناعي والأمن السيبراني، وتطبيقات الويب العملية الواقعية.",
    page_contact_tag: "تواصل وتعاون مهني",
    page_contact_title: "الخدمات التقنية و <span class='text-gradient'>التواصل المباشر</span>",
    page_contact_subtitle: "متاح لفرص محلل مركز العمليات الأمنية (SOC)، تدريبات الأمن السيبراني، مشاريع البنية التحتية وأمن الشبكات، وتطوير الويب الآمن.",
    home_explore_more: "استكشف الأقسام المخصصة",
    home_explore_subtitle: "صفحات متخصصة تمنحك تفاصيل شاملة ومعتمدة حول الشهادات والمشاريع وروابط التواصل.",
    card_about_title: "عني والمؤهلات",
    card_about_desc: "الدرجة الجامعية بالجامعة العربية المفتوحة، شهادات Cisco CCNA، ومسار الاستجابة للحوادث الأمنية بمنحة رواد مصر الرقمية.",
    card_about_btn: "عرض المؤهلات والشهادات",
    card_projects_title: "معرض المشاريع",
    card_projects_desc: "نظام DeepVision لكشف التزييف العميق بالذكاء الاصطناعي، متجر إلكتروني، وموقع شركات متكامل مع العروض التفاعلية.",
    card_projects_btn: "استعراض المشاريع",
    card_contact_title: "الخدمات والتواصل",
    card_contact_desc: "مراقبة وتحليل SOC، إعداد وتأمين شبكات Cisco، وتطوير تطبيقات الويب الآمنة. مراسلة مباشرة ونسخ بنقرة واحدة.",
    card_contact_btn: "تواصل معي الآن",
    featured_project_badge: "مشروع رائد في الذكاء الاصطناعي والأمن السيبراني",
    view_project_details: "استكشف تفاصيل النظام والعرض الحي",
    quick_stats_univ_title: "الأمن السيبراني",
    quick_stats_univ_sub: "الجامعة العربية المفتوحة (2022–2026)",
    quick_stats_ccna_title: "سيسكو CCNA",
    quick_stats_ccna_sub: "3 وحدات معتمدة رسمياً (210 ساعة)",
    quick_stats_depi_title: "رواد مصر الرقمية",
    quick_stats_depi_sub: "محلل الاستجابة للحوادث السيبرانية",
    quick_stats_proj_title: "تطبيقي وعملي 100%",
    quick_stats_proj_sub: "أنظمة برمجية متكاملة ومستقلة",

    // Home Structured Sections
    home_brief_about_tag: "01 // نبذة موجزة",
    home_brief_about_title: "مجالات التركيز و <span class='text-gradient'>الخبرة الأساسية</span>",
    home_brief_about_subtitle: "الربط بين مراقبة العمليات الأمنية الدفاعية، هندسة الشبكات، وتطوير التطبيقات الرقمية الآمنة.",
    home_core_skills_tag: "02 // المهارات الأساسية",
    home_core_skills_title: "أهم <span class='text-gradient'>المهارات والقدرات</span>",
    home_core_skills_subtitle: "الركائز الفنية الأساسية المثبتة عبر المشاريع التطبيقية والشهادات المعتمدة.",
    home_featured_projects_tag: "03 // أعمال أخرى",
    home_featured_projects_title: "مشاريع عملية <span class='text-gradient'>أخرى</span>",
    home_featured_projects_subtitle: "مواقع حقيقية للشركات، تطبيقات تفاعلية، ومنصات تعليمية تم تطويرها باحترافية.",
    home_cta_tag: "04 // تواصل مهني",
    home_cta_title: "هل تبحث عن كفاءة في <span class='text-gradient'>الأمن والويب؟</span>",
    home_cta_subtitle: "متاح لفرص محلل مركز العمليات الأمنية (SOC)، تدريبات الأمن السيبراني، ومشاريع الويب والشبكات.",
    btn_view_all_projects: "استعراض كافة المشاريع والهندسة التقنية &larr;",
    btn_read_more_about: "عرض السيرة الذاتية والمؤهلات كاملة &larr;",
    btn_open_deepvision_modal: "فتح دراسة الحالة الفنية (الهندسة المعمارية ومصفوفة الارتباك)",

    // Hero Section
    telemetry_status: "مراقبة العمليات الأمنية والتعلم المستمر نشط",
    hero_brand: "أحمد عادل",
    hero_name: "أحمد عادل سعد عبيد",
    hero_role_primary: "طالب أمن سيبراني ومحلل عمليات أمنية طموح",
    hero_role_secondary: "مطور ويب | شغوف بهندسة الشبكات",
    hero_usp: "«أجمع بين الأمن السيبراني، وهندسة الشبكات، وتطوير الويب مع الخبرة التطبيقية في المشاريع لبناء حلول رقمية آمنة وعملية.»",
    btn_view_projects: "شاهد مشاريعي",
    btn_hero_contact: "تواصل معي",
    avatar_status_1: "جاهز لتحليل التهديدات",
    avatar_status_2: "تطوير الويب والشبكات",
    preloader_status: "جاري تهيئة بيئة العمل والأمان...",
    avatar_status_badge: "محلل مركز العمليات (SOC)",
    avatar_cred_badge: "معتمد CCNA ورواد مصر",
    avatar_change_hint: "مساحة صورتك الشخصية",
    avatar_role_tag: "عمليات SOC • أمن الشبكات • تطوير الويب",

    // About Section
    section_about_tag: "01 // نبذة تعريفية",
    section_about_title: "نبذة <span class='text-gradient'>عني</span>",
    section_about_subtitle: "طالب أمن سيبراني يركز بشكل أساسي على مركز العمليات الأمنية (SOC)، وأمن الشبكات، وتطوير الويب العملي.",
    about_intro_summary: "طالب أمن سيبراني بالجامعة العربية المفتوحة (AOU) معتمد من Cisco CCNA وزميل مبادرة رواد مصر الرقمية (DEPI). متخصص في الدفاع الرقمي، تحليل الحوادث الأمنية، وهندسة شبكات وتطبيقات الويب الآمنة.",
    about_card1_title: "العمليات الأمنية و SOC",
    about_card1_desc: "تدريب عملي ومعرفة تطبيقية في مراقبة الأمان، وتخفيف التهديدات، وحلول أنظمة إدارة الأحداث الأمنية SIEM، وتحليل الحزم عبر Wireshark للتحقيق في الحوادث.",
    about_card2_title: "الشبكات والبنية التحتية",
    about_card2_desc: "أساس قوي في شبكات المؤسسات، والتبديل (Switching)، والتوجيه (Routing)، والتوجيه الديناميكي (OSPF)، وتقسيم الشبكات (Subnetting)، وأمان الوصول، والشبكات اللاسلكية من سيسكو.",
    about_card3_title: "تطوير الويب والبرمجة",
    about_card3_desc: "تطوير واجهات أمامية متجاوبة، ومنصات تعليمية تفاعلية، وأدوات برمجية باستخدام PHP و Python و JavaScript الحديثة و HTML5 و CSS3.",
    about_card4_title: "تطوير المشاريع بشكل مستقل",
    about_card4_desc: "سجل مثبت في البحث والتصميم والتطوير المستقل لأنظمة تقنية متكاملة مثل DeepVision وتطوير مواقع الويب الحقيقية.",

    // Education Section
    section_edu_tag: "02 // المسار الأكاديمي",
    section_edu_title: "التعليم و<span class='text-gradient'>المسار الجامعي</span>",
    section_edu_subtitle: "دراسة جامعية متخصصة في الحاسبات والمعلومات تخصص الأمن السيبراني.",
    edu_inst: "الجامعة العربية المفتوحة – مصر",
    edu_faculty: "كلية الحاسبات والمعلومات / الأمن السيبراني",
    edu_major: "التخصص: الأمن السيبراني",
    edu_date: "2022 – تخرج متوقع 2026",
    edu_grade_label: "التقدير الأكاديمي",
    edu_grade_val: "جيد جداً",

    // Certifications Section
    section_cert_tag: "03 // الشهادات الرسمية",
    section_cert_title: "الشهادات و<span class='text-gradient'>التدريب</span>",
    section_cert_subtitle: "شهادات سيسكو CCNA المعتمدة ومسارات التدريب التخصصية قيد التنفيذ.",
    cert1_title: "CCNA: Introduction to Networks",
    cert1_provider: "أكاديمية سيسكو للشبكات – الجامعة العربية المفتوحة",
    cert1_date: "تاريخ الإتمام: 12 فبراير 2025",
    cert1_duration: "70 ساعة تدريبية",
    cert2_title: "CCNA: Switching, Routing, and Wireless Essentials",
    cert2_provider: "أكاديمية سيسكو للشبكات – الجامعة العربية المفتوحة",
    cert2_date: "تاريخ الإتمام: 28 مارس 2025",
    cert2_duration: "70 ساعة تدريبية",
    cert3_title: "CCNA: Enterprise Networking, Security, and Automation",
    cert3_provider: "أكاديمية سيسكو للشبكات – الجامعة العربية المفتوحة",
    cert3_date: "تاريخ الإتمام: 27 يوليو 2025",
    cert3_duration: "70 ساعة تدريبية",
    btn_view_cert: "عرض الشهادة الأصلية",

    // DEPI Training
    depi_badge: "مسار تدريبي تخصصي معتمد",
    depi_title: "مبادرة رواد مصر الرقمية (DEPI)",
    depi_track: "المسار: البنية التحتية والأمن – محلل الاستجابة للحوادث السيبرانية (Incident Response Analyst)",
    depi_status: "الحالة: قيد الدراسة والتدريب (بدأ عام 2026 — مدة التدريب 6 أشهر)",
    depi_learning_intro: "مجالات التدريب والمعرفة التطبيقية المؤكدة حالياً:",

    // Skills Section
    section_skills_tag: "04 // القدرات التقنية",
    section_skills_title: "المهارات <span class='text-gradient'>التقنية</span>",
    section_skills_subtitle: "مقسمة إلى مجالات فنية واضحة دون أي نسب مئوية وهمية.",
    cat_cybersecurity: "الأمن السيبراني و SOC",
    cat_networking: "الشبكات وتقنيات سيسكو",
    cat_web: "البرمجة وتطوير الويب",
    cat_systems: "الأنظمة والبنية التقنية",
    cat_creative: "المهارات الإبداعية والرقمية",
    cat_professional: "المهارات المهنية",

    // Projects Section
    section_proj_tag: "05 // معرض الأعمال",
    section_proj_title: "المشاريع <span class='text-gradient'>الرئيسية</span>",
    section_proj_subtitle: "أنظمة عملية تم تطويرها بشكل مستقل ومشاريع حقيقية مبنية بأعلى المعايير.",
    filter_all: "كافة المشاريع",
    filter_cyber: "الأمن السيبراني والذكاء الاصطناعي",
    filter_web: "تطوير الويب",
    filter_client: "أعمال ومواقع الشركات",

    // DeepVision
    dv_tag: "المشروع الأهم — ذكاء اصطناعي وأمن سيبراني",
    dv_title: "DeepVision — نظام كشف التزييف العميق بالذكاء الاصطناعي",
    dv_role: "مشروع فردي / تم تطويره بشكل مستقل بالكامل",
    dv_desc: "نظام متكامل بالذكاء الاصطناعي مصمم لتحليل الصور ومقاطع الفيديو والتحقق من كونها حقيقية أو مزيفة مع توفير درجة الثقة (Confidence Score). يعتمد النظام على خط معالجة بصري يركز بشكل دقيق على منطقة الوجه بدلاً من تمرير الوسائط كاملة إلى نموذج التصنيف.",
    dv_pipeline_title: "خط المعالجة الفني المعتمد في المشروع (Pipeline)",
    dv_step1_name: "01. كشف الوجه",
    dv_step1_desc: "استخدام MediaPipe BlazeFace لكشف الوجه واقتطاعه مع إضافة هامش أمان بنسبة 20% لعزل الخلفية.",
    dv_step2_name: "02. معالجة وتوحيد الصورة",
    dv_step2_desc: "إعادة ضبط أبعاد الوجه المقتطع إلى 224 × 224 بكسل بصيغة RGB القياسية.",
    dv_step3_name: "03. استخراج الميزات وآلية الانتباه",
    dv_step3_desc: "استخدام EfficientNet-B4 كعمود فقري مع دمج وحدة CBAM (الانتباه القنوي والمكاني) لتعزيز دقة الميزات.",
    dv_step4_name: "04. تحليل الفيديو",
    dv_step4_desc: "تحليل 50 إطاراً متباعدة بالتساوي (FRAME_STEP = 20) وحساب أقصى إطارات مزيفة متتالية.",
    dv_step5_name: "05. التنبؤ النهائي والنتيجة",
    dv_step5_desc: "تطبيق خوارزمية تسجيل مبنية على القواعد لإصدار الحكم النهائي ودرجة الثقة المعايرة.",

    dv_eval_title: "الأداء ونتائج التقييم الفعلية الموثقة",
    dv_eval_note: "نتائج تقييم تجريبية موثقة تم قياسها على مجموعة بيانات FaceForensics++ C23 (إجمالي 24,859 عينة اختبار):",
    dv_stat_acc: "الدقة الإجمالية (Accuracy)",
    dv_stat_fake_f1: "معامل F1 للمزيف (Fake)",
    dv_stat_real_f1: "معامل F1 للحقيقي (Real)",
    dv_stat_weighted: "المتوسط الموزون لـ F1",
    dv_table_class: "الفئة / المقياس",
    dv_table_prec: "الدقة (Precision)",
    dv_table_rec: "الاستدعاء (Recall)",
    dv_table_f1: "مقياس F1-Score",
    dv_table_support: "عدد العينات (Support)",
    dv_matrix_title: "مصفوفة الارتباك الفعلية (Confusion Matrix)",
    dv_matrix_tf: "مزيف فعلي ← صُنّف مزيف (صحيح)",
    dv_matrix_fr: "مزيف فعلي ← صُنّف حقيقي (خطأ نوع II)",
    dv_matrix_rf: "حقيقي فعلي ← صُنّف مزيف (خطأ نوع I)",
    dv_matrix_tr: "حقيقي فعلي ← صُنّف حقيقي (صحيح)",
    dv_gallery_title: "الأدلة البصرية وشاشات النظام الأصلية",

    // Project 2: STAR
    star_badge: "مشروع موقع شركة حقيقية",
    star_title: "موقع شركة STAR للخدمات الإدارية وتأسيس الشركات",
    star_role: "الدور: مطور الموقع (مشروع فردي)",
    star_desc: "موقع احترافي متكامل تم تطويره لصالح الشركة السعودية لريادة الأعمال (STAR)، وهي شركة رائدة في الاستشارات الإدارية والخدمات اللوجستية لرواد الأعمال والمستثمرين في مصر والسعودية والبحرين.",
    star_feat1: "عرض متكامل لهوية الشركة وخدماتها الاستشارية باللغتين",
    star_feat2: "صفحات تفصيلية لخدمات تأسيس الشركات والتراخيص والاستشارات القانونية",
    star_feat3: "معرض أعمال يبرز مشاريع العملاء وشركاء النجاح",
    star_feat4: "واجهة حجز استشارات ونموذج تواصل مباشر سريع",
    star_feat5: "شاشة تحميل مخصصة (Preloader) وتصميم متجاوب بالكامل",

    // Project 3: Store
    store_badge: "تطوير ويب / واجهة أمامية (Front-End)",
    store_title: "متجر إلكتروني حديث (Modern E-Commerce)",
    store_role: "الدور: مشروع فردي (Front-End فقط)",
    store_desc: "واجهة متجر إلكتروني متكاملة ومتجاوبة تم بناؤها باستخدام HTML و CSS و JavaScript لتوفير تجربة مستخدم سلسة لتصفح وشراء المنتجات.",
    store_feat1: "تصفح المنتجات والتصنيفات والبحث المباشر",
    store_feat2: "عرض العروض والخصومات والمنتجات المميزة",
    store_feat3: "سلة مشتريات تفاعلية وواجهة إتمام الطلب (Checkout)",
    store_feat4: "واجهات تسجيل الدخول وإنشاء الحساب",
    store_feat5: "أقسام الدعم الفني، وسياسات الشحن والضمان والاسترجاع",

    // Project 4: PHP Mastery
    php_badge: "منصة تعليمية / واجهة أمامية (Front-End)",
    php_title: "PHP Mastery — منصة تفاعلية لتعلم لغة PHP",
    php_role: "الدور: مشروع فردي (Front-End فقط)",
    php_desc: "منصة تعليمية تفاعلية ثنائية اللغة لتعلم لغة PHP من خلال الدروس، والأمثلة التفاعلية، والاختبارات المباشرة مع تصحيح فوري بتصميم عصري (Glassmorphism).",
    php_feat1: "دروس تفاعلية منظمة من المفاهيم الأساسية إلى المتقدمة",
    php_feat2: "أمثلة برمجية حية مع معاينة فورية للكود",
    php_feat3: "نظام اختبارات ذكي يقدم تقييماً ودرجات فورية",
    php_feat4: "دعم كامل للغتين العربية والإنجليزية مع اتجاه RTL حقيقي",
    php_feat5: "واجهة حديثة مستوحاة من تأثيرات الزجاج المعتم (Glassmorphism)",

    btn_live_demo: "معاينة حية",
    btn_github: "كود GitHub",
    btn_gallery: "معرض الصور",

    // Additional Project Showcase & Detail Page Keys (Arabic)
    btn_back_projects: "الرجوع لكافة المشاريع",
    btn_back_showcase: "الرجوع لمعرض المشاريع",
    btn_open_live_demo: "فتح المعاينة الحية",
    btn_github_repo: "مستودع المشروع على GitHub",
    btn_github_code: "معاينة الكود المصدري على GitHub",
    btn_view_case_study: "عرض دراسة الحالة كاملة &larr;",
    btn_view_project_details: "عرض تفاصيل المشروع &larr;",
    btn_featured_dv: "المشروع الأبرز: دراسة حالة DeepVision &larr;",
    btn_next_php: "المشروع التالي: منصة PHP Mastery &larr;",
    btn_next_store: "المشروع التالي: متجر إلكتروني حديث &larr;",
    btn_next_star: "المشروع التالي: موقع شركة STAR &larr;",
    section_gallery_title: "معرض شاشات النظام الحقيقية",
    section_gallery_title_4: "معرض شاشات النظام الحقيقية (4 شاشات)",
    section_gallery_title_5: "معرض شاشات النظام الحقيقية (5 شاشات)",
    gallery_hint: "انقر على أي شاشة لمعاينتها بكامل الدقة بحجم الشاشة:",

    // Projects Grid Cards
    dv_badge: "مشروع الذكاء الاصطناعي والأمن السيبراني",
    dv_role_brief: "دقة 98.32% • مشروع فردي مستقل",
    dv_title_short: "ديب فيجن: نظام كشف التزييف العميق بالذكاء الاصطناعي",
    dv_desc_card: "نظام أدلة جنائية رقمية للوجه متعدد المراحل باستخدام BlazeFace وEfficientNet-B4 وآلية انتباه CBAM تم تقييمه على 24,859 عينة اختبار.",
    star_client_tag: "العميل: الشركة السعودية لريادة الأعمال (STAR)",
    star_desc_card: "بوابة رسمية لشركة استشارات إدارية، تشمل نظام حجز استشارات تفاعلي، ومعرضاً لشركاء النجاح، وشاشة تحميل للعلامة التجارية.",
    store_role_tag: "نظام واجهة أمامية • تجربة متجر إلكتروني",
    store_desc_card: "واجهة متجر إلكتروني متجاوبة مزودة بفلترة تفاعلية للمنتجات، وحساب تلقائي للأسعار، وسلة تسوق منزلقة، ومحاكاة لعملية الدفع.",
    php_role_tag: "تعليم تفاعلي • واجهة أمامية",
    php_desc_card: "منصة تعليمية لبرمجة PHP بتصميم زجاجي عصري، وفهرس دروس منظم، ومحرر أكواد تطبيقي، واختبارات تقييم فورية.",

    // PHP Detail Page
    php_hero_title: "منصة PHP Mastery: <span class='text-gradient'>منصة تعليمية تفاعلية</span>",
    php_hero_desc: "تطبيق ويب تعليمي لمطوري البرمجيات وطلاب علوم الحاسب لتعلم لغة PHP، يتميز بتصميم زجاجي عصري، ومعاينات برمجية حية، ومناهج منظمة، واختبارات فورية.",
    php_role_detail: "مشروع فردي (واجهة أمامية)",
    php_sec1_title: "الفكرة والرؤية التعليمية",
    php_sec1_desc: "غالباً ما تكون الشروحات البرمجية التقليدية جافة وغير تفاعلية. تم تصميم منصة PHP Mastery لتحويل تعلم لغة PHP إلى تجربة تفاعلية ممتعة خطوة بخطوة، تجمع بين الشرح النظري ومحرر أكواد تطبيقي مباشر واختبارات تقييم فورية.",
    php_sec2_title: "هيكلية المنصة وأبرز المميزات",
    php_feat1_title: "01. واجهة داكنة زجاجية عصرية",
    php_feat1_desc: "طابع بصري سيبراني أنيق يعتمد على تأثيرات البلور الشفاف وتوهج النيون الناعم لراحة العين أثناء فترات التعلم الطويلة.",
    php_feat2_title: "02. فهرسة دروس منظمة ومتدرجة",
    php_feat2_desc: "شريط جانبي مقسم ينقل المتعلم تدريجياً من أساسيات المتغيرات والجمل الشرطية وصولاً للبرمجة كائنية التوجه (OOP) وPDO.",
    php_feat3_title: "03. محرر أكواد مباشر ومعاينة فورية",
    php_feat3_desc: "تلوين دلالي تفاعلي للأكواد مع نافذة مخرجات حية لفهم مسار تنفيذ الكود البرمجي بكل سهولة.",
    php_feat4_title: "04. محرك اختبارات وتقييم فوري",
    php_feat4_desc: "اختبارات مدمجة بأسئلة متنوعة، وتغذية راجعة فورية لكل إجابة، وحساب تلقائي لنسبة الإتقان.",

    // Store Detail Page
    store_hero_title: "متجر إلكتروني عصري: <span class='text-gradient'>واجهة متجر تفاعلية متكاملة</span>",
    store_hero_desc: "تطبيق ويب لمتجر إلكتروني متجاوب بالكامل يتميز بفلترة فورية للأقسام، وسلة مشتريات جانبية منزلقة، وحساب تلقائي مباشر للأسعار، ونموذج إتمام طلب متعدد الخطوات.",
    store_role_detail: "مشروع فردي (واجهة أمامية)",
    store_sec1_title: "فكرة ونطاق المشروع",
    store_sec1_desc: "تم تصميم وبناء المشروع كتطبيق واجهة أمامية متكامل يحاكي تجارب التجارة الإلكترونية الحديثة بدون الاعتماد على مكتبات خارجية. يبرز المشروع التمكن التام من معالجة الـ DOM وإدارة حالة سلة المشتريات وحساب الكميات والأسعار والتصميم المتجاوب المخصص للهواتف أولاً.",
    store_sec2_title: "المكونات الأساسية لبنية المتجر",
    store_feat1_title: "01. فلترة فورية للمنتجات والتصنيفات",
    store_feat1_desc: "فلترة تفاعلية فورية في المتصفح تمكن العميل من تصفح الأقسام والمنتجات بسلاسة تامة وبدون إعادة تحميل الصفحة.",
    store_feat2_title: "02. سلة مشتريات جانبية منزلقة",
    store_feat2_desc: "نافذة سلة جانبية تفاعلية تعرض عدد العناصر والتحكم بالكميات وتحديث المجموع النهائي في الوقت الفعلي وحذف المنتجات بسهولة.",
    store_feat3_title: "03. نموذج إتمام طلب تفاعلي (Checkout)",
    store_feat3_desc: "مسار شراء سلس ومحكم يتحقق من بيانات التواصل وعنوان الشحن مع محاكاة تأكيد الدفع وإصدار الفاتورة.",
    store_feat4_title: "04. تصميم متجاوب لجميع الأجهزة",
    store_feat4_desc: "نظام شبكي متكيف يضمن تجربة تصفح وتسوق ممتازة على شاشات الديسكتوب واللابتوب والهواتف الذكية.",

    // STAR Detail Page
    star_hero_title: "شركة STAR للخدمات الإدارية: <span class='text-gradient'>الموقع الرسمي للشركة</span>",
    star_hero_desc: "الموقع الإلكتروني الرسمي لشركة STAR للخدمات الإدارية، يشمل استعراض الخدمات الاستشارية للشركات، وحجز المواعيد، ومعرض شركاء النجاح، وحركات ورسوم الهوية البصرية.",
    star_client_badge: "مشروع شركة حقيقية",
    star_client_name: "العميل: الشركة السعودية لريادة الأعمال (STAR)",
    star_sec1_title: "نطاق المشروع وخلفية العميل",
    star_sec1_desc1: "احتاجت الشركة العميلة، <strong>الشركة السعودية لريادة الأعمال (STAR)</strong>، إلى بوابة رقمية رسمية تعبر عن موثوقية الشركة وتستعرض خدماتها في تأسيس الشركات والتراخيص والاستشارات الاستراتيجية في مصر والسعودية والخليج العربي.",
    star_sec1_desc2: "شمل نطاق العمل تصميم وتطوير موقع تعريفي متعدد الأقسام يبني الثقة ويعكس المكانة المهنية للشركة ويوفر قناة سهلة وسريعة لاستقبال طلبات الاستشارات الإدارية.",
    star_sec2_title: "أبرز الإمكانيات والخدمات المقدمة في الموقع",
    star_feat1_title: "01. الهوية المؤسسية واستعراض الخدمات",
    star_feat1_desc: "هوية بصرية منسقة وبطاقات خدمات منظمة تعرض حلول تأسيس الشركات واستخراج التراخيص ودراسات الجدوى والاستشارات القانونية.",
    star_feat2_title: "02. واجهة حجز الاستشارات والتواصل",
    star_feat2_desc: "نموذج طلب استشارة مصمم بعناية يسمح لرواد الأعمال والمستثمرين بطلب المواعيد بسهولة مع التحقق من صحة المدخلات.",
    star_feat3_title: "03. معرض العملاء وشركاء النجاح",
    star_feat3_desc: "قسم مخصص يعرض شركاء النجاح وقصص الإنجازات بما يعزز مصداقية الشركة لدى العملاء الجدد.",
    star_feat4_title: "04. شاشة تحميل مخصصة بالهوية",
    star_feat4_desc: "حركة تحميل تفاعلية مبتكرة تعبر عن هوية الشركة وتستقبل الزوار بسلاسة أثناء تجهيز عناصر الصفحة.",

    // DeepVision Detail Page
    dv_hero_title: "ديب فيجن: <span class='text-gradient'>نظام كشف التزييف العميق بالذكاء الاصطناعي</span>",
    dv_hero_desc: "نظام أدلة جنائية رقمية عالي الدقة مصمم لكشف التلاعبات وتزييف الوجوه في الصور ومقاطع الفيديو مع حساب درجة الثقة الزمنية المعايرة.",
    dv_stat_evaluated: "تم التقييم على 24,859 عينة",
    dv_stat_fake_sub: "الدقة: 99.11% | الاستدعاء: 98.90%",
    dv_stat_cbam_sub: "انتباه قنوي ومكاني متقدم",
    dv_stat_ff_sub: "معيار قياس ضغط C23 المعتمد",
    dv_stat_accuracy_label: "الدقة الإجمالية",
    dv_stat_fake_label: "F1-Score للعينات المزيفة",
    dv_stat_backbone_label: "عمود الانتباه الفقري",
    dv_stat_dataset_label: "مجموعة بيانات القياس",
    dv_sec1_title: "1. المشكلة: انتشار التزييف الرقمي المتقدم",
    dv_sec1_p1: "أتاح التطور المتسارع لنماذج التعلم العميق التوليدية (شبكات GAN وخوارزميات Diffusion) للمخترقين إنشاء مقاطع وصور مزيفة فائقة الواقعية بأقل جهد، مما يهدد أمن المؤسسات، والتحقق من الهوية، وإجراءات البنوك، والأدلة الرقمية.",
    dv_sec1_p2: "تواجه نماذج التصنيف التقليدية صعوبة كبيرة في التعامل مع الفيديوهات المضغوطة، حيث يؤدي تمرير الإطار بالكامل دون عزل الوجه إلى تشتت النموذج بالخلفية وارتفاع الإنذارات الكاذبة وتجاهل آثار التزييف الدقيقة على حواف الوجه.",
    dv_sec2_title: "2. المنهجية: العزل الحيوي واستخراج الميزات بانتباه دقيق",
    dv_sec2_p1: "بدلاً من تمرير الصور بشكل عشوائي، يطبق DeepVision خط معالجة حاسوبياً دقيقاً ومتعدد المراحل يركز حصرياً على السمات الحيوية للوجه.",
    dv_sec3_title: "3. البنية المعمارية للنظام وخط المعالجة (Pipeline)",
    dv_sec4_title: "4. التقييم الكمي والنتائج التجريبية",
    dv_sec5_title: "5. مصفوفة الارتباك الموثقة (Confusion Matrix)",
    dv_sec6_title: "6. الأدلة البصرية وشاشات النظام الأصلية",

    // Services Section
    section_serv_tag: "06 // ما أقدمه",
    section_serv_title: "الخدمات و<span class='text-gradient'>القدرات</span>",
    section_serv_subtitle: "خدمات دقيقة وواقعية متوافقة تماماً مع مستواي وخبراتي التقنية الحالية.",
    serv1_title: "تطوير الويب (Web Development)",
    serv1_desc: "بناء مواقع ويب عصرية وسريعة ومتجاوبة مع مختلف الشاشات وفق أحدث معايير الويب (HTML5, CSS3, JS).",
    serv2_title: "تطوير بلغة PHP",
    serv2_desc: "كتابة وتطوير سكربتات وبرمجيات الويب والبوابات التعليمية باستخدام لغة PHP.",
    serv3_title: "تطوير واجهات المتاجر الإلكترونية",
    serv3_desc: "تصميم وتنفيذ واجهات المتاجر الإلكترونية مع سلات الشراء وصفحات الدفع التفاعلية.",
    serv4_title: "مراقبة الأمان وأساسيات الـ SOC",
    serv4_desc: "فحص حركة البيانات، وتحليل سجلات الأحداث، وأساسيات التخفيف من التهديدات السيبرانية.",
    serv5_title: "دعم الشبكات والتهيئة الأساسية",
    serv5_desc: "تقسيم الشبكات Subnetting، وإعداد التبديل والتوجيه، وأساسيات بروتوكول OSPF وفحص أجهزة سيسكو.",
    serv6_title: "مونتاج الفيديو (Video Editing)",
    serv6_desc: "مونتاج احترافي، وتنسيق الإيقاع والمؤثرات، وضبط الصوت للمحتوى الرقمي المرئي.",
    serv7_title: "الموشن جرافيك (Motion Graphics)",
    serv7_desc: "إنشاء رسومات متحركة وشعارات حركية وفواصل فيديو بصرية جذابة.",
    serv8_title: "التحريك والرسوم المتحركة (Animation)",
    serv8_desc: "تنفيذ رسوم متحركة ثنائية الأبعاد وتفاعلات واجهة المستخدم Micro-interactions.",
    serv9_title: "التصميم ثلاثي الأبعاد (3D Design)",
    serv9_desc: "نمذجة الأشكال الهندسية المجسمة، والتصاميم الرمزية للواجهات والمنتجات.",
    serv10_title: "صناعة المحتوى الرقمي",
    serv10_desc: "إنتاج محتوى تقني وتعليمي هادف وموجه لمنصات التواصل الرقمي الحديثة.",

    // Achievements Section
    section_ach_tag: "07 // محطات وإنجازات",
    section_ach_title: "أبرز <span class='text-gradient'>المحطات الموثقة</span>",
    section_ach_subtitle: "إنجازات ونتائج حقيقية مثبتة عبر مساري الأكاديمي وتطوير المشاريع المستقلة.",
    ach1_title: "إتمام 3 مسارات CCNA من أكاديمية سيسكو",
    ach1_desc: "إتمام دراسة واجتياز دورات CCNA الثلاث (Introduction to Networks, Switching & Routing, Enterprise Networking) بإجمالي 210 ساعة معتمدة.",
    ach2_title: "تطوير نظام DeepVision للذكاء الاصطناعي بشكل فردي",
    ach2_desc: "بحث وتطوير وبرمجة نظام متكامل لكشف التزييف العميق باستخدام MediaPipe و EfficientNet-B4 وآلية انتباه CBAM بدقة بلغت 98.32%.",
    ach3_title: "المشاركة في مسار الاستجابة للحوادث بمبادرة DEPI",
    ach3_desc: "الانضمام إلى مبادرة رواد مصر الرقمية في المسار التخصصي للأمن السيبراني وتحليل الاستجابة للحوادث (Cyber Security Incident Response Analyst).",
    ach4_title: "تطوير موقع شركة STAR الحقيقي",
    ach4_desc: "تطوير وتنفيذ الموقع التعريفي الرسمي لشركة STAR (الشركة السعودية لريادة الأعمال) وعرض خدماتها وسابقة أعمالها بكفاءة عالية.",
    ach5_title: "تطوير منصات تعليمية وتجارية تفاعلية",
    ach5_desc: "بناء منصة PHP Mastery التعليمية ثنائية اللغة ومتجر إلكتروني متكامل للواجهة الأمامية بمجهود فردي كامل.",

    // Contact Section
    section_cont_tag: "08 // تواصل معي",
    section_cont_title: "دعنا <span class='text-gradient'>نتواصل</span>",
    section_cont_subtitle: "لديك مشروع، فرصة عمل، تدريب، أو فكرة تعاون تقني؟",
    cont_email_label: "البريد الإلكتروني المباشر",
    cont_phone_label: "الهاتف والواتساب",
    cont_location_label: "الموقع الجغرافي",
    cont_location_val: "المنوفية، مصر",
    btn_copy_email: "نسخ البريد",
    btn_copied: "تم النسخ!",
    form_name_label: "الاسم الكريم",
    form_email_label: "بريدك الإلكتروني",
    form_subject_label: "موضوع الرسالة",
    form_msg_label: "نص الرسالة",
    btn_send_msg: "إرسال الرسالة",

    // Homepage Complete Keys (Arabic)
    hero_status: "متاح لفرص محلل مركز العمليات الأمنية (SOC) والتدريب",
    hero_bio_clean: "طالب حاسبات ومعلومات بالأمن السيبراني في الجامعة العربية المفتوحة وحاصل على شهادات سيسكو CCNA وزميل تدريب رواد مصر الرقمية (DEPI). متخصص في عمليات مراقبة التهديدات، البنية التحتية للشبكات، وهندسة تطبيقات الويب عالية الاعتمادية.",
    hero_badge_ccna: "سيسكو CCNA (3 شهادات)",
    hero_badge_depi: "زميل أمن سيبراني DEPI",
    hero_badge_dv: "كشف التزييف العميق بالذكاء الاصطناعي",
    hero_badge_web: "تطوير تطبيقات الويب",
    btn_explore_dv: "استكشف دراسة حالة DeepVision &larr;",
    btn_contact_services: "تواصل معي والخدمات",
    hero_glance_title: "// ملخص الملف المهني",
    hero_academic_title: "المسار الأكاديمي",
    hero_academic_inst: "الجامعة العربية المفتوحة (AOU)",
    hero_academic_degree: "بكالوريوس علوم الحاسب (قيد الدراسة)",
    hero_certs_title: "الشهادات المعتمدة",
    hero_certs_provider: "أكاديمية سيسكو للشبكات",
    hero_certs_list: "CCNA 1 (ITN) • CCNA 2 (SRWE) • CCNA 3 (ENSA)",
    hero_train_title: "التدريب التخصصي",
    hero_train_name: "مبادرة رواد مصر الرقمية (DEPI)",
    hero_train_desc: "مسار محلل الاستجابة للحوادث السيبرانية",
    hero_flagship_title: "المشروع والبحث الرئيسي",
    hero_flagship_name: "منظومة DeepVision للذكاء الاصطناعي",
    hero_flagship_desc: "دقة 98.32% باستخدام PyTorch و CBAM",
    domains_tag: "01 // مجالات التخصص",
    domains_title: "الخبرات والقدرات التقنية",
    domains_subtitle: "تكامل متوازن بين انضباط الدفاع السيبراني وهندسة البرمجيات القابلة للتوسع.",
    domain1_title: "مركز العمليات الأمنية والدفاع السيبراني",
    domain1_desc: "تدريب عملي في فرز الأحداث الأمنية، تحليل السجلات، استخبارات التهديدات، ومعالجة ثغرات الشبكات، وإعداد بروتوكولات الأمان والتبديل والتوجيه.",
    domain1_link: "عرض شهادات سيسكو والتدريب &larr;",
    domain2_title: "الذكاء الاصطناعي وكشف التهديدات",
    domain2_desc: "مطور نظام DeepVision: معمارية كشف التزييف العميق باستخدام PyTorch مع وحدات انتباه CBAM وتتبع الوجوه MTCNN وتقييم دقيق.",
    domain2_link: "فحص معمارية DeepVision &larr;",
    domain3_title: "تطوير تطبيقات الويب",
    domain3_desc: "هندسة واجهات المستخدم الحديثة بـ JavaScript النقية و PHP وتنسيق متجاوب. بناء متاجر إلكترونية وبوابات شركات ومنصات تعليمية.",
    domain3_link: "استعراض كافة مشاريع الويب &larr;",
    flagship_tag: "02 // المنظومة الرئيسية",
    flagship_title: "منظومة DeepVision: كشف التزييف العميق بالذكاء الاصطناعي",
    flagship_subtitle: "منظومة عصبية إنتاجية تكشف التلاعب بالوجوه بدقة اختبار 98.32%.",
    flagship_badge: "دراسة حالة بحثية وتطبيقية",
    flagship_heading: "حماية موثوقية الوسائط ضد التوليف الاصطناعي",
    flagship_summary: "تشكل تقنيات التزييف العميق خطراً جسيماً على التحقق من الهوية والأمن القومي. يستخلص DeepVision مناطق الوجه عبر MTCNN ويعالجها عبر قنوات انتباه CBAM المزدوجة ليحقق أعلى درجات الكشف.",
    flagship_acc_label: "دقة الاختبار",
    flagship_f1_label: "معيار F1-Score",
    flagship_dataset_label: "مجموعة بيانات C23",
    btn_full_case_study: "عرض دراسة الحالة وهندسة النظام كاملة &larr;",
    btn_github_repo: "مستودع GitHub",
    other_proj_tag: "03 // أعمال حديثة",
    other_proj_title: "مشاريع برمجية أخرى",
    other_proj_subtitle: "اضغط على أي مشروع لمعاينة المعمارية والاسكرينات والديمو الحي.",
    proj1_badge: "مشروع عميل",
    proj1_category: "بوابة شركات",
    proj1_title: "الشركة السعودية لريادة الأعمال (STAR)",
    proj1_desc: "منصة رسمية للشركات تقدم عروض الخدمات التنفيذية، ونظام حجز الاستشارات، وشاشة تحميل تفاعلية للهوية.",
    btn_inspect_case_study: "معاينة تفاصيل المشروع &larr;",
    proj2_badge: "تطبيق ويب",
    proj2_category: "واجهة متجر إلكتروني",
    proj2_title: "متجر إلكتروني حديث",
    proj2_desc: "متجر عالي الأداء مع فلترة البحث الفورية، وسلة تسوق جانبية متحركة، وحساب الأسعار في الوقت الفعلي.",
    proj3_badge: "منصة تعليمية",
    proj3_category: "تعليم تفاعلي",
    proj3_title: "منصة PHP Mastery التعليمية",
    proj3_desc: "منصة تعليمية للغة PHP بتصميم عصري وفهرسة دروس تفاعلية، ومحرر كود حي واختبارات تقييم فورية.",
    footer_role: "طالب أمن سيبراني ومحلل عمليات أمنية",
    footer_summary: "طالب حاسبات ومعلومات بالأمن السيبراني في الجامعة العربية المفتوحة، حاصل على شهادات Cisco CCNA وزميل مبادرة رواد مصر الرقمية DEPI. مكرس لعمليات الأمان والشبكات والويب.",
    footer_available: "متاح لفرص محلل مركز العمليات الأمنية",
    footer_case_studies: "المشاريع ودراسات الحالة",
    footer_contact_title: "التواصل والموقع",
    footer_location: "المنوفية، مصر",
    footer_univ: "الجامعة العربية المفتوحة (AOU)",
    footer_back_top: "العودة للأعلى &uarr;",
    copyright: "© 2026 أحمد عادل سعد عبيد. جميع الحقوق محفوظة.",
    footer_built: "تم التطوير باستخدام أحدث معايير الويب وكود جافاسكريبت نقي."
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('portfolio_lang') || 'en'; // Default English
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.setupSwitchers();
  }

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ar') return;
    this.currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    this.applyLanguage(lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(nextLang);
  }

  applyLanguage(lang) {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update flag icon for PHP-Mastery dropdown
    const currentFlags = document.querySelectorAll('#current-flag, .current-flag');
    currentFlags.forEach(flag => {
      if (lang === 'en') {
        flag.src = 'https://flagcdn.com/w40/us.png';
        flag.alt = 'EN';
      } else {
        flag.src = 'https://flagcdn.com/w40/sa.png';
        flag.alt = 'AR';
      }
    });

    // Update active state in dropdown options
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update placeholders
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        input.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update all language toggle labels across document
    const langLabels = document.querySelectorAll('#lang-btn-text, #lang-text, .lang-label');
    langLabels.forEach(lbl => {
      lbl.textContent = lang === 'ar' ? 'English' : 'العربية';
    });
  }

  setupSwitchers() {
    // 1. PHP-Mastery style dropdown
    const dropdowns = document.querySelectorAll('.lang-dropdown');
    dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.lang-btn, #lang-toggle');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          dropdown.classList.toggle('open');
        });
      }

      const options = dropdown.querySelectorAll('.lang-option');
      options.forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetLang = opt.getAttribute('data-lang');
          this.setLanguage(targetLang);
          dropdown.classList.remove('open');
        });
      });
    });

    document.addEventListener('click', (e) => {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
    });

    // 2. Legacy button toggles
    const legacyBtns = document.querySelectorAll('.lang-switch-btn:not(.lang-btn), .lang-toggle-btn:not(.lang-btn)');
    legacyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    });
  }

  t(key) {
    return (translations[this.currentLang] && translations[this.currentLang][key]) || key;
  }
}

window.i18n = new I18nManager();
