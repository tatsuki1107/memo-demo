const functions = require("firebase-functions");

//export const addGenre = functions.https.onRequest(async (req, res)) => {
//  if (req)
//}

const onFinish = async () => {
  try {
    const addG = await db.collection('genre').add({ genre: genre });
    console.log('add genre!!', addG.id)
  } catch (e) {
    console.error('Error adding document:', e)
  }
}
