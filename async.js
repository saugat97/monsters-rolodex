const myPromise = new Promise((resolve, reject) => {
    if(true) {
        setTimeout(() => {
            resolve('I have succeeded!')
        }, 1000); 
    } else {
        reject('I have failed!');
    }
});

myPromise
.then(val => val + "!!!!!!!!!!!")
.then(val => val + "What???")
    .then(user => console.log(user))
    .catch(rejectedValue => console.log(rejectedValue))


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         const firstUser = users[0];
//         console.log(firstUser);
//         return fetch(
//             'https://jsonplaceholder.typicode.com/posts?' + firstUser.id
//         );
//     })
//     .then(response => response.json())
//     .then(val => console.log(val))
//     .catch(err => console.log('Error!!!'))


// const asyncFunction = async () => {
//     try{
//         const userResponse = await fetch(
//             'https://jsonplaceholder.typicode.com/users'
//         );
//         const users = await userResponse.json();
//         const firstUser = await users[0];
//         console.log(firstUser);
//         const postResponse = await fetch(
//             'https://jsonplaceholder.typicode.com/posts?' + firstUser.id
//         )
//         const posts = await postResponse.json();
//         console.log(posts);
//     } catch (err) {
//         console.log('Error!!!')
//     }
// }