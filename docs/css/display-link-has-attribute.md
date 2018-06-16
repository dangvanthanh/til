---
title: 12-29-2017-a-tag-no-text-value-and-has-href
date: 29-12-2017
---

# Display links when `<a>` has no text but has `href` attribute

```css
a[href^='http']:empty::before {
  content: attr(href);
}
```
