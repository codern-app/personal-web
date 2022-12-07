import React, { ReactNode, useMemo } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { FirebaseState } from "./firebase.model";

const initialState: FirebaseState = {
  app: undefined,
};

const FirebaseContext = React.createContext<FirebaseState>(initialState);

type Props = {
  children: ReactNode;
};

export const FirebaseProvider: React.FC<Props> = ({ children }) => {
  const app = useMemo(() => initializeApp(firebaseConfig), []);

  return (
    <FirebaseContext.Provider value={{ ...initialState, app }}>
      {children}
    </FirebaseContext.Provider>
  );
};
