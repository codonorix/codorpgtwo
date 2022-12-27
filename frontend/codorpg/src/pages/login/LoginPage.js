import React, {useState} from "react";
import {Alert, Col, Container, Row} from "react-bootstrap";

import './LoginPage.css'
import '../../global_styles/Input.css'
import '../../global_styles/Button.css'
import axios from "axios";


export const LoginPage = () => {
    const [userData, setUserData] = useState({
        'username': '',
        'password': ''
    })

    const [loginIssue, setLoginIssue] = useState(false)
    const getUsername = (e) => {
        let obj = userData
        userData.username = e.target.value
        setUserData(obj)
    }

    const getPassword = (e) => {
        let obj = userData
        obj.password = e.target.value
        setUserData(obj)
    }

    const validate = () => {
        axios.get('http://localhost:8000/login', {
            params: {
                userDetails: userData
            }
        }).then(data => {
            if(!data.data.validated) {
                setLoginIssue(true)
                return;
            }
            setLoginIssue(false)
            sessionStorage.setItem('loggedIn', '1')
            sessionStorage.setItem('userData', JSON.stringify(data.data.user))
            sessionStorage.setItem('dbData', JSON.stringify(data.data.dbData))
            window.location.reload()
        })
    }

    return(
        <Container fluid>
            <Row>
                <Col id={'effect-side'} md={3}></Col>
                <Col id={'main-content'}>
                    <h1>Login</h1>
                    {loginIssue ? (<Alert key={'warning'} variant={'danger'}>Username or password is incorrect.</Alert>) : null}
                    <input type={'text'} placeholder={'username'} className={'input-style'} onChange={e => getUsername(e)}/>
                    <br/>
                    <input type={'password'} placeholder={'password'} className={'input-style'} onChange={e => getPassword(e)}/>
                    <br/>
                    <div className={'button-style-one'} onClick={validate}>Login</div>
                </Col>
            </Row>
        </Container>
    )
}