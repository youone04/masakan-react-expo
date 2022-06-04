const initialState = {
  dataReseps: {
    loading: true,
    data: [],
    error: null,
  },
};

export const reducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESEPS_SUCCESS":
      return {
        ...state,
        dataReseps: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case "GET_RESEPS_FAIL":
      return {
        ...state,
        dataReseps: {
          loading: false,
          data: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
