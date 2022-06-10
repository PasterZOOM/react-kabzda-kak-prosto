import React from 'react';
import {ClockViewPropsType} from './SuperClock';

const get2digitsString = (num: number) => ('0' + num).slice(-2)

export const DigitalClock: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}