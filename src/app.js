import { Button } from 'reactstrap';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/home';
import ArtistDetails from './components/artist-details'
import NotFound from './components/notfound';



const App = ()=>{

    return (
       <Router className="m-0 w-100 p-0">
            <Switch>
                <Route exact path="/"  component={Home}/>
                <Route path="/home"  component={Home} />
                <Route path="/artist/:id"  component={ArtistDetails}/>
                <Route path="*"  component={NotFound}/>
            </Switch>  
       </Router>
    )
}

export default App;
