import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from "./styles"
import colors  from "../../../assets/colors"

const SignOption = ({message,btnText, onPress}) => {
    return (
    <View>
        <View style={styles.wrapper}>
            <Text> {message}</Text>
            <TouchableOpacity onPress={onPress} >
                <Text style={{marginLeft: 18,color: colors.primaryDark}}> {btnText}</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default SignOption
