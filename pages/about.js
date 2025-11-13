import styles from './about.module.css';
import Navbar from '@/components/Nav';
import Footer from '@/components/Footer';
export default function About() {
  return (
    <>
    <Navbar/>
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.intro}>
        Hello! I’m <span className={styles.name}>Dhiya</span> — a passionate web developer
        with hands-on experience in the MERN stack (MongoDB, Express, React, and Node.js).
        I enjoy building creative, responsive, and user-friendly web applications.
      </p>

      <div className={styles.section}>
        <h2 className={styles.heading}>🎯 What I Do</h2>
        <p className={styles.text}>
          I focus on front-end development using React and Next.js, along with backend
          development using Express and MongoDB. I love learning new technologies and
          improving my coding and design skills every day.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>💡 My Goals</h2>
        <p className={styles.text}>
          I aim to become a full-stack developer capable of designing efficient APIs,
          building interactive UIs, and delivering seamless user experiences.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>📚 Current Focus</h2>
        <p className={styles.text}>
          I’m currently working on my OTT platform project and also preparing for mock
          interviews to improve my technical and communication skills.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
