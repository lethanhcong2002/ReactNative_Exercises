import React from 'react';
import {View, TextInput} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View className="bg-white w-full border border-gray-300 rounded px-4 py-2 my-1">
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        className="w-full"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
