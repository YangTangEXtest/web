<%--
  Created by IntelliJ IDEA.
  User: 刘艳萍
  Date: 2019/1/15
  Time: 21:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript">
        <%String conId=request.getParameter("conId");%>
        var conId="<%=conId%>";
        //alert(conId);
    </script>
</head>
<body>
<div id="footercont">
    <h3 id="footer_title"><a href="http://144.202.125.228:9000">作业管理平台</a></h3>
    <ul class="menu_ul menu_ul_1">
        <a href="http://144.202.125.228:9000/article/4"><li class="menu_li">关于我们</li></a>
        <a href="http://144.202.125.228:9000/article/4"><li>联系我们</li></a>
        <a href="http://144.202.125.228:9000/article/4"><li>加入我们</li></a>
    </ul>
    <ul class="menu_ul menu_ul_2">
        <a href="http://144.202.125.228:9000/article/4"><li class="menu_li">友情链接</li></a>
        <a href="http://144.202.125.228:9000/article/4"><li>九栋401</li></a>
    </ul>
    <ul class="menu_ul menu_ul_3">
        <a href="http://144.202.125.228:9000/article/4"><li class="menu_li">移动客户端</li></a>
        <a href="http://144.202.125.228:9000/article/4"><li>移动端下载 <img id="down_2d" src="images/footer_images/2d_big.jpg" alt="The images is gone!"></li></a>
    </ul>
    <img id="line1" src="images/footer_images/line.png" alt="The images is gone!">
    <ul class="menu_ul menu_ul_4">
        <li></li>
        <a href="http://144.202.125.228:9000/article/4"><li class="menu_li">关注我们</li></a>

        <a href="http://144.202.125.228:9000/article/4"><li>官方QQ:1547643079</li></a>

        <a href="http://144.202.125.228:9000/article/4"><li>官方微信:<img id="min_2d" src="images/footer_images/2dmin.png" alt="The images is gone!"></li></a>
        <li></li>
    </ul>
    <img id="line2" src="images/footer_images/line.png" alt="The images is gone!">
</div>


<p id="copyright">Powered By :<a href="https://www.scuec.edu.cn/s/48/t/1737/ba/16/info47638.htm">TangYang</a></p>
</body>
</html>
