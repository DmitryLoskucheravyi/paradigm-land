const Button = (props) => {
    const { text, link, classes } = props
    return (
        <button className={classes + " br-sm p-sm"}>{link ? <a href={'tel:' + link}>{text}</a> : text}</button>
    )
}

export default Button