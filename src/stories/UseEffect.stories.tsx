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

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
          clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, counter: {counter}
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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered with ' + counter)

    useEffect(() => {

        console.log('Effect occurred: ' + counter)

        return () => {
            console.log('RESET EFFECT: ' + counter)
        }

    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }
    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seccond passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])

    return <>
        text: {text}
    </>
}