# Terraform Plan Unidiff

Generate a human readable diff of Terraform Plan changes, using [Unified format (`unidiff`)](https://en.wikipedia.org/wiki/Diff#Unified_format)

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![super linter][super-linter-img]][super-linter-url]
[![test][test-img]][test-url]
[![semantic][semantic-img]][semantic-url]

## Usage

### CLI

``` bash
npx @ahmadnassri/terraform-unidiff /path/to/plan.json
```

### library

``` js
const unidiff = require('@ahmadnassri/terraform-unidiff')

const plan = fs.readFileSync('path/to/plan.json')

const { summary, patches } = unidiff(plan) 

console.log(patches) // array of changes in unidiff format
console.log(summary) // object with changes counts { create: 1, update: 3, delete: 0 }
```

## Plan JSON

to obtain a Terraform plan in JSON format, run the following command:

``` bash
terraform plan -out terraform.plan && terraform show -json terraform.plan > terraform.json
```

----
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/terraform-unidiff

[release-url]: https://github.com/ahmadnassri/terraform-unidiff/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/terraform-unidiff

[super-linter-url]: https://github.com/ahmadnassri/terraform-unidiff/actions?query=workflow%3Asuper-linter
[super-linter-img]: https://github.com/ahmadnassri/terraform-unidiff/workflows/super-linter/badge.svg

[test-url]: https://github.com/ahmadnassri/terraform-unidiff/actions?query=workflow%3Atest
[test-img]: https://github.com/ahmadnassri/terraform-unidiff/workflows/test/badge.svg

[semantic-url]: https://github.com/ahmadnassri/terraform-unidiff/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
