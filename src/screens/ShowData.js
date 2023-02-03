import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const ShowData = () => {
  const user = useSelector(state => state.user);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Name is : {user.name}</Text>
      <Text style={{fontSize: 20}}>Age is : {user.age}</Text>
      <Text style={{fontSize: 20}}>Gender is : {user.gender}</Text>
    </View>
  );
};

export default ShowData;

const styles = StyleSheet.create({});
