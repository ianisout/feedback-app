import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Terrible. I'm afraid he's Hitler's reincarnation",
      rating: 1,
    },
    {
      id: 2,
      text: "She's in a good mood today, so, a hard 4. Most days she doesn't go past 2.",
      rating: 4,
    },
    {
      id: 3,
      text: "Most amazing cat in the world! (It's looking at me menacingly, pls send help)",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback? Are you the cat reading this?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback, // not shorthanded for clearance
        feedbackEdit, // actual state of feedbackEdit that holds item and boolean
        addFeedback,
        deleteFeedback,
        editFeedback, // function that runs when edit button is clicked
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
