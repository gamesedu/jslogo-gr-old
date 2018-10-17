// Esperanto Localization (Sample)
(function() {

  //////////////////////////////////////////////////
  // Page

  // For RTL languages:
  // document.body.dir = 'rtl';

  // Override examples link e.g.:
  // examples = "l10n/examples.txt"

  // UI Text
  (function(translation) {
    var ids = new Set();
    Object.keys(translation).forEach(function(key) {
      var parts = key.split('.'), id = parts[0], attr = parts[1], s = translation[key];
      ids.add(id);
      var elem = document.querySelector('[data-l10n-id="'+id+'"]');
      if (!elem)
        console.warn('Unused translation: ' + id);
      else if (attr)
        elem.setAttribute(attr, s);
      else
        elem.textContent = s;
    });
    Array.from(document.querySelectorAll('[data-l10n-id]'))
      .map(function(element) { return element.getAttribute('data-l10n-id'); })
      .filter(function(id) { return !ids.has(id); })
      .forEach(function(id) { console.warn('Missing translation: ' + id); });
  }({
    // data-l10n-id: replacement-text
    // data-l10n-id.attribute: replacement-text
    "title": "Γλώσσα Logo",
    "tl-title": "Γλώσσα Logo",
    "tl-contact": "Επικοινωνία",
    "tl-tests": "Δοκιμές",
    "tl-source": "Κώδικας",
    "tl-reference": "Referenco",
    "start-togetherjs": "Kunlabori",
    "no-canvas": "Via retumilo ne subtenas la kanvaso elemento - Mizera !",
    "ip-button-run": "ΕΚΤΕΛΕΣΗ",
    "ip-button-clear": "ΚΑΘΑΡΙΣΜΟΣ",
    "logo-ta-single-line.placeholder": "Γράψτε τον κώδικα σας εδω...",
    "logo-ta-multi-line.placeholder": "Γράψτε τον κώδικα σας εδω...",
    "sb-link-reference": "Referenco",
    "sb-link-text-reference": "Γλώσσα Logo",
    "sb-link-library": "Biblioteko",
    "sb-link-text-library": "via proceduroj",
    "sb-link-history": "Ιστορια",
    "sb-link-text-history": "Ιστορια...",
    "sb-link-examples": "παραδείγματα",
    "sb-link-text-examples": "amuzaj aferoj provi ekstere",
    "sb-link-extras": "Εξτρα",
    "sb-link-text-extras": "helpema utilecoj",
    "sb-link-links": "Σύνδεσμοι",
    "sb-link-text-links": "aliaj Logo rimedoj",
    "extras-download-library": "Download Biblioteko",
    "extras-download-drawing": "Download Desegnaĵo",
    "extras-clear-history": "Καθαρισμός Ιστορικού",
    "extras-clear-library": "Καθαρισμός Ιστορικού",
    "github-forkme": "forkme GitHub"
  }));

  //////////////////////////////////////////////////
  // Interpreter

  // Messages
  logo.localize = function(s) {
    return {
      // default-text: replacement-text
      'Division by zero': 'ΔΙΑΙΡΕΣΗ ΜΕ ΜΗΔΕΝ',
      'Index out of bounds': 'ΔΕΙΚΤΗΣ ΕΚΤΟΣ ΟΡΙΩΝ'
      // ...
    }[s];
  };

  // Keywords
  logo.keywordAlias = function(name) {
    return {
      // alias: keyword
      'ΑΛΛΙΩΣ': 'ELSE',
      'ΤΕΛΟΣ': 'END'
      // ...
    }[name];
  };

  // Procedures
  (function(defs) {
    Object.keys(defs).forEach(function(def) {
      defs[def].forEach(function(alias) {
        logo.copydef(alias, def);
      });
    });
  }({
    // procname: [alias, ...]
    'true': ['ΑΛΗΘΕΣ'],
    'false': ['ΨΕΥΔΕΣ']
  }));

  //////////////////////////////////////////////////
  // Turtle Graphics

  // Additional color names
  // Colors are specified per https://drafts.csswg.org/css-color-3
  turtle.colorAlias = function(name) {
    return {
      // alias: css-color
      'ΚΟΚΚΙΝΟ': 'red',
      'ΠΟΡΤΟΚΑΛΙ': 'orange',
      'ΚΙΤΡΙΝΟ': 'yellow',
      'ΠΡΑΣΙΝΟ': 'green',
      'ΜΠΛΕ': 'blue',
      'ΒΙΟΛΕΤΙ': 'violet',
      'ΑΣΠΡΟ': 'white',
      'ΓΚΡΙ': 'gray',
      'ΜΑΥΡΟ': 'black'
    }[name];
  };

}());
