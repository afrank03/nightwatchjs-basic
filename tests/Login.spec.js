module.exports = {
  "Bot to like photos on Instagram": (browser) => {
    const url = "https://www.instagram.com/";
    const login = "your_login";
    const password = "your_password!";
    const loginPopupCancel =
      "body > div.RnEpo.Yx5HN > div > div > div.mt3GC > button.aOOlW.HoLwm";
    const searchBarPlaceholder = "span.coreSpriteSearchIcon";
    const searchBar = 'input[type="text"]';
    const firstSearchResult = "div.fuqBx > a";
    const mostRecentPhoto = "h2:nth-child(2) + div div.eLAPa > div._9AhH0";
    const likeButton = 'button[type="button"] > svg[aria-label="Like"]';
    const commentField = 'form[method="post"] > textarea';
    const submitComment =
      'textarea[aria-label="Add a comment…"] + button[type="submit"]';
    const nextPhotoButton = "a.coreSpriteRightPaginationArrow";

    // =========================== TAGs ========================================
    // const HASH_TAG = "#codinglife";
    // const HASH_TAG = "#codelife";
    // const HASH_TAG = "#php";
    // const HASH_TAG = "#javascript";
    // const HASH_TAG = "#programming";
    // const HASH_TAG = "#webdevelopment";
    // const HASH_TAG = "#minimalism";
    // const HASH_TAG = "#macbookpro";
    // const HASH_TAG = "#ipadpro";
    // const HASH_TAG = "#vscode";
    // const HASH_TAG = "#design";
    // const HASH_TAG = "#writter";
    // =========================================================================
    const HOW_MANY_PHOTOS = 100;
    // =========================================================================

    browser
      .url(url)
      .setValue('input[name="username"]', login)
      .setValue('input[name="password"]', password)
      .pause(1000)
      .keys(browser.Keys.ENTER)
      .waitForElementVisible(loginPopupCancel)
      .click(loginPopupCancel)
      .pause(637)
      .click(searchBarPlaceholder)
      .waitForElementVisible(searchBar)
      .setValue(searchBar, HASH_TAG)
      .waitForElementVisible(firstSearchResult, 10000)
      .click(firstSearchResult)
      .moveToElement(mostRecentPhoto, 5, 5, () => {
        browser.click(".qn-0x");
        for (let i = 0; i < HOW_MANY_PHOTOS; i++) {
          browser
            .pause(950)
            .click(likeButton)
            .pause(950)
            .click(nextPhotoButton);
        }
      })
      .end();
  },
};
