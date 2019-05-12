import React, { Component } from 'react';
import ProjectContext from '../../context/ProjectContext';

export default class ProjectItem extends Component {
  state = {
    inFocus: false,
    isLoading: null
  }

  static contextType = ProjectContext;

  enterFocus = () => {
    this.setState({ inFocus: true })
  }

  leaveFocus = () => {
    this.setState({ inFocus: false })
  }

  render() {
    const { projects } = this.context;
    return (
      <>
        <h1>Projects</h1>
        {projects.map((p, i) => (
          <section className='project-container' key={ i }>
            <span>
              <h2>{p.title}</h2> - {p.description}
            </span>
            <a href={p.projectLink}>
            { <span className="project-link-text">Live Demo</span> }
              <img
                className="project-img"
                src={ p.projectImage }
                alt='project screen shot'
                onMouseEnter={ () => this.enterFocus() }
                onMouseLeave={ () => this.leaveFocus() }
                />
            </a>
            <ul className='stack-list'>
              Made With -{" "}
              {p.madeWith.map((t, i) => (
                <li key={i}>
                  &nbsp;{t} {i === p.madeWith.length - 1 ? "" : "/"}
                </li>
              ))}
            </ul>
            <div>View Code</div>
            <a
              className='code-link'
              href='https://github.com/thinkful-ei-armadillo/alex-jon-quiz'>
              <img
                className='code-icon'
                src={require("../../imgs/seo-web-code-icon.png")}
                alt='code icon'
              />
            </a>
          </section>
        ))}
      </>
    );
  }
}