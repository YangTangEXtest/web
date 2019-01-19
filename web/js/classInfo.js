//显示课程基本信息
function showClassInfo(cname,ctime,cteacher,cbook){
	html = '';
	html += '<p><b>课程名称：</b>&nbsp;'+cname+'</p>';
	html += '<p><b>开课时间：</b>&nbsp;'+ctime+'</p>';
	html += '<p><b>任课老师：</b>&nbsp;'+cteacher+'</p>';
	html += '<p><b>教材科本：</b>&nbsp;'+cbook+'</p>';
	$("#classInfo").append(html);
}

//显示作业列表
function showhwList(hwid,hwname,begin_time,end_time,finish_time,hw_type,hw_weight,finish_num){
	html = '';
	html += '<div class="hwList">';
	html += '<h4 class="hwlistTitle">&nbsp;&nbsp;'+hwname+'</h4>';
	html += '<div class="hwlistInfo">';
	html += '<div class="hwlistInfo_left">';
	html += '<p>起始时间：'+begin_time+'</p>';
	html += '<p>起始时间：'+end_time+'</p>';
	html += '<p>起始时间：'+finish_time+'</p>';
	html += '</div>';
	html += '<div class="hwlistInfo_right">';
	html += '<p>作业类型：'+hw_type+'</p>';
	html += '<p>作业类型：'+hw_weight+'</p>';
	html += '<p>作业类型：'+finish_num+'</p>';
	html += '</div>';
	html += '</div>';
	html += '<p class="hwlistOperate">';
	html += '<button><a href="modify.html?hwid='+hwid+'">批改作业</a></button>';
	html += '<button><a href="delete.html?hwid='+hwid+'">删除作业</a></button>';
	html += '<button><a href="edit.html?hwid='+hwid+'">编辑作业</a></button>';
	$("#classhwList").append(html);
}


$(document).ready(function(){
	var request = {};
	var jsonStr = $.toJSON(request);

	//请求数据
	postJSON("hwList.java",jsonStr,function showResponse(response){
		//测试数据
		response = {
			"username": "Yang",
			"usertype": "teacher",
			"userID": "01",
			"cname":"数据结构",
			"ctime":" 2018-2019学期，第一周到十六周",
			"cteacher":"Yang老师",
			"cbook":"《计算机网络》",
			"hwList": [{
					"hwid": "111",
					"hwname": "第一次个人在线作业",
					"begin_time": "2018-10-28 10:17:06",
					"end_time": "2018-10-28 10:17:06",
					"finish_time": "2018-10-28 10:17:06",
					"hw_type": "个人在线作业",
					"hw_weight": "2%",
					"finish_num": "29/30"
				},
				{
					"hwid": "111",
					"hwname": "第一次个人在线作业",
					"begin_time": "2018-10-28 10:17:06",
					"end_time": "2018-10-28 10:17:06",
					"finish_time": "2018-10-28 10:17:06",
					"hw_type": "个人在线作业",
					"hw_weight": "2%",
					"finish_num": "29/30"
				},
				{
					"hwid": "111",
					"hwname": "第一次个人在线作业",
					"begin_time": "2018-10-28 10:17:06",
					"end_time": "2018-10-28 10:17:06",
					"finish_time": "2018-10-28 10:17:06",
					"hw_type": "个人在线作业",
					"hw_weight": "2%",
					"finish_num": "29/30"
				},
				{
					"hwid": "111",
					"hwname": "第一次个人在线作业",
					"begin_time": "2018-10-28 10:17:06",
					"end_time": "2018-10-28 10:17:06",
					"finish_time": "2018-10-28 10:17:06",
					"hw_type": "个人在线作业",
					"hw_weight": "2%",
					"finish_num": "29/30"
				},
				{
					"hwid": "111",
					"hwname": "第一次小组作业",
					"begin_time": "2018-10-28 10:17:06",
					"end_time": "2018-10-28 10:17:06",
					"finish_time": "2018-10-28 10:17:06",
					"hw_type": "个人在线作业",
					"hw_weight": "2%",
					"finish_num": "29/30"
				}
			]
		};
		$("#classInfo").empty();
		showClassInfo(response.cname,response.ctime,response.cteacher,response.cbook);
		$("#classhwList").empty();
		var hwList = response.hwList;
		for(var i = 0;i < hwList.length;i++){
			showhwList(hwList[i].hwid,hwList[i].hwname,hwList[i].begin_time,hwList[i].end_time,hwList[i].finish_time,hwList[i].hw_type,hwList[i].hw_weight,hwList[i].finish_num);
		}

	});

	//两个显示隐藏函数——待整理，无法解决onclick函数未定义问题。
	$("#classhwList").hide();
	$("#classNoticeList").hide();
	$("#hwlistTitle").click(function(){
		$("#classhwList").slideToggle();
	});
	$("#cNoticeTitle").click(function(){
		$("#classNoticeList").slideToggle();
	});

});