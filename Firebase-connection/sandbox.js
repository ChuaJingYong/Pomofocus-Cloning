import './style.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

// async function getData (){
//     const querySnapshot = await getDocs(collection(db, "FocusHours"));
//     querySnapshot.forEach((doc) => {
//         console.log(doc)
//       console.log(`${doc.id} => ${doc.data().Time}`);
//     });
// }

// getData()
function getData(){
    const querySnapshot = await getDocs(collection(db, "FocusHours"));
    querySnapshot.forEach((doc) => {
        console.log(doc)
      console.log(`${doc.id} => ${doc.data().Time}`);
    });
}

getData()


    
