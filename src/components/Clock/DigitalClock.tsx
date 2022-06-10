import React from 'react';
import {get2digitsString} from './Get2digitsString';

type DigitalClockPropsType = {
    date: {
        getHours: () => number
        getMinutes: () => number
        getSeconds: () => number
    }
}

export const DigitalClock: React.FC<DigitalClockPropsType> = ({date}) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}