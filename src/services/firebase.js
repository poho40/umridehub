import {firebase, FieldValue} from '../lib/firebase';

export async function doesEmailExist(emailAddress){
    const result = await firebase
        .firestore()
        .collection('users')
        .where('emailAddress', '==', emailAddress)
        .get();

        return result.docs.map((user) => user.data().length > 0);

}
