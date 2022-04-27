import React, {useState} from 'react';

type OnOffPropsType = {
    onChange:(on:boolean)=>void
    defaultOn?:boolean
}

export function UncontrolledOnOff(props:OnOffPropsType) {

    let [on, setOn] = useState(props.defaultOn?props.defaultOn:false)

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClick = () => {
        return (setOn(true),
        props.onChange(!on)
        )}

    const offClick = () => {
        return (setOn(false),
                props.onChange(!on)
        )}

    return (<div>
        <div style={onStyle} onClick={onClick}>On
        </div>
        <div style={offStyle} onClick={offClick}>Off
        </div>
        <div style={indicatorStyle}/>
    </div>)
}
