<? include("header.php") ?>
			<main class="content">
				<section class="contacts-form">
					<div class="contacts-form-wrapper">
						<h2>We would love to hear from you</h2>
						<form action="contacts-form.php" method="POST" class="contacts-form clearfix" id="contacts-form">
							<div class="name-mail-wrapper clearfix">
								<div class="contacts-form-input-wrapper">
									<input type="text" name="user-name" id="user-name">
									<label for="user-name">Name *</label>
								</div>
								<div class="contacts-form-input-wrapper">
									<input type="email" name="user-email" id="user-email">
									<label for="user-email">Email *</label>
								</div>								
							</div>
							<div class="contacts-form-input-wrapper contacts-form-textarea">
								<textarea name="client-message" id="main-client-message"></textarea>
								<label for="main-client-message">MESSAGE</label>
							</div>
							<input type="text" name="surname" class="varificate-input">
							<div class="btn-send-container">
								<button type="submit" class="btn-white send-btn">SEND FORM</button>
							</div>
						</form>
						<div class="success-mssg-block">
							<span class="big-text">Your message successfully sent</span>
							<span class="small-text">We will contact you soon</span>
						</div>
					</div>
				</section>
			</main>
<? include("footer.php") ?>				

