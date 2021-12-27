import {BrowserRouter, Route, Routes} from "react-router-dom";
import QuizStart from "./routes/quiz-start";
import NotFound from "./pages/404";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<QuizStart/>}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

