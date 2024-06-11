// import React, { createContext, useState, ReactNode, useContext } from 'react';

// interface AuthContextType {
//   token: boolean;
//   setToken: (token: boolean) => void;
// }

// const AuthContext = createContext<AuthContextType>({
//   token: false,
//   setToken: () => {},
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState(false);

//   return (
//     <AuthContext.Provider value={{ token, setToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);







import { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  token: boolean;
  setToken: (token: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: false,
  setToken: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState(false);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
