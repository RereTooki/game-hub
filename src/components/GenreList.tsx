import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  /* This is to notify the parent or the consumer of this component that a genre has been selected*/
  /* The end-aim here is to (notify the app.tsx file when a genre is selected) and then pass the selected genre to the GameGrid from our GenreList */
  /* but to do that, we have to pass it from the GenreList to the App first then from the App, it can be accessed by the GameGrid
  /* A prop for passing a call-back function*/
  /* A property 'onSelectGenre' which is a function that takes a 'Genre' object and returns void*/
  /* We're collecting the genre from the useData.ts file and storing it in 'onSelectGenre' which we're passing as a prop to the 'GenreList' function */
  /* Once it's a prop, when the button is clciked, we're passing the 'genre' of the game to 'onSelectGenre'*/
  /* We then pass/move it (onSelectGenre) to App.tsx where we get notified and then set the selected genre (setSelectedGenre)*/
  /* We're passing the onSelectGenre prop (a function that takes a 'genre' object) to our 'GenreList' over there */
  /* From App.tsx, we pass it to a game grid to do the filtering and only show games with the required genre */
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (error) return null;
  // if (isLoading) return <Spinner />; //It loads a spinner while fetching the genres. Alternative option.

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="ghost"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
