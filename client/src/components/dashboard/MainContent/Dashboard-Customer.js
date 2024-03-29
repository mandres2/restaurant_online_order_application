import React, { Component } from "react";
import "./MainContent.scss";
import "./Dashboard.scss";

import { connect } from "react-redux";

import Modal from "./Modal/Modal";

class Dashboard extends Component {
  state = {
    modal: false,
    edit: false,
    name: "",
    members: [],
    id: "",
    owner: {}
  };

  toggleModal = e => {
    this.setState({ modal: !this.state.modal, edit: false });
  };

  toggleEditModal = (name, members, id, owner, e) => {
    e.stopPropagation();

    this.setState({
      modal: !this.state.modal,
      edit: !this.state.edit,
      name: name,
      members: members,
      id: id,
      owner: owner
    });
  };

  render() {
    const { projects } = this.props.projects;

    let content;

    let projectData = projects.sort().map(project => (
      <div
        key={project._id}
        className="project-icon"
        /* onClick={() => this.props.history.push(`/projects/${project._id}`)} */
        onClick={console.log("this is triggered!")}
      >
        <div className="project-name">{project.name}</div>
        <div
          className="project-info-button"
          onClick={this.toggleEditModal.bind(
            this,
            project.name,
            project.teamMembers,
            project._id,
            project.owner
          )}
        >
          Edit category
        </div>
        {/* <div className="project-info-button">Go to category</div> */}
      </div>
    ));

    if (projects.length > 0) {
      // At least one project
      content = (
        <>
          <button className="main-btn" onClick={this.toggleModal}>
            Create another menu category
          </button>
          
          <div className="modal-wrapper">
            <Modal
              onClose={this.toggleModal}
              modal={this.state.modal}
              edit={this.state.edit}
              name={this.state.name}
              members={this.state.members}
              id={this.state.id}
              owner={this.state.owner}
            />
          </div>
          <div className="projects-wrapper">{projectData}</div>
        </>
      );
    } else {
      // No projects
      content = (
        <>
          <div className="projects">
            <div className="no-projects">
              <h1 className="header">You have no categories yet</h1>
              <button className="main-btn" onClick={this.toggleModal}>
                Create a first menu category for your business!
              </button>
              <div className="modal-wrapper">
                <Modal onClose={this.toggleModal} modal={this.state.modal} />
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="main-content">
        <h1 className="header">(Need To Be Removed!)You are logged in as a Customer</h1>
        <h1 className="header">Your Restaurant Menus</h1>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
