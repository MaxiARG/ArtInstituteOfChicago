import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import messaging from "@react-native-firebase/messaging";
import { PermissionsAndroid, Platform } from "react-native";

const channelId = "channel-id";
export default class UtilesNotificacion {

  static mostrarNotificacion(channelId, title, message) {
    PushNotification.localNotification({channelId, title, message});
  }

  static init() {
    this.checkPermission();
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    messaging().onMessage((remoteMessage) => {
      this.mostrarNotificacion(channelId, 'title', 'message');
    });

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function(notification) {
        // (required) Called when a remote is received or opened, or local
        // notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function(notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });

    PushNotification.createChannel(
      {
        channelId: channelId, // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => {} // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  /* Pide permisos en iOS para enviar notificaciones */
  static async checkPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      this.getToken();
      this.getToken().then((t)=>{console.log(t)})
    }
    if (Platform.OS === 'android') {
        //Request Android permission (For API level 33+, for 32 or below is not required)
        const res = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
  }

  static async getToken() {
    const fcmToken = await messaging().getToken();
  }
}
