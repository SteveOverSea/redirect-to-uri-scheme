# Redirect to URI Scheme

## Motivation

My initial need for this project was that I wanted to automatically open certain domains in another browser on iOS.

The redirect rule for the browser is set with [Hyperweb](https://guide.hyperweb.app/).

I know I coud open apps on my mobile phone via URI schemes. The problem was that the redirect url that was given to Hyperweb was always prefixed with `https://` so that didn't work.

That's why I wrote a little edge-function that redirects to a URI scheme for me!

## How to use

### Live 
- free netlify tier
- no UI

https://redirect-to-uri-scheme.netlify.app/

## Example Request

`https://redirect-to-uri-scheme.netlify.app/?scheme=brave&path=open-url?url=https://search.brave.com`

### Options

| Key      | Description                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- |
| `scheme` | the URI scheme part before the `://` (e.g. brave)                                                     |
| `path`   | the URI path part after the `://` (e.g. open-url?url=search.brave.com/) which per default uri-encoded |
| `encode` | tells if the path is uri-encoded - set to false if not needed (default: true)                         |
