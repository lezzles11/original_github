// initialize markdown engine
var markdownOptions = {
  html: false,
  xhtmlOut: false,
  breaks: true,
  langPrefix: "",
  linkify: true,
  linkTarget: '_blank" rel="noreferrer',
  typographer: true,
  quotes: `""''`,

  doHighlight: true,
  highlight: function (str, lang) {
    if (!markdownOptions.doHighlight || !window.hljs) {
      return "";
    }

    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}

    return "";
  },
};

var md = new Remarkable("full", markdownOptions);

// image handler
var allowImages = false;
var imgHostWhitelist = ["i.imgur.com", "imgur.com"];

function getDomain(link) {
  var a = document.createElement("a");
  a.href = link;
  return a.hostname;
}

function isWhiteListed(link) {
  return imgHostWhitelist.indexOf(getDomain(link)) !== -1;
}

md.renderer.rules.image = function (tokens, idx, options) {
  var src = Remarkable.utils.escapeHtml(tokens[idx].src);

  if (isWhiteListed(src) && allowImages) {
    var imgSrc =
      ' src="' +
      Remarkable.utils.escapeHtml(tokens[idx].src) +
      '"';
    var title = tokens[idx].title
      ? ' title="' +
        Remarkable.utils.escapeHtml(
          Remarkable.utils.replaceEntities(
            tokens[idx].title
          )
        ) +
        '"'
      : "";
    var alt =
      ' alt="' +
      (tokens[idx].alt
        ? Remarkable.utils.escapeHtml(
            Remarkable.utils.replaceEntities(
              Remarkable.utils.unescapeMd(tokens[idx].alt)
            )
          )
        : "") +
      '"';
    var suffix = options.xhtmlOut ? " /" : "";
    var scrollOnload = isAtBottom()
      ? ' onload="window.scrollTo(0, document.body.scrollHeight)"'
      : "";
    return (
      '<a href="' +
      src +
      '" target="_blank" rel="noreferrer"><img' +
      scrollOnload +
      imgSrc +
      alt +
      title +
      suffix +
      "></a>"
    );
  }

  return (
    '<a href="' +
    src +
    '" target="_blank" rel="noreferrer">' +
    Remarkable.utils.escapeHtml(
      Remarkable.utils.replaceEntities(src)
    ) +
    "</a>"
  );
};

md.renderer.rules.link_open = function (
  tokens,
  idx,
  options
) {
  var title = tokens[idx].title
    ? ' title="' +
      Remarkable.utils.escapeHtml(
        Remarkable.utils.replaceEntities(tokens[idx].title)
      ) +
      '"'
    : "";
  var target = options.linkTarget
    ? ' target="' + options.linkTarget + '"'
    : "";
  return (
    '<a rel="noreferrer" onclick="return verifyLink(this)" href="' +
    Remarkable.utils.escapeHtml(tokens[idx].href) +
    '"' +
    title +
    target +
    ">"
  );
};

md.renderer.rules.text = function (tokens, idx) {
  tokens[idx].content = Remarkable.utils.escapeHtml(
    tokens[idx].content
  );

  if (tokens[idx].content.indexOf("?") !== -1) {
    tokens[idx].content = tokens[idx].content.replace(
      /(^|\s)(\?)\S+?(?=[,.!?:)]?\s|$)/gm,
      function (match) {
        var channelLink = Remarkable.utils.escapeHtml(
          Remarkable.utils.replaceEntities(match.trim())
        );
        var whiteSpace = "";
        if (match[0] !== "?") {
          whiteSpace = match[0];
        }
        return (
          whiteSpace +
          '<a href="' +
          channelLink +
          '" target="_blank">' +
          channelLink +
          "</a>"
        );
      }
    );
  }

  return tokens[idx].content;
};

md.use(remarkableKatex);

function verifyLink(link) {
  var linkHref = Remarkable.utils.escapeHtml(
    Remarkable.utils.replaceEntities(link.href)
  );
  if (linkHref !== link.innerHTML) {
    return confirm(
      "Warning, please verify this is where you want to go: " +
        linkHref
    );
  }

  return true;
}

var verifyNickname = function (nick) {
  return /^[a-zA-Z0-9_]{1,24}$/.test(nick);
};

var frontpage = [
  "                            _           _         _       _   ",
  "                           | |_ ___ ___| |_   ___| |_ ___| |_ ",
  "                           |   |_ ||  _| '_| |  _|   |_ ||  _|",
  "                           |_|_|__/|___|_,_|.|___|_|_|__/|_|  ",
  "",
  "",
  "Welcome to hack.chat, a minimal, distraction-free chat application.",
  "Channels are created, joined and shared with the url, create your own channel by changing the text after the question mark.",
  "If you wanted your channel name to be 'your-channel': https://hack.chat/?your-channel",
  "There are no channel lists, so a secret channel name can be used for private discussions.",
  "",
  "Here are some pre-made channels you can join:",
  "?lounge ?meta",
  "?math ?physics ?chemistry",
  "?technology ?programming",
  "?games ?banana",
  "And here's a random one generated just for you: ?" +
    Math.random().toString(36).substr(2, 8),
  "",
  "Formatting:",
  "Whitespace is preserved, so source code can be pasted verbatim.",
  "Surround LaTeX with a dollar sign for inline style $\\zeta(2) = \\pi^2/6$, and two dollars for display. $$\\int_0^1 \\int_0^1 \\frac{1}{1-xy} dx dy = \\frac{\\pi^2}{6}$$",
  "For syntax highlight, wrap the code like: ```<language> <the code>``` where <language> is any known programming language.",
  "",
  "Current Github: https://github.com/hack-chat",
  "Legacy GitHub: https://github.com/AndrewBelt/hack.chat",
  "",
  "Bots, Android clients, desktop clients, browser extensions, docker images, programming libraries, server modules and more:",
  "https://github.com/hack-chat/3rd-party-software-list",
  "",
  "Server and web client released under the WTFPL and MIT open source license.",
  "No message history is retained on the hack.chat server.",
].join("\n");

function $(query) {
  return document.querySelector(query);
}

function localStorageGet(key) {
  try {
    return window.localStorage[key];
  } catch (e) {}
}

function localStorageSet(key, val) {
  try {
    window.localStorage[key] = val;
  } catch (e) {}
}

/* color scheme switcher */

var schemes = [
  "android",
  "android-white",
  "atelier-dune",
  "atelier-forest",
  "atelier-heath",
  "atelier-lakeside",
  "atelier-seaside",
  "bright",
  "chalk",
  "default",
  "eighties",
  "greenscreen",
  "mariana",
  "mocha",
  "monokai",
  "nese",
  "ocean",
  "pop",
  "railscasts",
  "solarized",
  "tomorrow",
];

var highlights = [
  "agate",
  "androidstudio",
  "atom-one-dark",
  "darcula",
  "github",
  "rainbow",
  "tomorrow",
  "xcode",
  "zenburn",
];

var currentScheme = "atelier-dune";
var currentHighlight = "darcula";

function setScheme(scheme) {
  currentScheme = scheme;
  $("#scheme-link").href = "schemes/" + scheme + ".css";
  localStorageSet("scheme", scheme);
}

function setHighlight(scheme) {
  currentHighlight = scheme;
  $("#highlight-link").href =
    "vendor/hljs/styles/" + scheme + ".min.css";
  localStorageSet("highlight", scheme);
}

// Add scheme options to dropdown selector
schemes.forEach(function (scheme) {
  var option = document.createElement("option");
  option.textContent = scheme;
  option.value = scheme;
  $("#scheme-selector").appendChild(option);
});

highlights.forEach(function (scheme) {
  var option = document.createElement("option");
  option.textContent = scheme;
  option.value = scheme;
  $("#highlight-selector").appendChild(option);
});

$("#scheme-selector").onchange = function (e) {
  setScheme(e.target.value);
};

$("#highlight-selector").onchange = function (e) {
  setHighlight(e.target.value);
};

// Load sidebar configaration values from local storage if available
if (localStorageGet("scheme")) {
  setScheme(localStorageGet("scheme"));
}

if (localStorageGet("highlight")) {
  setHighlight(localStorageGet("highlight"));
}

$("#scheme-selector").value = currentScheme;
$("#highlight-selector").value = currentHighlight;

/* main */

if (myChannel == "") {
  pushMessage({ text: frontpage });
  $("#footer").classList.add("hidden");
  $("#sidebar").classList.add("hidden");
} else {
  join(myChannel);
}
