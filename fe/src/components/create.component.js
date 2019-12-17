import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeNoteTitle = this.onChangeNoteTitle.bind(this);
        this.onChangeNoteDetails = this.onChangeNoteDetails.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            note_title: '',
            note_details: ''
        }
    }
    onChangePersonName(e) {
      this.setState({
        person_name: e.target.value
      });
    }
    onChangeBusinessName(e) {
      this.setState({
        business_name: e.target.value
      })  
    }
    onChangeGstNumber(e) {
      this.setState({
        business_gst_number: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}`)
      this.setState({
        person_name: '',
        business_name: '',
        business_gst_number: ''
      })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add a new note</h3>
                <form id="form_addNote">
                    <div className="form-group">
                        <label for="">Title:  </label>
                        <input type="text" className="form-control" id="field_noteTitle"/>
                    </div>
                    <div className="form-group">
                        <label>Details:  </label>
                        <textarea type="text" className="form-control" id="field_noteDetails"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add note" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}