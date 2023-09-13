import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDesk } from './DeckItem/UseFetchDesk/UseFetchDesk'

export const DecksList = () => {
  let { decks } = useFetchDesk()


  // return <div>{decks.map(el=><div>{el.name}</div>)}</div>
  return <div>{decks.map(el => <DeckItem key={el.id} deck={el} />)}</div>


}
