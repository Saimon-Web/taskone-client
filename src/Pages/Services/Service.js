import React from 'react';
import { useNavigate } from 'react-router-dom';
const Service = (props) => {
    const {name,description,service,img,_id}=props.service;
    const navigate=useNavigate();
    const handlenavigate=()=>{
        navigate(`service/${_id}`)
    }
    return (
  
     <div class="col ">
    <div class="card bg-dark pt-2">
      <img src={img} class="card-img-top" height='200px' width='200px' alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-white fw-bold">{name}</h5>
        <p class="card-text text-white">{description.slice(0,100)}....</p>
        <button onClick={()=>handlenavigate(_id)} className='btn btn-dark'>Read more</button>
      </div>
    </div>
  </div>
      
    );
};

export default Service;