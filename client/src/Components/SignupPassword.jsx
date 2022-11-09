import {
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Image,
    Input,
    Link,
    Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import FormFooter from './FormFooter';
import { IoIosArrowBack } from 'react-icons/io';

const SignupPassword = () => {
    const [email, setEmail] = useState('');

    // handles email
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    // validation for email
    const isError = !String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

    // OnClicking next check if the email is present in database:
    // show loading
    // if present -> show theres already an account with email
    // else -> take the user to set password

    return (
        <>
            <Box bg="#f7f8fa">
                <Flex w={{ base: '100%', sm: '440px' }} margin={'auto'}>
                    <Image src="/topSurveyLogo.png" boxSize={'130px'} />
                </Flex>
                <Flex
                    direction={'column'}
                    w={{ base: '100%', sm: '440px' }}
                    boxSizing={'border-box'}
                    margin={'auto'}
                    bg="white"
                >
                    <FormControl
                        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                        p={{ base: '20px', sm: '36px' }}
                        textAlign={'left'}
                        display="flex"
                        flexDir={'column'}
                        gap="15px"
                        borderBottom={'1.5px solid lightgray'}
                    >
                        <Text textAlign={'left'} fontSize={'15px'}>
                            <Link
                                href="/signup/email"
                                color={'#007faa'}
                                display="flex"
                                alignItems={'center'}
                            >
                                <IoIosArrowBack /> Back
                            </Link>
                        </Text>
                        <Text fontSize={'34px'} color={'#333e48'}>
                            Create Password
                        </Text>
                        Email
                        <Box>
                            <FormLabel fontSize={'13px'}>
                                Enter a Password
                            </FormLabel>
                            <Input
                                isInvalid={isError && email !== ''}
                                _hover={{ borderColor: 'black' }}
                                type="email"
                                size={'lg'}
                                value={email}
                                onChange={handleChange}
                                fontSize={'15px'}
                                focusBorderColor="#00bf6f"
                                errorBorderColor="red.400"
                                borderRadius={'2px'}
                                color={isError ? 'red.400' : null}
                                borderColor="lightgray"
                            />
                            {isError && email !== '' ? (
                                <FormHelperText color={'red.400'}>
                                    Enter a valid email address
                                </FormHelperText>
                            ) : null}
                        </Box>
                        <Button
                            bg="#00bf6f"
                            isDisabled={isError}
                            size="lg"
                            _hover={{ bg: '00bf6f' }}
                            borderRadius={'2px'}
                            color="white"
                        >
                            Create Account
                        </Button>
                    </FormControl>
                </Flex>
            </Box>
            <FormFooter />
        </>
    );
};

export default SignupPassword;
