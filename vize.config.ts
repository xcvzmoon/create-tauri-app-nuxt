import { defineConfig } from 'vize';

export default defineConfig({
  compiler: {
    templateSyntax: 'standard',
  },
  linter: {
    enabled: true,
    preset: 'happy-path',
  },
  formatter: {
    sortBlocks: true,
    singleQuote: true,
    singleAttributePerLine: true,
    vueIndentScriptAndStyle: true,
  },
  typeChecker: {
    enabled: true,
    strict: true,
    jsxTypecheck: true,
  },
});
