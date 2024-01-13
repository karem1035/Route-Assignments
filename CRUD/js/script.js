const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productCategory = document.getElementById('productCategory');
const productSale = document.getElementById('productSale');
const productDescription = document.getElementById('productDescription');
const searchInput = document.getElementById('searchInput');
const data = document.getElementById('data');

const updateButton = document.getElementById('update');
const addButton = document.getElementById('add');
// Validation Variables
const nameAlert = document.getElementById('nameAlert');
const priceAlert = document.getElementById('priceAlert');

let editedButton = null;
const priceRegex = /^[1-9][0-9]{1,4}$/;
const nameRegex = /^[a-zA-Z]{2,10}(\s[a-zA-Z]{1,5})?$/;

const productsArray = JSON.parse(localStorage.getItem('DataList')) || [];
// Diplaying the local storage of the program at first launch
displayData();

/**
 * addProduct: add prodcut obj to the productsArry
 */
function addProduct() {
  if (
    !validation(nameRegex, productName, nameAlert) ||
    !validation(priceRegex, productPrice, priceAlert)
  ) {
    return;
  }
  // procutData Typed in the inputs
  const productData = {
    productNameValue: productName.value,
    productPriceValue: productPrice.value,
    productCategoryValue: productCategory.value,
    productSaleValue: productSale.checked,
    productDescriptionValue: productDescription.value,
  };
  productsArray.push(productData);
  localStorage.setItem('DataList', JSON.stringify(productsArray));

  displayData();
  clearInput();
}

/**
 * clears the input typed in the input tags
 */
function clearInput() {
  productName.value = '';
  productPrice.value = '';
  productCategory.value = 'tv';
  productSale.checked = false;
  productDescription.value = '';

  productName.classList.remove('is-invalid', 'is-valid');
  nameAlert.classList.add('d-none');
  priceAlert.classList.add('d-none');
  productPrice.classList.remove('is-invalid', 'is-valid');

  updateButton.classList.add('d-none');
  addButton.classList.remove('d-none');
}

/**
 * Displays the data from the productsArray in an HTML table.
 * Clears the existing HTML content before populating the table with product information.
 */
function displayData() {
  // Clearing html content to start over
  data.innerHTML = '';

  for (let i = 0; i < productsArray.length; i++) {
    // Adding table rows for each productArray item
    data.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${productsArray[i].productNameValue}</td>
            <td>${productsArray[i].productPriceValue}</td>
            <td>${productsArray[i].productCategoryValue}</td>
            <td>${productsArray[i].productSaleValue}</td>
            <td>${productsArray[i].productDescriptionValue}</td>
            <td>
              <button class="btn btn-danger" onclick="deleteItem(${i})">
                Delete
              </button>
            </td>
            <td><button class="btn btn-warning" onclick="edit(${i})">Update</button></td>
          </tr>`;
  }
}

/**
 * deleteItem: deletes a <tr> tag when button clicked
 * inedx - the index of the button clicked
 */
function deleteItem(index) {
  // splicing the index from the array
  productsArray.splice(index, 1);
  // adding the new array to the local storage
  localStorage.setItem('DataList', JSON.stringify(productsArray));
  // Displaying the new array
  displayData();
}

/**
 * looks for the search input in the td.
 * diplays the only matched rows with background effect
 */
function search() {
  // lower case the saerch input value for easier comparison
  const searVal = searchInput.value.toLowerCase();
  // Empty the inner html for displaying only what matches
  data.innerHTML = '';
  // looping through the productsArray
  for (let i = 0; i < productsArray.length; i++) {
    // Checking if the any of the obj values includes the search val
    if (
      productsArray[i].productNameValue.toLowerCase().includes(searVal) ||
      productsArray[i].productPriceValue.toLowerCase().includes(searVal) ||
      productsArray[i].productCategoryValue.toLowerCase().includes(searVal) ||
      productsArray[i].productDescriptionValue.toLowerCase().includes(searVal)
    ) {
      // adding the to innerHTML the matches obj with bg effect to the search Value
      data.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${productsArray[i].productNameValue
              .toLowerCase()
              .replace(
                searVal,
                `<span style="color:#FFF; background-color:#0096FF;">${searVal}</span>`
              )}</td>
            <td>${productsArray[i].productPriceValue
              .toLowerCase()
              .replace(
                searVal,
                `<span style="color:#FFF; background-color:#0096FF;">${searVal}</span>`
              )}</td>
            <td>${productsArray[i].productCategoryValue
              .toLowerCase()
              .replace(
                searVal,
                `<span style="color:#FFF; background-color:#0096FF;">${searVal}</span>`
              )}</td>
            <td>${productsArray[i].productSaleValue}</td>
            <td>${productsArray[i].productDescriptionValue
              .toLowerCase()
              .replace(
                searVal,
                `<span style="color:#FFF; background-color:#0096FF;">${searVal}</span>`
              )}</td>
            <td>
              <button class="btn btn-danger" onclick="deleteItem(${i})">
                Delete
              </button>
            </td>
            <td><button class="btn btn-warning">Update</button></td>
          </tr>`;
    }
  }
}

/**
 * Adds an event listener to the searchInput element that triggers on the 'blur' event.
 * Clears the search input value and triggers the search function.
 *
 * @listens searchInput~blur
 */
searchInput.addEventListener('blur', function () {
  searchInput.value = '';
  // Displaying with the new search value
  search();
});

// Validation

/**
 * Adds an event listener to the productName input element that triggers on the 'change' event.
 * Performs validation on the productName value using the specified regular expression and displays alerts accordingly.
 *
 * @listens productName~change
 */
productName.addEventListener('change', function () {
  // Validation for productName
  validation(nameRegex, productName, nameAlert);
});

/**
 * Adds an event listener to the productPrice input element that triggers on the 'change' event.
 * Performs validation on the productPrice value using the specified regular expression and displays alerts accordingly.
 *
 * @listens productPrice~change
 */
productPrice.addEventListener('change', function () {
  // Validation for productPrice
  validation(priceRegex, productPrice, priceAlert);
});

/**
 * Perform validation using a regular expression on the value of an HTML element.
 *
 * @param {RegExp} regex - Regular expression for validation.
 * @param {HTMLElement} element - HTML element to validate.
 * @param {HTMLElement} alert - Element to display validation alert.
 * @returns {boolean} - Returns true if the validation passes, false otherwise.
 */
function validation(regex, element, alert) {
  if (regex.test(element.value)) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    alert.classList.add('d-none');
    return true;
  } else {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    alert.classList.remove('d-none');
    return false;
  }
}

/**
 * Prepares the input fields for editing a product at the specified index.
 * Updates the UI to show the "Update" button and hide the "Add" button.
 *
 * @param {number} index - The index of the product in the productsArray to be edited.
 */
function edit(index) {
  // Clears the input tags
  clearInput();
  // Swap buttons Add > Update
  updateButton.classList.remove('d-none');
  addButton.classList.add('d-none');

  // Global Varibale stores the index of the edited item
  editedButton = index;
  const product = productsArray[index];
  // Populate input fields with the values from the product data
  productName.value = product.productNameValue;
  productPrice.value = product.productPriceValue;
  productCategory.value = product.productCategoryValue;
  productSale.checked = product.productSaleValue;
  productDescription.value = product.productDescriptionValue;
}

/**
 * Updates the product data at the specified index with values from the input fields.
 * Saves the updated data to localStorage, displays the updated data, and clears the input fields.
 *
 * @param {number} index - The index of the product in the productsArray to be updated.
 */
function update(index) {
  // Retrieve the product at the specified index
  const product = productsArray[index];

  // Update product properties with values from input fields
  product.productNameValue = productName.value;
  product.productPriceValue = productPrice.value;
  product.productCategoryValue = productCategory.value;
  product.productSaleValue = productSale.checked;
  product.productDescriptionValue = productDescription.value;

  // Save the updated productsArray to localStorage
  localStorage.setItem('DataList', JSON.stringify(productsArray));

  // Display the updated data
  displayData();

  // Clear the input fields
  clearInput();
}

/**
 * Adds an event listener to the updateButton element that triggers on the 'click' event.
 * Calls the update function with the specified index when the button is clicked.
 *
 * @listens updateButton~click
 */
updateButton.addEventListener('click', function () {
  update(editedButton);
});
