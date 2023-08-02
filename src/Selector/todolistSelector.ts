import {AppRootStateType} from '../state/store';
import {TasksStateType, TodolistType} from '../App';

export const todolistSelector=(state:AppRootStateType):TodolistType[]=>state.todolists