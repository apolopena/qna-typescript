import React from 'react'
import { Link } from 'react-router-dom';

import './styles.css'
import { QuestionData, QuestionListProps } from 'qna-types'
import { QuestionListItem } from '../../components'


const QuestionList = ({ payload, isLoading }: QuestionListProps) => (
  <div className='card'>
    <div className='card-header'>Questions</div>
    <div className='card-body'>
      {
        payload.data.map(( item: QuestionData ) => (
          <React.Fragment key={item.id}>
            <Link to={`/answers/${item.id}`}>
              <QuestionListItem item={item} />
            </Link>
            <hr />
          </React.Fragment>
        ))
      }
      {isLoading ? <p>'Loading data...</p> : null}
    </div>
  </div>
)
export default QuestionList
