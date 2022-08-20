import React from 'react';

const Loading = () => {
    return (
        <div className='text-center mt-5'>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;