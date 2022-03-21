import { createSlice } from "@reduxjs/toolkit";


// step-1
const initialCounterState = {value: 0, showCounter: true};
 
// step-2 create redux slice for state
// createSlice accept arg as object
const counterSlice = createSlice({
    name: 'counter', // add name for every slice
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.value = state.value + 1; //mutate state
        },
        decrement(state){
            state.value = state.value - 1;
        },
        increase(state, action){
            // console.log('State >>', state);
            // console.log('action >>', action.payload.payload_1);
            // console.log('action >>', action.payload.payload_2);
            state.value = state.value + action.payload
            
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
});

export const counterActions = counterSlice.actions
export default counterSlice.reducer

