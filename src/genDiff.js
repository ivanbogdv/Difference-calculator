#!/usr/src/env node
import _ from "lodash";

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));


  const filterKeys = keys.map((key) => {
    let result = {};
    // console.log(key);
    if (key === "follow") {
      result = "000";
    }

    return result;
  });
};

export default genDiff;
