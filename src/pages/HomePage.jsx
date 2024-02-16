
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [ axiosData, setAxiosData ] = useState(null)

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then((response) => {
                setAxiosData(response.data);
                console.log('This is the information fromteh axios==> ', response.data )
            })
            
    },[])

    return(
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>

            {!axiosData ? <p>Loading...</p> : <p></p> }

            {axiosData && axiosData.map((country) => {

                // In this way the console doesnt show 250 error and 250 okay
                const lettersCountry = country.alpha2Code.toLowerCase();
                const imgURL = `https://flagpedia.net/data/flags/icon/72x54/${lettersCountry}.png`

                return(
                    <div className="card" key={country._id}>
                        <div className="card-body">
                            <h5 className="card-title">{country.name.official}</h5>
                            <p className="card-text">  <img src={imgURL} alt="country flag not found" /> </p>
                            <p className="card-text">Common name: {country.name.common} / Capital: {country.capital[0]}</p>
                            {country.region ? <p className="card-text">Region : {country.region}</p> : <p></p> }
                            <button className="btn btn-primary">
                                <Link to={country.alpha3Code} style={{color: "white", textDecoration: 'none'}} >
                                    More Details
                                </Link>
                            </button>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default HomePage;


// <div className="card">
//                 <h5 className="card-header">Featured</h5>
//                 <div className="card-body">
//                     <h5 className="card-title">Special title treatment</h5>
//                     <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>