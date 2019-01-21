//要提交的作业答案
answerJson = {
    "homeworkID":9,
    "username":"牛叉叉的秦神",
    "userID":"2018120264",
    "answer":[

    ]
};

//显示作业基本信息
function showHomeworkInfo() {
    var mubandata = {
        "begin_t":response.begin_t,
        "end_t":response.end_t,
        "hard_ddl":response.hard_ddl,
        "score_face":response.score_face,
        "score_weight":response.score_weight,
        "type":response.type,
        "name":response.name,
        "class":response.class
    }
    $("#zyInfo").load("homeworkInfo.jsp",mubandata,function(){
        console.log("loaded zyInfo successed!");
    })
}

//显示选择题
function showChoice(i) {
    $("#zy_choice").append(function (n) {
        return '<div class="choice_container" id="qid' + HWList[i].qid + '"></div>';
    });
    //导入模板
    var mubanid = "qid" + HWList[i].qid;
    var mubandata = {
        "name": HWList[i].name,
        "describe": HWList[i].describe,
        "choiceA": HWList[i].choiceA,
        "choiceB": HWList[i].choiceB,
        "choiceC": HWList[i].choiceC,
        "choiceD": HWList[i].choiceD,
        "score": HWList[i].score
    };
    $('#qid' + HWList[i].qid).load("choice.jsp", mubandata, function () {
        console.log("导入选择题" + HWList[i].qid + "成功！");
    });
}

//显示填空题
function showBlank(i) {
    $("#zy_blank").append(function (n) {
        return '<div class="choice_container blank_container" id="qid' + HWList[i].qid + '"></div>';
    });
    //导入模板
    var mubanid = "qid" + HWList[i].qid;
    var mubandata = {
        "name": HWList[i].name,
        "describe": HWList[i].describe,
        "score": HWList[i].score
    };
    $('#qid' + HWList[i].qid).load("blank.jsp", mubandata, function () {
        console.log("导入填空题" + HWList[i].qid + "成功！");
    });
}

//显示判断题
function showJudge(i) {
    $("#zy_judge").append(function (n) {
        return '<div class="choice_container judge_container" id="qid' + HWList[i].qid + '"></div>';
    });
    //导入模板
    var mubanid = "qid" + HWList[i].qid;
    var mubandata = {
        "name": HWList[i].name,
        "describe": HWList[i].describe,
        "score": HWList[i].score
    };
    $('#qid' + HWList[i].qid).load("judge.jsp", mubandata, function () {
        console.log("导入判断题" + HWList[i].qid + "成功！");
    });
}

//显示简答题
function showShortAnswer(i) {
    $("#zy_short_answer").append(function (n) {
        return '<div class="choice_container blank_container short_answer_container" id="qid' + HWList[i].qid + '"></div>';
    });
    //导入模板
    var mubanid = "qid" + HWList[i].qid;
    var mubandata = {
        "name": HWList[i].name,
        "describe": HWList[i].describe,
        "score": HWList[i].score
    };
    $('#qid' + HWList[i].qid).load("shortAnswer.jsp", mubandata, function () {
        console.log("导入简答题" + HWList[i].qid + "成功！");
    });
}

//获取选择题答案
function getChoiceAnswer(){
    for(var i=0;i<$("#zy_choice .choice_container").length;i++){
        var hwid =$("#zy_choice .choice_container")[i].id;
        var name = $("#"+hwid+" .num").text();
        name = name.replace(/[^0-9]/ig,"");
        var answer = $("#"+hwid+" .option:checked").val();
        var qid = hwid.replace(/[^0-9]/ig,"");
        var type = "choice";
        answerJson.answer.push({
            "qid":qid,
            "type":type,
            "name":name,
            "answer":answer
        });

    }
}// end of getChoiceAnswer

//获取填空题答案
function getBlankAnswer(){
    for(var i=0;i<$("#zy_blank .choice_container").length;i++){
        var hwid =$("#zy_blank .choice_container")[i].id;
        var name = $("#"+hwid+" .num").text();
        name = name.replace(/[^0-9]/ig,"");
        //var describe = $("#"+hwid+" .zy_cont").text();
        var answer = $("#"+hwid+" .blank_answer").val();
        var qid = hwid.replace(/[^0-9]/ig,"");
        var type = "blank";
        answerJson.answer.push({
            "qid":qid,
            "type":type,
            "name":name,
            "answer":answer
        });

    }
}

//获取判断题答案
function getJudgeAnswer() {
    for(var i=0;i<$("#zy_judge .choice_container").length;i++){
        var hwid =$("#zy_judge .choice_container")[i].id;
        var name = $("#"+hwid+" .num").text();
        name = name.replace(/[^0-9]/ig,"");
        //var describe = $("#"+hwid+" .zy_cont").text();
        alert("hwid:"+hwid);
        var answer = $("#"+hwid+" .judge_option:checked").val();
        var qid = hwid.replace(/[^0-9]/ig,"");
        var type = "judge";
        answerJson.answer.push({
            "qid":qid,
            "type":type,
            "name":name,
            "answer":answer
        });

    }
}

//获取简答题答案
function getShortAnswer() {
    for(var i=0;i<$("#zy_short_answer .choice_container").length;i++){
        var hwid =$("#zy_short_answer .choice_container")[i].id;
        var name = $("#"+hwid+" .num").text();
        name = name.replace(/[^0-9]/ig,"");
        //var describe = $("#"+hwid+" .zy_cont").text();
        var answer = $("#"+hwid+" .short_as_answer").val();
        var qid = hwid.replace(/[^0-9]/ig,"");
        var type = "shortAnswer";
        answerJson.answer.push({
            "qid":qid,
            "type":type,
            "name":name,
            "answer":answer
        });

    }
}

//提交作业
function submit(){
  var ch = "true";//用来判断是否填写完整
   //获取选择题答案
    getChoiceAnswer();
  //获取填空题答案
    getBlankAnswer();
  //获取判断题答案
    getJudgeAnswer();
  //获取简答题答案
    getShortAnswer();

  //判断作业是否填写完整
  for(var i= 0;i<answerJson.answer.length;i++){
      var as = answerJson.answer[i].answer;
      if (as == undefined || as == ""){
          ch = "false";
      }
  }

  //提交答案
  var jsonStr = $.toJSON(answerJson);
  if(ch == "true"){//提交作业答案
       postJSON("GetAnswer.java",jsonStr,function showResponse(response){
           if(response.status == "200"){
               console.log("提交作业成功");
           }else{
               alert("作业提交失败！");
           }
       });
  } else if(ch == "false" ){
      alert("你的作业还没填写完整，请填写完整!");
  } else{
      alert("提交作业失败！不知道啥错误，大概是你运气不好吧，，，，");
  }//end of if

}//end of submit

$(document).ready(function(){
    //console.log("执行了document.ready()");
    var request = {
        "username":"牛叉叉的秦神",
        "userID":"2018120264",
        "homeworkID":9
    };
    //responseHoemwork = {};
    var jsonStr = $.toJSON(request);
    postJSON("GetHomework.java",jsonStr,function showResponse(response1){
        //测试数据
        response = {
            "status":200, //状态代码，随后端定
            "reason":"成功", //状态代码描述
            "username":"牛叉叉的秦神",
            "type":"O",//个人在线作业
            "usertype":"student",
            "userID":"2018120264",
            "homeworkID":7,//作业id
            "class":"数据结构",//课程
            "name":"第一章作业",//作业名称
            "begin_t":"2019-01-17",
            "end_t":"2019-01-17",
            "hard_ddl":"2019-01-17",
            "score_face":0,//总分
            "score_weight":0,//比重
            "HWList":[
                {
                    "type":"choice",
                    "qid":5,//题目id
                    "name":11,//题号
                    "describe":"这是选择题题1111",
                    "choiceA":"这A",
                    "choiceB":"这项B",
                    "choiceC":"这是项C",
                    "choiceD":"这项D",
                    "score":"3"
                },
                {
                    "type":"choice",
                    "qid":1,//题目id
                    "name":11,//题号
                    "describe":"这是选择题题干222",
                    "choiceA":"这是选项A",
                    "choiceB":"这是选项B",
                    "choiceC":"这是选项C",
                    "choiceD":"这是选项D",
                    "score":"3"
                },
                {
                    "type":"blank",
                    "qid":4,
                    "name":2,
                    "describe":"这是填空题题干111",
                    "score":"3"
                },
                {
                    "type":"blank",
                    "qid":2,
                    "name":2,
                    "describe":"这是填空题题干222",
                    "score":"3"
                },
                {
                    "type":"judge",
                    "qid":8,
                    "name":3,
                    "describe":"这是判断题题干1111",
                    "score":"3"
                },
                {
                    "type":"judge",
                    "qid":3,
                    "name":3,
                    "describe":"这是判断题题干222",
                    "score":"3"
                },
                {
                    "type":"ShortAnswer",
                    "qid":9,
                    "name":4,
                    "describe":"这是简答题题干111",
                    "score":"3"
                },
                {
                    "type":"ShortAnswer",
                    "qid":10,
                    "name":4,
                    "describe":"这是简答题题干222",
                    "score":"3"
                }
            ]
        };

        if(response.status == 200 ) {
            //显示内容
            //显示作业基本信息
            showHomeworkInfo();

            //显示题目内容
            HWList = response.HWList;
            for (var i = 0; i < HWList.length; i++) {
                if (HWList[i].type == "choice") {//选择题
                    showChoice(i);
                } else if (HWList[i].type == "blank") {//填空题
                    showBlank(i);
                } else if (HWList[i].type == "judge") {//判断题
                    showJudge(i);
                } else if (HWList[i].type == "ShortAnswer") {//简答题
                    showShortAnswer(i);
                }else{
                    alert("不存在"+HWList[i].type+"类型的题目");
                }
            }//end of for
        }else {
            alert("请求作业内容失败！");
        }
    });//end of showResponse
});//end fo document.rady

