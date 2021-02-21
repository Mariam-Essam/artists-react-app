import React from 'react';
import {Link} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Alert, Row, Col
  } from 'reactstrap';

const Artist = ({ artistInfo }) => {
    let images = `images/covers/${artistInfo.cover}.jpg`;
    if (artistInfo)
        return (
            <Col md="6">
                <Alert color="primary" className="p-4">
                    <Card>
                        <CardImg top width="100%" src = {images} alt="Card image cap" />
                        <CardBody>
                            <Link to={`/artist/${artistInfo.id}`}><button className="btn btn-link"><CardTitle tag="h5"><h3 className="CardTitle text-info font-weight-bolder">{artistInfo.name}</h3></CardTitle></button></Link>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{artistInfo.gener}</CardSubtitle>
                            <CardText>{artistInfo.bio}</CardText>
                            <Link to={`/artist/${artistInfo.id}`}><Button color="warning" className="text-capitalize text-dark font-weight-bold"><h5 className="text-white text-decoration-none">Read more</h5></Button></Link>
                        </CardBody>
                    </Card>
                </Alert>
            </Col>
        )
        
        return <p className="alert alert-danger">
            No student info available.
        </p>
}


export default Artist;