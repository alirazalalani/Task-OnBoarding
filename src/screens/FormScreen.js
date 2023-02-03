import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import RadioButtonRN from 'radio-buttons-react-native';
import {useDispatch} from 'react-redux';
import {update} from '../redux/user/userSlice';

const data = [
  {
    label: 'Male',
  },
  {
    label: 'Female',
  },
];

const FormScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // console.log('hello');
    dispatch(update({name, age, gender}));
    navigation.navigate('Data');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/img1.jpg')} style={styles.image} />
        <Text style={styles.headingStyle}>Complete Your Profile</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={{marginVertical: 10}}>
          <Text style={styles.formText}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full Name"
            onChangeText={e => setName(e)}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.formText}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Age"
            onChangeText={e => setAge(e)}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.formText}>Gender</Text>
          <View style={styles.wrapper}>
            {['Male', 'Female'].map(gen => (
              <View key={gen} style={styles.genStyle}>
                <Text>{gen}</Text>
                <TouchableOpacity
                  style={styles.outer}
                  onPress={() => setGender(gen)}>
                  {gender === gen && <View style={styles.inner} />}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#E74779',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: 20,
            alignSelf: 'center',
            borderRadius: 20,
          }}
          onPress={() => handleSubmit()}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 0.3,
    // backgroundColor: 'red',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 20,
    // flex: 1,
  },
  headingStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    // justifyContent: 'flex-end',
  },
  formContainer: {
    padding: 20,
    flex: 0.7,
  },
  formText: {
    color: 'black',
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    // borderWidth: 1,
    // borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#F3F8FB',
  },
  outer: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  inner: {
    width: 15,
    height: 15,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  genStyle: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
