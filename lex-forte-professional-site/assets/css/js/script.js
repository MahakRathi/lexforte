document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME TOGGLER ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    themeToggleButton.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // --- 2. STICKY NAVIGATION VISIBILITY ---
    const stickyNav = document.querySelector('.sticky-nav');
    if (stickyNav) {
        window.addEventListener('scroll', () => {
            stickyNav.classList.toggle('visible', window.scrollY > 200);
        });
    }
    
    // --- 3. TABBED CONTENT INTERFACE ---
    const tabsNav = document.querySelector('.tabs-nav');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabsNav) {
        tabsNav.addEventListener('click', (e) => {
            if (e.target.matches('.tab-button')) {
                // Deactivate all buttons and panes
                tabsNav.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // Activate the clicked button
                e.target.classList.add('active');

                // Activate the corresponding pane
                const targetPaneId = e.target.getAttribute('data-tab');
                const targetPane = document.getElementById(targetPaneId);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            }
        });
    }

    // --- 4. INITIALIZE ANIMATE ON SCROLL (AOS) ---
    AOS.init({
        duration: 600,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic',
    });
});