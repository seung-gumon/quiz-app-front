import {BrowserRouter, Route, Routes} from "react-router-dom";

import NotFound from "./pages/404";
import QuizStartContainer from "./routes/quizStartContainer";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<QuizStartContainer/>}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

