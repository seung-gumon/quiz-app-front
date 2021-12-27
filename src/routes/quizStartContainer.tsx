import React from 'react';
import QuizStartPresenter from "./quizStartPresenter";
import {useRecoilState} from "recoil";
import {userName} from "../atoms";
import {useNavigate} from 'react-router-dom';


const QuizStartContainer = () => {

    const [name, setName] = useRecoilState(userName);

    const navigate = useNavigate();


    const gameStart = () => {
        if (name.trim().length === 0) {
            setName("");
            return alert("이름을 한글자 이상 적어주세요!");
        }
        navigate('/')
    }

    return (
        <QuizStartPresenter
            name={name}
            setName={setName}
            gameStart={gameStart}
        />
    )
}

export default QuizStartContainer