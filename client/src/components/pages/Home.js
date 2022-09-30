import React,{useRef,useState,useEffect} from 'react';
import '../../App.css';
import Section from '../Section';
import Footer from '../Footer';
import Introduction from '../Introduction';
import Artist from '../Artist';

function Home({lang}){
    const ref = useRef(null);

    const scrollview = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        
    };
    

    return(
        <>
            <Section lang={lang} event={scrollview}/>
            <Artist/>
        </>
    )
}
export default Home;
