import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const LogoBox = ({ src, text }) => {
    return (
        <Flex flexDir={'column'} gap="5px" textAlign={'center'}>
            <Image
                src={src}
                boxSize={'50px'}
                border="1px solid lightgray"
                p="7px 5px"
                borderRadius={'2px'}
                _hover={{ bg: '#f7f8fa' }}
            />
            <Text fontSize={'12px'}>{text}</Text>
        </Flex>
    );
};

export default LogoBox;
