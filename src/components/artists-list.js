import React, {Component} from 'react';
import Artist from './artist';
import { Container, Row, Col } from 'reactstrap';

export default class ArtistsList extends Component{
    constructor(){
        super()
        this.baseURL = "https://api.jsonbin.io/b/6032f51cf1be644b0a62a9a4/1";
        this.state = {
            artists:[]
        }
     }
     renderArtists({artists}){
        if(artists && artists.length>0){
            return artists.map((artist)=>{
                return <Artist key={artist.id} artistInfo={artist}/>
            })
        }
        return <p>
            No Artists! 
        </p>
     }
    render(){
        return (
            <div>
                <div className="w-100">
                    <Container className="my-5">
                        <Row>
                            {this.renderArtists(this.state)}
                        </Row>
                    </Container>
                </div>    
            </div>
        )
    }
    componentDidMount(){
        //fetch API
        fetch(this.baseURL,{method:'GET'})
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            this.setState({artists:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
   
}

