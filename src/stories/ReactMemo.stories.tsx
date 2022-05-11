import React, {useState} from 'react';

export default {
    title: 'React.Memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)


export const Example = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Misha','Pasha','Lesha'])

    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={addUser}>addUser</button>
        <NewMessageCounter count={count}/>
        <Users users={users}/>
    </>

}