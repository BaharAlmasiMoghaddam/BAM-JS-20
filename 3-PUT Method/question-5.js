//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */
const updatedUser = {
  firstName: "Lufy",
  lastName: "monkey. D",
  phoneNumber: "(945) 635-3854",
};

//

const apiEndpoint = "https://mockapi.io/clone/679524c4aad755a134eb51f7";

const updatingUser = async (user) => {
  try {
    const response = await fetch(apiEndpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("User updated:", data);
  } catch (error) {
    console.error("error updating user: ", error);
  }
};
//*To be continue...
