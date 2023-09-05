export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET_STATUS':{
      return {...state,status: action.status}
    }
    case 'SET_ERROR':{
      return {...state,error: action.error}
    }
    default:
      return state
  }
}

export let setStatusAC=(status:RequestStatusType)=>({type:"SET_STATUS", status}as const)
export let setErrorAC=(error:string |null)=>({type:"SET_ERROR", error} as const)

// export let setErrorAC=(error:string )=>({type:"SET_ERROR", error})
// let setStatus=(error:string | null,)=>({type:"SET_STATUS", status})

type ActionsType = ReturnType<typeof setStatusAC>|ReturnType<typeof setErrorAC>
