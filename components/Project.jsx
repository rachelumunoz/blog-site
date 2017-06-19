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
        <div>this is project Component</div>

      </div>
    )
  }
}



export default Project;