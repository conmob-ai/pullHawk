import {expect, test} from '@jest/globals'
import * as cp from 'child_process'
import * as path from 'path'
import * as process from 'process'

test('test runs', () => {
  // Set required environment variables for GitHub Actions simulation
  process.env['INPUT_ACTION'] = 'code-review'
  process.env['GITHUB_ACTION'] = 'pullhawk-test'
  process.env['GITHUB_ACTIONS'] = 'true'
  process.env['GITHUB_EVENT_NAME'] = 'pull_request'
  process.env['GITHUB_REPOSITORY'] = 'test/repo'
  process.env['GITHUB_TOKEN'] = 'fake-token-for-testing'
  process.env['OPENAI_API_KEY'] = 'fake-openai-key-for-testing'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
