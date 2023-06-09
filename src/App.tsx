import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Button} from './Components/Button';
import {Input} from './Components/Input';


type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {

    const [todos, setTodos] = useState<Array<TodosType>>([]);
    console.log(todos);

    const fectchQery = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json));
    };

    useEffect(() => {
        fectchQery();
    }, []);

    const HideHandler = () => {
        setTodos([]);
    };
    const ShowHandler = () => {
        fectchQery();
    };


   /* const [title, setTitle] = useState('');*/

    let title=useRef<HTMLInputElement>(null)

    const addTask = () => {
        if(title.current){
        const newTask = {
            completed: false,
            id: todos.length + 1,
            title: title.current.value,
            userId: 10000221223,
        };

            setTodos([newTask, ...todos]);
            title.current.value=""
        }

    };

    return (
        <div className="App">

            <Button name={'Show me'} callBack={ShowHandler}/>
            <Button name={'Hide'} callBack={HideHandler}/>
            <div>
                <Input title={title}/>
                <Button name={'+'} callBack={addTask}/>
            </div>
            <ul>
                {todos.map(el => {
                    return (
                        <li>
                            <input type={'checkbox'} checked={el.completed}></input>
                            <span>{el.id} -</span>
                            <span>- {el.title} -</span>
                        </li>
                    );
                })}</ul>
        </div>
    );
}

export default App;
