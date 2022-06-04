export const getDetailResep = (key) => async (dispatch) => {
    try {
      const data = await fetch(`https://masak-apa-tomorisakura.vercel.app/api/recipe/${key}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const hasil = await data.json();
      dispatch({
        type: "GET_RESEPS_DETAIL_SUCCESS",
        payload: hasil,
      });
    } catch (error) {
      dispatch({
        type: "GET_RESEPS_DETAIL_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };