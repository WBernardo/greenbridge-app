import { useFonts } from "expo-font";
import { Home, Details, Login } from "./screens/index";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F6F6F9",
  },
};

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/DMSans-Regular.ttf"),
    Medium: require("./assets/fonts/DMSans-Medium.ttf"),
    Bold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
