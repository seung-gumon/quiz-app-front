import React from 'react';
import {render} from "@testing-library/react";
import QuizText from "../../../components/quizText";
import QuizContainer from "../quizContainer";
import {RecoilRoot} from "recoil";


describe('<quizContainer/>', () => {
    it('render Ok with Props', () => {
        const {debug} = render(
            <RecoilRoot>
                <QuizContainer/>
            </RecoilRoot>
        );
    })
})