import React from 'react';
import {FormControl, Box, Stack, Input, WarningOutlineIcon} from 'native-base';

const InputForm = ({label, type, defaultValue, placeholder}) => {
  return (
    <Box w="100%">
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>{label}</FormControl.Label>
          <Input
            _light={{
              bg: 'coolGray.100',
            }}
            _dark={{
              bg: 'coolGray.800',
            }}
            _hover={{
              bg: 'coolGray.200',
            }}
            shadow={2}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default InputForm;
