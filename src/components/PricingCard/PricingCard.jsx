import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing
     
    return (
        <div className='bg-amber-500 p-4 rounded-2xl my-4 flex flex-col'>
            {/* card header */}
            <div>
                <h3 className='text-5xl font-bold'>{name}</h3>
                <h4 className='text-xl my-3 font-semibold'>Price: $ {price}</h4>
            </div>
            {/* card body */}
           
            <div className='bg-amber-700 rounded-2xl p-3 mt-4 flex-1'>
                 <p>{description}</p>
                <h5 className='text-xl my-2'>Features:</h5>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-3">Subscribe</button>
        </div>
    );
};

export default PricingCard;