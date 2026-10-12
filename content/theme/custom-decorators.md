---
title: "custom decorators"
draft: true
date: 2026-10-12
---

we can define custom decorators to render markdown text in different styles. 

{{h the default highlight}} and {{h2 the alternate **bold** highlight}}. this text is {{redact redacted}}. this is plain text.

syntax:
  ```
  {{redact .. }}
  {{h .. }}
  {{h1 .. }}
  ```

<hr>

## implementation 

goldmark passthrough extension --> hugo render-hook system

**goldmark passthrough extension**
we enable goldmark's passthrough extension, and register `{{` and `}}` as delimiters. goldmark skips parsing the internal contents, and passes it through to hugo's render-hook system.

**render-passthrough hook**
parses first token as decorator class; remainder as content, emits it as:

`<span class="decorator-{class}">{content}</span>`

**css styling**
as usual
to add a new decorator, just add a new css rule:

`.decorator-newdecorator {...}`

and use the matching decorator syntax in the markdown file
