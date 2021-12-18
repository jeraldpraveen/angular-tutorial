function typeAssertion() {
  let message;
  message = "abc";
  const endsWithC = (<String>message).endsWith("c");
  const alternativeWay = (message as string).endsWith("c");

  console.log(endsWithC, alternativeWay);
}

typeAssertion();

// Execute In Terminal --->  tsc --target ES6 <FILENAME>
