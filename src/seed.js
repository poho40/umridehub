/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'e5EFaUNKGGQe570f757RplG5FQm2',
        username: 'rohitsar',
        fullName: 'Rohit Saripalle',
        emailAddress: 'rohitpark08@gmail.com',
        dateCreated: Date.now()
      },
      {
        userId: 'Ed1T2BAkAjSkSGi5RU4CKPHrkDs1',
        username: 'rjutur',
        fullName: 'Ritij Jutur',
        emailAddress: 'ritijcode@gmail.com',
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'anishrdy',
        fullName: 'Anish Reddy',
        emailAddress: 'anishrdy@umich.edu',
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'valag',
        fullName: 'Venkatesh Alagappan',
        emailAddress: 'valag@umich.edu',
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }