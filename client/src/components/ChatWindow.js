import React from 'react';
import _ from 'lodash';
import * as at from "../constants/ActionTypes";

export default ({bodies}) => (
    <div className="border border-dark rounded" style={{
        width: '100%',
        height: '20rem',
        paddingTop: '0.25rem'
    }}>
        {_.map(bodies, (v) => {
            if (v.action == at.EXIT) {
                return (
                    <div className='bg-warning' style={{width: '100%', textAlign: 'center'}}>
                        {v.text}
                    </div>
                );
            }
            return (
                <div style={{width: '100%', paddingLeft: '0.5rem'}}>{v.id + " : " + v.text}</div>
            );
        })}
    </div>
);