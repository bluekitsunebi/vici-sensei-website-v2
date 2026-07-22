import type { Context } from '@netlify/edge-functions';
import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts';

const EUROZONE_COUNTRIES = new Set([
  'AT', 'BE', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR',
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES',
]);

export default async (request: Request, context: Context) => {
  const response = await context.next();
  const country = context.geo?.country?.code;

  let price = '$119';
  if (country === 'RO') {
    price = '440 RON';
  } else if (country && EUROZONE_COUNTRIES.has(country)) {
    price = '€119';
  }

  return new HTMLRewriter()
    .on('#base-price', {
      element(el) {
        el.setInnerContent(price);
      },
    })
    .transform(response);
};

export const config = { path: '/' };
