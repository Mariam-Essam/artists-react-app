import React from 'react';
import {Link} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Alert, Row, Col, Container
  } from 'reactstrap';

  const ArtistAlbum = ({ albumInfo }) => {
    if(albumInfo && albumInfo.length>0){
        return albumInfo.map((album)=>{
            let image = `/images/albums/${album.cover}.jpg`;
            console.log(image)
            return (
            <div>
                <Col sm="12">
                    <Card className="my-4">
                        <CardImg top width="100%" className="img-fluid card-img"src={image}/>
                        <CardBody>
                        <CardTitle tag="h5">{album.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {album.year}</CardSubtitle>
                        <CardText>Price: {album.price}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </div>
            )
        })
    }
    return <p>
        No students! 
    </p>
}
export default ArtistAlbum;