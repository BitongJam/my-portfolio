
import Home from './pages/Home';
import './index.css';
import { Routes, Route } from "react-router-dom";
import ProjectView from './components/ProjectView/ProjectView';
import MainLayout from './pages/MainLayout';


export default function App() {
    return <>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectView />} />
            </Route>

        </Routes>

    </>
}
