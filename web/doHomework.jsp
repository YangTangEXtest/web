<%--
  Created by IntelliJ IDEA.
  User: 刘艳萍
  Date: 2019/1/15
  Time: 14:49
  学生做作业页面
  File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>学生作业页面</title>
    <script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.json.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script type="text/javascript" src="js/doHomework.js"></script>
    <link rel="stylesheet" type="text/css" href="css/zy_cont.css">
    <link rel="stylesheet" type="text/css" href="css/zyInfo.css">
    <link rel="stylesheet" href="css/blank_cont.css">
</head>
<body>
<jsp:include page="header.jsp"></jsp:include>

<!-- Homework content begin -->
<div id="container">
    <%--<h3 class="zy_title">这是一份试卷吧</h3>--%>
    <%--作业的基本信息--%>
    <div id="zyInfo">

    </div>

    <div id="zy_show">
        <!-- Choice content begin -->
        <div id="zy_choice">
            <%--<h4 class="zy_type">选择题：</h4>--%>
        </div>
        <!-- Choice content end -->

        <!-- Blank content begin -->
        <div id="zy_blank">
            <%--<h4 class="zy_type">填空题：</h4>--%>
        </div>
        <!-- Blank content end -->

        <!-- Judge content begin -->
        <div id="zy_judge">
            <%--<h4 class="zy_type">判断题：</h4>--%>
        </div>
        <!-- Judge content end -->

        <!-- ShortAnswer content begin -->
        <div id="zy_short_answer">
            <%--<h4 class="zy_type">简答题：</h4>--%>
        </div>
        <!-- ShortAnswer content end -->


    </div>
    <br />
    <button class="zy_type" id="btn" onclick="submit()">提交</button>
</div>
<!-- Homework content end -->
<jsp:include page="footer.jsp"></jsp:include>
</body>
</html>
