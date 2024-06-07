import { Box, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";

type Props = {
    ipInfo: {
        "ip": string,
        "hostname": string,
        "city": string,
        "region": string,
        "country": string,
        "loc": string,
        "org": string,
        "postal": string,
        "timezone": string
    };
};


export default function InfoComponent({ipInfo}: Props) {

    const isMobile = useBreakpointValue({base: true, lg: false});

    return (
        <SimpleGrid minW={'80vw'} maxW={'80vw'} spacingY={2} spacingX={5} columns={[1,1,2,4]} bg={'white'} borderRadius={10} p={4} mt={2}>
            <Box textAlign={ isMobile ? 'center' : 'left'} borderRightWidth={ !isMobile ? '1px' : '0px'} borderRightColor={'var(--custom-dark-grey)'} p={2} >
                <Text fontSize={'xs'} color={'var(--custom-dark-grey)'} fontWeight={'700'}>IP ADDRESS</Text>
                {
                    !ipInfo?.country ? (
                        <Text fontSize={'2xl'} fontWeight={'600'}>{"Invalid IP Address or Domain name."}</Text>
                    ) : (
                        <Text fontSize={'2xl'} fontWeight={'600'}>{ipInfo?.ip || "----"}</Text>
                    )
                }
            </Box>
            <Box textAlign={ isMobile ? 'center' : 'left'} borderRightWidth={ !isMobile ? '1px' : '0px'} borderRightColor={'var(--custom-dark-grey)'} p={2} >
                <Text fontSize={'xs'} color={'var(--custom-dark-grey)'} fontWeight={'700'}>LOCATION</Text>
                {
                    ipInfo?.city ? (
                        <Text fontSize={'2xl'} fontWeight={'600'}>{ipInfo?.city}, {ipInfo?.country} {ipInfo?.postal}</Text>
                    ) : (
                        <Text fontSize={'2xl'}>----</Text>
                    )
                }
            </Box>
            <Box textAlign={ isMobile ? 'center' : 'left'} borderRightWidth={ !isMobile ? '1px' : '0px'} borderRightColor={'var(--custom-dark-grey)'} p={2} >
                <Text fontSize={'xs'} color={'var(--custom-dark-grey)'} fontWeight={'700'}>TIMEZONE</Text>
                <Text fontSize={'2xl'}  fontWeight={'600'}>{ipInfo?.timezone || '----'}</Text>
            </Box>
            <Box textAlign={ isMobile ? 'center' : 'left'} p={2} >
                <Text fontSize={'xs'} color={'var(--custom-dark-grey)'} fontWeight={'700'}>ISP</Text>
                <Text fontSize={'2xl'}  fontWeight={'600'}>{ipInfo?.org || '----'}</Text>
            </Box>
        </SimpleGrid>
    )
}