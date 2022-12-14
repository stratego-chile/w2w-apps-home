import { Component } from 'react'
import { CommonFunctions } from '../../helpers/common-functions.helper'
import RouterOutline from '../../helpers/router.helper'
import Grid from '../../helpers/grid.helper'
import ContactForm from '../include/contact-form'

class ContactUs extends Component {
  public componentDidMount(): void {
    CommonFunctions.updatePathTitle('Contact')
  }

  public render(): JSX.Element {
    return RouterOutline.set(
      <Grid.Container>
        <Grid.Row>
          <Grid.Col className="mb-4">
            <h1 className="font-weight-bold">Contact Us</h1>
            <hr />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col className="px-0">
            <ContactForm />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>,
      'non-empty'
    )
  }
}

export default ContactUs
