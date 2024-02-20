import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Background from './Background';
import Butt from './Butt';
import { darkGreen } from './Constant';
import Field from './Field';
import FormField from './FormField';

// import axios from 'axios';

const Register = ({ navigation }) => {


    // const [formData, setFormData] = useState({
    //     name:"",
    //     emailId:"",
    //     phoneNo:"",
    //     age:"",
    //     password:"",
    //     location:"",
    // })

    // const handleChange = (e)=>{
    //     const {name, value} = e.target;
    //     const newFormData = {...formData, [name] : value};
    // }

    const [name, setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");

    const sendCred = async () => {
        const formData = {
            name: name,
            phoneNo: phoneNo,
            age: age,
            password: password,
            location: location,
            emailId: emailId
        };


        try {
            const response = await fetch('http://10.0.2.2:5001/api/v1/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response) {
                navigation.navigate('Login');
            }
        } catch (error) {
            console.error("Error:", error.message);

            // if (error.response) {
            //     Alert.alert("Error", error.response.data.message || "Server error occurred");
            // } else if (error.request) {
            //     Alert.alert("Error", "No response received from server");
            // } else {
            //     Alert.alert("Error", "An unknown error occurred");
            // }
        }
    };


    return (
        <Background>
            <View style={{ alignItems: 'center', width: 460 }}>
                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginTop: 20 }}>
                    Register
                </Text>
                <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>
                    Create a new account
                </Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center' }}>
                    <Field handleChange={setName} labelText={"Name"} placeHolder={"Enter username"} value={name} />
                    <Field handleChange={setLocation} labelText={"Location"} placeHolder={"Enter location"} value={location} />
                    <Field handleChange={setEmailId} labelText={"Email Id"} placeHolder={"Enter emailId"} value={emailId} />
                    <Field handleChange={setPassword} labelText={"Password"} placeHolder={"Enter Password"} value={password} />
                    <Field handleChange={setAge} labelText={"Age"} placeHolder={"Enter Age"} value={age} />
                    <Field handleChange={setPhoneNo} labelText={"Phone No"} placeHolder={"Enter Phone No"} value={phoneNo} />

                    <View style={{ flexDirection: 'row', width: '78%', paddingRight: 16 }}>
                        <Text style={{ color: 'grey', fontSize: 16 }}>
                            By registering, you agree to our{' '}
                        </Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                            Terms & Conditions
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', width: '78%', paddingRight: 16, marginBottom: 10 }}>
                        <Text style={{ color: 'grey', fontSize: 16 }}>
                            and {' '}
                        </Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                            Privacy Policy
                        </Text>
                    </View>

                    <Butt textColor="white" bgColor={darkGreen} btnLabel="Register" Press={sendCred} />

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            Already have an account?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
};

export default Register;
