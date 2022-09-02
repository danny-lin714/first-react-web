import React,{useRef} from 'react';
import '../../App.css';
import Section from '../Section';
import Footer from '../Footer';
import Introduction from '../Introduction';
import Artist from '../Artist';
import { resolvePath } from 'react-router-dom';

function Home({lang}){

    const ref = useRef(null);

    const scrollview = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        fetch("/api",{method:"GET"}).then(response=>console.log(response.json()))
    };

    return(
        <>
            <Section lang={lang} event={scrollview}/>
            <div ref={ref}><Introduction/></div>
            <Artist/>
            <Footer lang={lang}/>
        </>
    )
}
export default Home;
