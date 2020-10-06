# Terraform Plan Unidiff

Generate a human readable diff of Terraform Plan changes, using [Unified format (`unidiff`)](https://en.wikipedia.org/wiki/Diff#Unified_format)

[![license][license-img]][license-url]
[![version][npm-img]][npm-url]
[![super linter][super-linter-img]][super-linter-url]
[![test][test-img]][test-url]
[![release][release-img]][release-url]

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-terraform-unidiff

[npm-url]: https://www.npmjs.com/package/@ahmadnassri/terraform-unidiff
[npm-img]: https://badgen.net/npm/v/@ahmadnassri/terraform-unidiff

[super-linter-url]: https://github.com/ahmadnassri/node-terraform-unidiff/actions?query=workflow%3Asuper-linter
[super-linter-img]: https://github.com/ahmadnassri/node-terraform-unidiff/workflows/super-linter/badge.svg

[test-url]: https://github.com/ahmadnassri/node-terraform-unidiff/actions?query=workflow%3Atest
[test-img]: https://github.com/ahmadnassri/node-terraform-unidiff/workflows/test/badge.svg

[release-url]: https://github.com/ahmadnassri/node-terraform-unidiff/actions?query=workflow%3Arelease
[release-img]: https://github.com/ahmadnassri/node-terraform-unidiff/workflows/release/badge.svg

## Usage

### CLI

```bash
npx @ahmadnassri/terraform-unidiff /path/to/plan.json
```

### library

```js
const unidiff = require('@ahmadnassri/terraform-unidiff')

const plan = fs.readFileSync('path/to/plan.json')

const patches = unidiff(plan) // array of changes
```

## Plan JSON

to obtain a Terraform plan in JSON format, run the following command:

```bash
terraform plan -out terraform.plan && terraform show -json terraform.plan > terraform.json
```
