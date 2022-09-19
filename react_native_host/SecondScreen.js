import React from 'react';
import {SafeAreaView, ScrollView, View, Button} from 'react-native';

const App = ({componentId}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{}}>
          <Button title="GO TO RNN First SCREEN" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
