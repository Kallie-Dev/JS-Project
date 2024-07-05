const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function enterTask() {
  if (inputBox.value === "") {
    alert("Please enter your text");
    // ! Our if statement is saying that if the text value inputted is equal to an empty string, it will send the alert message.
  } else {
    let li = document.createElement("li");
    // * This creates a new 'li' element and stores it in a variable.
    li.innerHTML = inputBox.value;
    // ? With this line, whatever is added to the input box will be added to the li.
    listContainer.appendChild(li);
    // * This line tells the pc where want to store the li. We are choosing to put it in the list container, which is the parent of the 'li''s.
    let span = document.createElement("span");
    // * This lets us create a new 'span' element in the document.
    span.innerHTML = "\u00d7";
    // ? This puts the 'x' icon in the created span element.
    li.appendChild(span);
    // * This places and displays the span next to the 'li'.
  }
  inputBox.value = "";
  //   ? With this line of code, we are saying that after it has gone through the whole function, to clear the input box. It MUST be inside the function for this to work.
  saveData();
  //   ! Calling the saveData() function everytime a new event has occurred.
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // * This returns the tag name of the element that is called and checks if it strictly equal to "li". Using 'e' as the parameter name is industry standard when it is an event. So, if we click on an 'li' it will perform the next task.
      //   ! It is important to note that the tag names MUST be in capital letters in order for them to work.
      e.target.classList.toggle("checked");
      // * This returns the class where the event occurred (the line-through "checked" class in this case) and toggles it on/off.
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      // * If the element clicked on is a span, it will DELETE the parent element - which is the 'li' element in this case.
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  // * This creates a function that will save any data added to the list container to the local storage of the browser, so it won't be deleted when you refresh the page. The 'setItem' adds the key and value to local storage and it is stored in local storage with the name of "data".
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  // * This will give all content from the browser's storage with the name of "data" in the list container.
}
showTask();
