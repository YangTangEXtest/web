<%--
  Created by IntelliJ IDEA.
  User: 刘艳萍
  Date: 2019/1/17
  Time: 16:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript">
        <%String name=request.getParameter("name");%>
        var name="<%=name%>";
        $(".num_judge").text(name+".");

        <%String describe=request.getParameter("describe");%>
        var describe="<%=describe%>";
        $(".zy_cont_judge").text(describe);
    </script>
</head>
<body>
<span class="num num_judge"></span>
<span class="zy_cont zy_cont_judge">

</span>
<br>
<input type="radio" name="judge" value="T" class="judge_option">
&nbsp;T
<br>
<input type="radio" name="judge" value="F" class="judge_option">
&nbsp;F
</body>
</html>
