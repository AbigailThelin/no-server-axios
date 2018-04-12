import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import TextField from 'material-ui/TextField';

import './home.css'

export default class PanelComp extends React.Component{

  constructor(props) {
    super(props);
    this.state = { showPanel: false };
  }

  render() {
    return (
      <div>
        <DefaultButton
          description='Opens the Sample Panel'
          onClick={ () => this.setState({ showPanel: true }) }
          text='Open Panel'
        />
        <Panel
          isOpen={ this.state.showPanel }
          type={ PanelType.medium }
          onDismiss={ () => this.setState({ showPanel: false }) }
          headerText='INFO'
        >
        <TextField
            hintText="FIRST NAME"
            floatingLabelText="First Name"
        /><br />
        <TextField
            hintText="LAST NAME"
            floatingLabelText="Last Name"
        /><br />
        <TextField
            hintText="EMAIL"
            floatingLabelText="Email Address"
        /><br />
        <TextField
            hintText="NUMBER"
            floatingLabelText="Phone Number"
        /><br />





        </Panel>
      </div>
    );
  }
}
