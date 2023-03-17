import yaml from 'js-yaml';

const parser = (data, format) => {
  const par = { yaml: yaml.load, yml: yaml.load, json: JSON.parse };
  return par[format](data);
};

export default parser;
