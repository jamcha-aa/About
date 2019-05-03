/**
 * Copyright (c) 2018 jamcha, (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }
    const editUrl = siteConfig.repoUrl + '/edit/master/website/siteConfig.js';
    const showcase = siteConfig.users.map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h3>読みたい作品のアイコンをタッチしてください。</h3>
            </div>
            <div className="logos">{showcase}</div>
            <p>Are you interested in my novel?</p>
            <a href="https://github.com/jamcha-aa" className="button">
            Visit GitHub
            </a>
            </div>
         </Container>
      </div>
    );
  }
}

module.exports = Users;
