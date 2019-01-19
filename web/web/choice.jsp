<%--
  Created by IntelliJ IDEA.
  User: 刘艳萍
  Date: 2019/1/17
  Time: 16:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript">
        <%String name=request.getParameter("name");%>
        var name="<%=name%>";
        $(".num_choice").text(name+".");

        <%String describe=request.getParameter("describe");%>
        var describe="<%=describe%>";
        $(".zy_cont_choice").text(describe);

        <%String choiceA=request.getParameter("choiceA");%>
        var choiceA="<%=choiceA%>";
        $(".optionA").text(choiceA);

        <%String choiceB=request.getParameter("choiceB");%>
        var choiceB="<%=choiceB%>";
        $(".optionB").text(choiceB);

        <%String choiceC=request.getParameter("choiceC");%>
        var choiceC="<%=choiceC%>";
        $(".optionC").text(choiceC);

        <%String choiceD=request.getParameter("choiceD");%>
        var choiceD="<%=choiceD%>";
        $(".optionD").text(choiceD);
        //alert(name);
    </script>
</head>
<body>
    <span class="num num_choice" id="name"></span>
    <span class="zy_cont zy_cont_choice" id="describe">

    </span>
    <br>
    <input type="radio" name="choice" value="A" class="option">
        <span class="optionA"></span>
    <br>
    <input type="radio" name="choice" value="B" class="option">
        <span class="optionB"></span>
    <br>
    <input type="radio" name="choice" value="C" class="option">
        <span class="optionC"></span>
    <br>
    <input type="radio" name="choice" value="D" class="option">
        <span class="optionD"></span>
    <br>
    <input type="hidden" name="radio">
    </body>
</html>
