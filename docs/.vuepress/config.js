module.exports = {
  title: 'Today I Learned',
  description: 'Today I Learned Everything So Slow',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css'
      }
    ]
  ],
  themeConfig: {
    repo: 'dangvanthanh/til',
    nav: [
      { text: 'Node.js', link: '/nodejs/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'Vue.js', link: '/vuejs/' },
      { text: 'CSS', link: '/css/' },
      { text: 'Canvas', link: '/canvas/' },
      { text: 'Git', link: '/git/' },
      { text: 'Vim', link: '/vim/' },
      { text: 'Tmux', link: '/tmux/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Mac OS', link: '/macos/' }
    ]
  }
};
