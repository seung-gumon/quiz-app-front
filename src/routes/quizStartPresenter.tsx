import React, {Dispatch, SetStateAction} from 'react';


interface IQuizStartPresenter {
    name: string
    setName: Dispatch<SetStateAction<string>>
    gameStart: () => void;
}


const QuizStartPresenter: React.FC<IQuizStartPresenter> =
    ({
         name,
         setName,
         gameStart
     }) => {
        return (
            <main className={'w-full flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                <section className={'p-10 w-10/12 md:w-3/6 lg:w-2/6 bg-white rounded-lg'}>
                    <label htmlFor="userName" className="block mb-2 text-xs md:text-lg font-bold">게임에 참여하는 분의 성함을 적어주세요 !️</label>
                    <input type="text" id="userName"
                           value={name || ''}
                           onChange={(event: React.FormEvent<HTMLInputElement>) => setName(event.currentTarget.value)}
                           className="border border-gray-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                           placeholder="ex) 홍길동" required={true} minLength={1}/>
                    <button
                        onClick={gameStart}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full mt-3">
                        게임 시작하기 !
                    </button>
                </section>
            </main>
        )
    }

export default QuizStartPresenter