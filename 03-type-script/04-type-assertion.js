function typeAssertion() {
    let message;
    message = "abc";
    const endsWithC = message.endsWith("c");
    const alternativeWay = message.endsWith("c");
    console.log(endsWithC, alternativeWay);
}
typeAssertion();
// Execute In Terminal --->  tsc --target ES6 <FILENAME>
