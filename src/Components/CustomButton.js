import React from 'react';
import {Text, View} from 'react-native';

const CustomButton = ({text, type = 'PRIMARY'}) => {
  return (
    <View
      className={`w-full p-4 my-1 items-center rounded ${
        type === 'PRIMARY'
          ? 'bg-blue-500'
          : type === 'SECONDARY'
          ? 'bg-white border-2 border-blue-500'
          : ''
      }`}>
      <Text
        className={`${
          type === 'PRIMARY'
            ? 'text-white font-bold'
            : type === 'SECONDARY'
            ? 'text-blue-500'
            : 'text-gray-700'
        }`}>
        {text}
      </Text>
    </View>
  );
};

export default CustomButton;
