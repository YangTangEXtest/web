# web
前端
- 完成了发布作业和做作业的主要功能，但是代码还没整理 2019/01/19
- 规范了文件的命名，并将js与HTML分离 2019/01/20
- 修复了做作业页面同类型的题只能获取到一个答案的bug,并且在发布作业页 面提交作业时将题目类型语义化
- 修改了显示作业时，同类型的题目显示的是一样的bug，原因应该是jQuery load方法载入 的模板中的js编译问题，具体原理尚不明确，将js赋值改成了jsp获取赋值的方式
