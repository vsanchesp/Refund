import { BrowserRouter } from "react-router";

import { EmployeeRoutes } from "./EmployeeRoutes";

import { AuthRoutes } from "./AuthRoutes"

export function Routes() {
    return(
        <BrowserRouter>
            <EmployeeRoutes/>
        </BrowserRouter>
    )
}