// Mock data for jobs
const jobData = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp",
        logo: "building",
        location: "Remote",
        type: "Full-time",
        salary: "DT80,000 - DT100,000",
        posted: "2 days ago",
        skills: ["JavaScript", "React", "CSS", "HTML"],
        description: "We are looking for an experienced Frontend Developer to join our team...",
        requirements: "5+ years of experience with modern JavaScript frameworks..."
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "CreativeMinds",
        logo: "palette",
        location: "New York, NY",
        type: "Contract",
        salary: "DT70 - DT85/hour",
        posted: "1 week ago",
        skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
        description: "Join our design team to create beautiful and intuitive user interfaces..."
    },
    {
        id: 3,
        title: "Backend Engineer",
        company: "DataSystems",
        logo: "server",
        location: "Remote",
        type: "Full-time",
        salary: "DT90,000 - DT120,000",
        posted: "3 days ago",
        skills: ["Node.js", "Python", "MongoDB", "AWS"],
        description: "We're seeking a talented Backend Engineer to help scale our infrastructure..."
    },
    {
        id: 4,
        title: "Marketing Intern",
        company: "GrowthHackers",
        logo: "bullhorn",
        location: "Chicago, IL",
        type: "Internship",
        salary: "$20 - $25/hour",
        posted: "Just now",
        skills: ["Social Media", "Content Creation", "Analytics"],
        description: "Great opportunity for marketing students to gain hands-on experience..."
    },
    {
        id: 5,
        title: "Freelance Video Editor",
        company: "VisualStudio",
        logo: "video",
        location: "Remote",
        type: "Freelance",
        salary: "Project-based",
        posted: "5 days ago",
        skills: ["Adobe Premiere", "After Effects", "Video Production"],
        description: "Looking for a talented video editor for ongoing projects..."
    },
    {
        id: 6,
        title: "Full Stack Developer",
        company: "WebSolutions",
        logo: "code",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$100,000 - $130,000",
        posted: "1 day ago",
        skills: ["JavaScript", "React", "Node.js", "PostgreSQL"],
        description: "Join our innovative team building web applications that make a difference..."
    }
];

// User profile data
let userData = {
    name: "Guest User",
    title: "Welcome!",
    email: "",
    phone: "",
    location: "",
    skills: [],
    bio: "",
    experience: [],
    education: [],
    appliedJobs: [],
    savedJobs: [],
    profileComplete: 0
};

// DOM content loaded event
document.addEventListener('DOMContentLoaded', () => {
    // Load user data from localStorage or use default guest data
    loadUserData();
    
    // Initialize theme based on user preference
    initTheme();
    
    // Initialize sidebar toggle functionality
    initSidebar();
    
    // Initialize page navigation
    initPageNavigation();
    
    // Load dashboard content
    loadDashboard();
    
    // Add event listeners for modals
    initModals();
    
    // Initialize notifications
    initNotifications();
});

// Load user data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
        userData = JSON.parse(savedData);
        updateUserInterface();
    }
}

// Update UI with user data
function updateUserInterface() {
    // Update sidebar user info
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-title').textContent = userData.title || 'Welcome!';
    
    // Update profile avatar if available
    if (userData.avatar) {
        document.getElementById('profile-avatar').src = userData.avatar;
    }
}

// Initialize theme
function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    updateThemeIcon(theme);
    
    // Add theme toggle event listener
    themeToggle.addEventListener('click', toggleTheme);
}

// Toggle between light and dark theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme);
}

// Update theme toggle icon
function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Initialize sidebar toggle functionality
function initSidebar() {
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('main-content');
    
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-hidden');
        content.classList.toggle('content-full');
    });
    
    // Close sidebar on small screens by default
    if (window.innerWidth < 992) {
        sidebar.classList.add('sidebar-hidden');
        content.classList.add('content-full');
    }
}

// Initialize page navigation
function initPageNavigation() {
    const navLinks = document.querySelectorAll('.top-nav a, .sidebar-menu a');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const targetId = 'page-' + href.replace('.html', '');

            // Hide all pages
            pages.forEach(page => page.classList.remove('active-page'));

            // Show target page
            const targetPage = document.getElementById(targetId);
            if (targetPage) targetPage.classList.add('active-page');
        });
    });
}

function loadDashboard() {
    const dashboard = document.getElementById('page-dashboard');

    dashboard.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <h3>5</h3>
                    <div class="stat-icon"><i class="fas fa-briefcase"></i></div>
                </div>
                <p>Jobs Applied</p>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <h3>2</h3>
                    <div class="stat-icon"><i class="fas fa-heart"></i></div>
                </div>
                <p>Saved Jobs</p>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <h3>${userData.profileComplete}%</h3>
                    <div class="stat-icon"><i class="fas fa-user-circle"></i></div>
                </div>
                <p>Profile Completed</p>
            </div>
        </div>
    `;
}

function initModals() {
    // Placeholder: You can insert login/signup modal content dynamically if needed
}

function initNotifications() {
    const notifIcon = document.querySelector('.notifications-icon');
    notifIcon.addEventListener('click', () => {
        alert("You have new notifications! (Mock interaction)");
    });
}
// Enhanced script.js with additional functionality

// Mock data for jobs (existing code)
// User profile data (existing code)
// DOM content loaded event (existing code)

// Load jobs page content
function loadJobsPage() {
    const jobsContainer = document.getElementById('page-jobs');
    
    // Create filters section
    let filtersHTML = `
        <div class="jobs-filters">
            <h2>Find Your Next Opportunity</h2>
            <div class="filter-row">
                <div class="filter-group">
                    <label for="keyword">Keywords</label>
                    <input type="text" id="keyword" placeholder="Job title, skills, or keywords">
                </div>
                <div class="filter-group">
                    <label for="location">Location</label>
                    <input type="text" id="location" placeholder="City, state, or remote">
                </div>
            </div>
            <div class="filter-row">
                <div class="filter-group">
                    <label for="job-type">Job Type</label>
                    <select id="job-type">
                        <option value="">All Types</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="freelance">Freelance</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="experience">Experience Level</label>
                    <select id="experience">
                        <option value="">All Levels</option>
                        <option value="entry">Entry Level</option>
                        <option value="mid">Mid Level</option>
                        <option value="senior">Senior Level</option>
                    </select>
                </div>
            </div>
            <div class="filter-actions">
                <button class="btn btn-outline" id="reset-filters"><i class="fas fa-redo"></i> Reset</button>
                <button class="btn btn-primary" id="apply-filters"><i class="fas fa-search"></i> Search Jobs</button>
            </div>
        </div>
    `;
    
    // Create jobs grid
    let jobsGridHTML = '<div class="jobs-grid">';
    
    // Loop through job data and create job cards
    jobData.forEach(job => {
        jobsGridHTML += `
            <div class="job-card" data-job-id="${job.id}">
                <div class="job-card-header">
                    <button class="favorite" data-job-id="${job.id}">
                        <i class="far fa-heart"></i>
                    </button>
                    <div class="company-logo">
                        <i class="fas fa-${job.logo}"></i>
                    </div>
                    <h3>${job.title}</h3>
                    <p>${job.company}</p>
                </div>
                <div class="job-card-body">
                    <div class="tag-list">
                        ${job.skills.slice(0, 3).map(skill => `<span class="tag">${skill}</span>`).join('')}
                    </div>
                    <div class="job-meta">
                        <div class="job-meta-item">
                            <i class="fas fa-map-marker-alt"></i> ${job.location}
                        </div>
                        <div class="job-meta-item">
                            <i class="fas fa-briefcase"></i> ${job.type}
                        </div>
                    </div>
                    <div class="job-meta">
                        <div class="job-meta-item">
                            <i class="fas fa-money-bill-wave"></i> ${job.salary}
                        </div>
                    </div>
                </div>
                <div class="job-card-footer">
                    <span class="job-posted">${job.posted}</span>
                    <button class="btn btn-primary btn-sm view-job" data-job-id="${job.id}">View Details</button>
                </div>
            </div>
        `;
    });
    
    jobsGridHTML += '</div>';
    
    // Combine filters and jobs grid
    jobsContainer.innerHTML = filtersHTML + jobsGridHTML;
    
    // Add event listeners for job cards
    document.querySelectorAll('.view-job').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const jobId = parseInt(e.target.getAttribute('data-job-id'));
            showJobDetails(jobId);
        });
    });
    
    // Add event listeners for favorite buttons
    document.querySelectorAll('.favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jobId = parseInt(e.currentTarget.getAttribute('data-job-id'));
            toggleFavorite(jobId, e.currentTarget);
        });
    });
    
    // Add event listeners for filter buttons
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
}

// Show job details in modal
function showJobDetails(jobId) {
    const job = jobData.find(j => j.id === jobId);
    if (!job) return;
    
    const modal = document.getElementById('job-detail-modal');
    const modalContent = modal.querySelector('.modal');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${job.title}</h2>
            <button class="modal-close" id="close-job-modal"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <div class="job-detail-company">
                <div class="company-logo">
                    <i class="fas fa-${job.logo}"></i>
                </div>
                <div>
                    <h3>${job.company}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                </div>
                <button class="btn btn-outline favorite-large ${userData.savedJobs.includes(job.id) ? 'active' : ''}" data-job-id="${job.id}">
                    <i class="${userData.savedJobs.includes(job.id) ? 'fas' : 'far'} fa-heart"></i> ${userData.savedJobs.includes(job.id) ? 'Saved' : 'Save Job'}
                </button>
            </div>
            
            <div class="job-detail-info">
                <div class="job-meta">
                    <div class="job-meta-item"><i class="fas fa-briefcase"></i> ${job.type}</div>
                    <div class="job-meta-item"><i class="fas fa-money-bill-wave"></i> ${job.salary}</div>
                    <div class="job-meta-item"><i class="fas fa-clock"></i> ${job.posted}</div>
                </div>
            </div>
            
            <div class="job-detail-section">
                <h3>Description</h3>
                <p>${job.description}</p>
            </div>
            
            <div class="job-detail-section">
                <h3>Requirements</h3>
                <p>${job.requirements || 'No specific requirements listed.'}</p>
            </div>
            
            <div class="job-detail-section">
                <h3>Skills</h3>
                <div class="tag-list">
                    ${job.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-outline" id="cancel-application">Cancel</button>
            <button class="btn btn-primary" id="apply-job" data-job-id="${job.id}">Apply Now</button>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Add event listeners for modal buttons
    document.getElementById('close-job-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    document.getElementById('cancel-application').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    document.getElementById('apply-job').addEventListener('click', (e) => {
        const jobId = parseInt(e.target.getAttribute('data-job-id'));
        applyForJob(jobId);
        modal.classList.remove('active');
    });
    
    // Add event listener for favorite button in modal
    modalContent.querySelector('.favorite-large').addEventListener('click', (e) => {
        const jobId = parseInt(e.currentTarget.getAttribute('data-job-id'));
        toggleFavorite(jobId, e.currentTarget, true);
    });
}

// Apply for a job
function applyForJob(jobId) {
    // Check if user is logged in
    if (!userData.email) {
        showLoginPrompt("Please log in to apply for jobs.");
        return;
    }
    
    // Check if already applied
    if (userData.appliedJobs.includes(jobId)) {
        showToast("You've already applied for this job!", "info");
        return;
    }
    
    // Add job to applied jobs
    userData.appliedJobs.push(jobId);
    saveUserData();
    showToast("Application submitted successfully!", "success");
    
    // Update UI if on dashboard
    if (document.getElementById('page-dashboard').classList.contains('active-page')) {
        loadDashboard();
    }
}

// Toggle favorite job
function toggleFavorite(jobId, button, isLarge = false) {
    const index = userData.savedJobs.indexOf(jobId);
    
    if (index === -1) {
        // Add to favorites
        userData.savedJobs.push(jobId);
        if (isLarge) {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-heart"></i> Saved';
        } else {
            button.querySelector('i').classList.remove('far');
            button.querySelector('i').classList.add('fas');
        }
        showToast("Job saved to favorites!", "success");
    } else {
        // Remove from favorites
        userData.savedJobs.splice(index, 1);
        if (isLarge) {
            button.classList.remove('active');
            button.innerHTML = '<i class="far fa-heart"></i> Save Job';
        } else {
            button.querySelector('i').classList.remove('fas');
            button.querySelector('i').classList.add('far');
        }
        showToast("Job removed from favorites.", "info");
    }
    
    saveUserData();
    
    // Update UI if on dashboard
    if (document.getElementById('page-dashboard').classList.contains('active-page')) {
        loadDashboard();
    }
}

// Load applications page
function loadApplicationsPage() {
    const applicationsContainer = document.getElementById('page-applications');
    
    // Check if user is logged in
    if (!userData.email) {
        applicationsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-user-lock"></i>
                <h2>Please Log In</h2>
                <p>You need to log in to view your applications.</p>
                <button class="btn btn-primary" id="login-from-applications">Log In</button>
            </div>
        `;
        
        document.getElementById('login-from-applications').addEventListener('click', () => {
            showLoginModal();
        });
        
        return;
    }
    
    // If no applications
    if (userData.appliedJobs.length === 0) {
        applicationsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-file-alt"></i>
                <h2>No Applications Yet</h2>
                <p>You haven't applied to any jobs yet. Start exploring opportunities!</p>
                <a href="jobs.html" class="btn btn-primary">Find Jobs</a>
            </div>
        `;
        return;
    }
    
    // Create applications list
    let applicationsHTML = `
        <h2>Your Applications</h2>
        <div class="applications-list">
    `;
    
    // Loop through applied jobs
    userData.appliedJobs.forEach(jobId => {
        const job = jobData.find(j => j.id === jobId);
        if (!job) return;
        
        applicationsHTML += `
            <div class="application-card">
                <div class="application-header">
                    <div class="company-logo">
                        <i class="fas fa-${job.logo}"></i>
                    </div>
                    <div class="application-info">
                        <h3>${job.title}</h3>
                        <p>${job.company} - ${job.location}</p>
                    </div>
                    <div class="application-status">
                        <span class="status-badge pending">Under Review</span>
                    </div>
                </div>
                <div class="application-body">
                    <div class="application-meta">
                        <div class="application-meta-item">
                            <i class="fas fa-calendar-alt"></i> Applied on: April 8, 2025
                        </div>
                        <div class="application-meta-item">
                            <i class="fas fa-briefcase"></i> ${job.type}
                        </div>
                    </div>
                    <div class="application-actions">
                        <button class="btn btn-outline btn-sm" data-job-id="${job.id}">View Job</button>
                        <button class="btn btn-primary btn-sm">Check Status</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    applicationsHTML += '</div>';
    applicationsContainer.innerHTML = applicationsHTML;
    
    // Add event listeners for application cards
    document.querySelectorAll('.application-actions .btn-outline').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const jobId = parseInt(e.target.getAttribute('data-job-id'));
            showJobDetails(jobId);
        });
    });
}

// Show login modal
function showLoginModal() {
    const modal = document.getElementById('login-modal');
    const modalContent = modal.querySelector('.modal');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>Log In</h2>
            <button class="modal-close" id="close-login-modal"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <form id="login-form">
                <div class="form-group">
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" required>
                </div>
                <div class="form-group">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" required>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="remember-me">
                    <label for="remember-me">Remember me</label>
                </div>
                <div class="form-action">
                    <button type="submit" class="btn btn-primary btn-block">Log In</button>
                </div>
                <div class="form-footer">
                    <p>Don't have an account? <a href="#" id="switch-to-signup">Sign Up</a></p>
                </div>
            </form>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Add event listeners
    document.getElementById('close-login-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    document.getElementById('switch-to-signup').addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
        showSignupModal();
    });
    
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
    });
}

// Handle login form submission
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // In a real app, you would validate credentials with a server
    // For demo purposes, we'll just set the user as logged in
    userData.email = email;
    userData.name = email.split('@')[0]; // Use part of email as name
    userData.title = "Freelancer"; // Default title
    userData.profileComplete = 30; // Basic profile completion
    
    saveUserData();
    updateUserInterface();
    
    document.getElementById('login-modal').classList.remove('active');
    showToast("Successfully logged in!", "success");
    
    // Refresh current page content
    refreshCurrentPage();
}

// Initialize everything when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Existing initialization code...
    
    // Add additional page loading functionality
    loadJobsPage();
    loadApplicationsPage();
    
    // Initialize modals with content
    initModalsWithContent();
    
    // Initialize toast container
    initToastContainer();
});

// Initialize modals with content
function initModalsWithContent() {
    // Login modal
    const loginModal = document.createElement('div');
    loginModal.className = 'modal-overlay';
    loginModal.id = 'login-modal';
    loginModal.innerHTML = '<div class="modal"></div>';
    document.body.appendChild(loginModal);
    
    // Signup modal
    const signupModal = document.createElement('div');
    signupModal.className = 'modal-overlay';
    signupModal.id = 'signup-modal';
    signupModal.innerHTML = '<div class="modal"></div>';
    document.body.appendChild(signupModal);
    
    // Add event listeners for modal buttons
    document.getElementById('login-btn').addEventListener('click', showLoginModal);
    document.getElementById('signup-btn').addEventListener('click', showSignupModal);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Set icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <div class="toast-content">${message}</div>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto-remove toast after 4 seconds
    setTimeout(() => {
        toast.classList.add('toast-hiding');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
    
    // Add close button functionality
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.classList.add('toast-hiding');
        setTimeout(() => {
            toast.remove();
        }, 300);
    });
}

// Initialize toast container
function initToastContainer() {
    if (!document.getElementById('toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Reset filters on jobs page
function resetFilters() {
    document.getElementById('keyword').value = '';
    document.getElementById('location').value = '';
    document.getElementById('job-type').value = '';
    document.getElementById('experience').value = '';
    
    // In a real app, you would refresh the job listings
    showToast("Filters reset", "info");
}

// Apply filters on jobs page
function applyFilters() {
    // In a real app, you would filter job listings based on input values
    const keyword = document.getElementById('keyword').value;
    const location = document.getElementById('location').value;
    const jobType = document.getElementById('job-type').value;
    const experience = document.getElementById('experience').value;
    
    showToast("Filters applied - showing matching jobs", "success");
    
    // For demonstration, just show what filters were applied
    console.log("Applied filters:", { keyword, location, jobType, experience });
}

// Refresh current page content based on active page
function refreshCurrentPage() {
    if (document.getElementById('page-dashboard').classList.contains('active-page')) {
        loadDashboard();
    } else if (document.getElementById('page-jobs').classList.contains('active-page')) {
        loadJobsPage();
    } else if (document.getElementById('page-applications').classList.contains('active-page')) {
        loadApplicationsPage();
    }
}
// Function to load messages page
function loadMessagesPage() {
    const messagesContainer = document.getElementById('page-messages');
    
    // Check if user is logged in
    if (!userData.email) {
        messagesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-comment-slash"></i>
                <h2>Please Log In</h2>
                <p>You need to log in to view your messages.</p>
                <button class="btn btn-primary" id="login-from-messages">Log In</button>
            </div>
        `;
        
        document.getElementById('login-from-messages').addEventListener('click', () => {
            showLoginModal();
        });
        
        return;
    }
    
    // Mock messages data - in a real app, this would come from a server
    const messages = [
        {
            id: 1,
            sender: "TechCorp HR",
            avatar: "building",
            preview: "Thank you for your application to the Senior Frontend Developer role...",
            unread: true,
            time: "10:30 AM"
        },
        {
            id: 2,
            sender: "CreativeMinds Recruiting",
            avatar: "palette",
            preview: "We've reviewed your portfolio and would like to schedule an interview...",
            unread: false,
            time: "Yesterday"
        },
        {
            id: 3,
            sender: "DataSystems Inc.",
            avatar: "server",
            preview: "Following up on your application for the Backend Engineer position...",
            unread: true,
            time: "Apr 8"
        }
    ];
    
    // Create messages HTML
    let messagesHTML = `
        <div class="messages-container">
            <div class="messages-header">
                <h2>Messages</h2>
                <div class="messages-actions">
                    <button class="btn btn-sm btn-outline"><i class="fas fa-sync-alt"></i> Refresh</button>
                    <button class="btn btn-sm btn-primary"><i class="fas fa-plus"></i> New Message</button>
                </div>
            </div>
            
            <div class="message-list">
    `;
    
    // Add each message
    messages.forEach(message => {
        messagesHTML += `
            <div class="message-item ${message.unread ? 'unread' : ''}">
                <div class="message-avatar">
                    <i class="fas fa-${message.avatar}"></i>
                </div>
                <div class="message-content">
                    <div class="message-header">
                        <h4>${message.sender}</h4>
                        <span class="message-time">${message.time}</span>
                    </div>
                    <p class="message-preview">${message.preview}</p>
                </div>
                ${message.unread ? '<div class="unread-indicator"></div>' : ''}
            </div>
        `;
    });
    
    messagesHTML += `
            </div>
        </div>
    `;
    
    messagesContainer.innerHTML = messagesHTML;
    
    // Add event listeners for message items
    document.querySelectorAll('.message-item').forEach(item => {
        item.addEventListener('click', () => {
            showMessageDetail(parseInt(item.getAttribute('data-message-id')) || 1);
        });
    });
}

// Show message detail
function showMessageDetail(messageId) {
    // Create message detail modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'message-detail-modal';
    
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h2>Message from TechCorp HR</h2>
                <button class="modal-close" id="close-message-modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="message-detail-header">
                    <div class="message-avatar">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>TechCorp HR</h4>
                        <span class="message-time">10:30 AM - April 10, 2025</span>
                    </div>
                </div>
                
                <div class="message-detail-body">
                    <p>Hello ${userData.name || 'there'},</p>
                    <p>Thank you for your application to the Senior Frontend Developer role at TechCorp. We're impressed with your experience and qualifications.</p>
                    <p>We would like to schedule a technical interview with our engineering team. Could you please let us know your availability for next week?</p>
                    <p>Looking forward to hearing from you.</p>
                    <p>Best regards,<br>TechCorp HR Team</p>
                </div>
                
                <div class="message-reply">
                    <h4>Reply</h4>
                    <textarea placeholder="Write your reply..."></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" id="cancel-reply">Cancel</button>
                <button class="btn btn-primary" id="send-reply">Send Reply</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('close-message-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    document.getElementById('cancel-reply').addEventListener('click', () => {
        modal.remove();
    });
    
    document.getElementById('send-reply').addEventListener('click', () => {
        showToast("Reply sent successfully!", "success");
        modal.remove();
    });
}
// Function to load profile page
function loadProfilePage() {
    const profileContainer = document.getElementById('page-profile');
    
    // Check if user is logged in
    if (!userData.email) {
        profileContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-user-lock"></i>
                <h2>Please Log In</h2>
                <p>You need to log in to view and edit your profile.</p>
                <button class="btn btn-primary" id="login-from-profile">Log In</button>
            </div>
        `;
        
        document.getElementById('login-from-profile').addEventListener('click', () => {
            showLoginModal();
        });
        
        return;
    }
    
    // Create profile HTML
    const profileHTML = `
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-avatar">
                    <img src="${userData.avatar || 'https://via.placeholder.com/100'}" alt="Profile Picture">
                    <div class="upload-avatar">
                        <i class="fas fa-camera"></i> Update
                    </div>
                </div>
                <h2 class="profile-name">${userData.name}</h2>
                <p class="profile-title">${userData.title || 'Freelancer'}</p>
                
                <div class="profile-stats">
                    <div class="profile-stat">
                        <div class="profile-stat-value">${userData.appliedJobs ? userData.appliedJobs.length : 0}</div>
                        <div class="profile-stat-label">Applications</div>
                    </div>
                    <div class="profile-stat">
                        <div class="profile-stat-value">${userData.savedJobs ? userData.savedJobs.length : 0}</div>
                        <div class="profile-stat-label">Saved Jobs</div>
                    </div>
                    <div class="profile-stat">
                        <div class="profile-stat-value">${userData.profileComplete || 0}%</div>
                        <div class="profile-stat-label">Complete</div>
                    </div>
                </div>
            </div>
            
            <div class="profile-body">
                <div class="profile-section">
                    <div class="profile-section-title">
                        <h3>Profile Completion</h3>
                        <a href="#" id="complete-profile-btn">Complete Profile</a>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${userData.profileComplete || 0}%"></div>
                    </div>
                </div>
                
                <div class="profile-section">
                    <div class="profile-section-title">
                        <h3>Personal Information</h3>
                        <a href="#" id="edit-info-btn">Edit</a>
                    </div>
                    <div id="info-display">
                        <div class="info-grid">
                            <div class="info-item">
                                <div class="info-label">Email</div>
                                <div class="info-value">${userData.email || 'Not provided'}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Phone</div>
                                <div class="info-value">${userData.phone || 'Not provided'}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Location</div>
                                <div class="info-value">${userData.location || 'Not provided'}</div>
                            </div>
                        </div>
                    </div>
                    <div id="info-edit" style="display: none;">
                        <form id="personal-info-form">
                            <div class="profile-form-group">
                                <label for="profile-email">Email</label>
                                <input type="email" id="profile-email" value="${userData.email || ''}">
                            </div>
                            <div class="profile-form-group">
                                <label for="profile-phone">Phone</label>
                                <input type="tel" id="profile-phone" value="${userData.phone || ''}">
                            </div>
                            <div class="profile-form-group">
                                <label for="profile-location">Location</label>
                                <input type="text" id="profile-location" value="${userData.location || ''}">
                            </div>
                            <div class="form-actions">
                                <button type="button" class="btn btn-outline" id="cancel-info-btn">Cancel</button>
                                <button type="submit" class="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="profile-section">
                    <div class="profile-section-title">
                        <h3>Bio</h3>
                        <a href="#" id="edit-bio-btn">Edit</a>
                    </div>
                    <div id="bio-display">
                        <p>${userData.bio || 'No bio provided yet. Tell potential employers about yourself!'}</p>
                    </div>
                    <div id="bio-edit" style="display: none;">
                        <form id="bio-form">
                            <div class="profile-form-group">
                                <textarea id="profile-bio">${userData.bio || ''}</textarea>
                            </div>
                            <div class="form-actions">
                                <button type="button" class="btn btn-outline" id="cancel-bio-btn">Cancel</button>
                                <button type="submit" class="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="profile-section">
                    <div class="profile-section-title">
                        <h3>Skills</h3>
                        <a href="#" id="add-skill-btn">Add Skill</a>
                    </div>
                    <div class="skill-list" id="skills-list">
                        ${(userData.skills || []).map(skill => `
                            <div class="skill-item">
                                ${skill}
                                <i class="fas fa-times" data-skill="${skill}"></i>
                            </div>
                        `).join('') || '<p>No skills added yet.</p>'}
                    </div>
                    <div id="skill-add" style="display: none;">
                        <form id="skill-form" class="inline-form">
                            <div class="profile-form-group">
                                <input type="text" id="new-skill" placeholder="Enter a skill">
                            </div>
                            <button type="submit" class="btn btn-primary btn-sm">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    profileContainer.innerHTML = profileHTML;
    
    // Add event listeners for profile interactions
    addProfileEventListeners();
}

// Add event listeners for profile page
function addProfileEventListeners() {
    // Edit personal information
    const editInfoBtn = document.getElementById('edit-info-btn');
    if (editInfoBtn) {
        editInfoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('info-display').style.display = 'none';
            document.getElementById('info-edit').style.display = 'block';
        });
    }
    
    const cancelInfoBtn = document.getElementById('cancel-info-btn');
    if (cancelInfoBtn) {
        cancelInfoBtn.addEventListener('click', () => {
            document.getElementById('info-edit').style.display = 'none';
            document.getElementById('info-display').style.display = 'block';
        });
    }
    
    // Personal info form submission
    const personalInfoForm = document.getElementById('personal-info-form');
    if (personalInfoForm) {
        personalInfoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            userData.email = document.getElementById('profile-email').value;
            userData.phone = document.getElementById('profile-phone').value;
            userData.location = document.getElementById('profile-location').value;
            
            // Calculate new profile completion percentage
            updateProfileCompletion();
            
            // Save user data
            saveUserData();
            
            // Update UI
            document.getElementById('info-edit').style.display = 'none';
            document.getElementById('info-display').style.display = 'block';
            
            // Refresh profile page
            loadProfilePage();
            
            showToast("Personal information updated!", "success");
        });
    }
    
    // Edit bio
    const editBioBtn = document.getElementById('edit-bio-btn');
    if (editBioBtn) {
        editBioBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('bio-display').style.display = 'none';
            document.getElementById('bio-edit').style.display = 'block';
        });
    }
    
    const cancelBioBtn = document.getElementById('cancel-bio-btn');
    if (cancelBioBtn) {
        cancelBioBtn.addEventListener('click', () => {
            document.getElementById('bio-edit').style.display = 'none';
            document.getElementById('bio-display').style.display = 'block';
        });
    }
    
    // Bio form submission
    const bioForm = document.getElementById('bio-form');
    if (bioForm) {
        bioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            userData.bio = document.getElementById('profile-bio').value;
            
            // Calculate new profile completion percentage
            updateProfileCompletion();
            
            // Save user data
            saveUserData();
            
            // Update UI
            document.getElementById('bio-edit').style.display = 'none';
            document.getElementById('bio-display').style.display = 'block';
            
            // Refresh profile page
            loadProfilePage();
            
            showToast("Bio updated!", "success");
        });
    }
    
    // Add skill
    const addSkillBtn = document.getElementById('add-skill-btn');
    if (addSkillBtn) {
        addSkillBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('skill-add').style.display = 'block';
        });
    }
    
    // Skill form submission
    const skillForm = document.getElementById('skill-form');
    if (skillForm) {
        skillForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newSkill = document.getElementById('new-skill').value.trim();
            if (newSkill) {
                if (!userData.skills) userData.skills = [];
                
                // Check if skill already exists
                if (!userData.skills.includes(newSkill)) {
                    userData.skills.push(newSkill);
                    
                    // Calculate new profile completion percentage
                    updateProfileCompletion();
                    
                    // Save user data
                    saveUserData();
                    
                    // Refresh profile page
                    loadProfilePage();
                    
                    showToast("Skill added!", "success");
                } else {
                    showToast("This skill is already in your profile", "warning");
                }
            }
        });
    }
    
    // Remove skill
    const skillRemoveBtns = document.querySelectorAll('.skill-item i');
    skillRemoveBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const skill = btn.getAttribute('data-skill');
            
            // Remove skill from user data
            userData.skills = userData.skills.filter(s => s !== skill);
            
            // Calculate new profile completion percentage
            updateProfileCompletion();
            
            // Save user data
            saveUserData();
            
            // Refresh profile page
            loadProfilePage();
            
            showToast("Skill removed", "info");
        });
    });
}

// Calculate profile completion percentage
function updateProfileCompletion() {
    let completionScore = 0;
    let totalFields = 5; // email, phone, location, bio, skills
    
    if (userData.email) completionScore++;
    if (userData.phone) completionScore++;
    if (userData.location) completionScore++;
    if (userData.bio) completionScore++;
    if (userData.skills && userData.skills.length > 0) completionScore++;
    
    userData.profileComplete = Math.round((completionScore / totalFields) * 100);
    
    // Update dashboard if it's the active page
    if (document.getElementById('page-dashboard').classList.contains('active-page')) {
        loadDashboard();
    }
}
// Show signup modal
function showSignupModal() {
    const modal = document.getElementById('signup-modal');
    const modalContent = modal.querySelector('.modal');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>Create Account</h2>
            <button class="modal-close" id="close-signup-modal"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <form id="signup-form">
                <div class="form-group">
                    <label for="signup-name">Full Name</label>
                    <input type="text" id="signup-name" required>
                </div>
                <div class="form-group">
                    <label for="signup-email">Email</label>
                    <input type="email" id="signup-email" required>
                </div>
                <div class="form-group">
                    <label for="signup-password">Password</label>
                    <input type="password" id="signup-password" required>
                </div>
                <div class="form-group">
                    <label for="signup-confirm">Confirm Password</label>
                    <input type="password" id="signup-confirm" required>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="terms-agree" required>
                    <label for="terms-agree">I agree to the Terms & Conditions</label>
                </div>
                <div class="form-action">
                    <button type="submit" class="btn btn-primary btn-block">Create Account</button>
                </div>
                <div class="form-footer">
                    <p>Already have an account? <a href="#" id="switch-to-login">Log In</a></p>
                </div>
            </form>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Add event listeners
    document.getElementById('close-signup-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    document.getElementById('switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
        showLoginModal();
    });
    
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        handleSignup();
    });
}

// Handle signup form submission
function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    // Basic validation
    if (password !== confirm) {
        showToast("Passwords don't match!", "error");
        return;
    }
    
    // In a real app, you would send this data to a server
    // For demo purposes, we'll just set the user as registered and logged in
    userData = {
        name: name,
        email: email,
        title: "Freelancer", // Default title
        phone: "",
        location: "",
        skills: [],
        bio: "",
        experience: [],
        education: [],
        appliedJobs: [],
        savedJobs: [],
        profileComplete: 20 // Basic profile completion
    };
    
    saveUserData();
    updateUserInterface();
    
    document.getElementById('signup-modal').classList.remove('active');
    showToast("Account created successfully!", "success");
    
    // Show welcome modal with profile completion suggestion
    showWelcomeModal();
    
    // Refresh current page content
    refreshCurrentPage();
}

// Show welcome modal for new users
function showWelcomeModal() {
    // Create welcome modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'welcome-modal';
    
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h2>Welcome to Freelance & Internship Hub!</h2>
                <button class="modal-close" id="close-welcome-modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="welcome-message">
                    <i class="fas fa-user-plus"></i>
                    <h3>Thanks for joining us, ${userData.name}!</h3>
                    <p>Your account has been created successfully. To get the most out of our platform, we recommend completing your profile.</p>
                    <p>A complete profile increases your chances of getting noticed by employers!</p>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${userData.profileComplete}%"></div>
                </div>
                <p class="profile-progress-text">Your profile is ${userData.profileComplete}% complete</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" id="later-btn">I'll do it later</button>
                <button class="btn btn-primary" id="complete-profile-welcome-btn">Complete Profile</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('close-welcome-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    document.getElementById('later-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    document.getElementById('complete-profile-welcome-btn').addEventListener('click', () => {
        modal.remove();
        
        // Navigate to profile page
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active-page'));
        document.getElementById('page-profile').classList.add('active-page');
        
        // Load profile page
        loadProfilePage();
    });
}

// Login prompt modal
function showLoginPrompt(message) {
    // Create login prompt modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'login-prompt-modal';
    
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h2>Login Required</h2>
                <button class="modal-close" id="close-login-prompt"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="login-prompt-message">
                    <i class="fas fa-user-lock"></i>
                    <p>${message}</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" id="cancel-login-prompt">Cancel</button>
                <button class="btn btn-primary" id="proceed-to-login">Log In</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add event listeners for modal buttons
    document.getElementById('close-login-prompt').addEventListener('click', () => {
        modal.remove();
    });

    document.getElementById('cancel-login-prompt').addEventListener('click', () => {
        modal.remove();
    });

    document.getElementById('proceed-to-login').addEventListener('click', () => {
        modal.remove();
        showLoginModal();
    });
}
// Complete Profile Page Implementation
function loadProfilePage() {
    const profileContainer = document.getElementById('page-profile');
    
    // Check if user is logged in
    if (!userData.email) {
        profileContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-user-lock"></i>
                <h2>Please Log In</h2>
                <p>You need to log in to view and edit your profile.</p>
                <button class="btn btn-primary" id="login-from-profile">Log In</button>
            </div>
        `;
        
        document.getElementById('login-from-profile').addEventListener('click', () => {
            showLoginModal();
        });
        
        return;
    }
    
    // Create expanded profile HTML with more sections
    const profileHTML = `
        <div class="profile-container">
            <div class="profile-header-section">
                <div class="profile-cover">
                    <button class="btn btn-sm btn-outline edit-cover-btn">
                        <i class="fas fa-camera"></i> Change Cover
                    </button>
                </div>
                <div class="profile-header-content">
                    <div class="profile-avatar-large">
                        <img src="${userData.avatar || 'https://via.placeholder.com/150'}" alt="Profile Picture">
                        <div class="upload-avatar">
                            <i class="fas fa-camera"></i>
                        </div>
                    </div>
                    <div class="profile-header-info">
                        <h2 class="profile-name">${userData.name}</h2>
                        <p class="profile-title">${userData.title || 'Freelancer'}</p>
                        <p class="profile-location">
                            <i class="fas fa-map-marker-alt"></i> ${userData.location || 'Location not specified'}
                        </p>
                    </div>
                    <div class="profile-actions">
                        <button class="btn btn-outline" id="profile-share-btn">
                            <i class="fas fa-share-alt"></i> Share Profile
                        </button>
                        <button class="btn btn-primary" id="profile-edit-btn">
                            <i class="fas fa-pencil-alt"></i> Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="profile-main">
                <div class="profile-sidebar">
                    <div class="profile-completion-card">
                        <h3>Profile Completion</h3>
                        <div class="circular-progress">
                            <div class="circular-progress-inner">
                                <span>${userData.profileComplete || 0}%</span>
                            </div>
                        </div>
                        <div class="completion-checklist">
                            <div class="checklist-item ${userData.bio ? 'completed' : ''}">
                                <i class="fas ${userData.bio ? 'fa-check-circle' : 'fa-circle'}"></i>
                                <span>Add a bio</span>
                            </div>
                            <div class="checklist-item ${userData.skills && userData.skills.length > 0 ? 'completed' : ''}">
                                <i class="fas ${userData.skills && userData.skills.length > 0 ? 'fa-check-circle' : 'fa-circle'}"></i>
                                <span>Add skills</span>
                            </div>
                            <div class="checklist-item ${userData.experience && userData.experience.length > 0 ? 'completed' : ''}">
                                <i class="fas ${userData.experience && userData.experience.length > 0 ? 'fa-check-circle' : 'fa-circle'}"></i>
                                <span>Add experience</span>
                            </div>
                            <div class="checklist-item ${userData.education && userData.education.length > 0 ? 'completed' : ''}">
                                <i class="fas ${userData.education && userData.education.length > 0 ? 'fa-check-circle' : 'fa-circle'}"></i>
                                <span>Add education</span>
                            </div>
                            <div class="checklist-item ${userData.phone ? 'completed' : ''}">
                                <i class="fas ${userData.phone ? 'fa-check-circle' : 'fa-circle'}"></i>
                                <span>Add contact info</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="profile-stats-card">
                        <h3>Profile Stats</h3>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <div class="stat-value">${userData.profileViews || 0}</div>
                                <div class="stat-label">Profile Views</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${userData.appliedJobs ? userData.appliedJobs.length : 0}</div>
                                <div class="stat-label">Applications</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${userData.savedJobs ? userData.savedJobs.length : 0}</div>
                                <div class="stat-label">Saved Jobs</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${userData.interviews || 0}</div>
                                <div class="stat-label">Interviews</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-info-card">
                        <div class="card-header">
                            <h3>Contact Information</h3>
                            <button class="btn btn-sm btn-link" id="edit-contact-btn">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </div>
                        <div class="contact-info-list">
                            <div class="contact-info-item">
                                <i class="fas fa-envelope"></i>
                                <span>${userData.email || 'Email not provided'}</span>
                            </div>
                            <div class="contact-info-item">
                                <i class="fas fa-phone"></i>
                                <span>${userData.phone || 'Phone not provided'}</span>
                            </div>
                            <div class="contact-info-item">
                                <i class="fas fa-globe"></i>
                                <span>${userData.website || 'Website not provided'}</span>
                            </div>
                            <div class="contact-info-item">
                                <i class="fab fa-linkedin"></i>
                                <span>${userData.linkedin || 'LinkedIn not linked'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="profile-content">
                    <!-- About Section -->
                    <div class="profile-section">
                        <div class="section-header">
                            <h3>About</h3>
                            <button class="btn btn-sm btn-link" id="edit-bio-btn">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </div>
                        <div class="section-content" id="bio-display">
                            <p>${userData.bio || 'No bio provided yet. Tell potential employers about yourself!'}</p>
                        </div>
                        <div class="section-edit" id="bio-edit" style="display: none;">
                            <form id="bio-form">
                                <div class="form-group">
                                    <textarea id="profile-bio" rows="4" placeholder="Write a brief introduction about yourself...">${userData.bio || ''}</textarea>
                                </div>
                                <div class="form-actions">
                                    <button type="button" class="btn btn-outline" id="cancel-bio-btn">Cancel</button>
                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <!-- Skills Section -->
                    <div class="profile-section">
                        <div class="section-header">
                            <h3>Skills</h3>
                            <button class="btn btn-sm btn-link" id="add-skill-btn">
                                <i class="fas fa-plus"></i> Add
                            </button>
                        </div>
                        <div class="section-content">
                            <div class="skills-tags" id="skills-list">
                                ${(userData.skills || []).length > 0 ? 
                                    (userData.skills || []).map(skill => `
                                        <div class="skill-tag">
                                            ${skill}
                                            <i class="fas fa-times remove-skill" data-skill="${skill}"></i>
                                        </div>
                                    `).join('') : 
                                    '<p class="empty-section-text">No skills added yet. Add skills to highlight your expertise.</p>'
                                }
                            </div>
                            <div id="skill-add" style="display: none;">
                                <form id="skill-form" class="inline-form">
                                    <div class="form-group">
                                        <input type="text" id="new-skill" placeholder="Enter a skill">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-sm">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Experience Section -->
                    <div class="profile-section">
                        <div class="section-header">
                            <h3>Work Experience</h3>
                            <button class="btn btn-sm btn-link" id="add-experience-btn">
                                <i class="fas fa-plus"></i> Add
                            </button>
                        </div>
                        <div class="section-content">
                            <div class="experience-list" id="experience-list">
                                ${(userData.experience || []).length > 0 ? 
                                    (userData.experience || []).map((exp, index) => `
                                        <div class="experience-item">
                                            <div class="experience-header">
                                                <div class="experience-logo">
                                                    <i class="fas fa-building"></i>
                                                </div>
                                                <div class="experience-info">
                                                    <h4>${exp.title}</h4>
                                                    <p class="company-name">${exp.company}</p>
                                                    <p class="experience-period">${exp.startDate} - ${exp.endDate || 'Present'}</p>
                                                    <p class="experience-location">${exp.location}</p>
                                                </div>
                                                <div class="experience-actions">
                                                    <button class="btn btn-sm btn-link edit-experience" data-index="${index}">
                                                        <i class="fas fa-pencil-alt"></i>
                                                    </button>
                                                    <button class="btn btn-sm btn-link delete-experience" data-index="${index}">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="experience-description">
                                                <p>${exp.description}</p>
                                            </div>
                                        </div>
                                    `).join('') : 
                                    '<p class="empty-section-text">No experience added yet. Add your work history to showcase your professional background.</p>'
                                }
                            </div>
                            <div id="experience-add" style="display: none;">
                                <form id="experience-form">
                                    <div class="form-row">
                                        <div class="form-group form-group-half">
                                            <label for="exp-title">Job Title</label>
                                            <input type="text" id="exp-title" placeholder="e.g. Frontend Developer">
                                        </div>
                                        <div class="form-group form-group-half">
                                            <label for="exp-company">Company</label>
                                            <input type="text" id="exp-company" placeholder="e.g. TechCorp">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group form-group-half">
                                            <label for="exp-start-date">Start Date</label>
                                            <input type="month" id="exp-start-date">
                                        </div>
                                        <div class="form-group form-group-half">
                                            <label for="exp-end-date">End Date</label>
                                            <input type="month" id="exp-end-date">
                                            <div class="form-check">
                                                <input type="checkbox" id="current-job">
                                                <label for="current-job">I currently work here</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exp-location">Location</label>
                                        <input type="text" id="exp-location" placeholder="e.g. San Francisco, CA">
                                    </div>
                                    <div class="form-group">
                                        <label for="exp-description">Description</label>
                                        <textarea id="exp-description" rows="4" placeholder="Describe your responsibilities and achievements..."></textarea>
                                    </div>
                                    <div class="form-actions">
                                        <button type="button" class="btn btn-outline" id="cancel-experience-btn">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Education Section -->
                    <div class="profile-section">
                        <div class="section-header">
                            <h3>Education</h3>
                            <button class="btn btn-sm btn-link" id="add-education-btn">
                                <i class="fas fa-plus"></i> Add
                            </button>
                        </div>
                        <div class="section-content">
                            <div class="education-list" id="education-list">
                                ${(userData.education || []).length > 0 ? 
                                    (userData.education || []).map((edu, index) => `
                                        <div class="education-item">
                                            <div class="education-header">
                                                <div class="education-logo">
                                                    <i class="fas fa-university"></i>
                                                </div>
                                                <div class="education-info">
                                                    <h4>${edu.degree}</h4>
                                                    <p class="institution-name">${edu.institution}</p>
                                                    <p class="education-period">${edu.startYear} - ${edu.endYear || 'Present'}</p>
                                                    <p class="education-field">${edu.fieldOfStudy}</p>
                                                </div>
                                                <div class="education-actions">
                                                    <button class="btn btn-sm btn-link edit-education" data-index="${index}">
                                                        <i class="fas fa-pencil-alt"></i>
                                                    </button>
                                                    <button class="btn btn-sm btn-link delete-education" data-index="${index}">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="education-description">
                                                <p>${edu.description || ''}</p>
                                            </div>
                                        </div>
                                    `).join('') : 
                                    '<p class="empty-section-text">No education added yet. Add your educational background to showcase your qualifications.</p>'
                                }
                            </div>
                            <div id="education-add" style="display: none;">
                                <form id="education-form">
                                    <div class="form-row">
                                        <div class="form-group form-group-half">
                                            <label for="edu-institution">Institution</label>
                                            <input type="text" id="edu-institution" placeholder="e.g. Stanford University">
                                        </div>
                                        <div class="form-group form-group-half">
                                            <label for="edu-degree">Degree</label>
                                            <input type="text" id="edu-degree" placeholder="e.g. Bachelor of Science">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="edu-field">Field of Study</label>
                                        <input type="text" id="edu-field" placeholder="e.g. Computer Science">
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group form-group-half">
                                            <label for="edu-start-year">Start Year</label>
                                            <input type="number" id="edu-start-year" min="1950" max="2030">
                                        </div>
                                        <div class="form-group form-group-half">
                                            <label for="edu-end-year">End Year</label>
                                            <input type="number" id="edu-end-year" min="1950" max="2030">
                                            <div class="form-check">
                                                <input type="checkbox" id="current-education">
                                                <label for="current-education">I'm currently studying here</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="edu-description">Description (Optional)</label>
                                        <textarea id="edu-description" rows="3" placeholder="Activities, achievements, etc."></textarea>
                                    </div>
                                    <div class="form-actions">
                                        <button type="button" class="btn btn-outline" id="cancel-education-btn">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    profileContainer.innerHTML = profileHTML;
    
    // Add event listeners for profile interactions
    addProfileEventListeners();
    addExperienceEducationListeners();
}
// Load saved jobs page
function loadSavedJobsPage() {
    const savedJobsContainer = document.getElementById('page-saved');
    
    // Check if user is logged in
    if (!userData.email) {
        savedJobsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart-broken"></i>
                <h2>Please Log In</h2>
                <p>You need to log in to view your saved jobs.</p>
                <button class="btn btn-primary" id="login-from-saved">Log In</button>
            </div>
        `;
        
        document.getElementById('login-from-saved').addEventListener('click', () => {
            showLoginModal();
        });
        
        return;
    }
    
    // If no saved jobs
    if (!userData.savedJobs || userData.savedJobs.length === 0) {
        savedJobsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h2>No Saved Jobs</h2>
                <p>You haven't saved any jobs yet. Jobs you save will appear here.</p>
                <a href="jobs.html" class="btn btn-primary">Find Jobs</a>
            </div>
        `;
        return;
    }
    
    // Create header for saved jobs page
    let savedJobsHTML = `
        <div class="saved-jobs-header">
            <h2><i class="fas fa-heart"></i> Saved Jobs</h2>
            <div class="saved-jobs-actions">
                <div class="search-box">
                    <input type="text" id="search-saved-jobs" placeholder="Search saved jobs...">
                    <i class="fas fa-search"></i>
                </div>
                <div class="sort-dropdown">
                    <button class="btn btn-outline btn-sm dropdown-toggle">
                        Sort By <i class="fas fa-caret-down"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Create jobs grid for saved jobs
    savedJobsHTML += '<div class="saved-jobs-grid">';
    
    // Filter jobData to show only saved jobs
    const savedJobs = jobData.filter(job => userData.savedJobs.includes(job.id));
    
    // Loop through saved jobs and create job cards
    savedJobs.forEach(job => {
        savedJobsHTML += `
            <div class="job-card" data-job-id="${job.id}">
                <div class="job-card-header">
                    <button class="favorite active" data-job-id="${job.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <div class="company-logo">
                        <i class="fas fa-${job.logo}"></i>
                    </div>
                    <h3>${job.title}</h3>
                    <p>${job.company}</p>
                </div>
                <div class="job-card-body">
                    <div class="tag-list">
                        ${job.skills.slice(0, 3).map(skill => `<span class="tag">${skill}</span>`).join('')}
                    </div>
                    <div class="job-meta">
                        <div class="job-meta-item">
                            <i class="fas fa-map-marker-alt"></i> ${job.location}
                        </div>
                        <div class="job-meta-item">
                            <i class="fas fa-briefcase"></i> ${job.type}
                        </div>
                    </div>
                    <div class="job-meta">
                        <div class="job-meta-item">
                            <i class="fas fa-money-bill-wave"></i> ${job.salary}
                        </div>
                    </div>
                </div>
                <div class="job-card-footer">
                    <span class="job-posted">${job.posted}</span>
                    <div class="job-actions">
                        <button class="btn btn-primary btn-sm view-job" data-job-id="${job.id}">View Details</button>
                        <button class="btn btn-success btn-sm apply-job" data-job-id="${job.id}">Apply Now</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    savedJobsHTML += '</div>';
    
    // Add saved jobs collections feature
    savedJobsHTML += `
        <div class="saved-collections">
            <div class="collections-header">
                <h3>Job Collections</h3>
                <button class="btn btn-sm btn-outline" id="create-collection-btn">
                    <i class="fas fa-folder-plus"></i> New Collection
                </button>
            </div>
            <div class="collections-grid">
                <div class="collection-card">
                    <div class="collection-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h4>Development Jobs</h4>
                    <p>3 jobs saved</p>
                </div>
                <div class="collection-card">
                    <div class="collection-icon">
                        <i class="fas fa-paint-brush"></i>
                    </div>
                    <h4>Design Jobs</h4>
                    <p>1 job saved</p>
                </div>
                <div class="collection-card add-collection">
                    <div class="collection-plus">
                        <i class="fas fa-plus"></i>
                    </div>
                    <h4>Create Collection</h4>
                </div>
            </div>
        </div>
    `;
    
    savedJobsContainer.innerHTML = savedJobsHTML;
    
    // Add event listeners for job cards
    document.querySelectorAll('.view-job').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const jobId = parseInt(e.target.getAttribute('data-job-id'));
            showJobDetails(jobId);
        });
    });
    
    // Add event listeners for apply buttons
    document.querySelectorAll('.apply-job').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const jobId = parseInt(e.target.getAttribute('data-job-id'));
            applyForJob(jobId);
        });
    });
    
    // Add event listeners for favorite buttons
    document.querySelectorAll('.favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jobId = parseInt(e.currentTarget.getAttribute('data-job-id'));
            toggleFavorite(jobId, e.currentTarget);
            
            // Since we're on the saved jobs page, we need to handle removing the card
            if (!userData.savedJobs.includes(jobId)) {
                const jobCard = document.querySelector(`.job-card[data-job-id="${jobId}"]`);
                if (jobCard) {
                    // Add animation class for smooth removal
                    jobCard.classList.add('job-card-removing');
                    
                    // Remove the element after animation completes
                    setTimeout(() => {
                        jobCard.remove();
                        
                        // If no saved jobs left, reload the page to show empty state
                        if (userData.savedJobs.length === 0) {
                            loadSavedJobsPage();
                        }
                    }, 300);
                }
            }
        });
    });
    
    // Add event listener for collection creation
    document.getElementById('create-collection-btn').addEventListener('click', showCreateCollectionModal);
    document.querySelector('.add-collection').addEventListener('click', showCreateCollectionModal);
}

// Show modal to create a new job collection
function showCreateCollectionModal() {
    // Create collection modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'collection-modal';
    
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h2>Create Job Collection</h2>
                <button class="modal-close" id="close-collection-modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <form id="collection-form">
                    <div class="form-group">
                        <label for="collection-name">Collection Name</label>
                        <input type="text" id="collection-name" placeholder="e.g. Remote Jobs" required>
                    </div>
                    <div class="form-group">
                        <label for="collection-icon">Icon</label>
                        <div class="icon-selector">
                            <div class="icon-option selected" data-icon="briefcase">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <div class="icon-option" data-icon="code">
                                <i class="fas fa-code"></i>
                            </div>
                            <div class="icon-option" data-icon="paint-brush">
                                <i class="fas fa-paint-brush"></i>
                            </div>
                            <div class="icon-option" data-icon="chart-line">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div class="icon-option" data-icon="globe">
                                <i class="fas fa-globe"></i>
                            </div>
                            <div class="icon-option" data-icon="laptop">
                                <i class="fas fa-laptop"></i>
                            </div>
                        </div>
                        <input type="hidden" id="collection-icon" value="briefcase">
                    </div>
                    <div class="form-group">
                        <label>Select Jobs to Add</label>
                        <div class="job-selection-list">
                            ${userData.savedJobs.length > 0 ? 
                                jobData.filter(job => userData.savedJobs.includes(job.id)).map(job => `
                                    <div class="job-selection-item">
                                        <input type="checkbox" id="job-${job.id}" value="${job.id}">
                                        <label for="job-${job.id}">
                                            <div class="job-info">
                                                <div class="job-title">${job.title}</div>
                                                <div class="job-company">${job.company}</div>
                                            </div>
                                        </label>
                                    </div>
                                `).join('') :
                                '<p>You have no saved jobs to add to this collection.</p>'
                            }
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" id="cancel-collection">Cancel</button>
                <button class="btn btn-primary" id="save-collection">Create Collection</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('close-collection-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    document.getElementById('cancel-collection').addEventListener('click', () => {
        modal.remove();
    });
    
    document.getElementById('save-collection').addEventListener('click', () => {
        const collectionName = document.getElementById('collection-name').value;
        const collectionIcon = document.getElementById('collection-icon').value;
        
        if (collectionName) {
            // Get selected jobs
            const selectedJobs = [];
            document.querySelectorAll('.job-selection-item input:checked').forEach(checkbox => {
                selectedJobs.push(parseInt(checkbox.value));
            });
            
            // In a real app, you would save this collection to user data
            showToast(`Collection "${collectionName}" created with ${selectedJobs.length} jobs!`, "success");
            
            // For demo purposes, just close the modal
            modal.remove();
            
            // Add the collection to userData
            const newCollection = {
                id: Date.now(), // Generate a unique ID
                name: collectionName,
                icon: collectionIcon,
                jobs: selectedJobs
            };
            
            if (!userData.collections) {
                userData.collections = [];
            }
            userData.collections.push(newCollection);
            
            // Save to localStorage or your backend
            saveUserData();
            
            // Refresh the collections display if needed
            if (typeof updateCollectionsDisplay === 'function') {
                updateCollectionsDisplay();
            }
        } else {
            showToast("Please enter a collection name", "error");
        }
    });
    
    // Set up icon selection
    document.querySelectorAll('.icon-option').forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            document.querySelectorAll('.icon-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Update hidden input value
            document.getElementById('collection-icon').value = option.dataset.icon;
        });
    });
}