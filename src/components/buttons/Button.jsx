import "./Button.css"

const Button = (props) => {
    const { text, link, classes } = props
    return (
        <button className={classes + " button-utility"} style={{ borderRadius: '1.6rem', padding: '1.6rem' }}>{link ? <a href={'tel:' + link}>{text}</a> : text}</button>
    )
}

export default Button