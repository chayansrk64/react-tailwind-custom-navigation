import { CheckCheck } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2'>   <CheckCheck /> {feature}</p>
        </div>
    );
};

export default PricingFeature;