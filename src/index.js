#!/usr/src/env node
import { readFileSync } from "fs";
import path from "path";
import process from "process";
import genDiff from "./genDiff.js";
import _ from "lodash";


export default (filepath1, filepath2) => {

  

  const data1 = process.cwd(readFileSync(filepath1, 'utf-8'));
  const data2 = process.cwd(readFileSync(filepath2, 'utf-8'));



  const ParseData1 = JSON.parse(data1);
  const ParseData2 = JSON.parse(data2);

  
  // console.log(genDiff(ParseData1, ParseData2));
  genDiff(ParseData1, ParseData2);


};
