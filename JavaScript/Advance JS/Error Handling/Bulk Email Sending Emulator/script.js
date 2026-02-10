let users = ["user@user.com", "male@male.com", "female@female.com"];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);
    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability <= 5) {
        resolve("Email Sent Successfully!");
      } else {
        reject("Email Not Sent!!!");
      }
    }, time);
  });
}

sendEmail("user@user.com")
  .then((data) => console.log(data))
  .then((err) => console.error(err));
