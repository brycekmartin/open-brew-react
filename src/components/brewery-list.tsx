import React, {useState} from 'react';
import {BreweryDataList} from '../Types/BreweryData';
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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

interface BreweryListProps extends RouteComponentProps {
    breweries: BreweryDataList
}

export const BreweryList: React.FC<BreweryListProps> = (match) => {


    const [breweryList, setBreweryList] = useState<BreweryDataList>();
    const classes = useStyles();
    return (
        
        <Container maxWidth="lg">
            <h2>Breweries</h2>

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
                    {match.breweries.breweries.map(brewery => (
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