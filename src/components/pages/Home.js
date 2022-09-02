import React from 'react';
import '../../App.css';
import Section from '../Section';
import Footer from '../Footer';
import Introduction from '../Introduction';
import Artist from '../Artist';

function Home({lang}){
    return(
        <>
            <Section lang={lang}/>
            <Introduction/>
            <Artist/>
            <Footer lang={lang}/>
            
        </>
    )
}
export default Home;
