# Vue Embedded Form

[![Build Status](https://travis-ci.org/lyra/vue-embedded-form.svg?branch=develop)](https://travis-ci.org/lyra/vue-embedded-form)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/lyra/vue-embedded-form/blob/master/LICENSE)

- [Installation](#installation)
    - [Installation with Yarn](#with-yarn)
    - [Installation with NPM](#with-npm)
- [Usage](#usage)
    - [Component as HTML](#with-html)
    - [Component as Pug](#with-pug)
- [Configuration](#configuration)


## Installation

Add the next package to your library:

### With Yarn

```bash
yarn add @lyracom/vue-embedded-form
```

### With NPM

```bash
npm install --save @lyracom/vue-embedded-form
```

## Usage

You can add a form to any Vue2 application as follows:

```javascript
// Import the library and get the plugin for Vue2
import LyraForm from "@lyracom/vue-embedded-form"

//define component setup options
const setup = {
    'kr-client-domain': 'https://api.payzen.eu',
    'kr-theme': "classic",
    'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5'
};

Vue.use(LyraForm, setup);
```

Now, you can add the component to your Vue views or components as:

### With HTML

```html
<lyra-form kr-form-token="DEMO-TOKEN-TO-BE-REPLACED"
           kr-language="es-ES"
           kr-post-url-success="paid.php">

    <!-- payment form fields -->
    <div class="kr-pan"></div>
    <div class="kr-expiry"></div>
    <div class="kr-security-code"></div>

    <!-- payment form submit button -->
    <button class="kr-payment-button"></button>

    <!-- error zone -->
    <div class="kr-form-error"></div>
</lyra-form>
```

### With Pug

```pug
lyra-form(
    kr-form-token="DEMO-TOKEN-TO-BE-REPLACED"
    kr-language="es-ES"
    kr-post-url-sucess="paid.php"
)
    // payment form fields
    .kr-pan
    .kr-expiry
    .kr-security-code

    // payment form submit button
    .kr-payment-button

    // error zone
    .kr-form-error
```

## Example

Example                              | Description
------------------------------------ | ---------------------------------------------------
[minimal](examples/minimal)          | a minimal example using vue-cli
[pre-loaded](examples/pre_loaded)    | pre-load the payment form to get it as fast as possible

## Parameters

The allowed configuration parameters are:

Parameter                            | Description                                                  | Setup    | Template  | Runtime  |
-------------------------------------|--------------------------------------------------------------|:--------:|:---------:|:--------:|
kr-client-domain                     | Sets the endpoint of the library                             | &#10003; | &#10060;  | &#10060; |
kr-public-key                        | Public key used for the payment                              | &#10003; | &#10060;  | &#10060; |
kr-language                          | Language used on the payment form                            | &#10003; | &#10003;  | &#10003; |
kr-post-url-success                  | The URL to POST on successfull payment                       | &#10003; | &#10003;  | &#10003; |
kr-post-url-refused                  | The URL to POST on failed payment                            | &#10003; | &#10003;  | &#10003; |
kr-clear-on-error                    | Disable the security code cleaning after a failed payment    | &#10003; | &#10003;  | &#10003; |
kr-hide-debug-toolbar                | Disables the toolbar (only visible for test public keys)     | &#10003; | &#10003;  | &#10003; |
kr-placeholder-expiry                | Changes the default placeholder of the expiry field          | &#10003; | &#10003;  | &#10003; |
kr-placeholder-pan                   | Changes the default placeholder of the pan field             | &#10003; | &#10003;  | &#10003; |
kr-placeholder-security-code         | Changes the default placeholder of the security code field   | &#10003; | &#10003;  | &#10003; |

### setup parameters

All the **Parameters** are configurable on the setup step adding the value on the corresponding key as the next example:

```javascript
// Import the library and get the plugin for Vue2
import LyraForm from "@lyracom/vue-embedded-form"

// Configure your endpoint of payment
const setup = {
    'kr-client-domain': 'https://api.payzen.eu',
    'kr-post-url-success': '/post-result',
    'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
    'kr-theme': "classic",
    (...)
};

Vue.use(LyraForm, setup);
```

### template parameters

All the **Parameters** enabled for templates are configurable on the template step adding the value on the corresponding HTML attribute on the lyra-form component as the next example:

```html
<lyra-form
    kr-placeholder-pan="My pan!"
    kr-hide-debug-toolbar="true"
    kr-post-url-success="/my-post"
    ...
    >
    ...
</lyra-form>
```

### Runtime parameters

All the **Parameters** enabled for runtime are configurable on the runtime calling the next KR *setFormConfig*
library method:

```javascript
KR.setFormConfig({
    "kr-post-url-success": "/my-post",
    "kr-placeholder-expiry": "My expiration date",
});
```

### Themes

The theme property can be configured on the setup object argument of the
LyraForm plugin. Available themes are:

- classic
- material

If no **theme** is configured, no CSS will be applied to the final form.
