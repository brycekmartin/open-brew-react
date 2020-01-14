import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import {IBreweryDataItem} from '../Types/BreweryData';
import {Link, useParams, useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export const BreweryDetail: React.FC = (match) => {

    const location = useLocation();
    // const MapMarker = (text: string) => (<div style={{
    //     color: 'white',
    //     background: 'grey',
    //     padding: '15px 10px',
    //     display: 'inline-flex',
    //     textAlign: 'center',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: '100%',
    //     transform: 'translate(-50%, -50%)'
    // }}>
    //     {text}
    // </div>)
    type mapProps = {
        center: {
            lat: number,
            lng: number
        },
        zoom: number
    }
    type breweryDetail = {
        name: string | undefined,
        street: string,
        city: string,
        state: string,
        postalCode: string,
        latitude: number,
        longitude: number
    }
    const [map, setMap] = useState<mapProps>({center: {lat: location.state.latitude,lng:location.state.longitude},zoom: 11});
    const [defaultMap, setDefaultMap] = useState<mapProps>({center: {lat: 40.263647,lng:-76.889771},zoom: 16});
    const [brewery, setBrewery] = useState<breweryDetail>();
    const [lat, setLat] = useState<number>(0);
    const [lng, setLng] = useState<number>(0);
    const [name, setName] = useState<string>('');
    // useEffect(() => {
    //     setLat(location.state.latitude);
    //     setLng(location.state.longitude);
    //     setName(location.state.name);
    // },[location.state]);

    let {breweryId} = useParams();
    
    return(
        <Container maxWidth="lg">
            <h1>Brewery: {location.state.name}</h1>
            
            
            <p>{location.state.street}</p>
            <p>{location.state.city}&nbsp;{location.state.state}, {location.state.postalCode}</p>
            <p>{location.state.latitude}</p>
            <p>{location.state.longitude}</p>
            <div className="mapContainer" style={{height: '50vh', width: '50%'}}>
                <GoogleMapReact 
                    bootstrapURLKeys={{key: 'AIzaSyD_KNm1DYNdbGfQNEMn0QX1Yd04x9L1yzA'}}
                    defaultCenter={map.center}
                    defaultZoom ={defaultMap.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    
                >

                </GoogleMapReact>
            </div>
            <Button variant="contained" color="default"><Link to={`/${""}`}>Back</Link></Button>
        </Container>

    )
}
export default BreweryDetail;