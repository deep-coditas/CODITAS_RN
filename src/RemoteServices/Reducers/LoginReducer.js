export default function reducer(
  state = {
    status: "uninitiated",
    result: {},
  },
  action,
) {
  switch (action.type) {
    case "DO_LOGIN_STARTED": {
      return { ...state, status: "started"};
    }
    case "DO_LOGIN_SUCCESS": {
      return { ...state, status: "success", result: action.payload };
    }
    case "DO_LOGIN_FAILED": {
      return { ...state, status: "failed" };
    }
    default: {
      return state;
    }
  }
}
