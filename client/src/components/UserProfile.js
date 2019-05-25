import React from "react";

export default ({info}) => (
    <div style={{display: 'grid', gridTemplateRows: "4rem auto", margin: "0.5rem"}}>
        <img style={{width: "45px", borderRadius: "50%", margin: "auto"}} src={info.avatarUrl}/>
        <div className="form-group">
            <label style={{fontWeight: "bold"}}>이메일</label>
            <span className="form-control">{info.email}</span>
        </div>
        <div className="form-group">
            <label style={{fontWeight: "bold"}}>이름</label>
            <span type="text" className="form-control">{info.name}</span>
        </div>
    </div>
)