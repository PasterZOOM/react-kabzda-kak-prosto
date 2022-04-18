import React, {useState} from 'react';

type OnOffPropsType = {
    // on: boolean
}

export function UncontrolledOnOff() {

    let [on, setOn] = useState(false)

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

    return (<div>
        <div style={onStyle} onClick={() =>{setOn(true)}}>On</div>
        <div style={offStyle} onClick={() =>{setOn(false)}}>Off</div>
        <div style={indicatorStyle}></div>
    </div>)
}
