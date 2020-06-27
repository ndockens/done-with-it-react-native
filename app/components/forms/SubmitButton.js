import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ style, title }) {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={handleSubmit} style={style} title={title} />;
}

export default SubmitButton;
