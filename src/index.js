#!/usr/src/env node
import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';
import process from 'process';
import genDiff from './genDiff.js';




export default (filepath1, filepath2) => {

  const getPath = (filepath) => readFileSync(path.resolve(process.cwd(), filepath)).toString();
  const getFileFormat = (filepath) => path.extname(filepath).slice(1);

  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);
  
  const data1 = readFileSync(filepath1, 'utf-8');
  const data2 = readFileSync(filepath2, 'utf-8');
  
  const parseData1 = JSON.parse(data1, getFileFormat(path1));
  const parseData2 = JSON.parse(data2, getFileFormat(path2));

  // console.log(genDiff(ParseData1, ParseData2));
  const result = genDiff(parseData1, parseData2);
  return result;


};
