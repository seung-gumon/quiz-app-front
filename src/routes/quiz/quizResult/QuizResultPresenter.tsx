import React from 'react';


interface IQuizResultPresenter {

}



const QuizResultPresenter : React.FC<IQuizResultPresenter> =
    ({

     }) => {

    return (
        <main>
            <section
                className={'animate-fade-in-up w-full lg:pb-0 flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                <article className={'p-6 w-10/12 md:w-5/6 lg:w-4/6 bg-white rounded-lg'}>
                    <div>

                    </div>
                    <span>Hello spider man</span>
                </article>
            </section>
        </main>
    )
}

export default QuizResultPresenter