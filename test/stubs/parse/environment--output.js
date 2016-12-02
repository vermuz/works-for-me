module.exports = [
  {
    type: 'environment-header',
    content: [
      { type: 'env-bullet', content: '--' },
      { type: 'word', content: 'desktop' },
      { type: 'newline', content: '\n' },
      { type: 'word', content: 'desktop' },
      { type: 'word', content: 'env' },
      { type: 'word', content: 'description' },
      { type: 'newline', content: '\n' },
      { type: 'comment-bullet', content: '//' },
      { type: 'word', content: 'comment' },
      { type: 'word', content: 'one' },
      { type: 'newline', content: '\n' }
    ]
  },
  {
    type: 'tools-list',
    content: [
      { type: 'tool-bullet', content: '>' },
      { type: 'word', content: 'editor:' },
      { type: 'word', content: 'Sublime' },
      { type: 'word', content: 'Text' },
      { type: 'word', content: '3' },
      { type: 'newline', content: '\n' },
      { type: 'word', content: 'tool' },
      { type: 'word', content: 'description' },
      { type: 'newline', content: '\n' },
      { type: 'tool-bullet', content: '>' },
      { type: 'word', content: 'terminal:' },
      { type: 'word', content: 'iTerm' },
      { type: 'word', content: '2' },
      { type: 'word', content: '(https://www.iterm2.com/)' }
    ]
  }
];
