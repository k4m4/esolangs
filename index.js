'use strict';
const arrify     = require('arrify');
const pAny       = require('p-any');
const pify       = require('pify');
const pTimeout   = require('p-timeout');
const uf         = require('unfuck');

const esotericRegExps = {
	'ook!': '(Ook.|Ook?|Ook!)+',
	'pikalang': '(pi|pipi|pichu|ka|pikachu|pikapi|pika|chu)+',
	'solbofuck': '((ROCK SOLBO(\\n)?)?BW(E){1,9})+',
	'triplet': '([01]{3}(\s)?)+',
	// 'pogaack': '((pogack(!|\\?))|(pogaack(!|\\?))|(pogaaack(!|\\?))|(po(o)?ck!)|poock\\?)+',
	// 'namelesslanguage': '([01]{4})+',
	'brainfuck': '[+-<>.,\\[\\]]+'
};

const esotericCommands = {
    'ook!': ["Ook. Ook.", "Ook! Ook!", "Ook. Ook?", "Ook? Ook.", "Ook! Ook?", "Ook? Ook!", "Ook! Ook.", "Ook. Ook!"],
    'pikalang': ["pi", "ka", "pipi", "pichu", "pika", "chu", "pikachu", "pikapi"],
    'solbofuck': ["BWEEEE", "BWEEEEE", "BWEE", "BWEEE", "BWEEEEEEEE", "BWEEEEEEEEE", "BWEEEEEE", "BWEEEEEEE"],
    'triplet': ["111", "000", "001", "100", "110", "011", "010", "101"],
	// 'pogaack': ["pogaaack!", "poock!", "pogack!", "pogaack!", "pogack? ", "pogaack?", "pogaaack?", "poock?"], // 9th command is 'pock!'
	'brainfuck': ["+", "-", ">", "<", "[", "]", ".", ","]
};

function detectLang (text) {
	for (const lang in esotericRegExps) {
		var detectedLang = '';
		if (esotericRegExps.hasOwnProperty(lang)) {
			var regExp = new RegExp(esotericRegExps[lang], 'g');
			if (regExp.test(text)) {
				detectedLang = lang;
				break;
			}
		}
	}
	if (detectedLang.length > 1) {
		return detectedLang;
	} else {
		return "Code does not correspond to any of our supported essoteric languages";
	}
}

function parseToArray (text, lang) {
	if (lang === 'ook!') {
		return text.match(/\S+\s+\S+/g);
	} else if (lang === 'namelesslanguage') {
		return text.match(/.{1,4}/g);
	} else if (lang === 'solbofuck') {
		return text.split(' ').slice(2);
	} else {
		return text.split(' ');
	}
};

function interpret (text) {
	const detectedLang = detectLang(text);
	const parsedArray = parseToArray(text, detectedLang);
	const detectedLangCommands = esotericCommands[detectedLang];
	const bfCommands = esotericCommands['brainfuck'];

	var bf = '';
	if (detectedLang !== 'brainfuck') {
		for (const i in parsedArray) {
			const command = parsedArray[i];
			bf += bfCommands[detectedLangCommands.indexOf(command)];
		}
	} else {
		bf = text;
	}
	
	const compiler = uf.compiler();
	var plaintext = '';
	try {
		plaintext = compiler.run(bf, '');
	} catch (err) {
		throw new Error(err.message);
	}

	return plaintext;
};

module.exports = (dests, opts) => {
  opts = opts || {};
  opts.timeout = typeof opts.timeout === 'number' ? opts.timeout : 10000;

  const p = pAny(arrify(dests).map(interpret));
  return pTimeout(p, opts.timeout).catch(() => 'Esoteric code could not be interpreted');
};