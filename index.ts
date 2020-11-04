const isBreadAvailable = () => {
    return true;
}

const isEggAvailable = () => {
    return false;
}

const bringBread = () => {
    return new Promise((resolve, reject) => {
        if (isBreadAvailable()) {
            resolve('here is your bread');
        } else if (isEggAvailable()) {
            resolve('Here is your egg');
        } else {
            reject('Bread and egg both are unavailable');
        }
    })
}

// Using .then , .catch

// bringBread().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err, '-----error hai')
// });

// Using async await
// const final = async () => {
//     const myData = await bringBread();
//     console.log('called after await line executed successfully', myData);
//     return myData;
// };

// using try and catch 
const final = async () => {
    try {
        const myData = await bringBread();
        console.log(myData, 'called after bring bread');
        return myData;
    }
    catch (e) {
        return Promise.reject(e);
    }
};

final().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});