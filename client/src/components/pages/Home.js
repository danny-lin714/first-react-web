import React,{useRef,useState,useEffect} from 'react';
import '../../App.css';
import Section from '../Section';
import Footer from '../Footer';
import Introduction from '../Introduction';
import Artist from '../Artist';

function Home({lang}){
    const [backendData,setbackendData] = useState([{}]);
    const ref = useRef(null);

    const scrollview = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        
    };
    useEffect(() => {
        fetch("http://localhost:5000/api").then(
            response=>response.json()
        ).then((data)=>{
            setbackendData(data)
        })
    }, []);

    return(
        <>
            <Section lang={lang} event={scrollview}/>
            <div ref={ref}><Introduction/></div>
            <Artist/>
            <Footer lang={lang}/>
            <div>
            {(typeof backendData.users ==="undefined") ? (
                <p>loading</p>
            ) : (
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )}
            </div>
        </>
    )
}
export default Home;
