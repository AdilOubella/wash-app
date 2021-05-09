import {StyleSheet} from 'react-native'
import colors from '../../assets/colors'


export default StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:21,
        fontWeight: "bold",
        paddingVertical: 10
    },
    subTitle:{
        textAlign:'center',
        fontSize:17,
        paddingVertical: 15
    },
    logoImage: {
        height:170,
        width:170,
        color: colors.primary,
        alignSelf: 'center',
       
    }
})