import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callBack = action('on or off clicked')

export const defaultOn = () => <UncontrolledOnOff onChange={callBack} defaultOn={true}/>
export const defaultOff = () => <UncontrolledOnOff onChange={callBack} defaultOn={false}/>
export const defa = () => <UncontrolledOnOff onChange={callBack}/>
