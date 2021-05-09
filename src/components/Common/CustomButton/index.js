import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const CustomButton = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={{color: "#fff", fontWeight: 'bold'}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton
