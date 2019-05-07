import React from 'react';

import ChannelContainer from "../containers/ChannelContainer";

export default () => (
   <div style={{top : 0,
        left: 0,
        zIndex: 1,
        overflowX: 'hidden',
        height: '100%',
        position: 'fixed',
        backgroundColor: '#222',
        width: '20%'}}>
       <ChannelContainer/>
   </div>
);