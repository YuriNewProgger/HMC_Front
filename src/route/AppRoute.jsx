import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { Box } from "@mantine/core"


export const AppRoute = () => {
    return(
        <Routes>
            <Route path={'/'} element={<MainPage/>} />
        </Routes>
    )
}