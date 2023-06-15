import React from 'react';

type GenalType = {
    tasks: PropsType[]
    children:React.ReactNode
}

type PropsType = {
    id: number
    title: string
    isDone: boolean
}

const SuperTodolist: React.FC<GenalType> = (props) => {
    const {tasks,children} = props
    return (<div>
        <ul>
            {tasks.map(el => {
                return (
                    <li>
                        <span>{el.id}</span>
                        <span>{el.title}</span>
                        <input type="checkbox" checked={el.isDone}/>
                    </li>
                )
            })}
        </ul>
    <div> {children}</div>
        </div>
    );

};

export default SuperTodolist;