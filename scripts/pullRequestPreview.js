import { execSync } from "child_process";

console.log("[DEPLOY_PREVIEW: START");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf8" });
const outpuLines = output.split("\n");
const DEPLOY_URL = outpuLines[outpuLines.length - 1];
console.log("[DEPLOY_PREVIEW: END");
console.log(`You can see the deploy preview on: ${DEPLOY_URL}`);
console.log(output);

// console.log("[GITHUB_COMMENT: START");
// console.log("[GITHUB_COMMENT: END");
