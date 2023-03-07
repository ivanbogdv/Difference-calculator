#!/usr/bin/env node

import path from 'path';
import { readFileSync } from 'node:fs';
import url from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filename1 = getFixturePath('file1.json');
const filename2 = getFixturePath('file2.json');
const resultName = getFixturePath('file_result.txt');
const result = readFileSync(resultName, 'utf8');

test('file json', () => {
  expect(genDiff(filename1, filename2)).toBe(result);
});
