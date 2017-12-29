# Display links when `<a>` has no text but has `href` attribute

```css
a[href^="http"]:empty::before {
  content: attr(href);  
}
```
