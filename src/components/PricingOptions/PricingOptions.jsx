import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    
    return (
        <div>
            <h2 className='text-2xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* {
                    pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing => <DaisyPricing pricing={pricing} key={pricing.id}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;