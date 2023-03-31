#!/usr/bin/env node

import { readFileSync } from 'fs';
// import _ from 'lodash';
import path from 'path';
import { cwd } from 'process';
import parser from './parsers.js';
import buildAST from './buildAST.js';
import formatter from './formatters/indexFormatter.js';
// import genDiffOld from './genDiffOld.js';

const generateDiff = (obj1, obj2, format) => {
  const ast = buildAST(obj1, obj2);
  return formatter(ast, format);
};

const getPath = (filepath) => path.resolve(cwd(), filepath);
const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);

  const data1 = readFileSync(filepath1, 'utf-8');
  const data2 = readFileSync(filepath2, 'utf-8');

  const parseData1 = parser(data1, getFileFormat(path1));
  const parseData2 = parser(data2, getFileFormat(path2));

  const result = generateDiff(parseData1, parseData2, format);
  return result;
};

export default genDiff;
