import React from 'react'

import {
	Button,
	Heading,
	Text,
	useBreakpointValue,
	useColorModeValue,
	Box as Container,
	VStack,
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

function Home() {
	const router = useRouter()

	return (
		<VStack
			id='home'
			minH='100vh'
			px={[6, 6, 32]}
		>
			<Container my="auto">
				<Text
					color={useColorModeValue('brand.base-dark', '#CAB5C1')}
					fontWeight="bold"
					fontSize={['base', 'lg', 'xl', '2xl']}
				>
							Hey there, my name is
				</Text>
				<Heading
					color={useColorModeValue('brand.base-main', '#F3E4ED')}
					css={{
						WebkitTextStroke: useBreakpointValue([0.5, 1]),
						WebkitTextStrokeColor: '#393437',
						filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))'
					}}
					fontSize={['2xl', '3xl', '3xl', '5xl', '6xl']}
				>
						Sean Christian Lozana.
				</Heading>
				<Heading
					lineHeight={1}
					color={useColorModeValue('brand.base-color-1', '#E3CEDB')}
					fontSize={['2xl', '2xl', '2xl', '5xl', '6xl']}
				>
						I make an impact through code.
				</Heading>
				<Text
					w={['full', 'full', '80%', '60%']}
					py={4} pr={6}
					fontSize={['sm', 'md', 'md', 'lg']}>
						I&apos;m a Software Engineer furthering my career in the fields of both Frontend and Backend development
						using modern technologies. Currently, I’m nurturing
						my skills, building and making an impact at
					<strong> Stratpoint Technologies.</strong>
				</Text>
				<Button
					mt={6}
					leftIcon={<ChatIcon />}
					rounded='none'
					border='1px'
					borderColor='brand-base-dark'
					p={6}
					bgColor='brand.base-main'
					color='brand.base-dark'
					size={['sm', 'lg']}
					onClick={() => router.push('#contact')}
				>
						Let&apos;s collab!
				</Button>
			</Container>
		</VStack>
	)
}

export default Home