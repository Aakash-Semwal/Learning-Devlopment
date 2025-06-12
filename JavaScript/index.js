let waadaa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Waadaa1");
    }, 3000);
    resolve(true);
})

let output = waadaa1.then(() => {
    let waadaa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Waadaa2");
        }, 2000);
        resolve("waadaa2 resolved!");
    });
    return waadaa2;
});

output.then((value) => {
    console.log(value);
})