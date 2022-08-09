import Head from "../components/Head";
import Link from "next/link";
import GradientHeader from "../components/GradientHeader";
import LogoSimple from "../components/LogoSimple";
import { Box, Flex, Text, Image } from "rebass";
import { colors } from "../components/Utils";
import { ExampleCard } from "../components/Card";
import { BtnRainbow } from "../components/Button";
import SignupForm from "../components/SignupForm";
import PurchaseCard from "../components/PurchaseCard";
import styled from "styled-components";

const ImageCard = styled(Image)`
  border-radius: 20px;
  background-color: var(--surfaceHighlight);
  box-shadow: 0 3px 11px 0 var(--cardShadow), 0 1px 4px 0 var(--cardShadow);

  display: block;
`;

export default function Guide() {
  return (
    <>
      <Head title="SwiftUI for Designers" description="Prototype in SwiftUI" />
      <GradientHeader />
      <Flex mt={[4, "120px"]}>
        <Box mx={"auto"}>
          <LogoSimple />
        </Box>
      </Flex>

      <Box
        mt={"40px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "32rem" }}
      >
        <Text
          color={colors.primaryText}
          mb={3}
          textAlign="center"
          fontSize={[4, 5]}
          fontWeight="500"
        >
          SwiftUI for Designers
        </Text>

        <Text>
          {`SwiftUI is a great tool for making interactive prototypes. There's a
          high ceiling for what you can make. If it's possible to build, it's
          possible to prototype.`}
        </Text>
        <br />
        <Text>
          {`You can also ship what you design. You don't have to stop at at a prototype. You can make real apps.`}
        </Text>
        <br />
        <Text>
          You have access to the full set of capabilities an engineer has.
          Sensor data, haptics, augmented reality and 3D engines are all
          available.
        </Text>
        <br />
        <Text>
          Everything is native and performant and you can feel the difference.
          Even complex prototypes feel lightning fast and snappy. It feels like
          a real app because it is a real app.
        </Text>
        <br />

        <Text>
          I made this course to help you learn the parts of SwiftUI that are
          relevant for designing and prototyping interfaces.
        </Text>
      </Box>

      <Box
        mt={"20px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "32rem" }}
      >
        <Text
          color={colors.primaryText}
          mb={3}
          mt={5}
          textAlign={"center"}
          fontSize={[4, 5]}
          fontWeight="500"
        >
          Prototype in SwiftUI
        </Text>

        <Text>
          {`This is a focused course with 5 videos. My favorite way to learn a new tool is by building things with it, and that's how the course is taught. You don't need to be familiar with SwiftUI or have much coding experience to get started.`}
        </Text>

        <Box mt={[5, 6]}>
          <ImageCard mb={4} width="100%" src="./intro-to-xcode.png" />
          <Text
            textAlign="center"
            mb={3}
            fontWeight="600"
            color={colors.primaryText}
          >
            An Introduction to Xcode
          </Text>
          <Text>
            {
              "This introduction to Xcode shows you how to setup a project, take advantage of useful keyboard shortcuts, use the Xcode Library, and also walks through the most important sections of the Xcode application."
            }
          </Text>
        </Box>
        <Box mt={[5, 6]}>
          <ImageCard mb={4} width="100%" src="./intro-to-swiftui.png" />
          <Text
            textAlign="center"
            mb={3}
            fontWeight="600"
            color={colors.primaryText}
          >
            An Introduction to SwiftUI
          </Text>
          <Text>
            {
              "This overview of SwiftUI will help us build our prototypes. You will learn how to use Views, Modifiers, and State to add styles and interaction in SwiftUI."
            }
          </Text>
        </Box>
        <Box mt={[5, 6]}>
          <ImageCard mb={4} width="100%" src="./fidget.gif" />
          <Text
            textAlign="center"
            mb={3}
            fontWeight="600"
            color={colors.primaryText}
          >
            Creating a Fidget Card
          </Text>
          <Text>
            {
              "The first prototype we'll build is a fidget friendly card. In addition to walking through the prototype, this video explains the rotation3DEffect modifier, drag gestures,  animations, and data mapping."
            }
          </Text>
        </Box>

        <Box mt={[5, 6]}>
          <ImageCard mb={4} width="100%" src="./airpods.gif" />
          <Text
            textAlign="center"
            mb={3}
            fontWeight="600"
            color={colors.primaryText}
          >
            Creating a Parallax effect with the Accelerometer
          </Text>
          <Text>
            {
              "The next prototype we'll build is the a parallax effect with that is created using accelerometer data. In addition to explaining the prototype this lesson explains how to import libraries how to handle user permissions to access camera and motion data and how to read accelerometer data."
            }
          </Text>
        </Box>

        <Box mt={[5, 6]}>
          <ImageCard mb={4} width="100%" src="./boomerang.gif" />
          <Text
            textAlign="center"
            mb={3}
            fontWeight="600"
            color={colors.primaryText}
          >
            Creating a Boomerang Effect
          </Text>
          <Text>
            {
              "This final lesson walks though how to create a boomerang effect to cycle between cards. This lesson breaks down a more complex prototype. In addition to the walkthrough, this lesson covers composition, bindings, types, and using velocity to create fluid gestures."
            }
          </Text>
        </Box>
      </Box>

      <PurchaseCard />

      <Box mt={[5, 6]}>
        <Flex
          textAlign={["center", "left"]}
          flexDirection={["column", "row"]}
          mt={[70, 100]}
          mb={[50, 100]}
          mx={"auto"}
          sx={{ maxWidth: "30em" }}
        >
          <Box width={[1, 3 / 12]}>
            <Image
              mt={3}
              height="130px"
              sx={{ borderRadius: 100, filter: "saturate(1.2)" }}
              width="130px"
              src="https://pbs.twimg.com/profile_images/659824786260934656/syJKampr_400x400.jpg"
            />
          </Box>
          <Flex p={2} width={[1, 9 / 12]} flexDirection={"column"}>
            <Text fontWeight="600" color={colors.primaryText}>
              About the Instructor
            </Text>
            <Text>
              My name is Philip Davis. I{"'"}m a designer who has prototyped
              interfaces at Apple and Facebook. You can follow my work on{" "}
              <Link href="https://twitter.com/philipcdavis">Twitter</Link>.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
