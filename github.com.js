(function(document) {

  setTimeout(function() {
    var container = document.querySelector('.pr-toolbar');

    var hideShowFiles = function(file_extension, hide) {
      var file_links = document.querySelectorAll('.file-info a')
      for (var i = 0; i < file_links.length; i++) {
        var link = file_links[i];
        var extension_match = link.text.match(/\.(\w+)$/);
        if (extension_match && extension_match[1] == file_extension) {
          var el = link;
          while ((el = el.parentElement) && !el.classList.contains('js-file'));
          el.style.display = (hide ? 'none' : null);
        }
      }
    }

    var createCheckbox = function(file_extension) {
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.value = 1;
      checkbox.onchange = function(event) {
        hideShowFiles(file_extension, this.checked);
      }

      var label = document.createElement('label')
      label.appendChild(document.createTextNode('Hide .' + file_extension + ' files'));

      container.appendChild(checkbox);
      container.appendChild(label);
    }

    var file_links = document.querySelectorAll('.file-info a')
    var extensions = []
    for (var i = 0; i < file_links.length; i++) {
      var link = file_links[i];
      var extension_match = link.text.match(/\.(\w+)$/);
      if (extension_match && extensions.indexOf(extension_match[1]) == -1) {
        extensions.push(extension_match[1])
        createCheckbox(extension_match[1]);
      }
    }
  }, 3000);
})(document);
