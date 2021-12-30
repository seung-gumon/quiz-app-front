import React from 'react';
import ApexChart from "react-apexcharts";

interface IQuizResultPresenter {

}


const QuizResultPresenter: React.FC<IQuizResultPresenter> =
    ({}) => {


        return (
            <main>
                <section
                    className={'animate-fade-in-up w-full lg:pb-0 flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                    <article className={'p-6 w-10/12 md:w-5/6 lg:w-4/6 bg-white rounded-lg'}>
                        <div className={'flex items-center justify-center flex-col'}>
                            <ApexChart
                                width={400}
                                type={'pie'}
                                series={
                                    [4, 6]
                                }
                                options={{
                                    labels: ['정답', '오답'],
                                    legend: {
                                        position: "bottom",
                                        fontSize : "16px"
                                    },
                                    responsive: [
                                        {
                                            breakpoint: 600,
                                            options: {
                                                chart: {
                                                    width: "100%",
                                                    type: 'pie',
                                                },
                                            }
                                        }
                                    ]
                                }}
                            />
                            <div className={'flex flex-col w-full items-center justify-center '}>
                                <span>총 10문제</span>
                                <div className={'flex md:flex-col'}>
                                    <span>정답 : 1</span>
                                    <span>오답 : 2</span>
                                </div>

                                <div className={'flex w-full flex-col md:flex-row items-center justify-center'}>
                                    <button className={'md:px-3'}>오답 풀기</button>
                                    <button className={'md:px-1.5'}>새로운 문제 풀기</button>
                                </div>
                            </div>

                        </div>
                    </article>
                </section>
            </main>
        )
    }

export default QuizResultPresenter