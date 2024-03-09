import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../helpers/validation";
import { useForm } from "react-hook-form";
import { FC, useState } from "react";
import { IRegistrationSchema } from "../../helpers/interface";
import { Btn, ErrorText, Eyes, Forma, Input, InputWrap, Text, Title, Wrapper } from "./Registration.styled";
import sprite from "../../assets/icons/sprite.svg";

export const Registration: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegistrationSchema>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </Text>
      <Forma onSubmit={onSubmit}>
        <InputWrap>
          <Input type="text" placeholder="Name" {...register("username")} />
          <ErrorText>{errors.username?.message}</ErrorText>
        </InputWrap>
        <InputWrap>
          <Input type="text" placeholder="Email" {...register("email")} />
          <ErrorText>{errors.email?.message}</ErrorText>
        </InputWrap>
        <InputWrap>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
          />
            {showPassword ? (
              <Eyes
                width="20"
                height="20"
                onClick={() => togglePasswordVisibility()}
              >
                <use href={`${sprite}#icon-eye`} />
              </Eyes>
            ) : (
              <Eyes
                width="20"
                height="20"
                onClick={() => togglePasswordVisibility()}
              >
                <use href={`${sprite}#icon-eye-off`} />
              </Eyes>
            )}
          <ErrorText>{errors.password?.message}</ErrorText>
        </InputWrap>
        <Btn type="submit">Sign Up</Btn>
      </Forma>
    </Wrapper>
  );
};
