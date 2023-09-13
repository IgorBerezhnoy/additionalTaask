import { deskAPI } from './decks-api'
import { fetchDeskAC } from './decks-reducer'

export const setDecksTC = () => (dispatch) => {
  deskAPI.fetchDesk()
    .then((response) => {
      dispatch(fetchDeskAC(response.data.items))
    })
}
export const createDeskTC = (name: string) => (dispatch) => {
  return deskAPI.createDesk(name)
    .then((res) => {
      dispatch(setDecksTC())
    })
}
export const updateDeskTC = (id: string, name: string, isPrivate: boolean) => (dispatch) => {
  return deskAPI.updateDesk(id, name, isPrivate)
    .then((res) => {
      dispatch(setDecksTC())
    })
}
export const deleteDeskTC = (id: string) => (dispatch) => {
  return deskAPI.deleteDesk(id)
    .then((res) => {
      dispatch(setDecksTC())
    })
}