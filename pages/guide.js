import Head from "../components/Head";
import GradientHeader from "../components/GradientHeader";
import Link from "next/link";
import Icon from "../components/Icon";
import LogoSimple from "../components/LogoSimple";
import { Box, Flex, Text, Image } from "rebass";
import { colors, colorChange } from "../components/Utils";
import styled from "styled-components";
import { SystemCard, MediaCard } from "../components/Card";
import { BtnTwitter } from "../components/Button";
import SignupForm from "../components/SignupForm";

const Numeral = styled.div`
  background-color: ${(props) => (props.color ? props.color : colors.blue)};
  display: inline-block;
  border-radius: ${(props) => (props.large ? 12 : 6)}px;
  width: ${(props) => (props.large ? 48 : 34)}px;
  text-align: center;
  margin-right: ${(props) => (props.large ? 0 : 16)}px;
  font-weight: bold;
  color: ${colors.buttonLabel};
`;

const Hr = styled.hr`
  width: 60%;
  margin-top: 13%;
  margin-bottom: 13%;
  border: none;
  animation: ${colorChange("border-color")} 10s infinite alternate;
  border-bottom: 2px solid ${colors.gray2};
  opacity: 0.5;
  border-radius: 3px;
`;

export default function Guide() {
  return (
    <>
      <Head
        title="A Designer’s Guide to SwiftUI"
        description="SwiftUI is a powerful tool for designers. You don't need to be a 10x
          engineer to get a lot from the framework."
      />
      <GradientHeader />

      <Flex mt={[4, 6]}>
        <Box mx={"auto"}>
          <LogoSimple />
        </Box>
      </Flex>
      <Box
        mt={"40px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "36rem" }}
      >
        <Text
          color={colors.primaryText}
          mb={4}
          textAlign="center"
          fontSize={[3, 5]}
          fontWeight="700"
        >
          A Designer’s Guide to SwiftUI
        </Text>

        <p>
          SwiftUI is a powerful tool for designers. You don't need to be a 10x
          engineer to get a lot from the framework. Using SwiftUI you can do
          some truly amazing things.
        </p>

        <ul>
          <li>You can build fully functional apps.</li>
          <li>
            You can work closer with engineering to get the design details just
            right.
          </li>
          <li>You can compose components to build advanced layouts.</li>
          <li>You can create reusable components and styles.</li>
          <li>
            You can create interruptable animations and advanced prototypes.
          </li>
        </ul>

        <p>SwiftUI is a design tool from the future.</p>

        <p>
          SwiftUI is built on the Swift programming language. A driving
          principle of the Swift language is that it progressively discloses
          complexity. You can get started with little programming experience,
          but won't get stuck when you need advanced functionality. It's a great
          starter coding language.
        </p>
        <p>
          SwiftUI came with an update to Xcode called Live Preview. Before Live
          Preview you needed to build your app each time you wanted to view a UI
          change. While this is fine for many software engineers, it makes
          visual changes slow and tedious. SwiftUI came with a visual
          representation of your views that updated in real time, similar to
          other design tools.
        </p>
        <Box textAlign="center">
          <h2>SwiftUI Resources for Designers</h2>
          <Text mt={4}>
            I’ll be emailing SwiftUI resources tailored to designers.
            <br /> &#32; If you’re getting started or looking to level up,
            subscribe below.
          </Text>
          <Box mx="auto" mt={3} mb={4} py={3} width={["100%", "500px"]}>
            <SignupForm />
          </Box>
        </Box>
        <Hr />
        <Text
          color={colors.primaryText}
          mb={5}
          textAlign="center"
          fontSize={[3, 4]}
          fontWeight="700"
        >
          How to Get Started
        </Text>
        <p>
          If you're interested in getting started with SwiftUI below are some
          resources to help you get started.
        </p>

        <h2>
          <Numeral color={colors.lightRed}>1</Numeral>System Requirements
        </h2>
        <p>
          In order to use SwiftUI with live preview you'll need a Mac (or iPad),
          and Xcode.
        </p>
        <Flex mx={[0, -2]} mb={"90px"} flexWrap="wrap">
          <SystemCard
            label="MacOS"
            version="10.15+"
            button="Check"
            url="https://support.apple.com/en-us/HT201260"
          />
          <SystemCard
            label="iOS App"
            version="13.0+"
            button="View"
            url="https://www.apple.com/swift/playgrounds/"
          />
          <SystemCard
            label="Xcode"
            version="11.0+"
            button="Download"
            url="https://apps.apple.com/us/app/xcode/id497799835?mt=12"
          />
        </Flex>

        <h2>
          <Numeral color={colors.lightPurple}>2</Numeral> WWDC Videos
        </h2>
        <p>
          The videos from WWDC are a great way to get start learning SwiftUI.
          Here are 4 that I found especially helpful for designers.
        </p>
        <Flex mx={[0, -3]} mb={"50px"} flexWrap="wrap">
          <MediaCard
            color="lightPurple"
            url="https://developer.apple.com/videos/play/wwdc2020/10119/"
            src="/introduction-to-swift-ui.png"
            label="Introduction to SwiftUI"
            button="Watch"
          />
          <MediaCard
            color="lightPurple"
            url="https://developer.apple.com/videos/play/wwdc2020/10185/"
            src="/visually-edit-swiftui-views.png"
            label="Visually edit SwiftUI views"
            button="Watch"
          />
          <MediaCard
            color="lightPurple"
            label="Build SwiftUI views for widgets"
            src="/build-swift-ui-views-for-widgets.png"
            url="https://developer.apple.com/videos/play/wwdc2020/10033/"
            button="Watch"
          />
          <MediaCard
            color="lightPurple"
            label="Stacks, Grids, and Outlines"
            src="/stacks-grids-outlines.png"
            button="Watch"
            url="https://developer.apple.com/videos/play/wwdc2020/10031/"
          />
        </Flex>

        <h2>
          <Numeral color={colors.lightBlue}>3</Numeral>Apple's Official
          Tutorials
        </h2>
        <p>
          A great way to learn is to build. In these two tutorials provided by
          Apple, you'll learn how to create interfaces and build functioning
          apps using SwiftUI.
        </p>

        <Flex mx={[0, -3]} mb={"50px"} flexWrap="wrap">
          <MediaCard
            color="lightBlue"
            label="Introducing SwiftUI"
            src="/introducing-swiftui.png"
            button="Start"
            url="https://developer.apple.com/tutorials/swiftui/"
          />
          <MediaCard
            color="lightBlue"
            label="Develop Apps with SwiftUI"
            src="/developing-apps-with-swiftui.png"
            button="Start"
            url="https://developer.apple.com/tutorials/app-dev-training"
          />
        </Flex>

        <h2>
          <Numeral color={colors.lightGreen}>4</Numeral> App Examples
        </h2>
        <p>
          Example apps are a wonderful learning tool. This fully functional app
          that Apple provides could be a good starting point and helpful
          reference.
        </p>

        <Flex mx={[0, -3]} mb={"50px"} flexWrap="wrap">
          <MediaCard
            color="lightGreen"
            label="Fruta: An iOS and Mac App"
            src="/fruta.png"
            button="View"
            url="https://developer.apple.com/documentation/swiftui/fruta_building_a_feature-rich_app_with_swiftui"
          />
        </Flex>

        <h2>
          <Numeral color={colors.lightYellow}>5</Numeral>Community Resources
        </h2>
        <p>
          There are lots of good resources created by people in the Swift
          community. Here are two that have excellent interviews, articles,
          documentation, and videos.
        </p>
        <Flex mx={[0, -3]} mb={"50px"} flexWrap="wrap">
          <MediaCard
            color="lightYellow"
            src="/hacking-with-swift.png"
            label="Hacking with Swift"
            button="View"
            url="https://www.hackingwithswift.com"
          />
          <MediaCard
            color="lightYellow"
            label="Swift by Sundell"
            src="/swift-by-sundell.png"
            button="View"
            url="https://www.swiftbysundell.com"
          />
        </Flex>

        <Box textAlign="center">
          <Box mb={"90px"} ml={"-7px"} opacity={0.4}>
            <Icon name="logo" size={37} fill={colors.gray4} />
          </Box>
          <h2>SwiftUI Resources for Designers</h2>
          <Text mt={4}>
            I’ll be emailing SwiftUI resources tailored to designers.
            <br /> &#32; If you’re getting started or looking to level up,
            subscribe below.
          </Text>
          <Box mx="auto" mt={3} mb={4} py={3} width={["100%", "500px"]}>
            <SignupForm />
          </Box>
        </Box>

        <Box pb={4}>
          <Box textAlign="center" mt={5} mb={4} width={["100%"]}>
            <Link href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fswiftui.design%2Fguide&via=philipcdavis&text=A%20Designer%27s%20Guide%20to%20SwiftUI">
              <a target="_blank">
                <BtnTwitter twitter>Share on Twitter</BtnTwitter>
              </a>
            </Link>
            <Text opacity={0.5} mt={3}>
              <Link href="https://twitter.com/philipcdavis">
                <a target="_blank">@philipcdavis</a>
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
