import React from 'react';
import './Question.scss';

const Question = ({ question, handleComplete }) => {
    return (
        <ul>
            <li className={question.completed ? 'completed' : 'notCompleted'} >
                <p>{question.question}</p>
                <button onClick={() =>
                    handleComplete(question.id, question.completed)}
                >
                    being helped?
                </button>
            </li>
        </ul>
    );
};

export default Question;
