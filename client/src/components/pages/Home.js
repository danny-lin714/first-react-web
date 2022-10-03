import React,{useRef,useState,useEffect} from 'react';
import '../../App.css';
import Section from '../Section';
import Footer from '../Footer';
import Introduction from '../Introduction';
import Artist from '../Artist';

function Home({setLang,lang}){
    const ref = useRef(null);

    const scrollview = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        
    };
    return(
        <>
            <button  className='translation' src='images/translation_icon.png' onClick={event=>setLang()} alt="asd"/>
            <Section set={setLang} lang={lang} event={scrollview}/>
            <div ref={ref}><Artist/></div>
        </>
    )
}
export default Home;
