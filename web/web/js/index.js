//点击课程跳转课程详情页
function selectClass(cid) {
	self.location = "classInfo.html?cid=" + cid;
}

//生成课程列表
function addClass(cname,college,ctype,plan,cid) {
	html = '';
	html +='<div class="cell">';
	html +='<h4>'+college+" "+ctype+' </h4>';
	html +='<h2 onclick="selectClass('+cid+')">'+cname+'</h2>';
	html +='<p>'+plan+'</p>';
	html +='</div>';
	$("#listCont").append(html);

}

$(document).ready(function() {
	var request = {};
	var jsonStr = $.toJSON(request);

	postJSON("classList.java",jsonStr,function showResponse(response){
		//测试数据
		response = {
			"username": "Yang",
			"usertype": "teacher",
			"userID": "01",
			"classList": [{
					"cid": "111",
					"cname": "数据结构",
					"college": "计算机科学学院",
					"ctype": "专业必修",
					"cplan": "真正能帮人解决精神危机的，真正能帮人移除情绪上的路障的，只有一样东西，那就是稳定且疏密有致的生活轨道。"
				},
				{
					"cid": "112",
					"cname": "高等数学",
					"college": "数学与统计学院",
					"ctype": "基础必修",
					"cplan": "纵欲所带来的快乐都太肤浅太短暂了。纯粹的享乐只会带来纯粹的无聊，纯粹的无聊只会伴生纯粹的痛苦。"
				},
				{
					"cid": "102",
					"cname": "Linux",
					"college": "计算机科学学院",
					"ctype": "专业选修",
					"cplan": "低级的快乐离高级的快乐很远，高级的痛苦离高级的快乐更近。自律即自由！"
				},
				{
					"cid": "129",
					"cname": "计算机网络",
					"college": "计算机科学学院",
					"ctype": "专业必修",
					"cplan": "逆来顺受，你说我的生命可惜，我自己却不在乎。你看着危险，我却自己以为得意，不得意怎么样？人生是苦多乐少。"
				},
				{
					"cid": "009",
					"cname": "计算机专业英语",
					"college": "计算机科学学院",
					"ctype": "专业必修",
					"cplan": " 真正的诗意都存续于黑暗之中，灯光室友体积和重量的，大开着灯会挤压屋内空间，而关掉灯，空间就可以延伸为无限大。"
				}
			]
		};
		$("#listCont").empty();
		var classList = response.classList;
		for(var i = 0;i < classList.length;i++){
			addClass(classList[i].cname,classList[i].college,classList[i].ctype,classList[i].cplan,classList[i].cid);

		}

		$("#username").text(response.username);
		if (response.usertype == "teacher") {
			$("#usertype").text("老师");
		} else if(response.usertype == "student"){
			$("#usertype").text("同学");
		}

		var oDate = new Date();
		if (oDate.getHours() < 6) {
			$("#greet").text(",注意休息，深夜好！");
		} else if (oDate.getHours() < 8) {
			$("#greet").text(",新的一天，早上好！");
		} else if (oDate.getHours() < 12) {
			$("#greet").text(",新的一天，上午好！");
		} else if (oDate.getHours() < 14) {
			$("#greet").text(",新的一天，中午好！");
		} else if (oDate.getHours() < 17) {
			$("#greet").text(",新的一天，下午好！");
		} else if (oDate.getHours() < 19) {
			$("#greet").text(",新的一天，黄昏好！");
		} else if (oDate.getHours() < 19) {
			$("#greet").text(",新的一天，晚上好！");
		}else{
			$("#greet").text(",注意休息，深夜好！");
		}

		document.cookie = "username="+response.username;
		document.cookie = "usertype="+response.usertype;

		
	});
});