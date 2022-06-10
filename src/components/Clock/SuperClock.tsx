import React, {useEffect, useState} from 'react';
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from './DigitalClock';

type ModType = 'analog' | 'digital'

export type ClockViewPropsType = {
    date: Date
}

export type SuperClockPropsType = {
    mode: ModType
}

export const SuperClock: React.FC<SuperClockPropsType> = ({mode}) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let interval = setInterval(() => {
            setDate(() => new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const clock = (mode: ModType) => {
        if (mode === 'analog') {
            return <AnalogClock date={date}/>
        }
        if (mode === 'digital') {
            return <DigitalClock date={date}/>
        }
    }

    return <>
        {clock(mode)}
    </>
}