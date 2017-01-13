import React, { PropTypes } from 'react';
import { View } from 'react-native';

const CardSection = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

CardSection.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CardSection;
