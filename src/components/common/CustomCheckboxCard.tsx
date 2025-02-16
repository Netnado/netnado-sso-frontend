'use client';

import { CheckboxCard } from '@/components/ui/checkbox-card';
import { CheckboxCardIndicator, Float, Icon } from '@chakra-ui/react';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface ICustomCheckboxCardProps {
  label: string;
  description?: string;
  hookFormProps?: UseFormRegisterReturn;
  icon?: React.ReactNode;
}

function CustomCheckboxCard(props: ICustomCheckboxCardProps) {
  const { label, description, hookFormProps, icon } = props;

  // Only wrap and pass the icon if it exists.
  const iconElement = icon ? (
    <Icon fontSize="2xl" mb="2">
      {icon}
    </Icon>
  ) : undefined;

  return (
    <CheckboxCard
      align={"start"}
      label={label}
      description={description}
      inputProps={hookFormProps}
      icon={iconElement}
      indicator={
        <Float placement={"top-end"} offset={6}>
          <CheckboxCardIndicator />
        </Float>
      }
    />
  );
}

export default CustomCheckboxCard;