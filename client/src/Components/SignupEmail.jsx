import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Checkbox,
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
import {
    checkEmail,
    signupEmail,
    signupNewsLetter,
    signupTerms,
} from '../Redux/Signup/signup.actions';
import FormFooter from './FormFooter';
import LogoBox from './LogoBox';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { IS_NOT_SUCCESS } from '../Redux/Signup/signup.types';

const SignupEmail = () => {
    const {
        email,
        terms,
        newsLetter,
        isEmailValid,
        isLoading,
        isError,
        isSuccess,
        errorMessage,
    } = useSelector((store) => store.signup);
    const dispatch = useDispatch();

    // handles email
    const handleChange = ({ target }) => {
        dispatch(signupEmail(target.value));
    };

    // handles terms & newsLetter
    const handleCheck = ({ target }) => {
        if (target.name === 'terms') dispatch(signupTerms(target.checked));
        else dispatch(signupNewsLetter(target.checked));
    };

    // show loading
    // if present -> show theres already an account with email
    // else -> take the user to set password

    const handleNext = (e) => {
        dispatch(checkEmail(email));
    };

    if (isSuccess) {
        dispatch({ type: IS_NOT_SUCCESS });
        return <Navigate to="/signup/password" />;
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
                        <Text textAlign={'right'} fontSize={'15px'}>
                            Already have an account?{' '}
                            <Link href="/login" color={'#007faa'}>
                                Log in
                            </Link>
                        </Text>
                        <Text fontSize={'34px'} color={'#333e48'}>
                            Create an account
                        </Text>
                        <Box>
                            <FormLabel fontSize={'13px'}>
                                Email address
                            </FormLabel>
                            <Input
                                isInvalid={!isEmailValid && email !== ''}
                                _hover={{ borderColor: 'black' }}
                                type="email"
                                size={'lg'}
                                value={email}
                                onChange={handleChange}
                                fontSize={'15px'}
                                focusBorderColor="#00bf6f"
                                errorBorderColor="red.400"
                                borderRadius={'2px'}
                                color={!isEmailValid ? 'red.400' : null}
                                borderColor="lightgray"
                            />
                            {!isEmailValid && email !== '' ? (
                                <FormHelperText color={'red.400'}>
                                    Enter a valid email address
                                </FormHelperText>
                            ) : null}
                        </Box>
                        <Checkbox
                            size={'lg'}
                            colorScheme="green"
                            onChange={handleCheck}
                            name="terms"
                            defaultChecked={terms}
                        >
                            <Text fontSize={'12px'} color="#6b787f">
                                You agree to the{' '}
                                <Link color={'#005977'}>Terms of Use</Link> and{' '}
                                <Link color={'#005977'}>Privacy Notice.</Link>
                            </Text>
                        </Checkbox>
                        <Checkbox
                            size={'lg'}
                            colorScheme="green"
                            onChange={handleCheck}
                            name="newsLetter"
                            defaultChecked={newsLetter}
                        >
                            <Text fontSize={'12px'} color="#6b787f">
                                You agree to receive product news and special
                                promotions via email. You can opt-out of these
                                emails in your My Account page anytime.
                            </Text>
                        </Checkbox>
                        <Button
                            isLoading={isLoading}
                            bg="#00bf6f"
                            isDisabled={!isEmailValid || !terms}
                            size="lg"
                            _hover={{ bg: '00bf6f' }}
                            borderRadius={'2px'}
                            color="white"
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    </FormControl>
                    <Flex
                        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                        p={{ base: '20px', sm: '30px 36px' }}
                        textAlign={'left'}
                        display="flex"
                        flexDir={'column'}
                        gap="15px"
                    >
                        <Text fontSize={'15px'}>Or sign up with</Text>
                        <Flex justifyContent={'space-between'}>
                            <LogoBox src="/microsoft.png" text="Microsoft" />
                            <LogoBox src="/facebook.png" text="Facebook" />
                            <LogoBox src="/linkedIn.png" text="LinkedIn" />
                            <LogoBox src="/google.png" text="Google" />
                            <LogoBox src="/apple.png" text="Apple" />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
            <FormFooter />
        </>
    );
};

export default SignupEmail;
