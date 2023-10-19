import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { orderBy, query, collection, doc, getDoc, getDocs } from "firebase/firestore";

const sessionStorage = window.sessionStorage;
export let db;

export function initFirebase() {
	const firebaseApp = initializeApp({
		apiKey: "AIzaSyDq9wo9Jdn4PDhbHPVg0btkYUVVwsCatdU",
	    authDomain: "portfolio-4722e.firebaseapp.com",
	    databaseURL: "https://portfolio-4722e.firebaseio.com",
	    projectId: "portfolio-4722e",
	    storageBucket: "portfolio-4722e.appspot.com",
	    messagingSenderId: "344412709404",
	    appId: "1:344412709404:web:efc32e40ea3ab2ccd375d9"
	});

	db = getFirestore();
}

export async function getDocument(collectionName, docID) {
	const refID = `${collectionName}-${docID}`;
 	const cache = sessionStorage.getItem(refID);

	if (cache) {
		return new Promise((resolve, reject) => {
			resolve(JSON.parse(cache));
		});
	} else {
		const docRef = doc(db, collectionName, docID);
		const docSnap = await getDoc(docRef);
		const data = docSnap.data();

		sessionStorage.setItem(refID, JSON.stringify(data));

		return data;
	}
}


export async function getPublications() {
	const collectionName = "publications";

	const refID = `${collectionName}`;
 	const cache = sessionStorage.getItem(refID);

	if (cache) {
		return new Promise((resolve, reject) => {
			resolve(JSON.parse(cache));
		});
	} else {
		const publicationsRef = collection(db, collectionName);
		const q = query(publicationsRef, orderBy("rank", "desc"));
		const querySnapshot = await getDocs(q);
	
		let data = {};

		querySnapshot.forEach((doc) => {
			data[doc.id] = doc.data();
		});

		sessionStorage.setItem(refID, JSON.stringify(data));

		return data;
	}
}

export async function getExperiences() {
	const collectionName = "experience_new";

	const refID = `${collectionName}`;
 	const cache = sessionStorage.getItem(refID);

	if (cache) {
		return new Promise((resolve, reject) => {
			resolve(JSON.parse(cache));
		});
	} else {
		const publicationsRef = collection(db, collectionName);
		const q = query(publicationsRef, orderBy("rank", "asc"));
		const querySnapshot = await getDocs(q);
	
		let data = {};

		querySnapshot.forEach((doc) => {
			data[doc.id] = doc.data();
		});

		sessionStorage.setItem(refID, JSON.stringify(data));

		return data;
	}	
}

export async function getEducation() {
	const collectionName = "education"

	const refID = `${collectionName}`;
 	// const cache = sessionStorage.getItem(refID);
	const cache = false;

	if (cache) {
		return new Promise((resolve, reject) => {
			resolve(JSON.parse(cache));
		});
	} else {
		const publicationsRef = collection(db, collectionName);
		const q = query(publicationsRef, orderBy("rank", "asc"));
		const querySnapshot = await getDocs(q);
	
		let data = {};

		querySnapshot.forEach((doc) => {
			data[doc.id] = doc.data();
		});

		sessionStorage.setItem(refID, JSON.stringify(data));

		return data;
	}	
}