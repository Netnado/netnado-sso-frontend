import { Tooltip } from '@/components/ui/tooltip';
import { evaluatePasswordStrength } from '@/helpers/string.helper';
import { SizeEnum } from '@/types/size-enum';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { LuInfo } from 'react-icons/lu';

export interface ICustomPasswordStrengthMeterProps {
  password: string;
  size?: SizeEnum;
  color?: string;
  weakColor?: string;
}

const PASSWORD_STRENGTH_STATES: { [key: number]: string } = {
  0: "Very weak",
  1: "Weak",
  2: "Medium",
  3: "Strong",
}

const PASSWORD_STRENGTH_STATE_TOOLTIPS: { [key: number]: string } = {
  0: "Your password should have at least 6 characters",
  1: "Your password should contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  2: "Your password should be at least 12 characters long",
  3: "Your password is strong",
};

const BAR_SIZE_MAP: { [key: string]: string } = {
  [SizeEnum.SMALL]: "1",
  [SizeEnum.MEDIUM]: "2",
  [SizeEnum.LARGE]: "4",
};

function CustomPasswordStrengthMeter(props: ICustomPasswordStrengthMeterProps) {
  const { password, size, color, weakColor } = props;


  const score: number = React.useMemo((): number => {
    return evaluatePasswordStrength(password);
  }, [password]);

  return (
    <Flex direction={"column"} w={"full"} justifyContent={"start"} alignItems={"start"}>
      <Flex direction={"row"} w={"full"} justifyContent={"center"} alignItems={"center"} gap={"2"}>
        <Text fontSize={"sm"} fontWeight={"bold"} marginY={"2"} textAlign={"center"}>{PASSWORD_STRENGTH_STATES[score]}
        </Text>
        <Tooltip content={PASSWORD_STRENGTH_STATE_TOOLTIPS[score]} positioning={{ placement: "right" }} openDelay={100}>
          <LuInfo />
        </Tooltip>
      </Flex>


      <Flex direction={"row"} w={"full"} p={"2"} justifyContent={"start"} alignItems={"center"} gap={"1"}>
        {Object.keys(PASSWORD_STRENGTH_STATES).map((key) => {
          let barColor = +key <= score ? (color ?? "green.500") : "gray.200";
          if (+key < 2 && score < 2) {
            barColor = weakColor ?? "orange.500";
          }

          return (
            <Flex key={+key} h={BAR_SIZE_MAP[size!] ?? "2"} w={"25%"}
              bg={barColor}
              borderRadius={"md"}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}

export default CustomPasswordStrengthMeter;