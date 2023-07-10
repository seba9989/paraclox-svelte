import { writable } from 'svelte/store';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';
import { gameService } from './gameService';

export const playerStore = writable(null);

export const setPlayerStore = async () => {
	const docRef = doc(db, 'Characters', 'DFcJZ2sj33FggtXRTDeH');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log('Document data:', docSnap.data());
		gameService.send('SELECT_CHARACTER');
	} else {
		// docSnap.data() will be undefined in this case
		console.log('No such document!');
	}
};
