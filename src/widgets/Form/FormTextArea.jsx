import React from 'react'
import useThemeStore from '../../hooks/stores/useThemeStore'

const FormTextArea = ({fieldsetId, display, colSpan, rowSpan, cols, resize, rows, textAreaRequired, textAreaValue, maxLength, fieldError, handleChange, handleBlur, labelColor, labelFont, textAreaLabel, textAreaName, textAreaType, textAreaPlaceholder, textAreaId, ...rest}) => {
  
    const {variant} = useThemeStore(state=>state.theme)
  
    return (
    <fieldset id={fieldsetId} className={`gap-2.5 group flex flex-col ${colSpan ? colSpan : 'col-span-1'} w-full`}>
        <label htmlFor={textAreaId || 'message'} className={`text-sm ${labelFont ? labelFont : 'font-medium'} ${variant == 'light' ? "group-focus-within:text-black" : "group-focus-within:text-white"} ${labelColor ? labelColor : 'text-gray-600'}`}>{textAreaLabel || "Message"}</label>
        <textarea cols={cols} rows={rows || 5} {...rest} maxLength={maxLength} value={textAreaValue} onChange={handleChange} onBlur={handleBlur} required={textAreaRequired || true} id={textAreaId || 'message'} name={textAreaName || 'message'} placeholder={textAreaPlaceholder || 'Enter message'} className={`px-4 py-2.5 rounded-five ${resize ? "resize" : "resize-none"} ${variant == 'light' ? "text-black" : "text-white"} placeholder:text-gray-600 font-spaceGroteskRegular w-full border-2 ${fieldError ? 'border-red-500 focus:border-red-500' : `border-gray-500 focus:border-black ${variant == 'light' ? "focus:border-black" : "focus:border-white"}`} focus:outline-none focus:border-2 bg-transparent`} ></textarea>
        <p className='text-red-500 text-xs font-medium'>{fieldError}</p>
    </fieldset>
  )
}

export default FormTextArea