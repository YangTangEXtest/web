# web
前端
- 完成了发布作业和做作业的主要功能，但是代码还没整理 2019/01/19
- 规范了文件的命名，并将js与HTML分离 2019/01/20
- 修复了做作业页面同类型的题只能获取到一个答案的bug,并且在发布作业页 面提交作业时将题目类型语义化
- 修改了显示作业时，同类型的题目显示的是一样的bug，原因应该是jQuery load方法载入 的模板中的js编译问题，具体原理尚不明确，将js赋值改成了jsp获取赋值的方式
- 发布作业页面新增了选题功能
- 发布作业页面新增了选择作业对象功能，但是尚存在小bug,比如选择全体成员时应显示“全体成员”而不是实际的所有人；还有就是当既选中了“全体成员”，又选中了其它的人时，浏览器会崩溃，原因尚不明。来年见~ 2019/1/26
