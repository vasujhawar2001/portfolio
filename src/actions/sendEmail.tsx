"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message") || "";

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
        from: "Portfolio Form <onboarding@resend.dev>",
        to: "vasujhawar2001@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail,
        react: <ContactFormEmail message={message} senderEmail={senderEmail} />
      });
  } catch (error: any) {
    return {
      error: error,
    };
  }

  return {
    data,
  };
};