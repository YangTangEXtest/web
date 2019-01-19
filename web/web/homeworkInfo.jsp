<%--
  Created by IntelliJ IDEA.
  User: 刘艳萍
  Date: 2019/1/18
  Time: 19:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript">
        //作业名称
        <%String name=request.getParameter("name");%>
        var name="<%=name%>";
        $("#hwtitle").text(name);

        //开始时间
        <%String begin_t=request.getParameter("begin_t");%>
        var begin_t="<%=begin_t%>";
        $(".hwifdt_left").children(":first").text("起始时间："+begin_t);


        <%--<%String end_t=request.getParameter("end_t");%>--%>
        <%--var end_t="<%=begin_t%>";--%>
        <%--var first=$(".hwifdt_left").children(":first");--%>
        <%--first.next().text(end_t);--%>

        //结束时间
        <%String end_t=request.getParameter("end_t");%>
        var end_t="<%=end_t%>";
        $(".hwifdt_left").children(":last").text("截止时间："+end_t);

        //作业类型
        <%String type=request.getParameter("type");%>
        var type="<%=type%>";
        if(type == "O"){
            type = "个人在线作业";
        } else if(type == "F"){
            type = "个人离线作业";
        }else{
            type = "小组作业";
        }
        $(".hwifdt_right").children(":first").text("作业类型："+type);

        //作业比重
        <%String score_weight=request.getParameter("score_weight");%>
        var score_weight="<%=score_weight%>";
        $(".hwifdt_right").children(":last").text("作业比重："+score_weight);


    </script>
</head>
<body>
<h2 class="hw_title" id="hwtitle"></h2>
<div class="pb_container">
    <h4 id="hw_info" class="hw_title">&nbsp;&nbsp;作业信息：</h4>
    <div id="hw_info_detail">
        <div class="hwifdt_left">
            <p></p>
            <%--<p>截止时间：2019-01-18 16:55:18</p>--%>
            <p></p>
        </div>
        <div class="hwifdt_right">
            <p></p>
            <p></p>
            <%--<p>完成人数：0/班级人数（class_info.student_num）</p>--%>
        </div>
    </div>
    <p id="edit_hwinfo" class="hw_title">编辑&nbsp;&nbsp;</p>
</div>
</body>
</html>
