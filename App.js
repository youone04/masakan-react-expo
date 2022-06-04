import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { store } from "./config/redux/store";
import DetailResepMakanan from "./screens/DetailResepMakanan";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail Resep" component={DetailResepMakanan} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
