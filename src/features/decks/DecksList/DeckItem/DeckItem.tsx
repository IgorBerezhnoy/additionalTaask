import s from './DeckItem.module.css'
import { useAppDispatch } from '../../../../app/store'
import { deleteDeskTC } from '../../decks-thunks'

type DeckProps = {
  deck: any // todo: fix
}

const TEST_ACC_NAME = 'test acc'

export const DeckItem = ({ deck }: DeckProps) => {
  //
  let dispatch=useAppDispatch()
  console.log(deck)
  const isTestingDeck = deck.author.name === TEST_ACC_NAME

  let onClickDeleteHandler = ()=>{
dispatch(deleteDeskTC)
  }
  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button>update</button>
          <button onClick={onClickDeleteHandler }>delete</button>
        </div>
      )}
    </li>
  )
}
