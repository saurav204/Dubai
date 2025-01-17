import React from 'react'
import Heading from '../Heading/Heading';
import Testimonial from './Testimonial';
import TestimonialGradient from './TestimonialGradient';
import { motion } from 'framer-motion';


const Section7 = () => {
  return (
    <div className="section7  py-12 my-12  px-4 sm:px-12 lg:px-12 flex flex-col justify-center items-center gap-6">
      <div className="top-heading sticky md:static top-[85px]  -mt-2 z-40 bg-white py-6">
        <Heading
          heading="testimonials"
          subheading="Hear what our client say"
        ></Heading>
      </div>
      <div className=" testimonials my-6 ">
        <TestimonialGradient />
      </div>
      <motion.div
        className="contact-us-button px-6 text-center bg-mainBlue text-white p-2  rounded-full cursor-pointer e  "
        initial={{ y: 0 }}
       
        transition={{ duration: 0.6 }}
      >
        View More
      </motion.div>
    </div>
  );
}

export default Section7
