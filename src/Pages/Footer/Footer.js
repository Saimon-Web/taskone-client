import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
    <div className='footerbg'>
        <div className='container-fluid   p-5'>
            <div className="row p-5 h-100">
                <div className="col-lg-4 col-sm-12">
                    <h2 className='text-warning fw-bold fs-1'>SERVICE</h2>
                    <p className='fs-5 text-white'><i class="fa-solid fa-location-arrow"></i> 12 Road,Nilkhet,Dhaka</p>
                    <p className='fs-5 text-white'><i class="fa-solid fa-message"></i> SERVICE@gmail.com</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h1 className='fs-3 text-warning'>Overview</h1>
                    <h1 className='fs-6 text-white'>Home</h1>
                    <h1 className='fs-6 text-white'>Service</h1>
                    <h1 className='fs-6 text-white'>Cart</h1>
                </div>
                <div className="col-lg-4 col-sm-12">

                    <form class="d-flex mb-2" role="search">
                        <input class="form-control me-2 p-2" type="subscribe" placeholder="Subscribe" aria-label="Search" />
                        <button class="btn btn-warning" type="submit">Submit</button>
                    </form>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;