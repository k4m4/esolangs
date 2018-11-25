# esolangs [![Build Status](https://travis-ci.org/k4m4/esolangs.svg?branch=master)](https://travis-ci.org/k4m4/esolangs)

> Detect and execute esoteric programming languages.


## Install

```
~ ❯❯❯ npm install esolangs
```


## Usage

```js
const esolangs = require('esolangs');

esolangs('++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>>---.+++.+++++++++.----.+++++.').then(response => {
    console.log(response);
    //=> 'admin'
});

esolangs('pi pi pi pi pi pi pi pi pi pi pika pipi pi pipi pi pi pi pipi pi pi pi pi pi pi pi pipi pi pi pi pi pi pi pi pi pi pi pichu pichu pichu pichu ka chu pipi pipi pipi pipi pi pi pi pi pi pi pi pi pi pi pi pi pi pi pi pi pi pikachu ka ka ka ka ka ka ka pikachu ka ka ka ka ka pikachu ka ka ka ka ka ka pikachu pi pi pi pi pi pi pi pi pi pi pi pi pikachu pi pi pi pikachu ka ka ka ka pikachu').then(plaintext => {
    console.log(plaintext);
    //=> 'unicorn'
});

esolangs('ok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook. Ook? Ook. Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook! Ook? Ook! Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook. Ook! Ook! Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook.').then(response => {
    console.log(response);
    //=> 'foobar'
});
```


## API

### esolangs(code, [options])

Returns the response of the executed code.

#### code

Type: `string`

Esoteric code to detect & execute.

#### options

##### timeout

Type: `number`

Timeout in milliseconds after which a request is considered failed. Default: `5000`.


## Supported Esoteric Programming Languages

- [`brainf*ck`](https://esolangs.org/wiki/brainfuck)
- ['ook!'](https://esolangs.org/wiki/ook!)
- ['pikalang'](https://esolangs.org/wiki/pikalang)
- ['solbofuck'](https://esolangs.org/wiki/solbofuck)
- ['triplet'](https://esolangs.org/wiki/triplet)


## Related

- [esolangs-cli](https://github.com/k4m4/esolangs-cli) - CLI for this module


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)