document.addEventListener("DOMContentLoaded", () => {

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.documentElement.dataset.theme = 
            document.documentElement.dataset.theme === "light" ? "dark" : "light";
    });

    // Sidebar mobile toggle
    const sidebarToggle = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Notification click
    const notifications = document.getElementById('notifications');
    notifications.addEventListener('click', () => {
        console.log("You clicked on notifications!");
    });

    // Modal logic
    const modals = {
        login: document.getElementById('login-modal'),
        signup: document.getElementById('signup-modal'),
        jobDetail: document.getElementById('job-detail-modal')
    };

    const openModal = (modalId) => modals[modalId].classList.add('active');
    const closeModal = (modalId) => modals[modalId].classList.remove('active');

    document.getElementById('login-btn').addEventListener('click', () => openModal('login'));
    document.getElementById('signup-btn').addEventListener('click', () => openModal('signup'));

    // Close modal when clicking outside
    Object.values(modals).forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Dummy search button action
    const searchBtn = document.querySelector('.search-btn');
    searchBtn?.addEventListener('click', () => {
        alert("Search feature is under construction!");
    });

    console.log("JS Loaded Successfully 🚀");
});
