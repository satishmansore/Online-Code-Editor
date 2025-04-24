import React, { createContext, useState } from 'react';

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');

  return (
    <CodeContext.Provider value={{ language, setLanguage, code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};
