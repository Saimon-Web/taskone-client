import React from 'react';
import img from '../images/Illustration.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className='back  p-5'>
            <div>

                <div class="py-24">
                    <div class="container ">
                        <div class="row align-items-center">
                            <div class="col-12 col-lg-5 mb-10 mb-lg-0">

                                <div class="display-4 mb-5 mt-n16">🚀</div>

                                <h1 class="ls-tight text-white fw-bold display-3 mb-5">
                                    We Bring Great <br /> Ideas to Life
                                </h1>



                                <div class="mx-n2">
                                    <a href="#" class="btn btn-lg btn-dark shadow-sm mx-2 px-lg-8">
                                        READ MORE
                                    </a>

                                </div>
                            </div>
                            <div class="col-12 col-lg-6 ms-lg-auto">
                                <div class="w-xl-12/10 position-relative">

                                    <span class="d-none d-lg-block position-absolute top-0 start-0 transform translate-x-n32 translate-y-n16 w-2/3 h-2/3 bg-warning opacity-20 rounded-circle filter blur-50"></span>
                                    <span class="d-none d-xl-block position-absolute bottom-0 end-0 transform translate-x-16 translate-y-16 w-32 h-32 bg-warning opacity-60 rounded-circle filter blur-50"></span>

                                    <img className='img-fluid illustration ms-2' alt="..." src={img} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;