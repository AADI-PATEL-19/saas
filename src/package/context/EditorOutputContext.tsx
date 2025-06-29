// package/context/EditorOutputContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type EditorOutputContextType = {
  html: string;
  setHtml: Dispatch<SetStateAction<string>>;
};

const EditorOutputContext = createContext<EditorOutputContextType>({
  html: '',
  setHtml: () => {},
});

type ProviderProps = {
  children: ReactNode;
};

export const EditorOutputProvider = ({ children }: ProviderProps) => {
  const [html, setHtml] = useState('');
  return (
    <EditorOutputContext.Provider value={{ html, setHtml }}>
      {children}
    </EditorOutputContext.Provider>
  );
};

export const useEditorOutput = () => useContext(EditorOutputContext);
