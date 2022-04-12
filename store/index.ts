import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from 'react-redux'
import { rootReducer } from './reducer'
import { createWrapper } from 'next-redux-wrapper';

export function initStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector
export const wrapper = createWrapper(initStore)