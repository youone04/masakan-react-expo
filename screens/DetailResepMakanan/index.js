import { Text, View } from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailResep } from "../../config/redux/actions/DetailResepAction";
import Loading from "../../componens/Loading";

const DetailResepMakanan = () => {
  const resepsDetail = useSelector(
    (state) => state.resepDetail.dataResepsDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailResep("resep-tumis-sawi-hijau-dan-ayam"));
  }, [dispatch]);

  console.log(resepsDetail.data);
  return (
    <>
      {resepsDetail.loading ? (
        <Loading />
      ) : resepsDetail.error ? (
        <Text>{resepsDetail.error}</Text>
      ) : (
        <View></View>
      )}
    </>
  );
};
export default DetailResepMakanan;
