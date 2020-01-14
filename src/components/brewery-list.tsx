import React, {useState, useEffect} from 'react';
import {IBreweryDataList} from '../Types/BreweryData';
import {Link, RouteComponentProps} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

interface BreweryListProps extends RouteComponentProps {
    breweries: IBreweryDataList
}

export const BreweryList: React.FC<BreweryListProps> = (match) => {

  
    const [brewerySearchedList, setBrewerySearchedList] = useState<IBreweryDataList>({breweries: []});
    const [searchValue, setSearchValue] = useState<string>('');
    const classes = useStyles();

    
    const searchTable = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        if(event.target.value !== ''){
            console.log("searchValue:" + searchValue);
            let filteredBreweryList = match.breweries.breweries.filter( result =>  result.city.toLocaleLowerCase() === event.target.value.toLocaleLowerCase() );

            console.log(filteredBreweryList);
            setBrewerySearchedList({breweries: filteredBreweryList});
      
        }
        else{
            setBrewerySearchedList({breweries: match.breweries.breweries});
        }
        //console.log("searchValue: " + event.target.value);
    };

    // handleSubmit(e: React.FormEvent<HtmlInputElement>) {
    //     e.preventDefault();
    // });

    useEffect(() => {
            setBrewerySearchedList({breweries: match.breweries.breweries});
    },[match.breweries.breweries]);


    return (
        
        <Container maxWidth="lg">
            <h2>Breweries</h2>
            <form noValidate autoComplete="off">

                <TextField id="city-search" placeholder="City Search" onChange={searchTable} type="input" ></TextField>
             
            </form>
           <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Street</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Zip</TableCell>
                            <TableCell>Website</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {match.breweries.breweries.map(brewery => ( */}
                        {brewerySearchedList.breweries.map(brewery => (
                        <TableRow key={brewery.id}>
                            <TableCell><Link to={{pathname:`/brewery/${brewery.id}`, state: brewery}}>{brewery.name}</Link></TableCell>
                            <TableCell>{brewery.breweryType}</TableCell>
                            <TableCell>{brewery.street}</TableCell>
                            <TableCell>{brewery.city}</TableCell>
                            <TableCell>{brewery.state}</TableCell>
                            <TableCell>{brewery.postalCode}</TableCell>
                            <TableCell><a href={brewery.websiteUrl}>{brewery.websiteUrl}</a></TableCell>       
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>

           </TableContainer>
        </Container>
    )
}
export default BreweryList;

// type BreweryListState = {
//     breweries: [],
//     loading: true,
//     error: false
// }
//export class BreweryList extends Component {

    // state = {
    //     breweries: [],
    //     loading: true,
    //     error: false
    // }
//     componentDidMount(){
//         fetch('http://localhost:55667/api/brewery')
//             .then(response => response.json())
//             .then(response => this.setState({
//                 breweries: response.results,
//                 loading: false
//             }))
//             .catch(error => this.setState({
//                 loading: false,
//                 error: true
//             }));
//     }

//     render() {
//         const {breweries, loading, error } = this.state;
//         return (
//             <div>
//                 {loading && <div>Loading...</div>}
//                 {!loading && !error && breweries.map(brewery => (
//                 <div key={brewery.name}>{brewery.name}</div>
//                 ))
//             }
//             {error && <div>Error message</div>}
//             </div>
//         )
//     }
// }