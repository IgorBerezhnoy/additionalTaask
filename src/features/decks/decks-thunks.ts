import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setErrorAppAC, setStatusAppAC } from '../../app/app-reducer'
import { isAxiosError } from 'axios'
import { handleError } from '../../common/utils/handle-error'

export const fetchDecksTC = () => async (dispatch) => {
  dispatch(setStatusAppAC('loading'))
  try {
    let res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setStatusAppAC('succeeded'))
  } catch (e) {
    dispatch(setStatusAppAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => (dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    return dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch) => {
  try {
    // throw new Error("booom!")
    let res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))

  } catch (e) {
 handleError(e, dispatch)


  }
}
