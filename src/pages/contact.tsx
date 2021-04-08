// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Header from "../components/Header";

import styles from "../styles/pages/Contact.module.css";
interface Props {}

const Contact = () => {
  interface Props {}

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>Contact</h1>

        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjqjgkw", {
    endpoint: "https://formspree.io/f/mbjqjgkw",
  });
  if (state.succeeded) {
    return (
      <div className={styles.contactForm}>
        <p>Thanks for your message!</p>
      </div>
    );
  }
  return (
    <div className={styles.contactForm}>
      <h2>Send me a message 🤙🏽</h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/mbjqjgkw"
      >
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
