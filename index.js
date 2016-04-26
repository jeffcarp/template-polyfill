'use strict';

(function templatePolyfill(d) {
  if ('content' in d.createElement('template')) {
    return false;
  }

  var qPlates = d.getElementsByTagName('template'),
    plateLen = qPlates.length,
    elPlate,
    qContent,
    docContent;

  for (var x = 0; x < plateLen; ++x) {
    elPlate = qPlates[x];
    qContent = elPlate.childNodes;
    contentLen = qContent.length;
    docContent = d.createDocumentFragment();

    while (qContent[0]) {
      docContent.appendChild(qContent[0]);
    }

    elPlate.content = docContent;
  }
})(document);

module.exports = templatePolyfill;
