import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Tech Stack</Text>
      </View>
    );
  }
}


const styles = {
  containerStyle: {
    backgroundColor: 'purple',
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 32,
  }
};

export default App;
