import styles from './contact.module.css';
import Navbar from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
    <Navbar/>
   
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.subtitle}>
        I’d love to hear from you! Whether you have a project idea, a collaboration
        opportunity, or just want to say hi — feel free to reach out. 😊
      </p>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit" className={styles.btn}>Send Message</button>
        </form>
      </div>

      <div className={styles.infoSection}>
        <h2>📬 Get in Touch</h2>
        <p>Email: <a href="mailto:dhiya@example.com">dhiya@example.com</a></p>
        <p>Location: Kerala, India</p>

        <div className={styles.socialLinks}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
