'use client'
import { Box, Flex, Input, IconButton, useBreakpointValue, Tooltip } from "@chakra-ui/react";
import Image from 'next/image';

type Props = {
    inputQuery: string;
    setInputQuery: (inputQuery: string) => void;
    handleSubmit: (value: string) => void;
}

export default function FormComponent( {inputQuery, setInputQuery, handleSubmit} : Props) {

    const isMobile = useBreakpointValue({base: true, md: false});

    return (
        <Box as={Flex} flexDir={'row'} w={ isMobile ? '80vw' : '30vw'} >
            <Input 
                size={'md'} w={'100%'} 
                borderRadius={10}
                borderTopRightRadius={0} 
                borderBottomRightRadius={0} 
                placeholder={'Search for any IP Address or Domain'} 
                variant={'filled'} 
                bgColor={'white'} 
                padding={4}
                _focus={{bgColor: 'white', color: 'black', borderColor: 'white'}} 
                onChange={(e) => { setInputQuery(e.target.value); }}>    
            </Input>
            <Tooltip hasArrow placement={'top'} label={'Search'} aria-label={'A tooltip'}>
                <IconButton 
                    bgColor={'var(--custom-very-dark-grey)'} 
                    _hover={{bgColor: 'var(--custom-dark-grey)'}} 
                    aria-label={'Search Database'} 
                    borderRadius={10}
                    borderTopLeftRadius={0} 
                    borderBottomLeftRadius={0} 
                    icon={<Image src={'/icon-arrow.svg'} alt="Arrow Icon" width={11} height={14} />} 
                    onClick={() => handleSubmit(inputQuery)}
                ></IconButton>
            </Tooltip>
        </Box>
    );
}