import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={styles.containerStyle}>
          <Header headerTitle="Tech Stack" />
        </View>
      </Provider>
    );
  }
}


const styles = {
  containerStyle: {
    backgroundColor: 'purple',
    flex: 1,
  },
};

export default App;
