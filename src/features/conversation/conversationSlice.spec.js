import conversationReducer, {
  increment,
  decrement,
  incrementByAmount,
} from "./conversationSlice";

describe("conversation reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(conversationReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = conversationReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = conversationReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = conversationReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
