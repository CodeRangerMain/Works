 <?php error_reporting(0);
		include '../admin/config.php';
		$config = getConfig();
		$page = 'index';
		?>
	<!DOCTYPE html>
<html lang="ru">
<head><?php if (!empty($config)) include "../admin/include-head.php" ?>
	<title>Окна в Дом | Расчет стоимости пластиковых окон</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" href="style.css">
	<script src="libs/jquery-3.2.1.min.js"></script>
	<script src="libs/jquery.bxslider.min.js"></script>
	<script src="libs/jquery.maskedinput.min.js"></script>
	<script src="libs/is.mobile.js"></script>
	<script src="libs/jquery.form.js"></script>
	<script src="libs/jquery.validate.js"></script>
	<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap&subset=cyrillic" rel="stylesheet">
</head>
<body><?php if (!empty($config)) include "../admin/include-body-start.php" ?>
<form action="../thankyou.php"  method="post" class="portable-test-wrapper">
	<!-- LOGO + TITLE START -->
	<div class="header-line">
		<div class="container">
		<img src="/images/logo.svg" alt="logo" class="header-line__logo">
		<h2 class="header-line__title">
		Пожалуйста ответьте на вопросы
			</h2>
		</div>
	</div>
	<!-- LOGO + TITLE END -->

	<!-- PROGRESS LINE START -->
	<div class="progress-line">
		<div class="main-progress">
			<div class="main-progress__extender"></div>
			<!-- STEPS TEXT START -->
			<div class="main-progress__text">
				<b>Осталось ответить на 5 вопроса,</b> 
			</div>
			<!-- STEPS TEXT END -->
			<!-- STEPS TEXT START -->
			<div class="main-progress__text">
				<b>Осталось ответить на 4 вопроса,</b>
			</div>
			<!-- STEPS TEXT END -->
			<!-- STEPS TEXT START -->
			<div class="main-progress__text">
				<b>Осталось ответить на 3 вопроса,</b>
			</div>
			<!-- STEPS TEXT END -->
			<!-- STEPS TEXT START -->
			<div class="main-progress__text">
				<b>Осталось ответить на 2 вопроса,</b> 
			</div>
			<!-- STEPS TEXT END -->
			<!-- STEPS TEXT START -->
			<div class="main-progress__text">
				<b>Осталось ответить на 1 вопрос,</b>
			</div>
			<!-- STEPS TEXT END -->
			<!-- STEPS TEXT START -->
			<div class="main-progress__text">
				<b>Готово на 98%.</b> Заполните форму ниже, узнать сумму займа
			</div>
			<!-- STEPS TEXT END -->
		</div>
		<div class="container">
			<div class="step">
				<div class="step__text">Шаг <span>1</span></div>
				<div class="step__extender"></div>
			</div>
		</div>
	</div>
	<!-- PROGRESS LINE END -->
	
	<!-- STEPS START -->
	<div class="container">
		<div class="test-slider">

	

			
			<!-- ONE-STEP START -->
			<div class="step-slide step-slide-1">
			
				<h3 class="step-slide__title">
				У вас есть сайт?
				</h3>
				<div class="step-slide__grid">
					<!-- ONE-ITEM START -->
					<label for="step1-1" class="pick-item">
						
						<input class="pick-item__input" type="radio" name="step1" id="step1-1" value="Да">
						<div class="pick-item__label">Да</div>
					</label>
					<!-- ONE-ITEM END -->
					<!-- ONE-ITEM START -->
					<label for="step1-2" class="pick-item">
						
						<input class="pick-item__input" type="radio" name="step1" id="step1-2" value="Нет">
						<div class="pick-item__label">Нет</div>
					</label>
					<!-- ONE-ITEM END -->
					<!-- ONE-ITEM START -->
					<!-- ONE-ITEM END -->
					
					<div id="next1" class="btn-next-container" ></div>
				</div>
				<div class="div0"></div>
			</div>
			<!-- ONE-STEP END -->
			

			<!-- ONE-STEP START -->
			<div class="step-slide step-slide-2">
				<h3 class="step-slide__title">
				Направление вашего бизнеса
				</h3>
				<div class="step-slide__grid">

					<!-- ONE-ITEM START -->
					<label for="step2-1" class="pick-item2">
					<div class="no-flex">
						<div class="inp-phone">
							<input type="text" name="kolvo" id="item" placeholder="Например: Торговля недвижемостью" onkeydown="if(event.keyCode==13){return false;}">
						
						</div>
					</div>
					</label>
					<!-- ONE-ITEM END -->
					<div id="next2" class="btn-next-container"></div>
				</div>
			</div>
			<!-- ONE-STEP END -->
			
			<!-- ONE-STEP START -->
			<div class="step-slide step-slide-3">
				<h3 class="step-slide__title">
				Какие у вас ожидания от сайта?
				</h3>
				<div class="step-slide__grid">

					<!-- ONE-ITEM START -->
					<label for="step3-1" class="pick-item">
						
						<input class="pick-item__input" type="radio" name="step3" id="step3-1" value="Повышение конверсии ">
						<div class="pick-item__label">Повышение конверсии</div>
					</label>
					<!-- ONE-ITEM END -->
					<!-- ONE-ITEM START -->
					<label for="step3-2" class="pick-item">
						
						<input class="pick-item__input" type="radio" name="step3" id="step3-2" value="Повышение продаж">
						<div class="pick-item__label">Повышение продаж</div>
					</label>
					<!-- ONE-ITEM END -->
					<!-- ONE-ITEM START -->
					<label for="step3-3" class="pick-item">
						
						<input class="pick-item__input" type="radio" name="step3" id="step3-3" value="Повышение узнаваемости">
						<div class="pick-item__label">Повышение узнаваемости</div>
					</label>
					<!-- ONE-ITEM END -->
					
					<div id="step3" class="btn-next-container" id="do"></div>
				</div>
			</div>
			<!-- ONE-STEP END -->
			<!-- ONE-STEP START -->
			<div class="step-slide step-slide-4">
				<h3 class="step-slide__title">
				Выберите дополнительные условия
				</h3>
				<div class="step-slide__grid">

					<!-- ONE-ITEM START -->
					<label for="step4-2" class="pick-item">
						<input class="pick-item__input" type="radio" name="step4" id="step4-2" value="Нужно создание под ключь">
						<div class="pick-item__label">Нужно создание под ключь</div>
					</label>
					<!-- ONE-ITEM END -->
					<!-- ONE-ITEM START -->
					<label for="step4-1" class="pick-item">
						<input class="pick-item__input" type="radio" name="step4" id="step4-1" value="Нужно создание сайта с последующим продвижением">
						<div class="pick-item__label">Нужно создание сайта с последующим продвижением</div>
					</label>
					<!-- ONE-ITEM END -->
					<!-- ONE-ITEM START -->
					<label for="step4-3" class="pick-item">
						<input class="pick-item__input" type="radio" name="step4" id="step4-3" value="Нужна дороботка старого сайта">
						<div class="pick-item__label">Нужна дороботка старого сайта</div>
					</label>
			<!-- ONE-ITEM END -->
			
			<div id="step4" class="btn-next-container" id="do"  ></div>
				</div>
				<input type="hidden" class="hidden-input-4" name="step4">
			</div>
			<!-- ONE-STEP END -->
			
			<!-- ONE-STEP START -->
			<div class="step-slide step-slide-5">
				<h3 class="step-slide__title">
				Выберите подарок
				</h3>
				<div class="step-slide__grid">

					<!-- ONE-ITEM START -->
					<label for="step5-1" class="pick-item">
						<input class="pick-item__input" type="radio" name="podarok" id="step5-1" value="Скидка на дизайн">
						<div class="pick-item__label">Скидка на дизайн</div>
					</label>
					<!-- ONE-ITEM END -->
					<!-- ONE-ITEM START -->
					<label for="step5-2" class="pick-item">
						<input class="pick-item__input" type="radio" name="podarok" id="step5-2" value="Настройка контекта бесплатно">
						<div class="pick-item__label">Настройка контекта бесплатно</div>
					</label>
					<!-- ONE-ITEM END -->
					<!-- ONE-ITEM START -->
					<label for="step5-3" class="pick-item">
						<input class="pick-item__input" type="radio" name="podarok" id="step5-3" value="Бесплатное оформление соц сетей">
						<div class="pick-item__label">Бесплатное оформление соц сетей</div>
					</label>
					<!-- ONE-ITEM END -->


					<div id="step5" class="btn-next-container" id="do"  ></div>
				</div>
			</div>
			<!-- ONE-STEP END -->
			
			<!-- ONE-STEP START -->
			<div class="step-slide bg-mockup">
				<h3 class="step-slide__title">
					Мы приступили к изучению условий. Напишите свой номер телефона, чтобы мы смогли с вами связаться.
				</h3><br>
				<div class="step-slide__grid">
				<!--<h4 class="step-slide__discount">Также бесплатно получите <br><span style="font-size:14px; font-weight:400;">- Скидку 20%<br>- Выбранный подарок к заказу</span></h4>-->
					<h4 class="step-slide__discount"></h4>
					<div class="last-step-form">

                        <label class="form__label">Выберите удобный способ связи:</label>
                        <div class="form-methods">
                            <div class="form-method form-method_phone form-method_current" data-type="phone">
                                <div class="form-method__icon form-method__icon_phone"></div>
                                <p class="form-method__title">Телефон</p>
                            </div>
                            <div class="form-method form-method_vk" data-type="viber">
                                <div class="form-method__icon form-method__icon_viber"></div>
                                <p class="form-method__title">Viber</p>
                            </div>
                            <div class="form-method form-method_whatsapp" data-type="whatsapp">
                                <div class="form-method__icon form-method__icon_whatsapp"></div>
                                <p class="form-method__title">Whatsapp</p>
                            </div>
                            <div class="form-method form-method_telegram" data-type="telegram">
                                <div class="form-method__icon form-method__icon_telegram"></div>
                                <p class="form-method__title">Telegram</p>
                            </div>                     
                        </div>

						<input class="last-step-form__input" name="phone" required type="text" placeholder="Введите контактный телефон" required="">
						<input class="form__input" name="methodType" type="hidden" value="phone">

						<button class="last-step-form__button btn-shine" ><span>получить консультацию</span></button>
						<div class="last-step-form__accept">Нажимая на кнопку, вы принимаете <a href="privacy.html" target="_blank">Положение и Согласие</a> на обработку персональных данных.</div>
					</div>
				</div>

			</div>
			<!-- ONE-STEP END -->


			<!-- ONE-STEP START -->
			<div class="step-slide">
			</div>
			<!-- ONE-STEP END -->

			<!-- ONE-STEP START -->
			<div class="step-slide">
				<!-- AFTER SUBMIT START -->
				<div class="after-submit">
					<div class="container">
						<h4 class="after-submit__title">Заявка отправлена</h4>
						</div>
				</div>
				<!-- AFTER SUBMIT END -->
			</div>
			<!-- ONE-STEP END -->
		</div>
	</div>
	<!-- STEPS END -->

</form>

<script src="main.js"></script>
<!--
<script src="js/common.js"></script>
<script src="libs/maskedinput/jquery.maskedinput.js"></script>
-->
<?php if (!empty($config)) include "../admin/include-body-end.php" ?>	

</body>
</html>
