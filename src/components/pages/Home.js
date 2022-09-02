import React,{useRef} from 'react';
import '../../App.css';
import Section from '../Section';
import Footer from '../Footer';
import Introduction from '../Introduction';
import Artist from '../Artist';

function Home({lang}){

    const ref = useRef(null);

    const scrollview = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        console.log(ref)
    };

    return(
        <>
            <Section lang={lang} event={scrollview}/>
            <div ref={ref}><Introduction/></div>
            <Footer lang={lang}/>
        </>
    )
}
export default Home;
