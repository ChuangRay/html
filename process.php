<?php
header("Content-Type:text/html; charset=utf-8");
  //建立連線：
  $link = mysql_pconnect("192.168.2.39", "root", "estinet"); //$link宣告連線，mysql_pconnet("主機名稱","資料庫帳號","資料庫密碼");
  //選擇資料庫：
  mysql_select_db("mydb") or die("無法選擇資料庫"); // 選擇資料庫：mysql_select_db("資料庫名稱") or die ("失敗顯示字");
  //二、執行SQL語法
  $name = mysql_real_escape_string($_POST['name']);
  $phone = mysql_real_escape_string($_POST['phone']);
  $name = mysql_real_escape_string($_POST['email']);
  $phone = mysql_real_escape_string($_POST['department']);

  if($mysqli->query($sql) === true){
    // Obtain last inserted id
    $last_id = $mysqli->insert_id;
    echo "Records inserted successfully. Last inserted ID is: " . $last_id;
    $query = "INSERT INTO ID (id) VALUES ('$last_id')";
    mysql_query($query) or die("無法送出" . mysql_error( ));

    $query = "INSERT INTO personal_info (name,phone,email,unit) VALUES ('$name','$phone','$email','$department')";
  mysql_query($query) or die("無法送出" . mysql_error( ));

  } else{
    echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
  }



  $mysqli->close();

  $url = "index.html";
  echo "<script>";
  echo "window.location.href='$url'";
  echo "</script>"; 
?>