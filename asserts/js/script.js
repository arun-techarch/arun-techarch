// Project data
const projects = [
    {
        title: "Modernized Backend Architecture",
        description: "Transformed backend to enterprise-grade standards with TypeScript, RBAC security, and scalable microservices architecture.",
        image: "./asserts/images/be_arch_small.jpg",
        detailImage: "./asserts/images/be_arch_large.jpg",
        technologies: ["TypeScript", "Security", "Scalability"],
        overview: "Led the transformation of the backend to enterprise-grade standards by addressing architectural gaps with robust, scalable, and secure solutions. The modernization effort focused on improving scalability, security, maintainability, and developer productivity.",
        achievements: [
            "Rebuilt the backend in TypeScript for strong typing and maintainability",
            "Standardized code formatting with Prettier and package management via Yarn",
            "Modularized the codebase for reusability and reduced complexity",
            "Introduced environment-specific configurations with secure credential handling",
            "Designed RBAC-based access control with granular role/permission mappings",
            "Implemented database-level monitoring with full audit trails"
        ]
    },
    {
        title: "Zero Trust Security Implementation",
        description: "Implemented comprehensive security framework with centralized logging, database migration to Snowflake, and secure proxy services.",
        image: "./asserts/images/zero_trust_small.jpg",
        detailImage: "./asserts/images/zero_trust_large.jpg",
        technologies: ["Security", "Splunk", "Snowflake"],
        overview: "Implemented comprehensive security framework meeting enterprise compliance requirements with centralized logging, secure database migration, and proxy services for VPN-independent access.",
        achievements: [
            "Centralized logging with Splunk for 6+ months retention",
            "Migration from PostgreSQL to Snowflake for enterprise-grade security",
            "DNG Proxy service for secure external access",
            "Application security scanning and vulnerability remediation",
            "NGINX reverse proxy for secure API routing",
            "Complete user activity tracking for audit compliance"
        ]
    },
    {
        title: "Enterprise Cloud Migration",
        description: "Successfully executed full migration from virtual machines to cloud containers with MongoDB provisioning and secure data transfer.",
        image: "./asserts/images/cloud_small.jpg",
        detailImage: "./asserts/images/cloud_large.jpg",
        technologies: ["Cloud", "Docker", "MongoDB"],
        overview: "Successfully executed full migration from virtual machines to cloud containers, covering containerization, MongoDB provisioning, storage optimization, and secure data transfer ensuring zero downtime and enhanced scalability.",
        achievements: [
            "VM to container migration with Docker containerization",
            "MongoDB provisioning and data migration",
            "Storage optimization and backup strategies",
            "Secure data transfer protocols",
            "Performance monitoring and optimization",
            "Automated deployment and scaling"
        ]
    },
    {
        title: "Intelligent Chatbot Integration",
        description: "Designed and implemented enterprise chatbot solution with Python automation for streamlined data updates and user interactions.",
        image: "./asserts/images/charbot_small.jpg",
        detailImage: "./asserts/images/chatbot_large.jpg",
        technologies: ["Python", "AI", "Automation"],
        overview: "Designed and implemented enterprise chatbot solution leveraging existing services, integrating Python automation modules for streamlined data updates and enhanced user interaction capabilities.",
        achievements: [
            "Python-based automation for data updates",
            "Worker Council report generation",
            "Integration with existing enterprise services",
            "Natural language processing capabilities",
            "Automated workflow management",
            "Real-time user interaction and support"
        ]
    },
    {
        title: "NGCGI Integration & Automation",
        description: "Automated compensation assignment and goal mapping through secure API proxy integration with external enterprise systems.",
        image: "./asserts/images/ngcgi_small.jpg",
        detailImage: "./asserts/images/ngcgi_large.jpg",
        technologies: ["API", "Integration", "Automation"],
        overview: "Implemented automated compensation assignment and goal mapping through secure API proxy integration, connecting with external enterprise systems for streamlined HR and performance management processes.",
        achievements: [
            "Automated compensation assignment workflows",
            "Goal mapping and tracking integration",
            "Secure API proxy implementation",
            "External system connectivity",
            "Award event integration modernization",
            "Real-time data synchronization"
        ]
    },
    {
        title: "Performance Optimization & Monitoring",
        description: "Implemented centralized cache optimization with Redis and comprehensive application usage monitoring dashboard.",
        image: "./asserts/images/performance_small.jpg",
        detailImage: "./asserts/images/performance_large.jpg",
        technologies: ["Redis", "Monitoring", "Analytics"],
        overview: "Implemented centralized cache optimization with Redis and comprehensive application usage monitoring dashboard, resulting in significant performance improvements and enhanced system observability.",
        achievements: [
            "Centralized Redis cache implementation",
            "Application usage monitoring dashboard",
            "Query performance optimization",
            "Rate details management optimization",
            "Static file management in frontend applications",
            "Cost optimization and technology modernization"
        ]
    }
];

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Skills animation on scroll
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const rect = skillsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (width && !bar.classList.contains('animated')) {
                bar.style.width = width + '%';
                bar.classList.add('animated');
            }
        });
    }
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    try {
    const res = await fetch("https://formsubmit.co/arunstephen.techarch@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
        'Accept': 'application/json'
        }
    });

    if (res.ok) {
        showAlert("Success", "✅ Email sent successfully!");
        form.reset();
    } else {
        const errorData = await res.json();
        showAlert("Error", "❌ Error: " + (errorData.message || "Failed to send"));
    }
    } catch (err) {
        console.error("Error:", err);
        showAlert("Error", "❌ Network error, please try again later.");
    }
});

function showAlert(title, message) {
    document.getElementById("alertTitle").textContent = title;
    document.getElementById("alertMessage").textContent = message;
    document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}

// Project modal functions
function openModal(projectIndex) {
    const project = projects[projectIndex];
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').src = project.detailImage;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('modalOverview').textContent = project.overview;
    
    // Populate achievements
    const achievementsList = document.getElementById('modalAchievements');
    achievementsList.innerHTML = '';
    project.achievements.forEach((achievement, index) => {
        const li = document.createElement('li');
        li.textContent = achievement;
        li.setAttribute('data-testid', `modal-achievement-${index}`);
        achievementsList.appendChild(li);
    });
    
    // Populate technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = '';
    project.technologies.forEach((tech, index) => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        span.setAttribute('data-testid', `modal-tech-${index}`);
        techContainer.appendChild(span);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Navigation links smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Initialize animations on scroll
window.addEventListener('scroll', animateSkills);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate skills if already in view
    setTimeout(animateSkills, 500);
    
    // Add click event to hamburger menu for mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});