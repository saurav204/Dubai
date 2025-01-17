import React from 'react'

const Section3 = () => {
  return (
    <div className="section3">
      <div className="image relative">
        <img
          src="/Call to Action.png
        "
          alt=""
          className='h-[320px] xl:h-auto'
        />
        <div className="texts absolute lg:flex-row lg:flex flex flex-col justify-between top-8 lg:px-32 items-center ">
          <div className="left flex flex-col gap-8 lg:w-[60%] items-center lg:items-baseline text-center lg:text-left">
            <div className="heading">
              <h1 className="text-white font-semibold lg:text-[36px] text-2xl text-center sm:text-left lg:leading-[40px] pt-6">
                Have a project in mind! Let’s work together.
              </h1>
            </div>
            <div className="subheading text-[16px] text-white opacity-75 w-[90%] text-center lg:text-left ml-4 sm:ml-0 leading-5">
              <h1>
                Nam tincidunt condimentum arcu, rhoncus interdum eros vulputate
                ut. Maecenas molestie sodales tristique. Nunc scelerisque tortor
                vitae ipsum rhoncus auctor.{" "}
              </h1>
            </div>
          </div>
          <div className="right  py-6">
            <div className="contact-us-button bg-white text-mainBlue p-2 px-6 py-3 font-semibold rounded-full cursor-pointer ">
              Contact Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3
