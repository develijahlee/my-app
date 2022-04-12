import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { rootReducer } from './reducer'
import { createWrapper } from 'next-redux-wrapper';

export function initStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

type ReduxStore = ReturnType<typeof initStore>
export type RootState = ReturnType<ReduxStore['getState']>
type AppDispatch = ReduxStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const wrapper = createWrapper<ReduxStore>(initStore)