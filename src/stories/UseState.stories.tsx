import React, {useState} from 'react';

export default {
    tittle: 'userState demo'
}

function generateData() {
    //difficult counting
    console.log('generateData')
    return 32353452342
}

export const Example = () => {
    console.log('Example')

    // const initialState = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}