

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



const Contactme = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_mi57t0p', 'template_0y3gqsn', form.current, {
          publicKey: 'lD32hfl7cNbiqhBYH',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message sent Successfully",
                showConfirmButton: false,
                timer: 3000
              });

          },
          (error) => {
            console.log('FAILED...', error.text);
            Swal.fire({
                title: 'Error!',
                text: 'Message not sent',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          },
        );
    };
    return (
        <div>
            <section id="contact" className="min-h-screen my-60">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-10">
                        <div className="lg:w-1/2 lg:mx-10">
                            <h1 className="text-2xl font-bold font-tertiary border-b-2 border-yellow-400 pb-2 lg:text-4xl">Let’s talk</h1>

                            <form className="mt-12" ref={form} onSubmit={sendEmail}>
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                           
                                            placeholder="Your name"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                        <input
                                            type="email"
                                            name="email"
                                          
                                            placeholder="johndoe@example.com"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea
                                        name="message"
                                       
                                        placeholder="Message"
                                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white text-xl capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300">Contact Information</h3>
                                {/* Social media icons */}
                                <div className="flex mt-4 -mx-1.5">
                                    <a
                                        className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                                        href="YOUR_LINKEDIN_URL"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    </a>

                                    <a
                                        className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                                        href="YOUR_FACEBOOK_URL"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                                    </a>

                                    <a
                                        className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                                        href="YOUR_GITHUB_URL"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contactme;
