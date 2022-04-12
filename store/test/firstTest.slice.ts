
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
    changeText: (state, action) => {
      console.log('firstTest changeText action', action)
      state.text = action.payload
    },
  }
})

export const { changeText } = firstTest.actions
export default firstTest.reducer  