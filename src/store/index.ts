import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import recommendReducer from '@/views/discover/child-views/recommend/store/recommend';
import playerReducer from '@/components/music-player/store/player'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        player: playerReducer,
        recommond: recommendReducer,
        // rankinglist: ranklistReducer
    }
});

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch

// useAppSelector 的 hook
// 拿到的是返回值类型
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

// 拿到的是值类型  
export const useAppDispatch: () => DispatchType = useDispatch;

export const appShallowEqual = shallowEqual;

export default store;