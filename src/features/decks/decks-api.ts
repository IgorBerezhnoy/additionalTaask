import axios from 'axios'

// noinspection TypeScriptValidateTypes
export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export let deskAPI = {
  fetchDesk() {
    return instance.get<FetchDeskResponseType>('decks')
  },
  createDesk(name: string) {
    return instance.post<Deck>('decks', { name })
  },
  updateDesk(id: string, name: string, isPrivate: boolean) {
    return instance.get<FetchDeskResponseType>('decks', { id, name, isPrivate })
  },
  deleteDesk(id: string) {
    return instance.post<Deck>('decks', { id })
  },
}

export type FetchDeskResponseType = {
  items: Deck[];
  pagination: Pagination;
  maxCardsCount: number;
}
export type Author = {
  id: string;
  name: string;
}
export type Deck = {
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string;
  rating: number;
  created: string;
  updated: string;
  cardsCount: number;
}
export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

