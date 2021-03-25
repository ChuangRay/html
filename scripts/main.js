changelist1();
changelist2();
check();

function changelist1()
{
      switch(document.data.abroad.value)
      {
            case "YES":
            document.getElementById("abroad_q1").innerHTML='<ol><li>入境日期 <INPUT type="date" name="e_day" placeholder="西元    年-月-日" class="mydate"><br></li><li>最近入境台灣之來源地區 <INPUT type="text" name="source"><br></li><li>搭乘班機航空公司與編號 <INPUT type="text" name="flight"><br></li></ol>'
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
            document.getElementById("abroad_q2").innerHTML='<ol><li>出國者與您的關係是？<br><INPUT type="radio" name="abroad_p" value="家人">家人<br><INPUT type="radio" name="abroad_p" value="親戚">親戚<br><INPUT type="radio" name="abroad_p" value="朋友">朋友<br><INPUT type="radio" name="abroad_p" value="其他">其他 <INPUT type="text" name="abroad_person"><br></li><li>入境時間？<INPUT type="date" name="fe_time" placeholder="西元    年-月-日" class="mydate"></li><li>管理措施？<br><INPUT type="radio" name="manage" value="居家隔離">居家隔離<br><INPUT type="radio" name="manage" value="居家檢疫">居家檢疫<br><INPUT type="radio" name="manage" value="自主健康管理">自主健康管理<br><INPUT type="radio" name="manage" value="入院治療">入院治療<br><INPUT type="radio" name="manage" value="其他">其他<br></li><li>管理措施開始時間？<INPUT type="date" name="manage_start" placeholder="西元    年-月-日" class="mydate"><br></li><li>管理措施結束時間？<INPUT type="date" name="manage_end" placeholder="西元    年-月-日" class="mydate"><br></li><li>出國者是否有症狀？（有症狀者請註明例如:發燒、咳嗽 ）<INPUT type="text" name="abroad_ill"><br></li></ol>'
            break;
            case "NO":
            document.getElementById("abroad_q2").innerHTML="";
            break;
      }
}         


function check()
{
    var tex = "";


    if(data.name.value == "")
        tex=tex+"請輸入『姓名』\n";
                
    if(data.phone.value == "" )
         tex=tex+"請輸入『聯絡電話』\n";

    else if(!((/^09\d{8}$/).test(data.phone.value)))
         tex=tex+"『聯絡電話』格式有誤！\n";
            
    if(data.email.value == "")
         tex=tex+"請輸入『電子郵件』\n";


    else if(data.email.value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1)
         tex=tex+"『電子郵件』格式有誤！\n";


    if(data.department.value == "") 
         tex=tex+"請輸入『所屬單位』\n";

                
    if(data.invite.value == "")
         tex=tex+"請輸入『受訪單位』\n";

                
    if(data.reception.value == "")
         tex=tex+"請輸入『接待窗口/聯絡人』\n";


    if(data.abroad.value == "" )
         tex=tex+"請完成『出入境旅遊史問卷』\n";


    if(data.abroad.value == "YES" ){
        if(data.e_day.value == "" || data.source.value == "" || data.flight.value == "")
         tex=tex+"請完成『出入境旅遊史問卷』\n";
    }

    if(!document.data.ill[8].checked){
        var n=0;
        for (var i=0; i<8; i++){
            if (document.data.ill[i].checked)
                n++;
        }
        if(!n)
            tex=tex+"請完成『相關症狀問卷』\n";
    }
    else {
        var n=0;
        for (var i=0; i<8; i++){
            if (document.data.ill[i].checked)
                n++;
        }
        if(n)
            tex=tex+"請正確填寫『相關症狀問卷』\n";
    }

    if(document.data.ill[7].checked){
        if(data.other_ill.value == "")
            tex=tex+"請完成『相關症狀問卷』\n";
    }

    if(data.contact_1.value == "" || data.contact_2.value == "" || data.contact_3.value == "" || data.contact_4.value == "")
         tex=tex+"請完成『接觸史問卷』\n";

    if(data.contact_1.value == "YES"){
        if(data.abroad_p.value == "" || data.fe_time.value == "" || data.manage.value == "" || data.manage_start.value == "" || data.manage_end.value == "" || data.abroad_ill.value == "")
            tex=tex+"請完成『接觸史問卷』\n";
        if(data.abroad_p.value == "其他" && data.abroad_person.value=="")
            tex=tex+"請完成『接觸史問卷』\n";
    }


    if(tex ==""){
        data.submit();
    }
    else alert(tex);
}
