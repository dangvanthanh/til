# The Basic CSS Parsing

The selectors can be split into a few group and (roughly) sorted from the least to most expensive.

| Rank | Type                         | Example                      |
| ---- | ---------------------------- | ---------------------------- |
| 1    | ID                           | `#classId`                   |
| 2    | Class                        | `.class`                     |
| 3    | Tag                          | `div`                        |
| 4    | General and adjacent sibling | `div ~ a`, `div + a`         |
| 5    | Child and descendant         | `div > a`, `div a`           |
| 6    | Universal                    | `*`                          |
| 7    | Attribute                    | `[type="text"]`              |
| 8    | Pseudo-classes and elements  | `a:first-of-type`, `a:hover` |
