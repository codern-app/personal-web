import { useContext } from 'react';
import { FirebaseState } from '../models/firebase.model';
import { FirebaseContext } from './firebase.provider';

export const useFirebase = () => useContext<FirebaseState>(FirebaseContext);
