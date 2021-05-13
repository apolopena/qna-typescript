import React from 'react'

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  children?: React.ReactNode
  rows?: number
  value?: string
}

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
  method?: string
}

export default function Form ({ children, ...restProps }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...restProps} >{children}</div>
}

Form.Base = function FormBase({ children, ...restProps }: FormProps) {
  return <form {...restProps}>{children}</form>
}

Form.Error = function FormError({ children, ...restProps }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...restProps}>{children}</div>
}

Form.Title = function FormTitle({ children, ...restProps }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...restProps}>{children}</div>
}

/*
Form.Input = function FormInput({ children, ...restProps }: React.HTMLAttributes<HTMLDivElement>) {
  return <input {...restProps}>{children}</input>
}
*/

Form.TextArea = function FormTextArea({ children, ...restProps }: TextAreaProps) {
  return <textarea {...restProps}>{children}</textarea>
}

Form.Submit = function FormSubmit({ children, ...restProps }: React.HTMLAttributes<HTMLButtonElement>) {
  return <button {...restProps}>{children}</button>
}
