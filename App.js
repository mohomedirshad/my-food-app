import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Food from './components/Food';
import About from './components/About';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="dark" />
          <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
            <NavigationContainer>
              <Drawer.Navigator initialRouteName='Food' screenOptions={{ headerShown: true }} >
                <Drawer.Screen name='Food' component={Food} options={{ headerShown: false }} />
                <Drawer.Screen name='About' component={About} />
              </Drawer.Navigator>
            </NavigationContainer>
          </PersistGate>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
