#!/usr/bin/env node
import _ from 'lodash';

const buildAST = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);

  const sortKeys = _.sortBy(_.union(keys1, keys2));
  console.log(sortKeys);
  const tree = sortKeys.map((key) => {
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { type: 'added' };
    }
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        return { type: 'unchanged' };
      } return { type: 'changed' };
    } return { type: 'deleted' };
  });
  console.log(tree);
};

export default buildAST;
