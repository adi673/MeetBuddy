
// import React, { useState } from 'react';
// import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/card';

// const AuthForms = () => {
//   const [isLogin, setIsLogin] = useState(false);
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4">
//     {/* <div className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-950 flex items-center justify-center p-4"> */}
//       <Card className="w-full max-w-md bg-navy-800/30 backdrop-blur border-navy-700">
//         <CardHeader>
//           <CardTitle className="text-4xl font-bold text-white">
//             {isLogin ? 'Welcome Back' : 'Welcome to Business Survey'}
//           </CardTitle>
//           <p className="text-gray-400">
//             {isLogin ? 'Sign in to continue' : 'Complete your registration to continue'}
//           </p>
        
//         </CardHeader>
//         <CardContent>
//           <form className="space-y-4">
//             {!isLogin && (
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="block text-sm text-gray-400 mb-1">First name</label>
//                   <input
//                     type="text"
//                     placeholder="Enter first name"
//                     // className="w-full p-2 rounded bg-navy-700/50 border border-navy-600 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block text-sm text-gray-400 mb-1">Last name</label>
//                   <input
//                     type="text"
//                     placeholder="Enter last name"
//                     // className="w-full p-2 rounded bg-navy-700/50 border border-navy-600 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
//                   />
//                 </div>
//               </div>
//             )}
            
//             <div className="space-y-2">
//               <label className="block text-sm text-gray-400 mb-1">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter email address"
//                 className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
//               />
//             </div>
            
//             <div className="space-y-2">
//               <label className="block text-sm text-gray-400 mb-1">Password</label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
//               />
//             </div>
            
//             {!isLogin && (
//               <div className="space-y-2">
//                 <label className="block text-sm text-gray-400 mb-1">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
//                 />
//               </div>
//             )}
             
//             <button 
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors space-y-2"
//             >
//               {isLogin ? 'Sign in' : 'Sign up'} →
//             </button>
            
//             <div className="text-center text-sm text-gray-400 space-y-2">
//               <p className="mt-2">
//                 {isLogin ? "Don't have an account? " : "Already have an account? "}
//                 <button
//                   type="button"
//                   onClick={() => setIsLogin(!isLogin)}
//                   className="text-blue-400 hover:text-blue-300"
//                 >
//                   {isLogin ? 'Sign up' : 'Sign in'}
//                 </button>
//               </p>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     {/* </div> */}
//     </div>
//   );
// };

// export default AuthForms;


// login testing code below
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login (replace with real authentication)
    if (username === 'admin' && password === 'password') {
      login('fak');  // Storing a fake token
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
