'use client';

import { Field } from '@/components/ui/field';
import { SizeEnum } from '@/types/size-enum';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, IconButton, Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
// import { InputGroup } from '@/components/ui/input-group';

export interface ICustomFieldProps {
  inputType: string;
  isInvalid: boolean;
  errorText: string;
  isPasswordInput?: boolean;
  label?: string;
  placeholder?: string;
  hookFormProps: UseFormRegisterReturn;
  styleProps?: object;
  size?: SizeEnum;
}

function CustomField(props: ICustomFieldProps) {
  const { inputType, isInvalid, errorText, isPasswordInput, label, placeholder, size, hookFormProps, styleProps } = props;
  return (
    <Field invalid={isInvalid} errorText={errorText} label={label}>
      {isPasswordInput
        ? <CustomPasswordInput type={"password"} padding={"4"} size={size ?? SizeEnum.SMALL} placeholder={placeholder}
          hookFormProps={hookFormProps} styleProps={styleProps}
        />
        : <CustomInput type={inputType ?? "text"} padding={"4"} size={size ?? SizeEnum.SMALL} placeholder={placeholder}
          hookFormProps={hookFormProps} styleProps={styleProps}
        />
      }
    </Field>
  );
}

export default CustomField;

export interface ICustomInputProps {
  type: string;
  padding: string;
  size: SizeEnum;
  hookFormProps: unknown;
  placeholder?: string;
  styleProps?: unknown;
}

function CustomPasswordInput(props: ICustomInputProps) {
  const { type, padding, size, placeholder, hookFormProps, styleProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Box position="relative" width="100%">
      <Input type={showPassword ? "text" : type} p={padding} size={size} placeholder={placeholder} _focus={{ borderColor: "border.info" }}
        {...Object.assign({}, styleProps)}
        {...Object.assign({}, hookFormProps)}
      />
      <Flex position="absolute" top="50%" right="0.125rem" transform="translateY(-50%)">
        <IconButton
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={onTogglePasswordVisibility}
          variant="ghost" size="sm"
          _hover={{ bg: "transparent" }}
        >
          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
        </IconButton>
      </Flex>
    </Box>
  );
}

function CustomInput(props: ICustomInputProps) {
  const { type, padding, size, placeholder, hookFormProps, styleProps } = props;
  return (
    <Input type={type} p={padding} size={size} placeholder={placeholder} _focus={{ borderColor: "border.info" }}
      {...Object.assign({}, styleProps)}
      {...Object.assign({}, hookFormProps)}
    />
  );
}