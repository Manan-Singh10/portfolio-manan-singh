import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <>
      <div className="text-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ContactForm />
        <ContactInfo />
      </div>

      <div className="p-5 text-center text-sm sm:text-xl text-zinc-200">
        Have an idea, a role, or a project in mind? I&apos;m just a message
        away!
      </div>
    </>
  );
};

export default ContactPage;
