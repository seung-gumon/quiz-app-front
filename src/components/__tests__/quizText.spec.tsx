import React from 'react';
import {render} from "@testing-library/react";
import QuizText from "../quizText";


describe("quizText" , () => {

    const gradeReturnTrue = ()  => {
        return true
    }

    const gradeReturnFalse = () => {
        return false
    }

    const goToNextQuiz = () => {

    }

    it("should render OK width Props" , () => {
        const {debug} = render(<QuizText selectIndex={1} select={"asdf"} seq={0} goToNextQuiz={goToNextQuiz} grade={gradeReturnTrue} quizLength={10}/>)

    })
})
//TODO :: POP UP 따로 컴포넌트로 빼서 검사해야할듯 ?!