import React from 'react';
import ArtistAlbum from './artist-album'
import {Container,Row} from 'reactstrap';
import { useState, useEffect } from 'react'

const ArtistDetails = ({ match }) => {
    let [artist, setArtist] = useState({});
    let url = `https://api.jsonbin.io/b/6032f51cf1be644b0a62a9a4/1`;
    console.log(artist)
    for(let i = 0; i<artist.length; i++){
        console.log("lefy")
        if(artist[i].id == match.params.id){
            setArtist(artist[i])
            console.log("ah sah")
        }
    }
    const renderArtist = (artist)=>{
        if (artist.id){
            let images = `/images/covers/${artist.cover}.jpg`;
        return (
            <div>
                <Container>
                    <div className="d-flex justify-content-center my-2">
                        <img className="w-50" height="300" src={images}/>
                    </div>
                    <h1 className="text-center text-danger mb-5">{artist.name}</h1>
                    <div className="my-2">
                        <span className="font-weight-bolder text-info mx-2">Genre:</span><span> {artist.genre}</span>
                    </div>
                    <div className="my-2">
                        <span className="font-weight-bolder text-info mx-2">Bio:</span><span>Bio: {artist.bio}</span>
                    </div>
                    <Container className="my-3">
                        <h5 className="text-info">Albums:</h5>
                        <Row>
                        <ArtistAlbum albumInfo = {artist.albums}/>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
        }

    return <p className="alert alert-danger">
        No artist info available
    </p>
    }
    useEffect(() => {
        //fetch 
        fetch(url, { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setArtist(data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <div>
            {renderArtist(artist)}
        </div>
    )
}
    


export default ArtistDetails;