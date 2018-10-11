$(document).ready(function() {
	$(".sidebar").on("click", ".submit", function(event)
	{
		event.preventDefault();
		form = $(this).closest("form")
		$.ajax({
			url: form.attr("action"),
			type: form.attr("method"),
			data: form.serialize()
		})
		.done(function(response) {
			elements = JSON.parse(response)
			$(".post-list").prepend(elements.post)
			form.closest(".sidebar").append(elements.form)
			form.hide()
		})
	})
	$(".content").on("click", ".new-post-like-form", function(event) {
		event.preventDefault()
		form = $(this)
		$.ajax({
			url: form.attr("action"),
			type: "PUT"
		})
		.done(function(response) {
			form.closest("article").find(".post-likes").replaceWith(response)
		})
	})


});