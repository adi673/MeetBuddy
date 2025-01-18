// // File 2: QuestionnaireItem.js
// import React, { useState } from 'react';
// import { SquareChevronDown, SquareChevronUp, Loader2 } from 'lucide-react';
// import { Button } from './Button';
// import { Textarea } from './Textarea';
// import { Input } from './Input';
// import { RadioGroup, RadioGroupItem } from './RadioGroup';
// import { Label } from './Label';

// const QuestionnaireItem = ({ que, isExpanded, onExpand }) => {
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleAnswerChange = (questionId, value) => {
//     setUserAnswers((prev) => ({ ...prev, [questionId]: value }));
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log('Submitted answers:', userAnswers);
//     setIsLoading(false);
//     setIsSubmitted(true);
//   };

//   const renderAnswerInput = (question) => {
//     // const { id, answer_type, options } = question;
//     const { unique_id, answer_type, options } = question;
//     const id=unique_id;
//     const value = userAnswers[id] || '';
    
//     switch (answer_type) {
//       case 'text':
//       case 'number':
//       case 'date':
//       case 'password':
//         return (
//           <Input
//             type={answer_type}
//             value={value}
//             onChange={(e) => handleAnswerChange(id, e.target.value)}
//             className="w-full bg-slate-700 text-white border-gray-600"
//           />
//         );
//       case 'textarea':
//         return (
//           <Textarea
//             value={value}
//             onChange={(e) => handleAnswerChange(id, e.target.value)}
//             className="w-full bg-slate-700 text-white border-gray-600"
//           />
//         );
//       case 'radio':
//         return (
//           <RadioGroup
//             value={value}
//             onValueChange={(value) => handleAnswerChange(id, value)}
//             className="flex flex-col space-y-2"
//           >
//             {options.map((option, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <RadioGroupItem value={option} id={`${id}-option-${index}`} />
//                 <Label htmlFor={`${id}-option-${index}`} className="text-white">
//                   {option}
//                 </Label>
//               </div>
//             ))}
//           </RadioGroup>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="border border-gray-700 rounded-lg overflow-hidden my-10 bg-gradient-to-b from-slate-800/50 to-slate-900/50 divide-y divide-slate-700/50 backdrop-blur-sm shadow-xl">
//       <div className="flex items-center justify-between p-4 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 transition-all duration-300" onClick={onExpand}>
//         <div className="flex items-center space-x-4">
//           <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
//             <img src={que.imageSrc} alt="Questionnaire icon" className="w-full h-full rounded-lg object-cover opacity-80" />
//           </div>
//           <h3 className="text-white text-lg font-medium">{que.title}</h3>
//         </div>
//         <Button variant="outline" size="icon" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
//           {isExpanded ? <SquareChevronUp /> : <SquareChevronDown />}
//         </Button>
//       </div>
//       {isExpanded && (
//         <div className="p-4 bg-slate-800">
//           <p className="text-white mb-2">{que.question}</p>
//           {isSubmitted ? (
//             <p className="text-green-400">Thank you for your submission!</p>
//           ) : (
//             <>
//               {renderAnswerInput(que)}
//               <Button onClick={handleSubmit} disabled={isLoading} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg  mt-4">
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
//                   </>
//                 ) : (
//                   'Submit Answers'
//                 )}
//               </Button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuestionnaireItem;


import React, { useState } from 'react';
import axios from 'axios';
import { SquareChevronDown, SquareChevronUp, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { Textarea } from './Textarea';
import { Input } from './Input';
import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { Label } from './Label';

const QuestionnaireItem = ({ que, isExpanded, onExpand, userId }) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionId, value, questionType) => {
    setUserAnswers((prev) => {
      const existingAnswerIndex = prev.findIndex(
        (answer) => answer.unique_id === questionId
      );

      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prev];
        updatedAnswers[existingAnswerIndex] = {
          ...updatedAnswers[existingAnswerIndex],
          answer: value,
        };
        return updatedAnswers;
      } else {
        return [
          ...prev,
          {
            unique_id: questionId,
            answer: value,
            question_type: questionType,
            user_id: userId,
          },
        ];
      }
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    try {
      const response = await axios.post('/api/submit-answers', { answers: userAnswers });
      
      if (response.status === 200) {
        console.log('Answers submitted successfully:', response.data);
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit answers:', response.data);
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
    
    setIsLoading(false);
  };

  const renderAnswerInput = (question) => {
    const { unique_id, answer_type, options, question_type } = question;
    const value = userAnswers.find((answer) => answer.unique_id === unique_id)?.answer || '';

    switch (answer_type) {
      case 'text':
      case 'number':
      case 'date':
      case 'password':
        return (
          <Input
            type={answer_type}
            value={value}
            onChange={(e) => handleAnswerChange(unique_id, e.target.value, question_type)}
            className="w-full bg-slate-700 text-white border-gray-600"
          />
        );
      case 'textarea':
        return (
          <Textarea
            value={value}
            onChange={(e) => handleAnswerChange(unique_id, e.target.value, question_type)}
            className="w-full bg-slate-700 text-white border-gray-600"
          />
        );
      case 'radio':
        return (
          <RadioGroup
            value={value}
            onValueChange={(value) => handleAnswerChange(unique_id, value, question_type)}
            className="flex flex-col space-y-2"
          >
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${unique_id}-option-${index}`} />
                <Label htmlFor={`${unique_id}-option-${index}`} className="text-white">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden my-10 bg-gradient-to-b from-slate-800/50 to-slate-900/50 divide-y divide-slate-700/50 backdrop-blur-sm shadow-xl">
      <div className="flex items-center justify-between p-4 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 transition-all duration-300" onClick={onExpand}>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
            <img src={que.imageSrc} alt="Questionnaire icon" className="w-full h-full rounded-lg object-cover opacity-80" />
          </div>
          <h3 className="text-white text-lg font-medium">{que.title}</h3>
        </div>
        <Button variant="outline" size="icon" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
          {isExpanded ? <SquareChevronUp /> : <SquareChevronDown />}
        </Button>
      </div>
      {isExpanded && (
        <div className="p-4 bg-slate-800">
          <p className="text-white mb-2">{que.question}</p>
          {isSubmitted ? (
            <p className="text-green-400">Thank you for your submission!</p>
          ) : (
            <>
              {renderAnswerInput(que)}
              {/* <Button onClick={handleSubmit} disabled={isLoading} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg mt-4">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  'Submit Answers'
                )}
              </Button> */}
            </>
          )}
        </div>
      )}
      
    </div>
  );
};

export default QuestionnaireItem;
