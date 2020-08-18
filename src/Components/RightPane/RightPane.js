import React from 'react';
import SidePane from './SidePane/SidePane';
import Container from './Container/Container';

export default function RightPane () {
    return(
        <div className="rightPane">
            <SidePane />
            <Container />
        </div>
    )
}