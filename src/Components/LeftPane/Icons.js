import React from 'react';

export default function Icons (props) {
    const isImage = props.type=="image" ? true : false;
    return(
        <div className="icon-section-wrapper">
            <div className="icon-section">
                <div className="icon-wrapper">
                    <i class={"fa icon "+props.icon+(isImage?" image":"")} aria-hidden="true"></i>
                    {isImage && <span className="notification-alert"></span>}
                </div>
            </div>
        </div>
    )
}