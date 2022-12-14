import { useState } from 'react'

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackTypeStep } from './Steps/FeedbackTypeSet'
import {FeedbackSucessStep} from './Steps/FeedbackTypeSucess'
export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt:"Imagem de um inseto"
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt:"Imagem de uma lâmpada"
        },
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt:"Imagem de uma nuvem de pensamento"
        },
    },

}
export type FeedbackTypes = keyof typeof feedbackTypes
export const WidgetForm = () => {
    const [feedbackType, setFeedbackTypes] = useState<FeedbackTypes | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)
    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackTypes(null)
    }
    return (
        <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
            {feedbackSent ? (
                <FeedbackSucessStep
                    onFeedbackRestartRequesed={handleRestartFeedback} />
            ) : (
                <>
                        {!feedbackType ? (
                     <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackTypes}/>
                        ) : (
                                <FeedbackContentStep
                                    feedbackType={feedbackType}
                                    onFeedbackRestartRequest={handleRestartFeedback}
                                    onFeedbackSent={()=> setFeedbackSent(true)}
                                />
                 )}
                </>
            )}
            <footer className='text-xs text-neutral-400'>
                Feito com ♥ pelo Gabriel
                <a className='underline underline-offset-1'
                    href="https://rocketseat.com.br" target="_blank"></a>
            </footer>
        </div>
    )
}