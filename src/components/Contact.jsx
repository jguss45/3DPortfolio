import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import validator from 'validator';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef(); //create ref object to reference the form
  const [form, setForm] = useState({
    name: "",
    email: {
      value: "",
      error: false,
      errorMsg: "",
    },
    message: "",
  }); //for resetting the form 
  
  const [loading, setLoading] = useState(false); //to show user 'sending' or not after they submit

  const handleChange = (e) => {
    //for updating the form state anytime there is a change in the form fields
    const { name, value } = e.target;

    //Validate email on change to 'email' form field
    if (name === "email") {
      const isValidEmail = validator.isEmail(value);
      setForm({
        ...form,
        email: {
          value: value,
          error: !isValidEmail,
          errorMsg: isValidEmail ? "" : "Please enter a valid email address",
        },
      });
    } else {
      setForm({ 
        ...form, 
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent form submission from causing a page refresh
    //check valid email before submitting
    const isValidEmail = validator.isEmail(form.email.value);
    if(!isValidEmail) {
      setForm({
        ...form,
        email: {
          ...form.email,
          error: true,
          errorMsg: "Please enter a valid email address and try again",
        },
      });
      return;
    }

    setLoading(true); //show 'sending'

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Joseph",
          from_email: form.email.value,
          to_email: "joeguss45@aol.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: "",
            email: {
              value: "",
              error: false,
              errorMsg: "",
            },
            message: "",
          }); //if successful we alert user and then reset the form
        }, 
        (error) => {
          setLoading(false)
          console.log(error);

          alert('Something went wrong.')
      }); //if error we alert user but don't reset form
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email'
              name='email'
              value={form.email.value}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7' 
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");