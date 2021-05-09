import React, {useState} from 'react'
import { View , Text} from 'react-native'
import SignUpCompoent from '../../components/SignUpComponent'

const SignUp = () => {

    const [form, setForm] = useState({firstName:'',lastName:'',email:'',username:'',password:''});
    const [errors, setErrors] = useState([])


    const handleTextChange = ({name,value}) => {
        setForm({
            ...form,
            [name]:value
        });

        if(!value){
            setErrors({
                ...errors,
                [name]: `${name} is required`
            })
        }
        else{
            setErrors({
                ...errors,
                [name]: null
            })
        }
    }

    const handleSubmit = () => {
        console.log("form => ",form);
    }

    return (
        <SignUpCompoent form={form} errors={errors} onChangeText={handleTextChange} onSubmit={handleSubmit}/>
    )
}

export default SignUp
