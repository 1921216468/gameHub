import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = "";
  score > 85
    ? (color = "green")
    : score > 60
    ? (color = "yellow")
    : (color = "red");
  return (
    <Badge fontSize="15px" paddingX={2} borderRadius={5} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
