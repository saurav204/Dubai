import React from 'react'
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="Hero mx-4 sm:mx-12 lg:mx-12 bg-mainBlue md:h-[500px] my-12 rounded-3xl overflow-hidden md:flex-row flex flex-col h-[800px]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="left-container-content md:w-[50%] flex lg:my-8 ">
        <div className="left-icons flex flex-col "></div>
        <div className="right-content sm:py-16 sm:px-12 flex flex-col gap-4 p-8">
          <motion.h1
            className="text-white xl:text-[36px] md:text-[28px] sm:text-[24px] text-2xl"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            Hello I’m Subodh Bajpai !
          </motion.h1>
          <motion.div
            className="description flex flex-col gap-4 mb-4"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h1 className="text-white xl:text-6xl sm:text-3xl font-semibold text-4xl">
              An
              <span className="text-secondaryBlue"> Investor</span>
            </h1>
            <p className="text-white leading-7 opacity-70 sm:text-sm sm:leading-7  md:">
              About Funding Guru Subodh Bajpai: Empowering Entrepreneurs with
              Business Loans in Delhi NCR and Beyond. With years of experience
              providing credit-line to businesses.
            </p>
          </motion.div>
          <motion.div
            className="contact flex gap-6"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="contact-us-button bg-secondaryBlue text-mainBlue p-2 px-4 font-semibold rounded-full cursor-pointer items-center  justify-center md:flex sm:flex-row flex flex-col">
              Get started
            </div>
            <div className="phone flex justify-center items-center bg-secondaryBlue w-12 h-12 rounded-[50%]">
              <PhoneIcon></PhoneIcon>
            </div>
            <div className="phone-number flex justify-center items-center">
              <p className="text-white -ml-4">0800555443</p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="right-container-image md:w-[50%] "
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <img
          src="/hero-image.jpg"
          alt="hero-image"
          className="object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero
