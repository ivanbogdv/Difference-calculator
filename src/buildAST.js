#!/usr/bin/env node
import _ from 'lodash';

const buildAST = (data1, data2) => {
  const data1Keys = _.keys(data1);
  const data2Keys = _.keys(data2);
  const sortedKeys = _.union(data1Keys, data2Keys).sort();

  const children = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        key,
        value: data2[key],
      };
    }
    if (!_.has(data2, key)) {
      return {
        type: 'removed',
        key,
        value: data1[key],
      };
    } if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        type: 'nested',
        key,
        children: buildAST(data1[key], data2[key]),
      };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return {
        type: 'unchanged',
        key,
        value: data2[key],
      };
    }
    return {
      type: 'changed',
      key,
      value1: data1[key],
      value2: data1[key],
    };
  });
  return children;
};

const getDifferenceTree = (obj1, obj2) => ({
  type: 'root',
  children: buildAST(obj1, obj2),
});
export default getDifferenceTree;
