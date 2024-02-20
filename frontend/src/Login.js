import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Background from './Background';
import Butt from './Butt';
import { darkGreen } from './Constant';
import Field from './Field';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);
  const handleLogin = async () => {
    const formData = {
      emailId: email,
      password: password
    }
    try {
      const response = await fetch('http://10.0.2.2:5001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(response.status);
      if (response.status === 200) {
        alert('success');
        navigation.navigate('Dashboard')
      }
      else {
        alert("Failed to login")
      }
      // if (data) {
      //   // Login successful
      //   // Navigate to the home screen or perform any other actions
      //   alert('Logged In Successfully');
      // } else 
      //   // Login failed
      //   Alert.alert('Login Failed', data.message || 'Failed to login, please try again');
      // }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred, please try again');
    }
  };

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 20 }}>
          Login
        </Text>
        <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center' }}>
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
            Welcome Back
          </Text>
          <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType="email-address"
            labelText={"Email"}
            placeHolder={"enter Email"}
            handleChange={setEmail}
            value={email}
          />
          <Field
            placeHolder="Enter Password"
            labelText="password"
            secureTextEntry={true}
            handleChange={setPassword}
            value={password}
          />

          <Butt textColor="white" bgColor={darkGreen} btnLabel="Login" Press={handleLogin} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
