const TextInput = ({type,label,pattern,placeholder,id,...props}) =>{
    return (
        <div className="flex flex-col my-2">
          <label className="text-gray-600">
            {label}
          </label>
          <input type={type} id={id} pattern={pattern} className="border w-80 px-2 py-1" placeholder={placeholder} {...props}></input>
        </div>
      )
}

export default TextInput;