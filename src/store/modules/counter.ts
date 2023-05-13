import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    // 传出数据，也就是初始化 state
    initialState: {
        counter: 100,
        message: 'liuliuliu'
    },
    // 接收数据，也就是决定state的改变(actions)
    reducers: {
        changeMessageAction(state, { payload }: PayloadAction<string>) {
            state.message = payload
        }
    }
})

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;