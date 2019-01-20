<%--
  Created by IntelliJ IDEA.
  User: 刘艳萍
  Date: 2019/1/17
  Time: 20:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="js/header.js"></script>
    <link rel="stylesheet" type="text/css" href="css/header.css">
</head>
<body>
<header>

    <!-- page menu begin-->
    <div id="menu">
        <ul>
            <li>首页</li>
            <li>|</li>
            <li>我的作业</li>
        </ul>
    </div>
    <!-- page menu end -->

    <!-- user info begin -->
    <div id="user_info">
        <div id="user_logo">
            <img id="user_img" src="images/renqi.png" alt="user images">
        </div>
        <div id="hover_user">
            <div id="hover_name">
                <img id="hover_user_logo" src="images/renqi.png" alt="hover user images">
                <span>
						<a href="">牛叉叉的秦神</a>
					</span>
            </div>

            <p>
                <img src="images/mess.png">
                <span><a href="">个人中心</a></span>
            </p>
            <p>
                <img src="images/logout.png">
                <span><a href="">退出登录</a></span>
            </p>

        </div>
    </div>
    <!-- user info end -->

</header>
<!-- header end -->
</body>
</html>
