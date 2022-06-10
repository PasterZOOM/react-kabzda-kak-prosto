import React from 'react';
import {SuperClock} from './SuperClock';


export default {
    title: 'SuperClock',
    component: SuperClock
}

export const BaseExampleAnalog = () => {
    return <SuperClock mod={'analog'}/>
}
export const BaseExampleDigital = () => {
    return <SuperClock mod={'digital'}/>
}