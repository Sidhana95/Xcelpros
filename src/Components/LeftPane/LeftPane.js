import React from 'react';
import Logo from './Logo';
import Icons from './Icons';
import UpgradeButton from './UpgradeButton';

export default function LeftPane (props) {
    return(
        <div className="leftPane">
            <Logo />
            <UpgradeButton />
            <div className="icon-section-1">
            <Icons icon="fa-bell-o" />
            <Icons icon="fa-download" />
            </div>

            <div className="icon-section-2">
            <Icons icon="fa-calendar-check-o" />
            <Icons icon="fa-user-plus" />
            <Icons icon="fa-search" />
            <Icons icon="fa-question" />
            <Icons icon="fa-user-circle-o" type="image" />
            </div>
        </div>
    )
}