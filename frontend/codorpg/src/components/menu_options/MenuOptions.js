import React from "react";
import {Col} from "react-bootstrap";

import './MenuOptions.css'

export const MenuOptions = (props) => {
    return (
        <Col key={props.src} md={4}>
            <div className={'element'}>
                <img
                    src={props.src}
                    alt={props.alt}
                />

                <h3>{props.title}</h3>
            </div>
        </Col>
    )
}