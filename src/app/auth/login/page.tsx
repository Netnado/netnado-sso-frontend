'use client';

import { Field } from '@/components/ui/field';
import { PasswordInput } from '@/components/ui/password-input';
import { PASSWORD_REGEX } from '@/helpers/string.helper';
import { Flex, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import AuthHeader from '@/app/auth/AuthHeader';
import CustomPasswordStrengthMeter from './CustomPasswordStrengthMeter';
import { SizeEnum } from '@/types/size-enum';

export interface ILoginFormProps {
  keyword: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<ILoginFormProps>();
  const passwordValue = watch("password", "");

  const onSubmit = handleSubmit((data: unknown) => {
    // TODO: Call API here
    console.log(data);
  });

  return (
    <Flex direction={"column"} w={"full"} p={"4"} justifyContent={"center"}>
      <AuthHeader isLogin={true} />
      <Text fontSize={"3xl"} fontWeight={"bold"} marginY={"4"} textAlign={"center"}>Login</Text>
      <form onSubmit={onSubmit}>
        <Stack direction={"column"}>
          <Field label={"Email or username"} invalid={!!errors?.keyword} errorText={errors.keyword?.message}>
            <Input type={"text"}
              {...register("keyword", {
                required: "Email or username is required",
              })}
              p={"2"} size="sm"
            />
          </Field>
          <Field label={"Password"} invalid={!!errors?.password} errorText={errors.password?.message}>
            <PasswordInput
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters long" },
                maxLength: { value: 100, message: "Password must be at most 100 characters long" },
                pattern: { value: PASSWORD_REGEX, message: "Password is not strong enough" },
              })} pl={"2"} size="sm"
            />
            <CustomPasswordStrengthMeter password={passwordValue} size={SizeEnum.SMALL} />
          </Field>
        </Stack>
      </form>
    </Flex>
  );
}


export default Login;