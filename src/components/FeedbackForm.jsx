import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  
  const handleTextChange = e => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text, //values from the text and rating states
        rating
      }

      handleAdd(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your cat's mental health?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder='Write a review'
            value={text}
          />
          <Button children="Send" type="submit" isDisabled={btnDisabled}/>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>     
    </Card>
  )
}

export default FeedbackForm
