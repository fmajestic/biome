import ReactDOM, { render } from "react-dom";

ReactDOM.render(<div />, document.body);
function render1() {
    ReactDOM.render(<div />, document.body);
}
const render2 = () => {
    ReactDOM.render(<div />, document.body);
}

render(<div />, document.body);
function render1() {
    render(<div />, document.body);
}
const render2 = () => {
    render(<div />, document.body);
}