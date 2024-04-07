import React, {useState} from 'react';
import {View, TouchableOpacity, Alert, Text} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';

function LoginScreens() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = [
    {name: 'Mr.Z', email: 'zdk@example.com', password: '123456'},
    {name: 'Jane Smith', email: 'jane@example.com', password: 'password123'},
    {name: 'Alice Johnson', email: 'alice@example.com', password: 'alice123'},
  ];

  const onSignInPress = async () => {
    const user = userData.find(
      user => user.email === email && user.password === password,
    );
    if (user) {
      Alert.alert('Đăng nhập thành công:', user.name);
    } else {
      Alert.alert(
        'Đăng nhập không thành công',
        ' Tài khoản hoặc mật khẩu không chính xác',
      );
    }
  };

  return (
    <SafeAreaView className="justify-center w-full h-full bg-[#f4a503]">
      <View className="bg-white items-center m-4 p-3">
        <Text className="text-2xl font-bold mb-5 text-center">Login</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={onSignInPress}>
          <CustomButton text="Login" />
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomButton text="Forgot password?" type="TERTIARY" />
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomButton
            text="Don't have an account? Create one"
            type="TERTIARY"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreens;
