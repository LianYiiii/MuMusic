import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

// import { useDispatch } from 'react-redux';

// import { appShallowEqual, useAppSelector } from './store';
// import { changeMessageAction } from './store/modules/counter';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import { FloatButton } from 'antd';
import { useAppDispatch } from './store';
import { fetchCurrentSongAction } from './components/music-player/store/player';

// interface IRootState {
//   counter: {
//     count: number,
//     message: string
//   }
// }

function App() {
  // const { count, message } = useAppSelector((state) => ({
  //   count: state.counter.counter,
  //   message: state.counter.message
  // }),
  //   appShallowEqual
  // );

  // const dispatch = useDispatch();
  // function handleChangeMessage() {
  //   console.log('change');
  //   // dispatch(changeMessageAction('hahaha'))
  // }

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSongAction(386538));
  }, []);

  return (
    <div className="App">
      <AppHeader />
      {/* <h2>当前数：{count}</h2>
      <h2>当前message: {message}</h2>
      <button onClick={handleChangeMessage}>修改message</button> */}
      <Suspense fallback='loading...'>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <FloatButton.BackTop />
    </div>
  );
}

export default App;
