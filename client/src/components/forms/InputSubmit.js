import React from "react";

const InputSubmit = ({process}) =>
    !process &&
    <div className="input-wrapper input-wrapper-submit">
        <input type="submit" value="Enregistrer" className="button button-submit"/>
    </div>
export default InputSubmit;
