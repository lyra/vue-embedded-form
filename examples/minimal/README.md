# Payment form from scratch with vue-cli

This page explain how-to create a dynamic payment form from scratch using
vue.js and vue-cli.

First, you need to install vue-cli 3: https://cli.vuejs.org/

## First, create the project

First, create the vue-cli HelloWorld project (with default values):

```sh
vue create vue-embedded-test
```

Run and test it:

```sh
cd vue-embedded-test
npm run serve
```

see the result on http://localhost:8081/

For more  details, see https://cli.vuejs.org/guide/creating-a-project.html

## Create your payment form component

First, Add the payment form component:

```sh
npm install --save @lyracom/vue-embedded-form
```

Create src/components/PaymentForm.vue with:

```html
<template>
    <lyra-form kr-form-token="DEMO-TOKEN-TO-BE-REPLACED"
            kr-language="en-EN"
            kr-theme="classic"
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
</template>

<script>
export default {
name: 'PaymentForm',
}
</script>
```

Remove HelloWorld.vue, and add in src/main.js line 3:

```javascript
// import the compoment
import LyraForm from "@lyracom/vue-embedded-form"

//define component setup parameters
const setup = {
clientDomain: 'https://api.payzen.eu',
publicKey: '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5'
};

// Load the component
Vue.use(LyraForm, setup);
```

In src/App.vue, replace:

```javascript
import HelloWorld from './components/HelloWorld.vue'
```

with:

```javascript
import PaymentForm from './components/PaymentForm.vue'
```

and update component list to:

```javascript
export default {
    name: 'app',
    components: {
        PaymentForm
    }
}
```

## Use it

In src/App.vue, update div (id=app) to:

```html
<div id="app">
    <PaymentForm />
</div>
```

Restart your developement server:

    npm run serve

go to http://localhost:8081/, enjoy.

## Run it from github

You can try the current example from the current github repository doing:

```sh
npm install
npm run server
```