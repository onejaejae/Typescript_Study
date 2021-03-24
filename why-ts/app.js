// api url
const url = "https://jsonplaceholder.typicode.com/users/1";

// dom
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

// user data
let user = {};

/**
 *  @typedef {object} Address
 *  @property {string} street
 *  @property {string} city
 */

/**
 *  @typedef {object} User
 *  @property {string} name
 *  @property {string} email
 *  @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
const fetchUser = () => {
  return axios.get(url);
};

fetchUser().then((res) => res.address.street);

const startApp = () => {
  fetchUser()
    .then(function (response) {
      user = response.data;
      console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
};

startApp();
