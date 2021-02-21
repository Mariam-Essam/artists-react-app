import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="m-0 p-0 w-100">
            <div className="header overflw-hidden m-0 w-100 d-flex justify-content-center align-items-center">
                <img className="cover" src="./images/cover.png"/>
                <div className="header-overlay"></div>
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <h1 className="text-white text-capitalize header-word">Welcome to Our Home ;)</h1>
                                <h2 className="text-info">Music DB<FontAwesomeIcon className="mx-3" icon={faHeadphones} /></h2>
                                <p className="text-white">It is music time </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};


export default Header;