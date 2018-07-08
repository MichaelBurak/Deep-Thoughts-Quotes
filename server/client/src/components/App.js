import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Row, Col } from "reactstrap";
import Header from "./Header";
import DisplayedQuote from "./DisplayedQuote";
import SubmissionFormContainer from "./SubmissionFormContainer";
import AuthorQuotesContainer from "./AuthorQuotesContainer";
import DiscourseContainer from "./DiscourseContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchQuote();
    this.props.fetchDiscourse();
    //this.props.fetchUser();
  }

  render() {
    return (
      <Container>
        <Col xl="auto" md={{ size: 8, offset: 3 }}>
          <Header />
        </Col>
        <DisplayedQuote />
        <Row>
          <Col xs="7">
            <SubmissionFormContainer />
          </Col>
          <Col xs={{ size: 4, offset: 1 }}>
            <AuthorQuotesContainer />
          </Col>
        </Row>
        <Col sm={{ offset: 5 }}>
          <DiscourseContainer />
        </Col>
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(App);
