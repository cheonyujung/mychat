import React from 'react'
import {connect} from "react-redux"
import MyProfile from "../components/MyProfile"


class MyProfileContainer extends React.Component {
    handleChangeValue(e) {
        this.name = e.target.value;
    }

    render() {
        return <MyProfile info={this.props.profile}
                          name={this.name}
                          handleChangeValue={::this.handleChangeValue}/>
    }
}

export default connect(s => s.oauth)(MyProfileContainer)