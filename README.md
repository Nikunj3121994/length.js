<div align="center">
  <h1>Length.js</h1>
  <p>
    <em> JavaScript library for length units conversion</em>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/length.js">
      <img src="https://img.shields.io/npm/v/length.js.svg" />
    </a>
    <a href="https://github.com/appalaszynski/length.js/blob/master/LICENSE">
      <img src="https://img.shields.io/npm/l/length.js.svg" />
    </a>
    <a href="https://travis-ci.org/appalaszynski/length.js">
      <img src="https://travis-ci.org/appalaszynski/length.js.svg?branch=master" />
    </a>
    <a href="https://coveralls.io/github/appalaszynski/length.js">
      <img src="https://coveralls.io/repos/github/appalaszynski/length.js/badge.svg?branch=master" />
    </a>
  </p>
  <br>
  <br>
</div>

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

<hr />

### ``length(value, unit)``

Creates an object which contains value and unit.

#### Arguments
* **value** _**``(Number)``**_: Number of units.
* **unit** _**``(String)``**_: Unit type.  
  
  Available unit types: 
  * **``pm``**: picometre,
  * **``nm``**: nanometre,
  * **``um``**: micrometre,
  * **``mm``**: millimetre,
  * **``cm``**: centimetre,
  * **``dm``**: decimetre,
  * **``m``**: metre,
  * **``dam``**: dacametre,
  * **``hm``**: hectoametre,
  * **``km``**: kilometre,
  * **``nmi``**: nautical mile,
  * **``ft``**: foot,
  * **``in``**: inch,
  * **``yd``**: yard,
  * **``fm``**: fathom,
  * **``mi``**: mile,
  * **``au``**: astronomical unit,
  * **``ly``**: light year,
  * **``pc``**: parsec.

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
 
---

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

---

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

---

### ``.getValue()``

#### Returns
* _**``(Number)``**_: Current value.

#### Example
```javascript
length(100, 'cm').getValue();
// => 100
```

---

### ``.getUnit()``

#### Returns
* _**``(String)``**_: Current unit type.

#### Example
```javascript
length(100, 'cm').getUnit();
// => cm
```

---

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
