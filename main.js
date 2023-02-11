const navbar = document.querySelector('nav'),
	toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => {
	navbar.classList.toggle('close')
})
