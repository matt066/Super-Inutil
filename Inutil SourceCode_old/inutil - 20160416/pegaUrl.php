	<?php
		include 'db.php'; //Chama a conexão com BD
		
		//PEGA CÓDIGO RANDONICAMENTE NA TABELA ----- INICIO
		$sql = ("SELECT codigo FROM tb_sites ORDER BY RAND() LIMIT 1");
		$rs = mysql_query($sql);
		//-----------^  need to run query here

		$result = mysql_fetch_array($rs);

		//here you can echo the result of query
		//echo $result[0];
		//PEGA CÓDIGO RANDONICAMENTE NA TABELA ----- FIM
		
		//variáveis usadas na filtragem dos dados
		//$codigo = 12;
		$pesquisa = "SELECT * FROM tb_sites WHERE codigo = " . $result[0];

		//filtra e recebe o resultado
		$resultado = mysql_query($pesquisa);

		//monta array com os dados do resultado
		$array_de_conteudo = mysql_fetch_array($resultado);

		//recebe a qtde de linhas
		$linhas = mysql_num_rows($resultado);

		//faz a impressão dos dados se houver resultado, ou seja, se tiver dados para serem impressos
		if ($resultado){
				print "Foram encontrados " . $linhas . " de dados na tabela. <br>";
				
				for($i =0; $i < $linhas; $i++){ 
					//imprime na tela
					print $array_de_conteudo["url"];
					header("Location: " . $array_de_conteudo["url"]);
				}
 
				//fecha a conexao e limpa o resultado
				mysql_close($conexao);
				mysql_free_result($resultado);

		}else{

			//só fecha a conexão pois nao tinha conteudo no resultado
			mysql_close($conexao);
		} 		
	?>