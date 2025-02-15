// script/preinstall.js

// 允许的包管理工具
const ALLOWED_PACKAGE_MANAGER = 'pnpm'; // 可以改为 npm 或 yarn

// 获取当前运行的包管理工具
const userAgent = process.env.npm_config_user_agent || '';
let packageManager = userAgent.split('/')[0];

// 如果未通过环境变量获取到包管理工具，尝试通过其他方式检测
if (!packageManager) {
    try {
        // 检查是否存在 pnpm-lock.yaml
        packageManager = 'pnpm';
    } catch {
        try {
            // 检查是否存在 yarn.lock
            execSync('test -f yarn.lock', { stdio: 'ignore' });
            packageManager = 'yarn';
        } catch {
            // 默认认为是 npm
            packageManager = 'npm';
        }
    }
}

// 检查是否使用了允许的包管理工具
if (packageManager !== ALLOWED_PACKAGE_MANAGER) {
    console.error(
        `\x1b[31mError: 请使用 ${ALLOWED_PACKAGE_MANAGER} 作为包管理工具。\n` +
            `当前使用的是 ${packageManager}，请切换到 ${ALLOWED_PACKAGE_MANAGER}。\x1b[0m`,
    );
    process.exit(1); // 退出并返回错误码
}

console.log(`\x1b[32m✓ 正在使用 ${ALLOWED_PACKAGE_MANAGER} 安装依赖...\x1b[0m`);
