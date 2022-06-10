import React, {useEffect, useState} from 'react';
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from './DigitalClock';

type ModType = 'analog' | 'digital'

export type SuperClockPropsType = {
    mod: ModType
}

export const SuperClock: React.FC<SuperClockPropsType> = ({mod}) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let interval = setInterval(() => {
            setDate(() => new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const clock = (mod: ModType) => {
        if (mod === 'analog') {
            return <AnalogClock date={date}/>
        }
        if (mod === 'digital') {
            return <DigitalClock date={date}/>
        }
    }

    return <>
        {clock(mod)}
    </>
}