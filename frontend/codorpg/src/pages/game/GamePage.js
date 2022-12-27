import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

import encyclopedia from '../../icons/Preresized Icon Package/Items [New]/book.png'
import achievements from '../../icons/Preresized Icon Package/Badges [New]/blank-emerald-badge.png'
import inventory from '../../icons/Preresized Icon Package/Chest [New]/closed-chest.png'
import shop from '../../icons/Preresized Icon Package/Currency/Gold-coin-stack.png'
import start from '../../icons/Preresized Icon Package/Weapon & Tools/gold-sword.png'
import forge from '../../icons/Preresized Icon Package/Mobs Eggs/Spawner/Unknown-spawner.png'

import {MenuOptions} from "../../components/menu_options/MenuOptions";

import './GamePage.css'
import {ClassesComponent} from "../../components/game_page/classes/ClassesComponent";
import {StatsBar} from "../../components/game_page/stats_bar/StatsBar";
import axios from "axios";

export const GamePage = (props) => {
    const [dbData, setDbData] = useState({})

    useEffect(() => {
        let returnData
        axios.get('http://localhost:8000/get_data', {
            params: {
                username: JSON.parse(sessionStorage.getItem('userData')).username,
            }
        }).then(data => {
            console.log(data.data.data)
            setDbData(data.data.data)
        }).catch(data => {
            console.log(data)
        })
    }, [])

    return (
        <Container fluid>
            <Row id={'main-heading'}>
                <MenuOptions
                    src={shop}
                    alt={'shop'}
                    title={'Shop'}
                />

                <MenuOptions
                    src={start}
                    alt={'start adventure'}
                    title={'Start Adventure'}
                />

                <MenuOptions
                    src={inventory}
                    alt={'inventory'}
                    title={'Inventory'}
                />

                <MenuOptions
                    src={forge}
                    alt={'forge'}
                    title={'Forge'}
                />

                <MenuOptions
                    src={encyclopedia}
                    alt={'encyclopedia'}
                    title={'Encyclopedia'}
                />

                <MenuOptions
                    src={achievements}
                    alt={'achievements'}
                    title={'Achievements'}
                />
            </Row>
            <Row className={'text-center player-info'}>
                <h3>Player Information</h3>
            </Row>
            <Row>
                <Col>
                    <StatsBar
                        type={'hp'}
                        curValue={dbData._hp}
                        maxValue={dbData._maxHp}
                    />
                </Col>
                <Col>
                    <StatsBar
                        type={'mana'}
                        curValue={dbData._hp}
                        maxValue={dbData._maxHp}
                    />
                </Col>
            </Row>
            <Row>
                <StatsBar
                type={'xp'}
                curXp={dbData._curXp}
                reqXp={dbData._reqXp}
                level={dbData._level}
                />
            </Row>
            <Row>
                <Col>
                    <ClassesComponent
                        id={dbData._classId}
                    />
                </Col>
            </Row>
        </Container>
    )
}