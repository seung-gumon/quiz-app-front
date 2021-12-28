import {atom} from "recoil";


export interface IQuizApi {
    category : string;
    correct_answer : string;
    difficulty : string;
    incorrect_answers : string[],
    question : string,
    type : string
}

export const userName = atom<string>({
    key: "userName",
    default: ""
})


export const quizApi = atom<IQuizApi[]>({
    key : "quizApi",
    default : []
})


