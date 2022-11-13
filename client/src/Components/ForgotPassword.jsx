import React from 'react';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    Image,
    Input,
    Link,
    PinInput,
    PinInputField,
    Text,
} from '@chakra-ui/react';
import FormFooter from './FormFooter';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { Navigate } from 'react-router-dom';
import {
    changePassword,
    forgotPassword,
} from '../Redux/Forgot/forgot.actions';
import { FORGOT_NOT_SUCCESS } from '../Redux/Forgot/forgot.type';

const ForgotPassword = () => {
    const {
        email,
        isPasswordValid,
        newPassword,
        loading,
        error,
        success,
        errorMessage,
    } = useSelector((store) => store.forgot);
    const dispatch = useDispatch();

    const [code, setCode] = React.useState({
        0: '',
        1: '',
        2: '',
        3: '',
    });

    // handles code
    const handleCode = ({ target }) => {
        setCode((code) => {
            code[target.name] = target.value;
            return { ...code };
        });
    };

    // handles  new password
    const handlePassword = ({ target }) => {
        dispatch(forgotPassword(target.value));
    };

    // change password if code is correct
    const handleCodePassword = () => {
        dispatch(
            changePassword({
                email,
                code: code[0] + code[1] + code[2] + code[3],
                newPassword,
            })
        );
    };

    if (success) {
        dispatch({ type: FORGOT_NOT_SUCCESS });
        return <Navigate to="/login" />;
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
                                href="/forgot/sendOtp"
                                color={'#007faa'}
                                display="flex"
                                alignItems={'center'}
                            >
                                <IoIosArrowBack /> Back
                            </Link>
                        </Text>
                        <Text fontSize={'34px'} color={'#333e48'}>
                            Check your email for a code
                        </Text>
                        <Text fontSize={'14px'} fontWeight="600">
                            {email}
                        </Text>
                        <Text fontSize={'14px'}>
                            Enter the code from your inbox to reset your
                            password.
                        </Text>
                        <HStack
                            display={'flex'}
                            justifyContent="flex-start"
                            gap={'15px'}
                        >
                            <PinInput otp size={'lg'} placeholder="">
                                <PinInputField onChange={handleCode} name="0" />
                                <PinInputField onChange={handleCode} name="1" />
                                <PinInputField onChange={handleCode} name="2" />
                                <PinInputField onChange={handleCode} name="3" />
                            </PinInput>
                        </HStack>
                        <Box>
                            <FormLabel fontSize={'13px'}>
                                New password
                            </FormLabel>
                            <Input
                                isInvalid={
                                    !isPasswordValid && newPassword !== ''
                                }
                                _hover={{ borderColor: 'black' }}
                                type="password"
                                size={'lg'}
                                value={newPassword}
                                onChange={handlePassword}
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
                        <Button
                            isLoading={loading}
                            fontSize={'15px'}
                            bg="#00bf6f"
                            isDisabled={!isPasswordValid}
                            size="lg"
                            _hover={{ bg: '00bf6f' }}
                            borderRadius={'2px'}
                            color="white"
                            onClick={handleCodePassword}
                        >
                            Change password
                        </Button>
                    </FormControl>
                </Flex>
            </Box>
            <FormFooter />
        </>
    );
};

export default ForgotPassword;
