const link = document.getElementById('link');

function start() {
	const bolds = document.getElementsByTagName('b');
	for (let bold of bolds) {
		bold.classList.toggle('highlight');
	}
}

link.addEventListener('mouseover', start); 
link.addEventListener('mouseout', start);