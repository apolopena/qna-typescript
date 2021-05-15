declare module 'qna-types' {
  
  interface GenericItem {
    id: number
    description: string
    created_at: string
    updated_at: string
  }

  interface QuestionData extends GenericItem {
    answers_count: number
  }

  interface AnswerData extends GenericItem {
    question_id: number 
  }

  /*
  interface QuestionPayload extends GenericItem {
    answers: Array<AnswerData>
    isLoading?: boolean
  }

  type Payload = {
    data: null & [] & QuestionPayload
    isLoading?: boolean
  }
  */

  type QuestionListProps = {
    payload: { data: Array<QuestionData> }
    isLoading?: boolean
  }

  type AnswerListProps = {
    answers: Array<AnswerData>
    isLoading?: boolean
  }

  type AnswerContextT = {
    //value: Array<AnswerData> | null

    answers: Array<AnswerData>
    setAnswers: ( a: Array<AnswerData> ) => void
  }


}