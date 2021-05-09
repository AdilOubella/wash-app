import React from 'react'
import Input from '../Common/Input'
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native'
import Container from '../Common/Container'
import CustomButton from '../Common/CustomButton'
import styles from './styles'
import SignOption from '../Common/SignOption'
import { SIGN_IN } from '../../constants/routeNames'
import { useNavigation } from '@react-navigation/core'

const SignUpCompoent = ({form,errors,onSubmit, onChangeText}) => {

    const {navigate} = useNavigation();
    return (
        
        <Container >
           <Image style={[styles.logoImage, {marginVertical: (Platform.OS === 'ios') ? 60 : 30}]} source={require("../../assets/images/Logo.png")}/>
            <Input 
                error={errors['firstName']}
                onChangeText={(value)=> onChangeText({name:'firstName', value})} 
                label="First Name" 
                placeholder='Enter Ur FirstName'/>
            <Input 
                error={errors['lastName']}
                onChangeText={(value)=> onChangeText({name:'lastName', value})} 
                label="Last Name" 
                placeholder='Enter Ur LastName'/>
            <Input 
                error={errors['email']}
                onChangeText={(value)=> onChangeText({name:'email', value})} 
                label="Email" 
                placeholder='Enter Ur Email'/>
            <Input 
                error={errors['username']}
                onChangeText={(value)=> onChangeText({name:'username', value})} 
                label="Username" 
                placeholder='Set a Username'/>
            <Input 
                error={errors['password']}
                onChangeText={(value)=> onChangeText({name:'password', value})} 
                label="Password" 
                secureTextEntry 
                placeholder='Set a Password' 
                icon={<Text>Icon</Text>}/>

            <CustomButton  onPress={onSubmit} title='Sign Up'/>
            <SignOption onPress={()=> navigate(SIGN_IN)} btnText='Login' message='You have an account !'/>
        </Container>
       
    )
}

export default SignUpCompoent