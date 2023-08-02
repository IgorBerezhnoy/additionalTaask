import {AppRootStateType} from '../state/store';
import {TasksStateType} from '../App';

export const taskSelector=(state:AppRootStateType):TasksStateType=>state.tasks