import React, {useEffect, useState} from 'react';


export default {
    tittle: 'useEffect demo'
}


export const Example = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {

        setInterval(() => {
            console.log('tick' + counter)
            setCounter(state => state + 1)
        }, 1000)

    }, [])

    return <>
        Hello, counter: {counter} fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
    </>
}


export const TimeExample = () => {

    const [date, setDate] = useState(new Date())

    const get2digitsString = (num: number) => ('0' + num).slice(-2)

    let hours = get2digitsString(date.getHours())
    let minuets = get2digitsString(date.getMinutes())
    let seconds = get2digitsString(date.getSeconds())

    useEffect(() => {

        let interval = setInterval(() => {
            setDate(() => new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return <>
        {hours}:{minuets}:{seconds}
    </>
}