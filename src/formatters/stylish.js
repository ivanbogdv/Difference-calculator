const makeStylish = (tree) => {
  const toString = (node) => {
    if (!Array.isArray(node)) {
      return node;
    }

    const result = tree.map((item) => {
      const matchesKey = `  ${item.key}`;
      const plusKey = `+ ${item.key}`;
      const minusKey = `- ${item.key}`;

      switch (item.type) {
        case 'added':
          return `${plusKey}: ${item.value} `;
        case 'deleted':
          return `${minusKey}: ${item.value} `;
        case 'unchanged':
          return `${matchesKey}: ${item.value} `;
        case 'nested': {
          const children = item.children.map((child) => toString(child));
          return ` ${item.key}: ${toString(children)}`;
        }
        case 'changed': {
          return `${minusKey}: ${item.value[0]}\n${plusKey}: ${item.value[1]}`;
        }
        default:
          throw new Error(`Error: ${item} - this type doesn't exist in this file`);
      }
    });
    return result;
  };
  return toString(tree);
};

export default makeStylish;
