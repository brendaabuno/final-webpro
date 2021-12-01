import React, { useState, useEffect } from 'react';
import MenuItem from "./MenuItem";

const MenuUtama = () => {
    const [menuUtama, setMenu] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        console.log(menuUtama);
        // hit endpoint to get the data
        fetch('https://cuaca-gempa-rest-api.vercel.app/weather/indonesia')
        .then(response => response.json())
        .then(data => setMenu(data.data.areas));

        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    const  handleSubmit = (e) => {
        e.preventDefault();

    // hit endpoint to search
    fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${text}`)
    .then(response => response.json())
    .then(data => setMenu(data.data.areas));

    setText('');
    }
    const handleChange = (e) => {setText(e.target.value)};

    return(
        
        <section className="py-6">
            <div className="container px-4 px-lg-5 mt-5">
                    <h2>Search Province</h2>
                    <form onSubmit={handleSubmit}>
                       <input type="text" className="form-control" onChange={handleChange} value={text} placeholder="ex : sulawesiutara or sulawesi-utara" />
                    </form>

                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-4">
                    
                    { menuUtama.map(menu => <MenuItem key={menu.id} menu={menu} />) }

                </div>

            </div>
        </section>
    );
}

export default MenuUtama;
