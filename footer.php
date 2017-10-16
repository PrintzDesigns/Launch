<?php  $request_uri= $_SERVER['REQUEST_URI'];?>
			<footer class="<?php if((strpos($request_uri,"contacts")!==false)){echo "contacts-page-footer";}?>">
				<p class="copyright">© 2017 PRINTZ</p>
				<ul class="footer-soc-list clearfix">
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
						<a href="https://www.linkedin.com/company-beta/11253389" target="_blank">
							<i class="fa fa-linkedin-square" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</footer>
			<div class="pop-up-sign-up">
				<section class="go-ahead">
					<div class="content-wrapper animation-element in-view">
						<h2>Go ahead</h2>
						<p class="go-ahead-subtitle">Be first to check out the future of interior design</p>
					</div>
					<div class="form-wrapper">
						<form action="https://printzdesigns.us16.list-manage.com/subscribe/post?u=de737b95e49a1186ea7190c90&amp;id=4e23066323" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
							<div class="form-input-wrapper">
								<input class="text-field w-input animation-element in-view sign-inputs" data-name="Email" id="mce-EMAIL" maxlength="256" name="EMAIL" placeholder="ENTER YOUR EMAIL" type="text" autocomplete="off">
								<!-- <span class="incorrect-mssg">PLEASE ENTER CORRECT EMAIL</span> -->
							</div>
							<span class="incorrect-mssg">PLEASE ENTER CORRECT EMAIL</span>
							<button type="submit" class="submit-button w-button sign-btn" id="sign-btn">SIGN ME UP</button>
						</form>
					</div>
					<div class="content-wrapper animation-element in-view">
						<p class="go-ahead-other-text">We’ll put you on our invite list to beta test the site and receive exclusive event invitations and design offerings.</p>
					</div>
				</section>
			</div>
		</div>
		<script type="text/javascript" src="js/libs/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="js/libs/jquery-migrate-3.0.0.min.js"></script>
		<script type="text/javascript" src="js/libs/jquery.mobile.custom.min.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
		<!-- SPECIFIC JS -->
		<?php
			$currentpage = $_SERVER['REQUEST_URI'];
			if ( $currentpage == '/' || $currentpage == '/projects/printz/' || strpos( $currentpage, 'index.php' ) == true ) { ?>
				<!-- PAGE - FRONTPAGE-->
				<script type="text/javascript" src="js/libs/jquery.liMarquee.js"></script>
				<script type="text/javascript" src="js/frontpage.js"></script>
				<!-- PAGE - FRONTPAGE (END) -->
			<?php }
			if ( strpos( $currentpage, 'contacts.php' ) == true ) { ?>
				<!-- PAGE - CONTACTS -->
				<script src="js/contacts.js"></script>
				<!-- PAGE - CONTACTS (END) -->
			<?php }
		?>
	</body>
</html>
