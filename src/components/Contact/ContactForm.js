"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const serviceID = process.env.NEXT_PUBLIC_serviceID;
  const templateID = process.env.NEXT_PUBLIC_templateID;
  const publicKey = process.env.NEXT_PUBLIC_publicKey;
  const onSubmit = async (data) => {
    console.log("data", data);
    emailjs.send(serviceID, templateID, data, { publicKey: publicKey, })
      .then((response) => {
        //console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
        reset(); // clears the form
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });

  };

  // console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input type="email" placeholder="your@email" {...register("email", { required: true, maxLength: 80 })} className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"/>
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("phone number", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea {...register("project details", { required: true, maxLength: 80 })}
        placeholder="My project is about..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent" />
      <input type="submit" value="send request" className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer" />
    </form>
  );
}
