
import { createSlice } from '@reduxjs/toolkit'

interface firstTestState {
  text: string,
}

const initialState: firstTestState = {
  text: 'initial first test value'
}

export const firstTest = createSlice({
  name: 'first',
  initialState,
  reducers: {
    changeText: (state, {payload}) => {
      console.log('firstTest changeText payload', payload)
      state.text = payload
    },
  }
})

export const { changeText } = firstTest.actions
export default firstTest.reducer  