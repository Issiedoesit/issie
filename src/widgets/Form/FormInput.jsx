import React from 'react'
import useThemeStore from '../../hooks/stores/useThemeStore'

const FormInput = ({fieldsetId, display, colSpan, rowSpan, inputRequired, inputValue, maxLength, fieldError, handleChange, handleBlur, labelColor, labelFont, inputLabel, inputName, inputType, inputPlaceholder, inputId, ...rest}) => {
  
    const {variant} = useThemeStore(state=>state.theme)
  
    return (
    <fieldset id={fieldsetId} className={`gap-2.5 group flex flex-col ${colSpan ? colSpan : 'col-span-1'} w-full`}>
        <label htmlFor={inputId || 'name'} className={`text-sm ${labelFont ? labelFont : 'font-medium'} ${variant == 'light' ? "group-focus-within:text-black" : "group-focus-within:text-white"} ${labelColor ? labelColor : 'text-gray-600'}`}>{inputLabel || "Name"}</label>
        <input type={inputType || "text"} {...rest} maxLength={maxLength} value={inputValue} onChange={handleChange} onBlur={handleBlur} required={inputRequired || true} id={inputId || 'name'} name={inputName || 'name'} placeholder={inputPlaceholder || 'Enter name'} className={`px-4 py-2.5 rounded-five ${variant == 'light' ? "text-black" : "text-white"} placeholder:text-gray-600 font-spaceGroteskRegular w-full border-2 ${fieldError ? 'border-red-500 focus:border-red-500' : `border-gray-500 focus:border-black ${variant == 'light' ? "focus:border-black" : "focus:border-white"}`} focus:outline-none focus:border-2 bg-transparent`} />
        <p className='text-red-500 text-xs font-medium'>{fieldError}</p>
    </fieldset>
  )
}

export default FormInput