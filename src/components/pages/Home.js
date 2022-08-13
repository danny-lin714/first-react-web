import React from 'react';
import '../../App.css';
import Section from '../Section';
import Footer from '../Footer';

function Home({lang}){
    return(
        <>
            <Section lang={lang}/>
            <Footer lang={lang}/>
            
        </>
    )
}
export default Home;
