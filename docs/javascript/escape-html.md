# Escape HTML

```javascript
function escapeHtml(target) {
  if (typeof target !== 'string') {
    return target;
  }

  return target.replace(/[&'`"<>]/g, match => {
    return {
      '&': '&amp;',
      "'": '&#x27;',
      '`': '&#x60;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;'
    }[match];
  });
}
```
