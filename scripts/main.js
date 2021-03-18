changelist();
function changelist()
{
      switch(document.data.abroad.value)
      {
            case "YES":
            document.getElementById("abroad_q").innerHTML="入境日期？<INPUT type=text name=entry_time><br>最近入境台灣之來源地區？<INPUT type=text name=source><br>搭乘班機航空公司與編號：<INPUT type=text name=flight><br>"
            break;
            case "NO":
            document.all.abroad_q.innerHTML="<select name=actname><option value=1>3<option value=2>4<option value=3> 5</select>"
            break;
      }
}          
