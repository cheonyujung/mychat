import React from 'react';
import _ from 'lodash';

export default ({users, readyForCreateChannel, closeDialog}) => (
    <div style={{display: 'block'}} className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Create Channel</h3>
                </div>
                <div className="modal-body">
                    <form action="#" onSubmit={readyForCreateChannel} name="create-channel">
                        <div className="form-group">
                            <label className="col-form-label">Channel Name:</label>
                            <input type="text" className="form-control" name="channelName"/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">User to invite:</label>
                            {_.map(users, (user) => {
                                return (
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="user" value={user}/>
                                        <label className="form-check-label">{user}</label>
                                    </div>)
                            })}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeDialog}>Close</button>
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
