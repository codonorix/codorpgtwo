import React from "react";
import {Container, Navbar} from "react-bootstrap";

import './NavigationBar.css'

export const NavigationElement = (props) => {
    return (
        <Navbar variant={'dark'}>
            <Container fluid>
                <Navbar.Brand>Codonorix RPG</Navbar.Brand>
                {props.logged ? <Navbar.Text>{props.username}</Navbar.Text> : null}
                {props.admin ? <Navbar.Text className={'btn'}>Admin Page</Navbar.Text> : null}
            </Container>
        </Navbar>
    )
}

export const NavigationBar = () => {
    if (sessionStorage.getItem('loggedIn') === '1') {
        if (JSON.parse(sessionStorage.getItem('userData')).is_admin === 1) {
            return (
                <NavigationElement
                logged = {true}
                username = {JSON.parse(sessionStorage.getItem('userData')).username}
                admin = {true}
                    />
            )
        }else{
            return(
            <NavigationElement
                logged={true}
                username = {JSON.parse(sessionStorage.getItem('userData')).username}
                admin={false}
            />
            )
        }
    } else {
        return(
            <NavigationElement
                logged={false}
                admin={false}
            />
        )
    }
}