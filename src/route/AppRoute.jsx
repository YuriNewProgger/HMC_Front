import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { PhotosPage } from "../pages/PhotosPage"
import { VideosPage } from "../pages/VideosPage"
import { MusicsPage } from "../pages/MusicsPage"
import { FilmsPage } from "../pages/FilmsPage"
import { AdminPage } from "../pages/AdminPage"


export const AppRoute = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/photos'} element={<PhotosPage />} />
            <Route path={'/homeVideos'} element={<VideosPage />} />
            <Route path={'/admin'} element={<AdminPage />}/>
            <Route path={'/musics'} element={<MusicsPage />} />
            <Route path={'/films'} element={<FilmsPage />} />
        </Routes>
    )

}