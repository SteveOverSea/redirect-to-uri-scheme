const SCHEME_PARAM = 'scheme';
const PATH_PARAM = 'path';
const URL_ENCODE_PARAM = 'encode';

export default (request) => {
  const params = new URL(request.url).searchParams;

  const scheme = params.get(SCHEME_PARAM);
  const path = params.get(PATH_PARAM);
  const encode = params.get(URL_ENCODE_PARAM) !== 'false';

  if (!scheme || !path) {
    return new Response(null, { status: 400 });
  }

  const redirectURL = `${scheme}://${encode ? encodeURI(path) : path}`;

  return Response.redirect(redirectURL);
};

export const config = {
  path: '/'
};
