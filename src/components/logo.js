import React from "react";
import logo from '../assets/img/logo.svg'
import logoHover from '../assets/img/logo-white.svg'

function Logo() {
    return (
        <>
            <div className="box-logo">
                <a href="index" title="Flexis">
                    <img alt="" className="logo" src={logo} title="Flexis" />
                    <img alt="" className="logo_hove" src={logoHover} title="Flexis" type="image/svg+xml" />
                </a>
            </div>
        </>
    );
}

export default Logo