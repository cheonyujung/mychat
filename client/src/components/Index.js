import React from 'react';

import MainContainer from "../containers/MainContainer";
import DrawerContainer from "../containers/DrawerContainer";
import CreateChannelDialogContainer from "../containers/CreateChannelDialogContainer";

export default () => (
    <div>
        <MainContainer/>
        <DrawerContainer/>
        <CreateChannelDialogContainer/>
    </div>
);