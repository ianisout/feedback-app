import { FaTimes, FaEdit } from 'react-icons/fa' // font-awesome
import { useContext } from 'react';
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='#355070'/>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color='#355070'/>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
