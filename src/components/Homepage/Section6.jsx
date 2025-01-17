import React from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';
import Blog from './Blog';
import BlogWithImage from './BlogWithImage';
import { motion } from 'framer-motion';

const Section6 = () => {
  return (
    <div className="section6 blogs bg-subtleBlue sm:py-12 sm:my-12  px-4 sm:px-12 lg:px-12 relative">
      <div className="absolute ">
        <StarIcon></StarIcon>
      </div>
      <div className="top sticky lg:top-20 top-20 bg-subtleBlue p-8 z-40 ">
        <div className="w-full bg-white">
          <Heading heading="blogs" subheading="latest post"></Heading>
        </div>
      </div>
      <div className="blogs my-12 flex flex-col gap-8 ">
        <motion.div
          className="lg:flex-row flex flex-col gap-6 lg:sticky top-48 bg-subtleBlue z-10"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.1 }}
        >
          <BlogWithImage
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          />
          <Blog
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          ></Blog>
        </motion.div>
        <motion.div
          className="lg:flex-row flex flex-col gap-6 lg:sticky top-48 bg-subtleBlue z-10"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Blog
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          ></Blog>
          <BlogWithImage
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Section6
