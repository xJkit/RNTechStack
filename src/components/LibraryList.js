import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  static propTypes = {
    libraries: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(props.libraries);
  }

  renderListItem(lib) {
    return <ListItem library={lib} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={rowData => this.renderListItem(rowData)}
      />
    );
  }
}

const mapStateToProps = state => ({
  libraries: state.libraries,
});

export default connect(mapStateToProps, {})(LibraryList);
