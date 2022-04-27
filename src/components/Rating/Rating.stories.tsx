import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Rating} from './Rating';
import {RatingValueType} from '../../App';

export default {
    title:'Rating',
    component: Rating
}

const callBack = action('star clicked')

export const Empty = () => <Rating onClick={callBack} value={0}/>
export const Empty1 = () => <Rating onClick={callBack} value={1}/>
export const Empty2 = () => <Rating onClick={callBack} value={2}/>
export const Empty3 = () => <Rating onClick={callBack} value={3}/>
export const Empty4 = () => <Rating onClick={callBack} value={4}/>
export const Empty5 = () => <Rating onClick={callBack} value={5}/>
export const EmptyChanging = () => {
    let [value, setValue] = useState<RatingValueType>(3)
    return <Rating onClick={setValue} value={value}/>}
