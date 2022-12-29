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

    const otherUserPosts = result.docs.map((post) => ({
        ...post.data(),
        docId: post.id
    }));

    const postsWithUserDetails = await Promise.all(
        otherUserPosts.map(async (post) => {
            const user = await getUserByUserId(post);
            const {emailAddress} = user[0];
            return {emailAddress, ...post};
        })
    )

    return postsWithUserDetails;
}
