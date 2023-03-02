import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  Provider as PaperProvider,
  MD2LightTheme as DafaultTheme,
  DefaultTheme,
} from 'react-native-paper';
import { Provider } from 'react-redux';
import { registerTranslation, en } from 'react-native-paper-dates';
import { store } from '@store/store';
import App from './src/App';
import { name as appName } from './app.json';

registerTranslation('en', en);

const Entry = () => (
  <Provider store={store}>
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Entry);
