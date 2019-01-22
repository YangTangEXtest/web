<%--
  Created by IntelliJ IDEA.
  User: 刘艳萍
  Date: 2019/1/20
  Time: 11:34
  老师发布作业或者修改作业，但是修改作业那部分还没完成。
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8" />
    <title>发布作业</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--     <script type="text/javascript" href="js/test_publish_hw.js"></script> -->
    <link rel="stylesheet" type="text/css" href="css/publish_zy.css">
    <script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.json.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script type="text/javascript" src="js/publishHomework.js"></script>
</head>
<body>
<!--  <h2 align="center" id="pag e-title">第一次个人作业</h2> -->

<div class="container">
    <div class="row clearfix" id="div_descripthon"></div>
</div>

<div class="container">
    <div id="div_questions">

    </div>
</div>

<div class="container">
    <div id="add_question_container">
        <button class="btn" onclick="add_question()">添加题目</button>
        <button class="btn" onclick="choose_question()" id="choose_question">题库选题</button>
        <button class="btn" onclick="submit_problem()" id="update_or_submit">更新作业</button>
        <!-- 添加题目编辑弹出框 -->
        <div class="question_cont_container" id="modal-container-edit-question">

            <div class="edit_container_header">
                <button type="button" class="close" onclick="click_close()">×</button>
                <h4 class="edit_title" id="modify-hw">修改题目</h4>
            </div>

            <div class="edit_container_body">
                <form action="">

                    <div class="form_line" id="hw_q_type">
                        <label class="before_label">题型</label>
                        <div class="after_div">
                            <label><input type="radio" name="hwtype" id="hwtype_0" onclick="changeHWType(0)" checked/>选择题</label>&nbsp;&nbsp;&nbsp;
                            <label><input type="radio" name="hwtype" id="hwtype_1" onclick="changeHWType(1)"/>判断题</label>&nbsp;&nbsp;&nbsp;
                            <label><input type="radio" name="hwtype" id="hwtype_2" onclick="changeHWType(2)"/>填空题</label>&nbsp;&nbsp;&nbsp;
                            <label><input type="radio" name="hwtype" id="hwtype_3" onclick="changeHWType(3)"/>问答题</label>
                        </div>
                    </div>

                    <%--<div class="form_line">
                        <label class="before_label">标题</label>
                        <div class="after_div">
                            <input type="text" class="input_cont" id="hw-title" />
                        </div>
                    </div>--%>

                    <div class="form_line" id="hw_hint">
                        <label class="col-sm-12" align="right">*请在需要填空的位置用“{block}”（不包括引号）代替</label>
                    </div>

                    <div class="form_line">
                        <label class="before_label">内容</label>
                        <div class="after_div">
                            <input type="text" class="input_cont" id="hw-content" />
                        </div>
                    </div>

                    <div class="form_line" id="choice_A">
                        <label class="before_label">选项A</label>
                        <div class="after_div">
                            <input type="text" class="input_cont" id="hw-choice-A" />
                        </div>
                    </div>

                    <div class="form_line" id="choice_B">
                        <label class="before_label">选项B</label>
                        <div class="after_div">
                            <input type="text" class="input_cont" id="hw-choice-B" />
                        </div>
                    </div>

                    <div class="form_line" id="choice_C">
                        <label class="before_label">选项C</label>
                        <div class="after_div">
                            <input type="text" class="input_cont" id="hw-choice-C" />
                        </div>
                    </div>

                    <div class="form_line" id="choice_D">
                        <label class="before_label">选项D</label>
                        <div class="after_div">
                            <input type="text" class="input_cont" id="hw-choice-D" />
                        </div>
                    </div>

                    <div class="form_line" id="answer_choice">
                        <label class="before_label">答案</label>
                        <div class="after_div">
                            <label><input type="radio" name="hwchoice" id="hw-ans-A"/>A</label>&nbsp;&nbsp;&nbsp;
                            <label><input type="radio" name="hwchoice" id="hw-ans-B"/>B</label>&nbsp;&nbsp;&nbsp;
                            <label><input type="radio" name="hwchoice" id="hw-ans-C"/>C</label>&nbsp;&nbsp;&nbsp;
                            <label><input type="radio" name="hwchoice" id="hw-ans-D"/>D</label>&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>

                    <div class="form_line" id="answer_tail">
                        <label class="before_label">答案</label>
                        <div class="after_div">
                            <label><input type="radio" name="hwtail" id="hw-ans-T"/>T</label>&nbsp;&nbsp;&nbsp;
                            <label><input type="radio" name="hwtail" id="hw-ans-F"/>F</label>&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>

                    <div class="form_line">
                        <label class="before_label">分值</label>
                        <div class="after_div">
                            <input type="text" class="input_cont" id="hw-score" />
                        </div>
                    </div>

                </form>
            </div>
            <!-- end of edit_container_body -->
            <div class="edit_container_footer">
                <button type="button" class="btn" id="btn_giveup" onclick="click_close()">取消</button>
                <button type="button" class="btn" id="btn_delete" onclick="delete_question_btn()">删除</button>
                <button type="button" class="btn" id="btn_submit" onclick="modify_question_btn()">提交</button>
            </div>
        </div>

        <!-- 从题库中选题编辑弹出框 -->
        <div id="chooseQuestion" class="question_cont_container" >
            <!-- 选题弹出编辑框header -->
            <div class="edit_container_header">
                <button type="button" class="close" onclick="click_close()">×</button>
                <h4 class="edit_title">选题</h4>
            </div>
            <div id="chooseTips">
                <select name="chooseType" id="chooseType">
                    <option value="choice">选择题</option>
                    <option value="blank">填空题</option>
                    <option value="judge">判断题</option>
                    <option value="shortAnswer">简答题</option>
                </select>
                <button class="btn" id="getHomework" onclick="getHomework()">选题</button>
            </div>
            <div class="edit_container_body" id="chooseContainerBody">

            </div>
            <!-- 选题弹出编辑框footer -->
            <div class="edit_container_footer" id="chooseFooter">
                <button type="button" class="btn" id="chooseHomework" onclick="pushTikuToHomework()">确定</button>
            </div>

        </div>
    </div>
</div>

</body>
</html>
