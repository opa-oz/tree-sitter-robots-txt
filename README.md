# Tree-sitter-robots-txt

This is a general tree-sitter parser grammar for the [robots.txt](https://en.wikipedia.org/wiki/Robots.txt).

A robots.txt file is a text file used to instruct web robots (often called crawlers or spiders) how to interact with pages on a website. Here is the basic syntax and rules for a robots.txt file:

1. **User-agent line**: Specifies the robot(s) to which the rules apply.
   - `User-agent: *` - Applies to all robots.
   - `User-agent: Googlebot` - Applies specifically to Google's crawler.

2. **Disallow line**: Specifies the files or directories that the specified robot(s) should not crawl.
   - `Disallow: /directory/` - Disallows crawling of the specified directory.
   - `Disallow: /file.html` - Disallows crawling of the specific file.
   - `Disallow: /` - Disallows crawling of the entire site.

3. **Allow line** (optional): Overrides a disallow rule for a specific file or directory.
   - `Allow: /directory/file.html` - Allows crawling of a specific file within a disallowed directory.

4. **Crawl-delay line** (optional): Specifies the delay in seconds between successive requests to the site.
   - `Crawl-delay: 10` - Sets a 10-second delay between requests.

5. **Sitemap line** (optional): Directs robots to the location of the XML sitemap(s) for the website.
   - `Sitemap: https://www.example.com/sitemap.xml` - Specifies the location of the XML sitemap.

6. **Comments**: Lines beginning with `#` are comments and are ignored by robots. They can be used to annotate the file for humans.

### Example robots.txt file:

```plaintext
User-agent: *
Disallow: /admin/
Disallow: /private.html
Allow: /public.html
Crawl-delay: 5
Sitemap: https://www.example.com/sitemap.xml

# This is a comment explaining the robots.txt file.
```

### Notes:
- Wildcards (`*`) can be used in `Disallow` directives, e.g., `Disallow: /*.pdf` to block all PDF files.
- Each directive (User-agent, Disallow, Allow, Crawl-delay, Sitemap) should be on a separate line.
- Multiple rules can be specified for different user agents or directories by repeating `User-agent` and subsequent directives.

It's important to note that while robots.txt files provide guidance to well-behaved crawlers, malicious or poorly programmed crawlers may ignore these instructions. Therefore, they are primarily used for managing how legitimate search engines and web crawlers interact with a website.

## Features
- [x] Directives (`User-agent`, `Disallow`, `Allow`, `Crawl-delay`, `Sitemap`, `Host`)
- [x] Comments (`# comment`)
- [x] Unknown directives (`X-Robots-Tag`)

## Developing

How to run & test:

```bash
npm install

npm run test
```

