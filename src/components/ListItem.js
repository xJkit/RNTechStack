import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  static PropTypes = {
    library: PropTypes.object.isRequired,
  };

  render() {
    const { library } = this.props;
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{library.id}. </Text>
        <Text style={titleStyle}>{library.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 24,
  },
};

export default ListItem;
