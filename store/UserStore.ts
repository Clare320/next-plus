import { observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { useMemo } from 'react'

// eslint-disable-next-line
useStaticRendering(typeof window === 'undefined')

let store

export class UserStore {
  @observable cartGoodsNum = 0

  hydrate = (data) => {
    if (!data) return

    this.cartGoodsNum = data.cartGoodsNum !== null ? data.cartGoodsNum : 0
  }
}

function initializeStore (initialData = null) {
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

export function useStore (initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
