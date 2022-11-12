import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Image,
    Input,
    Link,
    position,
    Text,
    useToast,
} from '@chakra-ui/react';
import React from 'react';
import FormFooter from './FormFooter';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
    confirmSignupPassword,
    createAccount,
    signupPassword,
} from '../Redux/Signup/signup.actions';
import { Navigate } from 'react-router-dom';
import { IS_NOT_SUCCESS } from '../Redux/Signup/signup.types';

const SignupPassword = () => {
    const {
        email,
        password,
        confirmPassword,
        isPasswordValid,
        isLoading,
        isError,
        isSuccess,
        terms,
        errorMessage,
        newsLetter,
    } = useSelector((store) => store.signup);
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChange = ({ target }) => {
        if (target.name === 'password') dispatch(signupPassword(target.value));
        else dispatch(confirmSignupPassword(target.value));
    };

    // onclicking create account button, add user data to db
    const handleCreateAccount = () => {
        dispatch(createAccount({ email, password, terms, newsLetter }));
    };

    if (isSuccess) {
        dispatch({ type: IS_NOT_SUCCESS });
        toast({
            title: 'Account created 🎉',
            position: 'top',
            isClosable: true,
            status: 'success',
            color: '00bf6f',
            variant: 'left-accent',
        });
        return <Navigate to="/login" />;
    }

    return (
        <>
            {isError ? (
                <Alert status="error">
                    <AlertIcon />
                    {errorMessage}
                </Alert>
            ) : null}
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
                        <Text fontSize={'15px'}>{email}</Text>
                        <Box>
                            <FormLabel fontSize={'13px'}>
                                Enter a Password
                            </FormLabel>
                            <Input
                                isInvalid={!isPasswordValid && password !== ''}
                                _hover={{ borderColor: 'black' }}
                                type="password"
                                size={'lg'}
                                value={password}
                                onChange={handleChange}
                                fontSize={'15px'}
                                focusBorderColor="#00bf6f"
                                errorBorderColor="#f05b24"
                                borderRadius={'2px'}
                                color={!isPasswordValid ? '#f05b24' : null}
                                borderColor="lightgray"
                                name="password"
                            />
                            <FormHelperText
                                color={'rgb(107, 120, 127)'}
                                fontSize="13px"
                            >
                                Enter at least 8 characters. Don’t use common
                                words, names, or sequential or repeated
                                characters.
                            </FormHelperText>
                        </Box>
                        <Box>
                            <FormLabel fontSize={'13px'}>
                                Confirm Password
                            </FormLabel>
                            <Input
                                isInvalid={
                                    !isPasswordValid && confirmPassword !== ''
                                }
                                isDisabled={!isPasswordValid}
                                _hover={{ borderColor: 'black' }}
                                type="password"
                                size={'lg'}
                                value={confirmPassword}
                                onChange={handleChange}
                                fontSize={'15px'}
                                focusBorderColor="#00bf6f"
                                errorBorderColor="#f05b24"
                                borderRadius={'2px'}
                                name="confirmPassword"
                                color={
                                    password !== confirmPassword &&
                                    confirmPassword !== ''
                                        ? '#f05b24'
                                        : null
                                }
                                borderColor="lightgray"
                            />

                            {password !== confirmPassword &&
                            confirmPassword !== '' ? (
                                <FormHelperText
                                    color={'#f05b24'}
                                    fontSize="13px"
                                >
                                    Passwords do not match
                                </FormHelperText>
                            ) : null}
                        </Box>
                        <Button
                            isLoading={isLoading}
                            fontSize={'15px'}
                            bg="#00bf6f"
                            isDisabled={
                                password !== confirmPassword || !isPasswordValid
                            }
                            size="lg"
                            _hover={{ bg: '00bf6f' }}
                            borderRadius={'2px'}
                            color="white"
                            onClick={handleCreateAccount}
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
