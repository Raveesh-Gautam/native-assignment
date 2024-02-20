import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { darkGreen } from './Constant';

const Field = ({ handleChange, labelText, placeHolder, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{labelText}</Text>
      <TextInput
        placeholder={placeHolder}
        style={styles.input}
        onChangeText={(text) => { handleChange(text) }}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  labelText: {
    color: darkGreen,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderRadius: 100,
    color: darkGreen,
    paddingHorizontal: 10,
    width: '78%',
    backgroundColor: 'rgb(220, 220, 220)',
  },
});

export default Field;
