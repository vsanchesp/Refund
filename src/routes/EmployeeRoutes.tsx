import { Routes, Route } from "react-router"

import { Refund } from "../pages/Refund"
import { Notfound } from "../pages/NotFound"
import { Confirm} from "../pages/Confirm"

import { AppLayout } from "../components/AppLayout"


export function EmployeeRoutes() {
    return(
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<Refund/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
            </Route>


            <Route path="*" element={<Notfound/>}/>

        </Routes>
    )
}