import { Button } from "@/components/ui/button";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex bg={"blue"} className="green" flexDir={"column"}>
            Helo
            <Box>
                <Button>Clik me</Button>
            </Box>
        </Flex>
    );
}
