let isVerified = true;
let isLoggedIn = true;
let paymentToken = true;
let isGuest = true;

if (isVerified && isLoggedIn && paymentToken){
    console.log('Greeting message to user')
    console.log('Grant access to paid courses')
} else if (isVerified || isGuest){
    console.log('Is allowed free previews')
} else {
    console.log('Please contact admin')
}
