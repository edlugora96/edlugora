/* jshint unused:false */
import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
const year = moment().format('YYYY') === '2019' ? moment().format('YYYY') : `2019 - ${moment().format('YYYY')}`;
const markFooter = `
  Icons made by [Freepik] from [www.flaticon.com]\n
  is licensed by [CC 3.0 BY]\n
  © ${year} por Eduardo Gonzalez

  [Freepik]: https://www.freepik.com/
  [www.flaticon.com]: https://www.flaticon.es/
  [CC 3.0 BY]: http://creativecommons.org/licenses/by/3.0/
`;
const Footer = () => pug`
  footer.Home-footer
    ReactMarkdown(source=markFooter)
`;

export default Footer;