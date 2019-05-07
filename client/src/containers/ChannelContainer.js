import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {openDialogForCreateChannel} from "../actions";
import ChannelListContainer from '../containers/ChannelListContainer';
import GetChannelsContainer from '../containers/GetChannelsContainer';

class ChannelContainer extends React.Component {
    clickCreateChannel(e) {
        e.preventDefault();
        this.props.openDialogForCreateChannel();
    }

    render() {
        return (
            <div style={{color: "white", marginTop: "1rem"}}>
                <div style={{display: "grid", gridTemplateColumns: "auto auto"}}>
                    <h3 style={{marginLeft: "0.5rem"}}>Channel</h3>
                    <a style={{
                        color: '#bbb',
                        fontSize: '1.5rem',
                        textAlign: 'right',
                        marginRight: '1rem'}}
                       onClick={::this.clickCreateChannel}>+</a>
                </div>
                <GetChannelsContainer/>
                <ChannelListContainer/>
                <hr style={{backgroundColor: '#bbb'}}/>
            </div>
        )
    }
}

export default connect(null,d => bindActionCreators({openDialogForCreateChannel}, d))(ChannelContainer);