const portfolioData = {
    personal: {
        name: "Vaduvanathan P",
        role: "Software Engineer",
        tagline: "I build reliable real-world software applications and production tools that solve meaningful problems at scale.",
        social: {
            linkedin: "https://www.linkedin.com/in/vaduvanathan-periyasamy-11908927b",
            github: "https://github.com/vaduvanathan",
            email: "mailto:praveenvaduvanathan@gmail.com",
            phone: "tel:+917305410425"
        }
    },
    about: "Software Engineer with hands-on experience in production admin dashboards, upload systems, desktop apps, API integrations, and embedded/IoT projects. Skilled in C/C++, Python, TypeScript, React Native, SQL, debugging, and building reliable real-world software systems.",
    skills: [
        { category: "Languages", items: ["C", "C++", "Java", "Python", "TypeScript", "SQL"] },
        { category: "Development", items: ["React Native", "JavaScript", "HTML", "CSS", "Windows Apps", "macOS Apps"] },
        { category: "Tools & Backend", items: ["REST APIs", "PostgreSQL", "Supabase", "Git/GitHub", "Admin Dashboards", "API Integrations"] }
    ],
    experience: [
        {
            title: "Software Engineer",
            company: "Build.AI / Magic Hat",
            period: "Jun 2026 - Jun 2026",
            location: "Remote",
            signal: "BUILD.AI",
            highlights: [
                "Built upload validation to stop inactive videos before processing, saving about 7,600 upload hours.",
                "Integrated Shiprocket API for logistics and helped send 18K+ Magic Hat devices.",
                "Built on-device file hashing to detect duplicate videos without firmware changes.",
                "Built and improved Magic Hat desktop upload apps for Windows and macOS.",
                "Built admin dashboard workflows for 50K+ users."
            ]
        }
    ],
    metrics: [
        { value: "7.6K+", label: "upload hours saved" },
        { value: "18K+", label: "devices shipped" },
        { value: "50K+", label: "admin users handled" },
        { value: "Win + macOS", label: "desktop upload apps" }
    ],
    projects: [
        {
            title: "IoT-Based Flood Monitoring System",
            description: "Dual ultrasonic sensor-based flood monitoring system for subways using Blynk. Enhanced alert system using water flow sensors and buzzers.",
            tech: ["Arduino", "Blynk", "Firebase", "TensorFlow"],
            link: "https://github.com/vaduvanathan/IoT-Based_Flood_Monitoring_Prevention_System",
            signal: "ROBOTICS"
        },
        {
            title: "Ticketchain - Web3 Ticketing System",
            description: "Decentralized ticketing system where users earn/lose credit scores based on attendance. Features early/late arrival scoring and rating-based bonuses.",
            tech: ["Solidity", "Supabase", "Render", "Web3.js"],
            link: "https://ticketchain-plo6.onrender.com/home.html",
            linkText: "Live Project ->",
            signal: "WEB3"
        }
    ],
    education: [
        {
            degree: "B.E. Computer Science",
            institution: "Vels Institute Of Science And Technology",
            year: "2021 - 2025",
            score: "CGPA: 7.73/10",
            link: "https://drive.google.com/drive/folders/1-JdPXgbVtOr160mX2sTy8G3wLf33u_cJ",
            linkText: "View Marksheet"
        },
        {
            degree: "HSC & SSLC",
            institution: "St. Joseph's Matriculation Hr. Sec. School",
            year: "Completed 2021",
            score: "HSC: 409 | SSLC: 398",
            link: "https://drive.google.com/file/d/1-boUdLzRlw7EI8Maa0JnNMliwKAD-MdQ/view?usp=drivesdk",
            linkText: "View Marksheet"
        }
    ],
    certifications: [
        { title: "Cloud Computing Advanced (AWS)", link: "https://drive.google.com/file/d/1-fdnVpkvWuUMSFmUO44VR7wYWn1izcxT/view" },
        { title: "Cloud Computing (NPTEL)", link: "https://drive.google.com/file/d/1-gJ3GeFiBbp9J67FILt9S2BDXC3OSIVD/view" },
        { title: "Software Testing (NPTEL)", link: "https://drive.google.com/file/d/1-zvXlbzGdhlZKwXNm8fFJ8ZAp6Twj_9j/view" },
        { title: "Cyber Security (Futurecalls)", link: "https://drive.google.com/file/d/1l8Fu-EHJAjQeT4eQQCZWy4cJywz8hayF/view" },
        { title: "Generative AI (IBM)", link: "https://www.credly.com/badges/72a6349b-b9fa-4866-866b-5834586f2723/whatsapp" },
        { title: "Typing Certification (30 WPM)", link: "https://drive.google.com/drive/folders/1--NSal-d83tPRh5FCHkxoTPXUc2CjZ3B?usp=drive_link" }
    ]
};

// DOM Elements
const app = document.getElementById('app');

// Helper: Create Element
const createElement = (tag, classes = '', content = '') => {
    const el = document.createElement(tag);
    if (classes) el.className = classes;
    if (content) el.innerHTML = content;
    return el;
};

// Render Header
const renderHeader = () => {
    const header = createElement('header', 'site-header fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10');
    const nav = createElement('nav', 'container mx-auto px-6 py-4 flex justify-between items-center');
    
    const logo = createElement('a', 'brand-lockup cursor-pointer', '<span>VP.</span><strong>Vaduvanathan Periyasamy</strong>');
    logo.href = '#';
    
    const navRight = createElement('div', 'hidden md:flex items-center gap-7 lg:gap-10');
    const ul = createElement('ul', 'flex space-x-5 lg:space-x-8');
    ['About', 'Experience', 'Projects', 'Education', 'Contact'].forEach(item => {
        const li = createElement('li');
        const a = createElement('a', 'nav-link text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300', item);
        a.href = `#${item.toLowerCase()}`;
        li.appendChild(a);
        ul.appendChild(li);
    });
    const workLink = createElement('a', 'header-work-link magnetic', '<span>View Work</span><i></i>');
    workLink.href = '#projects';
    navRight.appendChild(ul);
    navRight.appendChild(workLink);

    nav.appendChild(logo);
    nav.appendChild(navRight);
    header.appendChild(nav);
    return header;
};

// Render Hero
const renderHero = () => {
    const section = createElement('section', 'hero-section min-h-screen relative overflow-hidden pt-24');
    section.dataset.signal = 'SOFTWARE';
    const bgWord = createElement('div', 'hero-bg-word', 'ENGINEER');
    section.appendChild(bgWord);

    const container = createElement('div', 'hero-shell container mx-auto px-6 z-10');

    const copy = createElement('div', 'hero-copy');
    const eyebrow = createElement('div', 'hero-eyebrow reveal fade-up', 'Software Engineer');

    const h1 = createElement('h1', 'hero-title reveal fade-up');
    h1.innerHTML = `
        <span class="title-line"><span>Hi, I'm</span></span>
        <span class="title-line title-name"><span>${portfolioData.personal.name}</span></span>
    `;

    const p = createElement('p', 'hero-subtitle reveal fade-up', portfolioData.personal.tagline);

    const btnContainer = createElement('div', 'hero-actions reveal fade-up');
    const btnPrimary = createElement('a', 'magnetic hero-primary', 'View My Work <span aria-hidden="true">-></span>');
    btnPrimary.href = '#projects';

    const btnSecondary = createElement('a', 'magnetic hero-secondary', '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 20h14"/></svg>Download Resume');
    btnSecondary.href = './resume.pdf';
    btnSecondary.download = 'Vaduvanathan_Resume.pdf';

    btnContainer.appendChild(btnPrimary);
    btnContainer.appendChild(btnSecondary);

    copy.appendChild(eyebrow);
    copy.appendChild(h1);
    copy.appendChild(p);
    copy.appendChild(btnContainer);

    const sceneOverlay = createElement('div', 'hero-scene-overlay reveal slide-right');
    sceneOverlay.dataset.signal = 'FIRMWARE';
    sceneOverlay.innerHTML = `
        <div class="scene-status">
            <span>Status</span>
            <strong><i></i>Systems operational</strong>
        </div>
    `;

    const rigVisual = createElement('div', 'robotics-rig-visual rig-enter');
    rigVisual.dataset.signal = 'ROBOTICS';
    rigVisual.innerHTML = `
        <div class="rig-field" aria-hidden="true"></div>
        <svg class="rig-svg" aria-hidden="true" viewBox="0 0 900 760" role="img">
            <defs>
                <linearGradient id="rigStroke" x1="140" x2="760" y1="96" y2="660" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#38bdf8" />
                    <stop offset="0.48" stop-color="#60a5fa" />
                    <stop offset="1" stop-color="#a855f7" />
                </linearGradient>
                <filter id="rigGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="1.8" result="blur" />
                    <feColorMatrix in="blur" values="0 0 0 0 0.22 0 0 0 0 0.58 0 0 0 0 1 0 0 0 .58 0" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g class="rig-data-stream">
                <path d="M40 552 C202 438 326 474 462 534 C612 600 720 510 860 394" />
                <path d="M64 650 C248 550 386 608 542 646 C678 680 750 622 874 548" />
                <path d="M152 250 C306 188 438 228 552 292 C686 368 760 326 868 266" />
                <path d="M30 438 C184 382 318 396 454 444 C594 492 714 454 856 346" />
            </g>
            <g class="rig-armature" filter="url(#rigGlow)">
                <ellipse class="rig-base" cx="586" cy="675" rx="172" ry="36" />
                <ellipse class="rig-base rig-base-inner" cx="586" cy="650" rx="112" ry="22" />
                <path class="rig-shell" d="M430 616 H690 L734 674 H384 Z" />
                <path class="rig-mesh" d="M442 625 L714 662 M482 616 L526 681 M558 616 L604 684 M634 616 L684 674" />

                <g class="rig-joint joint-base">
                    <circle cx="586" cy="560" r="92" />
                    <circle cx="586" cy="560" r="62" />
                    <circle cx="586" cy="560" r="30" />
                    <path d="M496 560 H676 M586 468 V652 M522 496 L650 624 M650 496 L522 624" />
                </g>

                <g class="rig-link link-lower">
                    <path class="rig-shell" d="M560 502 C516 434 478 365 430 268 L470 246 C526 344 566 418 618 490 Z" />
                    <path class="rig-mesh" d="M468 286 L604 492 M488 326 L576 300 M508 366 L596 338 M528 406 L614 382 M548 446 L630 428" />
                    <path class="rig-centerline" d="M588 494 C536 416 500 340 450 256" />
                </g>

                <g class="rig-joint joint-elbow">
                    <circle cx="450" cy="256" r="72" />
                    <circle cx="450" cy="256" r="48" />
                    <circle cx="450" cy="256" r="21" />
                    <path d="M378 256 H522 M450 184 V328 M398 205 L502 307 M502 205 L398 307" />
                </g>

                <g class="rig-link link-upper">
                    <path class="rig-shell" d="M505 218 C596 174 684 142 782 104 L804 152 C704 190 620 224 532 270 Z" />
                    <path class="rig-mesh" d="M532 232 L793 124 M574 212 L604 252 M626 190 L656 232 M682 168 L710 210 M738 146 L764 184" />
                    <path class="rig-centerline" d="M516 244 C616 194 698 164 794 128" />
                </g>

                <g class="rig-joint joint-wrist">
                    <circle cx="792" cy="128" r="54" />
                    <circle cx="792" cy="128" r="34" />
                    <circle cx="792" cy="128" r="15" />
                    <path d="M738 128 H846 M792 74 V182 M756 92 L828 164 M828 92 L756 164" />
                </g>

                <g class="rig-tool">
                    <path class="rig-shell" d="M824 148 L876 178 L864 214 L806 180 Z" />
                    <path class="rig-shell" d="M846 180 L886 224 M858 190 L820 236" />
                    <path class="rig-mesh" d="M830 160 L866 204 M850 164 L814 198 M864 176 L830 220" />
                </g>
            </g>
            <g class="rig-measure">
                <path d="M124 326 H302 V446" />
                <path d="M646 86 H766" />
                <path d="M248 638 H362" />
                <path d="M130 326 V536 H272" />
            </g>
        </svg>
        <div class="rig-label label-systems">
            <span>Systems</span>
            <b>Upload pipelines</b>
            <b>Device logistics</b>
            <b>Data review</b>
        </div>
        <div class="rig-label label-flow">
            <span>Data flow</span>
            <b>Validate</b>
            <b>Deduplicate</b>
            <b>Ship</b>
        </div>
    `;

    const cue = createElement('a', 'scroll-cue', 'Scroll');
    cue.href = '#about';

    container.appendChild(copy);
    section.appendChild(container);
    section.appendChild(rigVisual);
    section.appendChild(sceneOverlay);
    section.appendChild(cue);

    return section;
};

// Render Section Title
const renderSectionTitle = (title) => {
    return createElement('h2', 'text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 reveal fade-up', title);
};

// Render About
const renderAbout = () => {
    const section = createElement('section', 'py-20 relative', '');
    section.id = 'about';
    const container = createElement('div', 'container mx-auto px-6');
    
    container.appendChild(renderSectionTitle('About Me'));
    
    const content = createElement('div', 'spotlight-card max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed border border-white/10 p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-colors duration-500 reveal slide-left');
    content.textContent = portfolioData.about;
    
    container.appendChild(content);
    section.appendChild(container);
    return section;
};

// Render Skills
const renderSkills = () => {
    const section = createElement('section', 'py-20 bg-black/50', '');
    section.id = 'skills';
    const container = createElement('div', 'container mx-auto px-6');
    
    container.appendChild(renderSectionTitle('Technical Arsenal'));
    
    const grid = createElement('div', 'grid grid-cols-1 md:grid-cols-3 gap-8');
    
    portfolioData.skills.forEach((category, index) => {
        const card = createElement('div', 'tilt-card spotlight-card p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group reveal fade-up');
        card.dataset.signal = category.category.toUpperCase();
        card.style.transitionDelay = `${index * 100}ms`;
        const title = createElement('h3', 'text-xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300', category.category);
        const list = createElement('div', 'flex flex-wrap gap-2');
        
        category.items.forEach(skill => {
            const badge = createElement('span', 'px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300', skill);
            list.appendChild(badge);
        });
        
        card.appendChild(title);
        card.appendChild(list);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
    section.appendChild(container);
    return section;
};

// Render Experience
const renderExperience = () => {
    const section = createElement('section', 'py-20', '');
    section.id = 'experience';
    const container = createElement('div', 'container mx-auto px-6');

    container.appendChild(renderSectionTitle('Experience'));

    const list = createElement('div', 'max-w-4xl mx-auto space-y-8');

    portfolioData.experience.forEach((role, index) => {
        const card = createElement('article', 'experience-card spotlight-card tilt-card p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 reveal fade-up');
        card.dataset.signal = role.signal || 'BUILD.AI';
        card.style.transitionDelay = `${index * 100}ms`;

        const top = createElement('div', 'flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5');
        const titleBlock = createElement('div');
        titleBlock.appendChild(createElement('h3', 'text-2xl font-bold text-white', role.title));
        titleBlock.appendChild(createElement('p', 'text-blue-400 font-medium mt-1', `${role.company} - ${role.location}`));
        top.appendChild(titleBlock);
        top.appendChild(createElement('span', 'text-sm text-gray-400 md:text-right', role.period));

        const bullets = createElement('ul', 'timeline-list space-y-3 text-gray-300 leading-relaxed');
        role.highlights.forEach((highlight) => {
            const item = createElement('li', 'flex gap-3');
            item.innerHTML = `<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"></span><span>${highlight}</span>`;
            bullets.appendChild(item);
        });

        card.appendChild(top);
        if (index === 0) {
            const metrics = createElement('div', 'experience-metrics');
            portfolioData.metrics.forEach((metric) => {
                const metricCard = createElement('div', 'experience-metric tilt-card');
                metricCard.appendChild(createElement('i', 'metric-icon', ''));
                metricCard.appendChild(createElement('span', 'impact-value', metric.value));
                metricCard.appendChild(createElement('span', 'impact-label', metric.label));
                metrics.appendChild(metricCard);
            });
            card.appendChild(metrics);
        }
        card.appendChild(bullets);
        list.appendChild(card);
    });

    container.appendChild(list);
    section.appendChild(container);
    return section;
};

// Render Projects
const renderProjects = () => {
    const section = createElement('section', 'py-20', '');
    section.id = 'projects';
    const container = createElement('div', 'container mx-auto px-6');
    
    container.appendChild(renderSectionTitle('Featured Projects'));
    
    const grid = createElement('div', 'grid grid-cols-1 md:grid-cols-2 gap-8');
    
    portfolioData.projects.forEach((project, index) => {
        const animationClass = index % 2 === 0 ? 'slide-left' : 'slide-right';
        const card = createElement('div', `tilt-card spotlight-card group relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden reveal ${animationClass}`);
        card.dataset.signal = project.signal || 'PROJECT';

        const title = createElement('h3', 'text-2xl font-bold mb-3 text-white', project.title);
        const desc = createElement('p', 'text-gray-400 mb-6 leading-relaxed', project.description);
        
        const techStack = createElement('div', 'flex flex-wrap gap-2 mb-6');
        project.tech.forEach(t => {
            techStack.appendChild(createElement('span', 'text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-1 rounded', t));
        });
        
        const linkText = project.linkText || 'View Code ->';
        const link = createElement('a', 'magnetic inline-flex items-center text-white font-medium hover:text-purple-400 transition-colors', linkText);
        link.href = project.link;
        link.target = '_blank';
        
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(techStack);
        card.appendChild(link);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
    section.appendChild(container);
    return section;
};

// Render Education & Certs
const renderEducation = () => {
    const section = createElement('section', 'py-20 bg-black/50', '');
    section.id = 'education';
    const container = createElement('div', 'container mx-auto px-6');
    
    container.appendChild(renderSectionTitle('Education & Certifications'));
    
    const grid = createElement('div', 'grid grid-cols-1 md:grid-cols-2 gap-12');
    
    // Education Column
    const eduCol = createElement('div', 'space-y-6 reveal slide-left');
    eduCol.appendChild(createElement('h3', 'text-2xl font-bold mb-6 text-gray-200', 'Education'));
    
    portfolioData.education.forEach((edu, index) => {
        const card = createElement('div', 'education-card reveal slide-left pl-6 border-l-2 border-blue-500/30 relative');
        card.dataset.signal = 'ENGINEERING';
        card.style.transitionDelay = `${index * 120}ms`;
        const dot = createElement('div', 'absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-blue-500');
        card.appendChild(dot);
        
        card.appendChild(createElement('h4', 'text-lg font-semibold text-white', edu.degree));
        card.appendChild(createElement('p', 'text-gray-400', edu.institution));
        card.appendChild(createElement('p', 'text-sm text-gray-500 mt-1', `${edu.year} - ${edu.score}`));
        if (edu.link) {
            const link = createElement('a', 'education-link magnetic', edu.linkText || 'View Certificate');
            link.href = edu.link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            card.appendChild(link);
        }
        eduCol.appendChild(card);
    });
    
    // Certs Column
    const certCol = createElement('div', 'space-y-6 reveal slide-right');
    certCol.appendChild(createElement('h3', 'text-2xl font-bold mb-6 text-gray-200', 'Certifications'));
    
    const certList = createElement('ul', 'space-y-4');
    portfolioData.certifications.forEach((cert, index) => {
        const li = createElement('li', 'cert-card reveal slide-right flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all group');
        li.style.transitionDelay = `${index * 90}ms`;
        
        const title = createElement('span', 'text-gray-300 font-medium group-hover:text-white transition-colors', cert.title);
        
        const link = createElement('a', 'px-4 py-2 text-xs font-bold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all', 'View Certificate');
        link.href = cert.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        li.appendChild(title);
        li.appendChild(link);
        certList.appendChild(li);
    });
    certCol.appendChild(certList);
    
    grid.appendChild(eduCol);
    grid.appendChild(certCol);
    container.appendChild(grid);
    section.appendChild(container);
    return section;
};

// Render Resume
const renderResume = () => {
    const section = createElement('section', 'py-20', '');
    section.id = 'resume';
    const container = createElement('div', 'container mx-auto px-6 text-center');

    container.appendChild(renderSectionTitle('Resume'));

    const card = createElement('div', 'max-w-4xl mx-auto p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm');
    
    // PDF Preview (Iframe)
    const iframeContainer = createElement('div', 'w-full h-[600px] rounded-xl overflow-hidden bg-white/5 mb-6');
    const iframe = createElement('iframe', 'w-full h-full');
    iframe.src = "./resume.pdf#toolbar=0";
    iframeContainer.appendChild(iframe);

    // Download Button
    const btnContainer = createElement('div', 'flex justify-center pb-6');
    const downloadBtn = createElement('a', 'px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-1', 'Download Resume');
    downloadBtn.href = "./resume.pdf";
    downloadBtn.download = "Vaduvanathan_Resume.pdf";
    downloadBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download Resume`;
    btnContainer.appendChild(downloadBtn);

    card.appendChild(iframeContainer);
    card.appendChild(btnContainer);
    
    container.appendChild(card);
    section.appendChild(container);
    return section;
};

// Render Contact
const renderContact = () => {
    const section = createElement('section', 'py-20 relative overflow-hidden', '');
    section.id = 'contact';
    
    const container = createElement('div', 'container mx-auto px-6 text-center relative z-10');
    
    container.appendChild(renderSectionTitle('Get In Touch'));
    
    const p = createElement('p', 'text-xl text-gray-400 mb-10 max-w-2xl mx-auto', "I'm always open to new opportunities and collaborations.");
    
    const links = createElement('div', 'flex justify-center gap-8 flex-wrap');
    
    Object.entries(portfolioData.personal.social).forEach(([key, value]) => {
        const a = createElement('a', 'text-gray-400 hover:text-white transition-colors text-lg capitalize', key);
        a.href = value;
        a.target = '_blank';
        links.appendChild(a);
    });
    
    container.appendChild(p);
    container.appendChild(links);
    section.appendChild(container);
    return section;
};

// Render Footer
const renderFooter = () => {
    const footer = createElement('footer', 'py-8 border-t border-white/10 text-center text-gray-600 text-sm');
    footer.innerHTML = `&copy; ${new Date().getFullYear()} ${portfolioData.personal.name}. Crafted with Code.`;
    return footer;
};

// Loader
const initLoader = () => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    setTimeout(() => {
        loader.classList.add('is-hidden');
    }, 650);
};

// Animated Background
const initStarfield = () => {
    const canvas = document.getElementById('starfield');
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    const colors = ['#60a5fa', '#a855f7', '#ffffff', '#38bdf8'];
    let width = 0;
    let height = 0;
    let stars = [];

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        stars = Array.from({ length: Math.min(140, Math.floor(width / 9)) }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.8 + 0.35,
            speed: Math.random() * 0.35 + 0.08,
            alpha: Math.random() * 0.7 + 0.25,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));
    };

    const draw = () => {
        ctx.clearRect(0, 0, width, height);
        stars.forEach((star) => {
            star.y += star.speed;
            if (star.y > height + 4) {
                star.y = -4;
                star.x = Math.random() * width;
            }
            ctx.globalAlpha = star.alpha;
            ctx.fillStyle = star.color;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
};

const initRoboticsSceneFallback = (canvas) => {
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let points = [];
    const pointer = { x: 0, y: 0 };

    const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        points = Array.from({ length: Math.min(70, Math.floor(width / 18)) }, (_, index) => ({
            x: width * 0.55 + Math.random() * width * 0.45,
            y: Math.random() * height,
            r: 1 + Math.random() * 2,
            drift: 0.3 + Math.random() * 0.9,
            phase: index * 0.37,
        }));
    };

    const draw = (time = 0) => {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, width, height);
        points.forEach((point, index) => {
            point.y += point.drift;
            if (point.y > height + 20) point.y = -20;
            const x = point.x + Math.sin(time * 0.001 + point.phase) * 18 + pointer.x * 24;
            const y = point.y + pointer.y * 16;
            ctx.fillStyle = index % 5 === 0 ? 'rgba(168, 85, 247, 0.6)' : 'rgba(96, 165, 250, 0.55)';
            ctx.beginPath();
            ctx.arc(x, y, point.r, 0, Math.PI * 2);
            ctx.fill();
            if (index % 6 === 0) {
                ctx.strokeStyle = 'rgba(96, 165, 250, 0.12)';
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(width * 0.76, height * 0.48);
                ctx.stroke();
            }
        });
        requestAnimationFrame(draw);
    };

    document.addEventListener('mousemove', (event) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    resize();
    draw();
    window.addEventListener('resize', resize);
};

const initRoboticsScene = async () => {
    const canvas = document.getElementById('robotics-scene');
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    try {
        const THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 100);
        camera.position.set(0, 0, 8.2);

        const root = new THREE.Group();
        root.position.set(0.12, 0.04, 0);
        scene.add(root);

        const cloudPositions = new Float32Array(220 * 3);
        for (let index = 0; index < 220; index += 1) {
            cloudPositions[index * 3] = -0.3 + Math.random() * 6.6;
            cloudPositions[index * 3 + 1] = -2.25 + Math.random() * 4.1;
            cloudPositions[index * 3 + 2] = -3.2 + Math.random() * 2.8;
        }
        const cloudGeometry = new THREE.BufferGeometry();
        cloudGeometry.setAttribute('position', new THREE.BufferAttribute(cloudPositions, 3));
        const cloud = new THREE.Points(
            cloudGeometry,
            new THREE.PointsMaterial({ color: 0x7dd3fc, size: 0.018, transparent: true, opacity: 0.64 })
        );
        root.add(cloud);

        const waveRows = 9;
        const waveColumns = 56;
        const wavePositions = new Float32Array(waveRows * waveColumns * 3);
        const waveSeeds = [];
        for (let row = 0; row < waveRows; row += 1) {
            for (let col = 0; col < waveColumns; col += 1) {
                const index = row * waveColumns + col;
                const x = -1.5 + col * 0.105;
                const z = -1.7 + row * 0.2;
                const y = -2.05 + Math.sin(col * 0.18 + row * 0.45) * 0.16;
                wavePositions[index * 3] = x;
                wavePositions[index * 3 + 1] = y;
                wavePositions[index * 3 + 2] = z;
                waveSeeds.push({ x, y, z, row, col });
            }
        }
        const waveGeometry = new THREE.BufferGeometry();
        waveGeometry.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
        const dataWave = new THREE.Points(
            waveGeometry,
            new THREE.PointsMaterial({ color: 0x3b82f6, size: 0.022, transparent: true, opacity: 0.82 })
        );
        dataWave.position.set(0.55, -0.08, 0.35);
        root.add(dataWave);

        const pointer = { x: 0, y: 0 };
        const scrollState = { value: 0 };
        document.addEventListener('mousemove', (event) => {
            pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
            pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
        }, { passive: true });
        const updateScroll = () => {
            scrollState.value = Math.min(1, window.scrollY / (window.innerHeight * 2.4));
        };
        updateScroll();
        window.addEventListener('scroll', updateScroll, { passive: true });

        const resize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight, false);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        const animate = (time = 0) => {
            const t = time * 0.001;
            const scroll = scrollState.value;
            root.rotation.y = pointer.x * 0.08 - scroll * 0.2;
            root.rotation.x = pointer.y * 0.045;
            cloud.rotation.y = t * 0.038;
            cloud.rotation.x = pointer.y * 0.025;

            const positions = waveGeometry.attributes.position.array;
            waveSeeds.forEach((seed, index) => {
                const offset = index * 3;
                positions[offset + 1] = seed.y + Math.sin(t * 1.8 + seed.col * 0.2 + seed.row * 0.38 + scroll * 5.8) * 0.12;
                positions[offset + 2] = seed.z + scroll * 0.36;
            });
            waveGeometry.attributes.position.needsUpdate = true;
            dataWave.rotation.y = -0.18 + pointer.x * 0.025;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        resize();
        animate();
        window.addEventListener('resize', resize);
    } catch (error) {
        initRoboticsSceneFallback(canvas);
    }
};

// Scroll Progress
const initScrollProgress = () => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const update = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        bar.style.width = `${percent}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
};

// Active Navigation
const initActiveNav = () => {
    const links = [...document.querySelectorAll('.nav-link')];
    const sections = links
        .map((link) => {
            const href = link.getAttribute('href');
            return href && href.startsWith('#') ? document.querySelector(href) : null;
        })
        .filter((section) => section instanceof Element);
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

    sections.forEach((section) => observer.observe(section));
    const clearHeroState = () => {
        if (window.scrollY < window.innerHeight * 0.35) {
            links.forEach((link) => link.classList.remove('is-active'));
        }
    };
    clearHeroState();
    window.addEventListener('scroll', clearHeroState, { passive: true });
};

// Magnetic Buttons
const initMagneticElements = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.magnetic').forEach((element) => {
        element.addEventListener('mousemove', (event) => {
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            element.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
};

// Card Tilt
const initTiltCards = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.tilt-card').forEach((card) => {
        card.addEventListener('mousemove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
};

// Initialize
const init = () => {
    app.appendChild(renderHeader());
    app.appendChild(renderHero());
    app.appendChild(renderAbout());
    app.appendChild(renderSkills());
    app.appendChild(renderExperience());
    app.appendChild(renderProjects());
    app.appendChild(renderEducation());
    app.appendChild(renderResume());
    app.appendChild(renderContact());
    app.appendChild(renderFooter());
};

// Custom Cursor Logic
const initCursor = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return;
    const signalThemes = [
        { label: 'BUILD.AI', color: '#60a5fa' },
        { label: 'SOFTWARE', color: '#93c5fd' },
        { label: 'FIRMWARE', color: '#38bdf8' },
        { label: 'ROBOTICS', color: '#a855f7' },
        { label: 'WEB3', color: '#c084fc' },
        { label: 'ENGINEERING', color: '#2dd4bf' },
        { label: 'DEVELOPMENT', color: '#34d399' },
        { label: 'LANGUAGES', color: '#facc15' },
        { label: 'TOOLS & BACKEND', color: '#fb7185' },
        { label: 'API', color: '#22c55e' },
        { label: 'HASH', color: '#f59e0b' },
        { label: 'IOT', color: '#14b8a6' },
        { label: 'UPLOAD', color: '#818cf8' },
        { label: 'SHIPROCKET', color: '#f97316' }
    ];
    let activeTheme = signalThemes[0];
    let lastSparkAt = 0;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-ring';
    document.body.appendChild(cursor);

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);

    const signal = document.createElement('div');
    signal.className = 'cursor-signal';
    signal.textContent = activeTheme.label;
    document.body.appendChild(signal);

    const updateSignal = (target) => {
        const zone = target?.closest?.('[data-signal]');
        const zoneSignal = zone?.dataset?.signal;
        activeTheme = signalThemes.find((theme) => theme.label === zoneSignal) || activeTheme;
        signal.textContent = activeTheme.label;
        signal.style.setProperty('--signal-color', activeTheme.color);
        cursor.style.setProperty('--signal-color', activeTheme.color);
    };

    const leaveSpark = (x, y) => {
        const spark = document.createElement('span');
        spark.className = 'cursor-spark';
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.setProperty('--signal-color', activeTheme.color);
        document.body.appendChild(spark);
        window.setTimeout(() => spark.remove(), 850);
    };

    document.addEventListener('mousemove', (e) => {
        updateSignal(e.target);
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        dot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
        signal.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 18}px)`;
        if (Date.now() - lastSparkAt > 110) {
            leaveSpark(e.clientX, e.clientY);
            lastSparkAt = Date.now();
        }
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform += ' scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
    });
};

const initHeroRigMotion = () => {
    const rig = document.querySelector('.robotics-rig-visual');
    if (!rig || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const state = {
        scroll: 0,
        x: 0,
        y: 0,
        targetScroll: 0,
        targetX: 0,
        targetY: 0,
    };

    const updateScroll = () => {
        state.targetScroll = Math.min(1, window.scrollY / (window.innerHeight * 1.25));
    };

    document.addEventListener('mousemove', (event) => {
        state.targetX = (event.clientX / window.innerWidth - 0.5) * 2;
        state.targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    const animate = () => {
        state.scroll += (state.targetScroll - state.scroll) * 0.09;
        state.x += (state.targetX - state.x) * 0.08;
        state.y += (state.targetY - state.y) * 0.08;

        rig.style.setProperty('--rig-scroll', state.scroll.toFixed(4));
        rig.style.setProperty('--rig-pointer-x', state.x.toFixed(4));
        rig.style.setProperty('--rig-pointer-y', state.y.toFixed(4));

        requestAnimationFrame(animate);
    };

    animate();
};

// Scroll Animations
const initScrollAnimations = () => {
    const elements = [...document.querySelectorAll('.reveal')];
    elements.forEach((element, index) => {
        if (!element.style.transitionDelay) {
            element.style.transitionDelay = `${Math.min((index % 5) * 70, 280)}ms`;
        }
    });

    const activateVisible = () => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        elements.forEach((element) => {
            if (element.classList.contains('active')) return;
            const rect = element.getBoundingClientRect();
            if (rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.04) {
                element.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.14
    });

    elements.forEach((element) => observer.observe(element));
    requestAnimationFrame(activateVisible);
    setTimeout(activateVisible, 180);
    setTimeout(activateVisible, 700);
    window.addEventListener('scroll', activateVisible, { passive: true });
    window.addEventListener('resize', activateVisible, { passive: true });
};

document.addEventListener('DOMContentLoaded', () => {
    init();
    initLoader();
    initStarfield();
    initRoboticsScene();
    initScrollProgress();
    initCursor();
    initHeroRigMotion();
    initScrollAnimations();
    initActiveNav();
    initMagneticElements();
    initTiltCards();
});
