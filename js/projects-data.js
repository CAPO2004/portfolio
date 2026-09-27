/**
 * VERIFIED PROJECTS DATA & MEDIA ASSETS
 * Ahmed Adel Saad Obaid Portfolio
 * Projects Data Source
 */

const portfolioData = {
  certificates: [
    {
      id: 'ccna-intro',
      title: 'CCNA: Introduction to Networks',
      titleAr: 'CCNA: مقدمة في الشبكات',
      provider: 'Cisco Networking Academy – Arab Open University',
      date: '12 February 2025',
      duration: '70 Hours',
      image: 'assets/certificates/ccna-introduction-to-networks.png',
      badge: 'Cisco Certified'
    },
    {
      id: 'ccna-switching',
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      titleAr: 'CCNA: أساسيات التبديل والتوجيه واللاسلكي',
      provider: 'Cisco Networking Academy – Arab Open University',
      date: '28 March 2025',
      duration: '70 Hours',
      image: 'assets/certificates/ccna-switching-routing-wireless.png',
      badge: 'Cisco Certified'
    },
    {
      id: 'ccna-enterprise',
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      titleAr: 'CCNA: شبكات المؤسسات والأمان والأتمتة',
      provider: 'Cisco Networking Academy – Arab Open University',
      date: '27 July 2025',
      duration: '70 Hours',
      image: 'assets/certificates/ccna-enterprise-networking-security.png',
      badge: 'Cisco Certified'
    }
  ],

  deepvision: {
    title: 'DeepVision — AI-Powered Deepfake Detection System',
    titleAr: 'DeepVision — نظام كشف التزييف العميق بالذكاء الاصطناعي',
    category: 'Artificial Intelligence / Cybersecurity',
    role: 'Individual Project / Developed Independently',
    github: 'https://github.com/CAPO2004/DeepVision',
    featured: true,
    metrics: {
      accuracy: '98.32%',
      support: '24,859',
      fake: { precision: '99.11%', recall: '98.90%', f1: '99.01%', support: '21,047' },
      real: { precision: '93.99%', recall: '95.12%', f1: '94.55%', support: '3,812' },
      macro: { precision: '96.55%', recall: '97.01%', f1: '96.78%' },
      weighted: { precision: '98.33%', recall: '98.32%', f1: '98.32%', support: '24,859' },
      confusionMatrix: {
        trueFakePredFake: 20815,
        trueFakePredReal: 232,
        trueRealPredFake: 186,
        trueRealPredReal: 3626
      }
    },
    gallery: [
      {
        src: 'assets/deepvision/Picture100.jpg',
        title: 'Confusion Matrix — Empirical Evaluation on 24,859 Test Samples',
        titleAr: 'مصفوفة الارتباك الفعلية — تقييم تجريبي على 24,859 عينة اختبار'
      },
      {
        src: 'assets/deepvision/Picture90.jpg',
        title: 'Detailed Classification Report (Precision, Recall, F1-Score)',
        titleAr: 'تقرير التصنيف المفصل (الدقة، الاستدعاء، مقياس F1)'
      },
      {
        src: 'assets/deepvision/Picture110.png',
        title: 'DeepVision Web Interface — Batch Analysis & Sample Prediction',
        titleAr: 'واجهة نظام DeepVision — نمط الفحص المجمع ونتيجة فحص عينة'
      },
      {
        src: 'assets/deepvision/Picture80.png',
        title: 'Media Upload Dashboard (Drag & Drop Interface for Images & Videos)',
        titleAr: 'لوحة رفع الوسائط بالسحب والإفلات للصور ومقاطع الفيديو'
      },
      {
        src: 'assets/deepvision/Picture70.png',
        title: 'System Terminal Output & Calibrated Frame Confidence Logs',
        titleAr: 'مخرجات النظام وسجل درجات الثقة وتحليل الإطارات'
      },
      {
        src: 'assets/deepvision/Picture40.png',
        title: 'CBAM Implementation: PyTorch Channel Attention Module Code',
        titleAr: 'كود بايثون لوحدة الانتباه القنوي Channel Attention (CBAM)'
      },
      {
        src: 'assets/deepvision/Picture50.png',
        title: 'CBAM Implementation: PyTorch Spatial Attention Module Code',
        titleAr: 'كود بايثون لوحدة الانتباه المكاني Spatial Attention (CBAM)'
      },
      {
        src: 'assets/deepvision/Picture10.png',
        title: 'FaceForensics++ C23 Benchmark Dataset Sub-Directories',
        titleAr: 'هيكل مجلدات مجموعة بيانات FaceForensics++ C23 المعتمدة'
      }
    ]
  },

  starCompany: {
    title: 'STAR Business Services — Corporate Website',
    titleAr: 'موقع شركة STAR للخدمات الإدارية وتأسيس الشركات',
    category: 'client',
    role: 'Website Developer (Individual Project)',
    roleAr: 'مطور الموقع (مشروع فردي)',
    client: 'الشركة السعودية لريادة الأعمال (STAR)',
    featuredImage: 'assets/company-website/Screenshot 2026-09-15 161723.png',
    gallery: [
      {
        src: 'assets/company-website/Screenshot 2026-09-15 161723.png',
        title: 'Homepage Hero & Main Value Proposition',
        titleAr: 'واجهة الصفحة الرئيسية والعرض التعريفي للشركة'
      },
      {
        src: 'assets/company-website/Screenshot 2026-09-15 161843.png',
        title: 'Consultation Booking Section & Comprehensive Footer',
        titleAr: 'قسم حجز الاستشارات وتذييل الصفحة الشامل'
      },
      {
        src: 'assets/company-website/Screenshot 2026-09-15 161917.png',
        title: 'About Company & Leadership Presentation',
        titleAr: 'قسم «من نحن» واستعراض الرؤية وفريق العمل'
      },
      {
        src: 'assets/company-website/Screenshot 2026-09-15 162228.png',
        title: 'Client Case Studies & Portfolio Grid',
        titleAr: 'قسم سابقة الأعمال واستعراض مشاريع العملاء'
      },
      {
        src: 'assets/company-website/Screenshot 2026-09-15 161654.png',
        title: 'Custom Brand Preloader Animation',
        titleAr: 'شاشة التحميل المخصصة بهوية الشركة (Preloader)'
      }
    ]
  },

  store: {
    title: 'Modern E-Commerce Store',
    titleAr: 'متجر إلكتروني حديث (Modern Store)',
    category: 'web',
    role: 'Individual Project (Front-End Only)',
    roleAr: 'مشروع فردي (Front-End فقط)',
    github: 'https://github.com/CAPO2004/store',
    demo: 'https://capo2004.github.io/store/',
    featuredImage: 'assets/ecommerce/Screenshot 2026-09-12 161947.png',
    gallery: [
      {
        src: 'assets/ecommerce/Screenshot 2026-09-12 161947.png',
        title: 'Storefront Homepage, Banner & Navigation',
        titleAr: 'الواجهة الرئيسية للمتجر وتصفح الأقسام'
      },
      {
        src: 'assets/ecommerce/Screenshot 2026-09-12 162237.png',
        title: 'Featured Deals, Product Catalog & Discount Badges',
        titleAr: 'كتالوج المنتجات والعروض والخصومات المميزة'
      },
      {
        src: 'assets/ecommerce/Screenshot 2026-09-12 162319.png',
        title: 'Product Category Filter & Grid Presentation',
        titleAr: 'نظام تصفية المنتجات وعرض الأقسام'
      },
      {
        src: 'assets/ecommerce/Screenshot 2026-09-12 162548.png',
        title: 'Interactive Shopping Cart Drawer & Pricing Summary',
        titleAr: 'سلة التسوق التفاعلية وحساب الإجمالي'
      },
      {
        src: 'assets/ecommerce/Screenshot 2026-09-12 162717.png',
        title: 'Customer Checkout Interface & Order Steps',
        titleAr: 'واجهة إتمام الطلب والدفع'
      }
    ]
  },

  phpMastery: {
    title: 'PHP Mastery — Interactive Learning Platform',
    titleAr: 'PHP Mastery — منصة تفاعلية لتعلم لغة PHP',
    category: 'web',
    role: 'Individual Project (Front-End Only)',
    roleAr: 'مشروع فردي (Front-End فقط)',
    github: 'https://github.com/CAPO2004/PHP-Mastery',
    demo: 'https://capo2004.github.io/PHP-Mastery/',
    featuredImage: 'assets/php-mastery/Screenshot 2026-09-12 154019.png',
    gallery: [
      {
        src: 'assets/php-mastery/Screenshot 2026-09-12 154019.png',
        title: 'Educational Platform Hero & Glassmorphism Theme',
        titleAr: 'الواجهة الرئيسية للمنصة بتصميم الزجاج المعتم'
      },
      {
        src: 'assets/php-mastery/Screenshot 2026-09-12 154448.png',
        title: 'Structured Lessons & Interactive Curriculum',
        titleAr: 'قائمة الدروس والمناهج التفاعلية المنظمة'
      },
      {
        src: 'assets/php-mastery/Screenshot 2026-09-12 154533.png',
        title: 'Code Editor & Real-Time Output Feedback',
        titleAr: 'محرر الأكواد والمعاينة الفورية للأمثلة'
      },
      {
        src: 'assets/php-mastery/Screenshot 2026-09-12 154637.png',
        title: 'Interactive Quiz Engine & Instant Score Validation',
        titleAr: 'نظام الاختبارات التفاعلي والتقييم الفوري'
      }
    ]
  }
};

window.portfolioData = portfolioData;
