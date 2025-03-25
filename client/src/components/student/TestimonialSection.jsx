import React from 'react'
import CallToAction from './CallToAction';
import { ClerkProvider } from '@clerk/clerk-react';
import assets, { dummyTestimonial } from '../../assets/assets/assets';
import { div } from 'framer-motion/client';

const TestimonialSection = () => {
  return (
    <div className='text-center pb-14 px8 md:px-0'>
      <h2 className='text-3xl  font-medium text-zinc-800'>Testimonials</h2>
      <p className='md:text-base text-zinc-500 mt-3'>Hear from our learners as they share their journeys of sucess and how <br /> Edemy has made a differee in their learning. </p>
      <div>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index}>
            <div>
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1>{testimonial.name}</h1>
                <p>{testimonial.role}</p>
              </div>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) =>(
                  <img className='h-5' key={i} src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt="Star" />
                ))}
                
              </div>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default TestimonialSection
