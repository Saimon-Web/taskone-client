import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('https://afternoon-badlands-11600.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    return (
        <div className='back2 py-5'>
           
            <div className="container py-5">
                <h4 className='text-warning text-start'>We Offering</h4>
            <h1 className='text-white fw-bold text-start mt-3 mb-5'>All Professional IT Services</h1>
                <div className="row row-cols-1 row-cols-md-3  g-4">
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>

         </div>
    );
};

export default Services;