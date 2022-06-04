import { useEffect } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getReseps } from "../../config/redux/actions/ResepAction";
import Loading from "../../componens/Loading";

const Home = ({navigation}) => {
  const reseps = useSelector((state) => state.reseps.dataReseps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReseps());
  }, [dispatch]);

  console.log(reseps.data);

  return (
    <>
      {reseps.loading ? (
        <Loading />
      ) : reseps.error ? (
        <Text>{reseps.error}</Text>
      ) : (
        <View>
          {reseps.data.results.map((resep, i) => {
            return (
              <View key={i}>
                {/* {console.log(resep.thumb)} */}
                <TouchableOpacity onPress={() => navigation.navigate('Detail Resep')}>
                  <View style={styles.container}>
                    <View style={styles.card}>
                      <Image
                        style={styles.tinyLogo}
                        source={{
                          uri: resep.thumb,
                        }}
                      />
                      <Text style={styles.title}>{resep.key}</Text>
                      <View
                        style={{
                          borderBottomColor: "#FFFFFF",
                          borderBottomWidth: 5,
                          width: "85%",
                        }}
                      />
                    </View>
                    <View style={styles.body}>
                      <Text style={styles.keterangan}>Keterangan</Text>
                      <Text>Tingkat Kesulitan : {resep.dificulty}</Text>
                      <Text>Posri : {resep.portion}</Text>
                      <Text>Waktu masak : {resep.times}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#92B4EC",
    margin: 6,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,

    elevation: 5,
  },
  card: {
    paddingTop: 20,
    alignItems: "center",
  },
  tinyLogo: {
    width: "95%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8,
  },
  body: {
    marginLeft: 8,
    marginVertical: 8,
    fontSize: 14,
  },
  keterangan: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
export default Home;
