
import Student from "./Student"

import UserProvider from "./UserContext"

export default function ExempleContextApi() {

    return (
        <UserProvider>

            <div className="exemple">
                <h1>Escola Formando Futuros</h1>
                <Student />
            </div>

        </UserProvider>
    )
}