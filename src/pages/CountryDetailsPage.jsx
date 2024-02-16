
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {

const [ oneCountry, setOneCountry ] = useState(null)
const [ imgURL , setImgURL ] = useState('')
const { countryId } = useParams();

useEffect(()=> {
    // if(countryId.length === 6 ){
    //     countryId.slice(-3);
    // }
    axios.get('https://ih-countries-api.herokuapp.com/countries/' + countryId)
        .then((response) => {
            setOneCountry(response.data);
            setImgURL(response.data.alpha2Code.toLowerCase());
            //console.log('response.data => ', response.data.alpha2Code.toLowerCase())
        })

},[countryId])

    return(
        <div>
            {oneCountry ? 
                <div>
                    <h1>Country Details</h1>
                    <div className="card mb-3">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${imgURL}.png`} alt="..." style={{height: '50px' , width: '80px', alignSelf: 'center'}} />
                        <div className="card-body">
                            <h1 className="card-title">{oneCountry.name.common}</h1>
                            <p className="card-text">Capital: {oneCountry.capital} </p>
                            <ul className="card-text">Borders with: {oneCountry.borders.map((x, index) => {
                                                          return(
                                                            <li key={index}><Link to={x} relative="path" element={<CountryDetails />} >{x}</Link></li>
                                                          )
                            })}</ul>
                          
                            <p className="card-text">Land area: {oneCountry.area}km2</p>
                        </div>
                    </div>
                    
                </div>
              : 
                <div>
                    <p>Loading...</p>
                </div>
             }
        </div> 

    )
}

export default CountryDetails;


                                                            {/* if(index[0] === oneCountry.borders.length ){
                                                                return x
                                                            } else if(index === oneCountry.borders.length - 1){
                                                                return x 
                                                            } else {
                                                                return x + ' - '
                                                            } */}