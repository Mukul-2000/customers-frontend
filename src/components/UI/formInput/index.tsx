import React from "react";
import { Form } from "react-bootstrap";

interface IFormInput {
  label: string;
  identifier: string;
  onChange: any;
  error?: boolean;
  defaultValue?: string;
  errMessage?: string;
  classes?: any;
  readonly?: boolean;
  type?: string;
  checked?: boolean;
  value?: any
  disabled?: boolean;
}

const FormInput = ({
  label,
  identifier,
  onChange,
  error,
  defaultValue,
  errMessage,
  classes,
  readonly,
  type,
  checked,
  value,
  disabled,
}: IFormInput) => {
  return (
    <Form.Group className={classes}>
      <Form.Label className="xcn-input-label text-secondary">
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        onChange={onChange}
        name={identifier}
        defaultValue={defaultValue || ""}
        isInvalid={error && true}
        readOnly={readonly}
        className="xcn-input"
        checked={checked}
        value={value}
        disabled={disabled}
      />
      {error && (
        <Form.Control.Feedback type="invalid">
          {errMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default FormInput;
