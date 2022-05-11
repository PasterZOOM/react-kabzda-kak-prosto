import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actionValue = event.currentTarget.value
        setValue(actionValue)
    }

    return <><input onChange={onChangeHandler}/> - {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickButtonHandler = () => {
        const el = inputRef.current
        el && setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={onClickButtonHandler}>save</button>
        - Actual value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue} onChange={onChangeHandler}/>
    )
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
    )
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option >none</option>
            <option value="1">Minsk</option>
            <option value="2">Kiev</option>
            <option value="3">Moscow</option>
        </select>
    )
}