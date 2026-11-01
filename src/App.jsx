import React from 'react';
import './App.css';

const projects = [
  {
    "name": "LEBWPOLISH",
    "type": "Language learning · React 19",
    "tag": "Web development",
    "description": "A Polish-learning platform designed around small daily activities toward B1 proficiency. React 19 and Firebase power guided missions, spaced-repetition cloze games, writing practice, grammar, reading, role-play, and cross-device progress syncing. Includes an offline standalone game, regression tests, and Netlify deployment.",
    "stack": "React 19, Firebase, Netlify",
    "link": "https://github.com/Byadiso/lebwpolish"
  },
  {
    "name": "Healthy Watcher",
    "type": "Uptime monitoring · Python",
    "tag": "AI & data",
    "description": "A zero-server-cost website monitoring system using Python, SQLite, and Streamlit. GitHub Actions checks sites every 30 minutes, sends Telegram outage and recovery alerts, and feeds an uptime and response-time dashboard with invite-only access and audit logs.",
    "stack": "Python, SQLite, Streamlit, GitHub Actions",
    "link": "https://github.com/Byadiso/healthy-watcher"
  },
  {
    "name": "HireMeD",
    "type": "Job automation · Python",
    "tag": "AI & data",
    "description": "An automated job-search pipeline for the Polish IT market. It gathers Adzuna listings, extracts full descriptions with Playwright, translates Polish listings, ranks matches against a resume using cosine similarity, and sends high-scoring roles to Telegram. Results are logged to Excel and displayed in Streamlit.",
    "stack": "Python, Playwright, Streamlit, Adzuna API",
    "link": "https://github.com/Byadiso/HireMeD"
  },
  {
    "name": "Saving for Future",
    "type": "Savings · Concept",
    "tag": "Web development",
    "description": "A savings-oriented software project exploring tools for planning ahead and tracking financial goals. The feature set, technology stack, and current release status will be documented as the project evolves.",
    "stack": "Details coming soon",
    "link": "https://github.com/Byadiso/savingforfuture"
  },
  {
    "name": "Budgeto",
    "type": "Personal finance · React",
    "tag": "Web development",
    "description": "A responsive personal-finance application for recording income and expenses, setting monthly budgets, and managing savings goals. Built with React, Redux, and Material UI, with Firebase real-time synchronization across devices and deployments on GitHub Pages and Netlify.",
    "stack": "React, Redux, Material UI, Firebase",
    "link": "https://github.com/Byadiso/budgeto"
  },
  {
    "name": "OURA",
    "type": "Rwandan public transport · Mobile",
    "tag": "Mobile development",
    "description": "A React Native mobile project focused on Rwanda’s bus and public-transport experience. It explores a mobile-first way to make local transport easier to navigate; detailed features, integrations, and release information will be added as development progresses.",
    "stack": "React Native · Details coming soon",
    "link": "https://github.com/Byadiso/oura"
  },
  {
    "name": "Malware Scanner by Date",
    "type": "WordPress security · PHP",
    "tag": "Plugin development",
    "description": "A GPL v2 WordPress security plugin inspired by a real cleanup of thousands of injected files. It scans files changed within a suspected compromise window, flags suspicious PHP, JavaScript, and HTML patterns, shows live progress, maintains logs, supports quarantine, and protects WordPress core files.",
    "stack": "PHP, WordPress, Security",
    "link": "https://github.com/Byadiso/malware-scanner-by-date"
  },
  {
    "name": "RwandaLead AI",
    "type": "AI · In development",
    "tag": "AI & data",
    "description": "An AI-oriented project exploring practical applications of intelligent software. Its specific workflows, supported data sources, and implementation details will be added once the repository documentation is ready.",
    "stack": "Details coming soon",
    "link": "https://github.com/Byadiso/rwandalead-ai"
  },
  {
    "name": "Rwanda Tourism Service-Gap Finder",
    "type": "Tourism intelligence · Python",
    "tag": "AI & data",
    "description": "A Python and Playwright research tool that audits Google Maps listings in Kigali, Musanze, Gisenyi, and Butare. It identifies tourism businesses with missing websites, limited reviews, or low ratings, labels potential service gaps, and exports leads to Excel. Documentation notes scraping terms-of-service considerations.",
    "stack": "Python, Playwright, Excel",
    "link": "https://github.com/Byadiso/service_gap_finder"
  },
  {
    "name": "Stonka Hunter",
    "type": "Agricultural computer vision",
    "tag": "AI & data",
    "description": "A computer-vision tool for identifying Colorado potato beetles from camera feeds or uploaded photos. It uses a custom-trained YOLOv8 model on a 12-class insect dataset, priority pest alerts, weather and location context, a detection gallery, and adjustable confidence settings.",
    "stack": "Python, YOLOv8, OpenCV, Streamlit",
    "link": "https://github.com/Byadiso/Stonka-Hunter"
  },
  {
    "name": "Rwanda Flight Price Tracker",
    "type": "Travel automation · Python",
    "tag": "AI & data",
    "description": "An automated flight-deal tracker for routes between Poland or Germany and Kigali during July–August 2026. It compares date combinations through the Duffel API, converts prices to PLN, checks every 30 minutes via GitHub Actions, and sends Telegram alerts with Google Flights links.",
    "stack": "Python, Duffel API, GitHub Actions",
    "link": "https://github.com/Byadiso/kigali_flight"
  },
  {
    "name": "LEBWPOLISH App",
    "type": "Language learning · Mobile",
    "tag": "Mobile development",
    "description": "The companion mobile project for LEBWPOLISH, built with Expo and React Native. Its repository structure includes Tailwind-style tooling and EAS workflows; feature-by-feature documentation will be added as the mobile experience develops.",
    "stack": "Expo, React Native, EAS",
    "link": "https://github.com/Byadiso/lebwpolish-App"
  },
  {
    "name": "PharmaFind",
    "type": "React web project",
    "tag": "Web development",
    "description": "A React and Tailwind CSS web project currently being documented. Its README still contains the starter template, so the app’s purpose, main features, and current status will be updated before a detailed case study is published.",
    "stack": "React, Tailwind CSS",
    "link": "https://github.com/Byadiso/PharmaFind"
  },
  {
    "name": "Ikimina Voting App",
    "type": "Community voting · React",
    "tag": "Web development",
    "description": "A responsive community savings-group voting application developed at Ngana Tech. Participants sign in with unique codes, complete a limited number of tests, receive ten unique randomized number-and-name pairs, cast votes, and log out. Session state is stored locally and the app is deployed on Vercel.",
    "stack": "React, Local Storage, Vercel",
    "link": "https://github.com/Byadiso/ikimina_voting_app"
  },
  {
    "name": "LearnByWriting V3",
    "type": "Writing practice · React",
    "tag": "Web development",
    "description": "A language-learning application centered on consistent daily writing practice, with an improved user interface and learning experience. Built with React, Redux, Material UI, and Firebase, and deployed to GitHub Pages and Netlify; expanded feature documentation is planned.",
    "stack": "React, Redux, Material UI, Firebase",
    "link": "https://github.com/Byadiso/learnByWritingV3"
  }
];
const groups = [
  ['Frontend', ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Next.js']],
  ['Backend & CMS', ['Python', 'PHP', 'WordPress', 'WordPress Plugins', 'Node.js']],
  ['Mobile & Tools', ['React Native', 'Git', 'Postman', 'Firebase', 'MongoDB']]
];
export default function App(){
 const [filter,setFilter] = React.useState('All');
 const filters=['All','Web development','Mobile development','Plugin development','AI & data'];
 const visible=projects.filter(p=>filter==='All'||p.tag===filter);
 return <div className="site">
  <header className="nav wrap"><a className="brand" href="#home"><span className="brand-icon">D.</span> Desire Byamungu</a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#projects">Projects</a><a href="#experience">Experience</a></nav><a className="nav-cta" href="https://www.linkedin.com/in/desire-byamungu-5b0785a1/" target="_blank" rel="noreferrer">Let's talk <span>↗</span></a></header>
  <main><section id="home" className="hero wrap"><div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div><h1>Building digital<br/>experiences that <em>matter.</em></h1><p className="hero-desc">I'm <strong>Desire Byamungu</strong>, a full-stack developer creating thoughtful web and mobile experiences with React, React Native, Python, PHP, and WordPress.</p><div className="hero-actions"><a className="primary" href="#projects">Explore my work <span>↗</span></a><a className="secondary" href="mailto:byadiso@gmail.com">Get in touch <span>↗</span></a></div><div className="hero-bottom"><span>WEB DEVELOPMENT</span><span>✳</span><span>MOBILE APPLICATIONS</span><span>✳</span><span>WORDPRESS & PHP</span></div><div className="glow"/></section>
  <section id="about" className="section wrap about"><div><div className="kicker">01 / ABOUT ME</div><h2>Curious by nature.<br/><em>Driven by craft.</em></h2></div><div className="about-copy"><p>I design and develop digital products that balance clean interfaces with practical functionality. My work spans websites, interactive applications, WordPress customization, and mobile development.</p><p>I'm continuing to deepen my expertise in Python, PHP, WordPress, and React while building projects that solve real-world problems.</p><a className="text-link" href="https://github.com/Byadiso" target="_blank" rel="noreferrer">Explore my GitHub ↗</a></div></section>
  <section id="expertise" className="section section-alt"><div className="wrap"><div className="kicker">02 / WHAT I WORK WITH</div><div className="section-head"><h2>My technical <em>toolkit.</em></h2><p>Tools and technologies I use to bring ideas from concept to production.</p></div><div className="skills-grid">{groups.map(([title,skills],i)=><article className="skill-card" key={title}><span className="skill-number">0{i+1} /</span><h3>{title}</h3><div className="skill-tags">{skills.map(s=><span key={s}>{s}</span>)}</div></article>)}</div></div></section>
  <section id="projects" className="section wrap"><div className="kicker">03 / SELECTED WORK</div><div className="section-head"><h2>Things I've <em>built.</em></h2><p>Explore 15 projects across web, mobile, AI, and WordPress development. Each card links to its GitHub repository.</p></div><div className="filters" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)} aria-pressed={filter===f}>{f}</button>)}</div><div className="project-grid">{visible.map((p,i)=><article className="project" key={p.name}><div className={'project-art art-'+(projects.indexOf(p)%6)}><span className="art-pattern">{p.name==='OURA'?'◉':p.name==='Custom WordPress Plugin'?'⌘':p.name.slice(0,1)}</span><span className="art-name">{p.name}</span></div><div className="project-info"><div className="project-meta">{p.type}</div><h3>{p.name}</h3><p>{p.description}</p><div className="project-stack">{p.stack}</div><div className="project-foot"><span>{p.tag}</span>{p.link?<a href={p.link} target="_blank" rel="noreferrer" aria-label={'Open '+p.name}>View project ↗</a>:<span className="soon">View source ↗</span>}</div></div></article>)}</div></section>
  <section id="experience" className="section section-alt"><div className="wrap"><div className="kicker">04 / PROFESSIONAL JOURNEY</div><div className="section-head"><h2>Experience & <em>impact.</em></h2><p>Selected roles and collaborations.</p></div><div className="timeline"><article><span>2021 – 2024*</span><div><h3>Web Developer</h3><strong>Ngana Tech</strong><p>Website development, custom functionality, responsive interfaces and user experience improvements.</p></div></article><article><span>2023</span><div><h3>UX/UI Designer</h3><strong>Ballet Icyeza</strong><p>Interface design, wireframes and user-friendly website experiences.</p></div></article><article><span>2021 – 2022</span><div><h3>Frontend Developer</h3><strong>Yoop.rw</strong><p>Responsive frontend development and usability enhancements.</p></div></article></div><p className="date-note">*Ngana Tech start date needs confirmation; the original portfolio contains a typo.</p></div></section>
  <section className="contact wrap" id="contact"><div className="kicker">05 / LET'S CONNECT</div><h2>Have something in mind?<br/><em>Let's make it happen.</em></h2><p>I'm interested in meaningful collaborations, software development roles, and ambitious projects.</p><a className="primary" href="https://www.linkedin.com/in/desire-byamungu-5b0785a1/" target="_blank" rel="noreferrer">Start a conversation ↗</a></section></main>
  <footer className="footer wrap"><span>© {new Date().getFullYear()} Desire Byamungu</span><div><a href="https://github.com/Byadiso" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/desire-byamungu-5b0785a1/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:byadiso@gmail.com">Email ↗</a></div><span>Built with care.</span></footer>
 </div>
}
