import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import conversationReducer from "../features/conversation/conversationSlice";
import userReducer from "../features/user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    devTools: process.env.NODE_ENV !== "production",
    conversation: conversationReducer,
    user: persistedReducer,
    middleware: [thunk],
  },
});

export const persistor = persistStore(store);
