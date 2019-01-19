//用ajax传递json数据
function postJSON(url, jsonStr, successFunction, async=true) {
        console.log(jsonStr);
        $.ajax({
          url : url,
          type : 'POST',
          data : jsonStr,
          async: async,
          dataType : 'json',
          contentType : 'application/text',
          success : function(response, status, xhr) {
            if (status != "success")
              alert("未知错误");
            else if (response['code'] != 0)
              alert("错误"+response['code']+"："+response['msg']);
            else successFunction(response);
          },
          error : function(xhr, error, exception) {
              // handle the error.
              successFunction();
              alert("postJSON error");
              alert(exception.toString());
          }
        });
      }

//去除空格
/*function trim(str) {
    var newStr = str.replace(/^\s*$/g,'')
    retrun newStr;
}
*/

//获取cookie值
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for(var i = 0; i < ca.length; i++){
    var c = ca[i].trim();//trim函数浏览器支持不好，可以自己写一个函数来去除空格；
    if (c.indexOf(name) == 0) {
      return c.substring(name.length,c.length);
    }
  }
  return "";
}

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