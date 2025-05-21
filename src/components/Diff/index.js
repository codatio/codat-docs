import React from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import styles from "./Diff.module.scss";

const Diff = (props) => {
  const {
    oldCode,
    newCode,
    showDiffOnly = true,
    compareMethod = DiffMethod.CHARS,
  } = props;

  return (
    <div className={`diff-checker ${styles.diffChecker}`}>
      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={true}
        showDiffOnly={showDiffOnly}
        compareMethod={compareMethod}
      />
    </div>
  );
};

export default Diff;
