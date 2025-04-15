import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// import { getStorage } from "firebase-admin/storage";
import "server-only";

const decodedKey = Buffer.from(
  process.env.FIREBASE_PRIVATE_KEY!,
  "base64"
).toString("utf-8");

export const firebaseCert = cert({
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: decodedKey,
});

if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,  // Descomente se necessário
  });
}

export const db = getFirestore();
// export const storage = getStorage().bucket();  // Descomente se necessário
