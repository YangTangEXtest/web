//显示课程基本信息
function showClassInfo(cname,ctime,cteacher,cbook){
	html = '';
	html += '<p><b>课程名称：</b>&nbsp;'+cname+'</p>';
	html += '<p><b>开课时间：</b>&nbsp;'+ctime+'</p>';
	html += '<p><b>任课老师：</b>&nbsp;'+cteacher+'</p>';
	html += '<p><b>教材科本：</b>&nbsp;'+cbook+'</p>';
	$("#classInfo").append(html);
}

$(document).ready(function(){
	var request  = {};
	var jsonStr = $.toJSON(request);

	//请求数据
	postJSON("submitlist.java",jsonStr,function showResponse(response){
		//测试数据
		response = {
			"username": "Yang",
			"usertype": "teacher",
			"userID": "01",
			"cname":"数据结构",
			"ctime":" 2018-2019学期，第一周到十六周",
			"cteacher":"Yang老师",
			"cbook":"《计算机网络》",
			"hwTitle":"第1次个人在线作业",
			"submitList": [{
					"stuNum": "2018120264",
					"stuName": "牛叉叉的秦神",
					"submitStatus": "1",
					"submit_time": "2018-10-28 10:17:06"
				},
				{
					"stuNum": "2018120264",
					"stuName": "牛叉叉的秦神",
					"submitStatus": "1",
					"submit_time": "2018-10-28 10:17:06"
				},
				{
					"stuNum": "2018120264",
					"stuName": "牛叉叉的秦神",
					"submitStatus": "1",
					"submit_time": "2018-10-28 10:17:06"
				},
				{
					"stuNum": "2018120264",
					"stuName": "牛叉叉的秦神",
					"submitStatus": "1",
					"submit_time": "2018-10-28 10:17:06"
				},
				{
					"stuNum": "2018120264",
					"stuName": "牛叉叉的秦神",
					"submitStatus": "0",
					"submit_time": "2018-10-28 10:17:06"
				}
			]
		};

		$("#classInfo").empty();
		showClassInfo(response.cname,response.ctime,response.cteacher,response.cbook);

		$("#subList").empty();
		var html = '';
		html += '<tr>';
		html += '<th>学生学号</th>';
		html += '<th>学生姓名</th>';
		html += '<th>提交状态</th>';
		html += '<th>提交时间</th>';
		html += '<th>操作</th>';
		html += '</tr>';
		var submitList = response.submitList;
		for(var i = 0;i < submitList.length; i++){
			html += '<tr>';
			html += '<td>'+submitList[i].stuNum+'</td>';
			html += '<td>'+submitList[i].stuName+'</td>';
			html += '<td>'+submitList[i].submitStatus+'</td>';
			if (submitList[i].submitStatus == "0") {
				html += '<td>00/00/00 00:00:00</td>';
				html += '<td></td>';
			} else {
				html += '<td>'+submitList[i].submit_time+'</td>';
				html += '<td>'+submitList[i].stuNum+'</td>';
			}
			
			html += '</tr>';
		}
		$("#subList").html(html);



	});
})