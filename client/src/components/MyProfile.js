import React from "react";

export default ({info, name, handleChangeValue, modifyName}) => (
    <div style={{display: 'grid', gridTemplateRows: "4rem auto", margin: "0.5rem"}}>
        <img style={{width: "45px", borderRadius: "50%", margin: "auto"}} src={info.avatarUrl}/>
        <div className="form-group">
            <label style={{fontWeight: "bold"}}>이메일</label>
            <span className="form-control">{info.email}</span>
        </div>
        <div className="form-group">
            <label style={{fontWeight: "bold"}}>이름</label>
            <input type="text" className="form-control" defaultValue={info.name} value={name} onChange={handleChangeValue} placeholder="이름을 입력해주세요"/>
        </div>
        <button className="btn btn-outline-primary" role="button"
                style={{padding: "0.5rem"}}
                onClick={modifyName}>수정</button>
    </div>
)