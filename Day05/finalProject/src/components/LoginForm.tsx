import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/userSlice';
import { useNavigation } from '@react-navigation/native';
import CButton from './CButton';

interface InputProps {
  returnKeyType: string;
  autoCapitalize: string;
  placeholder: string;
  onSubmitEditing: () => void;
}


const LoginForm = () => {
  const passwordInput = useRef<TextInput>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
    const navigation = useNavigation();

  const handleLogin = () => {
    dispatch(loginUser({ username, password }))
      .unwrap() // asyncThunk dan gelen promise ı açar
      .then(() => {
        navigation.navigate('Main');
        // Alert.alert('Login Success', 'You have successfully logged in');
      })
      .catch((error: any) => {
        Alert.alert('Username or password is incorrect', error.message );
      });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        returnKeyType="next"
        autoCapitalize="none"
        placeholder="Username"
        onSubmitEditing={() => passwordInput.current?.focus()}
      />
      <TextInput
        style={styles.input}
        ref={passwordInput}
        value={password}
        onChangeText={setPassword}
        returnKeyType="go"
        secureTextEntry={true}
        placeholder="Password"
      />

      <CButton
        color="#f1f1f1"
        backgroundColor="#0065e0"
        title="Sign In Now"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#f1f1f1',
    color: '#999',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginForm;
