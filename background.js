
xhr = new XMLHttpRequest();
xhr.open("GET", "https://github.com/cg-cnu", true);

xhr.onload = function (e) {
    if (xhr.status === 200) {
        // console.log(xhr.responseText);
        parser = new DOMParser();
        doc = parser.parseFromString(xhr.responseText, "text/html");
        daysSelector = doc.getElementsByClassName('day');
        day = Array.from(daysSelector).reverse()[0];
        contr = day.attributes['data-count'].value;
        chrome.browserAction.setBadgeText({ text: contr });
    }
}
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};
xhr.send(null);