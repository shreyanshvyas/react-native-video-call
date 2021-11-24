import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const SearchBar = ({value, onChangeText}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search"
        style={styles.searchInput}
      />
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
    height: 42,
    paddingBottom: 10,
    paddingLeft: 15,
    borderColor: 'white',
  },
});

export default SearchBar;
