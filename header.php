<?php  $request_uri= $_SERVER['REQUEST_URI'];?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width">
		<title>Printz</title>
		<!--styles-->
		<link rel="icon" href="img/elements/favicon.png" sizes="16x16">
		<link rel="stylesheet" href="fonts/fonts.css">
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="css/mediaqueries.css">
	</head>
	<body class="home">
		<div class="o-loader" id="prel-cont">
			<div class="o-loader_line" id="prel-line"></div>
		</div>
		<div class="page-wrapper">
			<header class="clearfix">
				<h1 class="logo">
					<a href="index.php">
						<img src="img/elements/logotype.svg" alt="Printz">
					</a>
				</h1>
				<nav class="main-nav">
					<ul class="main-menu-list clearfix">
						<li class="">
							<a href="http://www.printzdesigns.blog" target="_blank">THE JOURNAL</a>
						</li>
						<li class="<?php if((strpos($request_uri,"designer-information")!==false)){echo "active";}?>">
							<a href="designer-information.php">DESIGNER INFORMATION</a>
						</li>
						<li class="<?php if((strpos($request_uri,"contacts")!==false)){echo "active";}?>">
							<a href="contacts.php">CONTACT US</a>
						</li>										
					</ul>
				</nav>
				<a href="#" class="sign-in-btn">SIGN UP</a>
				<div class="burger-menu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</header>
			<div class="mobile-menu">
				<nav class="mabile-nav">
					<ul class="mobile-menu-list">
						<li class="">
							<a href="http://www.printzdesigns.blog" target="_blank">THE JOURNAL</a>
						</li>
						<li class="<?php if((strpos($request_uri,"designer-information")!==false)){echo "active";}?>">
							<a href="designer-information.php">DESIGNER INFORMATION</a>
						</li>
						<li class="<?php if((strpos($request_uri,"contacts")!==false)){echo "active";}?>">
							<a href="contacts.php">CONTACT US</a>
						</li>
						<li class="sign-in-link">
							<a href="http://www.printzdesigns.blog" target="_blank">SIGN UP</a>
						</li>										
					</ul>
				</nav>
				<ul class="mobile-soc-list clearfix">
					<li>
						<a href="https://www.facebook.com/printzdesigns/?fref=ts" target="_blank">
							<i class="fa fa-facebook-official" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/printzdesigns/" target="_blank">
							<i class="fa fa-instagram" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/11253389/" target="_blank">
							<i class="fa fa-linkedin-square" aria-hidden="true"></i>
						</a>
					</li>
				</ul>			
			</div>