
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IInputProps } from '../../helpers/interface';

export const Input: FC<IInputProps> = ({name, type, placeholder }) => {
    const { register, formState: { errors } } = useForm();

    return (
        <div>
            <input
                type={type}
                {...register(name)}
                placeholder={placeholder}
                aria-invalid={errors[name] ? "true" : "false"}
            />
            {errors[name] && (
                <span>{String(errors[name]?.message || "")}</span>
            )}
        </div>
    );
};


