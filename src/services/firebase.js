import {firebase, FieldValue} from '../lib/firebase';

export async function doesEmailExist(emailAddress){
    const result = await firebase
        .firestore()
        .collection('users')
        .where('emailAddress', '==', emailAddress)
        .get();

        return result.docs.map((user) => user.data().length > 0);

}

export async function getUserByUserId(userId){
    const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();

    const user = result.docs.map((item) => ({
         ...item.data(),
        docId: item.id
    }));
    return user;
}

export async function recentPosts(userId){
    const result = await firebase.firestore().collection('photos').where('userId', '!=', userId).get();

    const otherUserPosts = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));

    const postsWithUserDetails = await Promise.all(
        otherUserPosts.map(async (photo) => {
            const user = await getUserByUserId(photo.userId);
            const {emailAddress} = user[0];
            return {emailAddress, ...photo};
        })
    )

    return postsWithUserDetails;
}
export async function myRecentPosts(userId){
    const result = await firebase.firestore().collection('photos').where('userId', '==', userId).get();
    const myPosts = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));
    const posts = await Promise.all(
        myPosts.map(async (photo) => {
            const user = await getUserByUserId(photo.userId);
            const {emailAddress} = user[0];
            return {emailAddress, ...photo};
        })
    )

    return posts;
}

export async function getDestination(destinations){
    const result = await firebase.firestore().collection('photos').where('destination', 'in' , destinations).get();
    const myPosts = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));
    const posts = await Promise.all(
        myPosts.map(async (photo) => {
            const user = await getUserByUserId(photo.userId);
            const {emailAddress} = user[0];
            return {emailAddress, ...photo};
        })
    )

    return posts;
}

export async function filterTimes(userId){
    const result = await firebase.firestore().collection('photos').where('userId', '==', userId).get();
    const myPosts = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));
    const posts = await Promise.all(
        myPosts.map(async (photo) => {
            const user = await getUserByUserId(photo.userId);
            const {emailAddress} = user[0];
            return {emailAddress, ...photo};
        })
    )

    return posts;
}