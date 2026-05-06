const Button = (props) => {
    const {text, classes}  = props
    return (
        <button className={classes}>{text}</button>
    )
}

export default Button