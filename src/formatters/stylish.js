const makeStylish = (tree) => {
  console.log(tree);
  const result = tree.map((item) => {
    const matchesKey = `  ${item.key}`;
    const plusKey = `+ ${item.key}`;
    const minusKey = `- ${item.key}`;

    switch (item.type) {
      case 'added':
        return `${plusKey}: ${item.value} `;
      case 'unchanged':
        return `${matchesKey}: ${item.value} `;
      case 'changed':
        return `${minusKey}: ${item.value[0]}\n${plusKey}: ${item.value[1]}`;
      case 'deleted':
        return `${minusKey}: ${item.value} `;
      default:
        break;
    }
  });
  return result.join('\n');
};

export default makeStylish;
