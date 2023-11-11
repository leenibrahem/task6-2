import React from 'react'
import './Card.css'


const Card = ({img , title , txt , disc}) => {
  return (
    
        <div className="text-center">
              <div className="different-img mb-5">
                <img src={img} alt=""/>
              </div>
              <div classNane="different-text">
                <h6 className='ttl'><a href="#" class="text-decoration-none text-black">{title}</a></h6>
                <h4><a href="#" class="text-decoration-none text-black">{txt}</a></h4>
                <p class="text-black-50">{disc}</p>
              </div>
            </div>

  )
}

export default Card
