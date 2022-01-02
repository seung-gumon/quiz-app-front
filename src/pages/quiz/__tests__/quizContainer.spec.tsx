import React from 'react';
import {render, RenderResult , waitFor} from "@testing-library/react";
import QuizText from "../../../components/quizText";
import QuizContainer from "../quizContainer";
import {RecoilRoot} from "recoil";
import userEvent from "@testing-library/user-event";


describe('<quizContainer/>', () => {

    it('render Ok with Props', async () => {
        const {debug , getByPlaceholderText , getByText , getByRole} = render(
            <RecoilRoot>
                <QuizContainer/>
            </RecoilRoot>
        )
        const name = getByPlaceholderText("ex) 홍길동");
        const button = getByText("퀴즈 풀기 !");
        await waitFor(() => {
            userEvent.type(name , "김승석");
            // userEvent.type(button , "퀴즈풀기 !")
            // expect(window.alert).toHaveTextContent("이름을 한글자 이상 적어주세요!");
        })
        debug()


    });

})