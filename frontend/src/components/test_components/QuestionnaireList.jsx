// import React from 'react';
// import QuestionnaireItem from './QuestionnaireItem';

// const questionsData = [
//   {
//     id: 'q1',
//     title: 'Personal Information',
//     question: 'What is your name?',
//     answerType: 'text',
//     imageSrc: '/api/placeholder/48/48',
//   },
//   {
//     id: 'q2',
//     title: 'Age Information',
//     question: 'How old are you?',
//     answerType: 'number',
//     imageSrc: '/api/placeholder/48/48',
//   },
//   {
//     id: 'q3',
//     title: 'About Yourself',
//     question: 'Tell us about yourself',
//     answerType: 'textarea',
//     imageSrc: '/api/placeholder/48/48',
//   },
//   {
//     id: 'q4',
//     title: 'Birth Date',
//     question: 'What is your birth date?',
//     answerType: 'date',
//     imageSrc: '/api/placeholder/48/48',
//   },
//   {
//     id: 'q5',
//     title: 'Password Setup',
//     question: 'Create a password',
//     answerType: 'password',
//     imageSrc: '/api/placeholder/48/48',
//   },
//   {
//     id: 'q6',
//     title: 'Favorite Color',
//     question: 'What is your favorite color?',
//     answerType: 'radio',
//     options: ['Red', 'Blue', 'Green', 'Yellow'],
//     imageSrc: '/api/placeholder/48/48',
//   },
//   // Add more questions as needed
// ];



// const Questionnaire = () => {
//   return (
//     <div className="min-h-[90vh] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
//       {/* <NavBar /> */}
//       <div className="max-w-4xl mx-auto mt-0 p-4">
//         <h2 className="text-white text-2xl font-bold mb-6">Available Questionnaires</h2>
//         {/* <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-lg divide-y divide-slate-700/50 backdrop-blur-sm shadow-xl"> */}
//         {questionsData.map((item) => (
//         <QuestionnaireItem key={item.id} que={item} />
//       ))}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default Questionnaire;

// File 1: Questionnaire.js
import React, { useState } from 'react';
import QuestionnaireItem from './QuestionnaireItem';

const questionsData = [
  {
    id: 'q1',
    title: 'Personal Information',
    question: 'What is your name?',
    answerType: 'text',
    imageSrc: '/api/placeholder/48/48',
  },
  {
    id: 'q2',
    title: 'Age Information',
    question: 'How old are you?',
    answerType: 'number',
    imageSrc: '/api/placeholder/48/48',
  },
  {
    id: 'q3',
    title: 'About Yourself',
    question: 'Tell us about yourself',
    answerType: 'textarea',
    imageSrc: '/api/placeholder/48/48',
  },
  {
    id: 'q4',
    title: 'Birth Date',
    question: 'What is your birth date?',
    answerType: 'date',
    imageSrc: '/api/placeholder/48/48',
  },
  {
    id: 'q5',
    title: 'Password Setup',
    question: 'Create a password',
    answerType: 'password',
    imageSrc: '/api/placeholder/48/48',
  },
  {
    id: 'q6',
    title: 'Favorite Color',
    question: 'What is your favorite color?',
    answerType: 'radio',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    imageSrc: '/api/placeholder/48/48',
  },
];

const Questionnaire = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto mt-0 p-4">
        <h2 className="text-white text-2xl font-bold mb-6">Available Questionnaires</h2>
        {questionsData.map((item) => (
          <QuestionnaireItem
            key={item.id}
            que={item}
            isExpanded={expandedId === item.id}
            onExpand={() => handleExpand(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;