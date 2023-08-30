import Typography from "@mui/material/Typography";

interface Props {
  pageTitle: String;
  titleSize: any;
}

function CTCTitle(props: Props) {
  const { pageTitle, titleSize } = props;
  return (
    <div>
      <Typography variant={titleSize} gutterBottom>
        {pageTitle}
      </Typography>
    </div>
  );
}

export default CTCTitle;
