#!/usr/bin/env node

import { readFileSync } from 'fs';
// import _ from 'lodash';
import path from 'path';
import { cwd } from 'process';
import genDiff from './genDiff.js';
import parser from './parsers.js';

const getPath = (filepath) => path.resolve(cwd(), filepath);
const getFileFormat = (filepath) => path.extname(filepath).slice(1);

export default (filepath1, filepath2) => {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);

  const data1 = readFileSync(filepath1, 'utf-8');
  const data2 = readFileSync(filepath2, 'utf-8');

  const parseData1 = parser(data1, getFileFormat(path1));
  const parseData2 = parser(data2, getFileFormat(path2));

  const result = genDiff(parseData1, parseData2);
  return result;
};
