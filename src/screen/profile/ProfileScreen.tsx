import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
import {styles} from './profileScreen-styles';
import Button from '../../components/Button/Button';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {createProfile} from '../../features/createProfile/createProfileSlice';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  //   const selectProfileImage = () => {
  //     launchImageLibrary({mediaType: 'photo'}, response => {
  //       if (response.didCancel) return;
  //       if (response.assets && response.assets.length > 0) {
  //         setProfileImage(response.assets[0].uri);
  //       }
  //     });
  //   };

  const handleSubmit = async () => {
    console.log({
      firstName,
      lastName,
      //   dob,
      //   gender,
      //   profileImage,
    });

    if (firstName.trim()?.length >= 3) {
      const profileData = {
        firstName,
        lastName,
      };

      dispatch(createProfile(profileData)).then(async response => {
        if (
          response?.payload?.message === 'User profile created successfully'
        ) {
          navigation.navigate('TabStack');
          await AsyncStorage.setItem('isNewUser', false?.toString());
        }
      });
    } else {
      Toast.show({text1: 'Enter first Name!', type: 'error'});
    }
  };

  return (
    <LinearGradient colors={['#1B242E', 'black']} style={{flex: 1}}>
      <View>
        {/* Profile Image */}
        {/* <TouchableOpacity
        onPress={selectProfileImage}
        style={styles.imageContainer}>
        <Image
          source={
            profileImage
              ? {uri: profileImage}
              : require('./assets/profile-placeholder.png')
          }
          style={styles.profileImage}
        />
      </TouchableOpacity> */}

        <Image
          source={require('../../assets/images/upcomingBanner.jpeg')}
          style={{width: '100%', height: '40%'}}
        />
        <View style={styles.container}>
          <Text style={styles.profileText}>Profile </Text>
          {/* Input Fields */}
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            placeholderTextColor={'white'}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            placeholderTextColor={'white'}
            onChangeText={setLastName}
          />
          {/* <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      /> */}
          {/* Submit Button */}
          <Button title="Save" handleButtonPress={handleSubmit} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProfileScreen;
