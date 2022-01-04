import React from 'react';
import PopupResult from "../popupResult";
import {render} from "@testing-library/react";


describe("PopupResult", () => {
    it("should render '정답이에요!' with props", () => {
        const {container, getByText} = render(<PopupResult
            quizLength={10}
            seq={4}
            imgSrc={"https://user-images.githubusercontent.com/64651532/147871345-e5dd2829-4297-4726-92e0-ac2b2c52d39f.png"}
            imgAlt={"correct png"}
            text={"정답이에요 !"}
        />)
        getByText("정답이에요 !")
    })

    it("should render '문제를 다푸셨어요' with props ", () => {
        const {getByText} = render(<PopupResult
            quizLength={10}
            seq={9}
            imgSrc={"https://user-images.githubusercontent.com/64651532/147871345-e5dd2829-4297-4726-92e0-ac2b2c52d39f.png"}
            imgAlt={"correct png"}
            text={"정답이에요 !"}
        />)
        getByText("문제를 다 푸셨어요! 너무 수고하셨고 결과를 확인해주세요 ! 😊")
    })
})