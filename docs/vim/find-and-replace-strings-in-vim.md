# Find and replace string in Vim

### Replace all

> Replace `foo` to `bar` in current line

```
:s/foo/bar/g
```

> Replace all `foo` to `bar` in the whole file

```
:%s/foo/bar/g
```

### Replace from line [x] to line [y]

> Replace all `foo` to `bar` from line 6 to line 10

```
:6,10s/foo/bar/g
```
