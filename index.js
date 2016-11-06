const cheerio = require('cheerio')
module.exports = function({ html }) {
  var promise = new Promise(function(resolve, reject) {
    let classNames = new Set();
    let $ = cheerio.load(html);
    $('*[class]').each(function() {
      let cssClass = $(this).attr('class');
      if (cssClass) {
        let cssClassList = cssClass.split(/ +/g);
        cssClassList.forEach(function(cssClassName) {
          classNames.add(cssClassName);
        });
      }
    });
    resolve({ classNames: Array.from(classNames) });
  });
  return promise;
}
