import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Service from '../Service/Service';
import SalesTeams from '../SalesTeams/SalesTeams';
import ParcelTrackingFeatures from '../ParcelTrackingFeatures .jsx/ParcelTrackingFeatures ';
import BeMerchant from '../BeMerchant/BeMerchant';
import PostureCorrectorTestimonial from '../PostureCorrectorTestimonial .jsx/PostureCorrectorTestimonial ';
import FAQ from '../Accordian/FAQ';

const Home= () => {
    return(
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Service></Service>
            <SalesTeams></SalesTeams>
            <ParcelTrackingFeatures></ParcelTrackingFeatures>
            <BeMerchant></BeMerchant>
            <PostureCorrectorTestimonial></PostureCorrectorTestimonial>
            <FAQ></FAQ>
        </div >
    );
};

export default Home;