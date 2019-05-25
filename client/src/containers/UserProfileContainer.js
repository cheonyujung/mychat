import React from 'react'
import {connect} from "react-redux"
import UserProfile from "../components/UserProfile"


class UserProfileContainer extends React.Component {
    render() {
        if (this.props.profile)
            return <UserProfile info={this.props.profile}/>;
        return null;
    }
}

export default connect(s => s.user)(UserProfileContainer)