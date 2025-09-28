import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    
    return (
        <div>
            <h2 className='text-2xl'>Get Our Membership</h2>
            <div className='grid grid-cols-3 gap-3'>
                {
                    pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;