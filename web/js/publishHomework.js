
      //获取URL地址中的参数
      function getRequest(){

        console.log("执行了getRequest()函数，获取URL中的参数返回");

        var url = window.location.search;
        var theRequest = new Object();
        if (url.indexOf("?") == 0) {
          var str = url.substr(1);//str为：clid=1&type=publish
          strs = str.split("&");//strs为：clid=1,type=publish
          for (var i = 0; i < strs.length; i++){
            theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
          }
          return theRequest;
        }//end of if
      }//end of getRequest()

      //获取班级信息
      function get_class_info(){

        console.log("执行了get_class_info(),通过postJSON()获得班级信息");

        var req = {clid:clid};

        var jsonStr = $.toJSON(req);

        /*测试数据begin*/
        var jsonStr = req;
        //console.log("jsonStr为："+jsonStr);
        /*测试数据end*/

        /*postJSON("class.java",jsonStr,function showResponse(response) {*/
         /* class_info = response.body;*/
          if (type == "edit") {
            if (hid == undefined) {
              return;
            }
            $("#update_or_submit").text("更新作业");
            get_show_homework();
          } else {
            $("#update_or_submit").text("提交作业");
            homework = {
              type: "O",
              name: "新建个人在线作业",
              begin_t: getNowFormDate(),
              end_t: getNowFormDate(),
              hard_ddl:getNowFormDate(),
              score_face: 0,
              score_weight: 0,
              finish_number: 0
            };
            homework.homework = new Array();
            questions = homework.homework;
            showDescription(homework);
          }
        /*})*///end of postJSON
      }//end of get_class_info()

      //通过JSON进行数据传输
      function postJSON(url,jsonStr,successFunction,async=true,dataType="json",contentType="application/text"){
        
        console.log("执行了postJSON（），传过去的数据是"+jsonStr);

        $.ajax({
          url:url,
          type:'POST',
          async:async,
          data:jsonStr,
          processData:false,
          dataType:dataType,
          contentType:contentType,
          success:function(response,status,xhr) {
            var response;
            if (dataType != "json") {
              response = $.parseJSON(response);
            }
            if (status != "success") {
              alert("未知错误");
            } else if (response['code'] != 0) {
              alert("错误"+response['code']+":"+response['msg']);
            } else{
              successFunction(response);
            }
          },
          error : function(xhr,error,exception) {
            alert("postJSON失败"+exception.toString());
          }
        });//end of ajax
      }//end of postJSON

      //获取时间信息
      function getNowFormDate() {

        console.log("执行了函数：getNowFormDate()");

        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth()+1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <=9) {
          strDate = "0" + strDate;
        }
        var strHour = date.getHours();
        var strMin = date.getMinutes();
        var strSec = date.getSeconds();
        if (strHour >= 0 && strHour <=9) {
          strHour = "0" + strHour;
        }
        if (strMin >= 0 && strMin <=9) {
          strMin = "0" + strMin;
        }
        if (strSec >= 0 && strSec <= 9) {
          strSec = "0" + strSec;
        }

        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " +strHour + seperator2 + strMin + seperator2 + strSec;
        return currentdate;
      }//end function getNowFormDate

      //显示作业概览信息
      function showDescription(hw){

        console.log("执行了函数：showDescription(hw)");

        var color;
        var typestr;
        var strnow = getNowFormDate();
        if (strnow < hw.begin_t) {
          color = "330099";
        } else if (strnow < hw.hard_ddl) {
          color = "ff0000";
        } else {
          color = "66666";
        }
        switch (hw.type) {
          case "O": 
            typestr = "个人在线作业";
            break;
          case "F":
            typestr = "个人离线作业";
            break;
          case "G":
            typestr = "小组离线作业";
            break;
        }
        $("#div_descripthon").empty();
        html = '<h2 class="hw_title" id="hwtitle">'+hw.name+'</h2>';
        html += '     <div class="pb_container">';
        html += '       <h4 id="hw_info" class="hw_title">&nbsp;&nbsp;作业信息：</h4>';
        html += '       <div id="hw_info_detail">';
        html += '         <div class="hwifdt_left">';
        html += '           <p>起始时间：'+hw.begin_t+'</p>';
        html += '           <p>截止时间：'+hw.end_t+'</p>';
        html += '           <p>终止时间：'+hw.hard_ddl+'</p>';
        html += '         </div>';
        html += '         <div class="hwifdt_right">';
        html += '           <p>作业类型：'+typestr+'</p>';
        html += '           <p>作业比重：'+hw.score_face+'</p>';
        html += '           <p>完成人数：'+hw.finish_number+'</b>/'+'班级人数（class_info.student_num）'+'</p>';
        html += '         </div>';
        html += '       </div>';
        html += '       <p id="edit_hwinfo" class="hw_title">编辑&nbsp;&nbsp;</p>';
        html += '     </div>';
        /*console.log("生成的html:"+html);*/
        $("#div_descripthon").append(html);
      }//end of showDescription

      //添加题目
      function add_question() {

        console.log("执行了add_question()函数");

        current_question = -1;
        console.log("current_question的值："+current_question);

        $("#btn_delete").attr("disabled",true);
        emptyEmptyEditWindow();
        if (homework.type == "O") {
          changeHWType("0");
        } else {
          changeHWType("4");
        }
        $("#modify-hw").text("添加题目");
      }//end of add_question()

      //清空输入框
      function emptyEmptyEditWindow() {

        console.log("执行了函数：emptyEmptyEditWindow()");

        $("#hw-title").val("");
        $("#hw-content").val("");
        $("#hw-choice-A").val("");
        $("#hw-choice-B").val("");
        $("#hw-choice-C").val("");
        $("#hw-choice-D").val("");
        $("#hw-score").val("");
        $("#hw-ans-A").prop("checked",true);
        $("#hw-ans-T").prop("checked",true);
      }//end of emptyEmptyEditWindow()

      //关闭题目编辑框
      
      function click_close(){
        emptyEmptyEditWindow();
        $("#modal-container-edit-question").fadeOut();
      }
      //显示不同类型作业的题目输入界面
      function changeHWType(HWtype) {

        console.log("执行了函数：changeHWType()");

        $("#hwtype_"+HWtype).prop("checked",true);
        if (HWtype == '0') {
          $("#hw_q_type").css("display","block");
          $("#hw_hint").css("display","none");
          $("#choice_A").css("display","block");
          $("#choice_B").css("display","block");
          $("#choice_C").css("display","block");
          $("#choice_D").css("display","block");
          $("#answer_choice").css("display","block");
          $("#answer_tail").css("display","none");
          $("#hw-ans-A").prop("checked",true);
        } else if (HWtype == '1') {
          $("#hw_q_type").css("display","block");
          $("#hw_hint").css("display","none");
          $("#choice_A").css("display","none");
          $("#choice_B").css("display","none");
          $("#choice_C").css("display","none");
          $("#choice_D").css("display","none");
          $("#answer_choice").css("display","none");
          $("#answer_tail").css("display","block");
          $("#hw-ans-T").prop("checked",true);
        } else if (HWtype == '2') {
          $("#hw_q_type").css("display","block");
          $("#hw_hint").css("display","block");
          $("#choice_A").css("display","none");
          $("#choice_B").css("display","none");
          $("#choice_C").css("display","none");
          $("#choice_D").css("display","none");
          $("#answer_choice").css("display","none");
          $("#answer_tail").css("display","none");
        } else if (HWtype == '3') {
          $("#hw_q_type").css("display","block");
          $("#hw_hint").css("display","none");
          $("#choice_A").css("display","none");
          $("#choice_B").css("display","none");
          $("#choice_C").css("display","none");
          $("#choice_D").css("display","none");
          $("#answer_choice").css("display","none");
          $("#answer_tail").css("display","none"); 
        } else {
          $("#hw_q_type").css("display","none");
          $("#hw_hint").css("display","none");
          $("#choice_A").css("display","none");
          $("#choice_B").css("display","none");
          $("#choice_C").css("display","none");
          $("#choice_D").css("display","none");
          $("#answer_choice").css("display","none");
          $("#answer_tail").css("display","none");
        }

        //显示添加题目输入框
        $("#modal-container-edit-question").fadeIn();
      }//end of changeHWType()

      //点击提交按钮，修改题目
      function modify_question_btn() {

        console.log("执行了函数:modify_question_btn()");
        var cur = current_question;
        console.log("cur的值："+cur);
        current_question = -1;
        console.log("current_question的值："+current_question);
        modify_question(cur);
        click_close();

      }//end of modify_question_btn()

      //添加题目
      function modify_question(qid) {

        console.log("执行了函数:modify_questions(),参数为："+qid);

        if (qid == -1) {
          questions.push({});
          change_data(questions.length-1);
          show_questions();
        }
        for (var i = 0; i < questions.length; i++){
          if (questions[i].qid == qid) {
            change_data(i);
            show_questions();
            return;
          }
        }
      }//end of modify_question()

      // change_data(i)获取到输入的题目的内容
      function change_data(i) {

        console.log("执行了函数change_data("+i+")");

        questions[i] = {};
        questions[i].qid = questions.length;
        if (homework.type == "O") {
          for (var j = '0'; j <= '3'; j++){
            if ($("#hwtype_"+j).prop("checked")) {
              questions[i].type = j;
              break;
            }
          }
        }else{
          questions[i].type = 4;
        }
        console.log("questions["+i+"]的值为"+questions[i].type);

        questions[i].name = $("#hw-title").val();
        questions[i].describe = $("#hw-content").val();
        questions[i].score = $("#hw-score").val();

        if (questions[i].type == '0' || questions[i].type == 0) {
          questions[i].choiceA = $("#hw-choice-A").val();
          questions[i].choiceB = $("#hw-choice-B").val();
          questions[i].choiceC = $("#hw-choice-C").val();
          questions[i].choiceD = $("#hw-choice-D").val();
          if ($("#hw-ans-A").prop("checked")) {
            questions[i].answer = 'A';
          } else if ($("#hw-ans-B").prop("checked")) {
            questions[i].answer = 'B';
          } else if ($("#hw-ans-C ").prop("checked")) {
            questions[i].answer = 'C ';
          } else {
            questions[i].answer = 'D';
          }

        } else if (questions[i].type == "1"){
          if ($("#hw-ans-T").prop("checked")) {
            questions[i].answer = "T";
          } else {
            questions[i].answer = "F";
          }
        }

      }//end of change_data()

      //显示题目内容
      function show_questions(){

        console.log("执行了函数:show_questions()");

        $("#div_questions").empty();
        var total_score = 0;
        for (var i = 0; i < questions.length; i++){
          addQuestion(questions[i]);
          total_score += parseInt(questions[i].score);
        }
        homework.score_face = total_score;
        $("#hw_show_score_face").text(total_score);
      }// end of showquestion()

      //显示题目内容
      function addQuestion(q) {

        console.log("执行了函数：addQuestion(),参数为:"+q);
        var html;
        var qType;
        var s;

        switch (q.type) {
          case '0':case 0:
            qType = "选择题";
            console.log(qType);
            break;
          case '1':case 1:
            qType = "判断题";
            console.log(qType);
            break;
          case '2':case 2:
            qType = "填空题";
            console.log(qType);
            break;
          case '3':case 3:
            qType = "简答题";
            console.log(qType);
            break;
          case '4':case 4:
            qType = "离线问题";
            console.log(qType);
            break;
        }
        if (q.type == '2' || q.type == 2) {
          var reg = new RegExp("{block}","g");
          s = q.describe.replace(reg,"_____");
        } else {
          s = q.describe;
        }

        html = '        <div class="question_list">';
        html += '          <div class="question_list_header">';
        html += '            <h3 class="question_list_title">';
        html += '              <strong>'+qType+'</strong>'+q.name+'（'+q.score+'分）';
        html += '            </h3>';
        html += '          </div>';
        html += '          <div class="question_list_body">';
        html += '            <p class="question_list_text-info">'+s+'</p>';
        if (q.type == "0") {
          html += '            <p>A. '+q.choiceA+'</p>';
          html += '            <p>B. '+q.choiceB+'</p>';
          html += '            <p>C. '+q.choiceC+'</p>';
          html += '            <p>D. '+q.choiceD+'</p>';
        }
        html += '          </div>';
        html += '          <div class="question_list_footer">';
        html += '              <button  type="button" class="question_list_btn" onclick="delete_question('+q.qid+')">删除</button>';
        html += '              <button class="question_list_btn" onclick="edit_question('+q.qid+')">编辑</button>';
        html += '          </div>';
        html += '          </div>';
        /*console.log(html);*/
        $("#div_questions").append(html);

      }//end of addQuestion()

      //提交作业
      function submit_problem(){

        console.log("执行了函数：submit_problem()");

        for (var i = 0; i < questions.length; i++){
          questions[i].qid = i+1;
        }
        if (type == "edit") {
          homework.hid = hid;
          postJSON("getRefreshQuestion.java",$.toJSON(homework),function showResponse(response){
            alert("成功修改");
            self.location='www.baidu.com';
          });
        } else {
          homework.clid = clid;
          /*console.log($.toJSON(homework));*/
          postJSON("getQuestion.java",$.toJSON(homework),function showResponse(){
            alert("成功发布！");
            self.location="www.baidu.com";
          });
        }

      }//end of submit_problem()

      //编辑作业
      function edit_question(qid) {

        console.log("执行了函数：edit_question("+qid+")");

        current_question = qid;
        $("#btn_delete").attr("disabled",false);
        // $("#delete_btn").removeAttr("disabled");
        for (var i = 0; i < questions.length; i++) {
          if (questions[i].qid == qid) {
            emptyEmptyEditWindow();
            changeHWType(questions[i].type);
            fillBlank(questions[i]);
            break;
          }
        }

      }//end of edit_question()

      //填充表单
      function fillBlank(q) {

        console.log("执行了函数：fillBlank("+q+")");

        $("#hw-title").val(q.name);
        $("#hw-content").val(q.describe);
        $("#hw-score").val(q.score);
        if (q.type == '0') {
          $("#hw-choice-A").val(q.choiceA);
          $("#hw-choice-B").val(q.choiceB);
          $("#hw-choice-C").val(q.choiceC);
          $("#hw-choice-D").val(q.choiceD);
          $("#hw-ans-"+q.answer).prop("checked",true);
        } else if (q.type = '1') {
          $("#hw-ans-"+q.answer).prop("checked",true);
        }

      }//end fo fillBlank()

      //删除题目
      function delete_question(qid) {

        console.log("执行了函数：delete_question("+qid+");");
        for (var i = 0; i < questions.length; i++) {
          if (questions[i].qid == qid) {
            questions.splice(i,1);
            show_questions();
            click_close();
            return;
          }
        }

      }//end of delete_question()

      //编辑题目时删除题目
      function delete_question_btn() {

        console.log("执行了函数：delete_question_btn(),current_question的值为："+current_question);

        var cur = current_question;
        current_question = -1;
        delete_question(cur);

      }//end of delete_question_btn()

//页面加载执行，获取班级ID，类型，作业类型
      $(document).ready(function(){
        console.log("执行了document.ready()");
        var request = getRequest();

        /*clid = request.clid;
        type = request.type;
        hid = request.hid;*/

        /*测试数据begin*/
        clid = 1;
        type = "publish";
        hid = 2;
        /*测试数据end*/

        if (clid == undefined || type == undefined){
          return;
        }
        get_class_info();
});