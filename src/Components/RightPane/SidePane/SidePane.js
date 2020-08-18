import React from 'react';
import CollapseButton from './CollapseButton';
import SecondLevelMenu from './SecondLevelMenu';

export default function SidePane () {
    return(
        <div className="sidePane">
            <CollapseButton />
            <div className="sidepane-wrapper">
                <div className="sidepane-title-header">
                    <div className="item-title">Workspaces</div>
                </div>
                <div className="search-section">
                    <div className="search-content">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Filter boards..." />
                    </div>
                </div>
                <div className="sidepane-content">
                    <div className="first-level-category">
                        <div className="collapse-icon">
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="first-level-content">
                            <div className="icon-section">
                                <div className="icon-container">
                                    <i class="fa fa-home"></i>
                                </div>
                            </div>
                            <div className="item-name-section">
                                <div className="item-name-container">
                                    <div className="item-name">
                                        <span>Main</span>
                                    </div>
                                </div>
                            </div>
                            <div className="new-button-section">
                                <div className="new-button">
                                    <i className="fa fa-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SecondLevelMenu name="Web Deisgn" isActive={true}/>
                    <SecondLevelMenu name="bvghbhj" isActive={false} />
                </div>
            </div>
        </div>
    )
}