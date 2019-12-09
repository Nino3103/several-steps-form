import React from "react";
import ReactDOM from "react-dom"
import MasterForm from "./MasterForm"

const App = () => {
    return(
        <div>
            <MasterForm />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));