const qs = require('qs');
const Urijs = require('urijs');
const _ = require('lodash');

/**
 * Parses a given URL and returns an object with separated components.
 * @param {string} url - The URL to be parsed.
 * @return {Object} An object containing the parsed URL components.
 */
const parseUrl = (url) => {
  const uri = Urijs(url);
  return {
    protocol: uri.protocol(),
    username: uri.username(),
    password: uri.password(),
    host: uri.host(),
    port: uri.port(),
    pathname: uri.pathname(),
    query: qs.parse(uri.query()),
    fragment: uri.fragment()
  };
};

/**
 * Stringifies URL components back into a URL string.
 * @param {Object} components - The URL components object.
 * @return {string} The constructed URL string from components.
 */
const stringifyUrl = (components) => {
  const uri = new Urijs()
    .protocol(components.protocol)
    .username(components.username)
    .password(components.password)
    .host(components.host)
    .port(components.port)
    .pathname(components.pathname)
    .query(qs.stringify(components.query))
    .fragment(components.fragment);
  return uri.toString();
};

module.exports = { parseUrl, stringifyUrl };
