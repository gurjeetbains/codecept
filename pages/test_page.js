const { I } = inject();

module.exports = {

  // insert your locators and methods here
  //Locators
  fields: {
    email: '#user[login]',
    password: '#user_basic_password'
  },
  submitButton: {css: '#new_user_basic input[type=submit]'}
}
