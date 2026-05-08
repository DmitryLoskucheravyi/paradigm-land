const Button = (props) => {
    const {text, classes}  = props
    return (
        <button className={classes + " br-sm p-sm"}>{text}</button>
    )
}

export default Button