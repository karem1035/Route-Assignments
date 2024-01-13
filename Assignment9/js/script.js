const bookmarkName = document.getElementById('name');
const bookmarkURL = document.getElementById('url');
const tbody = document.getElementById('tbody');
const addbtn = document.getElementById('addbtn');

const bookmarks = JSON.parse(localStorage.getItem('data')) || [];

const nameRegex = /^[a-zA-z]{3,20}([0-9]{0,4})(\s[0-9]{0,9}[a-zA-Z0-9]{1,9})?$/;
const urlRegex =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
display();

function addBookmark() {
  if (!valid(nameRegex, bookmarkName) || !valid(urlRegex, bookmarkURL)) {
    return;
  }
  const bmark = {
    bname: bookmarkName.value,
    url: bookmarkURL.value,
  };

  console.log(urlRegex.test(bmark.url));

  bookmarks.push(bmark);
  localStorage.setItem('data', JSON.stringify(bookmarks));
  display();
  clear();
}

function display() {
  tbody.innerHTML = '';

  for (let i = 0; i < bookmarks.length; i++) {
    tbody.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${bookmarks[i].bname}</td>
    
<td><a class="btn btn-primary" href="${
      bookmarks[i].url
    }" target="_blank"><i class="bi bi-eye me-2"></i>Visit URL</a></td>

    <td><button class="btn btn-danger" onclick="deleteBookmark(${i})"><i class="bi bi-trash3 me-2"></i>Delete URL</button></td>
    </tr>`;
  }
}

bookmarkName.addEventListener('change', function () {
  valid(nameRegex, bookmarkName);
});

bookmarkURL.addEventListener('change', function () {
  valid(urlRegex, bookmarkURL);
});

/**
 * clears the input values
 */
function clear() {
  bookmarkName.value = '';
  bookmarkURL.value = '';
  bookmarkURL.classList.remove('is-valid');
  bookmarkURL.classList.remove('is-invalid');
  bookmarkName.classList.remove('is-invalid');
  bookmarkName.classList.remove('is-valid');
}

function valid(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    return true;
  } else {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    return false;
  }
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(bookmarks));
  display();
}
