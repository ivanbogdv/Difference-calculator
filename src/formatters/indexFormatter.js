import makeStylish from './stylish.js';

const formatter = (tree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    default:
      throw new Error(`Error: ${format} - this format is not supported. Available formats: stylish, plain, json`);
  }
};

export default formatter;
