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
import axios from 'axios'
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
// ];

const Questionnaire = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const options = ['business', 'casual', 'date'];

  const handleOptionChange = async (event) => {
    const selected = event.target.value;
    console.log(selected);
    setSelectedOption(selected);
    setHasSelected(true);
    setLoading(true);
    console.log(selected);
    try {
      const response = await axios.get(`http://localhost:3001/api/question/getQuestions`, {
        params: { question_type: selected }
      });
      console.log(response.data);  // Check the full response

        // Correctly assign the data to questionsData
        if (response.data.success) {
            setQuestionsData(response.data.data);  // Correctly set the questions array
        } else {
            console.error('Failed to fetch questions:', response.data.message);
            setQuestionsData([]);
        }
    } catch (error) {
        console.error('Failed to fetch questions:', error);
    } finally {
        setLoading(false);
    }
};
  const handleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto mt-0 p-4">
            {!hasSelected && (
                <div className="bg-slate-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Select a Category
                    </h3>
                    <div className="flex justify-around">
                        {options.map((option) => (
                            <label
                                key={option}
                                className="text-white cursor-pointer flex items-center space-x-2"
                            >
                                <input
                                    type="radio"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                    className="accent-blue-600"
                                />
                                <span className="capitalize">{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {loading && (
                <p className="text-white text-center mt-6 animate-pulse">
                    Loading questions...
                </p>
            )}

            {!loading && questionsData.length > 0 && (
                <div>
                    <h2 className="text-white text-2xl font-bold mb-6">
                        Available Questionnaires
                    </h2>
                    {questionsData.map((item) => (
                    
                        <QuestionnaireItem
                            key={item.unique_id || item._id}
                            que={item}
                            isExpanded={expandedId === item.unique_id || expandedId === item._id}
                            onExpand={() => handleExpand(item.unique_id || item._id)}
                        />
                    ))}
                </div>
            )}
        </div>
    </div>
);
  
};

export default Questionnaire;

// return (
//   <div className="min-h-[90vh] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
//     <div className="max-w-4xl mx-auto mt-0 p-4">

//       <h2 className="text-white text-2xl font-bold mb-6">Available Questionnaires</h2>
//       {questionsData.map((item) => (
//         <QuestionnaireItem
//           key={item.id}
//           que={item}
//           isExpanded={expandedId === item.id}
//           onExpand={() => handleExpand(item.id)}
//         />
//       ))}
//     </div>
//   </div>
// );