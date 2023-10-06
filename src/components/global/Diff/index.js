import React from 'react';
import ReactDiffViewer from 'react-diff-viewer';

const Diff = (props) => {
  const {oldCode, newCode, showDiffOnly=true} = props
  console.log(props)
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