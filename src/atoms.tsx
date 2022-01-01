import {atom} from "recoil";

export enum DIFFICULTY {
    "EASY"="easy",
    "MEDIUM"="medium",
    "HARD"="hard"
}


export interface IQuizApi {
    category: string;
    correct_answer: string;
    difficulty: DIFFICULTY;
    incorrect_answers: string[],
    question: string,
    type: string
}

export const userName = atom<string>({
    key: "userName",
    default: ""
})


export const quizApi = atom<IQuizApi[]>({
    key: "quizApi",
    default: []
})


export const correctQuiz = atom<IQuizApi[]>({
    key: "correctQuiz",
    default: []
})

export const wrongQuiz = atom<IQuizApi[]>({
    key: "wrongQuiz",
    default: []
})

export const startTime = atom<number>({
    key : "startTime",
    default : 0,
})


