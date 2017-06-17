import React, {Component} from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';

class ProjectsIndex extends Component {
  render(){
    

    return(
      <div>projects index componenet</div>
    )
  }
}

exports.data = {
  title: 'Projects Index',
  path: 'projects',
  layout: 'project'
}

export default ProjectsIndex;