var isPost = false;
var isFullWidth = false;
var hasPagination = false;

var headerPos = 0.3;

function positionHeaders()
{
	$('article.post section').each(function()
	{
		// remove any header positioning
		$(this).removeClass('fixed');
		$(this).removeClass('scroll-bottom');
		$(this).find('.section-image-background').removeClass('above');
		$(this).find('.section-image-background').removeClass('below');

		// check if current section
		if($(window).scrollTop() + $(window).height() * headerPos >= $(this).offset().top
				&& $(window).scrollTop() + $(window).height() * headerPos <= $(this).offset().top + $(this).outerHeight() - $(this).find('.section-header').outerHeight())
		{
			$(this).addClass('fixed');	
		}
		else
		{
			// check if section is above header position
			if($(window).scrollTop() + $(window).height() * headerPos > $(this).offset().top + $(this).outerHeight() - $(this).find('.section-header').outerHeight())
			{
				$(this).addClass('scroll-bottom');

				if($(window).scrollTop() + $(window).height() * headerPos > $(this).offset().top + $(this).outerHeight())
				{
					$(this).find('.section-image-background').addClass('above');
				}
			}
			else
			{
				$(this).find('.section-image-background').addClass('below');
			}
		}
	});
}

function fixPagination()
{
	// fix pagination buttons
	$('.pagination').css('margin-top', '-' + $('.pagination').outerHeight() + 'px');
}

function fullStyle()
{
	// reset any modifications
	$('article.post section .section-wrapper').each(function()
	{
		$(this).removeAttr('style');
	});

	// if only one section
	if($('article.post section').length == 1)
	{
		// make sure total height matches page height
		if($('body').height() < $(window).height())
		{
			// add height to section-wrapper to compensate
			$('article.post section').first().find('.section-wrapper').css('height', '+=' + ($(window).height() - $('body').height()));
		}
	}
	// if more than one section
	else
	{
		// make sure height is greater than header position + 2 * header height
		$('article.post section').each(function()
		{
			if($(this).outerHeight() < $(window).height() * headerPos + $(this).find('.section-header').outerHeight() * 2)
			{
				// add height to section-wrapper to compensate
				$(this).find('.section-wrapper').css('height', '+=' + (($(window).height() * headerPos + $(this).find('.section-header').outerHeight() * 2) - $(this).outerHeight()));
			}
		})

		// make sure last section height is greather than 1 - header position + header height
		if($('article.post section').last().outerHeight() < $(window).height() * (1 - headerPos) + $('article.post section').last().find('.section-header').outerHeight())
		{
			// add height to section-wrapper to compensate
			$('article.post section').last().find('.section-wrapper').css('height', '+=' + (($(window).height() * (1 - headerPos) + $('article.post section').last().find('.section-header').outerHeight()) - $('article.post section').last().outerHeight()));
		}

		// make sure combined height of sections extends to page height
		if($('body').height() < $(window).height())
		{
			// add height to last section-wrapper to compensate
			$('article.post section').last().find('.section-wrapper').css('height', '+=' + ($(window).height() - $('body').height()));
		}
	}
}

function inlineStyle()
{
	// reset any modifications
	$('article.post section .section-wrapper').each(function()
	{
		$(this).removeAttr('style');
	});

	// if only one section, make sure total height extends to bottom of page
	if($('article.post section').length == 1
		&& $('body').height() < $(window).height())
	{
		// add height to section-wrapper to compensate
		$('article.post section').first().find('.section-wrapper').css('height', '+=' + ($(window).height() - $('body').height()));
	}
}

function listStyle()
{
	// reset any modifications
	$('article.post-link a').each(function()
	{
		$(this).removeAttr('style');
	});

	// if only one article
	if($('article.post-link').length == 1)
	{
		// make sure total height extends to bottom of page
		if($('body').height() < $(window).height())
		{
			// add height to section-wrapper to compensate
			$('article.post-link a').css('height', '+=' + ($(window).height() - $('body').height()));
		}
	}
	// if more than one article
	{
		// make sure combined height of articles extends to bottom of page
		if($('body').height() < $(window).height())
		{
			// add height to first article to compensate
			$('article.post-link').first().find('a').css('height', '+=' + ($(window).height() - $('body').height()));
		}
	}
}

$(document).ready(function()
{
	// check if media is screen
	if($('header#top').css('marginBottom') == "1px")
	{
		if($('article.post').length > 0)
		{
			isPost = true;

			// check if screen width is greater than 1024px
			if($('header#top').outerWidth() == $(window).width() / 2)
			{
				isFullWidth = true;
				fullStyle();
				positionHeaders();
			}
			else
			{
				inlineStyle();
			}
		}
		else
		{
			if($('.pagination').length > 0)
			{
				hasPagination = true;
				fixPagination();
			}

			listStyle();
		}
	}

	$(window).resize(function()
	{
		if(isPost)
		{
			// check if screen width is greater than 1024px
			if($('header#top').outerWidth() == $(window).width() / 2)
			{
				isFullWidth = true;
				fullStyle();
			}
			else
			{
				isFullWidth = false;
				inlineStyle();
			}
		}
		else
		{
			listStyle();
		}

		if(hasPagination)
		{
			fixPagination();
		}
	});

	$(window).scroll(function()
	{
		if(isFullWidth)
		{
			positionHeaders();
		}
	});
});