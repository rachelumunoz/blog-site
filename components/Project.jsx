import React, {Component} from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';


class Project extends Component {
  render(){
    const { route } = this.props;
    const post = route.page.data;
    const home = (
      <div>
        <Link className="gohome" to={prefixLink('/projects/')}>All Projects</Link>
      </div>
    );

    console.log('projects inidividual page', post)

    return(
      <div>
        {home}
        <div>{post.title}</div>
        
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}



export default Project;