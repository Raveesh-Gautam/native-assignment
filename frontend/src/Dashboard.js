import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const userData = [
  { id: '1', name: 'John Doe', email: 'john@example.com', age: 25 },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', age: 30 },

];

const Dashboard = () => {
  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userInfo}>{`Email: ${item.email}`}</Text>
      <Text style={styles.userInfo}>{`Age: ${item.age}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>User Data</Text>
      <FlatList
        data={userData}
        keyExtractor={(item) => item.id}
        renderItem={renderUserItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userInfo: {
    fontSize: 16,
  },
});

export default Dashboard;
