import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import SitePost from '../components/SitePost';
import SitePage from '../components/SitePage';
import Project from '../components/Project';


class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    if (layout === 'post') {
      template = <SitePost {...this.props} />;
    } else if (layout === 'project'){
      template = <Project {...this.props} />
    }
    else  {
      template = <SitePage {...this.props} />;
    }

    return (
      <div>
        <Helmet title={`${post.title} - ${config.siteTitle}`} />
        {template}
      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
};

export default MarkdownWrapper;
