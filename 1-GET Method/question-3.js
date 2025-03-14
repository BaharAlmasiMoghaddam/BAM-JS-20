/*
 Todo 1: 
    Use this site -> "https://jsonplaceholder.typicode.com/users"

 Todo 2: 
    Make a card with user data

 Todo 3: 
    Each card should contain the name and company name

 Todo 4: 
    In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

// const article = document.querySelector("article");

// ! Answer
const article = document.querySelector("article");
const fetchCards = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach((user) => {
      const card = document.createElement("div");
      card.innerText = `User name: ${user.name}\n Company: ${user.company.name}`;
      article.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
fetchCards();
