import React from 'react'

const Card = (props) => {
  console.log(props.user, props.age);
  
  return (
    <div>
      <div className="Card">
              <img src={props.img} alt="" />
              
              <h1>{props.user}, {props.age}</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione atque illum explicabo autem laudantium quam iusto sint in enim tempora.</p>
              <button>view profile</button>
             </div>
    </div>
  )
}

export default Card
