import React from 'react';
import {render} from "@testing-library/react";
import ResultAnswerTable from "../resultAnswerTable";


describe("ResultAnswerTable", () => {
    it("should render '정답' width props", () => {
        const {getByText, container} = render(<ResultAnswerTable
            containerClassName={"text-grey-dark flex items-center flex-col justify-center bg-emerald-300 border-b-4 border-r-4 border-emerald-400 rounded-lg"}
            correctOrWrongLength={3} text={"정답"}/>)
        getByText("정답")
        expect(container.firstChild).toHaveClass("bg-emerald-300");
    })


    it("should render '실패' width props", () => {
        const {getByText, container} = render(<ResultAnswerTable
            containerClassName={"text-grey-dark flex items-center flex-col justify-center bg-rose-300 border-b-4 border-r-4 border-rose-400 rounded-lg"}
            correctOrWrongLength={3} text={"오답"}/>)
        getByText("오답")
        expect(container.firstChild).toHaveClass("bg-rose-300");
    })
})


