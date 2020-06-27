const myPromise = new Promise((resolve, error) => {
    if (false) {
        setTimeout(() => {
            resolve('I have succeedec')
        },  1000);
    }
    else {
        error('I have failed');
    }

});

myPromise.then(value => console.log(" Success Value " + value)).catch(rejectValue => console.log(" Rejected Message" + rejectValue));