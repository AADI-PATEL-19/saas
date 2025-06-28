import React, { useState, useEffect } from 'react';
import ModalWrapper from './ModalWrapper';

export default function FAQModal({ onClose, onAddFAQ, onEditFAQ, faqToEdit }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (faqToEdit) {
      setQuestion(faqToEdit.question || '');
      setAnswer(faqToEdit.answer || '');
    } else {
      setQuestion('');
      setAnswer('');
    }
  }, [faqToEdit]);

  const handleSubmit = () => {
    const faqData = { question, answer };
    if (faqToEdit && onEditFAQ) {
      onEditFAQ(faqData);
    } else {
      onAddFAQ(faqData);
    }
    onClose(); // Close the modal after action
  };

  return (
    <ModalWrapper title={faqToEdit ? 'Edit FAQ' : 'Add FAQ'} onClose={onClose}>
      <label>Question</label>
      <input
        type="text"
        maxLength="80"
        placeholder="Type your question here"
        style={styles.input}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <label>Answer</label>
      <textarea
        maxLength="300"
        placeholder="Type your answer here"
        style={styles.textarea}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button style={styles.button} onClick={handleSubmit}>
        {faqToEdit ? 'Update FAQ' : 'Add FAQ'}
      </button>
    </ModalWrapper>
  );
}

const styles = {
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '95%',
    marginBottom: '10px',
  },
  textarea: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '95%',
    minHeight: '80px',
    marginBottom: '10px',
  },
  button: {
    background: 'black',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '6px',
    border: 'none',
    marginTop: '10px',
    cursor: 'pointer',
  },
};
