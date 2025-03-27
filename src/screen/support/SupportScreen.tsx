import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Linking,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button';
import Toast from 'react-native-toast-message';
import {AppColors} from '../../theme';

export default function SupportScreen() {
  const [title, setTitle] = useState('');
  const [issue, setIssue] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    // Validate inputs
    if (!title.trim() || !issue.trim()) {
      Toast.show({text1: 'Please fill title and issue', type: 'error'});
      return;
    }

    const email = 'surajtopal1224@gmail.com';
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(issue);

    const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;

    Linking.openURL(mailtoURL).catch(err =>
      console.error('Error opening email:', err),
    );
    setTitle('');
    setIssue('');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1B242E', 'black']} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Query Form</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Enter issue title"
              placeholderTextColor={AppColors.palette.osloGrey}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Issue Details</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={issue}
              onChangeText={setIssue}
              placeholder="Describe your issue in detail"
              placeholderTextColor="#888"
              multiline
              numberOfLines={4}
            />
          </View>
          <Button title="Submit Query" handleButtonPress={handleSubmit} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: AppColors.bgColor,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: AppColors.bgColor,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: AppColors.bgColor,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
});
