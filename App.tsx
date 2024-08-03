import { Loading } from "@components/Loading";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";
import theme from "@theme/index";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
