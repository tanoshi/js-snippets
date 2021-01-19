function getCookieEU(cookieName) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");

  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
    and compare it with the given string */
    if (cookieName == cookiePair[0].trim()) {
      // Decode the cookie value and return
      document.querySelector('[data-kick="euconsent"]').innerHTML = decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
}


var cookieEuV2 = document.cookie.match('euconsent-v2');

getCookieEU(cookieEuV2);
