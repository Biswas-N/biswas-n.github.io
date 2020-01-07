const admin = require('./node_modules/firebase-admin');
const serviceAcc = require('./auth.json');
const data = require('./data.json');

const collectionKey = "test";

admin.initializeApp({
    credential: admin.credential.cert(serviceAcc),
    databaseURL: "https://projects-biswas-coffee.firebaseio.com"
});

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};

firestore.settings(settings);

if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
        firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
            console.log("Document " + docKey + " successfully written");
        }).catch((err) => {
            console.error("Error writing document: ", err);
        });
    });
}