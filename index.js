import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import App from './src/App';
import { name as appName } from './app.json';

const Entry = () => (
  <Provider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Entry);
