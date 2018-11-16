# Vue Embedded Form

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

// Configure your endpoint of payment
const options = {
    clientSrc: 'https://api.payzen.eu',
    theme: "classic",
    publicKey: '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5'
};

Vue.use(LyraForm, options);
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
[minimal](examples/pre_loaded)       | pre-load the payment form to get it as fast as possible

## Configuration

### Theme

The theme property can be configured on the options object argument of the
LyraForm plugin.

#### Available themes

- classic
- material

If no **theme** is configured, no CSS will be applied to the final form.
