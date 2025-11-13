import styles from './project.module.css';
import Navbar from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Projects() {
  const projectData = [
    {
      title: "OTT Platform",
      description:
        "A full-stack OTT platform where users can watch movies, manage watchlists, and explore trending content. Built using React, Node.js, Express, and MongoDB.",
      tech: ["React", "Express", "MongoDB", "Node.js"],
      github: "https://github.com/yourusername/ott-platform",
      demo: "#"
    },
    {
      title: "Weight Loss Management Site",
      description:
        "A health-focused project developed for Sooraj Suresh, where users can track their diet and workout progress. Built using MERN stack.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/weightloss-management",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio built with Next.js, showcasing my projects, skills, and experience as a developer.",
      tech: ["Next.js", "CSS Modules"],
      github: "https://github.com/yourusername/portfolio",
      demo: "#"
    }
  ];

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.grid}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.tech}>{tech}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
