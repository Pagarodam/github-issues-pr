// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('GET /issues', {})