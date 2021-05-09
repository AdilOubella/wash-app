import {StyleSheet} from 'react-native'
import colors from '../../../assets/colors'



export default StyleSheet.create({
    inputContainer:{
        paddingVertical: 7
    },
    wrapper:{
        height: 42,
        borderWidth:1,
        borderRadius:4,
        flexDirection:"row-reverse",
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5
    },
    textInput:{
        // backgroundColor: 'red',
        flex:1,
        paddingLeft:10

    },
    error:{
        color: colors.danger
    }
})