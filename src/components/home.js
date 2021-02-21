import React from 'react';
import Header from './header';
import ArtistsList from './artists-list'
import { Alert, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

const Home = () => {
    return (
        <div className="m-0 w-100 p-0">
            <Header id="header" className="m-0 w-100 p-0"/>
            <ArtistsList id="artists" className="m-0 w-100 py-5 artists-list"/>
        </div>
    );
};


export default Home;