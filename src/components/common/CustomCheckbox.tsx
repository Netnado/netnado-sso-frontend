'use client';

import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Icon } from '@chakra-ui/react';

export interface CustomCheckboxProps {
  title: string;
  icon?: React.ReactNode;
  hookFormProps?: UseFormRegisterReturn;
}

function CustomCheckbox(props: CustomCheckboxProps) {
  const { title, hookFormProps } = props;

  const iconElement = props.icon ? (
    <Icon fontSize="2xl">
      {props.icon}
    </Icon>
  ) : undefined;

  return (
    <Checkbox inputProps={hookFormProps} icon={iconElement} colorPalette={"cyan"}>
      {title}
    </Checkbox>
  );
}

export default CustomCheckbox;