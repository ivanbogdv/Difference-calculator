#!/usr/bin/env node
import _ from 'lodash';

const buildAST = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);

  const sortKeys = _.sortBy(_.union(keys1, keys2));

  const tree = sortKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        type: 'added',
        key,
        value: obj2[key],
      };
    }
    if (!_.has(obj2, key)) {
      return {
        type: 'deleted',
        key,
        value: obj1[key],
      };
    } if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj1[key])) {
      return {
        type: 'nested',
        key,
        child: buildAST(obj1[key], obj2[key]),
      };
    }
    if (obj1[key] === obj2[key]) {
      return {
        type: 'unchanged',
        key,
        value: obj1[key],
      };
    }
    return {
      type: 'changed',
      key,
      value: [obj1[key], obj2[key]],
    };
  });
  return tree;
};

export default buildAST;
