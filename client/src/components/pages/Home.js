import React,{useRef,useState,useEffect} from 'react';
import '../../App.css';
import Section from '../Section';
import Artist from '../Artist';

function Home({setLang,lang}){
    const ref = useRef(null);

    const scrollview = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        
    };
    return(
        <>  
            <Section set={setLang} lang={lang} event={scrollview}/>
            <div ref={ref}><Artist lang={lang}/></div>
        </>
    )
}
export default Home;
