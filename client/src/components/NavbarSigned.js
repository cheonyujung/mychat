import React from 'react';
import Popup from "reactjs-popup";
import MyProfileContainer from "../containers/MyProfileContainer";

export default ({imgSrc, handleSignOut}) => (
    <div>
        <button className="btn btn-outline-danger" role="button" onClick={handleSignOut}
                style={{marginRight: "0.5rem", padding: "0.5rem"}}>Sign Out</button>
        <Popup trigger={<button className="btn btn-outline-info" role="button"
                                             style={{marginRight: "0.5rem", padding: "0.5rem"}}>My Profile</button>} position="bottom center">
            <MyProfileContainer/>
        </Popup>
        <img style={{width: "45px", borderRadius: "50%"}} src={imgSrc} />
    </div>
);