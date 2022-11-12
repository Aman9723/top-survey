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
    Text,
} from '@chakra-ui/react';
import React from 'react';
import FormFooter from './FormFooter';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    forgotEmail,
    forgotPassword,
    sendOtp,
} from '../Redux/Forgot/forgot.actions';
import { FORGOT_NOT_SUCCESS } from '../Redux/Forgot/forgot.type';
import { IoIosArrowBack } from 'react-icons/io';

const ForgotEmail = () => {
    const { email, isEmailValid, loading, error, success, errorMessage } =
        useSelector((store) => store.forgot);
    const dispatch = useDispatch();

    // handles email
    const handleChange = ({ target }) => {
        if (target.name === 'email') dispatch(forgotEmail(target.value));
        else dispatch(forgotPassword(target.value));
    };

    // show loading
    // if present -> take the user to fill code and new password
    // else -> give error email doesn't exist

    const handleNext = () => {
        dispatch(sendOtp(email));
    };

    if (success) {
        dispatch({ type: FORGOT_NOT_SUCCESS });
        return <Navigate to="/forgot/changePassword" />;
    }

    return (
        <>
            {error ? (
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
                                href="/login"
                                color={'#007faa'}
                                display="flex"
                                alignItems={'center'}
                            >
                                <IoIosArrowBack /> Back
                            </Link>
                        </Text>
                        <Text fontSize={'34px'} color={'#333e48'}>
                            Forgot password?
                        </Text>
                        <Text fontSize={'15px'}>
                            Enter your email address and we’ll show you the next
                            steps to reset your password.
                        </Text>
                        <Box>
                            <FormLabel fontSize={'13px'}>
                                Email address
                            </FormLabel>
                            <Input
                                isInvalid={!isEmailValid && email !== ''}
                                _hover={{ borderColor: 'black' }}
                                type="email"
                                name="email"
                                size={'lg'}
                                value={email}
                                onChange={handleChange}
                                fontSize={'15px'}
                                focusBorderColor="#00bf6f"
                                errorBorderColor="#f05b24"
                                borderRadius={'2px'}
                                color={!isEmailValid ? '#f05b24' : null}
                                borderColor="lightgray"
                            />
                            {!isEmailValid && email !== '' ? (
                                <FormHelperText
                                    color={'#f05b24'}
                                    fontSize={'13px'}
                                >
                                    Enter a valid email address
                                </FormHelperText>
                            ) : null}
                        </Box>
                        <Button
                            isLoading={loading}
                            bg="#00bf6f"
                            isDisabled={!isEmailValid}
                            size="lg"
                            _hover={{ bg: '00bf6f' }}
                            borderRadius={'2px'}
                            color="white"
                            onClick={handleNext}
                            fontSize={'15px'}
                        >
                            Next
                        </Button>
                    </FormControl>
                </Flex>
            </Box>
            <FormFooter />
        </>
    );
};

export default ForgotEmail;
