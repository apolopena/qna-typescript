declare module 'qna-types' {

  type QuestionData = {
    id: number
    description: string
    created_at: string
    updated_at: string
    answers_count: number
  }

  type QuestionListProps = {
    payload: { data: Array<QuestionData> }
    isLoading?: boolean
  }

}