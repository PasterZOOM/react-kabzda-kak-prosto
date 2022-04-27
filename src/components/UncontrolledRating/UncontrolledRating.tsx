import React, {useState} from 'react';
import {RatingValueType} from '../../App';

export type UncontrolledRating = {
    defaultValue?: RatingValueType
    onChange:(value:RatingValueType)=>void
}

export function UncontrolledRating(props: UncontrolledRating) {
    console.log('Rating rendering')
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1} onChange={props.onChange}/>
            <Star selected={value > 1} setValue={setValue} value={2} onChange={props.onChange}/>
            <Star selected={value > 2} setValue={setValue} value={3} onChange={props.onChange}/>
            <Star selected={value > 3} setValue={setValue} value={4} onChange={props.onChange}/>
            <Star selected={value > 4} setValue={setValue} value={5} onChange={props.onChange}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
    onChange:(value:RatingValueType)=>void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={() => {
        props.setValue(props.value);
        props.onChange(props.value)
    }}>
        {props.selected ? <b> star </b> : ' star '}
    </span>
}