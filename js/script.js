/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  var startIndex = (page * 9) -9;
  var endIndex = page * 9;
  var studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";
  for (let i= 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      
     var studentItem = `  
      <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src=${data[i].picture.medium} alt="Profile Picture">
          <h3>${data[i].name.first} ${data[i].name.last}</h3>
          <span class="email">${data[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">${data[i].registered.date}</span>
        </div>
    </li>
    `

      studentList.insertAdjacentHTML("beforeend", studentItem);
         
    }

  }
}

/*
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  var numOfPages = Math.ceil(list.length / 9);
  var linkList = document.querySelector(".link-list")
  linkList.innerHTML = "";
  for (let i = 0; i < numOfPages; i++) {
    var button = `
    <li>
      <button type="button">${i+1}</button>
    </li>
  `
    linkList.insertAdjacentHTML ("beforeend", button);
  }
  document.querySelector("button").className = "active";
  linkList.addEventListener("click", (e) => {
    if(e.target = "button") {
      document.querySelector(".active").className = "";
      e.target.className = "active";
      showPage(list, e.target.textContent);
    }
  });
}
  showPage(data, 1);
  addPagination(data);

