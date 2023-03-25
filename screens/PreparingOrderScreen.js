import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000)
  }, [])

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 items-center justify-center'>
      <Animatable.Image
        source={require('../assets/orderLoading.gif')}
        iterationCount={1}
        className='h-80 w-80'
        animation='slideInUp'
      />

      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-white text-center text-lg font-bold my-10'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen