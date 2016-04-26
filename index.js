'use strict';

function templatePolyfill() {
  if ('content' in document.createElement('template')) {
    return false;
  }

  var qPlates = document.getElementsByTagName('template'),
    plateLen = qPlates.length,
    elPlate,
    qContent,
    docContent;

  for (var x = 0; x < plateLen; ++x) {
    elPlate = qPlates[x];
    qContent = elPlate.childNodes;
    contentLen = qContent.length;
    docContent = document.createDocumentFragment();

    while (qContent[0]) {
      docContent.appendChild(qContent[0]);
    }

    elPlate.content = docContent;
  }
}

module.exports = templatePolyfill;
