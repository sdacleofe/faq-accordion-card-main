# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

## Desktop Preview

---

![](/design/desktop-preview-f.png)

## Desktop State Preview

---

![](/design/desktop-preview-states-f.png)

## Mobile Preview

---

![](/design/mobile-design-f.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [FAQ Accordion Layout](https://sdacleofe.github.io/faq-accordion-card-main/)

Note: links are not yet available.

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- CSS Position

### What I learned

I got my hands dirty manipulating the use of CSS positioning. It was challenging, but I think I nailed it!
Additionally, I effectively sidestepped the need for using !important in my mobile CSS by utilizing the "unset" property.

```sass
.container:first-child {
  display: flex
  align-items: center
  position: relative
  height: auto
  width: 100%

  .illustration {
      display: flex
      align-items: center
      position: relative
      overflow: hidden
      height: 100%
      width: 100%

      .pattern {
          position: absolute
          background-image: url(/images/bg-pattern-desktop.svg)
          background-repeat: no-repeat
          background-size: contain
          height: 1266px
          width: 1245px
          left: -790px
          top: -384px
      }

      .woman-online {
          position: absolute
          background-image: url(/images/illustration-woman-online-desktop.svg)
          background-repeat: no-repeat
          background-size: contain
          background-position: right
          height: 672px
          width: 559px
          left: -105px
      }

  }

  .illustration-box {
      position: absolute;
      background-image: url(/images/illustration-box-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      background-position: right center
      height: 191px
      width: 284px
      left: -182px
      margin-top: 95px
      z-index: 1
  }
}
```

### Useful resources

- [ChatGPT](https://www.example.com) - This helped me for finding answers to my questions. I really liked this pattern and will use it going forward.

## Author

- Website - [Shanice](https://github.com/sdacleofe/about-me)
- Frontend Mentor - [@sdacleofe](https://www.frontendmentor.io/profile/sdacleofe)
