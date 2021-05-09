import React from 'react'
import Input from '../Common/Input'
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native'
import Container from '../Common/Container'
import CustomButton from '../Common/CustomButton'
import styles from './styles'
import SignOption from '../Common/SignOption'
import colors from '../../assets/colors'
import { useNavigation } from '@react-navigation/core'
import { SIGN_UP } from '../../constants/routeNames'

const SignInCompoent = () => {
   
    const {navigate} = useNavigation();

    return (
        
        <Container >
        <Image style={[styles.logoImage, {marginVertical: (Platform.OS === 'ios') ? 60 : 30}]} source={require("../../assets/images/Logo.png")}/>
        <View>
            <Text style={styles.title}>Welcome to our Laundrey Services</Text>
            <Text style={styles.subTitle}>Please Login Here</Text>
            <Input label="Username" placeholder='Enter Ur Email'/>
            <Input label="Password" secureTextEntry placeholder='Enter Ur Password' icon={<Text>Icon</Text>}/>
            <CustomButton 
            title='Sign In'/>
            <SignOption 
            onPress={()=> navigate(SIGN_UP)}
            btnText='Register Now' 
            message="Don't have an account ?"/>
            </View>
        </Container>
       
    )
}

export default SignInCompoent
