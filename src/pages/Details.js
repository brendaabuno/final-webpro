import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ViewDetails from '../components/ViewDetails';

const Details = () => {
    const { menuId } = useParams();
    const [menu, setMenu] = useState({});

    useEffect(() => {
        // hit endpoint to view details
        
        fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/indonesia/?description=${menuId}`)
        .then(response => response.json())
        .then(data => setMenu(data)); 
        }, 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    return(
        <>
            <Navigation />
            <ViewDetails menu={menu} />
            <Footer />
        </>
    );
}

export default Details;