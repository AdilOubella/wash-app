import React from 'react'
import {ScrollView} from 'react-native'
import styles from './styles'

const Container = ({children}) => {
    return (
        <ScrollView style={styles.wrapper}>
            {children}
        </ScrollView>
    )
}

export default Container
