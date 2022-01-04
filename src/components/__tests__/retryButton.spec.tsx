import React from 'react';
import {render} from "@testing-library/react";
import RetryButton from "../retryButton";


describe("RetryButton", () => {
    it("should render '새로운 문제 풀기' width props", () => {
        const {getByText, container} = render(
            <RetryButton
                className={"text-grey-dark flex items-center flex-col py-2 justify-center bg-violet-300 border-b-4 border-r-4 border-violet-400 rounded-lg"}
                text={"새로운 문제 풀기"}/>
        )
        container.getElementsByClassName('bg-violet-300')
        expect(getByText("새로운 문제 풀기")).toBeTruthy();
    })


    it("should render '다시풀기' width props", () => {
        const {container, debug, getByText} = render(
            <RetryButton
                className={"text-grey-dark flex items-center flex-col py-2 justify-center bg-amber-300 border-b-4 border-r-4 border-amber-400 rounded-lg"}
                text={"다시풀기"}/>
        )
        container.getElementsByClassName('bg-amber-300')
        expect(getByText("다시풀기")).toBeTruthy();
    })
})


