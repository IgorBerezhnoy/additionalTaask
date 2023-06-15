import React, {useState} from 'react';
import './App.css';
import {SuperButton} from './Components/SuperButton';
import SuperTodolist from './Components/SuperTodolist';


function App() {
    const tasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ];
    return (
        <div>
            <SuperButton name={'First name'} callBack={() => {
            }} color={'red'}>First Button</SuperButton>
            <SuperButton name={'First name'} callBack={() => {
            }} color={'secondary'}>Second Button</SuperButton>
            <SuperButton name={'First name'} callBack={() => {
            }}>Third Button</SuperButton>
            <SuperButton name={'First name'} callBack={() => {
            }} disabled>Fourth Button</SuperButton>

        </div>
    );
}


export default App;
