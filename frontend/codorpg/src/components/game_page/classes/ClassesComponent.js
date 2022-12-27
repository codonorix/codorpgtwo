import React from "react";

import archer from '../../../icons/Preresized Icon Package/Bow/Bow-kit.png'
import knight from '../../../icons/Preresized Icon Package/Weapon & Tools/iron-sword.png'
import mage from '../../../icons/Preresized Icon Package/Potions/temp-xp-potion.png'

export const ClassesComponent = (props) => {
    switch (props.id) {
        case 0:
            return(
                <div>
                    <img src={archer}/>
                </div>
            )

        case 1:
            return(
                <div>
                    <img src={knight}/>
                </div>
            )

        case 2:
            return(
                <div>
                    <img src={mage}/>
                </div>
            )
    }
}