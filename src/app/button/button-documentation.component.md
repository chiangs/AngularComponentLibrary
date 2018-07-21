# Button Component

<!-- TOC -->

- [Button Component](#button-component)
    - [Intro](#intro)
    - [Usage / API](#usage--api)
        - [Defaults](#defaults)
        - [For minimal functionality:](#for-minimal-functionality)
        - [Optionals](#optionals)
    - [Usage Examples](#usage-examples)

<!-- /TOC -->

## Intro

This is a reusable button that should be styled so that it is standard everywhere. It takes up 100% of height and width of the div the parent component decides. It handles selected / active state, disabled, handles button type to allow enter key for submission where appropriate, and loading.

**Note** There are many ways to handle responsive font so I've chosen to not include it and focus on the button itself; so Developer should incorporate that into the _button.component.scss_ (e.g., a mixin that sets min and max font size based on viewport, etc.)

I also decided not to reuse sass variables for the component stylesheet because Developer will most likely want to change up most of the styles anyway.

## Usage / API

### Defaults
If there are no values provided, the loader will be false and there will be default text to show that no data is provided to the button component, the event emitter on click will also not be available to the parent component unless declared. The type default is button, but can be set to submit to allow the user to use the `enter` key to submit the form such as the login page.

The button does not have a set width and is completely dependent upon the parent component to set the max width of the button. The component contains all of it's own animations and definition for it's css classes.

### For minimal functionality:
- `buttonText`: string, button label, the button text should be tied to the viewContent.textProperty instead of hard coded as much as possible to allow the language switcher to update the button text.
- `buttonClick`: eventemitter, notifies parent component that the button was clicked.

### Optionals
***Optional states are set to false if no value is passed in to the instance of the component.*** 
For optional disabled state:
- `isDisabled`: boolean, uses get-set and a private `_isDisable` variable to set css class. Do not directly access the private variable.

For optional activated or selected state:
This is used if there are a list of choices and you want to show the user that the option the button represents is selected. An example of this is in the order summary component.
- `isActivated`: boolean

For optional submit functionality, which allows the user to press the `enter` key to continue:
- `buttonSubmit`: boolean (true for submit)

For optional loading animation:
- `isLoading`: boolean, is dynamically set after view in initialized by the parent through get-set.
- the parent should create a isLoading variable and assign it to this input and default it to false. In the function that initializes the loading, set the variable to true and once the response comes back from the request, set the state back to false, don't forget to also set it back to false on error from request.

**Note:** It's unlikely you will use loading and activated states on the same button, but if you find yourself needing to, try unsetting the activated style just before setting the loading state.

## Usage Examples
```html
<!-- parent.component.html -->
<!-- Bare minimum -->
<app-button [buttonText]="textString" (buttonClick)="parentActionMethod()">

<!-- The activated optional-->
<app-button [isActivated]="someBooleanLogicResultVariable" (buttonClick)="parentActionMethod()">

<!-- A button that is disabled initially until some validation changes the variable and has the loader animation activated -->
<app-button [buttonText]="textString"
            [buttonSubmit]="true"
            [isDisabled]="disabledBooleanLogicResultVariable"
            [isLoading]="parentLoadingVariable"
            (buttonClick)="parentActionMethod()">
```

```js
// parent.component.ts
isLoading = false;

parentActionMethod() {
  this.isLoading = true;
  this.someSvc.action().subscribe(data => {
    if (dataSuccess) {
      // some logic operations
    this.isLoading = false;
    } else {
      this.isLoading = false;
      failureHandlingLogic();
    };
  })
}
```