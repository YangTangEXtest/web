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
    <%--<script type="text/javascript">--%>
        <%--<%String name=request.getParameter("name");%>--%>
        <%--var name="<%=name%>";--%>
        <%--$(".num_blank").text(name+".");--%>

        <%--<%String describe=request.getParameter("describe");%>--%>
        <%--var describe="<%=describe%>";--%>
        <%--$(".zy_cont_blank").text(describe);--%>
    <%--</script>--%>
</head>
<body>
<div id="mubanBlank">
<sapn class="num num_blank"><%=request.getParameter("name")%></sapn>
<span class="zy_cont zy_cont_blank"><%=request.getParameter("describe")%></span>
<br><br>
<form>
<span>答案：</span><input type="text" name="blank" class="blank_answer"/>
</form>
</div>
</body>
</html>
