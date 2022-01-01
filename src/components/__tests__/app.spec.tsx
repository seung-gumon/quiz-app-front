import React from 'react';
import {render} from "@testing-library/react";
import App from "../app";
import {RecoilRoot} from "recoil";


describe("App", () => {
    it("App renders OK", () => {
        render(
            <RecoilRoot>
                <App/>
            </RecoilRoot>
        )
    })
})


