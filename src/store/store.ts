import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './root-reducer';

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  ],
});

export type IRootState = ReturnType<typeof reducer>;
