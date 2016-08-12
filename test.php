<?php
	$url = 'localhost:3306';
	$user = 'zoiew';
	$psw = 'lyh123456';

	mysql_connect($url,$user,$psw);
	mysql_select_db("suibiande");
	$sql = 'SELECT * FROM `class1603`';
	//ִ��mysql����䣻
	$retval = mysql_query($sql);
	$row = mysql_fetch_array($retval,MYSQL_ASSOC);
	echo $row['mobie'];


  ?>
