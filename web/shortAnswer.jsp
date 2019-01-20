<%--
  Created by IntelliJ IDEA.
  User: 刘艳萍
  Date: 2019/1/17
  Time: 20:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript">
        <%String name=request.getParameter("name");%>
        var name="<%=name%>";
        $(".num_shortAnswer").text(name+".");

        <%String describe=request.getParameter("describe");%>
        var describe="<%=describe%>";
        $(".zy_cont_shortAnswer").text(describe);
    </script>
</head>
<body>
<sapn class="num num_shortAnswer">3.</sapn>
<span class="zy_cont zy_cont_shortAnswer">你觉得村上春树的作品好在哪？请简述你的个人理解。</span>
<br><br>
<span>答案：</span>
<br>
<textarea name="short_as_answer1" class="short_as_answer"></textarea>
</body>
</html>
