import React from 'react';
import '../../App.css';
import Section from '../Section';
import Footer from '../Footer';
import Introduction from '../Introduction';

function Home({lang}){
    return(
        <>
            <Section lang={lang}/>
            <Introduction/>
            <Footer lang={lang}/>
            
        </>
    )
}
export default Home;
