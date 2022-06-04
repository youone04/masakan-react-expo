const initialState = {
    dataResepsDetail: {
      loading: true,
      data: [],
      error: null,
    },
  };
  
  export const reducerResepDetail = (state = initialState, action) => {
    switch (action.type) {
      case "GET_RESEPS_DETAIL_SUCCESS":
        return {
          ...state,
          dataResepsDetail: {
            loading: false,
            data: action.payload,
            error: null,
          },
        };
      case "GET_RESEPS_DETAIL_FAIL":
        return {
          ...state,
          dataResepsDetail: {
            loading: false,
            data: [],
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };
  