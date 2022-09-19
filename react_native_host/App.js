import React from 'react';
import {Text, SafeAreaView, ScrollView, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';

const App = ({componentId}) => {
  // Handle user state changes
  const [user, setUser] = React.useState();

  const onAuthStateChanged = user => {
    setUser(user);
    // if (initializing) setInitializing(false);
  };

//   React.useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

  const onLoginAsGuest = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
  };

  const logOut = () => {
    auth().signOut();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{}}>
          {!user ? (
            <Button title="Login As Guest" onPress={onLoginAsGuest} />
          ) : (
            <>
              <Text>{JSON.stringify(user)}</Text>
              <Button title="Login out" onPress={logOut} />
            </>
          )}

          <Text style={{fontSize: 32}}> App Instance </Text>
          {/* <Text>{JSON.stringify(firebase.apps, null, 2)}</Text> */}

          <Button
            title="GO TO RNN SECOND SCREEN"
            onPress={() => {
              Navigation.push(componentId, {
                component: {
                  name: 'Screen2', // Push the screen registered with the 'Settings' key
                  options: {
                    // Optional options object to configure the screen
                    topBar: {
                      title: {
                        text: 'Settings', // Set the TopBar title of the new Screen
                      },
                    },
                  },
                },
              });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
