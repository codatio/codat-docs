import React from "react";
import SearchBar from "@theme-original/SearchBar";

class SearchBarErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function SearchBarWrapper(props) {
  return (
    <SearchBarErrorBoundary>
      <SearchBar {...props} />
    </SearchBarErrorBoundary>
  );
}
