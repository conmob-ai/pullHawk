import {expect, test} from '@jest/globals'
import * as cp from 'child_process'
import * as path from 'path'
import * as process from 'process'

test('test runs', () => {
  // Add test mode
  process.env['NODE_ENV'] = 'test'

  // Set required environment variables for GitHub Actions simulation
  process.env['INPUT_ACTION'] = 'code-review'
  process.env['INPUT_DEBUG'] = 'false' // Valid YAML boolean
  process.env['INPUT_REVIEW_SIMPLE_CHANGES'] = 'false' // Valid YAML boolean
  process.env['INPUT_REVIEW_COMMENT_LGTM'] = 'false' // Valid YAML boolean
  process.env['INPUT_DISABLE_REVIEW'] = 'false' // Valid YAML boolean
  process.env['INPUT_DISABLE_RELEASE_NOTES'] = 'false' // Valid YAML boolean
  process.env['INPUT_MAX_FILES'] = '150' // Numeric input
  process.env['INPUT_OPENAI_MODEL_TEMPERATURE'] = '0.05' // Numeric input
  process.env['INPUT_OPENAI_RETRIES'] = '5' // Numeric input
  process.env['INPUT_OPENAI_TIMEOUT_MS'] = '360000' // Numeric input
  process.env['INPUT_OPENAI_CONCURRENCY_LIMIT'] = '6' // Numeric input
  process.env['INPUT_GITHUB_CONCURRENCY_LIMIT'] = '6' // Numeric input
  process.env['INPUT_OPENAI_LIGHT_MODEL'] = 'gpt-3.5-turbo' // String input
  process.env['INPUT_OPENAI_HEAVY_MODEL'] = 'gpt-4' // String input
  process.env['INPUT_OPENAI_BASE_URL'] = 'https://api.openai.com/v1' // String input
  process.env['GITHUB_ACTION'] = 'pullhawk-test'
  process.env['GITHUB_ACTIONS'] = 'true'
  process.env['GITHUB_EVENT_NAME'] = 'pull_request'
  process.env['GITHUB_REPOSITORY'] = 'test/repo'
  process.env['GITHUB_TOKEN'] = 'fake-token-for-testing'
  process.env['OPENAI_API_KEY'] = 'fake-openai-key-for-testing'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: {
      ...process.env,
      NODE_ENV: 'test',
      OPENAI_API_KEY: 'fake-openai-key-for-testing'
    }
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
