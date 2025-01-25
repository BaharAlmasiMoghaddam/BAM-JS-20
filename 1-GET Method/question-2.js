/*
 todo1: 
    use this site -> "https://jsonplaceholder.typicode.com/users"

 todo2: 
    write an async function and fetch the data

 todo3: 
    using try-catch block to handle the error
*/

// ! Answer

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error fetching data: ", error);
  }
};
fetchData();
