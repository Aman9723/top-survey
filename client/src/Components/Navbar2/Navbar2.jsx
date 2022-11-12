import {
	Box,
	Button,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Navbar2.module.css";
import logo from "../Images/logo.jpg";
import { useSelector } from "react-redux";

const Navbar2 = () => {
	function handleSignout() {}
	const { token } = useSelector((store) => store.login);
	const array = token.split("_");
	console.log(token, array);
	return (
		<div>
			<Box className={styles.Navbar2box}>
				<Flex className={styles.Nav_first}>
					<Link href="/dashboard">
						<Image height={"40px"} src={logo}></Image>
					</Link>
					<Button colorScheme={"whatsapp"} variant="link">
						Dashboard
					</Button>
					<Button colorScheme={"whatsapp"} variant="link">
						My surveys
					</Button>
					<Button colorScheme={"whatsapp"} variant="link">
						All surveys
					</Button>
					<Button colorScheme={"whatsapp"} variant="link">
						Plans & pricing
					</Button>
				</Flex>
				<Box className={styles.Nav_Second}>
					<Button colorScheme={"#fdd116"}>Upgrade</Button>
					<Grid />
					<Help />
					<Box>
						<Menu>
							<MenuButton
								border={"none"}
								marginLeft={"90px"}
								backgroundColor={"#3f3b33"}
								height={"30px"}
								color={"white"}
								_hover={"none"}
								_focus={"none"}
								as={Button}
								rightIcon={<ChevronDownIcon />}
							>
								{}
							</MenuButton>
							<MenuList
								background={"whiteAlpha.100"}
								marginLeft={"60px"}
								fontWeight={"500"}
							>
								<MenuItem className={styles.butnav4} fontWeight={"500"}>
									My Account
								</MenuItem>
								<MenuItem className={styles.butnav4} fontWeight={"500"}>
									Library
								</MenuItem>
								<MenuItem className={styles.butnav4} fontWeight={"500"}>
									Contact
								</MenuItem>
								<MenuItem
									className={styles.butnav4}
									fontWeight={"500"}
									onClick={handleSignout}
								>
									Sign Out
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Box>
		</div>
	);
};

export default Navbar2;

function Grid() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button
				border={"none"}
				backgroundColor={"#3f3b33"}
				_hover={"#3f3b33"}
				ref={btnRef}
				colorScheme="teal"
				onClick={onOpen}
			>
				<Link>
					<Image
						height={"25px"}
						src="https://cdn.smassets.net/assets/dashweb/smlib.globaltemplates/13.0.0/assets/ProductsIcon.svg"
					></Image>
				</Link>
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent background={"white"} overflowY={"scroll"}>
					<DrawerCloseButton background={"white"} border={"none"} />
					<Text className={styles.drawerPro}>Products</Text>
					<ul className={styles.ul_style}>
						<li>
							<Link>
								<Text>Enterprise</Text>
								<Text>Get more security & control over your survey data</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>Audience</Text>
								<Text>
									Collect survey responses from our global consumer panel
								</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>Integration & Plug-ins</Text>
								<Text>
									Easily connect survey data to existing business systems
								</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>CX</Text>
								<Text>Understand & improve customer experience(NPS)</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>Engage</Text>
								<Text>Understand & increase employee engagement</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>TechValidate</Text>
								<Text>
									Capture & transform customer feedback into case studies
								</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>Wuffo</Text>
								<Text>Gather data & payments with online forms</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>Apply</Text>
								<Text>Collect,review & manage application online</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>GetFeedback</Text>
								<Text>Customer feedback for Salesforce</Text>
							</Link>
						</li>
					</ul>
				</DrawerContent>
			</Drawer>
		</>
	);
}

function Help() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button
				border={"none"}
				backgroundColor={"#3f3b33"}
				_hover={"#3f3b33"}
				ref={btnRef}
				colorScheme="teal"
				onClick={onOpen}
			>
				<Link>
					<Image
						height={"25px"}
						src="https://cdn.smassets.net/assets/dashweb/smlib.globaltemplates/13.0.0/assets/HelpIcon.svg"
					></Image>
				</Link>
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent background={"white"}>
					<DrawerCloseButton background={"white"} border={"none"} />
					<Text className={styles.drawerPro}>Help</Text>
					<ul className={styles.ul_style}>
						<li>
							<Link>
								<Text>Help Center</Text>
								<Text>Find quick answers to your questions</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>Resource</Text>
								<Text>Templates,best practices , case studies and more</Text>
							</Link>
						</li>
						<li>
							<Link>
								<Text>Curiosity at Work</Text>
								<Text>Get inspiration on our blog</Text>
							</Link>
						</li>
					</ul>
				</DrawerContent>
			</Drawer>
		</>
	);
}
