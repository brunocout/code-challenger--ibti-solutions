import './index.css'

const Input = ({ type, className, name, placeholder, ...restProps }) => {
    return <input type={type} name={name} placeholder={placeholder} {...restProps} className={className}/>
}
 
export default Input;