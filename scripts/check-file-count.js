#!/usr/bin/env node

import { execSync } from "node:child_process"

const MAX_FILES = 20;

try {
  // 获取所有 staged 文件
  const stagedFiles = execSync("git diff --cached --name-only", { encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(file => file.length > 0);

  const fileCount = stagedFiles.length;

  console.log(`📊 检测到 ${fileCount} 个文件即将提交`);

  if (fileCount > MAX_FILES) {
    console.error("");
    console.error("❌ 提交失败：文件数量过多");
    console.error(`🚫 当前提交包含 ${fileCount} 个文件，超过了限制的 ${MAX_FILES} 个文件`);
    console.error("");
    console.error("💡 建议：");
    console.error("   - 将大型提交拆分为多个小提交");
    console.error("   - 确保每个提交都是一个逻辑单元");
    console.error("   - 检查是否有不必要的文件被暂存");
    console.error("");
    console.error("📋 当前暂存的文件：");
    stagedFiles.forEach((file, index) => {
      console.error(`   ${index + 1}. ${file}`);
    });
    console.error("");

    process.exit(1);
  }

  console.log("✅ 文件数量检查通过");
  process.exit(0);
} catch (error) {
  console.error("❌ 文件数量检查失败:", error.message);
  process.exit(1);
}
