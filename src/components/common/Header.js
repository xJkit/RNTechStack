import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const Header = props => (
  <View style={styles.headerStyle}>
    <Text style={styles.textStyle}>{props.headerTitle}</Text>
  </View>
);

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

const styles = {
  headerStyle: {
    height: 88,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative',
    marginBottom: 6,
  },
  textStyle: {
    fontSize: 36,
    color: 'purple',
  },
};

export default Header;
