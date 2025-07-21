# Git 提交规范
## 分支命名
1. Master （main）:  主分支用于部署（生产环境的分支）确保稳定一般由release以及hotfix分支合并，任何时间都不能直接修改
2. Develop : 开发环境 始终保持最新完成以及bug修复后的代码，用于前后端联调 一般开发新功能时feature 都是基于develop分支创建的
3. Feature ： 开发新功能时基于develop创建 一般命名为 feature/user_module 等
4. Test ： 测试环境分支 
5. Release ： 预发布分支 一般有test以及hotfix 合并 不建议直接修改 
6. Hotfix : 线上发生紧急问题需要及时修复 以master 分支为基线创建，修复后需要合并到master 以及develop分支
## 提交文本
1. feat  新增功能
2. Fix 修复bug
3. Docs 仅文档修改
4. Style 不影响代码含义的更改 （空白，格式设置，缺失 分号等）
5. Refactor    代码重构   既不修复bug也不添加特性的代码更改
6. Perf  改进性能的代码更改
7. Test 添加缺少的测试或更正现有的测试
8. Chore 对构建过程或辅助工具和库（文档）的更改
## 注意事项
1. 提交问题必须为同一类别
2. 提交问题不要超过3个
3. 提交的commit 不符合规范 git commit --amend -m “新提交的信息”或者 git reset --hard HEAD 重新提交一次