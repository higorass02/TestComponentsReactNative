import React,{ useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

import ResultIMC from '../../components/ResultIMC/index'

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [imc, setImc] = useState(null)
  const [messageIMC, setMessageIMC] = useState('Preencha o peso e altura!')
  const [textButton, setTextButton] = useState('Calcular')

  function imcCalculator(){
    return setImc( (weight/(height*height)).toFixed(2) )
  }

  function validatorImc(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageIMC('Seu Imc é:')
      setTextButton('Calcular Novamente')
      return
    }
    setImc(null)
    setTextButton('Calcular')
    setMessageIMC('Preencha o peso e altura!')
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex 1.80"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex 75.564"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />

        <Button
          title={textButton}
          onPress={validatorImc}
        />
      </View>
      <ResultIMC messageResultIMC = {messageIMC} resultImc={imc}/>
    </View>
  );
}
