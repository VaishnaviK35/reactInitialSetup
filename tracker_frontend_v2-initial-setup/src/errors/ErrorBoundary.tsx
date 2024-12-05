import React, { Component, ErrorInfo } from "react";
import { Props, State } from "../types";

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error: ", error, errorInfo);
    this.setState({ hasError: true });
  }

  // This will render this component wherever called
  render() {
    if (this.state.hasError) {
      // Error path
      return (
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ height: "85vh" }}
        >
          <div className="text-left">
            <p className="fs-5 text-center">
              Something went wrong. <br />
              <span className="fs-6">Please contact IT support.</span> <br />
              <a href="mailto:itsupport@secqureone.com" className="fs-6">
                itsupport@secqureone.com
              </a>
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="btn btn-primary mt-3"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return this.props.children;
  }
}

export default ErrorBoundary;
