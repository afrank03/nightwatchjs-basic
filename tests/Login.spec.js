module.exports = {
  "User can successfully login with correct credentials": browser => {
    browser
      .url("http://localhost:8080")
      .setValue('input[name="username"]', "fooTest")
      .setValue('input[name="password"]', "fooTest123")
      .click('input[name="submit-login"]')
      // Check for quick welcome message before profile page is shown
      .assert.containsText("body", "You have successfully logged in")
      // Check if user details are present after login
      .waitForElementPresent(".c-user-profile")
      .assert.containsText(".c-user-profile", "This is user profile page.")
      .assert.containsText(".c-user-profile__welcome-msg", "Foo Bob Johnson")
      .end();
  },

  "There is warning message if user entered wrong details": browser => {
    browser
      .url("http://localhost:8080")
      .setValue('input[name="username"]', "wrongName")
      .setValue('input[name="password"]', "wrongPassword")
      .click('input[name="submit-login"]')
      .assert.containsText(
        ".c-login__error",
        "You have entered invalid login details."
      )
      .end();
  }
};
