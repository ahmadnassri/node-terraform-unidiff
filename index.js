const { createPatch } = require('diff')
const { safeDump } = require('js-yaml')
const Ajv = require('ajv')
const schema = require('./schema.json')

// setup json schema validation
const ajv = new Ajv()
const validate = ajv.compile(schema)

module.exports = function (plan) {
  const valid = validate(plan)

  if (!valid) {
    throw new Error('invalid Terraform Plan JSON data')
  }

  const patches = []

  for (const resource of plan.resource_changes) {
    // skip early
    if (resource.change.actions.includes('no-op')) continue

    // convert to yaml for better visibility
    const before = safeDump(resource.change.before)
    const after = safeDump(resource.change.after)

    const patch = createPatch(resource.address, before, after)

    patches.push(patch)
  }

  return patches
}
