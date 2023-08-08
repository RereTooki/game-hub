import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  /*A prop 'platforms' for receiving the 'Platform array'*/
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
        /*Iterate over every element and for each element in the platforms array (from 'Platform'), */
        /*and in a variable called 'platform', store each current iteration*/
        /*and use it's slug property (pc, mac, ios etc) to pass the required value for the 'as'prop*/
        /*Use the iconmap function to get the correct value to be passed into the 'as' prop (from chakra UI)*/
        /*'platform' iterator variable -> 'platforms' variable/array -> 'Platform' array -> 'Platform[]' interface for collecting the game's platform metadata*/
      ))}
    </HStack>
  );
};

export default PlatformIconList;
