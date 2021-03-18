changelist1();
changelist2();

function changelist1()
{
      switch(document.data.abroad.value)
      {
            case "YES":
            document.getElementById("abroad_q1").innerHTML="<ol><li>入境日期 <INPUT type=text name=entry_time><br></li><li>最近入境台灣之來源地區 <INPUT type=text name=source><br></li><li>搭乘班機航空公司與編號 <INPUT type=text name=flight><br></li></ol>"
            break;
            case "NO":
            document.getElementById("abroad_q1").innerHTML="";
            break;
      }
}          

function changelist2()
{
      switch(document.data.contact_1.value)
      {
            case "YES":
            document.getElementById("abroad_q2").innerHTML="<ol><li>出國者與您的關係是？<br><INPUT type=radio name=abroad_p value=父母>父母<br><INPUT type=radio name=abroad_p value=親戚>親戚<br><INPUT type=radio name=abroad_p value=朋友>朋友<br><INPUT type=radio name=abroad_p value=其他>其他 <INPUT type=text name=其他人:><br></li><li>入境時間？<INPUT type=text name=abroad_entry_time></li><li>管理措施？<br><INPUT type=radio name=manage value=居家隔離>居家隔離<br><INPUT type=radio name=manage value=居家檢疫>居家檢疫<br><INPUT type=radio name=manage value=自主健康管理>自主健康管理<br><INPUT type=radio name=manage value=入院治療>入院治療<br><INPUT type=radio name=manage value=其他>其他<br></li><li>管理措施開始時間？<INPUT type=text name=manage_start><br></li><li>管理措施結束時間？<INPUT type=text name=manage_end><br></li><li>出國者是否有症狀？（有症狀者請註明例如:發燒、咳嗽 ）<INPUT type=text name=abroad_ill><br></li></ol>"
            break;
            case "NO":
            document.getElementById("abroad_q2").innerHTML="";
            break;
      }
}         