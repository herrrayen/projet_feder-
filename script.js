document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const html = document.documentElement;
            html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
            localStorage.setItem('theme', html.dataset.theme);
        });
    }

    // On page load, apply saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
    }

    // Sidebar items active state
    const sidebarItems = document.querySelectorAll('.sidebar-menu a');

// Function to set active class
function setActiveClass() {
    sidebarItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
}

// Add event listeners to sidebar items
sidebarItems.forEach(item => {
    item.addEventListener('click', setActiveClass);
});

// On page load, check the current URL and add the active class
window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); // Get current page file name
    sidebarItems.forEach(item => {
        if (item.getAttribute('href').includes(currentPage)) {
            item.classList.add('active');
        }
    });
});


    // Sidebar mobile toggle
    const sidebarToggle = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Notification click
    const notifications = document.getElementById('notifications');
    if (notifications) {
        notifications.addEventListener('click', () => {
            console.log("You clicked on notifications!");
        });
    }

    // Modal logic
    const modals = {
        login: document.getElementById('login-modal'),
        signup: document.getElementById('signup-modal'),
        jobDetail: document.getElementById('job-detail-modal')
    };

    // Only set up modal functionality if modals exist
    const allModalsExist = Object.values(modals).every(modal => modal !== null);
    
    if (allModalsExist) {
        const openModal = (modalId) => modals[modalId]?.classList.add('active');
        const closeModal = (modalId) => modals[modalId]?.classList.remove('active');

        const loginBtn = document.getElementById('login-btn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => openModal('login'));
        }

        const signupBtn = document.getElementById('signup-btn');
        if (signupBtn) {
            signupBtn.addEventListener('click', () => openModal('signup'));
        }

        // Close modal when clicking outside
        Object.values(modals).forEach(modal => {
            if (modal) {
                modal.addEventListener('click', e => {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                    }
                });
            }
        });
    }

    // Dummy search button action
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert("Search feature is under construction!");
        });
    }

    console.log("JS Loaded Successfully 🚀");
});