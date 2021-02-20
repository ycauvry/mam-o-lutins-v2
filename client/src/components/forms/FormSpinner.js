import React from "react";

const FormSpinner = ({process}) => process && <div className="form-spinner"></div>

export default React.memo(FormSpinner);
