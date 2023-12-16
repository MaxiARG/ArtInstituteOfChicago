import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';
import UtilesNotificacion from './src/Utils/UtilsNotifications';

// Register background handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//   });
UtilesNotificacion.init();
AppRegistry.registerComponent(appName, () => App);
