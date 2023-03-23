// Examples templates
// https://github.com/rodriguezcommaj/principles-of-email-design

import React,  from "react";
import ReactDOMServer from 'react-dom/server';

// https://github.com/beautify-web/js-beautify
import beautify from 'js-beautify';

import {TemplateHeaderBox } from '../components'

import {Settings} from "./Settings";
import {RawHtml} from "./RawHtml";
import {Content} from "./Content.jsx";


export const Template = () => {
  return (
    <div style={{height: "100%"}}>
      <TemplateHeaderBox title="Template 5"/>
      <Settings />
      <Content/>
    </div>
  )
};

const htmlFormatted = (content) => {
  const rawHtml = ReactDOMServer.renderToStaticMarkup(content)
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"');

  return beautify.html_beautify(rawHtml, { indent_size: 2, space_in_empty_paren: true })
}
const html = htmlFormatted(<RawHtml content={<Content/>}/>);
console.log(['template5'])
console.log(html)