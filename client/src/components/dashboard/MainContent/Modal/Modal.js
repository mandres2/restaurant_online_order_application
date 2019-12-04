/* import FileBase64 from 'react-file-base64'; */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  createProject,
  updateProject,
  deleteProject
} from "../../../../actions/projectsActions";
import {
  createTask,
  deleteTask,
  updateTask
} from "../../../../actions/taskActions";

import moment from "moment";

import "./Modal.scss";

class Modal extends Component {
  state = {
    projectName: "",
    members: [{ name: "", email: "", image: "" }],
    taskName: "",
    assignee: "",
    monthDue: "",
    dayDue: "",
    taskId: "",
    images: []
  };

/* --------------------------------- */
  fileSelectedHandler = event => {
    console.log(event.target.files.length);
    
    // try to find a storage to save this inputs
    for(let i = 0; i < event.target.files.length; i++) {
      console.log(event.target.files[i]);
    }
  }

  getFiles(files){
    /* console.log("files: -> ", files.base64); */
    // base64 encoded here
    /* console.log("files: -> ", files.base64); */
    
    /* let a = this.state.members.slice();
    a[0].img = files.base64;
    console.log(a);

    this.setState({members: a});

    console.log("files: -> ", this.state.members[0]); */
    this.setState({ members: [{ image: files.base64 }] })
    /* this.setState(prevState => ({
      members: [...prevState.members, { img: files.base64 }]
    })); */

    /* console.log('this.state.members[0].img: => ', this.state.members[0].img); */

    /* for(let i = 0; i < this.state.members.length; i++) {
      console.log('this.state.members[' + i + '].img: => ', this.state.members[i].img);
    } */
    
  }
/* --------------------------------- */


  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        projectName: nextProps.name,
        members: nextProps.members
      });
    } else if (nextProps.editTask) {
      this.setState({
        taskName: nextProps.taskName
      });
    }
  }

  onChange = e => {
    if (["name", "email", "image"].includes(e.target.name)) {
      let members = [...this.state.members];

      console.log("e.target: ", e.target);

      members[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ members });
    } else {
      this.setState({ [e.target.id]: e.target.value });
    }    
/*     if (["name", "email"].includes(e.target.name)) {
      let members = [...this.state.members];
      members[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ members });
    } else {
      this.setState({ [e.target.id]: e.target.value });
    } */
  };

  addMember = e => {
    this.setState(prevState => ({
      members: [...prevState.members, { name: "", email: "", image: ""}]
    }));
  };

  deleteMember = index => {
    let array = [...this.state.members];
    array.splice(index, 1);
    this.setState({ members: array });
  };

  createProject = () => {
    let project = {
      projectName: this.state.projectName,
      members: this.state.members
    };

    console.log(project);

    this.props.createProject(project);
    this.onClose();
  };

  updateProject = async id => {
    let project = {
      id: this.props.id,
      projectName: this.state.projectName,
      members: this.state.members
    };

    await this.props.updateProject(project);

    this.onClose();
    window.location.reload();
  };

  deleteProject = id => {
    this.props.deleteProject(id, this.props.history);
    this.onClose();
  };

  deleteTask = id => {
    this.props.deleteTask(id);
    this.onClose();
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({
      projectName: "",
      taskName: "",
      assignee: "",
      monthDue: "",
      dayDue: "",
      members: [{ name: "", email: "", image: "" }]
    });
  };

  onSelectChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  createTask = e => {
    e.preventDefault();

    let fullDate =
      this.state.monthDue +
      "-" +
      this.state.dayDue +
      "-" +
      Date().split(" ")[3];

    let momentDate = moment(fullDate, "MM-DD-YYYY")
      ._d.toString()
      .split(" ");

    let finalDate = momentDate[1] + " " + momentDate[2];

    const data = {
      project: this.props.projects.project._id,
      taskName: this.state.taskName,
      assignee: this.state.assignee,
      dateDue: finalDate
    };

    this.props.createTask(data);

    this.onClose();
  };

  updateTask = id => {
    let finalDate;

    let dates = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    if (!this.state.monthDue && !this.state.dayDue) {
      finalDate = this.props.dateDue;
    } else if (
      this.props.dateDue &&
      this.props.dateDue !== "Date undefined" &&
      !this.state.monthDue &&
      this.state.dayDue
    ) {
      let fullDate =
        dates.indexOf(this.props.dateDue.split(" ")[0]) +
        1 +
        "-" +
        this.state.dayDue +
        "-" +
        Date().split(" ")[3];

      let momentDate = moment(fullDate, "MM-DD-YYYY")
        ._d.toString()
        .split(" ");

      finalDate = momentDate[1] + " " + momentDate[2];
    } else if (
      this.props.dateDue &&
      this.props.dateDue !== "Date undefined" &&
      !this.state.dayDue &&
      this.state.monthDue
    ) {
      let fullDate =
        this.state.monthDue +
        "-" +
        this.props.dateDue.split(" ")[1] +
        "-" +
        Date().split(" ")[3];

      let momentDate = moment(fullDate, "MM-DD-YYYY")
        ._d.toString()
        .split(" ");

      finalDate = momentDate[1] + " " + momentDate[2];
    } else {
      let fullDate =
        this.state.monthDue +
        "-" +
        this.state.dayDue +
        "-" +
        Date().split(" ")[3];

      let momentDate = moment(fullDate, "MM-DD-YYYY")
        ._d.toString()
        .split(" ");

      finalDate = momentDate[1] + " " + momentDate[2];
    }

    let task = {
      id: id,
      taskName: this.state.taskName,
      dateDue: finalDate,
      assignee: this.state.assignee || this.props.assignee
    };

    this.props.updateTask(task);

    this.onClose();
  };

  render() {
    if (!this.props.modal) {
      return null;
    }

    document.onkeyup = e => {
      if (e.keyCode === 27 && this.props.modal) {
        this.onClose();
      }
    };

    let { members } = this.state;

    // Create task modal
    if (this.props.task) {
      const { teamMembers } = this.props.projects.project;
      const { name, email/* , img */ } = this.props.auth.user;

      // Assignee dropdown in Modal
      let membersOptions = teamMembers.map((member, index) => (
        <option key={index} value={member.email}>
          {member.name}
        </option>
      ));

      // Due date dropdown in Modal
      const MONTHS = new Array(12).fill(1);
      const DAYS = new Array(31).fill(1);

      let monthsOptions = MONTHS.map((month, i) => (
        <option key={i} value={i + 1}>
          {i < 9 && "0"}
          {i + 1}
        </option>
      ));

      let daysOptions = DAYS.map((day, i) => (
        <option key={i} value={i + 1}>
          {i < 9 && "0"}
          {i + 1}
        </option>
      ));

      return (
        <form onSubmit={this.createTask} className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 className="header">Create task</h1>
          <div className="form-group">
            <label>
              <div className="form-label">Task Name (required)</div>
              <input
                required
                onChange={this.onChange}
                value={this.state.taskName}
                id="taskName"
                type="text"
                placeholder={"What is the task?"}
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <div className="split">
              <label>
                <div className="form-label">Assignee</div>
                <select
                  onChange={this.onSelectChange}
                  value={this.state.assignee}
                  id="assignee"
                  type="text"
                  className="form-input task-input-split"
                >
                  <option disabled value="">
                    Assign to
                  </option>
                  <option value={email}>{name + " (You)"}</option>
                  {membersOptions}
                </select>
              </label>
              <label>
                <div className="form-label">Due Date</div>
                <div className="split">
                  <select
                    required={this.state.dayDue ? true : false}
                    onChange={this.onSelectChange}
                    value={this.state.monthDue}
                    id="monthDue"
                    type="text"
                    className="form-input task-input-split month-due"
                  >
                    <option disabled value="">
                      Month
                    </option>
                    {monthsOptions}
                  </select>
                  <select
                    required={this.state.monthDue ? true : false}
                    onChange={this.onSelectChange}
                    value={this.state.dayDue}
                    id="dayDue"
                    type="text"
                    className="form-input task-input-split"
                  >
                    <option disabled value="">
                      Day
                    </option>
                    {daysOptions}
                  </select>
                </div>
              </label>
            </div>
          </div>
          <div>
            <button className="main-btn update-project" type="submit">
              Create Task
            </button>
          </div>
        </form>
      );
    }

    // Edit Task Modal
    else if (this.props.editTask) {
      const { teamMembers } = this.props.projects.project;
      const { name, email } = this.props.auth.user;

      const { assignee, dateDue, taskId } = this.props;
      let assigneeName;

      let assignedMonth = moment(dateDue).month() + 1;
      let assignedDay = dateDue.split(" ")[1];

      // Find name from email
      teamMembers.forEach(member => {
        if (member.email === assignee) {
          assigneeName = member.name;
        } else if (assignee) {
          assigneeName = name + " (You)";
        }
      });

      // Assignee dropdown in Modal
      let membersOptions = teamMembers.map((member, index) => {
        if (member.name !== assigneeName) {
          return (
            <option key={member._id} value={member.email}>
              {member.name}
            </option>
          );
        }
        return null;
      });

      // Due date dropdown in Modal
      const MONTHS = new Array(12).fill(1);
      const DAYS = new Array(31).fill(1);

      let monthsOptions = MONTHS.map((month, i) => {
        return (
          <option key={i} value={i + 1}>
            {i < 9 && "0"}
            {i + 1}
          </option>
        );
      });

      let daysOptions = DAYS.map((day, i) => (
        <option key={i} value={i + 1}>
          {i < 9 && "0"}
          {i + 1}
        </option>
      ));

      return (
        <form className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 className="header">Edit task</h1>
          <div className="form-group">
            <label>
              <div className="form-label">Task Name (required)</div>
              <input
                required
                onChange={this.onChange}
                value={this.state.taskName}
                id="taskName"
                type="text"
                placeholder={"What is the task?"}
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <div className="split">
              <label>
                <div className="form-label">Assignee</div>
                <select
                  onChange={this.onSelectChange}
                  value={this.state.assignee}
                  id="assignee"
                  type="text"
                  className="form-input task-input-split"
                >
                  {!assignee && (
                    <option disabled value="">
                      Assign to
                    </option>
                  )}
                  {assignee && <option value={assignee}>{assigneeName}</option>}
                  {assigneeName !== name + " (You)" && (
                    <option value={email}>{name + " (You)"}</option>
                  )}
                  {membersOptions}
                </select>
              </label>
              <label>
                <div className="form-label">Due Date</div>
                <div className="split">
                  <select
                    required={this.state.dayDue ? true : false}
                    onChange={this.onSelectChange}
                    value={
                      this.state.monthDue || parseInt(assignedMonth).toString()
                    }
                    id="monthDue"
                    type="text"
                    className="form-input task-input-split month-due"
                  >
                    {!dateDue && (
                      <option disabled value="">
                        Month
                      </option>
                    )}
                    {monthsOptions}
                  </select>
                  <select
                    required={this.state.monthDue ? true : false}
                    onChange={this.onSelectChange}
                    value={
                      this.state.dayDue || parseInt(assignedDay).toString()
                    }
                    id="dayDue"
                    type="text"
                    className="form-input task-input-split"
                  >
                    {!dateDue && (
                      <option disabled value="">
                        Day
                      </option>
                    )}
                    {daysOptions}
                  </select>
                </div>
              </label>
            </div>
          </div>
          <div>
            <button
              className="main-btn update-project"
              type="button"
              onClick={this.updateTask.bind(this, taskId)}
            >
              Update Task
            </button>
            <button
              className="main-btn delete-project"
              onClick={this.deleteTask.bind(this, taskId)}
            >
              Delete Task
            </button>
          </div>
        </form>
      );
    }

    // Edit project modal
    else if (this.props.edit) {
      return (
        <div className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 className="header">Edit menu category</h1>
          <p className="created-by">
            Created by {this.props.owner.name} ({this.props.owner.email})
          </p>
          <div className="form-group">
            <label>
              <div className="form-label">Category (required)</div>
              <input
                onChange={this.onChange}
                value={this.state.projectName}
                id="projectName"
                type="text"
                placeholder={"My Awesome Project"}
                className="form-input"
              />
            </label>
          </div>
          <div className="form-label">Add menu items (optional)</div>
          
          <div className="members-edit">
            {members.map((val, id) => {
              
              let memberId = `member-${id}`,
                emailId = `email-${id}`,
                imageId = `image-${id}`;


              return (
                <div className="split" key={id}>
                  <label className="form-label" htmlFor={memberId}>
                    
                    <input
                      type="text"
                      name="name"
                      data-id={id}
                      id={memberId}
                      value={members[id].name}
                      className="form-input"
                      onChange={this.onChange}
                    />
                  </label>
                  <label className="form-label split-email" htmlFor={emailId}>
                    
                    <input
                      type="text"
                      name="email"
                      data-id={id}
                      id={emailId}
                      value={members[id].email}
                      className="form-input"
                      onChange={this.onChange}
                    />
                  </label>
                  <label className="form-label split-email" htmlFor={imageId}>
                    <input
                      placeholder="Image URL"
                      type="text"
                      name="image"
                      data-id={id}
                      id={imageId}
                      value={members[id].image}
                      className="form-input"
                      onChange={this.onChange}
                    />
                  </label>

                  <span
                    className="delete"
                    onClick={this.deleteMember.bind(this, id)}
                  >
                    REMOVE
                  </span>
                </div>
              );
            })}
            
          </div>
          <button className="main-btn add-members" onClick={this.addMember}>
            Add another menu item
          </button>
          <div>
            <button
              className="main-btn update-project"
              onClick={this.updateProject.bind(this, this.props.id)}
            >
              Update Category
            </button>
            {this.props.owner.id === this.props.auth.user.id ? (
              <button
                className="main-btn delete-project"
                onClick={this.deleteProject.bind(this, this.props.id)}
              >
                Delete Category
              </button>
            ) : null}
          </div>
        </div>
      );
    }

    // Create project modal
    else
      return (
        <div className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 className="header">Create a menu category</h1>
          <div className="form-group">
            <label>
              <div className="form-label">Category (required)</div>
              <input
                onChange={this.onChange}
                value={this.state.projectName}
                id="projectName"
                type="text"
                placeholder="ex.entree, side-dish, beverages"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-label">Add menu items (required)</div>
          {/* <button className="main-btn add-members" onClick={this.addMember}>
            Add another member
          </button> */}
          <div className="members">
            {members.map((val, id) => {
              let memberId = `member-${id}`,
                emailId = `email-${id}`,
                imageId = `image-${id}`;
              return (
                <div className="split" key={id}>
                  <label className="form-label" htmlFor={memberId}>
                    <input
                      placeholder="menu"
                      type="text"
                      name="name"
                      data-id={id}
                      id={memberId}
                      value={members[id].name}
                      className="form-input"
                      onChange={this.onChange}
                    />
                  </label>
                  <label className="form-label split-email" htmlFor={emailId}>
                    <input
                      placeholder="price"
                      type="text"
                      name="email"
                      data-id={id}
                      id={emailId}
                      value={members[id].email}
                      className="form-input"
                      onChange={this.onChange}
                    />
                  </label>
                  
{/* -------------------------------------------------------------------------------- */}
                  <label className="form-label split-email" htmlFor={imageId}>
                    <input
                      placeholder="Image URL"
                      type="text"
                      name="image"
                      data-id={id}
                      id={imageId}
                      value={members[id].image}
                      className="form-input"
                      onChange={this.onChange}
                    />
                  </label>

                  {/* input-file (image) */}
                  
                  {/* <label className="form-label split-email" htmlFor={imageId}>
                    <input
                      type="file"
                      name="image"
                      data-id={id}
                      id={imageId}
                      value={members[id].image}
                      className="form-input"
                      onChange={this.onChange}
                    />                 
                  </label> */}                  
                  
                  
                  
                  {/* <label className="form-label split-email" /* htmlFor={image} > */}
                    {/* <input type="file" onChange={this.fileSelectedHandler}/> */}

                    {/* <img src={this.state.members.img} alt='Helpful alt text'/> */}

                    {/* 내일 팁: base64 컨버트 하고 바로 위처럼 셋 업데이트 하자 */}
                    {/* <FileBase64 htmlFor={imageId} multiple={ false } onDone={ this.getFiles.bind(this) } /> */}

                    {/* this.setState({
                      members: [{ img: this }]
                    }); */}

                  {/* </label> */}
{/* -------------------------------------------------------------------------------- */}
                  <span
                    className="delete"
                    onClick={this.deleteMember.bind(this, id)}
                  >
                    REMOVE
                  </span>
                </div>
              );
            })}


          </div>
          <button className="main-btn add-members" onClick={this.addMember}>
            Add another menu
          </button>
          <div>
            <button
              className="main-btn create-project"
              onClick={this.createProject}
            >
              Create Category
            </button>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  projects: state.projects,
  tasks: state.tasks
});

export default connect(
  mapStateToProps,
  {
    createProject,
    updateProject,
    deleteProject,
    createTask,
    deleteTask,
    updateTask
  }
)(withRouter(Modal));
