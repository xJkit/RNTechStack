import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {

  static propTypes = {
    libraries: PropTypes.object.isRequired,
  };

  render() {
    const { libraries } = this.props;
    return (
      <View>
        {libraries.map(library => (
            <Text
              key={library.title}
              style={styles.textStyle}
            >
              { library.title }
            </Text>
          ))}
      </View>
    );
  }
}

const styles = {
  textStyle: {
    color: 'white',
  },
};

const mapStateToProps = state => ({
  libraries: state.libraries,
});

export default connect(mapStateToProps, {})(LibraryList);
