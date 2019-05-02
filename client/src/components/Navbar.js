import React from 'react';
import NavbarOAuthContainer from '../containers/NavbarOAuthContainer';

export default ({handleDrawer}) => (
    <nav className="navbar navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="drawer" onClick={handleDrawer}>
            <span className="sr-only">Toggle drawer</span>
            <i className="material-icons">Menu</i>
        </button>
        <a className="navbar-brand" href="/">MyChat</a>
        <NavbarOAuthContainer/>
    </nav>
);