// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];

/** WRITE YOUR CODE BELOW DOWN */

const apiEndPoint = "https://67c1c76761d8935867e43d92.mockapi.io/api/b1/";
const addUsers = async (user) => {
  try {
    const response = await fetch(apiEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log("user added: ", data);
  } catch (error) {
    console.error("Error adding user: ", error);
  }
};

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

const form = document.querySelector("form");

form.addEventListener("submit", async (events) => {
  events.preventDefault();

  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;
  const phoneNumber = document.getElementById("pNumber").value;

  //

  const newUser = {
    firstName,
    lastName,
    phoneNumber,
  };

  //

  try {
    const response = await fetch(apiEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log("new user signed up: ", data);
  } catch (error) {
    console.error("error signing up user: ", error);
  }
});
//*To be continue...
