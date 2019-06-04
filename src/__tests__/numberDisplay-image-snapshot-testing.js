import React from 'react'
import { render, cleanup } from '@testing-library/react'
import {toMatchImageSnapshot} from 'jest-image-snapshot'
import NumberDisplay from 'NumberDisplay'
import puppeteer from 'puppeteer'

expect.extend({ toMatchImageSnapshot });

describe('jest-image-snapshot usage with an image received from puppeteer', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('works', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});