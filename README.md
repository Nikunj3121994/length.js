<div align="center">
  <a href="https://github.com/appalaszynski/length.js">
    <img src="https://user-images.githubusercontent.com/35331661/42526556-6ea55d0e-8476-11e8-8a32-e552ec5c0497.png" height="125px">
  </a>
  <h1>Length.js</h1>
  <p>
    <em>JavaScript Library for Length Units Conversion</em>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/length.js">
      <img src="https://img.shields.io/npm/v/length.js.svg" alt="Version" />
    </a>
    <a href="https://github.com/appalaszynski/length.js/blob/master/LICENSE">
      <img src="https://img.shields.io/npm/l/length.js.svg" alt="License" />
    </a>
    <a href="https://travis-ci.org/appalaszynski/length.js">
      <img src="https://travis-ci.org/appalaszynski/length.js.svg?branch=master" alt="Build Status" />
    </a>
    <a href="https://coveralls.io/github/appalaszynski/length.js">
      <img src="https://coveralls.io/repos/github/appalaszynski/length.js/badge.svg?branch=master" alt="Coverage Status" />
    </a>
  </p>
  <br>
</div>

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

**Length.js** was designed to work both in the browser and in Node.js.

### Browser

```html
<script src="length.js"></script>
```

**Length.js** is available on **unpkg CDN** in [compressed](https://unpkg.com/length.js/min/length.min.js) and [uncompressed](https://unpkg.com/length.js) version.

### Node.js

```shell
$ npm install length.js
```

```javascript
var length = require('length.js');
// or using ES6 import
import length from 'length.js';
```

---

## Usage

**Length.js** creates an object which contains **value** and **unit**.
To get this object, simply call [``length()``](#lengthvalue-unit) with two supported arguments. Then you can call available [methods](#methods).  
  
The **``Length``** prototype is exposed through **``length.fn``** (if you want to add your own functions).

<br>

### ``length(value, unit)``

Creates an object which contains value and unit.

#### Arguments
* **value** _**``(Number)``**_: Number of units.
* **unit** _**``(String)``**_: Unit type.  
  
  Available unit types: 
  * **``pm``**: picometre: _(1 / 1 000 000 000 000) m_,
  * **``nm``**: nanometre: _(1 / 1 000 000 000) m_,
  * **``um``**: micrometre: _(1 / 1 000 000) m_,
  * **``mm``**: millimetre: _(1 / 1 000) m_,
  * **``cm``**: centimetre: _(1 / 100) m_,
  * **``dm``**: decimetre: _(1 / 10) m_,
  * **``m``**: metre,
  * **``dam``**: decametre: _10 m_,
  * **``hm``**: hectoametre: _100 m_,
  * **``km``**: kilometre: _1 000 m_,
  * **``nmi``**: nautical mile: _1 852 m_,
  * **``ft``**: foot: _0.3048 m_,
  * **``in``**: inch: _0.0254 m_,
  * **``yd``**: yard: _0.9144 m_,
  * **``fm``**: fathom: _1.8288 m_,
  * **``mi``**: mile: _1 609.344 m_,
  * **``ld``**: lunar distance: _384 402 000 m_,
  * **``au``**: astronomical unit: _149 597 870 700 m_,
  * **``ly``**: light year: _9 460 730 472 580 800 m_,
  * **``pc``**: parsec: _((648 000 / π) * 149 597 870 700) m_.

#### Returns
* _**``(Object)``**_: New **``Length``** object.

#### Example
```javascript
length(12, 'cm');
// => { value: 12, unit: 'cm }
```

---

## Methods

### ``.to(unit)``

#### Arguments
* **unit** _**``(String)``**_: Unit type.

#### Returns
* _**``(Object)``**_: New **``Length``** object with value converted to passed unit.

#### Example
```javascript
length(100, 'cm').to('m');
// => { value: 1, unit: 'm' }
```
 
<br>

### ``.add(value, [unit])``

#### Arguments
* **value** _**``(Number)``**_: The number to increment value.
* **[unit]** _**``(String)``**_: Unit type in which the value was given.

#### Returns
* _**``(Object)``**_: New **``Length``** object with incremented value.

#### Example
```javascript
length(100, 'cm').add(2);
// => { value: 102, unit: 'cm' }
length(100, 'cm').add(2, 'dm');
// => { value: 120, unit: 'cm' }
```

<br>

### ``.toPrecision([digits])``

#### Arguments
* **[digits]** _**``(Number)``**_: The number of digits to appear after the decimal point.

#### Returns
* _**``(Object)``**_: New **``Length``** object with fixed value.

#### Example
```javascript
length(100, 'cm').toPrecision();
// => { value: 100, unit: 'cm' }
length(100, 'cm').toPrecision(2);
// => { value: 100, unit: 'cm' }
length(0.97982, 'cm').toPrecision(2);
// => { value: 0.98, unit: 'cm' }
```

<br>

### ``.getValue()``

#### Returns
* _**``(Number)``**_: Current value.

#### Example
```javascript
length(100, 'cm').getValue();
// => 100
```

<br>

### ``.getUnit()``

#### Returns
* _**``(String)``**_: Current unit type.

#### Example
```javascript
length(100, 'cm').getUnit();
// => cm
```

<br>

### ``.getString()``, ``.toString()``

#### Returns
* _**``(String)``**_: String containing value and unit type.

#### Example
```javascript
length(100, 'cm').getString();
length(100, 'cm').toString();
// => 100cm
console.log(length(10, 'm') + '');
// => 10m
```

---

## Contributing

All contributions and suggestions are welcome! For suggested improvements, please create an [issue](https://github.com/appalaszynski/length.js/issues). For direct contributions, please [fork](https://github.com/appalaszynski/length.js/fork) the repository, create your feature branch, commit your changes, push commits to the branch and create a new [pull request](https://github.com/appalaszynski/length.js/pulls).

---

## License

The code is open source and available under the [MIT License](https://github.com/appalaszynski/length.js/blob/master/LICENSE).
