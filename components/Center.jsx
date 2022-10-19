export default function Center(props) {
    return (
        <div style={{ width: "fit-content", margin: "auto", textAlign: "center" }}>
            {props.children}
        </div>
    )
}