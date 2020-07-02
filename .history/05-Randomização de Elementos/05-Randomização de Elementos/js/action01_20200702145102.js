$('#result').text('');

function executar() {
	let txt = '';

	const randomNormal = tf.randomNormal([2,2])

	
	txt += 'randomNormal:\n\n';	
	txt += randomNormal.toString() + '\n\n';




	
	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
