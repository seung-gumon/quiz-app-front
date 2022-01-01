import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import QuizContainer from "./quiz/quizContainer";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<QuizContainer/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/"/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

