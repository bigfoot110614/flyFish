// https://eslint.org/docs/rules/
module.exports = {
    "env": {
        "browser": true,
        // "es6": true,  // 自动启动新的es6全局变量
        "node": true
    },
    "extends": "eslint:recommended",  // 启用推荐的规则
    // "extends": "standard",
    "parserOptions": { 
        "ecmaVersion": 2015, // 支持的ecmascript版本 6/2015, 不自动启动新的es6全局变量
        "sourceType": "module",
        // "ecmaFeatures": {
        //     "jsx": true
        // } // 启用支持jsx
    },
    "rules": {
        // 缩进
        "indent": [
            "error", "tab"
        ],
        "linebreak-style": [ // 强制使用一致的换行风格
            "error",
            // "windows" // 强制使用windows换行符 \r\n
        ],
        // 引号
        "quotes": [
            1,
            "single"
        ],
        // 分号结尾
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [2, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        // 最大空行100
        "no-multiple-empty-lines": [0, { "max": 100 }],
        "no-mixed-spaces-and-tabs": [0],
        //不能使用console
        "no-console": 'off',
        //未定义变量不能使用: 0/off 关闭 1 提示 2报错
        "no-undef": 0,
        //一行结束后面不要有空格
        "no-trailing-spaces": 1,
        //强制驼峰法命名
        "camelcase": 2,
        //对象字面量项尾不能有逗号
        "comma-dangle": [2, "never"],
        //this别名
        "consistent-this": [2, "that"],
    }
    };