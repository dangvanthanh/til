# Basic Commands

## Configure

```shell
$ git config --global user.name "Your Name"
$ git config --global user.email "Your Email"
$ git config core.editor <Your Editor>
```

## Commands

### Setup and Clone Repository

```shell
$ git init
$ git clone <Repository Url>
```

### Commit and Status

```shell
// Add the program to the repository
$ git add example.txt
// or add all
$ git add .
$ git commit -m "Initialize"
$ git commit --a -m "Initialize"

// Check the status of the repository
$ git status
```

### Logs

```shell
$ git log
$ git log --pretty=oneline
$ git log --pretty=oneline --max-count=2
$ git log --pretty=oneline --since="5 minutes ago"
$ git log --pretty=oneline --until="5 minutes ago"
$ git log --pretty=oneline --author=<Your Name>
$ git log --pretty=oneline --all
$ git log --all --pretty=format:"%h %cd %s (%an)" --since="7 days ago"
$ git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
```

### Checkout Branch, Tags, Directory or Files

```shell
// Revert the changes in the working directory
$ git checkout example.txt

// Get the hash for previous verisons
$ git checkout <hash>

// Return the latest verion in the master branch
$ git checkout master
```

### Tags

```shell
$ git tag
$ git tag oops
$ git tag -d oops
$ git tag v1
$ git checkout v1
```

### Reset

```shell
// Reset the Staging Area
$ git reset HEAD example.txt
$ git reset --hard v1
```

### Revert

```shell
$ git revert HEAD
```

### Navigation

```shell
// Moving the `example.txt` file into a `src` directory
$ mkdir src $ git mv example.txt src

// Remove file `example.txt`
$ git rm example.txt
```

### Merging

```shell
// Merge `develop` into `master`
$ git checkout master
$ git merge master
```

### Remote

```shell
$ git remote
$ git remote show origin
```

### Branches

```shell
$ git branch
$ git branch -a
```

### Fetching Changes

```shell
$ git fetch
```

### Pulling Changes

```shell
$ git pull
```

## Useful Commands

```shell
// The `.git` directory
$ ls -C .git

// The Object Store
$ ls -C .git/objects

// Deeper into the Object Store
$ ls -C .git/objects/<Directory>

// Config file
$ cat .git/config

// Branches and Tags
$ ls .git/refs
$ ls .git/refs/heads
$ ls .git/refs/tags
$ cat .git/refs/tags

// The HEAD file
$ cat .git/HEAD
```
