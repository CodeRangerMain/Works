$(document).ready(function() {

	// var timerId = 0;

	// $('#testModal').click(function(event) {
	// 	$('#iframeModal').arcticmodal({
	// 		container: {
	// 			tpl: '<div class="arcticmodal-container"><table class="arcticmodal-container_i" style="width: 100%;max-width: 1170px;"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
	// 		},
	// 		beforeOpen: function (data, el) {
	// 			$('body').css('position', 'fixed');
	// 			$('#frameOpen').html('<iframe style="width: 100%;" src="index.html" scrolling="no" frameborder="0""></iframe>');

	// 			$('iframe').on('load', function(event) {
	// 				event.preventDefault();
	// 				frameHeight();
	// 			});

	// 			setTimeout(function() {
	// 				frameHeightRec();
	// 			}, 300);

	// 			$(window).on('resize', function() {
	// 				frameHeight();
	// 			});
	// 		},
	// 		afterClose: function () {
	// 			$('body').css('position', 'static');
	// 			$('#frameOpen').html('');
	// 			clearTimeout(timerId);
	// 			// console.log('clear');
	// 		}
	// 	});
	// });

	// function frameHeight () {
	// 	var height = $('iframe').contents().find('html').height();
	// 	$('iframe').height(height);
	// }

	// function frameHeightRec () {
	// 	var height = $('iframe').contents().find('html').height();
	// 	$('iframe').height(height);
	// 	timerId = setTimeout(function() {
	// 		frameHeightRec();
	// 	}, 100);
	// 	// console.log('call');
	// }

	$('input[name="phonee"]').mask('+7 (k99) 999-99-99');

	$('.step-slide__title').each(function(index, el) {
		$(el).prepend('<div class="step-slide__title-counter">' + (index + 1) + '</div>');
	});

	for (var i = 0; i < $('.step-slide').length - 1; i++) {
		$('.step__extender').append('<div class="step__extender-item"></div>');
	};

	var progress = {
		current: ( 100 / ($('.step-slide').length - 1) ),
		total: $('.step-slide').length,
		width: ( 100 / ($('.step-slide').length - 1) ),
		process: doProgress
	};

	// console.log(progress);

	function doProgress () {}

	var testSlider = $('.test-slider').bxSlider({
		mode: 'fade',
		infiniteLoop: false,
		speed: 0,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 0,
		touchEnabled: false,
		pager: false,
		nextSelector: '.btn-next-container',
		nextText: '<div class="btn-next"><span>на следующий шаг</span></div>',
		onSliderLoad: function (currentIndex) {
			// первоначальные стили
			$('.main-progress__text').eq(currentIndex).addClass('main-progress__text_active');
			$('.step__extender-item').eq(currentIndex).addClass('step__extender-item_active');
			$('.main-progress__extender').css('width', progress.width + '%');
		},
		onSlideAfter: function (slideElement, oldIndex, newIndex) {
			// активация кнопок
			$('.btn-next-container').removeClass('btn-next-container_active');
			$('.btn-next').removeClass('btn-next_active btn-shine');

			// изменение полосы загрузки
			progress.current += progress.width;
			$('.main-progress__extender').css('width', progress.current + '%');

			// изменение шага
			$('.step__extender-item').eq(newIndex).addClass('step__extender-item_active');
			$('.step__text span').html(newIndex + 1);

			// изменение заголовка в полосе загрузки
			if ( $('.main-progress__text').eq(newIndex).length != 0 ) {
				$('.main-progress__text').eq(oldIndex).removeClass('main-progress__text_active');
				$('.main-progress__text').eq(newIndex).addClass('main-progress__text_active');
			};

			var toTopDoc = window.parent.document.querySelector('.fancybox-slide--iframe');

			// console.log(toTopDoc);

			$(toTopDoc).animate({scrollTop: 0}, 0);

		}
	});

	// testSlider.goToSlide(4);

	$('.pick-item__input').on('change', function(event) {
		event.preventDefault();

		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active btn-shine');

		if ($('input[name=\'step5\']:checked').val() == 'Да')
		{
			$('.block_sum .form-group').css('display', 'inherit');
		} 
		else 
		{			
			$('.block_sum .form-group').css('display', 'none');	
		}

	});

	$('#sum').on('change', function(event) {
		event.preventDefault();

		var sum = $('#sum').val();

		if (sum > 0)
		{
			$('.btn-next-container').addClass('btn-next-container_active');
			$('.btn-next').addClass('btn-next_active btn-shine');

			$('.hidden-input-5').attr('value', 'Да, сумма: '+sum);
		} 
		else 
		{			
			$('.btn-next-container').removeClass('btn-next-container_active');
			$('.btn-next').removeClass('btn-next_active btn-shine');	
		}

	});	

	$('#sum').on('input', function () {
			var sum = $('#sum').val();

			if (sum > 0)
			{
				$('.btn-next-container').addClass('btn-next-container_active');
				$('.btn-next').addClass('btn-next_active btn-shine');

				$('.hidden-input-5').attr('value', 'Да, сумма: '+sum);
			} 
			else 
			{			
				$('.btn-next-container').removeClass('btn-next-container_active');
				$('.btn-next').removeClass('btn-next_active btn-shine');	
			}
	}); 


	$('#years').change(function(){
	  	var data = $(this).val();

	  	if(data > 0)
	  	{
	  		$('.btn-next-container').addClass('btn-next-container_active');
			$('.btn-next').addClass('btn-next_active btn-shine');

			$('.hidden-input-3').attr('value', data);			
	  	}
	  	else
	  	{
	  		$('.btn-next-container').removeClass('btn-next-container_active');
			$('.btn-next').removeClass('btn-next_active btn-shine');	
	  	}
	});


$('#item').click(function() {
	$('.btn-next-container').addClass('btn-next-container_active');
	$('.btn-next').addClass('btn-next_active btn-shine');
});
$('#item2').click(function() {
	$('.btn-next-container').addClass('btn-next-container_active');
	$('.btn-next').addClass('btn-next_active btn-shine');
});

$('.none').click(function() {
	$('.btn-next-container').addClass('btn-next-container_active');
	$('.btn-next').addClass('btn-next_active btn-shine');
})


	$(document).ready(function() {
			 var step1 = "",
			  step2 = "",
			  step3 = "",
			  step4 = "",
			  step5 = "",
			  step6 = "",
			  step7 = "",
			  step8 = "";

			 $('.pick-item').click(function() {

			  if($(this).closest('.step-slide').hasClass('step-slide-1')) {
					step1 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-1').attr('value', step1);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-2')) {
					step2 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-2').attr('value', step2);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-3')) {
					step3 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-3').attr('value', step3);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-4')) {
					step4 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-4').attr('value', step4);
			  }


			if($(this).closest('.step-slide').hasClass('step-slide-5')) {

				step5 = $(this).find('.pick-item__label').text();

				if(step5 == 'Да')
				{
					var sum = $("#sum").val();

					$('.hidden-input-5').attr('value', step5+', сумма: '+sum);
				}
				else
				{
					$('.hidden-input-5').attr('value', step5);
				}		
			 }


			if($(this).closest('.step-slide').hasClass('step-slide-6')) {
					step6 = $(this).find('.pick-item__label').text();
	        $('.hidden-input-6').attr('value', step6);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-7')) {
					step7 = $(this).find('.pick-item__label').text();
	        $('.hidden-input-7').attr('value', step7);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-8')) {
					step8 = $(this).find('.pick-item__label').text();
	        $('.hidden-input-8').attr('value', step8);
			  }
			});

		});


    

	

	$(".form-method").click(function() {
	        var e = $(this).data("type"),
	            t = $(this).closest("form"),
	            a = t.find(".form__label_method"),
	            o = t.find("[name=phone]"),
	            i = t.find("[name=methodType]");
	        switch (t.find(".form-method").removeClass("form-method_current"), $(this).addClass("form-method_current"), o.removeClass("masked"), o.unmask(), e) {
	            case "phone":
	                i.val("Телефон"), a.text("Введите контактный телефон:"), o.attr("placeholder", "Введите контактный телефон"), o.addClass("masked").mask("+7 (999) 999-99-99");
	                break;
	            case "viber":
	                i.val("Viber"), o.attr("placeholder", "Введите номер Viber");
	                break;
	            case "whatsapp":
	                i.val("Whatsapp"), o.attr("placeholder", "Введите номер Whatsapp");
	                break;
	            case "telegram":
	                i.val("Telegram"), o.attr("placeholder", "Введите номер Telegram");
	                break;
	            case "email":
	                i.val("Email"), o.attr("placeholder", "Введите адрес электронной почты");	                
	        }
	});

});
