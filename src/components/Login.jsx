// import React, { useState, useEffect } from 'react';
// import { auth } from '../firebase';
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsSignedIn(true);
//         setUser(user);
//       } else {
//         setIsSignedIn(false);
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const handleSignIn = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleSendPasswordReset = async () => {
//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert('Password reset email sent');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   if (isSignedIn) {
//     return (
//       <div>
//         <h1>Welcome {user.email}</h1>
//         <button onClick={handleSignOut}>Sign out</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleSignIn}>Sign In</button>
//       <button onClick={handleSignUp}>Sign Up</button>
//       <button onClick={handleSendPasswordReset}>Reset Password</button>
//     </div>
//   );
// }

// export default Login;

import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import Homepage from '../pages/Homepage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
        setUser(user);
      } else {
        setIsSignedIn(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSendPasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent');
    } catch (error) {
      alert(error.message);
    }
  };

  if (isSignedIn) {
    return (
      <Homepage />
    );
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSendPasswordReset}>Reset Password</button>
    </div>
  );
}

export default Login;
