<?
	$handle = $_GET['handle'];
	switch ($handle) {
		case 'work':
			$filename = 'work/project_list';
			$file = fopen($filename, 'r');
			$i = 1;
			while(! feof($file))
			{
				list($name, $detail, $date, $link) = split("#", fgets($file));
				$html = "<div>";
				$html.= "<h1>".$name."<span> on ".$date."</span></h1>";
				$html.= "<img src='work/project_".$i.".jpg' />";
				$html.= "<div>".$detail."</div>";
				$html.= "<h3>".$link."</h3>";
				$html.= "</div>";
				echo $html;
				$i++;
			}
			fclose($file);
			break;
		case 'login':
			$pass = $_GET['pass'];
			if ($pass == 'wonkitub'){
				echo 1;
			}
			break;
		default:
			break;
	}
?>