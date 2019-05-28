/**
 * Copyright (c) 2018 jamcha, (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href="https://jamcha-aa.github.io/">
              Blog
            </a>
            <a href="https://github.com/jamcha-aa/Requiem2_0_2_JP">
              Requiem 2.0.2 日本語化
            </a>
            <a href="https://jamcha.wordpress.com/">Wordpress</a>
          </div>
          <div>
            <h5>Tools</h5>
            <a href="https://github.com/jamcha-aa/KonG">
              KonG (混ん G) Font
            </a>
            <a href="https://github.com/jamcha-aa/Annin">
              Annin (杏仁)
            </a>
            <a href="https://github.com/jamcha-aa/auto-org-md">
              auto-org-md
            </a>
          </div>
          <div>
            <h5>Social</h5>
            <a href="https://github.com/jamcha-aa">GitHub</a>
            <a href="https://twitter.com/jamcha_aa">Twitter</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
