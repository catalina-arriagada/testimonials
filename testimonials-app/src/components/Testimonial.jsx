import React from 'react';

function Testimonial() {
  return (
    <div className='testimonial-container'>
      <img className='testimonial-image' src={require('../images/emma-testimonial.png')} alt='Emma Picture' />
      <div className='text-testimonial-container'>
        <p className='testimonial-name'>Emma en Suecia</p>
        <p className='testimonial-charge'>Ingeniera de Software in Spotify</p>
        <p className='testimonial-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, recusandae nesciunt! Nulla explicabo deleniti aspernatur molestias iure odio eaque aperiam sed facere obcaecimos id est.</p>
      </div>
    
    </div>
  );
}

export default Testimonial;
