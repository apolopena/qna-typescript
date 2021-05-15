declare module 'qna-types' {

  interface Payload<T> {
    data?: T
    isLoading: boolean
  }

  type AnswersPayload = AnswersData & { answers: AnswerData[] }

  interface AnswersData extends Item {
    data: { answers: AnswerData[] }
    isLoading?: boolean
  }

  interface Item {
    id: number
    description: string
    created_at: string
    updated_at: string
  }

  interface QuestionData extends Item {
    answers_count: number
  }

  interface AnswerData extends Item {
    question_id: number 
  }

  type QuestionListProps = {
    payload: Payload<QuesionData[]>
    isLoading?: boolean
  }

  type AnswerListProps = {
    answers: Array<AnswerData>
    isLoading?: boolean
  }

  type AnswerContextT = {
    answers: Array<AnswerData>
    setAnswers: ( a: Array<AnswerData> ) => void
  }
}
