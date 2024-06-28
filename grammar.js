const userAgent = /[uU]ser\-[aA]gent/,
  allow = /[aA]llow/,
  disallow = /[dD]isallow/,
  crawlDelay = /[cC]rawl\-[dD]elay/,
  sitemap = /[sS]itemap/,
  host = /[hH]ost/,
  delimiter = ":";

const unicodeLetter = /\p{L}/,
  unicodeDigit = /[0-9]/,
  letter = choice(
    unicodeLetter,
    unicodeDigit,
    "-",
    "_",
    "*",
    "/",
    ".",
    ":",
    "?",
    "=",
  );

module.exports = grammar({
  name: "robots",
  extras: ($) => [/\s/, $.comment],
  externals: ($) => [$._newline, $._indent, $._dedent],
  rules: {
    source_file: ($) => repeat(choice($.rule)),
    comment: (_) => token(choice(seq("#", " ", /.*/))),
    userAgent: (_) => userAgent,
    allow: (_) => allow,
    host: (_) => host,
    disallow: (_) => disallow,
    crawlDelay: (_) => crawlDelay,
    sitemap: (_) => sitemap,
    unknownDirective: (_) =>
      token(seq(unicodeLetter, repeat(choice(unicodeLetter, "-")))),
    directive: ($) =>
      choice($.userAgent, $.allow, $.disallow, $.crawlDelay, $.sitemap, $.host),
    value: (_) => token(seq(letter, repeat(letter))),
    rule: ($) =>
      seq(
        choice($.directive, $.unknownDirective),
        delimiter,
        optional($.value),
        choice($._newline),
      ),
  },
});
