"use client";

import AnimatedSection from "@/components/Animation";
import { addFormToDB, validateDetails } from "@/helpers/form";
import { randomId } from "@/helpers/randomId";
import Layout from "@/page";
import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const { name, email, message } = form;
    setLoading(true);

    if (!validateDetails(name, email, message)) {
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 1500);
    } else {
      setError(false);
      await addFormToDB(randomId(), name, email, message).then(() => {
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
        }, 1500);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      });
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      sendMessage(event);
    }
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Layout>
      <AnimatedSection
        delay={0.1}
        className="flex flex-col gap-5 w-screen px-8 md:px-0 md:w-11/12"
      >
        <h1>Contact</h1>
        <h3>Let's Chat.</h3>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            className="input input-bordered text-white"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            className="input input-bordered text-white"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          <textarea
            name="message"
            className="textarea textarea-bordered text-white"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></textarea>

          <button className="btn btn-neutral text-white" onClick={sendMessage}>
            {loading ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
              "Send"
            )}
          </button>

          {error ? (
            <div role="alert" className="alert alert-error">
              <XMarkIcon className="w-5 h-5" />
              <span>Please fill in the fields</span>
            </div>
          ) : null}

          {success ? (
            <div role="alert" className="alert alert-success">
              <CheckIcon className="w-5 h-5" />
              <span>Success! I'll get back to you.</span>
            </div>
          ) : null}
        </form>
      </AnimatedSection>
    </Layout>
  );
}
