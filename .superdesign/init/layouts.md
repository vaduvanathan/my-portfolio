# Layouts

## Site Header
- Source: `script.js`
- Description: Fixed desktop navigation with a compact mobile menu.

```js
const renderHeader = () => {
    const header = createElement('header', 'site-header fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10');
    const nav = createElement('nav', 'container mx-auto px-6 py-4 flex justify-between items-center');
    nav.setAttribute('aria-label', 'Primary navigation');
    const logo = createElement('a', 'brand-lockup cursor-pointer', '<span>VP.</span><strong>Vaduvanathan Periyasamy</strong>');
    logo.href = '#';
    const navRight = createElement('div', 'hidden md:flex items-center gap-7 lg:gap-10');
    const ul = createElement('ul', 'flex space-x-5 lg:space-x-8');
    ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].forEach(item => {
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
    const menuButton = createElement('button', 'mobile-menu-toggle', '<span></span><span></span><span></span>');
    menuButton.type = 'button';
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'mobile-nav');
    const mobileNav = createElement('div', 'mobile-nav');
    mobileNav.id = 'mobile-nav';
    ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].forEach(item => {
        const link = createElement('a', 'mobile-nav-link', item);
        link.href = `#${item.toLowerCase()}`;
        mobileNav.appendChild(link);
    });
    menuButton.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    nav.appendChild(logo);
    nav.appendChild(navRight);
    nav.appendChild(menuButton);
    header.appendChild(nav);
    header.appendChild(mobileNav);
    return header;
};
```

## Footer
- Source: `script.js`
- Description: Minimal year-stamped footer.

```js
const renderFooter = () => {
    const footer = createElement('footer', 'py-8 border-t border-white/10 text-center text-gray-600 text-sm');
    footer.innerHTML = `&copy; ${new Date().getFullYear()} ${portfolioData.personal.name}. Crafted with Code.`;
    return footer;
};
```
