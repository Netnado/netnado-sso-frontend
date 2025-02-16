'use client';
import { PASSWORD_REGEX } from '@/helpers/string.helper';
import { Button, Flex, HStack, IconButton, Mark, Separator, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthHeader from '@/app/auth/AuthHeader';
import CustomField from '@/components/common/CustomField';
import { SizeEnum } from '@/types/size-enum';
import CustomLink from '@/components/common/CustomLink';
import CustomCheckbox from '@/components/common/CustomCheckbox';
import { FcGoogle } from 'react-icons/fc';
export interface ILoginFormProps {
  keyword: string;
  password: string;
  rememberMe: boolean;
}

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormProps>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data: unknown) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement login logic
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.alert("Login logic is not implemented yet!" + JSON.stringify(data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <Flex direction={"column"} w={"full"} h={"100vh"} p={"4"} justifyContent={"center"}>
      <Flex justifySelf={"flex-start"}>
        <AuthHeader isLogin={true} />
      </Flex>

      <form onSubmit={onSubmit}>
        <Text fontSize={"3xl"} fontWeight={"bold"} marginY={"4"} textAlign={"center"}>
          Welcome back to <Mark color={"cyan.600"}>Netnado SSO!</Mark>
        </Text>
        <Stack direction={"column"} maxW={SizeEnum.SMALL} marginX={"auto"} gap={"4"}>
          <CustomField
            inputType="text"
            isInvalid={!!errors?.keyword}
            errorText={errors.keyword?.message ?? ""}
            placeholder="Email or username"
            hookFormProps={register("keyword", {
              required: "Email or username is required",
            })}
            size={SizeEnum.MEDIUM}
          />
          <CustomField
            inputType="password"
            isPasswordInput={true}
            isInvalid={!!errors?.password}
            errorText={errors.password?.message ?? ""}
            placeholder="Password"
            hookFormProps={register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters long" },
              maxLength: { value: 100, message: "Password must be at most 100 characters long" },
              pattern: { value: PASSWORD_REGEX, message: "Password is not strong enough" },
            })}
            size={SizeEnum.MEDIUM}
          />

          <Flex direction={"row"} w={"full"} justifyContent={"space-between"}>
            <CustomCheckbox
              title={"Remember me for 30 days"}
              hookFormProps={register("rememberMe")}
            />

            <CustomLink styleProps={{ width: "full" }} href='/auth/forgot-password' isUnderline={true}>
              <Text fontSize={"sm"} textAlign={"right"} color={"cyan.600"}>Forgot password?</Text>
            </CustomLink>
          </Flex>

          <Button type="submit" colorPalette={"cyan"} size={SizeEnum.MEDIUM} variant={"surface"}
            loadingText="Submitting..." loading={isSubmitting} spinnerPlacement="start"
          >
            Submit
          </Button>

          <HStack marginY={"2"}>
            <Separator flex="1" />
            <Text flexShrink="0" marginX={"2"}>or</Text>
            <Separator flex="1" />
          </HStack>

          <IconButton type="button" colorPalette={"orange"} variant={"surface"}>
            <FcGoogle />
            <Text>Continue with Google</Text>
          </IconButton>


        </Stack>

      </form>
    </Flex >
  );
}


export default Login;