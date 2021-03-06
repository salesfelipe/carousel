# Carousel

Carousel is a canonical component that any VTEX store can install.

## Continuous Integrations 

### Travis CI 
[![Build Status](https://travis-ci.org/vtex-apps/carousel.svg?branch=master)](https://travis-ci.org/vtex-apps/carousel)

## Usage

Add "vtex.carousel" as your app dependency.

## Schema Properties

```javascript
     autoplay: {
      type: 'boolean',
      title: 'Autoplay',
      default: true,
    },
    showDots: {
      type: 'boolean',
      title: 'Show dots',
      default: true,
    },
    showArrows: {
      type: 'boolean',
      title: 'Show arrows',
      default: true,
    },
    height: {
      type: 'number',
      title: 'Banner max height size (px)',
      default: 420,
      enum: [420, 440],
    },
    mobileHeight: {
      type: 'number',
      title: 'Banner max height size on mobile (px)',
      default: 332,
      enum: [332, 156],
    },
    autoplaySpeed: {
      type: 'number',
      title: 'Autoplay speed(sec):',
      default: 5,
      enum: [4, 5, 6],
    },
    banner: {
      type: 'object',
      title: 'Banner ',
      properties: {
        image: {
          type: 'string',
          title: 'Banner image',
        },
        mobileImage: {
          type: 'string',
          title: 'Banner mobile image',
        },
        page: {
          type: 'string',
          title: 'Banner link',
        },
        description: {
          type: 'string',
          title: 'Banner description',
        },
        targetParams: {
          type: 'object',
          title: 'Banner target params',
          properties: {
            params: {
              type: 'string',
              title: 'Params',
            },
          },
        },
      },
    }
```

### Running Tests

To run the test suit, type the following in the terminal, inside the folder `react`

```sh
$ npm t     # this
```

## Troubleshooting

You can check if others are experiencing similar issues [here](https://github.com/vtex-apps/carousel/issues). Also feel free to [open issues](https://github.com/vtex-apps/carousel/issues/new).
