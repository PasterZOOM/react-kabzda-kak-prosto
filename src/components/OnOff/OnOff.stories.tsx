import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';


export default {
    title:'OnOff',
    component: OnOff
}

const callBack = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onClick={callBack}/>
export const OffMode = () => <OnOff on={false} onClick={callBack}/>
export const ModeChanging = () => {
    let [on, setOn] = useState<boolean>(false)
    return (
        <OnOff on={on} onClick={setOn}/>)
}