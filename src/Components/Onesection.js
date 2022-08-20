import React from 'react';
import img from '../images/section-background-ilus.png'
import './Onesection.css'
const Onesection = () => {
    return (
        <div className='back2'>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-6">
                        <img src={img} className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h4 className='text-white text-start'>
                            About Us Antech
                        </h4>
                        <h2 className='text-white text-start fw-bold fs-1 mt-3'>

                            Not Just Traditional Cyber <br />
                            & Immigration Firm
                        </h2>
                        <p className='text-white text-start mt-3 '>
                            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injecte humour or randomised words which
                        </p>
                        <div class="text-start">
                            <a href="#" class="btn btn-lg btn-dark  shadow-sm mx-2 px-lg-8">
                                READ MORE
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onesection;