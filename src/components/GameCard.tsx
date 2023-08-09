import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  /*A prop 'game' for receiving the game object 'Game' which has the game: */
  /* id, name, background_image, parent_platforms, metacritic etc*/
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
            /*To display a horizontal list of its icons */
            /*For each game card, get and store all its 'platforms' (icons) by using the 'game' interface*/
            /*In the game interface, reference its parent_platforms property and iterate through each property*/
            /*and temporarily hold it in a 'p' varialble*/
            /*'platforms' is an object that will hold all the key-value pairs of each game (key) and it's parent_platforms (property)*/
            /*Inside it is a function for getting all the parent_platforms of a game (then every game eventually) */
            /*It is put inside <PlatformIconList> so that over there, each parent_platform is given its appropriate icon*/
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
