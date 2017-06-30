import React, {Component} from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';
import Helmet from 'react-helmet';
import SiteSidebar from '../../../components/SiteSidebar';
import './style.css';

import { config } from 'config';



class ProjectsIndex extends Component {
  
  render(){
    
    const projectLinks = [];

    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse(); // not needed for projects?

    sortedPages.forEach(page => {
      if (access(page, 'file.ext') === 'md'  && access(page, 'data.layout') === 'project'){
        const title = access(page, 'data.title') || page.path;
        const description = access(page, 'data.description');
        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');

        // console.log('page is', page)

        const strippedLink = page.data.sourceImage.split('./');
        const imageLink = page.path + strippedLink[1];

        projectLinks.push(
          <div className="project" key={page.data.title}>
            <Link to={page.data.path}>
              <img className="project__image" src={imageLink} alt="thumbnail of project"/>
            </Link>
            <div className="project__details">
              {title}<br/>
              <span className="project__details__tools">{page.data.tools}</span>
              <Link to={page.data.path}> See more</Link>
            </div>
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