import React, {useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import colors from '../../../assets/colors';
import styles from './styles'

const Input = ({icon, value,onChangeText, label, placeholder, secureTextEntry, error}) => {

    const [focused, setFocused] = useState(false);

    const getBorderColor = () => {
        if (error) return colors.danger;
        else if(focused) return colors.primaryDark;
        return colors.grey
    }


    return (
        <View style={styles.inputContainer}>
            <View>
                <Text>{label}</Text>
            </View>
            <View style={[styles.wrapper, {borderColor: getBorderColor()}]}>
                {icon && icon}
                <TextInput 
                    secureTextEntry={secureTextEntry}
                    onFocus={()=> setFocused(true)} 
                    onBlur={()=> setFocused(false)}
                    style={styles.textInput}
                    value={value} 
                   onChangeText={onChangeText} 
                    placeholder={placeholder} />

            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input
