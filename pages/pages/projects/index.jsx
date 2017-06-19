import React, {Component} from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';
import Helmet from 'react-helmet';
import SiteSidebar from '../../../components/SiteSidebar';
// import SiteSidebar from '../../../components/SiteSidebar';

import { config } from 'config';



class ProjectsIndex extends Component {
  
  render(){
    
    const projectLinks = [];

    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse(); // not needed for projects?

    sortedPages.forEach(page => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'project'){
        const title = access(page, 'data.title') || page.path;
        const description = access(page, 'data.description');
        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');

        console.log('page is', page)

        const strippedLink = page.data.sourceImage.split('./');
        const imageLink = page.path + strippedLink[1]

        projectLinks.push(
          <div key={page.data.title}>
            {title}
            <img src={imageLink}/>
            <Link to={page.data.path}> See more</Link>
          </div>
        )
      } 
    })
    
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
               {projectLinks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

exports.data = {
  title: 'Projects Index',
  path: 'projects',
  layout: 'page'
}

export default ProjectsIndex;