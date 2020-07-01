import { createContext, useContext } from 'react'
import { observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { useMemo } from 'react'

// eslint-disable-next-line
useStaticRendering(typeof window === 'undefined')

interface User {
  cartGoodsNum: number
}

let store: UserStore

export class UserStore {
  @observable cartGoodsNum = 0

  hydrate = (data: User) => {
    if (!data) return

    this.cartGoodsNum = data.cartGoodsNum !== null ? data.cartGoodsNum : 0
  }
}

function initializeStore(initialData: User | null = null) {
  const _store = store ?? new UserStore()

  if (initialData) {
    _store.hydrate(initialData)
  }

  if (typeof window === 'undefined') {
    return _store
  }

  if (!store) {
    store = _store
  }

  return _store
}



export function useStore(initialState: User | null) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

const context = createContext(new UserStore())

export function useContextStore() {
  return useContext(context)
}
