# Split navigations in Vim

Create a vertical split using `:vsp` and horizontal with `:sp`

You can specify the new split height by prefixing with a number

```
:60vsp ~/.vimrc
```

Beside we can use different key mapping for travel navigation between splits.

We can modify `ctrl-w` then `w` by `ctrl-w` in `vimrc`

```
nnoremap <C-W> <C-W><C-W> " Cycle through all windows
nnoremap <C-H> <C-W><C-H> " Takes you left a window
nnoremap <C-J> <C-W><C-J> " Takes you down a window
nnoremap <C-K> <C-W><C-K> " Takes you up a window
nnoremap <C-L> <C-W><C-L> " Takes you right a window
```

You can close the split

```
:q
```

or deletes the buffer

```
:bd
```
