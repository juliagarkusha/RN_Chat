// External deps
import { ReactElement } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// Internal deps
import ChatList from "./src/screens/ChatList";
import { COLORS } from "./src/theme/colors";

const App = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue900,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default App;
