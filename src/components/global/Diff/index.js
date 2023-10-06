import React from 'react';
import ReactDiffViewer from 'react-diff-viewer-continued';

const Diff = (props) => {
  const {oldCode, newCode, showDiffOnly=true} = props

  return (
    <div className="diff-checker">
      <ReactDiffViewer 
        oldValue={oldCode}
        newValue={newCode}
        splitView={true} 
        showDiffOnly={showDiffOnly}
      />
    </div>
  )
};

export default Diff