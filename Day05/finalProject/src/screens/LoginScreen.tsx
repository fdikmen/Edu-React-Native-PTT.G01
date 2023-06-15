import React from 'react';
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image, Alert } from 'react-native';
import LoginForm from '../components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';

const LoginScreen: React.FC = () => {


  return (
    <View>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.headBackground}>
          <View>
            <Image source={require('../assets/images/logo-white.png')} style={styles.logo} />
            <Text style={styles.logoText}> Welcome to Community! </Text>
          </View>
        </View>
        <ScrollView style={{ marginTop: 150 }}>
          <View style={styles.loginArea}>
            <Text style={styles.loginAreaTitle}>APP Login</Text>
            <Text style={styles.loginAreaDescription}>
              Please login to use the application...
            </Text>
            <LoginForm />
          </View>
        </ScrollView>
        <View style={styles.signUpArea}>
          <Text style={styles.signUpDescription}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>Alert.alert('Thank you for request!','But now, you don\'t register. :-(')} >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#1572DE',
    borderBottomRightRadius: 200,
    borderColor: '#1572DE'
  },
  logo: {
    width: 163,
    height: 50,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  logoText: { textAlign: 'center', color: '#f2f2f2' },
  loginArea: {
    margin: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    shadowColor: 'black', // Gölge rengi
    shadowOpacity: 0.2, // Gölge opaklığı
    shadowRadius: 3, // Gölge yarıçapı
    shadowOffset: { width: 0, height: 2 }, // Gölge konumu
    elevation: 4 // Android için gölge efekti
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  loginAreaDescription: {
    fontSize: 11,
    color: '#7e868f',
    marginVertical: 10,
    textAlign: 'center'
  },
  signUpArea: { alignItems: 'center' },
  signUpDescription: { color: '#999' },
  signUpText: { color: '#666' }
});

export default LoginScreen;
