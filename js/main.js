// Email protection
function encodeEmail(email) {
    // Reverse the email and convert to base64
    return btoa(email.split('').reverse().join(''));
}

function decodeEmail(encodedEmail) {
    // Decode base64 and reverse back
    return atob(encodedEmail).split('').reverse().join('');
}

// Website Content Configuration
const websiteContent = {
    meta: {
        title: "Rok Tumpej - Data Scientist & BI Developer",
        logo: ""
    },
    navigation: [
        { text: "Home", href: "index.html#home" },
        { text: "About", href: "index.html#about" },
        { text: "Skills", href: "index.html#skills" },
        { text: "Experience", href: "index.html#experience" },
        { text: "Education", href: "index.html#education" },
        { text: "Contact", href: "index.html#contact" },
        { text: "Dashboard", href: "dashboard.html" }
    ],
    hero: {
        headline: "Rok Tumpej",
        subheadline: "Empowering Businesses Through Data Science",
        introduction: "Welcome! I'm Rok Tumpej, a Data Scientist and Business Intelligence Developer with a mission to transform data into actionable insights. My expertise spans creating data-driven dashboards, automating complex workflows, and applying machine learning to solve real-world business challenges. With a focus on collaboration and innovation, I deliver solutions that empower businesses to thrive in a data-centric world.",
        cta: {
            text: "Let's uncover the potential of your data",
            href: "#contact"
        }
    },
    about: {
        title: "Data Science & Business Intelligence",
        content: [
            "With a strong foundation in engineering and business intelligenceand years of experience across diverse industries, I specialize in helping businesses leverage their data for growth and efficiency. My background includes roles in multinational corporations and innovative startups, where I've developed business intelligence dashboards, automated workflows, and predictive models that drive smarter decision-making.",
            "I bring technical proficiency, a problem-solving mindset, and a passion for innovation to every project, ensuring that my solutions not only meet but exceed expectations. My goal is to bridge the gap between data and business, empowering stakeholders with clear, actionable insights."
        ]
    },
    skills: {
        title: "Skills & Expertise",
        items: [
            {
                icon: "fa-chart-line",
                title: "Business Intelligence Development",
                description: "Expertise in Power BI, DAX, and advanced Excel (VBA) to create dashboards and reporting systems."
            },
            {
                icon: "fa-brain",
                title: "Data Science & Machine Learning",
                description: "Proficient in Python, AI/ML libraries (Scikit-learn, TensorFlow), and predictive modeling techniques."
            },
            {
                icon: "fa-cogs",
                title: "Process Automation",
                description: "Skilled in creating ETLs and automating workflows to enhance operational efficiency."
            },
            {
                icon: "fa-code",
                title: "Programming & Analytics",
                description: "Advanced knowledge of Python, SQL, and C# for data analysis, tool development, and algorithm optimization."
            },
            {
                icon: "fa-chart-bar",
                title: "Data Visualization",
                description: "Skilled in presenting complex data through intuitive visualizations using Power BI and Python libraries."
            },
            {
                icon: "fa-users",
                title: "Collaboration & Communication",
                description: "Extensive experience translating business needs into technical solutions and bridging the gap between teams."
            }
        ]
    },
    experience: {
        title: "My Professional Journey",
        items: [
            {
                title: "Technical Business Analyst",
                company: "MUFG Bank (Europe) N.V.",
                period: "Apr 2022 - Jun 2024",
                logo: "images/mufg-logo-transp.png",
                achievements: [
                    "Worked across Regulatory Reporting, Finance, Operations, and Front Office",
                    "Automated regulatory reporting processes (Payment Statistics, CESOP, Integrity Risk Questionnaire)",
                    "Developed customer and transactional data marts to improve the company's data landscape",
                    "Resolved inefficiencies in legacy systems and collaborated with Business and IT teams"
                ]
            },
            {
                title: "Data Scientist",
                company: "MUFG Bank (Europe) N.V.",
                period: "Nov 2019 - Mar 2022",
                logo: "images/mufg-logo-transp.png",
                achievements: [
                    "Focused on Compliance and Financial Crime risk mitigation using machine learning",
                    "Tuned transaction monitoring tools and analyzed transactional and customer data",
                    "Supported SIRA (Systematic Integrity Risk Analysis) and KYC processes",
                    "Developed dashboards to provide key insights to stakeholders"
                ]
            },
            {
                title: "Simulation Engineer / Software Services",
                company: "AVL-AST d.o.o. (Freelance)",
                period: "Oct 2020 - Dec 2021",
                logo: "images/avl-logo-transp.png",
                achievements: [
                    "Conducted research and development of simulation methods for internal combustion engines",
                    "Designed and implemented new simulation methodologies into AVL's software framework",
                    "Worked on verification and integration of new techniques into the company's core software products"
                ]
            },
            {
                title: "Algorithm Developer",
                company: "MOMO Medical B.V.",
                period: "Sep 2019 - Nov 2019",
                logo: "images/momo-logo-transp.png",
                achievements: [
                    "Developed core algorithms for embedded medical devices, including machine learning models",
                    "Created internal tooling libraries and implemented C++ code for real-time execution",
                    "Authored technical documentation and reports in compliance with CE standards"
                ]
            },
            {
                title: "Data Scientist (Intern)",
                company: "MOMO Medical B.V.",
                period: "Mar 2019 - Aug 2019",
                logo: "images/momo-logo-transp.png",
                achievements: [
                    "Analyzed sensor data from embedded devices and built machine learning models",
                    "Conducted time-series analysis and developed patient posture detection algorithms",
                    "Utilized Python (Pandas, NumPy, Matplotlib, Seaborn, Sklearn) and C++ for model development"
                ]
            },
            {
                title: "Analysis Engineer",
                company: "AVL-AST d.o.o.",
                period: "Apr 2017 - Sep 2018",
                logo: "images/avl-logo-transp.png",
                achievements: [
                    "Conducted simulations in the automotive industry (FEM, Strength, Dynamics, Fatigue analysis)",
                    "Developed new approaches for numerical multi-body dynamic simulations",
                    "Utilized Python programming and Abaqus for verification and validation of simulations"
                ]
            }
        ]
    },
    education: {
        title: "Education",
        items: [
            {
                period: "2017 - 2019",
                degree: "MASTER OF SCIENCE",
                field: "Mechanical Engineering - Computer Engineering Modelling",
                institution: "University of Maribor",
                icon: "fa-solid fa-graduation-cap"
            },
            {
                period: "2014 - 2017",
                degree: "BACHELOR OF SCIENCE",
                field: "Mechanical Engineering - Engineering Design",
                institution: "University of Maribor",
                icon: "fa-solid fa-graduation-cap"
            }
        ]
    },
    contact: {
        title: "Let's Collaborate",
        subtitle: "Get in Touch",
        description: "Looking for innovative solutions in data science or business intelligence? Let's connect and explore how I can help your business succeed.",
        details: [
            { 
                icon: "fa-solid fa-envelope", 
                encodedEmail: "bW9jLmxpYW1nQGplcG11dC5rb3I=",  // Encoded version of your email
                text: "[Click to reveal email]",
                isEmail: true
            },
            { 
                icon: "fab fa-linkedin", 
                text: "LinkedIn Profile",
                href: "https://www.linkedin.com/in/rok-tumpej/"
            },
            {
                icon: "fab fa-github",
                text: "GitHub Profile",
                href: "https://github.com/rtumpej"
            }
        ]
    },
    footer: {
        copyright: "2025 Rok Tumpej. All rights reserved."
    }
};

// Render Functions
function renderNavigation() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.innerHTML = websiteContent.navigation
        .map(item => `<li><a href="${item.href}">${item.text}</a></li>`)
        .join('');
    document.querySelector('.logo').textContent = websiteContent.meta.logo;
}

function renderHero() {
    const hero = document.querySelector('#home .container');
    hero.innerHTML = `
        <h1>${websiteContent.hero.headline}</h1>
        <p class="subtitle">${websiteContent.hero.subheadline}</p>
        <div class="intro">
            <p>${websiteContent.hero.introduction}</p>
        </div>
        <a href="${websiteContent.hero.cta.href}" class="btn primary">${websiteContent.hero.cta.text}</a>
    `;
}

function renderAbout() {
    const about = document.querySelector('#about');
    about.querySelector('h2').textContent = websiteContent.about.title;
    about.querySelector('.about-content').innerHTML = websiteContent.about.content
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');
}

function renderSkills() {
    const skills = document.querySelector('#skills');
    skills.querySelector('h2').textContent = websiteContent.skills.title;
    skills.querySelector('.skills-grid').innerHTML = websiteContent.skills.items
        .map(skill => `
            <div class="skill-card">
                <i class="fas ${skill.icon}"></i>
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>
            </div>
        `)
        .join('');
}

function renderExperience() {
    const experience = document.querySelector('#experience');
    experience.querySelector('h2').textContent = websiteContent.experience.title;
    experience.querySelector('.timeline').innerHTML = websiteContent.experience.items
        .map(item => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div class="company-logo">
                            <img src="${item.logo}" alt="${item.company} logo" />
                        </div>
                        <div class="title-section">
                            <h3>${item.title}</h3>
                            <h4>${item.company} | ${item.period}</h4>
                        </div>
                    </div>
                    <ul>
                        ${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `)
        .join('');
}

function renderEducation() {
    const education = document.querySelector('#education');
    education.querySelector('h2').textContent = websiteContent.education.title;
    
    education.querySelector('.timeline').innerHTML = websiteContent.education.items
        .map(item => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="education-header">
                        <div class="education-icon">
                            <i class="${item.icon}"></i>
                        </div>
                        <div class="education-details">
                            <div class="education-period">${item.period}</div>
                            <h3>${item.degree}</h3>
                            <h4>${item.field}</h4>
                            <div class="institution">${item.institution}</div>
                        </div>
                    </div>
                </div>
            </div>
        `)
        .join('');
}

function renderContact() {
    const contact = document.querySelector('#contact');
    contact.querySelector('h2').textContent = websiteContent.contact.title;
    contact.querySelector('.contact-info h3').textContent = websiteContent.contact.subtitle;
    
    const contactDetails = contact.querySelector('.contact-details');
    contactDetails.innerHTML = `
        <p>${websiteContent.contact.description}</p>
        ${websiteContent.contact.details.map(detail => {
            if (detail.isEmail) {
                return `<p>
                    <i class="${detail.icon}"></i> 
                    <a href="#" class="protected-email" 
                       data-encoded-email="${detail.encodedEmail}"
                       onclick="handleEmailClick(event, this)">${detail.text}</a>
                </p>`;
            }
            return detail.href 
                ? `<p><i class="${detail.icon}"></i> <a href="${detail.href}" target="_blank">${detail.text}</a></p>`
                : `<p><i class="${detail.icon}"></i> ${detail.text}</p>`;
        }).join('')}
    `;
}

function renderFooter() {
    document.querySelector('footer p').textContent = websiteContent.footer.copyright;
}

// Email click handler
function handleEmailClick(event, element) {
    event.preventDefault();
    const encodedEmail = element.getAttribute('data-encoded-email');
    const decodedEmail = decodeEmail(encodedEmail);
    element.textContent = decodedEmail;  // Show the email address
    element.onclick = (e) => {  // Change click behavior to open email client
        e.preventDefault();
        window.location.href = `mailto:${decodedEmail}`;
    };
}

// Initialize website
function initializeWebsite() {
    document.title = websiteContent.meta.title;
    renderNavigation();
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderEducation();
    renderContact();
    renderFooter();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeWebsite);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default if it's a hash link on the same page
        const targetUrl = this.getAttribute('href');
        const isHashLink = targetUrl.includes('#');
        const isExternalLink = targetUrl.includes('://');
        const isSamePage = !targetUrl.includes('.html') || 
                          (window.location.pathname.endsWith('index.html') && targetUrl.startsWith('index.html'));

        if (isHashLink && !isExternalLink && isSamePage) {
            e.preventDefault();
            const targetId = targetUrl.split('#')[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'var(--shadow)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form handling
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            const response = await fetch(this.action, {
                method: this.method,
                body: new FormData(this),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const data = await response.json();
            
            if (response.ok) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                form.reset();
            } else {
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Oops! There was a problem sending your message. Please try again later.';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
            
            // Scroll status into view
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}
