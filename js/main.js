// Configuration data
const config = {
    "site": {
        "title": "Rok Tumpej - Data Scientist & Business Analyst",
        "logo": "RT"
    },
    "personalInfo": {
        "name": "Rok Tumpej",
        "title": "Data Scientist & Business Analyst",
        "tagline": "Transforming Data into Business Value",
        "location": "Amsterdam, Netherlands",
        "about": "Business Analyst with an advanced technical background and strong programming skills, experienced in startups and multinational corporations across various industries including automotive, medical, and banking. Proven track record in research and development, IT, and business teams, demonstrating strong cross-discipline skills, advanced analytical abilities, and critical thinking. Passionate about automation and AI, with a focus on driving efficiency and innovation."
    },
    "sections": {
        "about": {
            "title": "About Me"
        },
        "experience": {
            "title": "Professional Experience"
        },
        "skills": {
            "title": "Technical Skills"
        },
        "contact": {
            "title": "Get in Touch",
            "subtitle": "Contact Information"
        }
    },
    "social": {
        "linkedin": "https://linkedin.com/in/your-profile",
        "github": "https://github.com/your-profile"
    },
    "experience": [
        {
            "title": "Data Scientist",
            "company": "RTD Solutions B.V.",
            "period": "Sep 2019 - Present",
            "description": "Helping other companies developing data solutions, automating processes, BI dashboards and delivering valuable insights."
        },
        {
            "title": "Technical Business Analyst / Data Analyst",
            "company": "MUFG",
            "period": "Nov 2019 - Jun 2024",
            "description": "Supported various departments in Financial Crime, Regulatory Reporting, Operations, Finance and Front Office. Developed automated pipelines for KYC processes and maintained BI dashboards."
        }
    ],
    "skills": {
        "Programming": ["Python", "SQL", "C++"],
        "Data Analysis": ["PowerBI", "Machine Learning", "Data Visualization"],
        "Tools": ["Git", "Pandas", "Scikit-learn"]
    },
    "navigation": [
        {"label": "Home", "link": "#home"},
        {"label": "About", "link": "#about"},
        {"label": "Experience", "link": "#experience"},
        {"label": "Skills", "link": "#skills"},
        {"label": "Contact", "link": "#contact"}
    ],
    "footer": {
        "copyright": " 2025 Rok Tumpej. All rights reserved."
    }
};

// Update page title
function updatePageTitle() {
    document.title = config.site.title;
    document.querySelector('.logo').textContent = config.site.logo;
}

// Render navigation
function renderNavigation() {
    const navList = document.querySelector('.nav-links');
    navList.innerHTML = config.navigation.map(item => 
        `<li><a href="${item.link}">${item.label}</a></li>`
    ).join('');
}

// Render section titles
function renderSectionTitles() {
    for (const [sectionId, content] of Object.entries(config.sections)) {
        const titleElement = document.querySelector(`#${sectionId} h2`);
        if (titleElement) {
            titleElement.textContent = content.title;
        }
        if (sectionId === 'contact') {
            const subtitleElement = document.querySelector('#contact .contact-info h3');
            if (subtitleElement) {
                subtitleElement.textContent = content.subtitle;
            }
        }
    }
}

// Render hero section
function renderHero() {
    const heroContent = document.querySelector('#home .container');
    heroContent.innerHTML = `
        <h1>${config.personalInfo.name}</h1>
        <h2>${config.personalInfo.title}</h2>
        <p>${config.personalInfo.tagline}</p>
        <div class="cta-buttons">
            <a href="#contact" class="btn primary">Get in Touch</a>
            <a href="#experience" class="btn secondary">View Experience</a>
        </div>
    `;
}

// Render about section
function renderAbout() {
    const aboutContent = document.querySelector('#about .container p');
    aboutContent.textContent = config.personalInfo.about;
}

// Render experience section
function renderExperience() {
    const timelineContainer = document.querySelector('.timeline');
    timelineContainer.innerHTML = config.experience.map(item => `
        <div class="experience-item">
            <h3>${item.title}</h3>
            <h4>${item.company}</h4>
            <p class="date">${item.period}</p>
            <p>${item.description}</p>
        </div>
    `).join('');
}

// Render skills section
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = Object.entries(config.skills).map(([category, items]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            <ul>
                ${items.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Render contact information
function renderContactInfo() {
    const locationElement = document.querySelector('#contact .contact-info p');
    locationElement.textContent = `Based in ${config.personalInfo.location}`;
}

// Render social links
function renderSocialLinks() {
    const socialLinks = document.querySelector('.social-links');
    socialLinks.innerHTML = `
        <a href="${config.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="${config.social.github}" target="_blank"><i class="fab fa-github"></i></a>
    `;
}

// Render footer
function renderFooter() {
    const footerContent = document.querySelector('footer .container p');
    footerContent.textContent = config.footer.copyright;
}

// Initialize the website
function initializeWebsite() {
    updatePageTitle();
    renderNavigation();
    renderSectionTitles();
    renderHero();
    renderAbout();
    renderExperience();
    renderSkills();
    renderContactInfo();
    renderSocialLinks();
    renderFooter();
}

// Call initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted:', { name, email, message });
    
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.experience-item, .skill-category');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for animation
document.querySelectorAll('.experience-item, .skill-category').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease-out';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
// Initial check for elements in view
animateOnScroll();
