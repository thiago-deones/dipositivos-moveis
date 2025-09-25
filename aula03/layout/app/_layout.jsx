import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from 'react-native-paper';
import TopDropDownMenu from "./component/topMenu";
import ButtonMenu from "./component/buttonMenu";

export default function Layout() {
  return (
  <PaperProvider>
    <View style={styles.container}>
      <TopDropDownMenu />
      <Slot />
      <ButtonMenu />
    </View>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
