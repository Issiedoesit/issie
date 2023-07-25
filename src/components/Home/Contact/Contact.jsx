import React, { useState } from 'react'
import {useFormik} from "formik"
import * as Yup from 'yup'
import SectionWrap from '../../../widgets/Wraps/SectionWrap'
import SectionHeader from '../../../widgets/Text/Headers/SectionHeader'
import useThemeStore from '../../../hooks/stores/useThemeStore'
import FormInput from '../../../widgets/Form/FormInput'
import FormTextArea from '../../../widgets/Form/FormTextArea'
import {PacmanLoader} from 'react-spinners'
import axios from 'axios'
import Alert from '../../../widgets/Alerts/Alert'
import EmailValidator from '../../../utils/EmailValidator'

const Contact = () => {

    const [submitting, setSubmitting] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertValues, setAlertValues] = useState({
        message: "",
        type: 'warning',
        duration: 2500
      });

    const {variant} = useThemeStore(state=>state.theme)

    const formik = useFormik({
        initialValues:{   
            email : "",
            subject : "",
            message: "",
            sender: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .required('Email address required')
            .email('Invalid email address'),            subject: Yup.string()
            .required('Subject required')
            .max(50, 'Keep subject short (50 words max)'),
            message: Yup.string()
            .required('Message required'),
            sender: Yup.string()
            .required('Name required')
        })
    })

    const sendEmail = (e) => {

        setOpenAlert(false)
        setSubmitting(true)
        

        const {sender, email, message, subject} = formik.values


        if (Object.keys(formik.errors).length > 0 || !message || !email || !sender || !subject) {
            formik.setTouched({
              email: !email,
              message: !message,
              subject: !subject,
              sender: !sender,
            });
            return;
        }
        

        try {
            axios.post(`${import.meta.env.VITE_BASE_URL}/api/sendmail`, {sender, email, message, subject})
            .then((response)=>{
                // console.log(response)
                setSubmitting(false)
                setOpenAlert(true)
                setAlertValues({...alertValues, message:response.data.message, type:`success` })
            })
            .catch((err)=>
            {  
                console.log("axios err => ", err);
                setSubmitting(false)
                // setMessage(err.message)
                })
        } catch (error) {
            console.error("catch error => ", error);
            setSubmitting(false)
        }
      
    }

  return (
    <SectionWrap id={'contact'}>
        <SectionHeader highLightBorderColor={'border-b-brandPurple1x'} remText={'Me'} textSpan={'Contact'} />
        <div className='px-4 my-8 border-l border-l-brandPurple2x container'>
            <form action="" className='py-8 flex flex-col w-full gap-4 max-w-lg mx-auto'>
                <FormInput inputName={"sender"} inputId={"sender"} inputValue={formik.values.sender} inputLabel={'Name'} handleChange={formik.handleChange} handleBlur={formik.handleBlur} fieldError={formik.touched.sender && formik.errors.sender} />
                <FormInput inputName={"email"} inputId={"email"} inputType={"email"} inputValue={formik.values.email} inputLabel={'Email Address'} inputPlaceholder={'Enter email'} handleChange={formik.handleChange} handleBlur={formik.handleBlur} fieldError={formik.touched.email && formik.errors.email} />
                <FormInput inputName={"subject"} maxLength={51} inputId={"subject"} inputValue={formik.values.subject} inputLabel={'Subject'} inputPlaceholder={'Enter Subject'} handleChange={formik.handleChange} handleBlur={formik.handleBlur} fieldError={formik.touched.subject && formik.errors.subject} />
                <FormTextArea textAreaName={"message"} textAreaId={"message"} textAreaValue={formik.values.message} textAreaLabel={'Message'} textAreaPlaceholder={'Enter message'} handleChange={formik.handleChange} handleBlur={formik.handleBlur} fieldError={formik.touched.message && formik.errors.message} />
                <div className="flex items-center justify-center w-full pt-8">
                    <button type='button' disabled={submitting} onClick={sendEmail} className={`bg-brandPurple1x text-white disabled:bg-transparent ${variant == 'light' ? "disabled:ring-black" : "disabled:ring-black"} text-sm font-medium px-10 py-2 w-fit rounded-full hover:ring hover:ring-brandPurple1x hover:ring-offset-2 ${variant == 'light' ? "hover:ring-offset-white" : "hover:ring-offset-black"} transition-all ease-in-out duration-300 flex items-center justify-center`}>
                        {submitting ? <PacmanLoader size={'10px'} color={`${variant == 'light' ? "black" : "white"}`} className={``} /> : "Send"}
                    </button>
                </div>
            </form>
        </div>
        <Alert open={openAlert} type={alertValues.type} message={alertValues.message} duration={alertValues.duration}  />
    </SectionWrap>
  )
}

export default Contact