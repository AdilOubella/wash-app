import React from 'react'
import {View, Text, TextInput} from 'react-native'

const Input = ({icon, value, onTextChange, label}) => {
    return (
        <View>
            <View>
                <Text>{label}</Text>
            </View>
            <View style={styles.wrapper}>
                {icon && <View> icon </View>}
                <TextInput value={value} onTextChange={(value) => onTextChange(value)}/>

            </View>
        </View>
    )
}

export default Input
