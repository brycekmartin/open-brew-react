import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import {IBreweryDataItem} from '../Types/BreweryData';
import {Link, RouteComponentProps, useParams, useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

type BreweryDetailProps = {
        id: string,
     brewery: IBreweryDataItem
}
export const BreweryDetail: React.FC = (match) => {

    const location = useLocation();
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

    // useEffect(() => {
    //     setMap({center: {lat: location.state.latitude, lng:location.state.longitude},zoom: 11});
    //     setBrewery({
    //         name: match.brewery.name,
    //         street: match.brewery.street,
    //         city: match.brewery.city,
    //         state: match.brewery.state,
    //         postalCode: match.brewery.postalCode,
    //         latitude: match.brewery.latitude,
    //         longitude: match.brewery.longitude
    //     });
    // });

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
                >
                </GoogleMapReact>
            </div>
            <Button variant="contained" color="secondary"><Link to={`/${""}`}>Back</Link></Button>
        </Container>

    )
}
export default BreweryDetail;