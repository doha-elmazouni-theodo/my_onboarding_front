import type { store } from "./configure";

import type { Action, ThunkAction } from "@reduxjs/toolkit";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
