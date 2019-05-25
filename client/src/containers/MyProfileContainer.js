import React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {getUserByGitHubId, setUserName} from "../actions";

import MyProfile from "../components/MyProfile"

class MyProfileContainer extends React.Component {
    handleChangeValue(e) {
        this.name = e.target.value;
    }

    modifyName() {
        this.props.setUserName(this.props.user.myProfile.name, this.name);
    }

    render() {
        if (this.props.user.myProfile === undefined) {
            this.props.getUserByGitHubId(this.props.oauth.profile.id);
            return null;
        }
        return <MyProfile info={this.props.user.myProfile}
                          name={this.name}
                          handleChangeValue={::this.handleChangeValue}
                          modifyName={::this.modifyName}/>;
    }
}

function mapToPropsState({oauth, user}) {
    return {oauth, user};
}

export default connect(mapToPropsState, d => bindActionCreators({setUserName, getUserByGitHubId}, d))(MyProfileContainer);