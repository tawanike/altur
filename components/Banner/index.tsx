import Link from 'next/link';
import Image from 'next/image'
import { BannerContainer, BannerText, BannerImage } from '../../theme/components/Banner';
import { Text, Button } from '../../theme/components';
import React from 'react';


const Banner = () => {
    return(<BannerContainer>
        <BannerText>
            <Text title heavy>We are Mmogo Media!</Text>
            <Text medium light>We are a software consultancy that uses technology to solve complex user experience, data science and software problems. We partner with our clients to design and implement software  that is scalable, viable and flexible. </Text>
            {/* <Button medium className="mt-3">Learn more</Button> */}
        </BannerText>
        <BannerImage>
            <img 
                alt="business ideas"
                style={{ width: "100%", height: "100%" }}
                src="/ideas.jpg" />
        </BannerImage>
        
    </BannerContainer>);
}

export default Banner;