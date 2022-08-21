import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getConversationsRequest,
  postConversationRequest,
} from "./conversationAPI";

const initialState = {
  conversations: [],
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getConversationsAsync = createAsyncThunk(
  "conversation/getConversations",
  async ({ userId, username }) => {
    const res = await getConversationsRequest(userId, username);
    console.log(JSON.stringify(res));
    return { conversations: res };
  }
);

export const postConversationAsync = createAsyncThunk(
  "conversation/postConversation",
  async ({ userId, username, receipientName, receipientId, message }) => {
    console.log("partly", userId, username);
    const res = await postConversationRequest(
      userId,
      username,
      receipientName,
      receipientId,
      message
    );
    return { conversations: res };
  }
);

export const userSlice = createSlice({
  name: "conversation",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getConversationsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getConversationsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.conversations = action.payload.conversations;
      })
      .addCase(postConversationAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postConversationAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.conversations = action.payload.conversations;
      });
  },
});

// export const { logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectConversations = (state) => state.conversation.conversations;

export default userSlice.reducer;
