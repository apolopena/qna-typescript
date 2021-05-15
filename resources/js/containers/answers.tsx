import React, { memo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { AnswerData } from 'qna-types'
import AnswerContext from '../context/AnswerContext'
import { Header, AnswerForm, AnswerList } from '../components'
import { useDataApi } from '../hooks'
import { AnyAaaaRecord } from 'dns'

export function AnswersContainer() {
  const { questionId } = useParams<{ questionId: string }>()
  const [payload] = useDataApi(`/api/questions/${questionId}`)
  const [answers, setAnswers] = useState< Array<AnswerData> >()

  
  // for debugging
  console.count('render count')
  useEffect(() => {
    console.log(`the value of answers is ${JSON.stringify(answers, null, 2)}`)
    console.log(`the value of payload is ${JSON.stringify(payload, null, 2)}`)
  }, [payload, answers])
 

  const displayAnswers = (data: AnswerData) => {
    if (!data) return

    const NoAnswers = () => (
      <div className='cardBody py-4'>
        No answers yet! Be the first to answer by using the form below.
      </div>
    )

    if (answers) {
      return (answers.length > 0)
        ? <AnswerList answers={answers} />
        : NoAnswers()
    }
    
    return (payload.data.answers.length > 0)
      ? <AnswerList answers={payload.data.answers} />
      : NoAnswers()
  }

  return (
    <>
      <Header />
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card' style={{ border: 'none' }}>
              <div className='card-header'>
                {payload.isLoading ? '' : payload.data.description}
              </div>
              {displayAnswers(payload.data.answers)}
            </div>
            <AnswerContext.Provider value={{ answers, setAnswers }}>
              <AnswerForm questionId={Number(questionId)} />
            </AnswerContext.Provider>
          </div>
        </div>
      </div>
    </>
  )
}
