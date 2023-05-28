import React from 'react';
import '../stylesheets/Testimonial.css'

function Testimonial(props) {
  return (
    <div className='testimonial-container'>
      <img className='testimonial-image' src={require(`../images/${props.image}-testimonial.png`)} alt={`${props.altPic} Picture`} />
      <div className='text-testimonial-container'>
        <p className='testimonial-name'><strong>{props.name}</strong> in {props.country}</p>
        <p className='testimonial-charge'>{props.charge} in <strong>{props.company}</strong></p>
        <p className='testimonial-text' dangerouslySetInnerHTML={{ __html: props.testimonial }}></p>
      </div>
    </div>
  );
}

export default Testimonial;
