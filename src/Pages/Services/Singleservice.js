import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Singleservice = () => {
    const { id } = useParams();
    const [Singleservice, setSingleservice] = useState({})
    useEffect(() => {
        fetch(`https://afternoon-badlands-11600.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setSingleservice(data))
    }, [])
    
    return (

        <div>      
            <div className='container single   mb-5'>

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-6">
                        <img src={Singleservice.img} alt="" />
                    </div>
                    <div className="col-6  text-start">
                      
                        <h3 className='text-black fs-4 mb-2'>{Singleservice.name} </h3>
                        <h3 className='text-black fs-6 mb-2'>{Singleservice.description} </h3>
                        <h1 className='fs-4 text-primary mt-2'>$ {Singleservice.price}</h1>
                    
                        <button type='submit' className='btn btn-warning mt-3'>Add to Cart</button>
                 
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Singleservice;