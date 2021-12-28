import React, {Dispatch, SetStateAction} from 'react';


interface IQuizPresenter {
    userName : string
    setUserName : Dispatch<SetStateAction<string>>
}

const QuizPresenter: React.FC<IQuizPresenter> =
    ({
        userName,
        setUserName,
     }) => {



        return (
            <main className={'w-full pb-14 lg:pb-0 flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                <section className={'p-10 w-10/12 md:w-3/6 lg:w-2/6 bg-white rounded-lg'}  style={{maxWidth:'500px'}}>
                    <span>hello</span>
                </section>
            </main>
        )
    }

export default QuizPresenter