import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: 'h50mz5ycmst4',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'bBdj49Dif0fsCbV6cKuRHSlOtWwmB3vwX-_tekSeh9A',
});
