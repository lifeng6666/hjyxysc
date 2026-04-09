# 自动签到系统

一个自动化的签到工具，支持多账号批量操作、自动获取金豆、结果汇总和多渠道通知。

## 功能特性

- 🤖 **自动签到**：无需人工干预，自动完成账号签到
- 💰 **金豆获取**：自动获取签到金豆，并计算金豆增减情况
- 🔄 **多账号支持**：支持批量处理多个账号，提高效率
- 📱 **多种通知方式**：支持Telegram、微信、钉钉、PushPlus等多种通知渠道
- 📊 **结果汇总**：自动生成金豆排名Excel表格，方便查看
- 🔒 **安全可靠**：使用代理IP和防检测技术，保障账号安全
- 🎯 **自动化部署**：基于GitHub Actions实现定时自动执行

## 项目结构

```
├── AliV3.py           # 登录认证模块
├── AliV3min.py        # 简化版登录认证
├── Utils.py           # 工具函数
├── jlc.py             # 主签到脚本
├── jlc_summary.py     # 结果汇总脚本
├── jlc-bbs.py         # 论坛签到脚本
├── dati.py            # 答题脚本
├── getcookie.py       # Cookie获取工具
├── crypto-js.js       # 加密相关JS
├── dati.js            # 答题相关JS
├── pwd.js             # 密码处理JS
├── sm2.js             # 加密算法JS
└── .github/           # GitHub Actions工作流
    └── workflows/
        ├── main.yml   # 主签到工作流
        ├── aliv3.yml  # 登录认证工作流
        └── dati.yml   # 答题工作流
```

## 环境要求

- Python 3.10+
- Node.js 18+
- Chrome浏览器
- ChromeDriver

## 依赖安装

```bash
pip install --upgrade pip
pip install requests==2.26.0
pip install lxml==4.6.5
pip install selenium==3.141.0
pip install retrying==1.3.3
pip install wheel==0.37.1
pip install serverchan_sdk==1.0.6
pip install PyExecJS
pip install DrissionPage
```

## 使用方法

### 1. 本地运行

```bash
# 单个账号
python jlc.py "username" "password"

# 多个账号（用逗号分隔）
python jlc.py "user1,user2" "pass1,pass2"
```

### 2. GitHub Actions 自动运行

1. **Fork本仓库**到你的GitHub账号

2. **设置Secrets**：
   - `JLC_ACCOUNT`：账号密码，格式为 `username:password`，每行一个账号
   - 通知相关Secrets（可选）：
     - `TELEGRAM_BOT_TOKEN` 和 `TELEGRAM_CHAT_ID`
     - `WECHAT_WEBHOOK_KEY`
     - `DINGTALK_WEBHOOK`
     - `PUSHPLUS_TOKEN`
     - `SERVERCHAN_SCKEY`
     - `COOLPUSH_SKEY`
     - `CUSTOM_WEBHOOK`

3. **启用Actions**：在仓库的Actions页面启用工作流

4. **手动触发**：在Actions页面点击"Run workflow"手动触发签到

5. **查看结果**：工作流执行完成后，会在Artifacts中生成金豆排名Excel文件

## 工作原理

1. **登录认证**：使用AliV3模块获取登录凭证
2. **签到操作**：调用API执行签到
3. **金豆统计**：获取签到前后的金豆数量，计算增量
4. **结果汇总**：将所有账号的签到结果汇总生成Excel表格
5. **通知推送**：通过配置的通知渠道发送签到结果

## 注意事项

- 请确保账号密码正确，否则会被标记为密码错误
- 建议使用GitHub Actions运行，避免本地环境配置问题
- 签到频率建议为每天一次，过于频繁可能导致账号异常
- 如遇到登录失败，请检查网络环境或尝试更新Chrome浏览器

## 常见问题

### 1. 签到失败怎么办？

- 检查账号密码是否正确
- 检查网络连接是否正常
- 查看日志输出，定位具体错误原因

### 2. 如何添加新的通知渠道？

在GitHub Secrets中添加对应的密钥即可，系统会自动检测并使用可用的通知渠道。

### 3. 金豆数量不准确怎么办？

系统会多次尝试获取金豆数量，取最合理的值。如仍有问题，请手动登录查看实际金豆数量。

## 免责声明

- 本工具仅用于学习和研究目的，请勿用于商业用途
- 使用本工具时请遵守的用户协议
- 作者不对使用本工具产生的任何后果负责

## 贡献

欢迎提交Issue和Pull Request，一起改进这个项目！

## 许可证

MIT License

---

**声明**：本项目仅供学习参考，使用时请遵守相关平台的使用条款。