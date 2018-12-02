import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

import BookcaseItem from './BookcaseItem';

export default class Boookcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'Good Omens',
          author: 'Neil Gaiman and Terry Pratchett',
          thumbnail:'https://covers.openlibrary.org/w/id/7359258-M.jpg'
        },
        {
          id: 2,
          title: 'Red Rising',
          author: 'Pierce Brown',
          thumbnail: null
        },
        {
          id: 3,
          title: 'American Gods',
          author: 'Neil Gaiman',
          thumbnail: 
        }
      ]
    }
  }

  _renderItem = ({item}) => (
    <BookcaseItem
      id={item.id}
      title={item.title}
      author={item.author}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.books}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});