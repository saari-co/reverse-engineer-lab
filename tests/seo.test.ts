import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canonicalRedirect, metaDescription, authorEntity } from '../src/lib/seo';
test('canonical redirect preserves encoded path and query and avoids loops', () => {
  for (const input of ['http://reverseengineerlab.com/a%20b?x=1&y=2', 'https://www.reverseengineerlab.com/a%20b?x=1&y=2']) {
    assert.equal(canonicalRedirect(new URL(input))?.href, 'https://reverseengineerlab.com/a%20b?x=1&y=2');
  }
  assert.equal(canonicalRedirect(new URL('https://reverseengineerlab.com/a')), null);
  assert.equal(canonicalRedirect(new URL('http://localhost:4321/a')), null);
  assert.equal(canonicalRedirect(new URL('https://reverseengineerlab.com.attacker.test/a')), null);
});
test('descriptions end at word boundaries, normalize whitespace and preserve short text', () => {
  assert.equal(metaDescription('A short\nsummary.'), 'A short summary.');
  assert.equal(metaDescription('One two three four five', 15), 'One two three…');
  assert(metaDescription('word '.repeat(60)).length <= 160);
});
test('editorial brand is an organization; individual contributors remain people', () => {
  assert.equal(authorEntity('Reverse Engineer Lab')['@type'], 'Organization');
  assert.equal(authorEntity('A contributor')['@type'], 'Person');
});
