import './text-field.css'
export const TextField = () => {
    return <p className="input-container">
        <input type="text" id="input-username" className="login-input"/>
        <label htmlFor="input-username" unselectable="on">Username</label>
    </p>
}