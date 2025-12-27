<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

:root {
  --primary-color: #333333; /* Dark Gray/Black instead of Blue */
  --secondary-color: #666666; /* Medium Gray */
  --sidebar-bg: #ffffff; /* White sidebar for minimal look */
  --border-color: #e0e0e0;
  --tag-bg: #f5f5f5;
  --text-dark: #222;
  --text-light: #555;
  --white: #ffffff;
}

body {
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  color: var(--text-dark);
  margin: 0;
  padding: 0;
  background-color: #fff;
  width: 8.5in;
  min-height: 11in;
  box-sizing: border-box;
}

/* Layout Container */
.container {
  display: grid;
  grid-template-columns: 32% 68%; /* Adjusted for cleaner look */
  min-height: 100vh;
  height: 100%;
}

/* Sidebar (Left Column) */
.sidebar {
  background-color: var(--sidebar-bg);
  padding: 40px 25px;
  font-size: 14px;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid var(--border-color); /* Subtle divider */
}

/* Main Content (Right Column) */
.main-content {
  padding: 40px 35px;
  font-size: 14px;
  background-color: var(--white);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* Icons */
.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  fill: var(--primary-color);
  margin-right: 8px;
}

/* Header */
header {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

h1 {
  margin: 0;
  font-size: 32px;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.1;
  font-weight: 300; /* Lighter weight for elegance */
}

.header-role {
  font-size: 15px;
  color: var(--secondary-color);
  margin-top: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Sidebar Specifics */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 35px;
}

.contact-item {
  display: flex;
  align-items: center;
  word-break: break-word;
}

.contact-item a {
  color: var(--text-dark); /* Neutral link color */
  text-decoration: none;
  font-weight: 400;
}

.section-title-sm {
  font-size: 16px;
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
  padding-bottom: 5px;
  margin: 30px 0 15px 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title-sm:first-of-type {
  margin-top: 0;
}

.lang-list, .cert-list-sidebar {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lang-list li {
  margin-bottom: 8px;
  line-height: 1.4;
  color: var(--secondary-color);
}

.cert-item-sidebar {
  margin-bottom: 15px;
  font-size: 13.5px;
}

.cert-title {
  font-weight: 600;
  color: var(--text-dark);
  display: block;
}

.cert-provider {
  color: var(--secondary-color);
  font-size: 12px;
  font-style: italic;
}

/* Main Content Specifics */
.section-title-lg {
  font-size: 18px;
  color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 5px;
  margin: 0 0 20px 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section {
  margin-bottom: 35px;
}

.summary-text {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.6;
}

.job {
  margin-bottom: 20px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
}

.job-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--text-dark);
}

.job-company {
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.job-date {
  font-size: 13px;
  color: var(--secondary-color);
  white-space: nowrap;
  font-weight: 500;
}

/* Technical Skills in Main - Grid Layout */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.skill-category-box {
  margin-bottom: 10px;
}

.skill-cat-title {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
  font-size: 14px;
  text-transform: uppercase;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  background-color: transparent;
  color: var(--text-dark);
  padding: 2px 0;
  border-radius: 0;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid transparent; 
}
/* Just list style for skills to be minimal */
.skill-tags span:not(:last-child)::after {
    content: "•";
    margin-left: 6px;
    color: var(--border-color);
}

/* Print Overrides */
@media print {
  @page { margin: 0; size: auto; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .sidebar { border-right: 1px solid #ccc; }
}
</style>

<div class="container">
  <!-- Left Column: Sidebar -->
  <aside class="sidebar">
    <div class="section-title-sm">Contact</div>
    <div class="contact-info">
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24"><path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z" /></svg>
        <a href="mailto:yeasir.ahnaf.1996@gmail.com">yeasir.ahnaf.1996@gmail.com</a>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
        <span>+8801872262565</span>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
        <span>Dhaka, Bangladesh</span>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24"><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" /></svg>
        <a href="https://www.linkedin.com/in/yeasir-ahnaf-asif/">LinkedIn Profile</a>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
        <a href="https://github.com/yeasirahnaf">GitHub Profile</a>
      </div>
    </div>

    <div class="section-title-sm">Certifications</div>
    <ul class="cert-list-sidebar">
        <li class="cert-item-sidebar">
            <span class="cert-title">Complete JavaScript Programming: From Novice to Expert</span>
            <span class="cert-provider">Udemy (2025)</span>
            <a href="https://www.udemy.com/certificate/UC-a4351f88-2ff8-4b3e-963b-b83c0801acd4/" target="_blank" style="display:block; font-size:11px; color:var(--secondary-color); text-decoration:underline;">View Certificate</a>
        </li>
        <li class="cert-item-sidebar">
            <span class="cert-title">Hands On React JS From Beginner to Expert</span>
            <span class="cert-provider">Udemy (2025)</span>
            <a href="https://www.udemy.com/certificate/UC-1825a9c8-6d13-4058-94dd-349e19ea9684/" target="_blank" style="display:block; font-size:11px; color:var(--secondary-color); text-decoration:underline;">View Certificate</a>
        </li>
    </ul>

    <div class="section-title-sm">Languages</div>
    <ul class="lang-list">
      <li><strong>Bengali</strong> (Native)</li>
      <li><strong>English</strong> (Fluent)</li>
    </ul>

    <div class="section-title-sm">Interests</div>
    <ul class="lang-list">
      <li>Web Development</li>
      <li>Open Source Contribution</li>
      <li>Problem Solving</li>
      <li>Learning New Tech</li>
    </ul>
  </aside>

  <!-- Right Column: Main Content -->
  <main class="main-content">
    
    <header>
      <h1>Yeasir Ahnaf Asif</h1>
      <div class="header-role">Computer Science Graduate | MERN Stack Developer | React.js & Next.js Specialist</div>
    </header>

    <div class="section">
      <div class="section-title-lg">Professional Summary</div>
      <p class="summary-text">Motivated Computer Science graduate specializing in Full-Stack Development with expertise in React.js, Next.js, and MERN Stack. Seeking to leverage strong programming skills and passion for modern web technologies to build efficient and scalable applications.</p>
    </div>

    <div class="section">
        <div class="section-title-lg">Technical Skills</div>
        <div class="skills-grid">
            <div class="skill-category-box">
                <div class="skill-cat-title">Frontend</div>
                <div class="skill-tags">
                    <span class="skill-tag">React.js</span>
                    <span class="skill-tag">Next.js</span>
                    <span class="skill-tag">Redux</span>
                    <span class="skill-tag">TypeScript</span>
                    <span class="skill-tag">JavaScript (ES6+)</span>
                    <span class="skill-tag">Tailwind CSS</span>
                    <span class="skill-tag">Context API</span>
                    <span class="skill-tag">HTML5/CSS3</span>
                </div>
            </div>
            <div class="skill-category-box">
                <div class="skill-cat-title">Backend</div>
                <div class="skill-tags">
                    <span class="skill-tag">Node.js</span>
                    <span class="skill-tag">Express.js</span>
                    <span class="skill-tag">RESTful APIs</span>
                    <span class="skill-tag">JWT/OAuth</span>
                </div>
            </div>
            <div class="skill-category-box">
                <div class="skill-cat-title">Database</div>
                <div class="skill-tags">
                    <span class="skill-tag">MongoDB</span>
                    <span class="skill-tag">Mongoose</span>
                    <span class="skill-tag">PostgreSQL</span>
                    <span class="skill-tag">MySQL</span>
                </div>
            </div>
            <div class="skill-category-box">
                <div class="skill-cat-title">Tools</div>
                <div class="skill-tags">
                    <span class="skill-tag">Git/GitHub</span>
                    <span class="skill-tag">VS Code</span>
                    <span class="skill-tag">Postman</span>
                    <span class="skill-tag">Webpack</span>
                </div>
            </div>
        </div>
    </div>

    <div class="section">
      <div class="section-title-lg">Education</div>
      <div class="job">
        <div class="job-header">
          <span class="job-title">BSc in Computer Science and Engineering</span>
          <span class="job-date">2020 - 2025</span>
        </div>
        <div class="job-company">American International University Bangladesh (AIUB)</div>
      </div>
      <div class="job">
        <div class="job-header">
          <span class="job-title">Higher Secondary School Certificate (HSC)</span>
          <span class="job-date">2017 - 2019</span>
        </div>
        <div class="job-company">Dhaka City College</div>
      </div>
    </div>

  </main>
</div>
