import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const OnBoardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.images, {width: width - 30, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.2}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
      {/* <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#E74779',
          borderRadius: 80,
        }}
      /> */}
      {item.id == 3 && (
        <TouchableOpacity
          style={{
            backgroundColor: '#E74779',
            padding: 15,
            width: '80%',
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate('Form');
          }}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Get Started
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    flex: 0.6,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  desc: {
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
