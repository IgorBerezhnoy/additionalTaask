import { AppRootState, useAppDispatch } from '../../../../../app/store'
import { Deck } from '../../../decks-api'
import { useEffect } from 'react'
import { setDecksTC } from '../../../decks-thunks'
import { useSelector } from 'react-redux'

export let useFetchDesk=()=>{
  let dispatch = useAppDispatch()
  let decks: Deck[] = useSelector<AppRootState, Deck[]>(state => state.decks.decks)
  useEffect(() => {
    dispatch(setDecksTC())
  }, [])
  return { decks }
}