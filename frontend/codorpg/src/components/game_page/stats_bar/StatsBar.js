import React from "react";

import './StatsBar.css'
export const StatsBar = (props) => {
    if(props.type === 'xp') {
        return (
            <div className={`${props.type} stats-bar`}>
                {props.curXp}/{props.reqXp} [{props.curXp === 0 ? 0 : (props.curXp / props.reqXp) * 100}%]
                <br/>
                Level: {props.level}
            </div>
        )
    }
    return (
        <div className={`${props.type} stats-bar`}>
            {props.curValue}/{props.maxValue}
            <br/>
            {props.type}
        </div>
    )
}