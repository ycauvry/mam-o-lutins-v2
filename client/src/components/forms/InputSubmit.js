import React from "react";

const InputSubmit = ({process}) =>
    !process && <input type="submit" value="Enregistrer" className="button button-submit"/>

export default InputSubmit;
