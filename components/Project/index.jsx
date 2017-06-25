import React, {Component} from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import ReadNext from '../ReadNext';


import './style.css';
import '../../static/css/highlight.css';



class Project extends Component {
  render(){
    const { route } = this.props;
    const post = route.page.data;
    const home = (
      <div>
        <Link className="gohome" to={prefixLink('/projects/')}>All Projects</Link>
      </div>
    );

    return (
      <div>
        {home}
        <div className="blog-single">
          <div className="text">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </div>
      </div>
    );
  }
}



export default Project;