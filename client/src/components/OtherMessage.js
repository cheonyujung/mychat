import React from 'react';
import Popup from "reactjs-popup";
import ContentContainer from "../containers/ContentContainer";
import UserProfileContainer from "../containers/UserProfileContainer";

export default ({body, showProfile}) => (
    <div style={{width: '100%', display: 'inline-block'}}>
        <Popup trigger={<span style={{color: 'gray', fontSize: '0.8rem'}}>{body.id}</span>}
               position="left center"
               onOpen={showProfile}>
            <UserProfileContainer/>
        </Popup>
        <div style={{backgroundColor: 'lightblue',
                    display: 'table',
                    color: 'white',
                    marginRight: '2%',
                    padding: '0.5%'}}>
            <ContentContainer contents={body.contents}/>
        </div>
    </div>
)