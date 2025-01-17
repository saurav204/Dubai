import { CalendarMonth, Person } from '@mui/icons-material'
import React from 'react'

const Blog = ({heading,subheading,description,date,author}) => {
  return (
    <div className='flex flex-col gap-4  bg-white p-6 rounded-lg shadow-lg sm:w-[70%]'>
      <div className="heading font-bold text-mainBlue uppercase">{heading}</div>
      <div className="subheading text-2xl capitalize">{subheading}</div>
      <div className="description text-gray-600 leading-7">{description}</div>
      <div className="date-author flex gap-6">
        <p className='gap-2'>
    <span><CalendarMonth></CalendarMonth></span>
        {date}
        </p>
        <p className='flex gap-2'><span><Person></Person></span>{author}</p>
      </div>
    </div>
  )
}

export default Blog
