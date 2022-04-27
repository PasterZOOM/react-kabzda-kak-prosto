import React from 'react';

type OnOffPropsType = {
    on:boolean
    onClick:(value:boolean)=>void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (<div>
        <div style={onStyle} onClick={() =>{props.onClick(true)}}>On</div>
        <div style={offStyle} onClick={() =>{props.onClick(false)}}>Off</div>
        <div style={indicatorStyle}/>
    </div>)
}
