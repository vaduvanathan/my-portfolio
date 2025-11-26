const portfolioData = {
    personal: {
        name: "Vaduvanathan P",
        role: "Software Engineer",
        tagline: "Building the future with Code & Cloud.",
        social: {
            linkedin: "https://www.linkedin.com/in/vaduvanathan-periyasamy-11908927b",
            github: "https://github.com/vaduvanathan",
            email: "mailto:praveenvaduvanathan@gmail.com",
            phone: "tel:+917305410425"
        }
    },
    about: "A passionate software engineer with hands-on experience in developing secure blockchain-based voting systems and cloud-integrated school management systems. Proficient in Java, C++, SQL, and AWS, with a strong foundation in data structures and algorithms.",
    skills: [
        { category: "Languages", items: ["Java", "C++", "SQL", "JavaScript"] },
        { category: "Core", items: ["Data Structures", "Algorithms", "OOPS", "DBMS"] },
        { category: "Tools & Cloud", items: ["AWS", "Git/GitHub", "MySQL", "Ganache", "Firebase"] }
    ],
    projects: [
        {
            title: "IoT-Based Flood Monitoring System",
            description: "Dual ultrasonic sensor-based flood monitoring system for subways using Blynk. Enhanced alert system using water flow sensors and buzzers.",
            tech: ["Arduino", "Blynk", "Firebase", "TensorFlow"],
            link: "https://github.com/vaduvanathan/IoT-Based_Flood_Monitoring_Prevention_System"
        },
        {
            title: "School Management System",
            description: "Built a school management system streamlining admin tasks by 25%. Added modules for student records and fee management.",
            tech: ["Java", "MySQL", "Cloud Deployment"],
            link: "https://github.com/vaduvanathan/school-management-system"
        },
        {
            title: "Ticketchain – Web3 Ticketing System",
            description: "Decentralized ticketing system where users earn/lose credit scores based on attendance. Features early/late arrival scoring and rating-based bonuses.",
            tech: ["Solidity", "Supabase", "Render", "Web3.js"],
            link: "https://ticketchain-plo6.onrender.com/home.html"
        }
    ],
    education: [
        {
            degree: "B.E. Computer Science",
            institution: "Vels Institute Of Science And Technology",
            year: "2021 - 2025",
            score: "CGPA: 7.91/10"
        },
        {
            degree: "HSC & SSLC",
            institution: "St. Joseph's Matriculation Hr. Sec. School",
            year: "Completed 2021",
            score: "HSC: 409 | SSLC: 398"
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
    const header = createElement('header', 'fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10');
    const nav = createElement('nav', 'container mx-auto px-6 py-4 flex justify-between items-center');
    
    const logo = createElement('a', 'text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 cursor-pointer', 'VP.');
    logo.href = '#';
    
    const ul = createElement('ul', 'hidden md:flex space-x-8');
    ['About', 'Skills', 'Projects', 'Education', 'Resume', 'Contact'].forEach(item => {
        const li = createElement('li');
        const a = createElement('a', 'text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300', item);
        a.href = `#${item.toLowerCase()}`;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(logo);
    nav.appendChild(ul);
    header.appendChild(nav);
    return header;
};

// Render Hero
const renderHero = () => {
    const section = createElement('section', 'min-h-screen flex items-center justify-center relative overflow-hidden pt-20');
    
    // Background Glow
    const glow = createElement('div', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10');
    section.appendChild(glow);

    const container = createElement('div', 'container mx-auto px-6 text-center z-10');
    
    const h1 = createElement('h1', 'text-5xl md:text-7xl font-bold mb-6 tracking-tight');
    h1.innerHTML = `Hi, I'm <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">${portfolioData.personal.name}</span>`;
    
    const p = createElement('p', 'text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light', portfolioData.personal.tagline);
    
    const btnContainer = createElement('div', 'flex justify-center gap-4');
    const btnPrimary = createElement('a', 'px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all transform hover:scale-105', 'View Projects');
    btnPrimary.href = '#projects';
    
    const btnSecondary = createElement('a', 'px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all', 'Contact Me');
    btnSecondary.href = '#contact';

    btnContainer.appendChild(btnPrimary);
    btnContainer.appendChild(btnSecondary);
    
    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(btnContainer);
    section.appendChild(container);
    
    return section;
};

// Render Section Title
const renderSectionTitle = (title) => {
    return createElement('h2', 'text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500', title);
};

// Render About
const renderAbout = () => {
    const section = createElement('section', 'py-20 relative', '');
    section.id = 'about';
    const container = createElement('div', 'container mx-auto px-6');
    
    container.appendChild(renderSectionTitle('About Me'));
    
    const content = createElement('div', 'max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed border border-white/10 p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-colors duration-500');
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
    
    portfolioData.skills.forEach(category => {
        const card = createElement('div', 'p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group');
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

// Render Projects
const renderProjects = () => {
    const section = createElement('section', 'py-20', '');
    section.id = 'projects';
    const container = createElement('div', 'container mx-auto px-6');
    
    container.appendChild(renderSectionTitle('Featured Projects'));
    
    const grid = createElement('div', 'grid grid-cols-1 md:grid-cols-2 gap-8');
    
    portfolioData.projects.forEach(project => {
        const card = createElement('div', 'group relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden');
        
        // Hover Glow
        const glow = createElement('div', 'absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10');
        card.appendChild(glow);

        const title = createElement('h3', 'text-2xl font-bold mb-3 text-white', project.title);
        const desc = createElement('p', 'text-gray-400 mb-6 leading-relaxed', project.description);
        
        const techStack = createElement('div', 'flex flex-wrap gap-2 mb-6');
        project.tech.forEach(t => {
            techStack.appendChild(createElement('span', 'text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-1 rounded', t));
        });
        
        const link = createElement('a', 'inline-flex items-center text-white font-medium hover:text-purple-400 transition-colors', 'View Code →');
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
    const eduCol = createElement('div', 'space-y-6');
    eduCol.appendChild(createElement('h3', 'text-2xl font-bold mb-6 text-gray-200', 'Education'));
    
    portfolioData.education.forEach(edu => {
        const card = createElement('div', 'pl-6 border-l-2 border-blue-500/30 relative');
        const dot = createElement('div', 'absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-blue-500');
        card.appendChild(dot);
        
        card.appendChild(createElement('h4', 'text-lg font-semibold text-white', edu.degree));
        card.appendChild(createElement('p', 'text-gray-400', edu.institution));
        card.appendChild(createElement('p', 'text-sm text-gray-500 mt-1', `${edu.year} • ${edu.score}`));
        eduCol.appendChild(card);
    });
    
    // Certs Column
    const certCol = createElement('div', 'space-y-6');
    certCol.appendChild(createElement('h3', 'text-2xl font-bold mb-6 text-gray-200', 'Certifications'));
    
    const certList = createElement('ul', 'space-y-4');
    portfolioData.certifications.forEach(cert => {
        const li = createElement('li', 'flex items-center text-gray-400');
        const link = createElement('a', 'hover:text-blue-400 transition-colors flex items-center gap-2', `<span class="text-green-400">✓</span> ${cert.title}`);
        link.href = cert.link;
        link.target = '_blank';
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

// Initialize
const init = () => {
    app.appendChild(renderHeader());
    app.appendChild(renderHero());
    app.appendChild(renderAbout());
    app.appendChild(renderSkills());
    app.appendChild(renderProjects());
    app.appendChild(renderEducation());
    app.appendChild(renderResume());
    app.appendChild(renderContact());
    app.appendChild(renderFooter());
};

// Custom Cursor Logic
const initCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[100] transition-transform duration-100 ease-out hidden md:block';
    document.body.appendChild(cursor);

    const dot = document.createElement('div');
    dot.className = 'fixed w-1 h-1 bg-white rounded-full pointer-events-none z-[100] hidden md:block';
    document.body.appendChild(dot);

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        dot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform += ' scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
    });
};

document.addEventListener('DOMContentLoaded', () => {
    init();
    initCursor();
});
