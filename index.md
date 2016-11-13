<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Progress bar demo - PURE JAVASCRIPT!</title>
		<style>
			p {
				padding-bottom: 2000px;
				text-align: center;
				font-size: 3em;
			}
		</style>
		<link rel="stylesheet" type="text/css" href="rpbar-1.0.min.css">
		<script type="text/javascript" src="rpbar-1.0.min.js"></script>
	</head>
	<body>
		<div id="rp-bar"></div> <!-- READ PROGRESS BAR -->
		<p>this is content-preceding (bar is hidden)</p> 
		<div id="rp-start"></div> <!-- MARK START OF SCROLLABLE CONTENT (OPTIONAL) -->
		<p>content starts here (bar is visible)</p>
		<div id="rp-end"></div> <!-- MARK END OF SCROLLABLE CONTENT (OPTIONAL) -->
		<p>content ends here, rest of page starts here (bar is hidden)</p>
	</body>
</html>