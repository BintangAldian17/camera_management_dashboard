import Input, { type InputProps } from "../atoms/Input";

type InputFieldProps = {
  textLabel: string;
} & InputProps;

export default function InputField({ textLabel, ...props }: InputFieldProps) {
  return (
    <div className="flex flex-col text-start gap-2.5">
      <label htmlFor={props.name} className="font-normal text-muted-foreground">
        {textLabel}
      </label>
      <Input placeholder={textLabel} {...props} />
    </div>
  );
}
