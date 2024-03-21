# URL Utility Functions

The **URL Utility Functions** module provides functions for parsing and stringifying URL components in JavaScript. It allows you to easily separate different parts of a URL and reconstruct them into a valid URL string.

## Installation

You can install the **URL Utility Functions** module via npm:

```
npm install url-utility-functions
```

## Usage

```javascript
const { parseUrl, stringifyUrl } = require('url-utility-functions');

// Parse a URL
const url = 'https://example.com/path?query=string#fragment';
const urlComponents = parseUrl(url);
console.log('Parsed URL:', urlComponents);

// Stringify URL components
const components = {
  protocol: 'https',
  host: 'example.com',
  pathname: '/path',
  query: { query: 'string' },
  fragment: 'fragment'
};
const urlString = stringifyUrl(components);
console.log('Constructed URL:', urlString);
```

## Functions

### `parseUrl(url: string): Object`

Parses a given URL and returns an object with separated components.

- `url`: The URL to be parsed.

Returns an object containing the parsed URL components, including protocol, username, password, host, port, pathname, query parameters, and fragment.

### `stringifyUrl(components: Object): string`

Stringifies URL components back into a URL string.

- `components`: The URL components object.

Returns the constructed URL string from components.

## Dependencies

The **URL Utility Functions** module depends on the following libraries:

- qs: A library for parsing and stringifying URL query strings.
- Urijs: A library for working with URLs.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
