// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/app';
// import '@react-native-firebase/auth';
import App from './App';
import {name as appName} from './app.json';
import Second from './SecondScreen';

import {Navigation} from 'react-native-navigation';

// firebase.initializeApp({
//   clientId:
//     '1038653237854-bg0t00kkl4se7kja14c28l3b5saafqpr.apps.googleusercontent.com',
//   appId: '1:1038653237854:ios:13023f4797dd3fe91aa2cf',
//   apiKey: 'AIzaSyC3cVzKWNhO7ahyGpQjIDK-JUpmLcM0AjQ',
//   databaseURL:
//     'https://stage-new-wingmall-default-rtdb.asia-southeast1.firebasedatabase.app',
//   storageBucket: 'stage-new-wingmall.appspot.com',
//   messagingSenderId: '1038653237854',
//   projectId: 'stage-new-wingmall',
// });

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Screen2', () => Second);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
              options: {
                topBar: {
                  title: {
                    text: 'Wing Mall',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});

// import './src/App';
