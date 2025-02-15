// .stylelintrc.js
module.exports = {
  extends: [
    'stylelint-config-standard', // 继承标准配置
    'stylelint-config-standard-scss', // 继承 SCSS 标准配置
    'stylelint-config-prettier', // 避免与 Prettier 冲突（可选）
  ],
  plugins: ['stylelint-scss'], // 启用 SCSS 插件
  rules: {
    // 自定义规则
    'selector-class-pattern': null, // 允许任何类名格式
    'no-descending-specificity': null, // 允许特异性降序
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'responsive', 'screen'], // 忽略特定 SCSS 规则
      },
    ],
  },
};