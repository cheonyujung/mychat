import React from 'react';
import _ from "lodash";
import ChannelItem from "../components/ChannelItem";

export default ({channelNames}) => (
    _.map(channelNames, (n) => {
        return <ChannelItem channelName={n}/>;
    })
);