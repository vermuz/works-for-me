let Immutable = require('immutable');
let {
  ENVIRONMENT_HEADER_CONTEXT,
  TOOLS_LIST_CONTEXT,
  ENV_BULLET_LEXEME,
  TOOL_BULLET_LEXEME,
  NEWLINE_LEXEME
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let toolsContextIndex = tree.findIndex(context => {
    return context.get('type') === TOOLS_LIST_CONTEXT;
  });

  if (toolsContextIndex !== -1) {
    return false;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME &&
    lexeme.get('type') === TOOL_BULLET_LEXEME;
}

function createContext (tree, lexemeList, lexeme, index) {
  if (lexeme.get('type') === ENV_BULLET_LEXEME) {
    return Immutable.fromJS({
      type: ENVIRONMENT_HEADER_CONTEXT,
      content: []
    });
 }

  return Immutable.fromJS({
    type: TOOLS_LIST_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
};
