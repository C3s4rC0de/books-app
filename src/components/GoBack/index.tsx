import Link from "next/link";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

type Props = {
  to: string;
};

const GoBack = ({ to }: Props) => {
  return (
    <Link href={to}>
      <a>
        <IconButton sx={{ color: "gray" }} aria-label="go back">
          <ArrowBack />
        </IconButton>
      </a>
    </Link>
  );
};

export default GoBack;
