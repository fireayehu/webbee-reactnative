import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import { name as appName } from './app.json';

const Entry = () => (
  <PaperProvider>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Entry);
