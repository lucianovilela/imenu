import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Botao = ({ style, onPress, title }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={{ color: '#fff' }}>{title}</Text>
    </TouchableOpacity>
  );
};


export default Botao;