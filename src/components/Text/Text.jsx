import "./text.css"

export const Text = (props) => {
    const classe = props.bold ? "bold" : ""; 
    return <div className={classe}>{props.children}</div>;
};