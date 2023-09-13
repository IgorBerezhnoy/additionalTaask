import { Deck } from './decks-api'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState
export type actionsType = ReturnType<typeof fetchDeskAC> | ReturnType<typeof createDeskAC>

export const decksReducer = (state: DecksState = initialState, action: actionsType): DecksState => {
  switch (action.type) {
    case 'SET_DESK': {
      return { ...state, decks: action.desks }
    }
    case 'CREATE_DESK': {
      return { ...state, decks: [action.desk, ...state.decks] }
    }
  }
  return state
}
export const fetchDeskAC = (desks: Deck[]) => ({ type: 'SET_DESK', desks } as const)
export const createDeskAC = (desk: Deck) => ({ type: 'CREATE_DESK', desk } as const)
