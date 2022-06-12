import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { contact } from '../data';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_gxr8zeo",
          "template_32ugorb",
          form.current,
          "DozPL9bIsV3fI0lRB"
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current.reset();
            setDone(true);
            
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  

    return (
        <section id='contact' className='section bg-primary'>
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>Contact Me</h2>
                    <p className='subtitle'>Contact with me for more quiries</p>
                </div>

                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        {
                            contact.map((item, index) => {
                                const {icon, title, subtitle, description} = item;

                                return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                    <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">{icon}</div>
                                    <div>
                                        <h4 className='font-body text-xl mb-1'>{title}</h4>
                                        <p className='mb-1'>{subtitle}</p>
                                        <p className='font-normal text-accent'>{description}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                    <form ref={form} onSubmit={sendEmail} className='space-y-8 w-full max-w-[780px]'>
                        <div className="flex gap-8">
                            <input className='input rounded-lg' name='user_name' type="text" placeholder='Your Name' />
                            <input className='input rounded-lg' name='user_email' type="email" placeholder='Your Email' />
                        </div>
                        <textarea className='textarea rounded-lg' name='message' placeholder='Your Message'></textarea>
                        <input className='btn btn-lg bg-accent hover:bg-accent-hover rounded-lg' type="submit" value='Send Message' />
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;