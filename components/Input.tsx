import {ForwardedRef, forwardRef, InputHTMLAttributes} from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

const Input = forwardRef(
  (
    {name, errors = [], ...rest}: InputProps & InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="flex flex-col gap-2">
        <input
          ref={ref}
          name={name}
          className="h-11 w-[600px] rounded-lg border border-solid border-alice-500 bg-transparent text-base font-semibold"
          {...rest}
        />
        {errors.map((error, index) => (
          <div key={index} className="font-medium text-red-500">
            {error}
          </div>
        ))}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
