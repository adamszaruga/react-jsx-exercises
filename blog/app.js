let Header = () => {
    return <span>Design a header for your blog</span>
}
let Article = () => {
    return <span>Write and design your blog article</span>
}
let Footer = () => {
    return <span>Design a footer for your blog</span>
}

let Blog = () => {
    return <span>Make this Component render the header, article, and footer</span>
}


ReactDOM.render(<Blog />, document.getElementById('root'))