#!/usr/bin/env node
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const compare = (acc, key) => {
    const matchesKey = `  ${key}`;
    const plusKey = `+ ${key}`;
    const minusKey = `- ${key}`;

    if (!Object.hasOwn(data2, key)) {
      acc.push(`  ${minusKey}: ${data1[key]}`);
    } else if (!Object.hasOwn(data1, key)) {
      acc.push(`  ${plusKey}: ${data2[key]}`);
    } else if (data1[key] !== data2[key]) {
      acc.push(`  ${minusKey}: ${data1[key]}`);
      acc.push(`  ${plusKey}: ${data2[key]}`);
    } else {
      acc.push(`  ${matchesKey}: ${data1[key]}`);
    }

    return acc;
  };

  const result = (keys.reduce(compare, []).join('\n'));
  result.toString();
  return `{\n${result}\n}`;
};

export default genDiff;
