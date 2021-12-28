<html>
 <head>
    <title>Super Inútil</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.1">
	<link rel="icon" type="image/png" href="Matua_DevApps_Logo.png" />
    <link rel="stylesheet" type="text/css" href="reset.css">
	<link rel="stylesheet" type="text/css" href="estilo.css">
 </head>
 <body>
 <form action="inutil.php" method="post">
    <h1>Bem vindo ao Super Inútil!! <br/> Algo inútil para você hoje? Clique no botão e cruze os dedos!</h1>
	<button class="btn" onclick="javascript: window.open('pegaUrl.php', '_blank')" href="JavaScript:location.reload(true);" target="_blank">Me mostre algo inútil!</button>
	<p id="p1">
		<?php
		include 'db.php';
		
		$sql = ("Select Max(id) from tb_clicks");
		$rs = mysql_query($sql);
		
		$result = mysql_fetch_array($rs);
		
		echo $result[0];
		mysql_close($conexao);		
		?>
	</p>
	<p id="txtfixo1">Clicks inúteis já foram feitos!</p>
	<p id="txtfixo2">Faça o seu agora!</p>
	
	<!--<iframe src="http://www.staggeringbeauty.com/" style="border: 1px inset #ddd" width="498" height="598"></iframe>-->
 </body>
 <form/>
 <script type="text/javascript" src="JScript1.js"></script>
</html>