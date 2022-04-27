import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';


export default {
    title:'Accordion',
    component: Accordion
}

const callBack = action('accordion change event fired')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onClick={callBack} collapsed={true}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} onClick={callBack} collapsed={false}/>

export const ModeChanging = () => {
    let [value, setVallue] = useState<boolean>(true)
    return (
        <Accordion titleValue={'Menu'} onClick={()=> setVallue(!value)} collapsed={value}/>)
}