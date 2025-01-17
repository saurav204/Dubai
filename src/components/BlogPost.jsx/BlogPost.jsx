import React from 'react'
import Hero from '../Service/Hero'
import Section2 from './Section2'
import Section3 from '../Service/Section3'
import Section4 from '../Blogs/Section4'

const BlogPost = () => {
  return (
    <div className='px-4 sm:px-12'>
    
    <div className='section1 hero-image my-12 '>
        <img src="/Blog Post.png" alt="" className='h-72 sm:h-auto object-fill' />
    </div>
    <div className='px-2'>

    <Section2></Section2>
    <div className='my-12'>
    <Section3></Section3>
    </div>
    </div>
    <Section4></Section4>
    </div>
  )
}

export default BlogPost
