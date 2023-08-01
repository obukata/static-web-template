module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: [
    // 外部ライブラリは「style/lib」を想定
    '**/lib/*.css',
    '**/noe_modules/**',
    '**/_postcss/**',
  ],
  "rules": {
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "function-url-quotes": ["always", { "severity": "warning" }],
    "number-max-precision": [3, { "severity": "warning" }],
    "alpha-value-notation": ["number", { "severity": "warning" }],
    "font-family-name-quotes": ["always-where-recommended", { "severity": "warning" }],
    "property-no-vendor-prefix": [true, { "ignoreProperties": ["appearance", "text-size-adjust"] }],
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "declaration-block-no-duplicate-custom-properties": null,
  }
}
