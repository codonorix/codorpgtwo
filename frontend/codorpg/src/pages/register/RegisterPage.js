import React, {useEffect, useState} from "react";
import {Alert, Col, Container, Row} from "react-bootstrap";

import archer from '../../icons/Preresized Icon Package/Bow/Bow-kit.png'
import knight from '../../icons/Preresized Icon Package/Weapon & Tools/iron-sword.png'
import mage from '../../icons/Preresized Icon Package/Potions/temp-xp-potion.png'

import './RegisterPage.css'
import axios from "axios";

export const RegisterPage = () => {
    const [selected, setSelected] = useState(0)
    const [passErr, setPassErr] = useState([])
    const [userErr, setUserErr] = useState(true)
    const [confirmPassErr, setConfirmPassErr] = useState([])
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
        confirmPass: ''
    })

    const changeUsername = (e) => {
        let obj = userDetails
        obj.username = e.target.value

        setUserDetails(obj)
    }

    const changePassword = (e) => {
        let obj = userDetails
        obj.password = e.target.value

        setUserDetails(obj)
    }

    /*

     */
    const changeConfPass = (e) => {
        let obj = userDetails
        obj.confirmPass = e.target.value

        setUserDetails(obj)
    }

    const checkUsername = () => {
        axios.get('http://localhost:8000/check_username', {
            params: {
                username: userDetails.username
            }
        }).then(data => {
            setUserErr(data.data.validated)
            console.log(userErr)
        })
    }


    const checkPassword = () => {
        let obj = userDetails
        let password = obj.password
        let errMsg = []

        //The below lines check if the password contains the following values, and then the test method returns true or false
        let containsNum = /[0-9]/.test(password)
        let containsUpper = /[A-Z]/.test(password)
        let containsLower = /[a-z]/.test(password)

        if (!containsNum)
            errMsg.push('Your password must contain at least one number.')

        if (!containsUpper)
            errMsg.push('Your password must contain at least one uppercase character.')

        if (!containsLower)
            errMsg.push('Your password must contain at least one lowercase character.')

        if (password.length < 8)
            errMsg.push('Your password must be at least 8 characters long.')

        if (errMsg.length !== 0) {
            return {
                accepted: false,
                data: errMsg
            }
        } else {
            return {
                accepted: true,
                data: errMsg
            }
        }
    }

    const checkConfimPass = () => {
        if (userDetails.password !== userDetails.confirmPass)
            return {
                accepted: false,
                data: ['Your passwords don\'t match.']
            }

        return {
            accepted: true,
        }
    }

    const validate = () => {
        let passCheck = checkPassword()
        let confirmPass = checkConfimPass()

        if (!passCheck.accepted) {
            setPassErr(passCheck.data)
        } else {
            setPassErr([])
        }

        if (!confirmPass.accepted) {
            setConfirmPassErr(confirmPass.data)
        } else {
            setConfirmPassErr([])
        }

        checkUsername()

        if (!userErr || passErr.length !== 0 || confirmPassErr.length !== 0) return

        createUser()

    }

    const createUser = () => {
        axios.get('http://localhost:8000/create_user', {
            params: {
                details: userDetails,
                classType: selected
            }
        }).then(data => {
            console.log(data)
        }).catch(data => {
            console.log(data)
        })
    }

    return (
        <Container fluid>
            <Row>
                <Col id={'effect-side'} md={3}></Col>
                <Col id={'main-content'}>
                    <h1>Register</h1>
                    {userErr ? null : <Alert key={'USERNAME_TAKEN'} variant={'danger'}
                                             className={'err-block'}>Username already in use.</Alert>}
                    <input type={'text'} placeholder={'username'} className={'input-style'}
                           onChange={e => changeUsername(e)}/>
                    <br/>
                    {passErr.length === 0 ? null : passErr.map(data => {
                        return (
                            <Alert key={data} variant={'danger'} className={'err-block'}>{data}</Alert>
                        )
                    })}
                    <input type={'password'} placeholder={'password'} className={'input-style'}
                           onChange={e => changePassword(e)}/>
                    <br/>

                    {confirmPassErr.length === 0 ? null : <Alert key={'PASS_NO_MATCH'} variant={'danger'}
                                                                 className={'err-block'}>{confirmPassErr[0]}</Alert>}
                    <input type={'password'} placeholder={'confirm password'} className={'input-style'}
                           onChange={e => changeConfPass(e)}/>
                    <br/>
                    <div id={'classes'}>
                        <div className={selected === 0 ? 'class-type selected' : 'class-type'}
                             onClick={() => setSelected(0)}>
                            <img src={archer}/>
                            <h4>Archer</h4>
                        </div>
                        <div className={selected === 1 ? 'class-type selected' : 'class-type'}
                             onClick={() => setSelected(1)}>
                            <img src={knight}/>
                            <h4>Knight</h4>
                        </div>
                        <div className={selected === 2 ? 'class-type selected' : 'class-type'}
                             onClick={() => setSelected(2)}>
                            <img src={mage}/>
                            <h4>Mage</h4>
                        </div>
                    </div>
                    <div className={'button-style-one'} onClick={validate}>Register</div>
                </Col>
            </Row>
        </Container>
    )
}