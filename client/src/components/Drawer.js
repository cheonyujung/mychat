import React from 'react';

export default ({clickCreateChannel}) => (
   <div style={{top : 0,
        left: 0,
        zIndex: 1,
        overflowX: 'hidden',
        height: '100%',
        position: 'fixed',
        backgroundColor: '#222',
        width: '20%'}}>
       <header>
           <h3 style={{color: '#fff', textAlign: 'center', marginTop: '1rem'}}>Title</h3>
       </header>
       <hr style={{backgroundColor: '#bbb'}}/>
       <div style={{display: 'grid'}}>
           <a style={{
               color: '#bbb',
               fontSize: '1.5rem',
               textAlign: 'center'}}
              onClick={clickCreateChannel}>
               Add Channel
           </a>
       </div>
       <hr style={{backgroundColor: '#bbb'}}/>
   </div>
);