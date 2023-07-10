import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCRNJIGpXpcEnLvXErYLwRlhsSx7RJBztQ',
	authDomain: 'paraclox-21043.firebaseapp.com',
	projectId: 'paraclox-21043',
	storageBucket: 'paraclox-21043.appspot.com',
	messagingSenderId: '41476548906',
	appId: '1:41476548906:web:670cbebe8a0f3fb1195653'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
