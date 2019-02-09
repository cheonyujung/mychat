import React from 'react';
import ChatWindowContainer from "../containers/ChatWindowContainer";
import ExitContainer from "../containers/ExitContainer";

export default ({handleSendText}) => (
    <div className="container">
        <div className="row">
            <div className="col-1" />
            <div className="col">
                <div style={{ display: 'table', width: '100%' }}>
                    <h1 style={{ display: 'table-cell' }}>Chat</h1>
                    <ExitContainer />
                </div>
                <ChatWindowContainer />
                <div style={{ height: '0.5rem' }} />
                <form action="#" onSubmit={handleSendText}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">JCooky</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Put text for the chat" name="text" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-1" />
        </div>
    </div>
);