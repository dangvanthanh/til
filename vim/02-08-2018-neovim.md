# Neovim

### Install neovim through Homebrew

```
brew install neovim
```

to upgrade

```
brew update
brew upgrade neovim
```

### Install the plugin manager

A minimalist Vim plugin manager `vim-plug`

```
curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

### Extra

Python support

```
sudo pip3 install neovim
```

System clipboard. Add in `init.vim`

```
set clipboard+=unnamedplus
```
