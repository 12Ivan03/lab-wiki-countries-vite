import './CountryDetailsPage.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {

const [ oneCountry, setOneCountry ] = useState(null)
const [ isLoading, setIsLoading] = useState(true);
const { countryId } = useParams();

useEffect(()=> {
    axios.get('https://ih-countries-api.herokuapp.com/countries/' + countryId)
        .then((response) => {
            setOneCountry(response.data);
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(true)
        })
    },[countryId])

    if(isLoading){
        return (
            <div className="spinner-grow text-success center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    } 

    return(
                <div className='home-container'>
                    <h1 className='title'>Country Details</h1>
                    <div className="card mb-3 card-home single-container">
                        <img className='img-single-country-flag' src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} alt="..." style={{height: '50px' , width: '80px', alignSelf: 'center'}} />
                        <div className="card-body">
                            <h1 className="card-title">{oneCountry.name.common}</h1>
                            <p className="card-text">Capital: {oneCountry.capital} </p>
                            <ul className="card-text card-text-single">
                                Borders with: {oneCountry.borders.map((x, index) => {
                                                    return(
                                                        <li className='li-countries' key={index}><Link to={`/${x}`} element={<CountryDetails />} >{x}</Link></li>
                                                    )
                                              })}
                            </ul>
                            <p className="card-text">Land area: {oneCountry.area}km2</p>
                        </div>
                    </div>  
                </div>
    )
}

export default CountryDetails;