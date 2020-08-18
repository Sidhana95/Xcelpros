import React from 'react';

export default function SecondLevelMenu (props) {
    return( 
        <div className="second-level-category">
            <div className="second-level-content">
                <div className="second-level-item-wrapper">
                    <div className={"second-level-item-section "+ (props.isActive?'active':'')}>
                        <div className="second-level-item-text-wrapper">
                            <div className="second-level-item-text-section">
                                <div className="second-level-item-text">
                                    <span>{props.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}