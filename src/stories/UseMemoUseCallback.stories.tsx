import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo',
    component: useMemo
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(2)
    const [b, setB] = useState<number>(2)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {

        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }

        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div> Result a:{resultA} </div>
        <div> Result b:{resultB} </div>

    </>


}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users secter')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpForReactMemo = () => {
    console.log('example')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Misha', 'Pasha', 'Lesha'])


    const newUsers = useMemo(() => {
        const newUsers = users.filter(u => u.toLowerCase().indexOf('m') > -1)
        return newUsers
    }, [users])


    const addUser = () => {
        const newUser = [...users, '<Masha>' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>AddUser</button>
        {count}
        <Users users={newUsers}/>
    </>
}

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML'])

    const memoizedAddBook = useCallback(() => {
        console.log(books)
        const newUser = [...books, '<CSS>' + new Date().getTime()]
        setBooks(newUser)
    }, [books])
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Book addBook={memoizedAddBook}/>
    </>
}
type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>AddUser</button>
    </div>
}
const Book = React.memo(BooksSecret)