// Website Content Configuration
const websiteContent = {
    meta: {
        title: "Rok Tumpej - Data Scientist & BI Developer",
        logo: "RT"
    },
    navigation: [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skills" },
        { text: "Experience", href: "#experience" },
        { text: "Contact", href: "#contact" }
    ],
    hero: {
        headline: "Empowering Businesses Through Data Science",
        subheadline: "Delivering Tailored Solutions in Business Intelligence and Machine Learning",
        introduction: "Welcome! I'm Rok Tumpej, a Data Scientist and Business Intelligence Developer with a mission to transform data into actionable insights. My expertise spans creating data-driven dashboards, automating complex workflows, and applying machine learning to solve real-world business challenges. With a focus on collaboration and innovation, I deliver solutions that empower businesses to thrive in a data-centric world.",
        cta: {
            text: "Let's uncover the potential of your data",
            href: "#contact"
        }
    },
    about: {
        title: "Your Partner in Data-Driven Success",
        content: [
            "With a strong foundation in engineering and years of experience across diverse industries, I specialize in helping businesses leverage their data for growth and efficiency. My background includes roles in multinational corporations and innovative startups, where I've developed business intelligence dashboards, automated workflows, and predictive models that drive smarter decision-making.",
            "I bring technical proficiency, a problem-solving mindset, and a passion for innovation to every project, ensuring that my solutions not only meet but exceed expectations. My goal is to bridge the gap between data and business, empowering stakeholders with clear, actionable insights."
        ]
    },
    skills: {
        title: "What Sets Me Apart",
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
                title: "Technical Business Analyst / Data Analyst",
                company: "MUFG Bank (Europe) N.V., Amsterdam, NL",
                period: "2019–2024",
                achievements: [
                    "Developed and maintained BI dashboards for key departments",
                    "Automated regulatory reporting and KYC workflows",
                    "Collaborated with cross-functional teams to implement data-driven solutions"
                ]
            },
            {
                title: "Data Scientist / Algorithm Developer",
                company: "Momo Medical B.V., Delft, NL",
                period: "2019",
                achievements: [
                    "Created machine learning algorithms for real-time monitoring",
                    "Delivered detailed documentation for regulatory requirements"
                ]
            },
            {
                title: "Simulation Engineer",
                company: "AVL-AST d.o.o., Maribor, SI",
                period: "2017–2021",
                achievements: [
                    "Developed innovative simulation methods for engines",
                    "Conducted validation using advanced simulation tools"
                ]
            },
            {
                title: "Freelance Data Scientist",
                company: "Independent Project",
                period: "2021–2022",
                achievements: [
                    "Designed algorithms for automated cryptocurrency trading",
                    "Applied genetic algorithms and neural networks"
                ]
            }
        ]
    },
    contact: {
        title: "Let's Collaborate",
        subtitle: "Get in Touch",
        description: "Looking for innovative solutions in data science or business intelligence? Let's connect and explore how I can help your business succeed.",
        details: [
            { icon: "fa-envelope", text: "rok.tumpej@gmail.com" },
            { icon: "fa-phone", text: "+31 65 798 1461" },
            { 
                icon: "fa-linkedin", 
                text: "LinkedIn Profile",
                href: "https://www.linkedin.com/in/rok-tumpej/"
            }
        ]
    },
    footer: {
        copyright: " 2024 Rok Tumpej. All rights reserved."
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
                    <h3>${item.title}</h3>
                    <h4>${item.company} | ${item.period}</h4>
                    <ul>
                        ${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
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
        ${websiteContent.contact.details.map(detail => 
            detail.href 
                ? `<p><i class="fas ${detail.icon}"></i> <a href="${detail.href}" target="_blank">${detail.text}</a></p>`
                : `<p><i class="fas ${detail.icon}"></i> ${detail.text}</p>`
        ).join('')}
    `;
}

function renderFooter() {
    document.querySelector('footer p').textContent = websiteContent.footer.copyright;
}

// Initialize website
function initializeWebsite() {
    document.title = websiteContent.meta.title;
    renderNavigation();
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderContact();
    renderFooter();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeWebsite);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    console.log('Form submitted:', data);
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});
