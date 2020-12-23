import Head from "next/head";
import GradientMap from "../components/GradientMap";
import Logo from "../components/Logo";
import { Box, Heading, Text } from "rebass";
import { colors } from "../Components/Utils";

export default function Home() {
  return (
    <>
      <Head />
      <GradientMap />
      <Logo />
    </>
  );
}
