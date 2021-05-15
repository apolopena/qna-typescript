declare module 'qna-types' {

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
    payload: { data: Array<QuestionData> }
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
