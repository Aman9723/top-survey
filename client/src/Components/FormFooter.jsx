import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const FormFooter = () => {
    return (
        <Flex
            w="100%"
            alignItems={'flex-end'}
            justifyContent={{ base: 'flex-start', sm: 'flex-end' }}
        >
            <Flex
                gap={{ base: '10px', sm: '15px', md: '25px' }}
                p={{ base: '20px' }}
                fontSize={'13px'}
                color="#005977"
                flexWrap={'wrap'}
                alignItems={'flex-start'}
                flexDir={{ base: 'column', sm: 'row' }}
            >
                <Link>
                    <Text>Help</Text>
                </Link>
                <Link>
                    <Text>Terms of Use</Text>
                </Link>
                <Link>
                    <Text>Privacy Notice</Text>
                </Link>
                <Link>
                    <Text>California Privacy Notice</Text>
                </Link>
                <Link>
                    <Text>Cookies Policy</Text>
                </Link>
                <Link>
                    <Text>Do Not Sell My Personal Information</Text>
                </Link>
                <Link>
                    <Text>Cookie Preferences</Text>
                </Link>
            </Flex>
        </Flex>
    );
};

export default FormFooter;
